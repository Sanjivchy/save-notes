
import React from "react";
import { Heading } from "./_components/heading";
import NavBar from "./_components/navBar";
export default function MarketingPage() {
  return (
    <div className="min-h-full flex flex-col">
      <NavBar />
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1">
        <Heading />
      </div>
      <div>
        footer
      </div>
    </div>
  );
}
