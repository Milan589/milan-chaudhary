import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { profile, skills } from "@/data/profile";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <>
      <PageHero title="About me" intro={profile.tagline} />

      <section className="section">
        <div className="container narrow about-copy">
          {profile.about.map((t, i) => (
            <p key={t} className={i === 0 ? "about-lead" : undefined}>{t}</p>
          ))}
          <p>
            <Link href="/contact" className="btn btn-dark">Get in touch</Link>
          </p>
        </div>
      </section>

      <section className="section alt" id="skills">
        <div className="container">
          <div className="section-head">
            <h2>Technical skills</h2>
          </div>
          <div className="grid">
            {skills.map((g, i) => (
              <div className={`card skill-card tone-${i % 3}`} key={g.group}>
                <div className="skill-head">
                  <h3>{g.group}</h3>
                  <span className="skill-count">{g.items.length}</span>
                </div>
                <ul className="tags">
                  {g.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}