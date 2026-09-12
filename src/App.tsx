import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const PROJECTS = [
  {
    num: "01",
    category: "Web",
    status: "LIVE PROJECT",
    title: "PEAS",
    description:
      "PEAS is an enrollment support system that facilitates academic advising by evaluating student grades, reviewing academic checklists, identifying failed courses, and generating semester-by-semester course projections.",
    tags: ["PHP", "MySQL", "JavaScript", "CSS"],
    keywords: ["Academic Advising", "Course Evaluation", "Student Information System"],
    mediaBg: "#D9D7D0",
    image: "/PEAS_landingpage.PNG",
    cta: { label: "View Project", href: "#" },
  },
  {
    num: "02",
    category: "Web",
    status: "LIVE PROJECT",
    title: "ASPLAN",
    description:
      "ASPLAN is a web-based, CSP-Greedy study plan generator for Cavite State University that eliminates error-prone manual checklist tracking. As a core developer, I built the Laravel backend, mapped the MySQL schemas, and integrated algorithmic logic to prevent delayed student graduations.",
    tags: ["Algorithmic Logic", "Laravel", "MySQL", "HTML", "CSS", "JavaScript"],
    keywords: ["Automated", "Study plan", "CSP-Greedy", "Systems Analysis"],
    mediaBg: "#1C1F22",
    image: "/ASPLAN_landing_page.PNG",
    cta: { label: "View Project", href: "#" },
  },
  {
    num: "03",
    category: "Mobile",
    status: "UNDER CONSTRUCTION",
    title: "PisoTrack",
    description:
      "PisoTrack is a mobile personal finance application that helps users monitor daily expenses and manage budgets. Built to simplify financial tracking, I developed the core UI components and integrated local data persistence to ensure a seamless, offline-first user experience.",
    tags: ["Kotlin", "Jetpack Compose", "Room Database"],
    keywords: ["Expense Tracking", "Personal Finance", "Offline-first"],
    mediaBg: "#2A3830",
    image: "/PisoTrack_landing.PNG",
    cta: { label: "View Project", href: "#" },
  },
];

const CAPABILITIES = [
  {
    area: "Web Development",
    items: ["React & Next.js", "Tailwind CSS", "PHP & MySQL", "JavaScript", "HTML & CSS"],
  },
  {
    area: "Mobile & Backend",
    items: ["Kotlin", "Jetpack Compose", "REST APIs", "Web APIs", "Systems Analysis"],
  },
  {
    area: "IT & Infrastructure",
    items: [
      "IT Support",
      "Network Troubleshooting",
      "Hardware Setup",
      "User Training",
      "Help Desk",
    ],
  },
  {
    area: "Workflow",
    items: [
      "Version Control (Git)",
      "Code Review",
      "Technical Writing",
      "Cross-team Collaboration",
      "Problem Diagnosis",
    ],
  },
];

const EXPERIENCE = [
  {
    role: "IT Support / Web Developer (OJT)",
    company: "Cavite State University – Carmona Campus",
    period: "July 2025 – Sept 2025",
    description:
      "Provided technical support and troubleshooting assistance to faculty and staff. Diagnosed and resolved hardware, software, and network-related issues while assisting in the development and maintenance of university web systems.",
  },
  {
    role: "Service Crew",
    company: "McDonald's Ulong Tubig Carmona",
    period: "July 2025 - July 2026",
    description:
      "Delivered fast and courteous customer service in a high-volume environment. Managed customer orders accurately and collaborated with team members to meet service targets during peak hours.",
  }
];

const PRINCIPLES = [
  {
    label: "01",
    heading: "Clarity first",
    body: "Write code and documentation that a colleague can understand without explanation. Readability is a feature.",
  },
  {
    label: "02",
    heading: "Verify before shipping",
    body: "Test assumptions against real data. Don't publish outcomes, metrics, or results that haven't been confirmed.",
  },
  {
    label: "03",
    heading: "Solve the actual problem",
    body: "Understand requirements before writing a line of code. The best solution is the one that addresses the root cause.",
  },
];

