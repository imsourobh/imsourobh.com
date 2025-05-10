import Footer from "@/components/shared/Footer";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";
import Socials from "@/components/shared/Socials";
import { StickyNav } from "@/components/shared/StickyNav";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Spotlight } from "@/components/ui/spotlight";
import { geistMono, geistSans, incognito } from "./fonts/font";
import "./globals.css";
import LoadingWrapper from "./LoadingWrapper";


export const metadata = {
  title: "imsourobh",
  description:
    "I'm a passionate cyber security analysist with a strong background in computer networking and system administration, cryptography and web3.",
  image: "/soumik.png",
  url: "https://imsourobh.com",
  type: "website",
  siteName: "Soumik Das",
  twitterUsername: "@imsourobh",
  keywords: [
  "Soumik Das",
  "cybersecurity",
  "cyber security analyst",
  "ethical hacking",
  "penetration testing",
  "bug bounty",
  "OWASP Top 10",
  "web security",
  "network security",
  "blockchain security",
  "cryptography",
  "malware analysis",
  "reverse engineering",
  "CTF player",
  "cyber defense",
  "SOC analyst",
  "SIEM",
  "cyber threat intelligence",
  "information security",
  "zero-day vulnerability",
  "cyber security portfolio",
  "cybersecurity researcher",
  "Web3 security",
  "application security",
  "cybersecurity enthusiast",
  "cybersecurity student"
]


  openGraph: {
    type: "website",
    url: "https://imsourobh.com",
    title: "Soumik Das",
    description:
      "I'm a passionate cyber security analysist with a strong background in computer networking and system administration, cryptography and web3.",
    siteName: "Soumik Das",
    images: [
      {
        url: "/soumik.png",
        width: 1200,
        height: 630,
        alt: "Soumik Das",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${incognito.variable} relative scroll-smooth antialiased text-primary bg-background-secondary overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        <LoadingWrapper>
          <ThemeProvider
            enableSystem
            attribute="class"
            defaultTheme="light"
            themes={[
              "light",
              "dark",
              // "instagram",
              // "facebook",
              // "discord",
              // "netflix",
              // "twilight",
              // "reddit",
            ]}
          >
            <StickyNav />

            <Spotlight
              className="top-40 left-0 md:left-96 md:top-0 z-50  "
              fill="rgba(16, 163, 233, .7)"
            />

            <main className="mx-auto max-container  px-4">{children}</main>
            <Socials direction="col" position="fixed" />
            <ScrollToTopButton />
            <Footer />
          </ThemeProvider>
        </LoadingWrapper>
      </body>
    </html>
  );
}
