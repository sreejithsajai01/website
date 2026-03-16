import { programs, news, type Program, type InsertProgram, type NewsItem, type InsertNews } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getPrograms(): Promise<Program[]>;
  getProgram(id: number): Promise<Program | undefined>;
  createProgram(program: InsertProgram): Promise<Program>;
  
  getNews(): Promise<NewsItem[]>;
  getNewsItem(id: number): Promise<NewsItem | undefined>;
  createNewsItem(newsItem: InsertNews): Promise<NewsItem>;
}

export class DatabaseStorage implements IStorage {
  async getPrograms(): Promise<Program[]> {
    return await db.select().from(programs);
  }

  async getProgram(id: number): Promise<Program | undefined> {
    const [program] = await db.select().from(programs).where(eq(programs.id, id));
    return program;
  }

  async createProgram(program: InsertProgram): Promise<Program> {
    const [newProgram] = await db.insert(programs).values(program).returning();
    return newProgram;
  }

  async getNews(): Promise<NewsItem[]> {
    return await db.select().from(news);
  }

  async getNewsItem(id: number): Promise<NewsItem | undefined> {
    const [newsItem] = await db.select().from(news).where(eq(news.id, id));
    return newsItem;
  }

  async createNewsItem(newsItem: InsertNews): Promise<NewsItem> {
    const [newNewsItem] = await db.insert(news).values(newsItem).returning();
    return newNewsItem;
  }
}

export const storage = new DatabaseStorage();
