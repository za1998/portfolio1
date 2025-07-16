/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Muhammad Reza",
  title: "Halo, saya Reza",
  subTitle: emoji("Saya seorang anak yang banyak keinginan di bidang apa saja."),
  resumeLink: "",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/za1998",
  gmail: "",
  facebook: "",
  display: true
};

// Skills Section
const skillsSection = {
  title: "Apa yang Saya Kuasai",
  subTitle: "FULL STACK DEVELOPER YANG MASIH TERUS BELAJAR DAN MENCOBA SEGALANYA",
  skills: [
    emoji("⚡ Membangun antarmuka web responsif dengan HTML, CSS, dan JavaScript"),
    emoji("⚡ Menggunakan React.js untuk membuat UI interaktif"),
    emoji("⚡ Pengembangan backend dengan Node.js dan PHP serta pengelolaan database MySQL")
  ],
  softwareSkills: [
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "ReactJS", fontAwesomeClassname: "fab fa-react" },
    { skillName: "NodeJS", fontAwesomeClassname: "fab fa-node" },
    { skillName: "PHP", fontAwesomeClassname: "fab fa-php" },
    { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git" },
    { skillName: "GitHub", fontAwesomeClassname: "fab fa-github" },
    { skillName: "Figma", fontAwesomeClassname: "fab fa-figma" },
    { skillName: "Netlify", fontAwesomeClassname: "fas fa-cloud" },
    { skillName: "Vercel", fontAwesomeClassname: "fas fa-rocket" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: false,
  schools: []
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend", progressPercentage: "80%" },
    { Stack: "Backend", progressPercentage: "70%" },
    { Stack: "Tools & Deployment", progressPercentage: "60%" }
  ],
  displayCodersrank: false
};

// Work experience section
const workExperiences = {
  display: false,
  experience: []
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

// Big Projects
const bigProjects = {
  title: "Project Unggulan",
  subtitle: "Berikut adalah beberapa project pribadi yang saya kembangkan:",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Aplikasi Web Pembukuan",
      projectDesc: "Aplikasi web untuk pembukuan mahasiswa dengan fitur login admin, input pemasukan dan pengeluaran, lihat history dan ekspor PDF.",
      footerLink: [
        { name: "Lihat Project", url: "https://github.com/za1998/Aplikasi-Web-Pembukuan" }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Aplikasi Web Absensi",
      projectDesc: "Aplikasi web absensi mahasiswa dengan fitur login admin dan input kehadiran.",
      footerLink: [
        { name: "Lihat Project", url: "https://github.com/za1998/Aplikasi-Web-Absensi" }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Sertifikat & Pencapaian 🏆"),
  subtitle: "Beberapa pencapaian dan sertifikat yang saya raih:",
  achievementsCards: [],
  display: false
};

const blogSection = {
  title: "Blog",
  subtitle: "Saya suka menulis tentang pengalaman saya di dunia programming.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "TALKS",
  subtitle: emoji("Saya senang berbagi pengetahuan di berbagai kesempatan."),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Belum ada podcast saat ini.",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Silakan unduh CV saya di bawah ini.",
  display: false
};

const contactInfo = {
  title: emoji("Hubungi Saya ☎️"),
  subtitle: "Diskusikan project atau hanya sekadar menyapa.",
  number: "",
  email_address: ""
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

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
