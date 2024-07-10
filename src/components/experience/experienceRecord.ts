export type ExperienceRecord = {
  position: string;
  date: string;
  media?: string;
  company: string;
  responsibilities: string[];
  technologies: string[];
};

export default [
  {
    position: "Fullstack Developer",
    date: "10.2022 - 05.2023",
    media: "/MIREA_colour.png",
    company: "MIREA College",
    responsibilities: [
      `Website development for cybersecurity
            competitions - <a href="https://ctf-kpk.ru" target="_blank">ctf-kpk.ru</a> <br/>
            The essence of the site is to solve
            information security problems by
            hacking, searching and finding the
            necessary key to get points (a rating
            system, team and single competitions
            have been implemented)`,
      `Development of an admin panel for
            downloading tasks of various categories
            for ctf (osint, reverse, web, etc)`,
      `Developing and maintaining the database`,
      `Now the students continue to work on the site without me`
    ],
    technologies: ["Python", "Django", "Javascript", "React", "MySQL", "Apache"]
  },
  {
    position: "Fullstack Developer",
    date: "09.2023 - 09.2023",
    media: "/ToyTruck.png",
    company: "Freelance",
    responsibilities: [
      `Development of a client part for a private entrepreneur engaged in vehicle evacuation`,
      `Development of an admin panel for viewing and adding reviews about a private entrepreneur`,
      `Site deployment`
    ],
    technologies: ["Python", "FastAPI", "SQLAlchemy", "SQLAdmin", "Typescript", "React", "MySQL", "Apache"]
  },
  {
    position: "Junior Fullstack Developer",
    date: "06.2023 - 11.2023",
    company: "Finamatics",
    responsibilities: [
      `Development of an SSO system from scratch to MVP. Development of an erp system from scratch to MVP.
            Construction of the project architecture. Discussion and solution of business problems related to the project. Coming up with features.`,
      `I had to solve problems with system performance, for this I used optimized sql queries and sql views (building graphs, for example). Also used caching and indexing.`,
      `Since the system was designed to allow multiple users to work in one space, I had to use sockets to solve the problem with change conflicts and hashing the current state to track changes using sockets.`,
      `Deployed the system using nginx and docker, set up a pipeline for gitlab`
    ],
    technologies: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "TypeScript",
      "NodeJS",
      "React",
      "Formik",
      "Yup",
      "Zustand",
      "ExpressJS",
      "Sequelize",
      "Class-transformer/validator",
      "Socket.io",
      "PostgreSQL",
      "Docker",
      "MySQL",
      "Nginx",
      "Gitlab",
      "Redis"
    ]
  },
  {
    position: "Junior Fullstack Developer",
    date: "09.2023 - present",
    company: "Cyberia",
    media: "/logocyberia.png",
    responsibilities: [
      "Developed an SSO system for company services with a role model and payment system.",
      "Worked on a resume parser using artificial intelligence. Wrote a query and response designer to identify the best prompt.",
      "I made a pdf preview using pdfjs and block copying of text from the document.",
      "Wrote copying and text recognition from image PDF using tesseract.js.",
      "Developed a logging system and checking the operation of services using python. The logging system sends the operating status of services and servers by email.",
      "Developed an admin panel to track logs and states of services and servers. I installed it on a virtual machine using proxmox.",
      "Helped in finalizing the functionality of the odoo erp system by writing python code that allows for alternative calculations.",
      "Trained a text classifier using CoreML, did text and face recognition using Apple vision and Swift.",
      "Trained a text classifier using Transformers. Classifier can be used for job position recognition.",
      "Helped new employees with adaptation."
    ],
    technologies: [
      "Python",
      "Torch",
      "Transformers",
      "Tensorflow",
      "CoreML",
      "Apple Vision",
      "Tesseract",
      "TypeScript",
      "NodeJS",
      "React",
      "MUI",
      "Tailwind",
      "Formik",
      "Zod",
      "Redux",
      "MobX",
      "ExpressJS",
      "TSOA",
      "TypeORM",
      "Class-transformer/validator",
      "Socket.io",
      "PostgreSQL",
      "Docker",
      "Nginx",
      "Gitlab",
      "Ollama",
      "VLLM",
      "LLava/LLama",
      "Yookassa",
      "Proxmox"
    ]
  }
] as ExperienceRecord[];
