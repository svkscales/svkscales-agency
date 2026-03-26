import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export function generateMetadata() {
  return {
    title: "Terms of Service | SVK Scales",
    description: "Terms of Service and Legal agreements for SVK Scales.",
  };
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30">
      <Navbar />

      <div className="relative pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
        
        {/* Background Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0" />

        <div className="relative z-10 w-full prose prose-invert prose-blue max-w-none">
          
          <div className="mb-16 border-b border-white/10 pb-8">
            <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-jakarta)] font-black tracking-tighter mb-4">
              Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Service</span>
            </h1>
            <p className="text-gray-400 tracking-widest uppercase text-xs font-bold">
              Last updated: March 25, 2026
            </p>
          </div>

          <div className="space-y-12 text-sm md:text-base text-gray-300 leading-relaxed font-light">
            
            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">AGREEMENT TO LEGAL TERMS</h2>
              <p>
                SVK Scales is operated by Mr William K Davis, registered in the United Kingdom at 25 Huddersfield Road, Birstall WF17 9EF. We offer premium cinematic website design services for local businesses.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
                <li><strong>Phone:</strong> 07938908137</li>
                <li><strong>Email:</strong> <a href="mailto:svkscales@gmail.com" className="text-blue-400 hover:text-white transition-colors">svkscales@gmail.com</a></li>
                <li><strong>Post:</strong> 25 Huddersfield Road, Birstall WF17 9EF, UK</li>
              </ul>
              <p className="mt-4">
                By accessing or using our Services, you confirm you have read, understood, and agreed to these Legal Terms. If you do not agree, you must discontinue use immediately. These Terms apply to all users aged 18 and over. We will notify you of any changes via email; continued use after the effective date of changes constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">1. OUR SERVICES</h2>
              <p>
                Our Services are not intended for distribution in any jurisdiction where such use would be unlawful or require local registration. Users accessing our Services from outside the UK do so at their own initiative and are responsible for compliance with local laws. Our Services are not tailored for use under HIPAA, FISMA, or GLBA regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">2. INTELLECTUAL PROPERTY RIGHTS</h2>
              <h3 className="text-lg font-bold text-gray-200 mb-2">Our Intellectual Property</h3>
              <p>
                All content, source code, databases, software, designs, audio, video, text, photographs, graphics, trademarks, and logos on our Services are owned by or licensed to us and protected under copyright, trademark, and other applicable laws. Content is provided for personal, non-commercial, or internal business use only.
              </p>
              <p className="mt-4">
                We grant you a limited, non-exclusive, non-transferable, revocable licence to access our Services and download content for personal or internal business purposes only. No content may be copied, reproduced, redistributed, sold, or exploited commercially without our prior written consent. Any breach constitutes a material breach and your right to use our Services terminates immediately.
              </p>
              <h3 className="text-lg font-bold text-gray-200 mt-6 mb-2">Your Submissions</h3>
              <p>
                By submitting any feedback, ideas, or suggestions to us, you assign us full intellectual property rights over those submissions. We may use them for any lawful purpose without compensation to you. You are responsible for ensuring your submissions are accurate, original, non-infringing, and not harmful, illegal, or misleading. You bear sole responsibility for any losses arising from your submissions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">3. USER REPRESENTATIONS</h2>
              <p>
                By using our Services, you confirm that: (1) you have the legal capacity to agree to these Terms; (2) you are not a minor in your jurisdiction; (3) you will not access our Services through automated or non-human means; (4) you will not use our Services for illegal or unauthorised purposes; and (5) your use will not violate any applicable law or regulation. Providing false or incomplete information may result in account suspension or termination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">4. PURCHASES AND PAYMENT</h2>
              <p>
                We accept Visa, Mastercard, and Bank Transfer. All payments are in GBP. You agree to provide accurate and current billing information and authorise us to charge your payment method upon placing an order. We reserve the right to correct pricing errors, refuse orders, and limit quantities. Sales tax may apply where required.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">5. SUBSCRIPTIONS</h2>
              <h3 className="text-lg font-bold text-gray-200 mb-2">Billing and Renewal</h3>
              <p>
                Subscriptions renew automatically on a monthly basis unless cancelled. You consent to recurring charges without prior approval for each cycle.
              </p>
              <h3 className="text-lg font-bold text-gray-200 mt-6 mb-2">Cancellation</h3>
              <p>
                Cancel at any time by contacting us. Cancellation takes effect at the end of the current billing period. For support: <a href="mailto:svkscales@gmail.com" className="text-blue-400 hover:text-white transition-colors">svkscales@gmail.com</a>.
              </p>
              <h3 className="text-lg font-bold text-gray-200 mt-6 mb-2">Fee Changes</h3>
              <p>
                We may adjust subscription fees from time to time in accordance with applicable law and will notify you in advance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">6. REFUND POLICY</h2>
              <p>
                All sales are final. No refunds will be issued.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">7. PROHIBITED ACTIVITIES</h2>
              <p>
                You may not use our Services for any purpose other than their intended use. Prohibited activities include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
                <li>Systematically scraping or compiling data from our Services without permission</li>
                <li>Tricking, defrauding, or misleading us or other users</li>
                <li>Circumventing or interfering with security features</li>
                <li>Harassing, harming, or disparaging us, our staff, or other users</li>
                <li>Using our Services in violation of any applicable law or regulation</li>
                <li>Uploading or transmitting viruses, malware, or disruptive content</li>
                <li>Using automated tools, bots, scrapers, or data mining software</li>
                <li>Impersonating another user or person</li>
                <li>Attempting to reverse engineer, decompile, or copy our software</li>
                <li>Using our Services to compete with us or for unauthorised commercial purposes</li>
                <li>Collecting user data or email addresses for unsolicited communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">8. USER GENERATED CONTRIBUTIONS</h2>
              <p>
                If we provide you with the ability to post or submit content, you warrant that your contributions: are original and do not infringe any third-party rights; are not false, misleading, obscene, or unlawful; do not harass, threaten, or harm any person; do not violate any privacy, child protection, or applicable laws; and do not contain offensive material based on race, gender, nationality, or similar characteristics. Violations may result in termination of your access.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">9. CONTRIBUTION LICENCE</h2>
              <p>
                By submitting any contributions, you grant us the right to access, store, and use that information in accordance with our Privacy Policy. You retain ownership of your contributions and any associated intellectual property rights. We are not liable for any statements or representations made in your contributions. You agree to release us from any legal action arising from them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">10. THIRD-PARTY WEBSITES AND CONTENT</h2>
              <p>
                Our Services may contain links to third-party websites or content. We do not investigate, monitor, or endorse any third-party websites and are not responsible for their content, accuracy, policies, or practices. If you choose to access third-party sites, you do so at your own risk. We are not liable for any harm or loss resulting from third-party content or purchases made through third-party sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">11. SERVICES MANAGEMENT</h2>
              <p>
                We reserve the right to monitor our Services for violations of these Terms, take legal action against violators, restrict or remove content, and manage the Services as needed to protect our rights and ensure proper functioning. We may report violations to law enforcement authorities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">12. PRIVACY POLICY</h2>
              <p>
                Our Privacy Policy governs all data collected through our Services and is incorporated into these Legal Terms. By using our Services, you agree to its terms. Our Services are hosted in the United Kingdom. If you access them from outside the UK, you consent to the transfer and processing of your data in the UK.
              </p>
              <p className="mt-4">
                <strong>Privacy Policy:</strong> <Link href="/privacy-policy" className="text-blue-400 hover:text-white transition-colors">svkscales.com/privacy-policy</Link>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">13. TERM AND TERMINATION</h2>
              <p>
                These Terms remain in effect while you use our Services. We reserve the right to deny access, terminate your account, or block IP addresses at any time and for any reason, without notice or liability. If your account is terminated, you may not re-register under any name. We may also pursue civil, criminal, or injunctive remedies where appropriate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">14. MODIFICATIONS AND INTERRUPTIONS</h2>
              <p>
                We may change, suspend, or discontinue any part of our Services at any time without notice or liability. We do not guarantee uninterrupted availability and are not responsible for any loss or inconvenience caused by downtime, maintenance, or technical issues.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">15. GOVERNING LAW</h2>
              <p>
                These Terms are governed by the laws of the United Kingdom. EU consumers retain any protections provided under the mandatory laws of their country of residence. Both parties submit to the non-exclusive jurisdiction of the courts of Leeds, United Kingdom.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">16. DISPUTE RESOLUTION</h2>
              <h3 className="text-lg font-bold text-gray-200 mb-2">Informal Negotiations</h3>
              <p>
                Before initiating formal proceedings, parties agree to attempt to resolve any dispute informally for at least 30 days following written notice.
              </p>
              <h3 className="text-lg font-bold text-gray-200 mt-6 mb-2">Binding Arbitration</h3>
              <p>
                Unresolved disputes shall be settled by a single arbitrator under the Arbitration and Internal Rules of the European Court of Arbitration. The seat of arbitration shall be Leeds, United Kingdom. Proceedings shall be conducted in English under UK substantive law.
              </p>
              <h3 className="text-lg font-bold text-gray-200 mt-6 mb-2">Restrictions</h3>
              <p>
                Arbitration is limited to disputes between the parties individually. No class actions, consolidated proceedings, or representative claims are permitted.
              </p>
              <h3 className="text-lg font-bold text-gray-200 mt-6 mb-2">Exceptions</h3>
              <p>
                The above does not apply to disputes involving intellectual property rights, theft, piracy, privacy violations, or claims for injunctive relief, which may be brought in courts of competent jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">17. CORRECTIONS</h2>
              <p>
                Our Services may contain typographical errors, inaccuracies, or outdated information. We reserve the right to correct any such errors and update content at any time without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">18. DISCLAIMER</h2>
              <p className="uppercase text-xs tracking-wider leading-relaxed text-gray-400 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
                The Services are provided on an as-is and as-available basis. To the fullest extent permitted by law, we disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement. We are not liable for errors, personal injury, property damage, unauthorised access to our systems, service interruptions, viruses, or any loss arising from use of the Services. We do not endorse or warrant any third-party products or Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">19. LIMITATIONS OF LIABILITY</h2>
              <p className="uppercase text-xs tracking-wider leading-relaxed text-gray-400 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
                To the maximum extent permitted by law, we and our directors, employees, and agents shall not be liable for any direct, indirect, consequential, incidental, special, or punitive damages, including lost profits or data. Our total liability to you for any reason shall not exceed £999. Some jurisdictions do not allow these limitations, so they may not apply to you in full.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">20. INDEMNIFICATION</h2>
              <p>
                You agree to defend, indemnify, and hold us harmless — including our officers, agents, partners, and employees — from any loss, claim, or demand (including reasonable legal fees) arising from: your use of our Services; breach of these Terms; your representations and warranties; violation of third-party rights; or any harmful acts toward other users. We reserve the right to assume exclusive control of any matter you are required to indemnify, at your expense.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">21. USER DATA</h2>
              <p>
                We retain data you transmit to our Services to manage performance. While we perform regular backups, you are solely responsible for all data you submit. We are not liable for any loss or corruption of your data, and you waive any right of action against us in such cases.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">22. ELECTRONIC COMMUNICATIONS AND SIGNATURES</h2>
              <p>
                Using our Services, sending emails, or completing online forms constitutes electronic communication. You agree that electronic notices, agreements, and transactions satisfy any requirement for written communication. You consent to the use of electronic signatures and records and waive any rights requiring original signatures or non-electronic delivery.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">23. CALIFORNIA USERS AND RESIDENTS</h2>
              <p>
                If a complaint with us is not satisfactorily resolved, California residents may contact the Complaint Assistance Unit of the Division of Consumer Services, California Department of Consumer Affairs, 1625 North Market Blvd., Suite N 112, Sacramento, CA 95834. Tel: (800) 952-5210 or (916) 445-1254.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">24. MISCELLANEOUS</h2>
              <p>
                These Terms constitute the entire agreement between you and us. Our failure to enforce any provision is not a waiver of that right. If any provision is found unlawful or unenforceable, the remaining provisions remain in full effect. We may assign our rights and obligations at any time. You waive any defences based on the electronic form of these Terms or the absence of physical signatures.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">25. CONTACT US</h2>
              <p>
                For complaints or further information about our Services:
              </p>
              <div className="mt-4 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md inline-block">
                <ul className="space-y-2 text-gray-300">
                  <li className="font-bold text-white">Mr William K Davis</li>
                  <li>25 Huddersfield Road</li>
                  <li>Birstall WF17 9EF</li>
                  <li className="mb-4">United Kingdom</li>
                  <li><strong>Phone:</strong> 07938908137</li>
                  <li><strong>Email:</strong> <a href="mailto:svkscales@gmail.com" className="text-blue-400 hover:text-white transition-colors">svkscales@gmail.com</a></li>
                </ul>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
