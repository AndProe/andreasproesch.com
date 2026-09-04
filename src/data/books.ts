// Reading recommendations, grouped by category. Generated from the master
// spreadsheet (Books.xlsx); covers live in public/images/books/<s>.jpg.
export interface Book {
  t: string; // title
  a: string; // author
  s: string; // cover slug
}

export interface BookCategory {
  name: string;
  books: Book[];
}

export const categories: BookCategory[] = [
  {
    name: "Tech and Futurism",
    books: [
      { t: "Bitcoin Billionaires", a: "Ben Mezrich", s: "bitcoin-billionaires" },
      { t: "Bold", a: "Peter Diamandis", s: "bold" },
      { t: "How to Create a Mind", a: "Ray Kurzweil", s: "how-to-create-a-mind" },
      { t: "The Singularity is Near", a: "Ray Kurzweil", s: "singularity-near" },
      { t: "Chip War", a: "Chris Miller", s: "chip-war" },
      { t: "Clean Code", a: "Robert C. Martin", s: "clean-code" },
      { t: "The Coming Wave", a: "Mustafa Suleyman", s: "the-coming-wave" },
      { t: "Elon Musk", a: "Walter Isaacson", s: "elon-musk" },
      { t: "The Second Machine Age", a: "Erik Brynjolfsson & ANdrew McAfee", s: "the-second-machine-age" },
      { t: "The Inevitable", a: "Kevin Kelley", s: "the-inevitable" },
      { t: "Boom: Bubbles and the End of Stagnation", a: "Byrne Hobart", s: "boom" },
      { t: "How We Got To Now", a: "Steven Johnson", s: "how-we-got-to-now" },
    ],
  },
  {
    name: "Startups & Angel Investing",
    books: [
      { t: "Bad Blood", a: "John Carreyrou", s: "bad-blood" },
      { t: "Blitzscaling", a: "Reid Hoffman", s: "blitzscaling" },
      { t: "How Google Works", a: "Eric Schmidt", s: "how-google-works" },
      { t: "Seven Powers: The Foundations of Business Strategy", a: "Hamilton Helmer", s: "seven-powers" },
      { t: "Angel", a: "Jason Calacanis", s: "angel" },
      { t: "The Cold Start Problem", a: "Andrew Chen", s: "the-cold-start-problem" },
      { t: "Amp It Up", a: "Frank Slootman", s: "amp-it-up" },
      { t: "BUILD", a: "Tony Fadell", s: "build" },
      { t: "Startup Boards", a: "Brad Feld", s: "startup-boards" },
      { t: "The Startup Owner's Manual", a: "Steva Blank and Bob Dorf", s: "the-startup-owners-manual" },
      { t: "Escaping the Build Trap", a: "Melissa Perri", s: "escaping-the-build-trap" },
      { t: "Product Management in Practice", a: "Matt LeMay", s: "product-management-in-practice" },
      { t: "Angel Investing", a: "David Rose", s: "angel-investing" },
      { t: "Zero to IPO", a: "Frederic Kerrest", s: "zero-to-ipo" },
      { t: "Aiming High", a: "Atsuo Inoue", s: "aiming-high" },
    ],
  },
  {
    name: "Finance, Venture Capital, Investing & Trading",
    books: [
      { t: "Reminiscences of a Stock Operator", a: "Edwin Lefevre", s: "reminiscences-of-a-stock-operator" },
      { t: "Portfolio Analysis", a: "David Swanson", s: "portfolio-analysis" },
      { t: "A Man For All Markets", a: "Edward O. Thorp", s: "a-man-for-all-markets" },
      { t: "Real Options", a: "Martha Amram and Nailin Kulatilaka", s: "real-options" },
      { t: "Venture Deals", a: "Brad Feld", s: "venture-deals" },
      { t: "VC - An American History", a: "Thomas Nicholas", s: "vc-american-history" },
      { t: "The Power Law", a: "Sebastian Mallaby", s: "power-law" },
      { t: "The Venture Mindset", a: "Ilya Strebulaev", s: "venture-mindset" },
    ],
  },
  {
    name: "Energy & Commodities",
    books: [
      { t: "Trillion Dollar Baby", a: "Paul Cleary", s: "trillion-dollar-baby" },
      { t: "Crude Volatility", a: "Robert McNally", s: "crude-volatility" },
      { t: "The Quest", a: "Daniel Yergin", s: "the-quest" },
      { t: "The Smartest Guys in the Room", a: "Bethany McLean", s: "the-smartest-guys-in-the-room" },
      { t: "How the World Really Works", a: "Vaclav Smil", s: "how-world-works" },
      { t: "Volt Rush", a: "Henry Sanderson", s: "volt-rush" },
      { t: "Material World", a: "Ed Conway", s: "material-world" },
    ],
  },
  {
    name: "Strategy, Management and Skills",
    books: [
      { t: "The Goal", a: "Eliyahu M. Goldratt", s: "the-goal" },
      { t: "Business Model You", a: "Alexander Osterwalder", s: "business-model-you" },
      { t: "One Million Followers", a: "Brendan Kane", s: "one-million-followers" },
      { t: "$100M Leads", a: "Alex Hormozi", s: "100m-leads" },
      { t: "Oversubscribed", a: "Daniel Priestley", s: "oversubscribed" },
      { t: "Entrepreneur Revolution", a: "Daniel Priestley", s: "entrepreneur-revolution" },
      { t: "Key Person of Influence", a: "Daniel Priestley", s: "key-person-of-influence" },
    ],
  },
  {
    name: "Behaviour and Psychology",
    books: [
      { t: "Misbehaving", a: "Richard Thaler", s: "misbehaving" },
      { t: "Thinking in Bets", a: "Annie Duke", s: "thinking-bets" },
      { t: "The Signal and the Noise", a: "Nate Silver", s: "the-signal-and-the-noise" },
      { t: "Nudge", a: "Richard Thaler", s: "nudge" },
      { t: "Never Split the Difference", a: "Chris Voss", s: "never-split-the-difference" },
    ],
  },
  {
    name: "Financial History",
    books: [
      { t: "When Genius Failed", a: "Roger Lowenstein", s: "when-genius-failed" },
      { t: "The Ascent of Money", a: "Niall Ferguson", s: "the-ascent-of-money" },
      { t: "The Man Who Solved the Market", a: "Gregory Zuckerman", s: "the-man-who-solved-the-market" },
      { t: "Stress Test", a: "Timothy Geithner", s: "stress-test" },
      { t: "Principles for Dealing with the Changing World Order", a: "Ray Dalio", s: "principles-for-dealing-with-the-changing-world-order" },
    ],
  },
  {
    name: "Space, Maths, Physics, Chemistry, Biology",
    books: [
      { t: "Just Six Numbers", a: "Martin Rees", s: "just-six-numbers" },
      { t: "Prisoner's Dilemma", a: "William Poundstone", s: "prisoners-dilemma" },
      { t: "The Case for Mars", a: "Robert Zubrin", s: "the-case-for-mars" },
      { t: "The Pleasure of Finding Things Out", a: "Richard Feynman", s: "finding-things-out" },
      { t: "Why We Get Sick", a: "Benjamin Bikman", s: "why-we-get-sick" },
      { t: "Dark Matter and Dark Energy", a: "Brian Clegg", s: "dark-matter-and-dark-energy" },
      { t: "Hacking Darwin", a: "Jamie Metzl", s: "hacking-darwin" },
    ],
  },
  {
    name: "Health & Medicine",
    books: [
      { t: "Why We Sleep", a: "Matt Walker", s: "why-we-sleep" },
      { t: "Lifespan: Why We Age — and Why We Don't Have To", a: "David Sinclair", s: "lifespan" },
      { t: "Sjarmen med Tarmen", a: "Giulia Enders", s: "sjarmen-med-tarmen" },
      { t: "The Body - A Guide", a: "Bill Bryson", s: "the-body-a-guide" },
      { t: "A Planet of Viruses", a: "Carl Zimmer", s: "a-planet-of-viruses" },
      { t: "Outlive", a: "Peter Attia", s: "outlive" },
    ],
  },
  {
    name: "Science Fiction",
    books: [
      { t: "Dune", a: "Frank Herbert", s: "dune" },
      { t: "Dune Messiah", a: "Frank Herbert", s: "dune-messiah" },
      { t: "Snow Crash", a: "Neal Stephenson", s: "snow-crash" },
      { t: "Journey to the Center of the Earth", a: "Jules Verne", s: "journey-to-the-center-of-the-earth" },
      { t: "The Three-Body Problem", a: "Cixin Liu", s: "the-three-body-problem" },
      { t: "Delta V", a: "Daniel Suarez", s: "delta-v" },
      { t: "The Dark Forest", a: "Cixin Liu", s: "dark-forest" },
      { t: "Project Hail Mary", a: "Andy Weir", s: "project-hail-mary" },
      { t: "Death's End", a: "Cixin Liu", s: "deaths-end" },
    ],
  },
  {
    name: "World History",
    books: [
      { t: "Square and the Tower", a: "Niall Fergusson", s: "square-tower" },
      { t: "The Sovereign Individual", a: "James Dale Davidson", s: "the-sovereign-individual" },
      { t: "Merchant Kings", a: "Stephen R. Bown", s: "merchant-kings" },
    ],
  },
  {
    name: "Middle East History & Society",
    books: [
      { t: "The History of Modern Lebanon", a: "Fawwaz Traboulsi", s: "the-history-of-modern-lebanon" },
      { t: "Goodbye Lebanon: Israel's First Defeat", a: "Odd Karsten Tveit", s: "goodbye-lebanon" },
      { t: "A Line In The Sand", a: "James Barr", s: "a-line-in-the-sand" },
    ],
  },
  {
    name: "Asian History & Society",
    books: [
      { t: "The Invention of China", a: "Bill Hayton", s: "the-invention-of-china" },
      { t: "Breakneck", a: "Dan Wang", s: "breakneck" },
    ],
  },
  {
    name: "European History & Society",
    books: [
      { t: "Landet som ble for rikt", a: "Martin Beck Holte", s: "landet-som-ble-for-rikt" },
    ],
  },
  {
    name: "Military History",
    books: [
      { t: "Jegerånden", a: "Eirik Kristoffersen", s: "jegeranden" },
    ],
  },
  {
    name: "Poetry / Literature",
    books: [
      { t: "The Prophet", a: "Kahlil Gibran", s: "the-prophet" },
      { t: "Joy in the Morning", a: "P.G. Woodehouse", s: "joy-in-the-morning" },
      { t: "Jeeves & The Yule-Tide Spirit", a: "P.G. Woodehouse", s: "jeeves-and-the-yule-tide-spirit" },
      { t: "Around the World in 80 Days", a: "Jules Verne", s: "around-the-world-in-80-days" },
      { t: "Atlas Shrugged", a: "Ayn Rand", s: "atlas-shrugged" },
      { t: "The Fountainhead", a: "Ayn Rand", s: "the-fountainhead" },
    ],
  },
  {
    name: "Philosophy",
    books: [
      { t: "Sophie's World", a: "Jostein Gaarder", s: "sophies-world" },
    ],
  },
  {
    name: "Wine, Art & Culture",
    books: [
      { t: "The Art and Life of Chaouki Chamoun", a: "Chaouki Chamoun", s: "the-art-and-life-of-chaouki-chamoun" },
    ],
  },
];
