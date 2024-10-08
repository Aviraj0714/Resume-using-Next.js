"use client";

import React, { useState, useEffect } from 'react';
import { Grid } from '@/components/grid';
import { Hero } from '@/components/hero';
import Approch from '@/components/ui/approch';
import Experience from '@/components/ui/experience';
import { FloatingNav } from '@/components/ui/floating-navbar';
import Footer from '@/components/ui/footer';
import Recentproject from '@/components/ui/recentproject';
import { navItems } from '@/data';

const Loading = () => (
  <div className="loader flex flex-col justify-center items-center h-screen relative">
    <div data-glitch="" className="glitch invert">
      <img src="/aviraj-logo.png" alt="Aviraj Logo" />
    </div>
    <div data-glitch="Loading..." className="glitch mt-4">
      Loading...
    </div>
  </div>
);

const Home = () => {
  const [loading, setLoading] = useState(true);

  // Simulate a delay or fetching process with useEffect
  useEffect(() => {
    // Set a timeout to remove the loading screen after some time (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust this timeout duration to control the preloader time

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  // If loading, show the preloader
  if (loading) {
    return <Loading />;
  }

  // Otherwise, show the main content
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Recentproject />
        <Experience />
        <Approch />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
