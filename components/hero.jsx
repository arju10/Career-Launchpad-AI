"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-center items-center text-center text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/banner.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 px-4 space-y-6">
        <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl text-primary">
          Your AI Career Coach for <br /> Professional Success
        </h1>
        <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-200">
          Advance your career with personalized guidance, interview prep, and
          AI-powered tools for job success.
        </p>

        <div className="flex justify-center flex-wrap gap-4 pt-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="https://youtube.com" target="_blank">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
