import { PageHeader } from "@/components/site/PageHeader";

export default function PrivacyPolicy() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy"
        title="Privacy Policy"
        subtitle="We value your privacy and are committed to protecting your personal data."
      />
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container-px max-w-4xl mx-auto">
          <div className="prose prose-slate max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">1. Information We Collect</h2>
              <p>
                We collect personal information that you voluntarily provide to us when submitting inquiries through our contact form or subscribing to our newsletter. This information may include your name, email address, phone number, company name, and any details shared within your messages.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Respond to your inquiries, quote requests, and crop-protection requirements.</li>
                <li>Send updates, newsletters, and promotional information (only if you have opt-in subscribed).</li>
                <li>Analyze website usage and enhance our customer service experience.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">3. Data Security & Storage</h2>
              <p>
                We implement appropriate security measures to maintain the safety of your personal information when you enter, submit, or access your details. Your data is stored securely and is only accessible by authorized personnel.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">4. Third-Party Services</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, such as EmailJS for processing contact form submissions, as long as those parties agree to keep this information confidential.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">5. Cookies</h2>
              <p>
                Our website may use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">6. Contacting Us</h2>
              <p>
                If you have any questions regarding this Privacy Policy, you may contact us using the details below:
              </p>
              <p className="mt-2 font-semibold text-foreground">
                ALTA FOODS<br />
                Email: hello@altafoods.in<br />
                Phone: +91 98765 43210
              </p>
              <p className="mt-4 text-xs italic">Last updated: May 19, 2026</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
