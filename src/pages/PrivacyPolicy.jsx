import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0B0F19] font-body text-gray-300">
      <Navbar />
      <main className="flex-grow px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm sm:p-12 text-left">
          <h1 className="mb-8 text-3xl font-bold tracking-tight text-white sm:text-4xl text-center font-display">
            Privacy Policy
          </h1>
          <div className="space-y-6 text-sm sm:text-base leading-relaxed">
            <p>
              At FileShare, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by FileShare and how we use it.
            </p>
            
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Log Files</h2>
            <p>
              FileShare follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Cookies and Web Beacons</h2>
            <p>
              Like any other website, FileShare uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Google DoubleClick DART Cookie</h2>
            <p>
              Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" className="text-blue-400 hover:underline" target="_blank" rel="noreferrer">https://policies.google.com/technologies/ads</a>
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Privacy Policies</h2>
            <p>
              You may consult this list to find the Privacy Policy for each of the advertising partners of FileShare.
            </p>
            <p>
              Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on FileShare, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
            </p>
            <p>
              Note that FileShare has no access to or control over these cookies that are used by third-party advertisers.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Third Party Privacy Policies</h2>
            <p>
              FileShare's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
            </p>
            <p>
              You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Consent</h2>
            <p>
              By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
