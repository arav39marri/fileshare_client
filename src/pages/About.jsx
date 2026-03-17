import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Inline SVG icons to avoid @heroicons/react dependency
const BoltIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
  </svg>
);
const ShieldCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
  </svg>
);
const ServerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v.75a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25v-.75m19.5 0a2.25 2.25 0 0 0-2.25-2.25H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 19.409a2.25 2.25 0 0 1-1.07-1.916V17.25m19.5-9v9m-19.5-9v9" />
  </svg>
);


export default function About() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0B0F19] font-body text-gray-300">
      <Navbar />
      <main className="flex-grow px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl font-display">
            About FileShare
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-400 mb-12">
            FileShare was born out of a simple need: sharing files quickly, securely, and without the hassle of creating accounts or dealing with complex permissions. We believe transferring data should be as easy as sharing a link.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-4xl sm:mt-12 lg:mt-16">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-white font-display">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <BoltIcon className="h-6 w-6 text-blue-400" aria-hidden="true" />
                </div>
                Lightning Fast
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-400">
                Experience unparalleled speeds. We leverage modern web technologies to ensure your files upload and download at the maximum speed your connection allows.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-white font-display">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <ShieldCheckIcon className="h-6 w-6 text-purple-400" aria-hidden="true" />
                </div>
                Secure & Private
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-400">
                Your privacy matters. Rooms are secured with short-lived OTPs, and files are automatically deleted after a set period. We don't hold onto your data longer than necessary.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-white font-display">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <ServerIcon className="h-6 w-6 text-emerald-400" aria-hidden="true" />
                </div>
                Robust Infrastructure
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-400">
                Built on reliable cloud infrastructure, ensuring high uptime and availability. Whether you're sharing a small document or a large archive, we've got you covered.
              </dd>
            </div>
          </dl>
        </div>

        <div className="mx-auto max-w-4xl mt-24 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm sm:p-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white mb-4 font-display">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Our mission is to democratize file sharing. We want to empower individuals and professionals alike to collaborate and exchange information seamlessly, bridging the gap between devices and networks with intuitive tools that just work.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
