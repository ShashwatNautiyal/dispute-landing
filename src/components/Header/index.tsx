import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-3 border-b border-[#1D1D1F1F] leading-[14.3px] text-[13px] h-[60px]">
      <div className="flex items-center gap-x-8">
        <Image priority src="/logo.svg" alt="Logo" width={36} height={36} />
        <div className="flex items-center gap-x-6">
          <Link href="#">Platform</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/integrations">Integrations</Link>
          <div className="items-center flex cursor-pointer">
            <span className="w-[42px]">Learn</span>
            <Image src="/chevron-down.svg" width={20} height={20} alt="learn" />
          </div>
        </div>
      </div>
      <div className="flex items-cetner gap-x-8">
        <div className="flex items-center gap-x-8">
          <Link href="#">Company</Link>
          <Link href="#">Support</Link>
        </div>
        <button className="py-2 px-3 w-[96px] h-[36px] text-white bg-[#187FE7] rounded-[24px]">
          Start Free
        </button>
      </div>
    </div>
  );
};
