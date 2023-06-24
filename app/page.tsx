"use client";
import useLLM from "usellm";
import { useState } from "react";
import Compsci from "./compsci/page";

export default function Home() {
 
  return (
    <div className="min-h-screen mx-auto my-8 max-w-4xl">
      <h1 className="text-center mb-4 text-2xl">Do Now Generator</h1>
      <Compsci />
    </div>
  );
}
