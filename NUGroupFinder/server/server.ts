// server/server.ts
import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(cors()); // Allow requests from your frontend
app.use(express.json()); // To parse request bodies

// Example Route: Get all courses
app.get('/api/courses', async (req, res) => {
  const courses = await prisma.course.findMany();
  res.json(courses);
});

// TODO: Add routes for user auth, sessions, etc.

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});