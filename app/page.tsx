"use client";
import useLLM from "usellm";
import { useState } from "react";

export default function Home() {
 
  return (
    <div className="min-h-screen mx-auto my-8 max-w-4xl">
      <h1 className="text-center mb-4 text-2xl">Do Now Generator</h1>
        <h2>Userguide:</h2>
        <p>Select your course from the links above</p>
        <p>Copy a specification point into the topic</p>
        <p>Press submit and wait for a question</p>
      
    </div>
  );
}
