
import { Article, CountryInfo } from "./types";

// Mock articles for demonstration
export const mockArticles: Article[] = [
  {
    id: "1",
    title: "Global Economic Summit Addresses Climate Change Concerns",
    description: "World leaders gather to discuss economic strategies that address climate change while promoting sustainable growth.",
    content: "In a landmark summit held in Geneva, world leaders from G20 nations convened to address the growing concerns of climate change and its impact on global economies. The three-day event focused on developing sustainable economic models that reduce carbon emissions while promoting economic growth. \n\nThe summit concluded with a joint declaration committing to reduce carbon emissions by 50% by 2030, a more ambitious target than previously agreed upon. Financial pledges totaling $100 billion were made to support developing nations in their transition to green energy.\n\n\"This is a critical moment for our planet,\" said UN Secretary-General in his closing remarks. \"The commitments made here today demonstrate that economic prosperity and environmental sustainability can go hand in hand.\"\n\nCritics, however, point out that similar promises have been made in the past with limited follow-through. Environmental activists staged peaceful protests outside the venue, calling for more immediate and decisive action.",
    author: "Sarah Johnson",
    publishedAt: "2023-04-06T08:30:00Z",
    source: {
      id: "global-news",
      name: "Global News"
    },
    url: "#",
    urlToImage: "https://images.unsplash.com/photo-1623265300797-4a3541e3a5a4?q=80&w=2070&auto=format&fit=crop",
    category: "business",
    country: "us"
  },
  {
    id: "2",
    title: "Breakthrough in Quantum Computing Promises Technological Revolution",
    description: "Scientists achieve quantum supremacy with new processor capable of solving complex problems in seconds.",
    content: "A team of researchers from MIT and Google have announced a significant breakthrough in quantum computing technology. Their newly developed quantum processor has demonstrated the ability to perform calculations in seconds that would take traditional supercomputers thousands of years to complete.\n\nThe processor, named 'Quantum Nexus', utilizes 128 qubits and incorporates novel error-correction techniques that have long been a challenge in quantum computing development. This advancement brings practical quantum computing applications significantly closer to reality.\n\n\"This is the moment many of us have been working toward for decades,\" said Dr. Elena Patel, lead researcher on the project. \"Quantum Nexus opens doors to solving complex problems in fields ranging from medicine to climate science that were previously unsolvable.\"\n\nPotential applications include drug discovery, advanced materials development, complex financial modeling, and AI training. The team expects commercial applications to begin rolling out within two years, though widespread adoption may take longer.\n\nExperts caution that while this breakthrough is significant, many technical challenges remain before quantum computers become commonplace tools across industries.",
    author: "Michael Chen",
    publishedAt: "2023-04-05T14:15:00Z",
    source: {
      id: "tech-daily",
      name: "Tech Daily"
    },
    url: "#",
    urlToImage: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2070&auto=format&fit=crop",
    category: "technology",
    country: "us"
  },
  {
    id: "3",
    title: "Global Health Organization Declares End to Tropical Virus Outbreak",
    description: "After two years of coordinated international efforts, the tropical virus outbreak that affected multiple countries has been officially declared over.",
    content: "The Global Health Organization (GHO) has officially declared an end to the tropical virus outbreak that has affected 12 countries across Africa and parts of Southeast Asia over the past two years. The announcement comes after no new cases have been reported for a consecutive 42-day period, twice the maximum incubation period for the virus.\n\n\"This is a triumph of international cooperation and modern medical science,\" said Dr. Amara Okonkwo, Director-General of the GHO. \"Through coordinated vaccination campaigns, rigorous contact tracing, and community education, we have managed to contain what could have been a much more devastating pandemic.\"\n\nThe outbreak, which began in early 2021, infected approximately 32,000 people and resulted in 5,400 fatalities. The rapid development and deployment of a vaccine in late 2021 is credited with turning the tide against the disease.\n\nPublic health experts are now focusing on establishing better early warning systems and response protocols to prevent similar outbreaks in the future. \"While we celebrate this victory, we must also learn from the experience to be better prepared for future threats,\" Dr. Okonkwo added.",
    author: "Dr. James Patil",
    publishedAt: "2023-04-04T09:45:00Z",
    source: {
      id: "health-monitor",
      name: "Health Monitor"
    },
    url: "#",
    urlToImage: "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?q=80&w=2070&auto=format&fit=crop",
    category: "health",
    country: "gb"
  },
  {
    id: "4",
    title: "Historic Peace Treaty Signed in Middle East Conflict Zone",
    description: "After decades of tensions, regional powers sign comprehensive peace agreement to end territorial disputes.",
    content: "In a historic ceremony attended by world leaders, representatives from five nations signed a comprehensive peace treaty aimed at resolving decades-old territorial disputes in one of the world's most volatile regions. The agreement, brokered over two years of intensive diplomatic negotiations, establishes new borders, security arrangements, and economic cooperation frameworks.\n\n\"Today marks not an ending, but a beginning,\" said the United Nations Secretary-General at the signing ceremony. \"The hard work of building lasting peace now begins.\"\n\nThe treaty includes provisions for demilitarized zones, shared water resources management, and the gradual normalization of diplomatic and economic relations between former adversaries. A joint security council comprising representatives from all signatory nations will oversee implementation of the agreement, with United Nations observers present during the transition period.\n\nFinancial markets across the region responded positively, with major indexes up by an average of 3.8% following the announcement. International development banks have pledged $50 billion in reconstruction and development funds over the next decade to support the peace process.\n\nWhile widely celebrated, some regional analysts remain cautious about the treaty's long-term prospects. \"The agreement addresses many core issues, but decades of hostility won't disappear overnight,\" noted regional specialist Dr. Yasmin Al-Farsi. \"Much depends on how the implementation unfolds in coming months.\"",
    author: "Ahmed Rashid",
    publishedAt: "2023-04-03T17:20:00Z",
    source: {
      id: "world-dispatch",
      name: "World Dispatch"
    },
    url: "#",
    urlToImage: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=1776&auto=format&fit=crop",
    category: "general",
    country: "gb"
  },
  {
    id: "5",
    title: "Major Sports League Announces Expansion into Asian Markets",
    description: "Following growing popularity, international sports league will add franchises in three Asian cities by 2025.",
    content: "One of the world's premier sports leagues has announced plans to expand into Asia with three new franchise teams to be established by 2025. The expansion will bring teams to Tokyo, Seoul, and Shanghai, marking the league's first presence in the Asian market.\n\n\"This expansion represents the natural evolution of our global strategy,\" said league commissioner Richard Blackwell. \"The passion for our sport across Asia has grown exponentially, and we're excited to bring the game directly to these incredible fan bases.\"\n\nThe expansion is expected to generate approximately $2.3 billion in revenue through media rights, merchandising, and live events. Local ownership groups in each city have already secured funding and begun planning for state-of-the-art facilities.\n\nPlayer association representatives have expressed support for the move, noting that it will create new opportunities for athletes while growing the sport globally. The league plans to implement special draft considerations and training programs to develop local talent in each new market.\n\n\"This isn't just about bringing our existing game to new places,\" explained league executive Maya Yoshida. \"It's about creating authentic connections within each community and helping develop the next generation of players from these regions.\"",
    author: "Carlos Mendez",
    publishedAt: "2023-04-02T11:00:00Z",
    source: {
      id: "sports-central",
      name: "Sports Central"
    },
    url: "#",
    urlToImage: "https://images.unsplash.com/photo-1577471489310-a4dc6cf416e0?q=80&w=2187&auto=format&fit=crop",
    category: "sports",
    country: "jp"
  },
  {
    id: "6",
    title: "Revolutionary AI System Can Predict Natural Disasters With 92% Accuracy",
    description: "New artificial intelligence model uses satellite data and machine learning to forecast earthquakes, tsunamis, and volcanic eruptions days or weeks in advance.",
    content: "Scientists have unveiled a groundbreaking artificial intelligence system capable of predicting natural disasters with unprecedented accuracy. The system, developed through a collaboration between researchers at Stanford, MIT, and the Earth Monitoring Coalition, analyzes satellite data, seismic activity, atmospheric conditions, and historical patterns to forecast events including earthquakes, tsunamis, and volcanic eruptions days or even weeks before they occur.\n\nIn rigorous testing across diverse geological regions, the AI demonstrated a 92% accuracy rate for major seismic events and an 89% accuracy for volcanic activity, with prediction windows ranging from 2-18 days depending on the type of event.\n\n\"This represents a paradigm shift in disaster preparedness,\" explained Dr. Sophia Wang, lead researcher on the project. \"Even a few days' warning can dramatically reduce casualties and allow for more orderly evacuations.\"\n\nThe system, named GAIA (Geological Anomaly Intelligence Analyzer), has been deployed in a pilot program across the Pacific Ring of Fire, with plans for global implementation through the United Nations Disaster Risk Reduction program by next year.\n\nWhile the technology shows enormous promise, developers emphasize that it remains one tool among many. \"GAIA doesn't replace traditional monitoring and warning systems,\" cautioned Dr. Wang. \"It works alongside them, providing an additional layer of early detection.\"\n\nEmergency management officials around the world are already incorporating the system's predictions into disaster response planning, with several countries reporting successful evacuations based on GAIA warnings during the testing phase.",
    author: "Elena Nakamura",
    publishedAt: "2023-04-01T15:30:00Z",
    source: {
      id: "science-today",
      name: "Science Today"
    },
    url: "#",
    urlToImage: "https://images.unsplash.com/photo-1590749225420-8447254e91da?q=80&w=1887&auto=format&fit=crop",
    category: "science",
    country: "us"
  },
  {
    id: "7",
    title: "Global Entertainment Streaming Platform Reaches 1 Billion Subscribers",
    description: "Leading content provider celebrates milestone as streaming services continue to dominate entertainment landscape worldwide.",
    content: "StreamFlix, the global entertainment streaming giant, announced today that it has surpassed one billion subscribers worldwide, becoming the first media platform in history to reach this milestone. The company, which began as a DVD rental service in 1997, has transformed the entertainment industry with its streaming model and investment in original content production.\n\n\"When we launched our streaming service 15 years ago, we couldn't have imagined the scale of transformation it would bring to how people consume entertainment,\" said StreamFlix CEO Maria Garcia. \"Reaching one billion subscribers represents not just our growth, but the fundamental shift in how stories are told and experienced globally.\"\n\nThe platform now operates in 190 countries and produces content in over 60 languages. Industry analysts attribute the company's success to its algorithm-driven personalization, diverse content library, and willingness to invest in local productions around the world.\n\nThe announcement comes as traditional broadcast and cable networks continue to lose viewers, with many major media conglomerates launching their own competing streaming services in recent years.\n\n\"What we're seeing is the final stage of a complete realignment of the entertainment industry,\" explained media analyst Jordan Kim. \"The question is no longer whether streaming will dominate, but which platforms will emerge as the long-term leaders in this space.\"\n\nStreamFlix also announced plans to expand into interactive entertainment and virtual reality experiences, signaling continued evolution beyond traditional video content.",
    author: "Daniel Martinez",
    publishedAt: "2023-03-31T10:15:00Z",
    source: {
      id: "entertainment-weekly",
      name: "Entertainment Weekly"
    },
    url: "#",
    urlToImage: "https://images.unsplash.com/photo-1586899028174-e7098604235b?q=80&w=1771&auto=format&fit=crop",
    category: "entertainment",
    country: "us"
  },
  {
    id: "8",
    title: "Global Financial Markets Rally as Inflation Concerns Ease",
    description: "Stock indices reach record highs worldwide after central banks signal end to interest rate hikes amid improving economic data.",
    content: "Financial markets around the world rallied sharply today as new economic data suggested inflation pressures are easing across major economies. The positive momentum came after several central banks, including the Federal Reserve and European Central Bank, signaled they may be nearing the end of their interest rate hiking cycles.\n\nThe S&P 500 rose 2.3% to close at a record high, while the pan-European STOXX 600 gained 1.9%. Asian markets also performed strongly, with Japan's Nikkei 225 up 3.1% and Hong Kong's Hang Seng index climbing 2.7%.\n\n\"We're seeing a coordinated reassessment of the global economic outlook,\" said Morgan Stanley chief economist Victoria Chen. \"The data is increasingly pointing toward a soft landing scenario, where inflation moderates without triggering a significant recession.\"\n\nInflation reports released this week showed consumer price increases slowing more than expected across several major economies. In the United States, the latest CPI report indicated a 3.2% annual inflation rate, down from 3.7% the previous month and the lowest level in two years.\n\nBond markets also responded positively, with yields falling as investors adjusted their expectations for future rate hikes. The benchmark 10-year Treasury yield dropped 15 basis points to 3.65%.\n\nWhile market sentiment has improved dramatically, some analysts caution that economic challenges remain. \"The inflation battle isn't completely won yet,\" warned BlackRock investment strategist Michael Zhang. \"We could still see volatility if upcoming economic data doesn't confirm this improving trend.\"",
    author: "Sophia Williams",
    publishedAt: "2023-03-30T16:45:00Z",
    source: {
      id: "financial-times",
      name: "Financial Times"
    },
    url: "#",
    urlToImage: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop",
    category: "business",
    country: "us"
  },
  {
    id: "9",
    title: "Innovative Urban Transport System Launches in Singapore",
    description: "Autonomous electric pods offer new solution for last-mile travel in smart city infrastructure project.",
    content: "Singapore has unveiled an innovative urban transport system featuring autonomous electric pods that promise to revolutionize short-distance travel within the city-state. The system, called MicroTransit, consists of a network of elevated guideways connecting major transit hubs, business districts, and residential areas.\n\nThe solar-powered pods accommodate up to six passengers each and operate on demand rather than following fixed schedules. Users can summon pods through a smartphone app that optimizes routes based on real-time demand patterns.\n\n\"MicroTransit represents our vision for sustainable, efficient urban mobility,\" said Singapore's Transport Minister during the launch ceremony. \"By addressing the last-mile challenge, we're making public transportation more accessible and convenient for everyone.\"\n\nThe initial phase includes 250 pods serving Singapore's central business district and three residential neighborhoods, with plans to expand the network citywide over the next five years. The system is expected to reduce road congestion by 15% and lower carbon emissions from urban transport by approximately 20% once fully implemented.\n\nDeveloped through a public-private partnership between Singapore's Land Transport Authority and mobility technology firm TransitNext, the project has drawn interest from urban planners worldwide who see it as a potential model for smart city transportation.\n\n\"What makes this system particularly noteworthy is how it integrates with existing public transport infrastructure,\" explained urban mobility expert Dr. Lim Jia Wei. \"Rather than replacing mass transit options like subways and buses, it complements them by solving the first and last mile problem.\"",
    author: "Raj Patel",
    publishedAt: "2023-03-29T12:20:00Z",
    source: {
      id: "urban-tech",
      name: "Urban Tech"
    },
    url: "#",
    urlToImage: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=1931&auto=format&fit=crop",
    category: "technology",
    country: "sg"
  },
  {
    id: "10",
    title: "International Athletics Federation Introduces Revolutionary Tracking System",
    description: "New technology provides unprecedented insights into athlete performance through AI-powered biomechanical analysis.",
    content: "The International Athletics Federation has unveiled a groundbreaking athlete tracking system that promises to transform both competition and training in track and field events. The technology, developed over four years in partnership with sports technology firm Kinetic Analytics, combines computer vision, AI, and sensor technology to provide real-time biomechanical analysis without requiring athletes to wear any devices.\n\nDubbed ATLAS (Athletic Training, Learning and Analysis System), the technology captures 200 data points across an athlete's body 60 times per second, generating insights into stride length, joint angles, power output, and other crucial performance metrics. The system was officially introduced at the World Championships, where it provided broadcasters and viewers with enhanced analytics during events.\n\n\"This represents the most significant technological advancement in athletics performance analysis in decades,\" said Dr. Marcus Johnson, the federation's Director of Technology and Innovation. \"ATLAS gives coaches and athletes objective data that was previously only available in specialized lab environments.\"\n\nThe federation has announced that ATLAS will be made available to national teams and training centers worldwide, with a simplified version planned for broader distribution to university and club-level programs next year.\n\nAthletes at the World Championships responded positively to the technology. \"Seeing the detailed breakdown of my performance immediately after a race gives me insights I can apply right away,\" said sprint world champion Alicia Monteiro. \"It's like having an expert biomechanist analyze every aspect of your technique in real time.\"\n\nSports scientists predict the technology could help reduce injuries by identifying movement patterns that put athletes at risk, while also enabling more personalized coaching based on each athlete's unique biomechanics.",
    author: "Thomas Nielsen",
    publishedAt: "2023-03-28T09:10:00Z",
    source: {
      id: "sports-analytics",
      name: "Sports Analytics"
    },
    url: "#",
    urlToImage: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop",
    category: "sports",
    country: "fr"
  }
];

// Mock country data
export const countries: CountryInfo[] = [
  { code: 'us', name: 'United States', flag: '🇺🇸' },
  { code: 'gb', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'in', name: 'India', flag: '🇮🇳' },
  { code: 'ca', name: 'Canada', flag: '🇨🇦' },
  { code: 'au', name: 'Australia', flag: '🇦🇺' },
  { code: 'jp', name: 'Japan', flag: '🇯🇵' },
  { code: 'fr', name: 'France', flag: '🇫🇷' },
  { code: 'de', name: 'Germany', flag: '🇩🇪' }
];

// Mock categories with icons
export const categories = [
  { id: 'all', name: 'All' },
  { id: 'general', name: 'General' },
  { id: 'business', name: 'Business' },
  { id: 'technology', name: 'Technology' },
  { id: 'sports', name: 'Sports' },
  { id: 'entertainment', name: 'Entertainment' },
  { id: 'health', name: 'Health' },
  { id: 'science', name: 'Science' }
];
