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
    image: "/images/urban/community.jpg",
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
];

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
