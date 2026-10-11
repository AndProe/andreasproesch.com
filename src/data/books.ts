// Reading recommendations, grouped by category. Generated from the master
// spreadsheet (Books.xlsx); covers live in public/images/books/<s>.jpg.
export interface Book {
  t: string; // title
  a: string; // author
  s: string; // cover slug
  /**
   * Amazon ASIN of a print edition (= its ISBN-10), valid on amazon.com and
   * amazon.ae alike. Books without one render unlinked.
   */
  asin?: string;
}

export interface BookCategory {
  name: string;
  books: Book[];
}

export const categories: BookCategory[] = [
  {
    name: "Tech and Futurism",
    books: [
      { t: "The Inevitable", a: "Kevin Kelly", s: "the-inevitable", asin: "0143110373" },
      { t: "Boom: Bubbles and the End of Stagnation", a: "Byrne Hobart", s: "boom", asin: "1953953476" },
      { t: "Bold", a: "Peter Diamandis", s: "bold", asin: "1476709580" },
      { t: "How to Create a Mind", a: "Ray Kurzweil", s: "how-to-create-a-mind", asin: "0143124048" },
      { t: "The Singularity is Near", a: "Ray Kurzweil", s: "singularity-near", asin: "0143037889" },
      { t: "Chip War", a: "Chris Miller", s: "chip-war", asin: "1982172010" },
      { t: "Clean Code", a: "Robert C. Martin", s: "clean-code", asin: "0132350882" },
      { t: "The Coming Wave", a: "Mustafa Suleyman", s: "the-coming-wave", asin: "0593728173" },
      { t: "The Second Machine Age", a: "Erik Brynjolfsson & Andrew McAfee", s: "the-second-machine-age", asin: "0393350649" },
      { t: "How We Got To Now", a: "Steven Johnson", s: "how-we-got-to-now", asin: "1594633932" },
    ],
  },
  {
    name: "Startups & Angel Investing",
    books: [
      { t: "Blitzscaling", a: "Reid Hoffman", s: "blitzscaling", asin: "0008303630" },
      { t: "How Google Works", a: "Eric Schmidt", s: "how-google-works", asin: "1455582328" },
      { t: "Seven Powers: The Foundations of Business Strategy", a: "Hamilton Helmer", s: "seven-powers", asin: "0998116319" },
      { t: "Angel", a: "Jason Calacanis", s: "angel", asin: "0062560700" },
      { t: "The Cold Start Problem", a: "Andrew Chen", s: "the-cold-start-problem", asin: "0062969749" },
      { t: "Amp It Up", a: "Frank Slootman", s: "amp-it-up", asin: "1119836115" },
      { t: "BUILD", a: "Tony Fadell", s: "build", asin: "0063046067" },
      { t: "Startup Boards", a: "Brad Feld", s: "startup-boards", asin: "111985928X" },
      { t: "The Startup Owner's Manual", a: "Steve Blank and Bob Dorf", s: "the-startup-owners-manual", asin: "1119690684" },
      { t: "Escaping the Build Trap", a: "Melissa Perri", s: "escaping-the-build-trap", asin: "149197379X" },
      { t: "Product Management in Practice", a: "Matt LeMay", s: "product-management-in-practice", asin: "1098119738" },
      { t: "Angel Investing", a: "David Rose", s: "angel-investing", asin: "139433141X" },
      { t: "Zero to IPO", a: "Frederic Kerrest", s: "zero-to-ipo", asin: "1264277660" },
      { t: "Aiming High", a: "Atsuo Inoue", s: "aiming-high", asin: "1529338611" },
    ],
  },
  {
    name: "Finance, Venture Capital, Investing & Trading",
    books: [
      { t: "Reminiscences of a Stock Operator", a: "Edwin Lefevre", s: "reminiscences-of-a-stock-operator", asin: "0471059706" },
      { t: "Pioneering Portfolio Management", a: "David Swensen", s: "pioneering-portfolio-management", asin: "1416544690" },
      { t: "A Man For All Markets", a: "Edward O. Thorp", s: "a-man-for-all-markets", asin: "0812979907" },
      { t: "Real Options", a: "Martha Amram and Nalin Kulatilaka", s: "real-options", asin: "0875848451" },
      { t: "Venture Deals", a: "Brad Feld", s: "venture-deals", asin: "1119594820" },
      { t: "VC - An American History", a: "Tom Nicholas", s: "vc-american-history", asin: "0674248260" },
      { t: "The Power Law", a: "Sebastian Mallaby", s: "power-law", asin: "0593491785" },
      { t: "The Venture Mindset", a: "Ilya Strebulaev", s: "venture-mindset", asin: "0593714237" },
    ],
  },
  {
    name: "Energy & Commodities",
    books: [
      { t: "Trillion Dollar Baby", a: "Paul Cleary", s: "trillion-dollar-baby", asin: "1785901001" },
      { t: "Crude Volatility", a: "Robert McNally", s: "crude-volatility", asin: "0231178158" },
      { t: "The Quest", a: "Daniel Yergin", s: "the-quest", asin: "0143121944" },
      { t: "The Smartest Guys in the Room", a: "Bethany McLean", s: "the-smartest-guys-in-the-room", asin: "1591846609" },
      { t: "How the World Really Works", a: "Vaclav Smil", s: "how-world-works", asin: "0241989671" },
      { t: "Volt Rush", a: "Henry Sanderson", s: "volt-rush", asin: "0861546199" },
      { t: "Material World", a: "Ed Conway", s: "material-world", asin: "0593467426" },
    ],
  },
  {
    name: "Strategy and Management",
    books: [
      { t: "The Goal", a: "Eliyahu M. Goldratt", s: "the-goal", asin: "0884271951" },
      { t: "Business Model You", a: "Alexander Osterwalder", s: "business-model-you", asin: "1118156315" },
      { t: "One Million Followers", a: "Brendan Kane", s: "one-million-followers", asin: "1946885371" },
      { t: "$100M Leads", a: "Alex Hormozi", s: "100m-leads", asin: "1737475774" },
      { t: "Oversubscribed", a: "Daniel Priestley", s: "oversubscribed", asin: "0857086197" },
      { t: "Entrepreneur Revolution", a: "Daniel Priestley", s: "entrepreneur-revolution", asin: "085708416X" },
      { t: "Key Person of Influence", a: "Daniel Priestley", s: "key-person-of-influence", asin: "178133109X" },
      { t: "Misbehaving", a: "Richard Thaler", s: "misbehaving", asin: "039335279X" },
      { t: "Thinking in Bets", a: "Annie Duke", s: "thinking-bets", asin: "0735216371" },
      { t: "The Signal and the Noise", a: "Nate Silver", s: "the-signal-and-the-noise", asin: "0143125087" },
      { t: "Nudge", a: "Richard Thaler", s: "nudge", asin: "014313700X" },
      { t: "Never Split the Difference", a: "Chris Voss", s: "never-split-the-difference", asin: "0062407805" },
      { t: "The Culture Map", a: "Erin Meyer", s: "the-culture-map", asin: "1610392760" },
    ],
  },
  {
    name: "Financial History",
    books: [
      { t: "When Genius Failed", a: "Roger Lowenstein", s: "when-genius-failed", asin: "0375758259" },
      { t: "The Ascent of Money", a: "Niall Ferguson", s: "the-ascent-of-money", asin: "0143116177" },
      { t: "The Man Who Solved the Market", a: "Gregory Zuckerman", s: "the-man-who-solved-the-market", asin: "073521798X" },
      { t: "Stress Test", a: "Timothy Geithner", s: "stress-test", asin: "0804138613" },
      { t: "Principles for Dealing with the Changing World Order", a: "Ray Dalio", s: "principles-for-dealing-with-the-changing-world-order", asin: "1982160276" },
    ],
  },
  {
    name: "Space, Maths, and Science",
    books: [
      { t: "Just Six Numbers", a: "Martin Rees", s: "just-six-numbers", asin: "178022690X" },
      { t: "Prisoner's Dilemma", a: "William Poundstone", s: "prisoners-dilemma", asin: "038541580X" },
      { t: "The Case for Mars", a: "Robert Zubrin", s: "the-case-for-mars", asin: "145160811X" },
      { t: "The Pleasure of Finding Things Out", a: "Richard Feynman", s: "finding-things-out", asin: "0465023959" },
      { t: "Dark Matter and Dark Energy", a: "Brian Clegg", s: "dark-matter-and-dark-energy", asin: "1785785508" },
      { t: "Hacking Darwin", a: "Jamie Metzl", s: "hacking-darwin", asin: "1728214130" },
    ],
  },
  {
    name: "Health and Longevity",
    books: [
      { t: "Why We Sleep", a: "Matt Walker", s: "why-we-sleep", asin: "1501144324" },
      { t: "Lifespan: Why We Age and Why We Don't Have To", a: "David Sinclair", s: "lifespan", asin: "1982135875" },
      { t: "Gut", a: "Giulia Enders", s: "sjarmen-med-tarmen", asin: "1771641495" },
      { t: "The Body - A Guide", a: "Bill Bryson", s: "the-body-a-guide", asin: "0804172722" },
      { t: "A Planet of Viruses", a: "Carl Zimmer", s: "a-planet-of-viruses", asin: "022678259X" },
      { t: "Outlive", a: "Peter Attia", s: "outlive", asin: "0593236599" },
      { t: "Why We Get Sick", a: "Benjamin Bikman", s: "why-we-get-sick", asin: "1953295770" },
    ],
  },
  {
    name: "Science Fiction",
    books: [
      { t: "The Three-Body Problem", a: "Cixin Liu", s: "the-three-body-problem", asin: "0765382032" },
      { t: "The Dark Forest", a: "Cixin Liu", s: "dark-forest", asin: "0765386690" },
      { t: "Death's End", a: "Cixin Liu", s: "deaths-end", asin: "0765386631" },
      { t: "Dune", a: "Frank Herbert", s: "dune", asin: "0441172717" },
      { t: "Dune Messiah", a: "Frank Herbert", s: "dune-messiah", asin: "0593098234" },
      { t: "Snow Crash", a: "Neal Stephenson", s: "snow-crash", asin: "0553380958" },
      { t: "Journey to the Center of the Earth", a: "Jules Verne", s: "journey-to-the-center-of-the-earth", asin: "0141441976" },
      { t: "Delta V", a: "Daniel Suarez", s: "delta-v", asin: "1524742414" },
      { t: "Project Hail Mary", a: "Andy Weir", s: "project-hail-mary", asin: "0593135229" },
    ],
  },
  {
    name: "History",
    books: [
      { t: "Square and the Tower", a: "Niall Ferguson", s: "square-tower", asin: "0735222932" },
      { t: "The Sovereign Individual", a: "James Dale Davidson", s: "the-sovereign-individual", asin: "0684832720" },
      { t: "Merchant Kings", a: "Stephen R. Bown", s: "merchant-kings", asin: "0312616112" },
      { t: "Breakneck", a: "Dan Wang", s: "breakneck", asin: "1324106034" },
      { t: "Landet som ble for rikt", a: "Martin Bech Holte", s: "landet-som-ble-for-rikt" },
    ],
  },
  {
    name: "Literature",
    books: [
      { t: "The Prophet", a: "Kahlil Gibran", s: "the-prophet", asin: "0394404289" },
      { t: "Joy in the Morning", a: "P.G. Wodehouse", s: "joy-in-the-morning", asin: "0393339440" },
      { t: "Jeeves & The Yule-Tide Spirit", a: "P.G. Wodehouse", s: "jeeves-and-the-yule-tide-spirit", asin: "1784750786" },
      { t: "Around the World in 80 Days", a: "Jules Verne", s: "around-the-world-in-80-days", asin: "014044906X" },
      { t: "Atlas Shrugged", a: "Ayn Rand", s: "atlas-shrugged", asin: "0451191145" },
      { t: "The Fountainhead", a: "Ayn Rand", s: "the-fountainhead", asin: "0451191153" },
      { t: "Sophie's World", a: "Jostein Gaarder", s: "sophies-world", asin: "0374530718" },
    ],
  },
];
