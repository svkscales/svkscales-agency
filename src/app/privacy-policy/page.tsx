import React from "react";
import Navbar from "@/components/Navbar";

export function generateMetadata() {
  return {
    title: "Privacy Policy | SVK Scales",
    description: "Privacy Policy and Terms for SVK Scales Studio.",
  };
}

export default function PrivacyPolicyPage() {
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
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Policy</span>
            </h1>
            <p className="text-gray-400 tracking-widest uppercase text-xs font-bold">
              Last updated: March 25, 2026
            </p>
          </div>

          <div className="space-y-12 text-sm md:text-base text-gray-300 leading-relaxed font-light">
            
            <section>
              <p>
                This Privacy Notice applies to william kenric davis (doing business as SVK Scales) and describes how we collect, use, and share your personal information when you use our services, including when you:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
                <li>Visit our website at <span className="text-blue-400">svkscales.com</span></li>
                <li>Use our web design services to build your online presence</li>
                <li>Engage with us through marketing, events, or other related activities</li>
              </ul>
              <p className="mt-4">
                <strong>Questions or concerns?</strong> Contact us at <a href="mailto:svkscales@gmail.com" className="text-blue-400 hover:text-white transition-colors">svkscales@gmail.com</a>. If you disagree with our policies, please discontinue use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">1. WHAT INFORMATION DO WE COLLECT?</h2>
              <p>
                <strong>Personal information you provide to us:</strong> We collect information you voluntarily provide when contacting us or using our services, including:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-400 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <li>Names</li>
                <li>Email addresses</li>
                <li>Phone numbers</li>
                <li>Contact preferences</li>
              </ul>
              <p className="mt-4">
                We do not process sensitive personal information. All information you provide must be accurate and complete.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
              <p>
                We process your information to provide and improve our services, communicate with you, ensure security, and comply with applicable law. Specific purposes include:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-4 text-gray-400">
                <li><strong>Service delivery:</strong> To provide you with requested services.</li>
                <li><strong>Support:</strong> To respond to your inquiries and resolve issues.</li>
                <li><strong>Administrative communications:</strong> To send updates about our products, services, and policies.</li>
                <li><strong>Vital interests:</strong> To protect against harm where legally required.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">3. LEGAL BASES FOR PROCESSING</h2>
              <p>
                We only process your information when we have a valid legal reason to do so. Depending on your location, the applicable legal bases include:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
                <li><strong>Consent:</strong> You have given us permission to process your information for a specific purpose. You may withdraw consent at any time.</li>
                <li><strong>Contract performance:</strong> Processing is necessary to fulfill our contractual obligations to you.</li>
                <li><strong>Legal obligations:</strong> Processing is required for compliance with applicable laws.</li>
                <li><strong>Vital interests:</strong> Processing is necessary to protect you or a third party from harm.</li>
              </ul>
              <p className="mt-4">
                <strong>For EU/UK residents:</strong> The GDPR and UK GDPR require us to disclose these legal bases.
              </p>
              <p className="mt-2">
                <strong>For Canadian residents:</strong> We process your information only with your express or implied consent, except in limited cases permitted by law (e.g., fraud prevention, legal compliance, or emergency situations).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">4. WHEN AND WITH WHOM DO WE SHARE YOUR INFORMATION?</h2>
              <p>
                We do not sell or share your personal information. We may share your information in the following limited circumstance:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-400">
                <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of company assets, your information may be transferred to the new entity.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">5. COOKIES AND TRACKING TECHNOLOGIES</h2>
              <p>
                We may use cookies and similar tracking technologies (such as web beacons and pixels) to collect and store information when you use our services. These technologies help maintain security, fix bugs, save preferences, and support basic site functions.
              </p>
              <p className="mt-4">
                Third-party service providers may also use tracking technologies on our services for analytics and advertising purposes. You can manage cookie preferences through your browser settings. For more details, see our Cookie Notice at <span className="text-blue-400">svkscales.com/cookie-policy</span>.
              </p>
              <p className="mt-4">
                US residents may opt out of targeted advertising tracking as described in Section 11.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">6. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
              <p>
                We retain your personal information only as long as necessary to fulfill the purposes described in this policy, or as required by law. In no case will we retain your information for more than 1 year unless legally obligated to do so.
              </p>
              <p className="mt-4">
                When retention is no longer required, we will delete or anonymize your information, or securely isolate it if immediate deletion is not possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information. However, no electronic transmission over the internet or data storage system is 100% secure. We cannot guarantee against all unauthorized access, theft, or modification. Use our services within a secure environment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">8. DO WE COLLECT INFORMATION FROM MINORS?</h2>
              <p>
                No. We do not knowingly collect, solicit, or market to anyone under 18 years of age. By using our services, you confirm you are at least 18 years old (or the equivalent minimum age in your jurisdiction), or that a parent or guardian has consented on your behalf.
              </p>
              <p className="mt-4">
                If we discover we have collected data from a minor, we will deactivate the associated account and promptly delete the information. To report such a situation, contact us at <a href="mailto:svkscales@gmail.com" className="text-blue-400 hover:text-white transition-colors">svkscales@gmail.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">9. YOUR PRIVACY RIGHTS</h2>
              <p>
                Depending on your location, you may have rights including the right to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
                <li>Access and receive a copy of your personal information</li>
                <li>Request correction or erasure of your data</li>
                <li>Restrict or object to processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
                <li>Not be subject to automated decision-making</li>
              </ul>
              <p className="mt-4">
                EEA/UK residents may also file a complaint with their local data protection authority. Swiss residents may contact the Federal Data Protection and Information Commissioner.
              </p>
              <p className="mt-4">
                <strong>To exercise your rights:</strong> Visit <span className="text-blue-400">svkscales.com/contact</span> or email <a href="mailto:svkscales@gmail.com" className="text-blue-400 hover:text-white transition-colors">svkscales@gmail.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">10. DO-NOT-TRACK SIGNALS</h2>
              <p>
                Most browsers include a Do-Not-Track (DNT) setting. Because no uniform standard for recognizing DNT signals currently exists, we do not respond to them at this time. If a standard is adopted in the future, we will update this policy accordingly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">11. US STATE PRIVACY RIGHTS</h2>
              <p>
                Residents of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, and Virginia may have additional privacy rights.
              </p>
              <p className="mt-4">
                <strong>Categories of information collected in the past 12 months:</strong> Based on our operations, we have not collected personal data across any of the standard categories defined by state privacy laws (identifiers, commercial info, biometric data, geolocation, browsing history, etc.).
              </p>
              <p className="mt-4">
                <strong>Your rights include:</strong>
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
                <li>Right to know whether we process your data</li>
                <li>Right to access your data</li>
                <li>Right to correct inaccuracies</li>
                <li>Right to request deletion</li>
                <li>Right to a copy of your data</li>
                <li>Right to non-discrimination for exercising rights</li>
                <li>Right to opt out of targeted advertising, data sale, or profiling</li>
              </ul>
              <p className="mt-4">
                <strong>Request verification:</strong> We will verify your identity before processing requests. Authorized agents must provide written permission.
              </p>
              <p className="mt-2">
                <strong>Appeals:</strong> If we decline your request, you may appeal by emailing <a href="mailto:svkscales@gmail.com" className="text-blue-400 hover:text-white transition-colors">svkscales@gmail.com</a>. If your appeal is denied, you may file a complaint with your state attorney general.
              </p>
              <p className="mt-4 text-white/50 italic">
                We have not sold or shared any personal data in the past 12 months and will not do so in the future.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">12. INTERNATIONAL & REGIONAL PRIVACY RIGHTS</h2>
              <h3 className="text-lg font-bold text-gray-200 mb-2">Australia</h3>
              <p>
                We process your information in compliance with the Privacy Act 1988. You have the right to access or correct your personal information at any time. If you believe we are mishandling your data, you may file a complaint with the Office of the Australian Information Commissioner.
              </p>
              <p className="mt-2 text-white/50 italic">
                Failure to provide required personal information may affect our ability to deliver our services to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">13. UPDATES TO THIS NOTICE</h2>
              <p>
                We may update this Privacy Notice periodically. Updates will be reflected by the revised date at the top of this document. We may notify you of material changes by posting a notice or sending a direct notification. We encourage you to review this policy regularly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">14. HOW TO CONTACT US</h2>
              <p>
                If you have questions or comments about this policy, contact us:
              </p>
              <div className="mt-4 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md inline-block">
                <ul className="space-y-2 text-gray-300">
                  <li><strong>Email:</strong> <a href="mailto:svkscales@gmail.com" className="text-blue-400 hover:text-white transition-colors">svkscales@gmail.com</a></li>
                  <li><strong>Website:</strong> <span className="text-blue-400">svkscales.com/contact</span></li>
                  <li className="pt-4 font-bold text-white">Post:</li>
                  <li>Mr William K Davis</li>
                  <li>25 Huddersfield Road</li>
                  <li>Birstall WF17 9EF</li>
                  <li>United Kingdom</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">15. HOW TO REVIEW, UPDATE, OR DELETE YOUR DATA</h2>
              <p>
                To request access to, correction of, or deletion of your personal data, or to withdraw consent for our processing of your information, please visit <span className="text-blue-400">svkscales.com/contact</span>.
              </p>
              <p className="mt-4 text-white/50 italic">
                These rights may be limited in certain circumstances under applicable law.
              </p>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
