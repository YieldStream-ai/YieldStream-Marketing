"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useReveal } from "../../components/useReveal";
import "../checkout.scss";

function SuccessContent() {
  useReveal();
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");

  return (
    <section className="checkout__success">
      <div className="container">
        <div className="checkout__success-content reveal">
          <div className="checkout__success-check">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="24" fill="#10b981" />
              <path
                d="M14 24l7 7 13-13"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="display-lg checkout__success-title">
            Welcome to YieldStream!
          </h1>
          <p className="text-lg checkout__success-sub">
            {plan === "founder"
              ? "You're in. Your founding rate is locked forever — welcome to YieldStream."
              : "Welcome to YieldStream. Your subscription is active — backed by our 30-day money-back guarantee."}{" "}
          </p>
          <div className="checkout__success-steps">
            <h3 className="checkout__success-steps-title">
              What happens next:
            </h3>
            <ol className="checkout__success-steps-list">
              <li>Check your email for login credentials</li>
              <li>Complete the guided onboarding (under 10 minutes)</li>
              <li>Upload your lender list and run your first AI-scored deal</li>
            </ol>
          </div>
          <div className="checkout__success-actions">
            <Link href="/" className="btn btn-primary btn-lg">
              Back to Home →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense>
      <SuccessContent />
    </Suspense>
  );
}
