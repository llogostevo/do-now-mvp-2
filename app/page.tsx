"use client";
import useLLM from "usellm";
import { useState } from "react";
import Subject from "./subject/page";
export default function Home() {
 
  return (
    <div className="min-h-screen mx-auto my-8 max-w-4xl">
      <Subject />
    </div>
  );
}
