import { Card } from "@mui/material";

export default function About() {
  const educationData = [
    {
      date: "2010 - 2014",
      title: "Bachelor of Computer Science",
      description:
        "XYZ University - Graduated with honors, focusing on software engineering, web development, and data structures. Actively participated in coding competitions and tech meetups.",
    },
    {
      date: "2015 - 2017",
      title: "Master of Information Technology",
      description:
        "ABC Institute of Technology - Specialized in full-stack web development, cloud computing, and artificial intelligence. Completed a thesis on optimizing web application performance.",
    },
    {
      date: "2018 - 2020",
      title: "Advanced Web Development Certification",
      description:
        "DEF Online Academy - Focused on modern JavaScript frameworks, RESTful API development, and responsive design. Built several real-world projects during the course.",
    },
  ];

  const skillData = [
    {
      title: "UI/UX",
      description:
        "Skilled in creating wireframes, mockups, and prototypes using design tools like Figma and Adobe XD. Knowledgeable in user research, information architecture, and interaction design principles.",
    },
    {
      title: "Frontend Development",
      description:
        "Knowledgeable in server-side technologies like Node.js, Express, and MongoDB. Experienced in building RESTful APIs, handling database operations, and deploying applications to cloud platforms.",
    },
    {
      title: "PHP",
      description:
        "Adept at integrating frontend and backend technologies to create end-to-end solutions. Experienced in version control, testing, debugging, and performance optimization.",
    },
    {
      title: "JavaScript",
      description:
        "Experienced in setting up CI/CD pipelines, containerization, and cloud services. Proficient in server configuration, monitoring, scaling, and security best practices.",
    },
    {
      title: "SEO",
      description:
        "Practiced in Agile frameworks like Scrum and Kanban. Skilled in sprint planning, backlog grooming, daily standups, and retrospectives. Experienced in collaborating with cross-functional teams to deliver high-quality software.",
    },
    {
      title: "Green Sock",
      description:
        "Practiced in Agile frameworks like Scrum and Kanban. Skilled in sprint planning, backlog grooming, daily standups, and retrospectives. Experienced in collaborating with cross-functional teams to deliver high-quality software.",
    },
  ];

  return (
    <>
      <div className="py-10 flex items-center justify-between col-span-2 gap-5 border-b border-slate-800">
        <div>
          <h1 className="text-3xl font-extrabold py-5">
            Hello, I’m Oka Sentana.
          </h1>
          <span>
            a passionate web developer with over 5 years of experience
            specializing in creating dynamic and responsive websites. I love
            turning complex problems into simple, beautiful, and intuitive
            designs. Whether you're looking to build a new site from scratch or
            improve an existing one, I'm here to help you bring your vision to
            life.
          </span>
        </div>
        <div>
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
              width: "400px",
              height: { xs: "250px", sm: "300px" },
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "inherit",
              }}
            />
          </Card>
        </div>
      </div>

      <div className="border-b border-slate-800 py-10">
        <h1 className="text-2xl pb-5">Education</h1>
        <div className="flex flex-col gap-5">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="grid border rounded-lg border-slate-800 p-4"
            >
              <span className="font-bold">{edu.date}</span>
              <h1 className="text-xl font-semibold">{edu.title}</h1>
              <p>{edu.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-b border-slate-800 py-10">
        <h1 className="text-2xl pb-5">Skill</h1>
        <div className="flex flex-wrap gap-5">
          {skillData.map((skill, index) => (
            <div
              key={index}
              className="grid border rounded-lg border-slate-800 p-4"
            >
              <h1 className="text-xl font-semibold">{skill.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
