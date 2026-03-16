import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.programs.list.path, async (req, res) => {
    const programs = await storage.getPrograms();
    res.json(programs);
  });

  app.get(api.news.list.path, async (req, res) => {
    const news = await storage.getNews();
    res.json(news);
  });

  // Seed database initially
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingPrograms = await storage.getPrograms();
  if (existingPrograms.length === 0) {
    await storage.createProgram({
      title: "Business Administration Diploma",
      category: "School of Business",
      description: "Learn the fundamentals of business, from accounting to marketing, to prepare for a successful career.",
      imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
    });
    await storage.createProgram({
      title: "Software Development Diploma",
      category: "School of Technology",
      description: "Gain hands-on experience in coding, software architecture, and modern development practices.",
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
    });
    await storage.createProgram({
      title: "Practical Nursing Diploma",
      category: "School of Health",
      description: "Prepare to become a licensed practical nurse with essential clinical skills and knowledge.",
      imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
    });
    await storage.createProgram({
      title: "Early Childhood Education",
      category: "School of Community Studies",
      description: "Shape the minds of tomorrow through our comprehensive ECE program.",
      imageUrl: "https://images.unsplash.com/photo-1587691592099-24045742c181?auto=format&fit=crop&q=80&w=800"
    });
  }

  const existingNews = await storage.getNews();
  if (existingNews.length === 0) {
    await storage.createNewsItem({
      title: "St Mary's Announces New Tech Hub",
      summary: "A state-of-the-art facility for technology students will be opening next fall.",
      date: "October 15, 2023",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
    });
    await storage.createNewsItem({
      title: "Record Enrollment for Fall Semester",
      summary: "We are thrilled to welcome our largest incoming class in history.",
      date: "September 5, 2023",
      imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800"
    });
    await storage.createNewsItem({
      title: "Alumni Success: From Student to CEO",
      summary: "Read the inspiring journey of our 2018 Business Administration graduate.",
      date: "August 20, 2023",
      imageUrl: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800"
    });
  }
}
