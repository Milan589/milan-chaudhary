import type { Metadata } from "next";
import { Newsreader, Instrument_Sans } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
// import Footer from "@/components/Footer";
import { profile } from "@/data/profile";
import "./globals.css";

const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});
const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${profile.name} | ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description: `Portfolio and online CV of ${profile.name}, ${profile.title}.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try { const savedTheme = localStorage.getItem('theme'); const dark = savedTheme ? savedTheme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches; document.documentElement.dataset.theme = dark ? 'dark' : 'light'; } catch (_) {}`,
          }}
        />
      </head>
      <body>
        <div className="shell">
          <Sidebar />
          <div className="main">
            <TopNav />
            <main>{children}</main>
            {/* <Footer /> */}
          </div>
        </div>
      </body>
    </html>
  );
}
