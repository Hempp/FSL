export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "free-youth-sports-los-angeles",
    title:
      "Free Youth Sports Programs in Los Angeles: What Parents Need to Know",
    description:
      "Discover free youth sports programs in Los Angeles, including basketball camps, after-school sports, and more. Learn how Fundamental Sports Labs is making athletics accessible to every kid in LA.",
    date: "2026-04-15",
    author: "Fundamental Sports Labs",
    image: "/images/urban/hero-basketball-court.jpg",
    tags: [
      "youth sports",
      "los angeles",
      "free programs",
      "basketball",
      "after school",
    ],
  },
  {
    slug: "benefits-youth-sports-mental-health",
    title:
      "How Youth Sports Build Mental Resilience: The Science Behind FSL's Four Pillars",
    description:
      "Research shows youth sports improve mental health, build resilience, and reduce anxiety in teens. Learn how Fundamental Sports Labs uses its Four Pillars to develop the whole athlete.",
    date: "2026-04-14",
    author: "Fundamental Sports Labs",
    image: "/images/urban/team-huddle.jpg",
    tags: ["youth sports", "mental health", "resilience", "wellness"],
  },
  {
    slug: "financial-literacy-youth-athletes",
    title:
      "Teaching Financial Literacy Through Sports: Why Your Kid's Coach Should Talk About Money",
    description:
      "Financial literacy is one of the most overlooked skills in youth development. Discover how Fundamental Sports Labs teaches money management alongside basketball, football, and soccer.",
    date: "2026-04-13",
    author: "Fundamental Sports Labs",
    image: "/images/urban/friends-group.jpg",
    tags: [
      "financial literacy",
      "youth development",
      "money skills",
      "sports education",
    ],
  },
  {
    slug: "youth-football-safety-tips",
    title:
      "Youth Football Safety: What Every Parent in LA Should Know Before Signing Up",
    description:
      "Learn about youth football safety, head injury prevention, proper technique, and how Fundamental Sports Labs keeps young athletes safe with trained coaches and free equipment.",
    date: "2026-04-12",
    author: "Fundamental Sports Labs",
    image: "/images/urban/football-play.jpg",
    tags: [
      "youth football safety",
      "football",
      "los angeles",
      "youth sports",
      "safety",
    ],
  },
  {
    slug: "after-school-programs-los-angeles",
    title:
      "The Best Free After-School Programs for Kids in Los Angeles (2026 Guide)",
    description:
      "A comprehensive guide to free after-school programs in Los Angeles, including sports, tutoring, and enrichment. Learn why Fundamental Sports Labs is the top choice for LA families.",
    date: "2026-04-11",
    author: "Fundamental Sports Labs",
    image: "/images/action/teens-learning.jpg",
    tags: [
      "after school programs",
      "los angeles",
      "free programs",
      "youth activities",
      "kids",
    ],
  },
  {
    slug: "golf-for-youth-beginners",
    title:
      "Why Golf Is the Best Sport You're Not Signing Your Kid Up For",
    description:
      "Golf teaches patience, etiquette, and individual focus like no other sport. Discover how Fundamental Sports Labs makes youth golf accessible and free for kids in Los Angeles.",
    date: "2026-04-10",
    author: "Fundamental Sports Labs",
    image: "/images/action/coach-training.jpg",
    tags: ["golf", "youth sports", "beginners", "kids", "los angeles"],
  },
  {
    slug: "building-confidence-through-sports",
    title:
      "From Shy to Starting Lineup: How Sports Build Confidence in Kids",
    description:
      "Youth sports are one of the most powerful tools for building confidence in children. Learn how Fundamental Sports Labs transforms shy kids into confident leaders through its Four Pillars approach.",
    date: "2026-04-09",
    author: "Fundamental Sports Labs",
    image: "/images/action/teen-basketball.jpg",
    tags: [
      "confidence",
      "youth development",
      "mental health",
      "youth sports",
      "kids",
    ],
  },
  {
    slug: "volunteer-youth-sports-coach-guide",
    title:
      "How to Become a Volunteer Youth Sports Coach in Los Angeles",
    description:
      "Everything you need to know about volunteering as a youth sports coach in LA. Learn about FSL's volunteer program, background check process, and how coaching changes lives.",
    date: "2026-04-08",
    author: "Fundamental Sports Labs",
    image: "/images/action/teens-collab.jpg",
    tags: [
      "volunteer",
      "coaching",
      "los angeles",
      "youth sports",
      "community",
    ],
  },
  {
    slug: "nil-deals-high-school-college-athletes",
    title:
      "NIL Deals Explained: What High School and College Athletes Need to Know in 2026",
    description:
      "Name, Image, and Likeness (NIL) deals are changing youth sports forever. Learn how high school and college athletes in Los Angeles can prepare for NIL opportunities — and why financial literacy matters more than ever.",
    date: "2026-04-16",
    author: "Fundamental Sports Labs",
    image: "/images/action/teen-football.jpg",
    tags: [
      "NIL",
      "college athletes",
      "high school sports",
      "financial literacy",
      "los angeles",
    ],
  },
];

// Approximate word counts per post (from rendered content)
const wordCounts: Record<string, number> = {
  "free-youth-sports-los-angeles": 680,
  "benefits-youth-sports-mental-health": 820,
  "financial-literacy-youth-athletes": 1050,
  "youth-football-safety-tips": 700,
  "after-school-programs-los-angeles": 750,
  "golf-for-youth-beginners": 600,
  "building-confidence-through-sports": 650,
  "volunteer-youth-sports-coach-guide": 700,
  "nil-deals-high-school-college-athletes": 900,
};

export function getReadingTime(slug: string): number {
  const words = wordCounts[slug] ?? 400;
  return Math.max(1, Math.ceil(words / 200));
}

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
