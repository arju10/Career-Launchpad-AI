import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({
  id: "career-launchpad-ai",
  name: "Career Launchpad AI",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
