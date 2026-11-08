export type TechCategory =
  | "Frontend"
  | "Backend"
  | "Data"
  | "Cloud & DevOps"
  | "AI & Tools";

export type TechLogo = {
  name: string;
  src: string;
  color: string;
  category: TechCategory;
};

export const TECH_STACK: TechLogo[] = [
  // Frontend
  { name: "React", src: "/logos/react.svg", color: "#61DAFB", category: "Frontend" },
  { name: "Next.js", src: "/logos/nextjs.svg", color: "#8B5CF6", category: "Frontend" },
  { name: "TypeScript", src: "/logos/typescript.svg", color: "#3178C6", category: "Frontend" },
  { name: "JavaScript", src: "/logos/javascript.svg", color: "#F7DF1E", category: "Frontend" },
  { name: "Tailwind CSS", src: "/logos/tailwindcss.svg", color: "#06B6D4", category: "Frontend" },
  { name: "React Native", src: "/logos/react-native.svg", color: "#61DAFB", category: "Frontend" },
  { name: "Expo", src: "/logos/expo.svg", color: "#4630EB", category: "Frontend" },

  // Backend
  { name: "Node.js", src: "/logos/nodejs.svg", color: "#5FA04E", category: "Backend" },
  { name: "Express", src: "/logos/express.svg", color: "#22C55E", category: "Backend" },
  { name: "NestJS", src: "/logos/nestjs.svg", color: "#E0234E", category: "Backend" },
  { name: "Java", src: "/logos/java.svg", color: "#007396", category: "Backend" },
  { name: "Spring Boot", src: "/logos/springboot.svg", color: "#6DB33F", category: "Backend" },
  { name: "Python", src: "/logos/python.svg", color: "#3776AB", category: "Backend" },
  { name: "GraphQL", src: "/logos/graphql.svg", color: "#E10098", category: "Backend" },

  // Data
  { name: "PostgreSQL", src: "/logos/postgresql.svg", color: "#4169E1", category: "Data" },
  { name: "MySQL", src: "/logos/mysql.svg", color: "#4479A1", category: "Data" },
  { name: "MongoDB", src: "/logos/mongodb.svg", color: "#47A248", category: "Data" },
  { name: "Redis", src: "/logos/redis.svg", color: "#FF4438", category: "Data" },
  { name: "Supabase", src: "/logos/supabase.svg", color: "#3FCF8E", category: "Data" },
  { name: "Prisma", src: "/logos/prisma.svg", color: "#64748B", category: "Data" },

  // Cloud & DevOps
  { name: "Docker", src: "/logos/docker.svg", color: "#2496ED", category: "Cloud & DevOps" },
  { name: "Kubernetes", src: "/logos/kubernetes.svg", color: "#326CE5", category: "Cloud & DevOps" },
  { name: "AWS", src: "/logos/aws.svg", color: "#FF9900", category: "Cloud & DevOps" },
  { name: "Vercel", src: "/logos/vercel.svg", color: "#38BDF8", category: "Cloud & DevOps" },
  { name: "Git", src: "/logos/git.svg", color: "#F05032", category: "Cloud & DevOps" },
  { name: "GitHub", src: "/logos/github.svg", color: "#A78BFA", category: "Cloud & DevOps" },
  { name: "Linux", src: "/logos/linux.svg", color: "#FCC624", category: "Cloud & DevOps" },
  { name: "Nginx", src: "/logos/nginx.svg", color: "#009639", category: "Cloud & DevOps" },

  // AI & Tools
  { name: "OpenAI", src: "/logos/openai.svg", color: "#10A37F", category: "AI & Tools" },
  { name: "Claude", src: "/logos/anthropic.svg", color: "#D97757", category: "AI & Tools" },
  { name: "Postman", src: "/logos/postman.svg", color: "#FF6C37", category: "AI & Tools" },
  { name: "Jest", src: "/logos/jest.svg", color: "#C21325", category: "AI & Tools" },
  { name: "Figma", src: "/logos/figma.svg", color: "#F24E1E", category: "AI & Tools" },
];
