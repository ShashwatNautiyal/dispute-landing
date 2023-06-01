import useNotionData from "@/utils/hooks/useNotionData";
import Notion from "@/utils/notion";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import { useState } from "react";

export default function IntegrationsPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const [search, setSearch] = useState("");
  const integrationsData = useNotionData(props.data);

  return (
    <main className="w-full pt-[72px] flex justify-center mb-52">
      <div className="flex flex-col items-center w-full max-w-[537px] text-[#494949]">
        <div className="text-center mb-6">
          <h2 className="font-medium text-[64px] leading-[70px] text-black mb-1 break-keep h-20">
            Connect. Protect.
          </h2>
          <p className="text-center px-[19.5px] text-[17px]">
            We support many of the popular payment processors. Connect yours
            now.
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
          <p className="text-[13px]">
            Don{"’"}t see one?{" "}
            <span className="text-[#187FE7] font-medium leading-[19.5px]">
              Tell us
            </span>
          </p>
        </div>
        <div className="flex flex-col max-w-[500px] w-full mt-12 gap-y-1">
          {/* Card 1 */}
          {integrationsData
            .filter(({ title }) =>
              title.toLowerCase().includes(search.toLowerCase())
            )
            .map(({ description, title, image }) => (
              <ConnectCard
                name={title}
                icon={image}
                key={title}
                description={description}
              />
            ))}
        </div>
      </div>
    </main>
  );
}

const ConnectCard: React.FC<{
  name: string;
  icon: string;
  description: string;
}> = ({ name, icon, description }) => {
  return (
    <>
      <div className="p-4 flex items-center gap-x-6 gap-y-1 hover:bg-[#F5F5F7] transition-colors duration-100 ease-in-out rounded-3xl w-full">
        <div className="flex-1 flex items-stretch gap-x-1">
          <Image
            unoptimized
            src={icon}
            height={48}
            width={48}
            className="aspect-square object-contain"
            alt={name}
          />
          <div className="flex-1 flex flex-col">
            <h4 className="text-[17px] font-medium">{name}</h4>
            <p className="text-[13px]">{description}</p>
          </div>
        </div>
        <div>
          <button className="bg-[#187FE7] text-white rounded-full px-4 py-2 text-[13px]">
            Connect
          </button>
        </div>
      </div>
      <hr className="bg-[#0000001F] w-full h-[1px]" />
    </>
  );
};

export const getStaticProps = async () => {
  const notion = new Notion();

  const integrationsId = process.env
    .NEXT_PUBLIC_NOTION_DB_INTEGRATIONS_ID as string;

  const data = await notion.getDatabaseResults(integrationsId);

  return {
    props: {
      data,
    },
  };
};
