import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  app.post("/api/contact", (req, res) => {
    console.log("Contact form submission:", req.body);
    // In a real app, send email or save to DB
    res.json({ success: true, message: "Message received" });
  });

  app.post("/api/careers/apply", (req, res) => {
    console.log("Job application submission:", req.body);
    res.json({ success: true, message: "Application received" });
  });

  app.post("/api/tenders/register", (req, res) => {
    console.log("Vendor registration submission:", req.body);
    res.json({ success: true, message: "Registration received" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
