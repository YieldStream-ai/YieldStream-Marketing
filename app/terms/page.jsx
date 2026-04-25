export const metadata = {
  title: 'Terms of Service | YieldStream',
  description: 'YieldStream Terms of Service, including our 30-day money-back guarantee and refund policy.',
};

export default function TermsPage() {
  return (
    <section style={{ padding: '80px 0 64px' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px', lineHeight: 1.75, fontSize: '1.02rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 8 }}>Terms of Service</h1>
        <p style={{ color: '#6b7a8d', marginBottom: 40 }}>Last updated: March 26, 2026</p>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 600, marginTop: 40, marginBottom: 12 }}>Refund Policy</h2>
        <p>
          YieldStream offers a 30-day money-back guarantee on all new subscriptions. If you are not satisfied with the
          platform for any reason, you may request a full refund within 30 days of your initial payment date by
          contacting us at{' '}
          <a href="mailto:support@yieldstream.ai" style={{ color: '#1f2937' }}>support@yieldstream.ai</a>.
          Refunds are issued to the original payment method and typically process within 5&ndash;10 business days.
        </p>
        <p>
          The money-back guarantee applies to your first billing period only and is available once per customer.
          Subsequent renewal payments are non-refundable. YieldStream reserves the right to deny refund requests where
          abuse of this policy is reasonably suspected.
        </p>
        <p>
          Cancellation of your subscription stops future billing but does not automatically trigger a refund. To request
          a refund, you must contact us directly within the 30-day window.
        </p>
      </div>
    </section>
  );
}
