export const portfolioData = {
  header: {
    name: "Joshua Estrada",
    title: "Software Engineer",
    bio: "Computer Science + Math graduate at Cal Poly Pomona. Passionate about autonomous systems, software engineering, and modern tech",
    email: "student.joshuaestrada@gmail.com",
    github: "https://github.com/joestrada1022",
    linkedin: "https://www.linkedin.com/in/joshua-estrada22/",
  },
  experience: [
    {
      company: "RTX",
      role: "Software Engineering I",
      duration: "Incoming",
      description: ""
    },
    {
      company: "PARES AI (YC 25)",
      role: "Software Engineering Intern",
      duration: "August 2025 - February 2026",
      description: "Developed full-stack subscription and quota management systems using Next.js and Supabase. Refactored legacy Twilio workflows into reusable backend endpoints to support standalone outbound dialing."
    },
    {
      company: "Student Unmanned Aerial Systems",
      role: "Software Team Lead",
      duration: "August 2023 - August 2025",
      description: "Led a team of 5 students to develop autonomous flight control software using ROS and Mavlink and simulations using SITL and Gazebo. Coordinated directly with Lockheed Martin sponsors."
    },
    {
      company: "Lutron Electronics",
      role: "Software Engineering Intern",
      duration: "June 2025 - August 2025",
      description: "Optimized the interactive floorplan applet using React Konva and TypeScript, improving rendering speeds by 28%. Engineered a custom hierarchical clustering algorithm to enhance UI clarity and integrated Cypress for automated testing."
    },
    {
      company: "NSF REU Security of Smart Things",
      role: "Machine Learning Researcher",
      duration: "June 2024 - July 2024",
      description: "Researched adversarial GAN attacks on video classifiers, achieving a 40% misclassification rate while maintaining visual fidelity. Built an optimized data pipeline using OpenCV and NumPy that increased preprocessing speeds by 35%."
    }
  ],
  projects: [
    {
      title: "Medifind",
      description: "A full stack medication info platform built with Next.js, Supabase, and deployed with Vercel",
      technologies: ["Next.js", "Javascript", "Supabase", "Puppeteer", "FDA API"],
      link: "https://github.com/J-cmar/BH2025New"
    },
    {
      title: "Smart Doorbell Security System",
      description: "Mobile-first smart doorbell system with Raspberry Pi Camera and Flutter Mobile app. Built using AWS, Flask, SQLite",
      technologies: ["Flutter", "Raspberry Pi", "AWS (EC2, Lambda, API Gateway)", "Firebase", "FFMPEG", "Flask"],
      link: "https://github.com/MichaelC609/Dart-B-RingApp#"
    },
    {
      title: "Fridge Scanner Recipe App",
      description: "Mobile app that scans your fridge for ingredients and generates possible recipes based off of them as well as gives you example meal plans you can have with those recipes.",
      technologies: ["React Native", "Express.js"],
      link: "https://github.com/wheatleyinabox/fridge-recipe-app"
    }
  ]
};