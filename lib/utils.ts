import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const projects = [
  {
    title: "Natural Conversations",
    description:
      "Engage in fluid, human-like conversations with advanced language understanding capabilities.",
    link: "https://stripe.com",
  },
  {
    title: "Lightning Fast",
    description:
      "Get instant responses with our optimized AI processing for minimal latency.",
    link: "https://netflix.com",
  },
  {
    title: "Private & Secure",
    description:
      "Your conversations are encrypted and never stored without your permission.",
    link: "https://google.com",
  },
  {
    title: "Creative Assistant",
    description:
      "Generate ideas, content, and creative solutions for any project or challenge.A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Knowledge Base",
    description:
      "Access a vast knowledge base covering virtually any topic you need information on.",
    link: "https://amazon.com",
  },
  {
    title: "Personalized Experience",
    description:
      "The more you use it, the better it understands your preferences and needs.",
    link: "https://microsoft.com",
  },
];