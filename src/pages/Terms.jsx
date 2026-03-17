import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0B0F19] font-body text-gray-300">
      <Navbar />
      <main className="flex-grow px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm sm:p-12 text-left">
          <h1 className="mb-8 text-3xl font-bold tracking-tight text-white sm:text-4xl text-center font-display">
            Terms & Conditions
          </h1>
          <div className="space-y-6 text-sm sm:text-base leading-relaxed">
            <p>Welcome to FileShare!</p>
            <p>
              These terms and conditions outline the rules and regulations for the use of FileShare's Website.
            </p>
            <p>
              By accessing this website we assume you accept these terms and conditions. Do not continue to use FileShare if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Cookies</h2>
            <p>
              We employ the use of cookies. By accessing FileShare, you agreed to use cookies in agreement with the FileShare's Privacy Policy.
            </p>
            <p>
              Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">License</h2>
            <p>
              Unless otherwise stated, FileShare and/or its licensors own the intellectual property rights for all material on FileShare. All intellectual property rights are reserved. You may access this from FileShare for your own personal use subjected to restrictions set in these terms and conditions.
            </p>
            <p>You must not:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Republish material from FileShare</li>
              <li>Sell, rent or sub-license material from FileShare</li>
              <li>Reproduce, duplicate or copy material from FileShare</li>
              <li>Redistribute content from FileShare</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Acceptable Use</h2>
            <p>
              Our file sharing service is designed to help users share files quickly and easily. However, you agree not to use our service to:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Share illegal, copyrighted (without permission), or inappropriate content.</li>
              <li>Distribute malware, viruses, or any other harmful code.</li>
              <li>Engage in any activity that disrupts or interferes with our servers or networks.</li>
            </ul>
            <p>
              We reserve the right to delete any files and ban any users who violate these terms without prior notice.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Disclaimer</h2>
            <p>
              To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>limit or exclude our or your liability for death or personal injury;</li>
              <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
              <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
              <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
            </ul>
            <p>
              As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
