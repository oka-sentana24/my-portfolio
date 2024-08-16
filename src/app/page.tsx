import Image from "next/image";
import { CiCalendarDate } from "react-icons/ci";

interface BlogPost {
  title: string;
  description: string;
  date: string;
  tags: string[];
}

export default function Home() {
  const blogPosts: BlogPost[] = [
    {
      title: "Introduction to Next.js",
      description: "Learn the basics of Next.js in this introductory post.",
      date: "01/01/2024",
      tags: ["#Nextjs", "#React", "#JavaScript"],
    },
    {
      title: "Understanding React Hooks",
      description:
        "This post explains how React hooks work and how to use them.",
      date: "02/02/2024",
      tags: ["#React", "#Hooks"],
    },
    {
      title: "Building a Responsive Layout",
      description:
        "Tips and tricks for building responsive layouts in modern web apps.",
      date: "03/03/2024",
      tags: ["#CSS", "#Responsive", "#WebDesign"],
    },
    {
      title: "Getting Started with TypeScript",
      description:
        "A guide to getting started with TypeScript for JavaScript developers.",
      date: "04/04/2024",
      tags: ["#TypeScript", "#JavaScript"],
    },
    {
      title: "Best Practices for API Design",
      description: "Learn about the best practices for designing APIs.",
      date: "05/05/2024",
      tags: ["#API", "#Design"],
    },
    {
      title: "Optimizing Web Performance",
      description:
        "Techniques for optimizing the performance of web applications.",
      date: "06/06/2024",
      tags: ["#Performance", "#Optimization"],
    },
    {
      title: "Introduction to GraphQL",
      description:
        "A beginner's guide to understanding GraphQL and its benefits.",
      date: "07/07/2024",
      tags: ["#GraphQL", "#API"],
    },
    {
      title: "Building Scalable Applications",
      description:
        "Learn how to build applications that can scale effectively.",
      date: "08/08/2024",
      tags: ["#Scalability", "#Architecture"],
    },
    {
      title: "The Future of JavaScript",
      description: "Exploring the future trends and features of JavaScript.",
      date: "09/09/2024",
      tags: ["#JavaScript", "#Future"],
    },
    {
      title: "Deploying Next.js Apps",
      description: "A step-by-step guide to deploying Next.js applications.",
      date: "10/10/2024",
      tags: ["#Nextjs", "#Deployment"],
    },
  ];

  return (
    <main>
      {blogPosts.map((post, index) => (
        <div key={index} className="p-5 border-b border-slate-800 space-y-5">
          <h1 className="text-3xl">{post.title}</h1>
          <p>{post.description}</p>
          <div className="flex col-span-2 items-center justify-start gap-5">
            <div className="flex gap-2">
              <CiCalendarDate className="text-xl" />
              <p>{post.date}</p>
            </div>
            <div className="flex gap-2">
              {post.tags.map((tag, tagIndex) => (
                <p key={tagIndex}>{tag}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
