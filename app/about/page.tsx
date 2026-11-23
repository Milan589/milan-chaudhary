import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { profile, skills } from "@/data/profile";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <>
      <PageHero title="About me" intro={profile.tagline} />
      <section className="section">
        <div className="container narrow">
          {profile.about.map((t) => <p key={t}>{t}</p>)}
        </div>
      </section>
      <section className="section alt" id="skills">
        <div className="container">
          <h2>Technical skills</h2>
          <div className="grid">
            {skills.map((g) => (
              <div className="card" key={g.group}>
                <h3>{g.group}</h3>
                <ul className="tags">{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
