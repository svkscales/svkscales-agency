import React from "react";
import Navbar from "@/components/Navbar";

export function generateMetadata() {
  return {
    title: "Cookie Policy | SVK Scales",
    description: "Cookie Policy for SVK Scales Studio.",
  };
}

export default function CookiePolicyPage() {
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
              Cookie <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Policy</span>
            </h1>
            <p className="text-gray-400 tracking-widest uppercase text-xs font-bold">
              Last updated: March 25, 2026
            </p>
          </div>

          <div className="space-y-12 text-sm md:text-base text-gray-300 leading-relaxed font-light">
            
            <section>
              <p>
                This Cookie Policy explains how william kenric davis (trading as SVK Scales) uses cookies and similar tracking technologies when you visit <span className="text-blue-400">svkscales.com</span>. It describes what these technologies are, why we use them, and your rights to control how they are used. In some cases, cookies may collect or be combined with personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">WHAT ARE COOKIES?</h2>
              <p>
                Cookies are small data files placed on your computer or mobile device when you visit a website. They are widely used to make websites work efficiently and to provide reporting information to website owners.
              </p>
              <p className="mt-4">
                <strong>First-party cookies</strong> are set by us (the website owner). <strong>Third-party cookies</strong> are set by other parties and may enable third-party features such as advertising, analytics, and interactive content. Third parties can recognise your device when it visits our site and other websites that use their cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">WHY DO WE USE COOKIES?</h2>
              <p>
                We use a combination of first- and third-party cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-4 text-gray-400">
                <li><strong>Essential cookies:</strong> Required for the website to function. These cannot be disabled.</li>
                <li><strong>Performance/analytics cookies:</strong> Help us understand how visitors interact with our site so we can improve the experience.</li>
                <li><strong>Advertising cookies:</strong> Used by third parties to serve targeted advertisements based on your browsing interests.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">HOW CAN YOU CONTROL COOKIES?</h2>
              
              <h3 className="text-lg font-bold text-gray-200 mb-2">Cookie Preference Centre</h3>
              <p>
                You have the right to accept or reject non-essential cookies. You can manage your preferences through the Cookie Preference Centre, accessible via the notification banner on our website. Essential cookies cannot be rejected as they are required to provide our services. Rejecting other cookies may limit certain features or areas of the website.
              </p>
              
              <h3 className="text-lg font-bold text-gray-200 mt-6 mb-2">Browser Controls</h3>
              <p>
                You can also set or amend your cookie preferences directly through your web browser. Instructions vary by browser — visit your browser's help menu for guidance. Cookie management is available for all major browsers including:
              </p>
              <ul className="list-disc pl-6 mt-4 grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-400">
                <li>Chrome</li>
                <li>Firefox</li>
                <li>Safari</li>
                <li>Edge</li>
                <li>Internet Explorer</li>
                <li>Opera</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">OPTING OUT OF TARGETED ADVERTISING</h2>
              <p>
                Most advertising networks offer an opt-out from interest-based advertising. For more information, visit:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
                <li><strong>Digital Advertising Alliance:</strong> <a href="https://aboutads.info" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition-colors">aboutads.info</a></li>
                <li><strong>Digital Advertising Alliance of Canada:</strong> <a href="https://youradchoices.ca" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition-colors">youradchoices.ca</a></li>
                <li><strong>European Interactive Digital Advertising Alliance:</strong> <a href="https://youronlinechoices.eu" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition-colors">youronlinechoices.eu</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">OTHER TRACKING TECHNOLOGIES</h2>
              
              <h3 className="text-lg font-bold text-gray-200 mb-2">Web Beacons</h3>
              <p>
                We may use web beacons (also called tracking pixels or clear gifs) — tiny graphic files with unique identifiers — to track user behaviour on our site and in emails. These help us monitor page traffic, measure the success of email marketing campaigns, and understand how users arrive at our site. Web beacons typically rely on cookies to function, so disabling cookies will impair their operation.
              </p>
              
              <h3 className="text-lg font-bold text-gray-200 mt-6 mb-2">Flash Cookies (Local Shared Objects)</h3>
              <p>
                We may use Flash Cookies (LSOs) to collect and store information about your use of our services, fraud prevention, and site operations. You can manage Flash Cookie storage through Adobe's Website Storage Settings Panel and Global Storage Settings Panel. Note that restricting Flash Cookies may affect the functionality of Flash-based features on our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">DO WE SERVE TARGETED ADVERTISING?</h2>
              <p>
                Third-party advertising partners may place cookies on your device to deliver relevant ads based on your visits to our site and other websites. This technology measures ad effectiveness using cookies or web beacons. The information collected does not directly identify you by name or contact details unless you have chosen to provide that information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">HOW OFTEN IS THIS POLICY UPDATED?</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for operational, legal, or regulatory reasons. We recommend checking this page periodically. The date at the top of this policy indicates when it was last revised.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-jakarta)] text-white mb-6 tracking-tight">FURTHER INFORMATION AND CONTACT</h2>
              <p>
                If you have any questions about our use of cookies or tracking technologies, please contact us:
              </p>
              <div className="mt-4 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md inline-block">
                <ul className="space-y-2 text-gray-300">
                  <li className="font-bold text-white">william kenric davis</li>
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
