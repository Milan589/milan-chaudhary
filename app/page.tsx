// import Link from "next/link";
// import ProjectCard from "@/components/ProjectCard";
// import { profile, projects, skills } from "@/data/profile";

// export default function Home() {
//   return (
//     <>
//       <section className="hero">
//         <div className="container">
//           <p className="hero-role">{profile.title}</p>
//           <h1>{profile.name}</h1>
//           <p className="hero-tag">{profile.tagline}</p>
//           <div className="actions">
//             <Link href="/projects" className="btn btn-dark">View projects</Link>
//             <Link href="/contact" className="btn btn-outline">Get in touch</Link>
//           </div>
//         </div>
//       </section>

//       <section className="section">
//         <div className="container narrow">
//           <h2>About me</h2>
//           {profile.about.map((t) => <p key={t}>{t}</p>)}
//           <p><Link href="/about" className="more">Read more about me</Link></p>
//         </div>
//       </section>

//       <section className="section alt">
//         <div className="container">
//           <div className="section-head">
//             <h2>Featured projects</h2>
//             <Link href="/projects" className="more">All projects</Link>
//           </div>
//           <div className="grid">
//             {projects.slice(0, 3).map((p, i) => <ProjectCard key={p.slug} p={p} tone={i} />)}
//           </div>
//         </div>
//       </section>

//       <section className="section">
//         <div className="container">
//           <div className="section-head">
//             <h2>Technical skills</h2>
//             <Link href="/about#skills" className="more">See all skills</Link>
//           </div>
//           <ul className="tags big">
//             {skills.flatMap((g) => g.items).slice(0, 12).map((s) => <li key={s}>{s}</li>)}
//           </ul>
//         </div>
//       </section>
//     </>
//   );
// }

import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { profile, projects, skills } from "@/data/profile";

export default function Home() {
  const initials = profile.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-avatar">
            {profile.avatar ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={profile.avatar} alt={profile.name} />
            ) : (
              <span>{initials}</span>
            )}
          </div>

          <p className="hero-role">{profile.title}</p>
          <h1>{profile.name}</h1>
          <p className="hero-tag">{profile.tagline}</p>

          <div className="actions">
            <Link href="/projects" className="btn btn-dark">
              View projects
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <h2>About me</h2>
          {profile.about.map((t) => <p key={t}>{t}</p>)}
          <p>
            <Link href="/about" className="more">
              Read more about me
            </Link>
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>Featured projects</h2>
            <Link href="/projects" className="more">All projects</Link>
          </div>
          <div className="grid">
            {projects.slice(0, 3).map((p, i) => (
              <ProjectCard key={p.slug} p={p} tone={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Technical skills</h2>
            <Link href="/about#skills" className="more">See all skills</Link>
          </div>
          <ul className="tags big">
            {skills.flatMap((g) => g.items).slice(0, 12).map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}