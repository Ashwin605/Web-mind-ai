import type { Metadata } from "next";
import InteractiveLink from "@/components/InteractiveLink";

export const metadata: Metadata = {
  title: "Terms & Conditions — WEBMIND AI",
  description: "Terms and Conditions for WEBMIND AI",
};

export default function TermsPage() {
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
            Terms & Conditions
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
            By accessing WEBMIND AI courses and services, you agree to abide by our terms and conditions. These govern the use of our educational content, course enrollment process, and interactions with our learning platform.
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
              1. Acceptance of Terms
            </h2>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginBottom: 12,
            }}>
              By enrolling in any WEBMIND AI course, accessing our website, or using our educational services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you must not use our services.
            </p>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
            }}>
              We reserve the right to update or modify these terms at any time without prior notice. Your continued use of our services after any changes constitutes acceptance of the updated terms.
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
              2. Eligibility
            </h2>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginBottom: 12,
            }}>
              You must be at least 13 years of age to enroll in WEBMIND AI courses. If you are under 18, you must have parental or guardian consent to use our services.
            </p>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
            }}>
              By enrolling, you represent and warrant that you have the legal capacity to enter into this agreement and comply with these terms.
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
              3. Course Enrollment & Access
            </h2>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginBottom: 12,
            }}>
              <strong style={{ color: "#E5E5E5" }}>3.1 Registration:</strong> You must provide accurate and complete information during enrollment. You are responsible for maintaining the confidentiality of your account credentials.
            </p>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginBottom: 12,
            }}>
              <strong style={{ color: "#E5E5E5" }}>3.2 Course Access:</strong> Upon successful enrollment and payment, you will receive access to the course materials for the duration specified at the time of purchase. Access is personal and non-transferable.
            </p>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginBottom: 12,
            }}>
              <strong style={{ color: "#E5E5E5" }}>3.3 Account Sharing:</strong> Sharing your account credentials or course materials with others is strictly prohibited and may result in immediate termination of access without refund.
            </p>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
            }}>
              <strong style={{ color: "#E5E5E5" }}>3.4 Technical Requirements:</strong> You are responsible for ensuring you have the necessary technical equipment and internet connection to access course materials.
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
              4. Payment & Pricing
            </h2>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginBottom: 12,
            }}>
              <strong style={{ color: "#E5E5E5" }}>4.1 Course Fees:</strong> All course prices are listed in Indian Rupees (INR) and are subject to change without notice. The price you pay at enrollment will be honored for that specific course.
            </p>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginBottom: 12,
            }}>
              <strong style={{ color: "#E5E5E5" }}>4.2 Payment Methods:</strong> We accept payments through secure payment gateways. All payments must be completed before course access is granted.
            </p>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
            }}>
              <strong style={{ color: "#E5E5E5" }}>4.3 Taxes:</strong> All prices are inclusive of applicable taxes unless otherwise stated. You are responsible for any additional taxes or duties required in your jurisdiction.
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
              5. Intellectual Property Rights
            </h2>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginBottom: 12,
            }}>
              <strong style={{ color: "#E5E5E5" }}>5.1 Ownership:</strong> All course materials, including but not limited to videos, text, graphics, code, assignments, and downloadable resources, are the intellectual property of WEBMIND AI and are protected by copyright laws.
            </p>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginBottom: 12,
            }}>
              <strong style={{ color: "#E5E5E5" }}>5.2 License:</strong> You are granted a limited, non-exclusive, non-transferable license to access and use course materials solely for personal, educational purposes.
            </p>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
            }}>
              <strong style={{ color: "#E5E5E5" }}>5.3 Restrictions:</strong> You may not reproduce, distribute, modify, create derivative works, publicly display, republish, download, store, or transmit any course material except as permitted by WEBMIND AI in writing.
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
              6. User Conduct
            </h2>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginBottom: 12,
            }}>
              You agree to use WEBMIND AI services responsibly and in accordance with applicable laws. Prohibited activities include:
            </p>
            <ul style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginLeft: 20,
              marginBottom: 12,
            }}>
              <li>Harassment, abuse, or threatening behavior toward instructors or other students</li>
              <li>Attempting to gain unauthorized access to our systems or other users' accounts</li>
              <li>Uploading malicious code, viruses, or harmful software</li>
              <li>Misrepresenting yourself or providing false information</li>
              <li>Using our platform for any illegal or unauthorized purpose</li>
              <li>Scraping, data mining, or using automated systems to access our content</li>
            </ul>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
            }}>
              Violation of these rules may result in immediate termination of your account and access without refund.
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
              7. Disclaimers & Limitation of Liability
            </h2>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginBottom: 12,
            }}>
              <strong style={{ color: "#E5E5E5" }}>7.1 No Guarantees:</strong> While we strive to provide high-quality educational content, WEBMIND AI makes no guarantees regarding specific outcomes, job placement, income, or skill mastery from completing our courses.
            </p>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginBottom: 12,
            }}>
              <strong style={{ color: "#E5E5E5" }}>7.2 As-Is Basis:</strong> Our services are provided "as is" and "as available" without warranties of any kind, either express or implied.
            </p>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
            }}>
              <strong style={{ color: "#E5E5E5" }}>7.3 Liability Cap:</strong> To the maximum extent permitted by law, WEBMIND AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount you paid for the course.
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
              8. Termination
            </h2>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginBottom: 12,
            }}>
              We reserve the right to suspend or terminate your access to WEBMIND AI services at any time, without prior notice, for conduct that we believe violates these Terms & Conditions or is harmful to other users, us, or third parties, or for any other reason at our sole discretion.
            </p>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
            }}>
              Upon termination, your right to access course materials will cease immediately, and you will not be entitled to any refund of fees already paid, except as outlined in our Refund Policy.
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
              9. Governing Law & Dispute Resolution
            </h2>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
              marginBottom: 12,
            }}>
              These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms or your use of WEBMIND AI services shall be subject to the exclusive jurisdiction of the courts located in Hyderabad, India.
            </p>
            <p style={{
              color: "#A1A1AA",
              lineHeight: 1.7,
              fontSize: 14,
            }}>
              We encourage you to contact us directly to resolve any disputes amicably before pursuing legal action.
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
              If you have any questions about these Terms & Conditions, please contact us:
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
