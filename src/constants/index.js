import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";


export const actionLink = 'https://action-ai-chat.vercel.app/'



export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Send & manage emails",
  "Read & write spreadsheets",
  "Search the web instantly",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Gmail Integration",
    text: "Connect your Gmail account and let the AI send, read, and manage your emails — all through a simple chat command.",
    date: "Q1 2025",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Google Sheets & Docs",
    text: "Read, write, and update your spreadsheets and documents using natural language. No formulas needed.",
    date: "Q2 2025",
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Voice Commands",
    text: "Talk to your AI assistant hands-free. Powered by VAPI for real-time voice interaction directly in the browser.",
    date: "Q3 2025",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "File & Image Upload",
    text: "Upload PDFs, images, and files — let the AI analyze, summarize, and act on them automatically.",
    date: "Q4 2025",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Connect your own Google account and let the AI act on your behalf — securely and privately.";

export const collabContent = [
  {
    id: "0",
    title: "Your credentials, your control",
    text: collabText,
  },
  {
    id: "1",
    title: "Powered by n8n automation",
  },
  {
    id: "2",
    title: "End-to-end encrypted tokens",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Free",
    description: "AI chat assistant, basic integrations",
    price: "0",
    features: [
      "Unlimited AI chat powered by Llama 3.3",
      "Connect 1 Google account (Gmail or Sheets)",
      "Web search up to 20 times per day",
    ],
  },
  {
    id: "1",
    title: "Pro",
    description: "Full integrations, priority AI, chat history",
    price: "9.99",
    features: [
      "Everything in Free, plus unlimited web search",
      "Connect all Google services simultaneously",
      "Full chat history saved & searchable",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom workflows, dedicated support, team access",
    price: null,
    features: [
      "Custom n8n workflow development",
      "Dedicated account manager",
      "Team workspace with shared integrations",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Chat naturally",
    text: "Just type what you need. The AI understands your intent and picks the right tool — no commands or syntax required.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Send emails instantly",
    text: "Ask the AI to draft and send emails from your own Gmail account. Review before sending or let it handle everything.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Access from anywhere",
    text: "Use the AI assistant from any device, any browser. Your integrations and chat history follow you everywhere.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Lightning fast responses",
    text: "Powered by Groq's ultra-fast inference engine with Llama 3.3. Responses stream in real-time with no delays.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Manage spreadsheets",
    text: "Read data, append rows, and update Google Sheets using plain English. No formulas or manual entry needed.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Your data stays yours",
    text: "Your OAuth tokens are AES-256 encrypted before storage. We never read your emails or access your files without action.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
