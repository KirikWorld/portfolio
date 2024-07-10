import globalTheme from "../../theme";

export type ProjectType = {
  title: string;
  image?: string;
  link?: string;
  repo?: string;
  technologies: string[];
  description: string;
};

export const projectsRecord: ProjectType[] = [
  {
    title: "Kurayami Portfolio",
    image: "intro.png",
    repo: "https://github.com/KirikWorld/portfolio",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "MUI", "React"],
    description: "This is my portfolio site"
  },
  {
    title: "CTF KPK",
    image: "CTF.png",
    repo: "https://github.com/KirikWorld/ctf-kpk",
    link: "https://ctf-kpk.ru/",
    technologies: ["React", "TypeScript", "Django", "Python", "PostgreSQL"],
    description: `<span style="color: ${globalTheme.palette.primary.main}">CTF</span> platform for college and university students. This project was created for educational purposes.<br/>
      <span style="color: ${globalTheme.palette.primary.main}">CTF</span> - Capture The Flag competitive programming, where you can participate in programming competitions and earn points.`
  },
  {
    title: "Parsing Tool",
    image: "parser.png",
    link: "https://pt.cyberia-labs.ru/",
    technologies: [
      "React",
      "MUI",
      "Redux",
      "TypeScript",
      "NodeJS",
      "Express",
      "TypeORM",
      "SocketIO",
      "TessractJS",
      "Pizzip",
      "DocxTemplater",
      "Python",
      "Transformers",
      "PyTorch",
      "PostgreSQL",
      "Docker",
      "GitlabCI"
    ],
    description: `<span style="color: ${globalTheme.palette.primary.main}">Cyberia Parsing Tool</span> platform where you can parse and convert CV to any format. <br/>
    The program is designed to extract information from applicants' resume files. The program allows you to use artificial intelligence (AI) models to extract information from text or scanned resume files with any formatting. 
    The program makes it possible to generate a new text file with a given text formatting template, filling it with information extracted from the resume.<br/>
    <span style="color: ${globalTheme.palette.primary.main}">I am one of the authors of the patent!</span>`
  },
  {
    title: "RMS App",
    image: "RMS.png",
    technologies: [
      "React",
      "MUI",
      "Zustand",
      "Formik",
      "Yup",
      "TypeScript",
      "NodeJS",
      "Express",
      "TSOA",
      "Sequelize",
      "SocketIO",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "GitHubCI"
    ],
    description: `<span style="color: ${globalTheme.palette.primary.main}">RMS</span> app allow to create an applications with with already implemented complex datatypes (created with table flat links), add users to manage database, assign roles and more!`
  },
  {
    title: "Semantic Splitter",
    image: "hugging-face.jpg",
    technologies: ["Python", "Transformers", "PyTorch", "Pandas", "Numpy", "Scikit-learn", "NLTK"],
    description: `
    <span style="color: ${globalTheme.palette.primary.main}">Semantic Splitter</span> is a tool for splitting text into semantic units (by paragraphs or sentences).`
  }
];
