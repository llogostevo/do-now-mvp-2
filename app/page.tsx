"use client";
import useLLM from "usellm";
import { useState } from "react";
import Compsci from "./compsci/page";

export default function Home() {
 
  return (
    <div className="min-h-screen mx-auto my-8 max-w-4xl">
      <Compsci />
    </div>
  );
}
