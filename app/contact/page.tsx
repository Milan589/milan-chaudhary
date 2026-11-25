

import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

import { profile } from "@/data/profile";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  const items = [
    ["Email", profile.email, `mailto:${profile.email}`],
    ["LinkedIn", "Connect with me", profile.linkedin],
    ["GitHub", "See my code", profile.github],
  ];

  return (
    <>
      <PageHero title="Contact" intro="Send me a message and I'll reply by email." />
      <section className="section">
        <div className="container contact-layout">
          <div className="card contact-form">
            <h2>Send a message</h2>
            <ContactForm />
          </div>

          <div className="contact-side">
            {items.map(([label, text, href]) => (
              <a
                className="card contact"
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                <h3>{label}</h3>
                <p>{text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
