// Angel portfolio. Newest at the top. Used by /portfolio and the home proof band
// (the "companies backed" stat derives from this list's length).
export interface Company {
  name: string;
  sector: string;
  domain: string;
}

export const portfolio: Company[] = [
  { name: "Aura Finance", sector: "Embedded credit infrastructure", domain: "aurafinance.me" },
  { name: "Physical Robotics", sector: "Humanoid robotics", domain: "physicalrobotics.com" },
  { name: "Minerva Humanoids", sector: "Humanoid robotics (Oil & Gas, Defence)", domain: "minervahumanoids.com" },
  { name: "Novatron", sector: "Nuclear fusion energy", domain: "novatronfusion.com" },
  { name: "Ori", sector: "Sovereign cloud infrastructure", domain: "ori.co" },
  { name: "Blykalla", sector: "Nuclear SMR technology", domain: "blykalla.com" },
  { name: "Livity", sector: "Digital health services", domain: "livity.no" },
  { name: "OctaiPipe", sector: "Data center energy optimization", domain: "octaipipe.ai" },
  { name: "GrabrFi", sector: "Cross-border fintech & banking", domain: "grabrfi.com" },
  { name: "Intella", sector: "AI voice & conversational agents", domain: "intella.me" },
  { name: "Cognite", sector: "Industrial AI & data platforms", domain: "cognite.com" },
  { name: "SpaceX", sector: "Space launch & satellite systems", domain: "spacex.com" },
];