function useActiveSection() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return active;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleNavClick(href: string) {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="min-h-full bg-[#F5F4EF] text-[#111111]">
      {/* Skip link */}
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#245EE8] focus:text-white focus:text-sm focus:font-medium focus:rounded"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-[#F5F4EF]/95 backdrop-blur-sm border-b border-[#D9D7D0]" : ""
          }`}
      >
        <nav className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="font-[Sora] font-semibold text-[15px] tracking-tight text-[#111111] hover:text-[#245EE8] transition-colors focus:outline-none focus:text-[#245EE8]"
          >
            S.T.
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`font-[Manrope] text-[13px] font-medium tracking-wide uppercase transition-colors focus:outline-none focus:text-[#245EE8] ${active === link.href.slice(1)
                    ? "text-[#245EE8]"
                    : "text-[#737B88] hover:text-[#111111]"
                    }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 focus:outline-none focus:ring-2 focus:ring-[#245EE8] rounded"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span className={`block w-5 h-px bg-[#111111] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block w-5 h-px bg-[#111111] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-[#111111] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div ref={menuRef} className="md:hidden bg-[#F5F4EF] border-b border-[#D9D7D0] px-6 pb-6 pt-2">
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className={`font-[Manrope] text-[14px] font-medium tracking-wide uppercase transition-colors ${active === link.href.slice(1) ? "text-[#245EE8]" : "text-[#737B88]"
                      }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section className="max-w-[1200px] mx-auto px-6 md:px-12 pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Identity */}
            <div className="md:col-span-7 lg:col-span-8">
              <p className="font-[Manrope] text-[12px] font-bold tracking-[0.18em] uppercase text-[#111111] mb-6">
                Stephen Tiozon
              </p>
              <h1
                className="font-[Sora] font-extrabold leading-[1.05] tracking-tight mb-8"
                style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
              >
                <span className="block text-[#111111]">Web &</span>
                <span className="block text-[#111111]">Mobile</span>
                <span className="block text-[#111111]">App</span>
                <span className="block text-[#111111]">Developer.</span>
              </h1>
              <div className="max-w-[520px] mb-10 flex flex-col gap-5">
                <p className="font-[Manrope] text-[18px] leading-[1.6] text-[#111111]">
                  I'm a web and mobile app developer focused on building reliable systems and continuously expanding my understanding of software development.
                </p>
                <p className="font-[Manrope] text-[15px] leading-relaxed text-[#737B88]">
                  My hands-on experience centers on modern frontend tools like React, Next.js, and Tailwind CSS, alongside backend technologies like PHP and MySQL. I also build mobile interfaces and robust data layers using Kotlin, Jetpack Compose, Web APIs, and REST APIs.
                </p>
                <p className="font-[Manrope] text-[15px] leading-relaxed text-[#737B88]">
                  I use AI-assisted development as part of my workflow for research, implementation, debugging, and iteration — while taking ownership of architecture, technical decisions, validation, and the final product.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                  className="inline-flex items-center gap-2 bg-[#245EE8] hover:bg-[#174BC2] text-white font-[Manrope] text-[13px] font-semibold tracking-wide px-6 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-[#245EE8] focus:ring-offset-2 focus:ring-offset-[#F5F4EF]"
                >
                  Get in touch
                </a>
                <a
                  href="/Resume_Stephen-Tiozon.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[#D9D7D0] hover:border-[#111111] text-[#3B414B] hover:text-[#111111] font-[Manrope] text-[13px] font-semibold tracking-wide px-6 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-[#245EE8]"
                >
                  Resume ↗
                </a>
              </div>
              {/* Meta */}
              <div className="mt-12 flex flex-wrap gap-6 text-[12px] text-[#9AA1AD] font-[Manrope] font-medium tracking-wide uppercase">
                <span>Bulihan, Silang Cavite</span>
                <span className="text-[#D9D7D0]">·</span>
                <a href="https://linkedin.com/in/YOUR-PROFILE" target="_blank" rel="noopener noreferrer" className="hover:text-[#245EE8] transition-colors">LinkedIn</a>
                <span className="text-[#D9D7D0]">·</span>
                <a href="https://github.com/Stephen-Tiozon" target="_blank" rel="noopener noreferrer" className="hover:text-[#245EE8] transition-colors">GitHub</a>
              </div>
            </div>

            {/* Portrait */}
            <div className="md:col-span-5 lg:col-span-4 flex justify-center md:justify-end">
              <div className="w-[220px] h-[280px] md:w-[260px] md:h-[320px] border border-[#D9D7D0] relative overflow-hidden">
                <img src="/tiozon.jpg" alt="Stephen Tiozon" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="border-t border-[#D9D7D0]" />
        </div>

        {/* Work */}
        <section id="work" className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 md:py-28">
          {/* Section header */}
          <div className="flex items-center justify-between mb-14">
            <div className="flex items-center gap-2">
              <span className="font-[Manrope] text-[11px] text-[#245EE8]">↳</span>
              <span className="font-[Manrope] text-[11px] font-bold tracking-[0.2em] uppercase text-[#111111]">
                Selected Work
              </span>
            </div>
            <span className="font-[Manrope] text-[11px] font-semibold tracking-[0.18em] uppercase text-[#9AA1AD]">
              0{PROJECTS.length} Selected Projects
            </span>
          </div>

          <div className="flex flex-col">
            {PROJECTS.map((project, i) => (
              <ProjectRow key={project.num} project={project} isLast={i === PROJECTS.length - 1} />
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section id="capabilities" className="bg-[#121313] text-white py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="flex items-baseline gap-6 mb-16">
              <h2 className="font-[Sora] font-bold text-[13px] tracking-[0.2em] uppercase text-[#737B88]">
                Capabilities
              </h2>
              <div className="flex-1 border-t border-[#3B414B] mt-1" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {CAPABILITIES.map((cap) => (
                <div key={cap.area}>
                  <h3 className="font-[Sora] font-semibold text-[14px] text-white mb-5 tracking-tight">
                    {cap.area}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {cap.items.map((item) => (
                      <li key={item} className="font-[Manrope] text-[13px] text-[#9AA1AD] flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#245EE8] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="flex items-baseline gap-6 mb-16">
            <h2 className="font-[Sora] font-bold text-[13px] tracking-[0.2em] uppercase text-[#737B88]">
              Experience
            </h2>
            <div className="flex-1 border-t border-[#D9D7D0] mt-1" />
          </div>

          <div className="flex flex-col gap-0">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="grid md:grid-cols-12 gap-4 py-8 border-t border-[#D9D7D0] first:border-t-0 group">
                <div className="md:col-span-3">
                  <p className="font-[Manrope] text-[12px] font-semibold tracking-[0.12em] uppercase text-[#9AA1AD]">
                    {exp.period}
                  </p>
                </div>
                <div className="md:col-span-9">
                  <div className="flex items-baseline gap-3 mb-1">
                    <h3 className="font-[Sora] font-semibold text-[17px] text-[#111111] tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="font-[Manrope] text-[13px] text-[#9AA1AD]">— {exp.company}</span>
                  </div>
                  <p className="font-[Manrope] text-[14px] text-[#3B414B] leading-relaxed mt-2">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="border-t border-[#D9D7D0]" />
        </div>

        {/* About / Principles */}
        <section id="about" className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4">
              <p className="font-[Manrope] text-[11px] font-semibold tracking-[0.18em] uppercase text-[#245EE8] mb-4">
                How I work
              </p>
              <h2 className="font-[Sora] font-bold text-[32px] md:text-[40px] leading-tight tracking-tight text-[#111111]">
                Principles
              </h2>
              <p className="font-[Manrope] text-[14px] text-[#737B88] leading-relaxed mt-4">
                A few things that shape how I approach technical work and collaboration.
              </p>
            </div>
            <div className="md:col-span-8">
              <div className="flex flex-col">
                {PRINCIPLES.map((p, i) => (
                  <div key={i} className="flex gap-6 md:gap-10 py-8 border-t border-[#D9D7D0] first:border-t-0">
                    <span className="font-[Manrope] text-[11px] font-semibold tracking-[0.14em] uppercase text-[#D9D7D0] mt-1 flex-shrink-0 w-8">
                      {p.label}
                    </span>
                    <div>
                      <h3 className="font-[Sora] font-semibold text-[17px] text-[#111111] mb-2">
                        {p.heading}
                      </h3>
                      <p className="font-[Manrope] text-[14px] text-[#3B414B] leading-relaxed">
                        {p.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-[#EBE9E1] py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-12 gap-8 items-end">
              <div className="md:col-span-8">
                <p className="font-[Manrope] text-[11px] font-semibold tracking-[0.18em] uppercase text-[#245EE8] mb-5">
                  Contact
                </p>
                <h2
                  className="font-[Sora] font-extrabold leading-tight tracking-tight text-[#111111]"
                  style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
                >
                  Let's work together.
                </h2>
                <p className="font-[Manrope] text-[16px] text-[#3B414B] leading-relaxed mt-5 max-w-[460px]">
                  Open to new opportunities, collaborations, and interesting projects. Reach out and I'll get back to you promptly.
                </p>
              </div>
              <div className="md:col-span-4 flex flex-col gap-4 md:items-end">
                <a
                  href="mailto:tiozonstephenlaison@gmail.com"
                  className="inline-flex items-center gap-2 bg-[#245EE8] hover:bg-[#174BC2] text-white font-[Manrope] text-[13px] font-semibold tracking-wide px-8 py-4 transition-colors focus:outline-none focus:ring-2 focus:ring-[#245EE8] focus:ring-offset-2 focus:ring-offset-[#EBE9E1]"
                >
                  Email me ↗
                </a>
                <div className="flex gap-5 text-[12px] font-[Manrope] font-medium tracking-wide uppercase text-[#9AA1AD]">
                  <a href="#" className="hover:text-[#245EE8] transition-colors focus:outline-none focus:text-[#245EE8]">
                    Add LinkedIn URL
                  </a>
                  <a href="https://github.com/Stephen-Tiozon" target="_blank" rel="noopener noreferrer" className="hover:text-[#245EE8] transition-colors focus:outline-none focus:text-[#245EE8]">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#D9D7D0] bg-[#F5F4EF]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-[Manrope] text-[12px] text-[#9AA1AD]">
            © {new Date().getFullYear()} Stephen Tiozon. All rights reserved.
          </span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-[Manrope] text-[12px] font-semibold tracking-[0.14em] uppercase text-[#9AA1AD] hover:text-[#245EE8] transition-colors focus:outline-none focus:text-[#245EE8]"
          >
            Back to top ↑
          </button>
        </div>
      </footer>
    </div>
  );
}

function ProjectRow({
  project,
  isLast,
}: {
  project: (typeof PROJECTS)[0];
  isLast: boolean;
}) {
  return (
    <div className={`pt-6 pb-14 ${!isLast ? "border-b border-[#D9D7D0]" : ""}`}>
      {/* Row header: number/category + status */}
      <div className="flex items-center justify-between mb-5">
        <span className="font-[Manrope] text-[11px] font-bold tracking-[0.18em] uppercase text-[#111111]">
          {project.num}{" "}
          <span className="text-[#9AA1AD] font-semibold">/ {project.category}</span>
        </span>
        <span className="font-[Manrope] text-[11px] font-semibold tracking-[0.18em] uppercase text-[#9AA1AD]">
          {project.status}
        </span>
      </div>

      {/* Media + content */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start">
        {/* Media block */}
        {/* Media block */}
        <div className="w-full md:w-[75%] flex-shrink-0 relative" style={project.image ? {} : { aspectRatio: "16/9" }}>
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-3 relative overflow-hidden"
            style={{ backgroundColor: project.mediaBg }}
          >
            {project.image ? (
              <img src={project.image} alt={project.title} className="w-full h-auto block" />
            ) : (
              <>
                {/* Screenshot placeholder */}
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="opacity-30">
                  <rect x="4" y="6" width="24" height="20" rx="2" stroke="white" strokeWidth="1.5" />
                  <circle cx="11" cy="14" r="2" fill="white" />
                  <path d="M4 22l7-5 5 4 4-3.5 8 6.5" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
                <span className="font-[Manrope] text-[11px] font-medium tracking-wide text-white/40">
                  Add project screenshot
                </span>
              </>
            )}

            {/* Keyword pills — bottom right of media */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2">
              {(project.keywords ?? []).map((kw, i) => (
                <span key={i} className="flex items-center gap-2">
                  {i > 0 && <span className="text-white/30 text-[10px]">·</span>}
                  <span className="font-[Manrope] text-[10px] font-semibold tracking-[0.16em] uppercase text-white/50">
                    {kw}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content: title, description, tags, CTA */}
        <div className="flex flex-col justify-center flex-1 pt-2 md:pt-4">
          <h3
            className="font-[Sora] font-extrabold leading-[1.0] tracking-tight text-[#111111] mb-5"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)" }}
          >
            {project.title}
          </h3>
          <p className="font-[Manrope] text-[14px] leading-relaxed text-[#3B414B] mb-6 max-w-[340px]">
            {project.description}
          </p>
          {/* Tech tags */}
          <div className="flex flex-wrap gap-x-4 gap-y-1 mb-8">
            {(project.tags ?? []).map((tag) => (
              <span
                key={tag}
                className="font-[Manrope] text-[10px] font-bold tracking-[0.18em] uppercase text-[#9AA1AD]"
              >
                {tag}
              </span>
            ))}
          </div>
          {/* CTA */}
          <a
            href={project.cta.href}
            className="inline-flex items-center gap-1 font-[Manrope] text-[12px] font-bold tracking-[0.16em] uppercase text-[#111111] border-b border-[#111111] pb-0.5 w-fit hover:text-[#245EE8] hover:border-[#245EE8] transition-colors focus:outline-none"
          >
            {project.cta.label} <span className="text-[11px]">↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}
