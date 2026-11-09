import type { Metadata } from "next";
import InteractiveLink from "@/components/InteractiveLink";

export const metadata: Metadata = {
  title: "Refund Policy — WEBMIND AI",
  description: "Refund Policy for WEBMIND AI",
};

export default function RefundPage() {
  return (
    <div style={{ background: "#050509", minHeight: "100vh" }}>
      <header style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        padding: "16px 24px",
        background: "rgba(5,5,9,0.9)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <a href="/" style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          width: "fit-content",
          textDecoration: "none",
        }}>
          <img
            src="/images/webmind-logo.svg"
            alt="WEBMIND AI"
            width="160"
            height="40"
            style={{ objectFit: "contain" }}
          />
        </a>
      </header>

      <main style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: "60px 20px",
      }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{
            display: "inline-flex",
            padding: "8px 16px",
            borderRadius: 999,
            fontSize: 11,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "#8B5CF6",
            background: "rgba(139,92,246,0.08)",
            border: "1px solid rgba(139,92,246,0.2)",
            marginBottom: 24,
          }}>
            Legal
          </div>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "#fff",
            fontWeight: 800,
            fontSize: "clamp(32px, 8vw, 48px)",
            lineHeight: 1.1,
            marginBottom: 16,
            letterSpacing: "-0.02em",
          }}>
            Refund Policy
          </h1>
          <p style={{ color: "#71717A", fontSize: 14, lineHeight: 1.6 }}>
            Effective November 9, 2026
          </p>
        </div>

        <div style={{
          padding: 32,
          borderRadius: 16,
          background: "#10101A",
          border: "1px solid rgba(255,255,255,0.07)",
        }}>
          <p style={{
            color: "#A1A1AA",
            lineHeight: 1.7,
            fontSize: 15,
            marginBottom: 32,
          }}>
            WEBMIND AI takes course quality seriously. Our refund policy outlines the conditions under which a student may request a refund after enrollment and payment.
          </p>

          {/* Last Updated */}
          <div style={{
            padding: 12,
            borderRadius: 8,
            background: "rgba(139,92,246,0.05)",
            border: "1px solid rgba(139,92,246,0.15)",
            marginBottom: 32,
          }}>
            <p style={{ color: "#8B5CF6", fontSize: 13, fontWeight: 600 }}>
              Last Updated: November 9, 2026
            </p>
          </div>

          {/* Section 1 */}
          <div style={{ marginBottom: 32 }}>
            <h2 style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: 700,
              marginBottom: 16,
              fontFamily: "'Space Grotesk', sans-serif",
            }}>
              1. Refund Eligibility Period
            </h2>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginBottom: 12,
            }}>
              <strong style={{ color: "#E5E5E5" }}>1.1 Standard Refund Window:</strong> You may request a full refund within <strong style={{ color: "#E5E5E5" }}>7 days</strong> of enrollment, provided you have accessed less than 20% of the course content. This allows you to evaluate the course quality and ensure it meets your expectations.
            </p>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginBottom: 12,
            }}>
              <strong style={{ color: "#E5E5E5" }}>1.2 Course Progress Limit:</strong> Refund requests are only eligible if you have completed less than 20% of the course modules. Once you exceed this threshold, the refund window closes, as substantial educational value has been delivered.
            </p>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
            }}>
              <strong style={{ color: "#E5E5E5" }}>1.3 Technical Issues:</strong> If you experience technical difficulties that prevent you from accessing course materials, please contact us immediately. We will work to resolve the issue, and if it cannot be resolved within a reasonable timeframe, you may be eligible for a refund regardless of the standard eligibility period.
            </p>
          </div>

          {/* Section 2 */}
          <div style={{ marginBottom: 32 }}>
            <h2 style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: 700,
              marginBottom: 16,
              fontFamily: "'Space Grotesk', sans-serif",
            }}>
              2. Non-Refundable Circumstances
            </h2>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginBottom: 12,
            }}>
              Refunds will <strong style={{ color: "#E5E5E5" }}>not</strong> be granted in the following situations:
            </p>
            <ul style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginLeft: 20,
              marginBottom: 12,
            }}>
              <li>More than 7 days have passed since enrollment</li>
              <li>You have completed more than 20% of the course content</li>
              <li>You have downloaded or copied course materials (videos, PDFs, code resources)</li>
              <li>You violated our Terms & Conditions, including sharing account credentials or course content</li>
              <li>You changed your mind about pursuing the subject matter after the eligibility period</li>
              <li>You enrolled in a discounted, promotional, or bundled course (special terms apply)</li>
              <li>You completed the course and received a certificate of completion</li>
            </ul>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
            }}>
              These restrictions ensure fair access to quality education while preventing misuse of the refund policy.
            </p>
          </div>

          {/* Section 3 */}
          <div style={{ marginBottom: 32 }}>
            <h2 style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: 700,
              marginBottom: 16,
              fontFamily: "'Space Grotesk', sans-serif",
            }}>
              3. How to Request a Refund
            </h2>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginBottom: 12,
            }}>
              To request a refund, please follow these steps:
            </p>
            <div style={{
              padding: 16,
              borderRadius: 8,
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.05)",
              marginBottom: 12,
            }}>
              <p style={{ color: "#E5E5E5", fontSize: 14, marginBottom: 8, fontWeight: 600 }}>
                Step 1: Contact Us
              </p>
              <p style={{ color: "#A1A1AA", fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>
                Send an email to <strong style={{ color: "#8B5CF6" }}>ashwinsrichandra2008@gmail.com</strong> with the subject line "Refund Request" or contact us via WhatsApp at <strong style={{ color: "#8B5CF6" }}>+91 8919188400</strong>.
              </p>
              <p style={{ color: "#E5E5E5", fontSize: 14, marginBottom: 8, fontWeight: 600 }}>
                Step 2: Provide Required Information
              </p>
              <p style={{ color: "#A1A1AA", fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>
                Include your full name, registered email address, course name, enrollment date, and reason for the refund request.
              </p>
              <p style={{ color: "#E5E5E5", fontSize: 14, marginBottom: 8, fontWeight: 600 }}>
                Step 3: Await Confirmation
              </p>
              <p style={{ color: "#A1A1AA", fontSize: 14, lineHeight: 1.6 }}>
                Our team will review your request within 3-5 business days and notify you of the approval or denial via email.
              </p>
            </div>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
            }}>
              Please ensure your request is submitted within the eligibility period. Late requests will not be considered unless exceptional circumstances apply.
            </p>
          </div>

          {/* Section 4 */}
          <div style={{ marginBottom: 32 }}>
            <h2 style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: 700,
              marginBottom: 16,
              fontFamily: "'Space Grotesk', sans-serif",
            }}>
              4. Refund Processing Time
            </h2>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginBottom: 12,
            }}>
              <strong style={{ color: "#E5E5E5" }}>4.1 Approval Timeline:</strong> Once your refund request is approved, the refund will be processed within 5-7 business days.
            </p>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginBottom: 12,
            }}>
              <strong style={{ color: "#E5E5E5" }}>4.2 Payment Method:</strong> Refunds will be issued to the original payment method used during enrollment. Depending on your bank or payment provider, it may take an additional 5-10 business days for the refund to reflect in your account.
            </p>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
            }}>
              <strong style={{ color: "#E5E5E5" }}>4.3 Confirmation:</strong> You will receive an email confirmation once the refund has been processed. If you do not see the refund in your account within the expected timeframe, please contact your bank or payment provider.
            </p>
          </div>

          {/* Section 5 */}
          <div style={{ marginBottom: 32 }}>
            <h2 style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: 700,
              marginBottom: 16,
              fontFamily: "'Space Grotesk', sans-serif",
            }}>
              5. Partial Refunds
            </h2>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginBottom: 12,
            }}>
              In certain exceptional circumstances, WEBMIND AI may offer a partial refund at its sole discretion. Examples include:
            </p>
            <ul style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginLeft: 20,
              marginBottom: 12,
            }}>
              <li>Extended technical issues that significantly disrupted your learning experience</li>
              <li>Course content substantially differing from the description provided at enrollment</li>
              <li>Personal emergencies or unforeseen life events (documentation may be required)</li>
            </ul>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
            }}>
              Partial refund amounts will be determined based on the percentage of course content accessed and the specific circumstances involved. These decisions are made on a case-by-case basis.
            </p>
          </div>

          {/* Section 6 */}
          <div style={{ marginBottom: 32 }}>
            <h2 style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: 700,
              marginBottom: 16,
              fontFamily: "'Space Grotesk', sans-serif",
            }}>
              6. Promotional & Discounted Courses
            </h2>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
            }}>
              Courses purchased during promotional periods, with discount codes, or as part of a bundle may have different refund terms. These will be clearly stated at the time of purchase. In general, deeply discounted courses (more than 50% off) may have a shorter refund window (e.g., 3 days instead of 7 days) or may be non-refundable. Please review the specific terms before enrolling.
            </p>
          </div>

          {/* Section 7 */}
          <div style={{ marginBottom: 32 }}>
            <h2 style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: 700,
              marginBottom: 16,
              fontFamily: "'Space Grotesk', sans-serif",
            }}>
              7. Course Access After Refund
            </h2>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
            }}>
              Once a refund is approved and processed, your access to the course materials will be immediately revoked. You will no longer be able to view videos, download resources, or access any course-related content. If you wish to re-enroll at a later date, you will need to purchase the course again at the current listed price.
            </p>
          </div>

          {/* Section 8 */}
          <div style={{ marginBottom: 32 }}>
            <h2 style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: 700,
              marginBottom: 16,
              fontFamily: "'Space Grotesk', sans-serif",
            }}>
              8. Dispute Resolution
            </h2>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
            }}>
              If your refund request is denied and you believe the decision was made in error, you may submit an appeal by emailing us with additional information or clarification. We will review your appeal and provide a final decision within 5-7 business days. WEBMIND AI's decision on refund requests is final and binding.
            </p>
          </div>

          {/* Section 9 */}
          <div style={{ marginBottom: 32 }}>
            <h2 style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: 700,
              marginBottom: 16,
              fontFamily: "'Space Grotesk', sans-serif",
            }}>
              9. Changes to This Policy
            </h2>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
            }}>
              WEBMIND AI reserves the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting on this page. The refund policy in effect at the time of your enrollment will govern any refund requests, regardless of subsequent updates.
            </p>
          </div>

          {/* Section 10 */}
          <div style={{ marginBottom: 0 }}>
            <h2 style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: 700,
              marginBottom: 16,
              fontFamily: "'Space Grotesk', sans-serif",
            }}>
              10. Contact Information
            </h2>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginBottom: 12,
            }}>
              If you have questions about this Refund Policy or need assistance with a refund request, please contact us:
            </p>
            <div style={{
              padding: 16,
              borderRadius: 8,
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.05)",
            }}>
              <p style={{ color: "#E5E5E5", fontSize: 14, marginBottom: 8 }}>
                <strong>Email:</strong> ashwinsrichandra2008@gmail.com
              </p>
              <p style={{ color: "#E5E5E5", fontSize: 14, marginBottom: 8 }}>
                <strong>Phone:</strong> +91 8919188400
              </p>
              <p style={{ color: "#E5E5E5", fontSize: 14 }}>
                <strong>WhatsApp:</strong> +91 8919188400
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 32 }}>
          <InteractiveLink href="/">
            ← Back to home
          </InteractiveLink>
        </div>
      </main>
    </div>
  );
}
