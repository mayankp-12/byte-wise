export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  imageUrl: string;
  content: string;
  isFeatured?: boolean;
}

export const articles: Article[] = [
  {
    id: "10",
    title: "Global Summit on AI Regulations Concludes with Historic Treaty",
    excerpt: "Leaders from 140 nations sign the 'Geneva AI Accord,' establishing the first comprehensive international framework for artificial intelligence governance.",
    category: "World",
    author: "David Chen",
    date: "April 5, 2026",
    imageUrl: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1000&auto=format&fit=crop",
    content: `
      <p>In what is being hailed as the most significant diplomatic achievement of the decade, the Geneva AI Summit concluded today with the signing of a landmark international treaty.</p>
      
      <h3>The Geneva AI Accord</h3>
      <p>The treaty establishes clear red lines for the development of autonomous weapons systems and mandates international cooperation on AI safety research. It also creates a new UN-backed agency, the International Artificial Intelligence Agency (IAIA), tasked with monitoring compliance and sharing critical safety breakthroughs across national borders.</p>
      
      <p>While some tech leaders have expressed concerns about potential stifling of innovation, the overwhelming global consensus is that binding regulations are essential to navigate the transformative power of artificial intelligence safely.</p>
    `,
  },
  {
    id: "11",
    title: "Breakthrough in Solid-State Batteries Promises 1000-Mile EV Range",
    excerpt: "A major automotive consortium has successfully mass-produced a next-generation solid-state battery, effectively doubling the range of existing electric vehicles.",
    category: "Technology",
    author: "Sarah Jenkins",
    date: "April 5, 2026",
    imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1000&auto=format&fit=crop",
    content: `
      <p>Range anxiety may soon be a relic of the past. Today, a joint venture between leading automakers and materials scientists announced the successful scaling of solid-state battery production.</p>
      
      <h3>Paving the Way for Widespread Adoption</h3>
      <p>These new batteries not only boast a staggering 1000-mile range on a single charge but also operate with a dramatically reduced risk of thermal runaway, making them significantly safer than traditional lithium-ion counterparts. Charging times have also been slashed, with a 10% to 80% charge taking just under 12 minutes.</p>
      
      <p>Industry analysts predict this breakthrough will be the catalyst needed to push global EV adoption past the tipping point, accelerating the phase-out of internal combustion engines.</p>
    `,
  },
  {
    id: "12",
    title: "Mars Colony 'Ares One' Reaches 500-Day Milestone",
    excerpt: "The first permanent human settlement on Mars celebrates its 500th day of continuous operation, reporting significant progress in sustainable agriculture.",
    category: "Science",
    author: "Dr. Aris Thorne",
    date: "April 4, 2026",
    imageUrl: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1000&auto=format&fit=crop",
    content: `
      <p>It has been 500 Martian days (sols) since the crew of Ares One touched down and established the first permanent human outpost on the Red Planet. The milestone was marked by a planet-wide broadcast back to Earth.</p>
      
      <h3>Farming on the Red Planet</h3>
      <p>The most significant update came from the colony's agricultural division. The hydroponic bays have not only achieved self-sufficiency but have produced a surplus of crops, including the first Martian-grown strain of resilient wheat. This success in closed-loop life support systems is a critical step towards genuine interplanetary colonization.</p>
    `,
  },
  {
    id: "13",
    title: "The 'Slow Web' Movement Gains Mainstream Traction",
    excerpt: "A growing backlash against algorithmic feeds and rapid-fire content sees millions migrating to minimalist, community-curated digital spaces.",
    category: "Culture",
    author: "Maya Patel",
    date: "April 4, 2026",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop",
    content: `
      <p>Following years of digital burnout, the 'Slow Web' movement has exploded in popularity. Characterized by chronological feeds, long-form content limits, and algorithm-free discovery, slow web platforms are offering an antidote to the chaotic modern internet.</p>
      
      <h3>Reclaiming Attention</h3>
      <p>Users report significant improvements in mental health and attention spans after abandoning traditional, highly-optimized social networks. This shift is forcing major tech companies to rethink their engagement models as the advertising revenue tied to infinite scrolling begins to wane.</p>
    `,
  },
  {
    id: "9",
    title: "AI Breakthrough: New Generative Model Capable of Emotional Reasoning",
    excerpt: "Researchers unveil a groundbreaking AI model that can understand and simulate nuanced human emotions, sparking a debate on ethical implications.",
    category: "Technology",
    author: "Elena Rodriguez",
    date: "April 6, 2026",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
    isFeatured: true,
    content: `
      <p>In a landmark announcement today, leading AI researchers have unveiled a new generative model that goes beyond mimicking text and images; it can demonstrably understand and simulate complex human emotions in its reasoning processes.</p>
      
      <h3>The Emotional Turing Test</h3>
      <p>Dubbed "Sentia-1", the model passed a highly rigorous panel of psychological evaluations designed to measure emotional intelligence, scoring in the 95th percentile compared to human baselines. This leap in capability opens up vast new possibilities for empathetic AI assistants, mental health support bots, and deeply personalized educational tools.</p>
      
      <blockquote>
        "We are no longer just building tools; we are creating digital entities capable of profound empathy. The ethical responsibility this entails is immense."
      </blockquote>
      
      <p>However, the breakthrough has immediately sparked intense debate among ethicists and sociologists. Concerns are mounting over the potential for emotional manipulation, dependency, and the blurring lines between human and machine interaction. As the technology moves from the lab to real-world applications, regulators are under pressure to establish new guidelines for 'emotionally aware' AI systems.</p>
    `,
  },
  {
    id: "1",
    title: "The Future of Advertising in the Age of Generative AI",
    excerpt: "How neural networks and large language models are rewriting the rules of brand engagement and customer personalization.",
    category: "Technology",
    author: "Jane Doe",
    date: "April 3, 2026",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    isFeatured: true,
    content: `
      <p>The advertising industry is undergoing a seismic shift. For decades, the primary challenge for marketers was how to reach the right audience at the right time. Today, generative AI has solved that problem, but at the same time, it has created a new set of challenges: how do you stand out in a world where content is infinite, and personalization is near-perfect?</p>
      
      <p>Generative AI models, from large language models (LLMs) to image generation tools like Midjourney and DALL-E, are no longer just experiments. They are being integrated into every step of the creative process. From generating hundreds of headlines in seconds to creating photorealistic product imagery, the "boring" parts of creative work are being automated, allowing human designers and writers to focus on high-level strategy and storytelling.</p>
      
      <h3>The Personalization Paradox</h3>
      <p>One of the most intriguing aspects of this technological revolution is what experts are calling the "personalization paradox." As AI becomes more adept at tailoring messages to our specific desires, consumers are starting to crave something more authentic and less "targeted." A brand that feels like it’s following you around the web with the perfect product recommendation can sometimes feel intrusive rather than helpful.</p>
      
      <blockquote>
        "The goal isn't just to be relevant; the goal is to be meaningful. AI can provide the relevance, but humans provide the meaning."
      </blockquote>
      
      <p>Looking ahead, the winners in the AI-driven advertising landscape will be those who use technology to amplify human creativity, rather than replace it. For Byte Wire, this means staying at the forefront of these discussions and providing our readers with the deepest insights into the technological trends that shape our daily lives.</p>
    `,
  },
  {
    id: "2",
    title: "Global Markets Brace for Economic Shift in 2026",
    excerpt: "Central banks signal potential interest rate changes amidst shifting global trade dynamics and resource scarcity.",
    category: "Business",
    author: "John Smith",
    date: "April 2, 2026",
    imageUrl: "https://images.unsplash.com/photo-1611974714013-3604f32657e2?q=80&w=1000&auto=format&fit=crop",
    content: `
      <p>As we enter the second quarter of 2026, global financial markets are standing on a knife's edge. Recent signals from major central banks indicate that the era of stable interest rates might be coming to an end, as inflation in critical raw materials continues to fluctuate.</p>
      
      <h3>The New Oil: Semi-conductors and Rare Earths</h3>
      <p>While the 20th century was defined by the struggle for fossil fuels, the mid-2020s are increasingly defined by the hunt for the materials that power our green future. Semi-conductor chips and rare earth elements have become the new tactical priorities for national economies. Supply chain resilience is now the top item on every CEO's agenda.</p>
      
      <p>Economists at Byte Wire have observed an interesting trend: decentralized finance (DeFi) is starting to merge with traditional banking structures, creating a hybrid financial system that is more robust but also more complex to regulate. As we watch these developments, the importance of "real-time" data and AI-driven analysis becomes even more apparent.</p>
    `,
  },
  {
    id: "3",
    title: "Renewable Energy Hits Historic Milestone",
    excerpt: "Solar and wind energy production surpassed coal for the first time in history during the last fiscal quarter.",
    category: "Science",
    author: "Alice Green",
    date: "April 1, 2026",
    imageUrl: "https://images.unsplash.com/photo-1509391307613-cfecf8ea181d?q=80&w=1000&auto=format&fit=crop",
    content: `
      <p>A historic milestone has been reached in our journey toward a sustainable future. For the first time since the industrial revolution, renewable energy sources have out-produced coal-based power on a global scale over a full quarter.</p>
      
      <h3>The Decentralized Power Grid</h3>
      <p>This achievement is not just about large-scale solar farms or massive wind turbines off the coast. It’s about the millions of smart homes and micro-grids that are contributing back to the system. Battery technology has finally reached the energy density required to bridge the gap during peak hours when the sun doesn't shine and the wind doesn't blow.</p>
      
      <p>This shift is not just ecological; it is deeply geopolitical. As countries become more energy-independent, the old power structures are being dismantled, paving the way for a new era of global cooperation centered on climate goals and ecological stability.</p>
    `,
  },
  {
    id: "4",
    title: "The Renaissance of Digital Journalism",
    excerpt: "Why high-end investigative reporting is seeing a surprising resurgence among younger generations.",
    category: "Culture",
    author: "Marcus Aurelius",
    date: "March 31, 2026",
    imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop",
    content: `
      <p>In an age of five-second viral clips and AI-generated summaries, one might expect the audience for long-form investigative journalism to be dwindling. Yet, the opposite is true. Younger readers are flocking back to deep-dives and editorial excellence.</p>
      
      <h3>The Pursuit of Truth</h3>
      <p>Perhaps it's the "information fatigue" caused by the deluge of low-quality content, but there is a clear appetite for journalism that takes its time, checks its facts, and provides context. Platforms like Byte Wire are at the forefront of this movement, proving that quality and integrity still matter in the digital age.</p>
    `,
  },
  {
    id: "5",
    title: "New Space Mission to Explore distant Moons",
    excerpt: "NASA announces its most ambitious mission yet to search for signs of microbial life on Jupiter's moon, Europa.",
    category: "Science",
    author: "Neil Armstrong",
    date: "March 30, 2026",
    imageUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1000&auto=format&fit=crop",
    content: `
      <p>The "Ice Shell Explorer" mission has been officially greenlit by NASA and its international partners. The destination: Europa. The goal: to drill through miles of ice into the subterranean ocean that scientists believe could harbor life.</p>
      
      <h3>Robotic Ingenuity</h3>
      <p>The mission will utilize a new generation of autonomous robots capable of navigating the extreme pressures and temperatures of the Jovian moon. These "cryo-bots" are equipped with chemical sensors that can detect the molecular signatures of biological processes in near-real-time.</p>
    `,
  },
  {
    id: "6",
    title: "The Evolution of Urban Architecture",
    excerpt: "How 'living buildings' are transforming city skylines and enhancing urban biodiversity.",
    category: "World",
    author: "Zaha Hadid II",
    date: "March 29, 2026",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    content: `
      <p>Skyscrapers are no longer just steel and glass. In cities across the world, from Singapore to Milan, architects are designing buildings that breathe, grow, and consume waste.</p>
      
      <h3>Biophilic Design</h3>
      <p>By integrating vertical forests and natural ventilation systems into the very core of these structures, urban designers are not just reducing carbon footprints—they are improving the mental well-being of the people who live and work within them.</p>
    `,
  },
  {
    id: "7",
    title: "Quantum Computing: The Next Frontier",
    excerpt: "Why the race for quantum supremacy is heatings up and what it means for global security.",
    category: "Technology",
    author: "Jane Doe",
    date: "March 28, 2026",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop",
    content: `
      <p>Quantum computing is no longer just a theoretical concept. Major tech giants are now reporting significant progress in achieving stable qubits and error correction.</p>
      <h3>The End of Traditional Encryption?</h3>
      <p>As quantum computers become more powerful, they threaten the very foundations of our current encryption standards. The world is now racing to develop 'quantum-resistant' cryptography.</p>
    `,
  },
  {
    id: "8",
    title: "The Rise of Neo-Banks",
    excerpt: "How digital-only financial institutions are disrupting the traditional banking sector in 2026.",
    category: "Business",
    author: "John Smith",
    date: "March 27, 2026",
    imageUrl: "https://images.unsplash.com/photo-1550565118-3d1428df7305?q=80&w=1000&auto=format&fit=crop",
    content: `
      <p>Traditional banks are facing unprecedented competition from agile, mobile-first competitors. These "Neo-Banks" offer lower fees and better user experiences.</p>
    `,
  },
];
