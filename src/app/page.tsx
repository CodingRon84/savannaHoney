// src\app\pages.tsx

import React from "react";
import Navbar from "/src/app/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 uppercase">
        <h1>Welcome to Savannah Honey</h1>
        <h2 className="lowercase"> https://www.instagram.com/savannahhoney_</h2>
      </div>
    </>
  );
}
