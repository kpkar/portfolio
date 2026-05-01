import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Download,
  ExternalLink,
  Mail,
  Network,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import './styles.css';

const capabilities = [
  {
    icon: Code2,
    title: 'Full Stack Engineering',
    items: ['Java, Spring Boot, REST APIs, production-ready services, API contracts, observability, performance tuning, and clean product delivery.'],
  },
  {
    icon: Network,
    title: 'Architecture',
    items: ['Microservices architecture, distributed systems, event-driven design, domain boundaries, integration strategy, and technical decision leadership.'],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    items: ['AWS ECS, S3, SQS, CloudWatch, Azure App Services, Event Hub, Cosmos DB, Docker, Kubernetes, cloud migration, and cost optimization.'],
  },
  {
    icon: Database,
    title: 'Data & Messaging',
    items: ['Kafka, PostgreSQL, Couchbase, MongoDB, reliable data flows, transactional thinking, and scalable persistence choices.'],
  },
];

const services = [
  {
    price: 'Architecture',
    title: 'Full Stack System Design',
    text: 'Shape scalable service boundaries, data flows, integration contracts, and production operating models for teams that need clarity before they build.',
  },
  {
    price: 'Delivery',
    title: 'Java Microservices Build',
    text: 'Build REST APIs and Spring Boot services with maintainable code, observability, reliability, and clean handoff to engineering teams.',
  },
  {
    price: 'Modernization',
    title: 'Cloud Migration & Optimization',
    text: 'Move legacy or tightly coupled systems toward cloud-ready architectures across AWS and Azure while improving cost, scale, and maintainability.',
  },
  {
    price: 'Leadership',
    title: 'Technical Lead Support',
    text: 'Guide teams through architecture decisions, delivery planning, reviews, mentoring, and cross-functional alignment.',
  },
];

const timeline = [
  {
    role: 'SDE 3',
    company: 'Tesco Technology',
    period: '2023 - 2024',
    body: 'Designed and built product APIs, led architecture decisions, and improved performance for high-scale retail technology systems.',
  },
  {
    role: 'Technical Lead',
    company: 'Walmart Global Tech',
    period: '2020 - 2023',
    body: 'Led a 20-engineer team delivering distributed financial systems with strong ownership across architecture, security, and cost optimization.',
  },
  {
    role: 'Technical Lead',
    company: 'GE Aviation',
    period: '2018 - 2020',
    body: 'Built user access systems, delivered microservices, and supported cloud migration initiatives for enterprise aviation platforms.',
  },
];

const projects = [
  {
    title: 'Financial Data Platform',
    client: 'Walmart',
    tags: ['Distributed Systems', 'RBAC', 'API Architecture', 'Cost Optimization'],
    body: 'Designed a scalable financial data platform with secure role-based access, resilient APIs, and infrastructure choices that supported reliability at enterprise scale.',
  },
  {
    title: 'DMRO Cloud Migration',
    client: 'GE Aviation',
    tags: ['AWS', '40+ Microservices', 'Cloud Agnostic', 'Migration'],
    body: 'Migrated a large microservices estate to AWS, improving scalability and maintainability while keeping the platform adaptable across cloud environments.',
  },
  {
    title: 'Remote Connectivity Platform',
    client: 'GE Healthcare',
    tags: ['Medical Devices', 'Diagnostics', 'Monitoring', 'Full Stack'],
    body: 'Built platform systems for remote medical device connectivity, enabling monitoring and diagnostics workflows for healthcare operations.',
  },
];

const stats = [
  ['15+', 'years building enterprise systems'],
  ['20', 'engineers led on delivery teams'],
  ['40+', 'microservices migrated to AWS'],
];

const filters = [
  'Full Stack Architecture',
  'Microservices',
  'Cloud Migration',
  'Technical Leadership',
  'API Design',
  'Enterprise Systems',
];

