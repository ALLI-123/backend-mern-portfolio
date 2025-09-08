import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// POST: Save contact form submission
    router.post("/", async (req, res) => {
    try {
      const { name, email, message } = req.body;


       const newContact = new Contact({ name, email, message });
            await newContact.save();

                   res.status(201).json({ message: "✅ Submission saved to DB" });
                     } catch (err) {
                         console.error(err);
                             res.status(500).json({ message: "❌ Server error" });
                               }
                               });

                               export default router;

