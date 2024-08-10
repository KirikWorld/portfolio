export type ExperienceRecord = {
  positionEN: string;
  positionRU: string;
  date: string;
  media?: string;
  companyEN: string;
  companyRU: string;
  responsibilitiesEN: string[];
  responsibilitiesRU: string[];
  technologies: string[];
};

export default [
  {
    positionEN: "Fullstack Developer",
    positionRU: "Fullstack Разработчик",
    date: "10.2022 - 05.2023",
    media: "/MIREA_colour.png",
    companyEN: "MIREA College",
    companyRU: "Колледж МИРЭА",
    responsibilitiesEN: [
      `Website development for cybersecurity competitions - <a href="https://ctf-kpk.ru" target="_blank">ctf-kpk.ru</a> <br/>
      The essence of the site is to solve information security problems by hacking, searching and finding the necessary key to get points (a rating system, team and single competitions have been implemented)`,
      `Development of an admin panel for downloading tasks of various categories for CTF (osint, reverse, web, etc)`,
      `Developing and maintaining the database`,
      `Now the students continue to work on the site without me`
    ],
    responsibilitiesRU: [
      `Разработка сайта для соревнований по кибербезопасности - <a href="https://ctf-kpk.ru" target="_blank">ctf-kpk.ru</a> <br/>
      Суть сайта заключается в решении задач по информационной безопасности путем взлома, поиска и нахождения необходимого ключа для получения очков (реализована система рейтинга, командные и одиночные соревнования)`,
      `Разработка панели администратора для загрузки задач различных категорий для CTF (osint, reverse, web и т. д.)`,
      `Разработка и поддержка базы данных`,
      `В настоящее время студенты продолжают работу над сайтом без моего участия`
    ],
    technologies: ["Python", "Django", "Javascript", "React", "MySQL", "Apache"]
  },
  {
    positionEN: "Fullstack Developer",
    positionRU: "Fullstack Разработчик",
    date: "09.2023 - 09.2023",
    media: "/ToyTruck.png",
    companyEN: "Freelance",
    companyRU: "Фриланс",
    responsibilitiesEN: [
      `Development of a client part for a private entrepreneur engaged in vehicle evacuation`,
      `Development of an admin panel for viewing and adding reviews about a private entrepreneur`,
      `Site deployment`
    ],
    responsibilitiesRU: [
      `Разработка клиентской части для частного предпринимателя, занимающегося эвакуацией транспортных средств`,
      `Разработка панели администратора для просмотра и добавления отзывов о частном предпринимателе`,
      `Развертывание сайта`
    ],
    technologies: ["Python", "FastAPI", "SQLAlchemy", "SQLAdmin", "Typescript", "React", "MySQL", "Apache"]
  },
  {
    positionEN: "Junior Fullstack Developer",
    positionRU: "Младший Fullstack Разработчик",
    date: "06.2023 - 11.2023",
    companyEN: "Finamatics",
    companyRU: "Finamatics",
    responsibilitiesEN: [
      `Development of an SSO system from scratch to MVP. Development of an ERP system from scratch to MVP.
      Construction of the project architecture. Discussion and solution of business problems related to the project. Coming up with features.`,
      `I had to solve problems with system performance, for this I used optimized SQL queries and SQL views (building graphs, for example). Also used caching and indexing.`,
      `Since the system was designed to allow multiple users to work in one space, I had to use sockets to solve the problem with change conflicts and hashing the current state to track changes using sockets.`,
      `Deployed the system using nginx and docker, set up a pipeline for gitlab`
    ],
    responsibilitiesRU: [
      `Разработка системы SSO с нуля до MVP. Разработка ERP-системы с нуля до MVP.
      Построение архитектуры проекта. Обсуждение и решение бизнес-проблем, связанных с проектом. Придумывание функций.`,
      `Пришлось решать проблемы с производительностью системы, для этого использовал оптимизированные SQL-запросы и SQL-представления (строительство графиков, например). Также использовал кэширование и индексацию.`,
      `Поскольку система была спроектирована для работы нескольких пользователей в одном пространстве, я использовал сокеты для решения проблемы конфликтов изменений и хэширования текущего состояния для отслеживания изменений с помощью сокетов.`,
      `Развертывание системы с использованием nginx и docker, настройка пайплайна для gitlab`
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
    positionEN: "Junior Fullstack Developer",
    positionRU: "Младший Fullstack Разработчик",
    date: "09.2023 - ...",
    companyEN: "Cyberia",
    companyRU: "Cyberia",
    media: "/logocyberia.png",
    responsibilitiesEN: [
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
    responsibilitiesRU: [
      "Разработал систему SSO для корпоративных сервисов с ролевой моделью и системой оплаты.",
      "Работал над парсером резюме с использованием искусственного интеллекта. Написал дизайнер запросов и ответов для определения наилучшего запроса.",
      "Сделал предварительный просмотр PDF с использованием pdfjs и блокировал копирование текста из документа.",
      "Написал код для копирования и распознавания текста из PDF изображений с использованием tesseract.js.",
      "Разработал систему логирования и проверки работы сервисов с использованием Python. Система логирования отправляет рабочее состояние сервисов и серверов по электронной почте.",
      "Разработал панель администратора для отслеживания логов и состояния сервисов и серверов. Установил ее на виртуальную машину с использованием Proxmox.",
      "Помогал в доработке функционала ERP-системы odoo, написав код на Python, который позволяет выполнять альтернативные расчеты.",
      "Обучил классификатор текста с использованием CoreML, осуществлял текстовое и лицевое распознавание с использованием Apple Vision и Swift.",
      "Обучил классификатор текста с использованием Transformers. Классификатор может использоваться для распознавания должностей.",
      "Помогал новым сотрудникам с адаптацией."
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
