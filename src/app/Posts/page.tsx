interface BlogPost {
  date: string; // ISO format date (e.g., "2024-08-17")
  title: string;
}

const blogPosts: BlogPost[] = [
  { date: "2024-08-01", title: "Understanding TypeScript" },
  { date: "2023-05-20", title: "Getting Started with Next.js" },
  { date: "2024-07-10", title: "Advanced React Patterns" },
  { date: "2023-02-15", title: "Introduction to JavaScript" },
];

function groupPostsByYear(posts: BlogPost[]) {
  return posts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear().toString();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as Record<string, BlogPost[]>);
}

export default function Posts() {
  const groupedPosts = groupPostsByYear(blogPosts);

  return (
    <div className="space-y-5">
      {Object.entries(groupedPosts).map(([year, posts]) => (
        <div key={year} className=" space-y-5 border-b border-slate-800">
          <h1 className="text-3xl">{year}</h1>
          <ul className=" space-y-5 pb-5">
            {posts.map((post, index) => (
              <li key={index} className="flex items-center justify-between">
                {post.title}
                <strong>{new Date(post.date).toLocaleDateString()}</strong>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
