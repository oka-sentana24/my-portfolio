import { Card } from "@mui/material";

interface PortFolio {
  img: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

const portfolioData: PortFolio[] = [
  {
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    title: "Project One",
    description: "A brief description of Project One.",
    date: "2024-01-01",
    tags: ["React", "TypeScript", "CSS"],
  },
  //   {
  //     img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
  //     title: "Project Two",
  //     description: "A brief description of Project Two.",
  //     date: "2024-02-15",
  //     tags: ["Next.js", "Node.js", "MongoDB"],
  //   },
  // Add more projects here...
];

export default function PortFolio() {
  return (
    <div className="p-[48px] h-auto items-top justify-center w-full flex">
      {portfolioData.map((project, index) => (
        <div className="relative border border-slate-800 w-[300px] h-[300px] flex items-center justify-center my-20">
          <div className="absolute mx-5">
            <Card
              key={index}
              sx={{
                border: 1,
                borderRadius: 2,
                borderColor: "grey.200",
                p: 1,
                "&:hover": {
                  transform: "scale(1.05)",
                  transition: "transform 0.2s",
                },
                width: "300px",
                height: "300px",
                position: "relative",
                left: "100px",
                bottom: "80px",
              }}
            >
              <img
                src={project.img}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "inherit",
                }}
              />
            </Card>
            <Card
              key={index}
              sx={{
                border: 1,
                borderRadius: 2,
                borderColor: "grey.200",
                p: 1,
                "&:hover": {
                  transform: "scale(1.05)",
                  transition: "transform 0.2s",
                },
                width: "300px",
                height: "300px",
                position: "absolute",
                right: "100px",
                top: "80px",
              }}
            >
              <span>test</span>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
}
