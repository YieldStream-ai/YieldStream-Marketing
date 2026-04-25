"use client";

import React, { useMemo, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { cn } from "@/lib/utils";

/**
 * MinimalDotMatrix
 * ----------------
 * A calm, white-themed dot grid rendered via WebGL fragment shader.
 *
 * Key idea: the dots are rendered everywhere, but a soft radial mask
 * inside the shader fades them out into the flat background color,
 * creating a "porthole" / spotlight effect where the grid only
 * blinks through in one area and dissolves at the edges.
 *
 * Usage:
 *   <section className="relative h-screen w-full">
 *     <MinimalDotMatrix className="absolute inset-0" />
 *     <div className="relative z-10">...hero content...</div>
 *   </section>
 *
 *   // Off-center, tighter porthole:
 *   <MinimalDotMatrix maskCenter={[0.3, 0.4]} maskRadius={0.25} maskSoftness={0.3} />
 */

type Props = {
  className?: string;
  /** CSS / hex background color — dots fade into this */
  background?: string;
  /** RGB 0-255 for the dots */
  dotColor?: [number, number, number];
  /** Pixel size of each dot */
  dotSize?: number;
  /** Pixel size of each grid cell */
  totalSize?: number;
  /** Max opacity for dots at the center of the mask (0-1) */
  maxOpacity?: number;
  /** Seconds for the intro radial reveal to complete */
  revealDuration?: number;
  /**
   * Center of the visible porthole, normalized screen coords.
   * [0.5, 0.5] = center. [0, 0] = top-left. [1, 1] = bottom-right.
   */
  maskCenter?: [number, number];
  /**
   * Radius of the fully-visible core, as a fraction of screen height.
   * 0.35 ≈ core spans ~35% of the screen height.
   */
  maskRadius?: number;
  /** Width of the soft fade-out edge (same units as maskRadius) */
  maskSoftness?: number;
  /** Enable subtle time-based shimmer on the dots */
  shimmer?: boolean;
  /** Show dots edge-to-edge with no porthole mask */
  fullWidth?: boolean;
};

export const MinimalDotMatrix: React.FC<Props> = ({
  className,
  background = "#ffffff",
  dotColor = [20, 20, 20],
  dotSize = 2,
  totalSize = 28,
  maxOpacity = 0.22,
  revealDuration = 1.8,
  maskCenter = [0.5, 0.5],
  maskRadius = 0.35,
  maskSoftness = 0.35,
  shimmer = true,
  fullWidth = false,
}) => {
  // Push the mask radius well outside the viewport so every dot is visible
  const resolvedRadius = fullWidth ? 2.0 : maskRadius;
  const resolvedSoftness = fullWidth ? 0.0 : maskSoftness;

  return (
    <div
      className={cn("relative h-full w-full overflow-hidden", className)}
      style={{ background }}
    >
      <Canvas
        className="absolute inset-0 h-full w-full"
        gl={{ antialias: true, alpha: true }}
      >
        <DotPlane
          dotColor={dotColor}
          dotSize={dotSize}
          totalSize={totalSize}
          maxOpacity={maxOpacity}
          revealDuration={revealDuration}
          maskCenter={maskCenter}
          maskRadius={resolvedRadius}
          maskSoftness={resolvedSoftness}
          shimmer={shimmer}
        />
      </Canvas>
    </div>
  );
};

type PlaneProps = Required<Omit<Props, "className" | "background">>;

const DotPlane: React.FC<PlaneProps> = ({
  dotColor,
  dotSize,
  totalSize,
  maxOpacity,
  revealDuration,
  maskCenter,
  maskRadius,
  maskSoftness,
  shimmer,
}) => {
  const { size, viewport } = useThree();
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const dpr = viewport.dpr || 1;

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_resolution: {
        value: new THREE.Vector2(size.width * dpr, size.height * dpr),
      },
      u_color: {
        value: new THREE.Vector3(
          dotColor[0] / 255,
          dotColor[1] / 255,
          dotColor[2] / 255,
        ),
      },
      u_dot_size: { value: dotSize },
      u_total_size: { value: totalSize },
      u_max_opacity: { value: maxOpacity },
      u_reveal_duration: { value: revealDuration },
      u_mask_center: { value: new THREE.Vector2(maskCenter[0], maskCenter[1]) },
      u_mask_radius: { value: maskRadius },
      u_mask_softness: { value: maskSoftness },
      u_shimmer: { value: shimmer ? 1 : 0 },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  // Sync uniforms when props or viewport change
  useEffect(() => {
    if (!matRef.current) return;
    const u = matRef.current.uniforms;
    (u.u_resolution.value as THREE.Vector2).set(
      size.width * dpr,
      size.height * dpr,
    );
    (u.u_color.value as THREE.Vector3).set(
      dotColor[0] / 255,
      dotColor[1] / 255,
      dotColor[2] / 255,
    );
    u.u_dot_size.value = dotSize;
    u.u_total_size.value = totalSize;
    u.u_max_opacity.value = maxOpacity;
    u.u_reveal_duration.value = revealDuration;
    (u.u_mask_center.value as THREE.Vector2).set(maskCenter[0], maskCenter[1]);
    u.u_mask_radius.value = maskRadius;
    u.u_mask_softness.value = maskSoftness;
    u.u_shimmer.value = shimmer ? 1 : 0;
  }, [
    size.width,
    size.height,
    dpr,
    dotColor,
    dotSize,
    totalSize,
    maxOpacity,
    revealDuration,
    maskCenter,
    maskRadius,
    maskSoftness,
    shimmer,
  ]);

  useFrame(({ clock }) => {
    if (matRef.current) {
      matRef.current.uniforms.u_time.value = clock.getElapsedTime();
    }
  });

  const vertexShader = /* glsl */ `
    precision mediump float;
    uniform vec2 u_resolution;
    out vec2 fragCoord;
    void main() {
      gl_Position = vec4(position.xy, 0.0, 1.0);
      fragCoord = (position.xy + vec2(1.0)) * 0.5 * u_resolution;
      fragCoord.y = u_resolution.y - fragCoord.y;
    }
  `;

  const fragmentShader = /* glsl */ `
    precision mediump float;
    in vec2 fragCoord;

    uniform float u_time;
    uniform vec2 u_resolution;
    uniform vec3 u_color;
    uniform float u_dot_size;
    uniform float u_total_size;
    uniform float u_max_opacity;
    uniform float u_reveal_duration;
    uniform vec2 u_mask_center;
    uniform float u_mask_radius;
    uniform float u_mask_softness;
    uniform int u_shimmer;

    out vec4 fragColor;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
    }

    void main() {
      vec2 st = fragCoord.xy;

      // Center the grid so dots align regardless of resolution
      st.x -= abs(floor((mod(u_resolution.x, u_total_size) - u_dot_size) * 0.5));
      st.y -= abs(floor((mod(u_resolution.y, u_total_size) - u_dot_size) * 0.5));

      vec2 cell = vec2(floor(st.x / u_total_size), floor(st.y / u_total_size));

      // Carve a dot out of each grid cell
      float inDotX = 1.0 - step(u_dot_size / u_total_size, fract(st.x / u_total_size));
      float inDotY = 1.0 - step(u_dot_size / u_total_size, fract(st.y / u_total_size));
      float dotMask = inDotX * inDotY;
      dotMask *= step(0.0, st.x) * step(0.0, st.y);

      // Stable per-cell variation so not every dot is identical
      float variation = 0.55 + 0.45 * hash(cell);
      float baseOpacity = u_max_opacity * variation;

      // ---- Porthole mask ----
      vec2 uv = fragCoord / u_resolution;
      float aspect = u_resolution.x / u_resolution.y;
      vec2 d = uv - u_mask_center;
      d.x *= aspect; // keep the mask circular, not elliptical
      float distToMaskCenter = length(d);

      // 1.0 inside the core, 0.0 past the soft edge, smooth in between
      float portHole = 1.0 - smoothstep(
        u_mask_radius,
        u_mask_radius + u_mask_softness,
        distToMaskCenter
      );

      // ---- Intro reveal: dots bloom outward from the mask center ----
      float t = clamp(u_time / u_reveal_duration, 0.0, 1.0);
      float revealDist = distToMaskCenter / (u_mask_radius + u_mask_softness);
      float reveal = smoothstep(revealDist - 0.15, revealDist + 0.05, t);

      // ---- Optional subtle shimmer ----
      float shimmer = 1.0;
      if (u_shimmer == 1) {
        float phase = hash(cell) * 6.2831;
        shimmer = 0.75 + 0.25 * sin(u_time * 1.2 + phase);
      }

      float opacity = dotMask * baseOpacity * portHole * reveal * shimmer;

      // Premultiplied alpha — blends cleanly over parent background
      fragColor = vec4(u_color * opacity, opacity);
    }
  `;

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        glslVersion={THREE.GLSL3}
        transparent
        depthWrite={false}
        blending={THREE.NormalBlending}
      />
    </mesh>
  );
};
