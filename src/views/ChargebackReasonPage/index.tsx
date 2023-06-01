import Sidebar from "@/components/Sidebar";
import useNotionData from "@/utils/hooks/useNotionData";
import Notion from "@/utils/notion";
import { InferGetStaticPropsType } from "next";
import { useState } from "react";

export default function ChargebackReasonCodesPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const [search, setSearch] = useState("");
  const chargebackData = useNotionData(props.data);

  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full pt-[72px] flex justify-center mb-52">
        <div className="flex flex-col items-center w-full max-w-[537px] text-[#494949]">
          <div className="text-center mb-6">
            <h2 className="font-medium text-[64px] leading-[70.4px] text-black mb-1 break-keep">
              Chargeback reason codes
            </h2>
            <p className="text-center px-[19.5px] text-[17px] leading-[25.5px]">
              Chargebacks occur for a reason. Find out why and obtain greater
              insight to protect your business.
            </p>
          </div>
          <div className="max-w-[392px] w-full flex flex-col gap-y-2 justify-center items-center">
            <input
              type="text"
              className="w-full rounded-full border border-[#D2D2D7] p-4 placeholder:text-[#86868B] placeholder:text-[15px]"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="mt-12 flex flex-col gap-y-1 max-w-[510px] w-full">
            {chargebackData
              .filter(({ title }) =>
                title.toLowerCase().includes(search.toLowerCase())
              )
              .map(({ title }) => (
                <ReasonCard title={title} key={title} />
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}

const ReasonCard: React.FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <div className="p-4 flex items-center gap-x-6 hover:bg-[#F5F5F7] transition-colors duration-100 ease-in-out rounded-2xl w-full">
        <div className="text-[17px] font-medium leading-[24px] flex-1">
          <span>{title}</span>
        </div>
        <button className="py-2 px-3 text-[#187FE7] text-[13px] border rounded-full border-[#187FE7]">
          Read more
        </button>
      </div>
      <hr className="bg-[#0000001F] w-full h-[1px]" />
    </>
  );
};

export const getStaticProps = async () => {
  const notion = new Notion();

  const chargebackId = process.env
    .NEXT_PUBLIC_NOTION_DATABASE_CHARGEBACK_ID as string;

  const data = await notion.getDatabaseResults(chargebackId);

  return {
    props: {
      data,
    },
  };
};
