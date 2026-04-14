import { MinimalDotMatrix } from "./MinimalDotMatrix";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      <MinimalDotMatrix
        className="absolute inset-0"
        background="#ffffff"
        dotColor={[20, 20, 20]}
        maskCenter={[0.5, 0.45]}
        maskRadius={0.3}
        maskSoftness={0.4}
      />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-6xl font-bold tracking-tight text-black">
          Your headline
        </h1>
      </div>
    </section>
  );
}
