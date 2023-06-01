import { useState } from "react";

const useNotionData = (results: any) => {
  let pageData: Record<string, string>[] = [];

  results.map((item: any, index: number) => {
    let _data: Record<string, string> = {};

    Object.entries(item.properties)
      .sort()
      .map(([key, _value]) => {
        const value = _value as any;
        const type = value.type;
        let content = "";

        switch (type) {
          case "files":
            content = value[type][0].file.url;
            break;
          case "rich_text":
            content = value[type][0].plain_text;
            break;
          case "title":
            content = value[type][0].plain_text;
            break;
        }

        _data[key] = content;
      });

    pageData.push({ ..._data });
  });

  return pageData;
};

export default useNotionData;
