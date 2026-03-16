import { db } from "./db";
import {
  inquiries,
  type CreateInquiryRequest,
  type InquiryResponse
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  createInquiry(inquiry: CreateInquiryRequest): Promise<InquiryResponse>;
  getInquiries(): Promise<InquiryResponse[]>;
}

export class DatabaseStorage implements IStorage {
  async createInquiry(inquiry: CreateInquiryRequest): Promise<InquiryResponse> {
    const [created] = await db.insert(inquiries)
      .values(inquiry)
      .returning();
    return created;
  }

  async getInquiries(): Promise<InquiryResponse[]> {
    return await db.select().from(inquiries);
  }
}

export const storage = new DatabaseStorage();
