
import Image from "next/image";
import Navbar from "./Navbar";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Work", href: "#work" },
  { name: "Certifications", href: "#certifications" },
   { name: "Interests", href: "#interests" },
  { name: "Contact", href: "#contact" },
 
];

const skills = [
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    items: ["AWS", "Microsoft Azure", "Docker", "Kubernetes"],
  },
  {
    title: "Software Development",
    icon: "💻",
    items: ["Python", "Web Development", "Git & GitHub", "SQL"],
  },
  {
    title: "AI & Data",
    icon: "🧠",
    items: ["Machine Learning", "NLP", "Data Warehousing"],
  },
  {
    title: "Creative & Branding",
    icon: "🎨",
    items: ["Graphic Design", "Photoshop", "Canva", "Figma"],
  },
  {
    title: "Professional Skills",
    icon: "🤝",
    items: [
      "Communication",
      "Management",
      "Teamwork",
      "Digital Marketing",
    ],
  },
  {
    title: "Tools",
    icon: "⚙️",
    items: ["VS Code", "GitHub", "Cloud Platforms", "Canva"],
  },
];

const projects = [
  {
    title: "SPM Smart Parking & Eco System",
    type: "AI • IoT • Web",
    description:
      "An academic smart parking project exploring vehicle recognition, parking monitoring and web-based management.",
    technologies: ["AI", "IoT", "Web Development"],
  },
  {
    title: "Phishing SMS Detection System",
    type: "Machine Learning • NLP",
    description:
      "A text classification project exploring the detection of suspicious SMS messages using machine learning.",
    technologies: ["Python", "SVM", "BERT", "NLP"],
  },
  {
    title: "AWS Cloud Infrastructure",
    type: "Cloud Computing",
    description:
      "A practical AWS cloud infrastructure project with secure networking, compute, database and storage services.",
    technologies: ["AWS", "VPC", "EC2", "RDS", "S3"],
  },
  {
    title: "UI/UX Application Design",
    type: "Creative Technology",
    description:
      "Designing application interfaces and exploring user experiences using Figma.",
    technologies: ["Figma", "UI/UX"],
  },
];

const leadership = [
  {
    role: "Public Relations & Branding",
    organization: "SLTC Leo Club",
    description:
      "Contributing to creative publicity, branding and club communication initiatives.",
  },
  {
    role: "Media & Creative Activities",
    organization: "SLTC Media Unit",
    description:
      "Contributing to digital media and visual communication activities.",
  },
  {
    role: "Design Team Member",
    organization: "SIS — SLTC",
    description:
      "Supporting creative and design projects.",
  },
  {
    role: "Committee Member",
    organization: "ISACA — SLTC",
    description:
      "Assisting with technology-related events and meetings.",
  },
];

const education = [
  {
    degree: "Bachelor of Cloud Computing",
    institution: "Sri Lanka Technological Campus (SLTC)",
    period: "2024 – 2028 (Ongoing)",
    icon: "🎓",
  },
  {
    degree: "G.C.E. Advanced Level",
    institution: "R/Gamini Central College",
    period: "2022 (2023 Examination)",
    icon: "📚",
  },
  {
    degree: "G.C.E. Ordinary Level",
    institution: "R/Gamini Central College",
    period: "2018",
    icon: "📖",
  },
];

