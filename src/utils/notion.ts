import { Client } from "@notionhq/client";

class Notion {
  private notion: Client;

  constructor() {
    this.notion = new Client({
      auth: process.env.NEXT_PUBLIC_NOTION_SECRET,
    });
  }

  async getDatabaseResults(databaseId: string) {
    const response = await this.notion.databases.query({
      database_id: databaseId,
    });

    return response.results;
  }
}

export default Notion;
