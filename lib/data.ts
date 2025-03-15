export interface Course {
  id: string
  title: string
  description: string
  price: number
  author: string
  level: "Beginner" | "Intermediate" | "Advanced"
  tags: string[]
  image: string
  telegramLink: string
  featured?: boolean
}

export const courses: Course[] = [
  {
    "id": "1",
    "title": "100xDevs Cohort 3.0",
    "description": "Go from 0 to 100 with Harkirat Singh Live.Learn basics to advanced MERN, Basics to advanced Devops, System design and build 3 projects through this journey.",
    "price": 199.99,
    "author": "Harikat Singh",
    "level": "Advanced",
    "tags": ["Web Development", "Web3", "DevOps", "Rust", "Solidity", "Smart Contracts", "Projects"],
    "image": "https://i.ibb.co/8Ljg4VTC/image3.png",
    "telegramLink": "https://t.me/+vPSMryVZqHFjNzll",
    "featured": true
  },
  {
    id: "2",
    title: "Node.js Backend Development",
    description:
      "Go from 0 to 100 with Harkirat Singh Live.Learn basics to advanced MERN, Basics to advanced Devops, System design and build 3 projects through this journey",
    price: 129.99,
    author: "Harikat Singh",
    level: "Advanced",
    tags: ["Node.js", "Express", "Backend", "MongoDB","Devops"],
    image: "https://i.ibb.co/JFM4gbnn/579122bd-19f4-4925-8c18-efc06e5f5b55.jpg",
    telegramLink: "https://t.me/+vPSMryVZqHFjNzll",
    featured: true,
  },
  {
    id: "3",
    title: "Spring Boot 0 to 100 Course [2025] - ",
    description:
      "With Microservices, Kafka, Docker and Kubernetes.",
    price: 49.99,
    author: "Anuj",
    level: "Advanced",
    tags: ["Spring", "Spring Initializr", "MVC", "Kafka", "Docker", "Kubernetes"],
    image: "https://i.ibb.co/s9gnwsW8/image1.jpg",
    telegramLink: "https://t.me/+vPSMryVZqHFjNzll",
    featured: true,
  },
  {
    id: "4",
    title: "Video Editing Course",
    description:
      "Learn how to edit videos like a pro with this comprehensive course on Adobe Premiere Pro.",
    price: 159.99,
    author: "Tharun's",
    level: "Advanced",
    tags: ["video", "photo","editing", "Adobe Premiere Pro"],
    image: "https://i.ibb.co/SDXZv0xz/image15.jpg",
    telegramLink: "https://t.me/+vPSMryVZqHFjNzll",
  },
  {
    id: "5",
    title: "Namaste Frontend System Design 🚀",
    description:
      "Master the art of building scalable frontend applications with Next.js, React, and GraphQL.",
    price: 149.99,
    author: "Akshay saini",
    level: "Advanced",
    tags: ["Next.js", "React", "Full-Stack"],
    image: "https://i.ibb.co/7xz5bxcC/image2.jpg",
    telegramLink: "https://t.me/+vPSMryVZqHFjNzll",
  },
  {
    id: "6",
    title: "Namasate React 🚀",
    description:
      "Master the art of building scalable frontend applications with React",
    price: 89.99,
    author: "Akshay saini",
    level: "Beginner",
    tags: ["React", "Frontend"],
    image: "https://i.ibb.co/pj0SrwBQ/image4.jpg",
    telegramLink: "https://t.me/+vPSMryVZqHFjNzll",
  },
  {
    id: "7",
    title: "MERN Stack Development",
    description:
      "Build full-stack applications with MongoDB, Express, React, and Node.js.",
    price: 119.99,
    author: "Code with chai",
    level: "Intermediate",
    tags: ["nodejs", "API", "Backend","React", "Frontend"],
    image: "https://i.ibb.co/ycmhFdYZ/image13.jpg",
    telegramLink: "https://t.me/+vPSMryVZqHFjNzll",
  },
  {
    id: "8",
    title: "Data Structure and Algorithms",
    description:
    "Data Structures and Algorithms",
    price: 139.99,
    author: "Rohit negi",
    level: "Intermediate",
    tags: ["CPP", "DSA", "Data structure"],
    image: "https://i.ibb.co/DHRbbR9b/image11.jpg",
    telegramLink: "https://t.me/+vPSMryVZqHFjNzll",
  },
  {
    id: "9",
    title: "DSA with C++",
    description:
      "Data Structures and Algorithms with C++",
    price: 159.99,
    author: "Apna College",
    level: "Advanced",
    tags: ["c++", "apna", "clg", "DSA"],
    image: "https://i.ibb.co/VW8QZM8r/image8.jpg",
    telegramLink: "https://t.me/+vPSMryVZqHFjNzll",
  },
  {
    id: "10",
    title: "Web development and blokchain + DSA Full course",
    description:
    "Data Structures and Algorithms with C++ lus blockchain and web development",
    price: 159.99,
    author: "Daniel Lee",
    level: "Advanced",
    tags: ["DevOps", "Docker", "Kubernetes", "CI/CD"],
    image: "https://i.ibb.co/WNttShK1/image5.jpg",
    telegramLink: "https://t.me/+vPSMryVZqHFjNzll",
  },
  {
    id: "11",
    title: "The YouTube Blueprint: Make Content Creation Your Career!",
    description:
      "Have you ever dreamt of becoming a Youtuber? This is your blueprint to getting there. Whether you want to take up content creation as a full time career or a part-time job, this all-in-one course is your perfect plan of action.",
    price: 79.99,
    author: "Dhruv",
    level: "Intermediate",
    tags: ["youtube"],
    image: "https://i.ibb.co/zVZQ2Ksd/image14.jpg",
    telegramLink: "https://t.me/+vPSMryVZqHFjNzll",
  },
  {
    id: "12",
    title: "Backend with nodejs",
    description:
      "Learn backend with nodejs",
    price: 79.99,
    author: "Anurag Singh ProCodrr",
    level: "Intermediate",
    tags: ["nodejs", "backend","javascript"],
    image: "https://i.ibb.co/qMFSfcHY/image6.jpg",
    telegramLink: "https://t.me/+vPSMryVZqHFjNzll",
  },
  {
    id: "13",
    title: "Job Ready AI Powered Cohort: Complete Web Development + DSA + Aptitude",
    description:
      "Zero TO JOB-Ready in 5 Months",
    price: 79.99,
    author: "Sheryians coding school",
    level: "Intermediate",
    tags: ["MERN Stack","DSA with JS","AI powered","Placement Focus","Aptitude"],
    image: "https://ik.imagekit.io/sheryians/Job%20Ready%20Live%20Batch/IMG_5100_G2afyBQKH.JPG?updatedAt=1735827470404",
    telegramLink: "https://t.me/+vPSMryVZqHFjNzll",
  },
]