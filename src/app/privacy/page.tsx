import type { Metadata } from "next";
import InteractiveLink from "@/components/InteractiveLink";

export const metadata: Metadata = {
  title: "Privacy Policy — WEBMIND AI",
  description: "Privacy Policy for WEBMIND AI",
};

export default function PrivacyPage() {
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
            Privacy Policy
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
            WEBMIND AI is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard any information you provide when you enroll in our courses or visit our website.
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
              1. Information We Collect
            </h2>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginBottom: 12,
            }}>
              <strong style={{ color: "#E5E5E5" }}>1.1 Personal Information:</strong> When you enroll in a course, we collect information such as your name, email address, phone number, and payment details. This information is necessary to process your enrollment and provide course access.
            </p>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginBottom: 12,
            }}>
              <strong style={{ color: "#E5E5E5" }}>1.2 Usage Data:</strong> We automatically collect information about how you interact with our website and courses, including IP address, browser type, device information, pages viewed, time spent on pages, and course progress.
            </p>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginBottom: 12,
            }}>
              <strong style={{ color: "#E5E5E5" }}>1.3 Cookies & Tracking:</strong> We use cookies and similar technologies to enhance your experience, analyze site usage, and personalize content. You can control cookie preferences through your browser settings.
            </p>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
            }}>
              <strong style={{ color: "#E5E5E5" }}>1.4 Communications:</strong> If you contact us via email, WhatsApp, or phone, we collect and store the contents of your communication to provide support and improve our services.
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
              2. How We Use Your Information
            </h2>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginBottom: 12,
            }}>
              We use the information we collect for the following purposes:
            </p>
            <ul style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginLeft: 20,
              marginBottom: 12,
            }}>
              <li>Processing course enrollments and payments</li>
              <li>Providing access to course materials and learning resources</li>
              <li>Sending course-related updates, announcements, and educational content</li>
              <li>Responding to your inquiries and providing customer support</li>
              <li>Improving our website, courses, and overall user experience</li>
              <li>Analyzing usage patterns and conducting research to enhance our offerings</li>
              <li>Detecting and preventing fraud or unauthorized access</li>
              <li>Complying with legal obligations and enforcing our terms</li>
            </ul>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
            }}>
              We will never sell your personal information to third parties for marketing purposes.
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
              3. Information Sharing & Disclosure
            </h2>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginBottom: 12,
            }}>
              <strong style={{ color: "#E5E5E5" }}>3.1 Service Providers:</strong> We may share your information with trusted third-party service providers who assist us in operating our website, processing payments, sending emails, or analyzing data. These providers are contractually obligated to protect your information and use it only for the purposes we specify.
            </p>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginBottom: 12,
            }}>
              <strong style={{ color: "#E5E5E5" }}>3.2 Legal Requirements:</strong> We may disclose your information if required by law, court order, or governmental regulation, or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others.
            </p>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
            }}>
              <strong style={{ color: "#E5E5E5" }}>3.3 Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity, subject to the same privacy protections outlined in this policy.
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
              4. Data Security
            </h2>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginBottom: 12,
            }}>
              We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginLeft: 20,
              marginBottom: 12,
            }}>
              <li>Encrypted data transmission using SSL/TLS protocols</li>
              <li>Secure payment processing through trusted payment gateways</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Restricted access to personal data on a need-to-know basis</li>
              <li>Password-protected user accounts with strong authentication</li>
            </ul>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
            }}>
              While we take reasonable precautions to protect your information, no method of transmission over the internet is 100% secure. You are responsible for maintaining the confidentiality of your account credentials.
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
              5. Data Retention
            </h2>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
            }}>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. After your course access expires or if you request account deletion, we will securely delete or anonymize your personal data, except where we must retain certain information for legal, regulatory, or legitimate business purposes.
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
              6. Your Rights & Choices
            </h2>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginBottom: 12,
            }}>
              You have the following rights regarding your personal information:
            </p>
            <ul style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginLeft: 20,
              marginBottom: 12,
            }}>
              <li><strong style={{ color: "#E5E5E5" }}>Access:</strong> You can request a copy of the personal information we hold about you</li>
              <li><strong style={{ color: "#E5E5E5" }}>Correction:</strong> You can update or correct inaccurate information in your account settings</li>
              <li><strong style={{ color: "#E5E5E5" }}>Deletion:</strong> You can request deletion of your personal data, subject to legal and contractual obligations</li>
              <li><strong style={{ color: "#E5E5E5" }}>Opt-Out:</strong> You can unsubscribe from marketing emails at any time using the unsubscribe link</li>
              <li><strong style={{ color: "#E5E5E5" }}>Data Portability:</strong> You can request a copy of your data in a structured, machine-readable format</li>
            </ul>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
            }}>
              To exercise any of these rights, please contact us using the information provided at the end of this policy.
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
              7. Children's Privacy
            </h2>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
            }}>
              Our services are intended for users aged 13 and above. If you are under 18, you must have parental or guardian consent to use WEBMIND AI. We do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13 without parental consent, we will take steps to delete that information promptly.
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
              8. Third-Party Links
            </h2>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
            }}>
              Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
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
              9. International Data Transfers
            </h2>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
            }}>
              WEBMIND AI operates primarily in India. If you access our services from outside India, your information may be transferred to and processed in India. By using our services, you consent to the transfer of your information to India and acknowledge that Indian data protection laws may differ from those in your country.
            </p>
          </div>

          {/* Section 10 */}
          <div style={{ marginBottom: 32 }}>
            <h2 style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: 700,
              marginBottom: 16,
              fontFamily: "'Space Grotesk', sans-serif",
            }}>
              10. Changes to This Policy
            </h2>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
            }}>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting the updated policy on this page with a new "Last Updated" date. We encourage you to review this policy periodically.
            </p>
          </div>

          {/* Section 11 */}
          <div style={{ marginBottom: 0 }}>
            <h2 style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: 700,
              marginBottom: 16,
              fontFamily: "'Space Grotesk', sans-serif",
            }}>
              11. Contact Us
            </h2>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginBottom: 12,
            }}>
              If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please contact us:
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
