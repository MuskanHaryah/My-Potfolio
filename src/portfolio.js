/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Muskan Haryah",
  title: "Hi all, I'm Muskan 👧",
  subTitle: emoji(
    "Full Stack Software Developer with expertise in MERN stack, Django, and AI integration. Building impactful web applications that solve real-world problems while maintaining productivity through intelligent automation. 🚀"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Y4lerBjV0EBGgMx_MhLfylCOziYh9esN/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/MuskanHaryah",
  linkedin: "https://www.linkedin.com/in/muskan-haryah-b4794b2ba/",
  gmail: "muskanharyah36@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WITH AI INTEGRATION EXPERTISE",
  skills: [
    emoji(
      "⚡ Build scalable full-stack web applications with MERN stack and Django"
    ),
    emoji("⚡ Integrate AI and machine learning features to enhance user experiences"),
    emoji(
      "⚡ Deploy cloud-based solutions on AWS and optimize database performance"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "express",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "django",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "NED University of Engineering and Technology",
      logo: require("./assets/images/nedLogo.png"),
      subHeader: "Bachelor of Science in Software Engineering",
      duration: "2023 - 2027",
      desc: "Passionate learner pursuing software engineering with focus on full-stack development and AI integration.",
      descBullets: [
        "Building strong foundation in data structures and algorithms",
        "Gaining hands-on experience with modern web technologies and cloud platforms"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "FULL STACK PROJECTS BUILT WITH MODERN TECHNOLOGIES",
  display: true,
  projects: [
    {
      image: require("./assets/images/Farm2Home.png"),
      projectName: "Farm2Home",
      projectDesc: "Modern e-commerce platform for fresh farm-to-consumer delivery. Built with Django and Stripe integration for secure payments, order management, and automated email notifications with 56+ organic products.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://farm2home.up.railway.app/"
        },
        {
          name: "View on GitHub",
          url: "https://github.com/MuskanHaryah/Farm2Home"
        }
      ]
    },
    {
      image: require("./assets/images/zoofari.png"),
      projectName: "Molan Zoofari",
      projectDesc: "Comprehensive Zoo Management System with Django backend and REST API. Features animal care management, staff coordination, visitor portal, role-based dashboards, and real-time task management with Cloudinary integration.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://zoo-management.up.railway.app/"
        },
        {
          name: "View on GitHub",
          url: "https://github.com/MuskanHaryah/Zoo-Management-"
        }
      ]
    },
    {
      image: require("./assets/images/InternshipMgtSys.png"),
      projectName: "Internship Management System",
      projectDesc: "Full-stack MERN platform for managing internship programs. Features admin dashboard, task management, performance tracking, real-time notifications, and dark mode with JWT authentication and MongoDB.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/MuskanHaryah/Internship-Management-System"
        }
      ]
    }
  ]
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Professional certifications demonstrating expertise in cloud computing, AI, and design",

  achievementsCards: [
    {
      title: "AWS Cloud Quest: Cloud Practitioner",
      subtitle:
        "Training Badge from Amazon Web Services. Master cloud computing and AWS services with hands-on experience.",
      image: require("./assets/images/awsLogo.png"),
      imageAlt: "AWS Cloud Quest Badge",
      footerLink: [
        {
          name: "View Credential",
          url: "https://www.credly.com/badges/01f150c4-9a3c-4bfe-86f9-e8d10838ead5/public_url"
        }
      ]
    },
    {
      title: "Google UX Design Professional Certificate",
      subtitle:
        "Comprehensive certification in User Experience Design covering UED, Prototyping, and design thinking methodologies. Issued Nov 2024.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google UX Design Certificate",
      footerLink: [
        {
          name: "View Credential",
          url: "https://www.credly.com/badges/c266dcd8-b1eb-4ef3-b660-49acfa049db5/public_url"
        }
      ]
    },

    {
      title: "Google AI Essentials V1",
      subtitle: "Certification in AI fundamentals covering Prompt Engineering and Critical Thinking. Issued Oct 2024.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google AI Essentials Badge",
      footerLink: [
        {name: "View Credential", url: "https://www.credly.com/badges/7bde7411-3eab-4ea6-8d6c-2aad29547eb6/public_url"}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "muskanharyah36@gmail.com",
  location: "Remote",
  openForOpportunities: "Yes"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
