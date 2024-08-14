import globalTheme from "../../theme";
import getCookie from "../../util/cookie";

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
    link: "https://portfolio.kurayami.ru/",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "MUI", "React"],
    description: getCookie("lang") === "ru" ? "Это мое портфолио" : "This is my portfolio site"
  },
  {
    title: "AI simple chat",
    image: "ai.png",
    repo: "https://github.com/KirikWorld/simple-ai-chat",
    link: "https://ai.kurayami.ru/",
    technologies: ["Next.js", "TypeScript", "ShadCN", "React", "Tailwind"],
    description: getCookie("lang") === "ru" ? "Это простый чат бот без контекста" : "This is simple chat bot without context"
  },
  {
    title: "CTF KPK",
    image: "ctf.png",
    repo: "https://github.com/KirikWorld/ctf-kpk",
    link: "https://ctf-kpk.ru/",
    technologies: ["React", "TypeScript", "Django", "Python", "PostgreSQL"],
    description:
      getCookie("lang") === "ru"
        ? `<span style="color: ${globalTheme.palette.primary.main}">CTF</span> платформа для студентов колледжей и университетов. Этот проект был создан в образовательных целях.<br/>
        <span style="color: ${globalTheme.palette.primary.main}">CTF</span> - Capture The Flag, соревновательное программирование, где вы можете участвовать в программных конкурсах и зарабатывать очки.`
        : `<span style="color: ${globalTheme.palette.primary.main}">CTF</span> platform for college and university students. This project was created for educational purposes.<br/>
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
    description:
      getCookie("lang") === "ru"
        ? `<span style="color: ${globalTheme.palette.primary.main}">Cyberia Parsing Tool</span> платформа, где вы можете парсить и конвертировать резюме в любой формат.<br/>
        Программа предназначена для извлечения информации из файлов резюме соискателей. Она позволяет использовать модели искусственного интеллекта (ИИ) для извлечения информации из текста или сканированных файлов резюме с любым форматированием.
        Программа позволяет создавать новый текстовый файл с заданным шаблоном форматирования текста, заполняя его информацией, извлеченной из резюме.<br/>
        <span style="color: ${globalTheme.palette.primary.main}">Я являюсь одним из авторов патента!</span>`
        : `<span style="color: ${globalTheme.palette.primary.main}">Cyberia Parsing Tool</span> platform where you can parse and convert CV to any format. <br/>
        The program is designed to extract information from applicants' resume files. The program allows you to use artificial intelligence (AI) models to extract information from text or scanned resume files with any formatting. 
        The program makes it possible to generate a new text file with a given text formatting template, filling it with information extracted from the resume.<br/>
        <span style="color: ${globalTheme.palette.primary.main}">I am one of the authors of the patent!</span>`
  },
  {
    title: "RMS App",
    image: "rms.png",
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
    description:
      getCookie("lang") === "ru"
        ? `<span style="color: ${globalTheme.palette.primary.main}">RMS</span> приложение позволяет создавать приложения с уже реализованными сложными типами данных (созданными с использованием таблиц), добавлять пользователей для управления базой данных, назначать роли и многое другое!`
        : `<span style="color: ${globalTheme.palette.primary.main}">RMS</span> app allows to create applications with already implemented complex data types (created with table flat links), add users to manage database, assign roles, and more!`
  },
  {
    title: "Semantic Splitter",
    image: "hugging-face.jpg",
    technologies: ["Python", "Transformers", "PyTorch", "Pandas", "Numpy", "Scikit-learn", "NLTK"],
    description:
      getCookie("lang") === "ru"
        ? `<span style="color: ${globalTheme.palette.primary.main}">Semantic Splitter</span> это инструмент для разделения текста на семантические единицы (по абзацам или предложениям).`
        : `<span style="color: ${globalTheme.palette.primary.main}">Semantic Splitter</span> is a tool for splitting text into semantic units (by paragraphs or sentences).`
  }
];
