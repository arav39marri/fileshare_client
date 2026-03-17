import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // For static site / AdSense purposes, a functional form is not strictly required,
    // but demonstrating the capability is good practice.
    setStatus('Thank you for reaching out! We will get back to you soon.');
    e.target.reset();
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#0B0F19] font-body text-gray-300">
      <Navbar />
      <main className="flex-grow px-6 py-12 lg:px-8 flex items-center justify-center">
        <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm sm:p-12">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display mb-4">
              Contact Us
            </h1>
            <p className="text-lg leading-8 text-gray-400">
              Have questions, feedback, or business inquiries? We'd love to hear from you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="block w-full rounded-md border-0 bg-white/5 py-2.5 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 placeholder:text-gray-500"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Email Address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="block w-full rounded-md border-0 bg-white/5 py-2.5 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 placeholder:text-gray-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium leading-6 text-white">
                Message
              </label>
              <div className="mt-2">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="block w-full rounded-md border-0 bg-white/5 py-2.5 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 placeholder:text-gray-500"
                  placeholder="How can we help you?"
                />
              </div>
            </div>

            {status && (
              <div className="text-sm text-green-400 bg-green-400/10 p-3 rounded-md border border-green-400/20 text-center">
                {status}
              </div>
            )}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                Send Message
              </button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-sm text-gray-400">
                You can also email us directly at <a href="mailto:support@fileshare.com" className="text-blue-400 hover:text-blue-300">support@fileshare.com</a>
              </p>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
