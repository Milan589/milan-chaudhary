import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { profile } from "@/data/profile";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  const items = [
    ["Email", profile.email, `mailto:${profile.email}`],
    ["LinkedIn", "Connect with me", profile.linkedin],
    ["GitHub", "See my code", profile.github],
  ];
  return (
    <>
      <PageHero title="Contact" intro="Email is the quickest way to reach me." />
      <section className="section">
        <div className="container grid">
          {items.map(([label, text, href]) => (
            <a className="card contact" key={label} href={href}
               target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
              <h3>{label}</h3>
              <p>{text}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
