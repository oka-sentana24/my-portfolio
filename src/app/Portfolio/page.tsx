import { Card, Chip } from "@mui/material";

interface PortFolio {
  img: string;
  title: string;
  status: string;
  description: string;
  date: string;
  tags: string[];
}

const portfolioData: PortFolio[] = [
  {
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    title: "Project One",
    status: "In Progress",
    description: "A brief description of Project One.",
    date: "2024-01-01",
    tags: ["React", "TypeScript", "CSS"],
  },
  {
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    status: "Finish",
    title: "Project Two",
    description: "A brief description of Project Two.",
    date: "2024-02-15",
    tags: ["Next.js", "Node.js", "MongoDB"],
  },
  // Add more projects here...
];

export default function PortFolio() {
  return (
    <>
      <div className="grid items-center justify-center">
        <h1 className="text-3xl text-center">Coding Projects</h1>
        <p className="text-center">All my coding projects</p>
      </div>
      {portfolioData.map((project, index) => (
        <div
          key={index}
          className="p-5 md:h-auto h-[47vh] items-top justify-center w-full flex md:my-8 my-0"
        >
          <div className="relative border border-slate-800 w-full md:w-[460px] md:h-[460px] h-[320px] flex items-center justify-center">
            <div className="absolute mx-5">
              <Card
                sx={{
                  border: 1,
                  borderRadius: 2,
                  borderColor: "grey.200",
                  p: 1,
                  "&:hover": {
                    transform: "scale(1.05)",
                    transition: "transform 0.2s",
                  },
                  width: { xs: "250px", sm: "300px" },
                  height: { xs: "250px", sm: "300px" },
                  position: "relative",
                  left: {
                    xs: index % 2 !== 0 ? "-34px" : "34px",
                    sm: index % 2 === 0 ? "84px" : "-84px",
                  },
                  bottom: { xs: "38px", sm: "90px" },
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
                sx={{
                  border: 1,
                  borderRadius: 2,
                  borderColor: "grey.200",
                  p: 1,
                  "&:hover": {
                    transform: "scale(1.05)",
                    transition: "transform 0.2s",
                  },
                  width: { xs: "250px", sm: "300px" },
                  height: { xs: "250px", sm: "300px" },
                  position: "absolute",
                  left: {
                    xs: index % 2 !== 0 ? "34px" : "-33px",
                    sm: index % 2 !== 0 ? "84px" : "-84px",
                  },
                  top: { xs: "38px", sm: "88px" },
                }}
              >
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl">{project.title}</h1>
                    <Chip label={project.status} />
                  </div>

                  <div className="py-5">
                    <p>{project.description}</p>
                  </div>

                  <div className="py-5">
                    <span className="border-b py-2 font-bold border-black cursor-pointer">
                      View Project Website
                    </span>
                  </div>
                  <div className="py-2">
                    <p>
                      <small>{project.date}</small>
                    </p>
                  </div>
                  <div>
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} style={{ marginRight: "5px" }}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