function App() {
  return (
    <main className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <div className="surface-panel nav-shell">
          <a className="brand" href="#intro" aria-label="Kalpitha Karamadi home">
            <span>KK</span>
            <strong>Kalpitha Karamadi</strong>
          </a>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#intro">Intro</a>
            <a href="#services">Services</a>
            <a href="#resume">Resume</a>
            <a href="#work">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
          <a
            className="download-link"
            href="/kalpitha-karamadi-resume-2026.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download CV <Download size={15} />
          </a>
        </div>
      </header>

      <div className="portfolio-grid">
        <aside className="image-rail" aria-label="Kalpitha portfolio visual">
          <img src="/hero-architecture-bg.png" alt="" />
          <div className="image-overlay" />
          <div className="profile-card surface-panel">
            <p className="section-kicker">Kalpitha Karamadi</p>
            <h1>Technical Lead & Full Stack Developer</h1>
            <p>
              Scalable Java, microservices, cloud, APIs, and enterprise product delivery.
            </p>
          </div>
          <div className="rail-balance-grid">
            <article className="surface-panel rail-card">
              <span>15+</span>
              <p>Years building enterprise-grade systems</p>
            </article>
            <article className="surface-panel rail-card">
              <span>20</span>
              <p>Engineers led across delivery teams</p>
            </article>
            <article className="surface-panel rail-card wide">
              <p className="section-kicker">Core Strengths</p>
              <div>
                <span>Java</span>
                <span>Spring Boot</span>
                <span>Microservices</span>
                <span>AWS</span>
                <span>Azure</span>
              </div>
            </article>
          </div>
          <section id="services" className="rail-section">
            <div className="surface-panel">
              <p className="section-kicker">Services</p>
              <h2 className="section-title">Engagement Options</h2>
              <p className="section-copy">
                Flexible support for founders and teams that need scalable full stack
                foundations, better architecture, and reliable delivery execution.
              </p>
              <div className="service-grid">
                {services.map((service) => (
                  <article className="service-card" key={service.title}>
                    <p>{service.price}</p>
                    <h3>{service.title}</h3>
                    <span>{service.text}</span>
                    <a href="#contact">View Service Details</a>
                  </article>
                ))}
              </div>
              <div className="warranty">
                <p>Personal Warranty</p>
                <span>
                  Structured handoff and practical support after delivery for agreed
                  scope, implementation questions, and architecture continuity.
                </span>
              </div>
            </div>
          </section>
          <section className="rail-section">
            <div className="surface-panel">
              <p className="section-kicker">Career Timeline</p>
              <h2 className="section-title">Experience</h2>
              <div className="timeline">
                {timeline.map((item) => (
                  <article className="timeline-item" key={`${item.company}-${item.period}`}>
                    <div>
                      <span>{item.period}</span>
                      <h3>{item.role}</h3>
                      <p>{item.company}</p>
                    </div>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
          <section className="rail-section">
            <div className="surface-panel proof-panel">
              <ShieldCheck size={26} />
              <h2 className="section-title">Architecture with delivery discipline</h2>
              <p className="section-copy">
                I help teams move from unclear requirements and fragile services
                toward systems with explicit contracts, observability, ownership,
                and room to grow.
              </p>
              <div className="proof-points">
                <span><CheckCircle2 size={16} /> Security-aware API design</span>
                <span><Zap size={16} /> Performance optimization</span>
                <span><BriefcaseBusiness size={16} /> Stakeholder alignment</span>
              </div>
            </div>
          </section>
        </aside>

        <div className="content-rail">
          <section id="intro" className="content-section">
            <div className="surface-panel intro-panel">
              <div className="pill-row" aria-label="Specialties">
                <span className="pill">Strategy</span>
                <span className="pill">Architecture</span>
                <span className="pill">Development</span>
              </div>
              <p className="section-kicker">Introduction</p>
              <h2 className="section-title">Building reliable full stack systems</h2>
              <p className="lead-text">
                I am a Technical Lead with 15+ years of experience designing and
                delivering large-scale distributed systems for Tesco, Walmart, and GE.
                My work focuses on Java, Spring Boot, microservices, event-driven
                architecture, AWS, Azure, and production-ready engineering practices.
              </p>
              <div className="intro-actions">
                <a className="button primary" href="mailto:kalpita0803@gmail.com">
                  Contact Me <ArrowUpRight size={16} />
                </a>
                <span className="pill subtle">Open to remote and freelance work</span>
              </div>
              <div className="stats-grid">
                {stats.map(([value, label]) => (
                  <div key={value}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="resume" className="content-section">
            <div className="surface-panel">
              <p className="section-kicker">Capabilities</p>
              <h2 className="section-title">Resume Highlights</h2>
              <div className="capability-grid">
                {capabilities.map(({ icon: Icon, title, items }) => (
                  <article className="capability-card" key={title}>
                    <Icon size={20} />
                    <h3>{title}</h3>
                    <p>{items[0]}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="work" className="content-section">
            <div className="surface-panel">
              <p className="section-kicker">Projects</p>
              <h2 className="section-title">Selected Work</h2>
              <p className="section-copy">
                Representative systems across finance, aviation, healthcare, and
                enterprise technology.
              </p>
              <div className="filter-panel">
                <p>What are you hiring for?</p>
                <div>
                  {filters.map((filter) => (
                    <span className="pill" key={filter}>{filter}</span>
                  ))}
                </div>
              </div>
              <div className="project-list">
                {projects.map((project) => (
                  <article className="project-card" key={project.title}>
                    <div>
                      <span>{project.client}</span>
                      <h3>{project.title}</h3>
                      <p>{project.body}</p>
                    </div>
                    <div className="tag-list">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

        </div>
        <section id="contact" className="contact-span">
          <div className="surface-panel contact-panel">
            <p className="section-kicker">Contact</p>
            <h2 className="section-title">Let’s build something reliable</h2>
            <p className="section-copy">
              Open to remote opportunities, freelance full stack architecture work,
              and technical leadership engagements.
            </p>
            <div className="contact-actions">
              <a className="button primary" href="mailto:kalpita0803@gmail.com">
                <Mail size={18} />
                Email Kalpitha
              </a>
              <a
                className="button secondary"
                href="https://linkedin.com/in/kalpitha-karamadi"
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink size={18} />
                LinkedIn
              </a>
              <a
                className="button secondary"
                href="/kalpitha-karamadi-resume-2026.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Download size={18} />
                Resume
              </a>
            </div>
          </div>
        </section>
        <footer>
          <span>Kalpitha Karamadi</span>
          <span>Java | Microservices | Cloud Architecture</span>
          <a href="mailto:kalpita0803@gmail.com">kalpita0803@gmail.com</a>
        </footer>
      </div>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
