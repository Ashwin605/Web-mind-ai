// ============================================================
// COURSE CONFIGURATION
// ============================================================

export interface CourseDay {
  day: number;
  title: string;
  description?: string;
}

export interface Course {
  id: "website" | "app";
  title: string;
  subtitle: string;
  price: string;
  duration: string | null; // null = not yet confirmed
  durationLabel: string;
  format: string;
  dailyTime: string | null;
  description: string;
  topics: string[];
  syllabus: CourseDay[];
  ctaLabel: string;
}

export const websiteCourse: Course = {
  id: "website",
  title: "AI Website Development",
  subtitle: "From idea to live website in 15 days",
  price: "₹699",
  duration: "15 Days",
  durationLabel: "15-Day Programme",
  format: "Live Online Classes",
  dailyTime: "1 Hour / Day",
  description:
    "Learn how to create modern, responsive websites with the assistance of AI, from your first idea to publishing a live website.",
  topics: [
    "Website fundamentals",
    "AI prompting techniques",
    "AI website development tools",
    "Professional website design",
    "HTML and CSS fundamentals",
    "Website sections and layouts",
    "Responsive website development",
    "Images, icons and animations",
    "Forms and interactions",
    "Business websites",
    "E-commerce website basics",
    "SEO fundamentals",
    "Hosting and publishing",
    "Final website project",
  ],
  syllabus: [
    { day: 1, title: "Introduction to Websites & AI", description: "Understand what websites are, how the internet works, and how AI is changing digital creation." },
    { day: 2, title: "AI Prompting Techniques", description: "Master the art of communicating with AI tools to generate high-quality outputs." },
    { day: 3, title: "AI Website Development Tools", description: "Explore and compare the leading AI-powered website building platforms." },
    { day: 4, title: "Professional Website Design", description: "Learn design fundamentals — colour, typography, spacing and visual hierarchy." },
    { day: 5, title: "HTML & CSS Fundamentals", description: "Build a solid understanding of the building blocks of every website." },
    { day: 6, title: "Building Website Sections", description: "Construct headers, heroes, feature blocks, and footers with AI assistance." },
    { day: 7, title: "Responsive Website Development", description: "Make your website look great on every screen size and device." },
    { day: 8, title: "Images, Icons & Animations", description: "Add visual polish, micro-interactions and motion to your pages." },
    { day: 9, title: "Forms & User Interactions", description: "Create contact forms, interactive elements and feedback components." },
    { day: 10, title: "Business Website Development", description: "Build a complete business website with real-world structure and content." },
    { day: 11, title: "E-commerce Website Basics", description: "Understand the fundamentals of product listings, carts and checkout flows." },
    { day: 12, title: "SEO & Optimization", description: "Optimise your website for search engines and fast loading performance." },
    { day: 13, title: "Hosting & Publishing", description: "Deploy your website live using modern hosting platforms." },
    { day: 14, title: "Final Website Project", description: "Build your personal capstone project from concept to deployment." },
    { day: 15, title: "Project Presentation", description: "Present your finished project and receive structured feedback." },
  ],
  ctaLabel: "Enroll in Website Course",
};

export const appCourse: Course = {
  id: "app",
  title: "AI App Development",
  subtitle: "Build interactive applications with AI",
  price: "₹899",
  duration: "15 Days",
  durationLabel: "15-Day Programme",
  format: "Live Online Classes",
  dailyTime: "1 Hour / Day",
  description:
    "Learn how to transform your ideas into interactive mobile applications using AI-powered development tools, from concept to deployment.",
  topics: [
    "Introduction to app development",
    "App ideas and planning",
    "AI app development tools",
    "Effective AI prompting",
    "App UI/UX design fundamentals",
    "Building your first app",
    "Multiple screens and navigation",
    "Buttons, forms and interactions",
    "Data and database basics",
    "User authentication fundamentals",
    "API and external services",
    "AI-powered features",
    "Testing and debugging",
    "Final app project",
    "Project presentation",
  ],
  syllabus: [
    { day: 1, title: "Introduction to App Development and AI", description: "Understand mobile applications, app ecosystems, and how AI is revolutionizing app creation." },
    { day: 2, title: "Understanding App Ideas and Planning", description: "Learn how to brainstorm, validate and structure your app concept effectively." },
    { day: 3, title: "Exploring AI App Development Tools", description: "Discover and compare leading AI-powered platforms for building mobile applications." },
    { day: 4, title: "Effective AI Prompting for App Creation", description: "Master the techniques of communicating with AI to generate functional app components." },
    { day: 5, title: "App UI/UX Design Fundamentals", description: "Learn mobile design principles, user flows, and creating intuitive interfaces." },
    { day: 6, title: "Building Your First Application", description: "Create a simple, functional application from scratch using AI assistance." },
    { day: 7, title: "Creating Multiple Screens and Navigation", description: "Build multi-screen apps and implement smooth navigation between views." },
    { day: 8, title: "Adding Buttons, Forms and Interactions", description: "Design and implement interactive elements, user inputs and responsive controls." },
    { day: 9, title: "Working with Data and Database Basics", description: "Understand data storage, retrieval and management in mobile applications." },
    { day: 10, title: "User Authentication Fundamentals", description: "Implement login, signup and user session management features." },
    { day: 11, title: "Integrating APIs and External Services", description: "Connect your app to third-party services, data sources and web APIs." },
    { day: 12, title: "Adding AI-Powered Features", description: "Integrate intelligent capabilities like chatbots, image recognition or recommendations." },
    { day: 13, title: "App Testing, Debugging and Improvements", description: "Learn systematic testing, troubleshooting and polishing your application." },
    { day: 14, title: "Final App Development Project", description: "Build your complete capstone application from idea to functional prototype." },
    { day: 15, title: "Project Presentation and Demonstration", description: "Showcase your finished app and receive structured feedback from peers." },
  ],
  ctaLabel: "Enroll in App Course",
};