const certificates = [
  {
    name: "Diploma in Human Resource Management",
    year: "2022 – 2023",
    type: "Diploma",
  },
  {
    name: "English Language Certificate",
    year: "2022",
    type: "Language",
  },
  {
    name: "Tamil Language Certificate",
    year: "2022",
    type: "Language",
  },
  {
    name: "SLTCA English Course",
    year: "2022",
    type: "Language Studies",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-white">

      {/* NAVIGATION */}
     <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="fade-up mx-auto grid min-h-[75vh] max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2"
      >
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Cloud Computing • Technology • Creativity
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-blue-400">
              Thiranji Welgama.
            </span>
          </h1>

          <h2 className="mt-6 text-2xl font-medium text-slate-300 md:text-3xl">
            Building Solutions. Creating Impact.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            A Cloud Computing undergraduate passionate about
            technology, intelligent systems, digital creativity
            and practical innovation.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
            >
              Explore My Work ↗
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-slate-600 px-6 py-3 font-medium transition hover:border-blue-400"
            >
              Contact Me
            </a>

            <a
              href="mailto:wthiranji@gmail.com?subject=CV%20Request"
              className="rounded-lg border border-blue-500 px-6 py-3 font-medium text-blue-400 transition hover:bg-blue-600 hover:text-white"
            >
              Request CV ↗
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 rounded-3xl bg-blue-500/15 blur-2xl" />

          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-blue-400/30 shadow-2xl shadow-blue-950/40">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/profile.jpeg`}
              alt="Thiranji Welgama"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 384px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-slate-800 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold text-blue-400">
            01 / ABOUT
          </p>

          <h2 className="text-4xl font-bold">
            About Me
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            I am an undergraduate at Sri Lanka Technological Campus,
            pursuing a degree in Cloud Computing. I enjoy exploring
            new technologies, researching IT-related topics and
            developing practical digital solutions. My interests
            also include creative design, communication and leadership.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="bg-[#101B2E] px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold text-blue-400">
            02 / SKILLS
          </p>

          <h2 className="text-4xl font-bold">
            Skills & Expertise
          </h2>

          <p className="mt-4 max-w-2xl text-slate-400">
            A combination of technical, creative and professional skills.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((category) => (
              <article
                key={category.title}
                className="rounded-2xl border border-slate-700/60 bg-[#111C30] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50"
              >
                <span className="text-3xl">
                  {category.icon}
                </span>

                <h3 className="mt-5 text-xl font-semibold">
                  {category.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-blue-500/10 px-3 py-2 text-xs text-blue-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold text-blue-400">
            03 / PROJECTS
          </p>

          <h2 className="text-4xl font-bold">
            Featured Projects
          </h2>

          <p className="mt-4 max-w-2xl text-slate-400">
            Selected academic, technical and creative projects.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="flex flex-col rounded-2xl border border-slate-700/60 bg-[#111C30] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50"
              >
                <span className="text-4xl font-bold text-blue-400/40">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-8 text-xs font-medium uppercase tracking-wider text-blue-400">
                  {project.type}
                </p>

                <h3 className="mt-3 text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-4 flex-1 leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-blue-500/10 px-3 py-2 text-xs text-blue-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section
        id="experience"
        className="bg-[#101B2E] px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold text-blue-400">
            04 / LEADERSHIP
          </p>

          <h2 className="text-4xl font-bold">
            Leadership & Activities
          </h2>

          <p className="mt-4 max-w-2xl text-slate-400">
            Building communication, teamwork and creative experience
            through university activities.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {leadership.map((item) => (
              <article
                key={`${item.organization}-${item.role}`}
                className="rounded-2xl border border-slate-700/60 bg-[#111C30] p-8 transition hover:border-blue-500/50"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl text-blue-400">
                  ✦
                </div>

                <h3 className="text-xl font-semibold">
                  {item.role}
                </h3>

                <p className="mt-2 font-medium text-blue-400">
                  {item.organization}
                </p>

                <p className="mt-5 leading-7 text-slate-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold text-blue-400">
            05 / EDUCATION
          </p>

          <h2 className="text-4xl font-bold">
            Academic Background
          </h2>

          <p className="mt-4 max-w-2xl text-slate-400">
            My academic journey in computing and education.
          </p>

          <div className="mt-12 grid gap-5">
            {education.map((item) => (
              <article
                key={item.degree}
                className="flex flex-col gap-5 rounded-2xl border border-slate-700/60 bg-[#111C30] p-7 sm:flex-row sm:items-center"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-3xl">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    {item.degree}
                  </h3>

                  <p className="mt-2 font-medium text-blue-400">
                    {item.institution}
                  </p>

                  <p className="mt-2 text-sm text-slate-400">
                    {item.period}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section
        id="work"
        className="bg-[#101B2E] px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold text-blue-400">
            06 / WORK EXPERIENCE
          </p>

          <h2 className="text-4xl font-bold">
            Professional Experience
          </h2>

          <p className="mt-4 max-w-2xl text-slate-400">
            Practical experience in customer service, communication
            and organizational operations.
          </p>

          <article className="mt-12 rounded-2xl border border-slate-700/60 bg-[#111C30] p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-3xl">
                💼
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  Bank Employee — Loan Section
                </h3>

                <p className="mt-2 font-medium text-blue-400">
                  Regional Development Bank (RDB)
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  Duration: 6 Months
                </p>
              </div>
            </div>

            <div className="mt-7 border-t border-slate-700/60 pt-6">
              <p className="leading-8 text-slate-400">
                Worked as a team member in the loan section,
                assisting customers with loan applications
                and processing. Supported daily banking operations,
                handled customer inquiries and helped manage
                loan documentation.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold text-blue-400">
            07 / CERTIFICATIONS
          </p>

          <h2 className="text-4xl font-bold">
            Certifications & Qualifications
          </h2>

          <p className="mt-4 max-w-2xl text-slate-400">
            Additional learning and qualifications supporting
            my academic and professional development.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {certificates.map((certificate) => (
              <article
                key={certificate.name}
                className="rounded-2xl border border-slate-700/60 bg-[#111C30] p-7 transition hover:border-blue-500/50"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl text-blue-400">
                  ☆
                </div>

                <p className="text-xs font-medium uppercase tracking-wider text-blue-400">
                  {certificate.type}
                </p>

                <h3 className="mt-3 text-xl font-semibold">
                  {certificate.name}
                </h3>

                <p className="mt-4 text-sm text-slate-400">
                  {certificate.year}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}

{/* RESEARCH & PROFESSIONAL STRENGTHS */}
<section id="interests" className="bg-[#101B2E] px-6 py-24">
  <div className="mx-auto max-w-6xl">
    <p className="mb-3 text-sm font-semibold text-blue-400">
  08 / INTERESTS & STRENGTHS
    </p>

    <h2 className="text-4xl font-bold">
      Beyond the Classroom
    </h2>

    <p className="mt-4 max-w-2xl text-slate-400">
      Exploring emerging technologies while developing
      professional skills for real-world challenges.
    </p>

    <div className="mt-12 grid gap-6 md:grid-cols-2">
      <article className="rounded-2xl border border-slate-700/60 bg-[#111C30] p-8">
        <div className="mb-6 text-3xl">🔬</div>

        <h3 className="text-xl font-semibold text-white">
          Research Interests
        </h3>

        <ul className="mt-6 space-y-4 text-slate-400">
          {[
            "Cloud Computing Projects",
            "Exploring New Technologies",
            "Solving Technical Problems in ICT",
            "Cloud Infrastructure and Data Management",
            "Practical IT Solutions and Innovation",
            "Enhancing Digital Systems and Applications",
          ].map((interest) => (
            <li key={interest} className="flex items-start gap-3">
              <span className="text-blue-400">✦</span>
              <span>{interest}</span>
            </li>
          ))}
        </ul>
      </article>

      <article className="rounded-2xl border border-slate-700/60 bg-[#111C30] p-8">
        <div className="mb-6 text-3xl">🤝</div>

        <h3 className="text-xl font-semibold text-white">
          Professional Strengths
        </h3>

        <ul className="mt-6 space-y-4 text-slate-400">
          {[
            "Management Skills",
            "Digital Marketing",
            "Negotiation",
            "Critical Thinking",
            "Communication Skills",
          ].map((strength) => (
            <li key={strength} className="flex items-start gap-3">
              <span className="text-blue-400">✦</span>
              <span>{strength}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  </div>
</section>

     
{/* CONTACT SECTION */}
<section id="contact" className="border-t border-slate-800 bg-[#101B2E] px-6 py-24">
  <div className="mx-auto max-w-6xl">
    <div className="text-center">
      <p className="mb-3 text-sm font-semibold text-blue-400">
        09 / GET IN TOUCH
      </p>

      <h2 className="text-4xl font-bold text-white md:text-5xl">
        Let&apos;s Work Together.
      </h2>

      <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
        Open to professional opportunities, technology projects
        and creative collaborations. Feel free to connect with me.
      </p>
    </div>

    <div className="mt-12 grid gap-6 sm:grid-cols-2">
      <a
        href="mailto:wthiranji@gmail.com"
        className="rounded-2xl border border-slate-700/60 bg-[#111C30] p-7 transition hover:-translate-y-1 hover:border-blue-500"
      >
        <div className="mb-5 text-3xl">✉️</div>
        <h3 className="text-xl font-semibold">Email</h3>
        <p className="mt-3 break-all text-slate-400">
          wthiranji@gmail.com
        </p>
        <p className="mt-5 text-sm text-blue-400">
          Send an Email ↗
        </p>
      </a>

      <a
        href="https://www.linkedin.com/in/thiranji-welgama/"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-2xl border border-slate-700/60 bg-[#111C30] p-7 transition hover:-translate-y-1 hover:border-blue-500"
      >
        <div className="mb-5 text-3xl">💼</div>
        <h3 className="text-xl font-semibold">LinkedIn</h3>
        <p className="mt-3 text-slate-400">
          Connect with me professionally.
        </p>
        <p className="mt-5 text-sm text-blue-400">
          View LinkedIn ↗
        </p>
      </a>

      <a
        href="https://github.com/cit-24-01-0266-git"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-2xl border border-slate-700/60 bg-[#111C30] p-7 transition hover:-translate-y-1 hover:border-blue-500"
      >
        <div className="mb-5 text-3xl">💻</div>
        <h3 className="text-xl font-semibold">GitHub</h3>
        <p className="mt-3 text-slate-400">
          Explore my coding projects.
        </p>
        <p className="mt-5 text-sm text-blue-400">
          Visit GitHub ↗
        </p>
      </a>

      <a
        href="mailto:wthiranji@gmail.com?subject=CV%20Request"
        className="rounded-2xl border border-slate-700/60 bg-[#111C30] p-7 transition hover:-translate-y-1 hover:border-blue-500"
      >
        <div className="mb-5 text-3xl">📄</div>
        <h3 className="text-xl font-semibold">Request CV</h3>
        <p className="mt-3 text-slate-400">
          Contact me for my qualifications and experience.
        </p>
        <p className="mt-5 text-sm text-blue-400">
          Request Resume ↗
        </p>
      </a>
    </div>
  </div>
</section>


      {/* FOOTER */}
      <footer className="border-t border-slate-800 px-6 py-7 text-center text-sm text-slate-500">
        © 2026 Thiranji Welgama. All rights reserved.
      </footer>
    </main>
  );
}
