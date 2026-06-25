// Substack post index for the "Asymmetric" newsletter.
// Used by the home page teaser and the /blog (Writing) page.
// To keep current, append new entries at the top (newest first).
export interface Post {
  date: string;  // display format YYYY.MM.DD
  title: string;
  url: string;
}

export const posts: Post[] = [
  {
    date: "2026.01.02",
    title: "Automated Investment Research, Learning Systems & Agent Engineering",
    url: "https://proesch.substack.com/p/friday-50-automated-investment-research",
  },
  {
    date: "2025.12.31",
    title: "My Favourite Books of 2025",
    url: "https://proesch.substack.com/p/my-favourite-books-of-2025",
  },
  {
    date: "2025.11.21",
    title: "AI Cyber Attacks, Tech That Shaped the World & Startup Founders",
    url: "https://proesch.substack.com/p/friday-50-ai-cyber-attacks-tech-that",
  },
  {
    date: "2025.09.19",
    title: "How to Be Proactive in the Age of AI — When Agency Becomes Key",
    url: "https://proesch.substack.com/p/friday-50-how-to-be-proactive-in",
  },
  {
    date: "2025.09.08",
    title: "10 Books I Wish I Read in My 20s",
    url: "https://proesch.substack.com/p/bonus-10-books-i-wish-i-read-in-my",
  },
];

export const SUBSTACK_URL = "https://proesch.substack.com";
