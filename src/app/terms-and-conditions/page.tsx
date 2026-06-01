import { PageHeader } from "@/components/site/PageHeader";

export default function TermsAndConditions() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="Please read these terms and conditions carefully before using our services and website."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-px max-w-4xl mx-auto">
          <div className="prose prose-slate max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing or using the ALTA FOODS website, you agree to be bound by these Terms &
                Conditions. If you do not agree with any part of these terms, you are prohibited
                from using or accessing this site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">
                2. Intellectual Property Rights
              </h2>
              <p>
                All content, branding, designs, graphics, images, logos, and materials on this
                website are the intellectual property of ALTA FOODS or its licensors, protected by
                copyright, trademark, and other laws. You may not reproduce, distribute, or create
                derivative works without our express written permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">
                3. Product Specifications & Custom Orders
              </h2>
              <p>
                Our premium paper fruit cover bags are manufactured according to precise ecological
                and agricultural standards. While we strive to present accurate details, sizes,
                colors, and capabilities of our products, minor variations may occur during custom
                bulk manufacturing. Specifications are subject to change without prior notice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">4. Limitation of Liability</h2>
              <p>
                ALTA FOODS and its team shall not be held liable for any direct, indirect,
                incidental, consequential, or punitive damages resulting from your use of, or
                inability to use, our products or website. This includes, but is not limited to,
                crop failure or standard agricultural deviations beyond our control.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">5. Governing Law</h2>
              <p>
                These Terms & Conditions are governed by and construed in accordance with the laws
                of India, and you irrevocably submit to the exclusive jurisdiction of the courts
                located in Gujarat, India for any disputes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">6. Updates to Terms</h2>
              <p>
                We reserve the right to revise or update these terms at any time without notice. By
                continuing to use the website after changes are posted, you agree to be bound by the
                modified terms.
              </p>
              <p className="mt-4 text-xs italic">Last updated: May 19, 2026</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
