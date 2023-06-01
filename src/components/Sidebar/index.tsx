import Image from "next/image";
import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    <div className="w-[236px] px-2 py-4 bg-[#F5F5F7] text-[#1D1D1F] flex flex-col gap-8 h-[calc(100vh-60px)]">
      {Object.entries(sidebarData).map(([key, value]) => (
        <div key={key}>
          <div className="text-xs text-[#494949] px-2 py-[2px]">{key}</div>
          <div className="flex flex-col gap-[2px] mt-[2px]">
            {value.map(({ title, href, icon }) => (
              <Link href={href} key={title}>
                <div className="flex px-2 py-1 gap-1 hover:bg-[#E4E4E7] rounded-[4px]">
                  <Image
                    priority
                    src={icon}
                    alt="Question Mark"
                    width={20}
                    height={20}
                  />
                  <div className="text-[13px]">{title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const sidebarData = {
  Info: [
    {
      title: "Blog",
      href: "/blog",
      icon: "/read-cv.svg",
    },
    {
      title: "Compare Us",
      href: "/compare-us",
      icon: "/compare.svg",
    },
    {
      title: "Industries",
      href: "/industries",
      icon: "/factory.svg",
    },
    {
      title: "Chargeback codes",
      href: "/chargeback-reason-codes",
      icon: "/question-mark.svg",
    },
  ],
  Tools: [
    {
      title: "Bin Checker",
      href: "/bin-checker",
      icon: "/credit-card.svg",
    },
    {
      title: "Loss calculator",
      href: "/loss-calculator",
      icon: "/calculator.svg",
    },
  ],
};

export default Sidebar;
