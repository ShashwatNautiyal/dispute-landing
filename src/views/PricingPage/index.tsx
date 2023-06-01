import { useState } from "react";

export default function PricingPage() {
  return (
    <main className="w-full pt-[72px] flex justify-center mb-52">
      <div className="flex flex-col items-center w-full max-w-[607px] text-[#494949] gap-y-12">
        <div className="text-center px-[55px]">
          <h2 className="font-medium text-[64px] text-black mb-1">
            Simple and fair
          </h2>
          <p className="text-[17px]">
            Our pricing is tailored around usage so that we grow with you. It
            fits any sized business.
          </p>
        </div>
        <div className="bg-[#F5F5F7] p-10 rounded-2xl flex items-center gap-x-10">
          <div>
            <p className="text-[13px] mb-6">Our suggestion</p>
            <p className="text-[17px]">
              What&apos;s your monthly sales volume?
            </p>
            <p className="text-[21px]">$1K</p>
            {/* Slider */}
            <div className="my-6">
              <RangeInput />
            </div>
            <p className="text-[15px]">
              Based on your sales volume we suggest a free plan
            </p>
          </div>
          <div className="h-[131px] w-[1px] bg-[#0000001F]"></div>
          <div className="flex items-baseline max-w-[150px] w-full justify-end ">
            <span className="text-[48px]">$9</span>
            <span className="text-[19px]">/mo</span>
          </div>
        </div>
        <div>
          <h2 className="text-[33px] text-black text-center px-[55px]">
            Here&apos;s the breakdown. Seriously, only value.
          </h2>
        </div>
      </div>
    </main>
  );
}

const RangeInput: React.FC = () => {
  const [value, setValue] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value, 10));
  };

  return (
    <input
      type="range"
      min="0"
      max="100"
      value={value}
      onChange={handleSliderChange}
      className="range-input"
      style={{
        background: `linear-gradient(90deg, #000 ${value}%, #FFF ${value}%)`,
      }}
    />
  );
};
