import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import opengraphImg from "@/public/portfolio-light.jpg"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Callum Rowston | Software Engineer",
  description: "Full Stack Developer | TypeScript, Python, React, NextJS, and more!",
  image: `https://callumrowston.dev${opengraphImg}`,
  }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-gradient-to-r from-custom-blue to-custom-purple bg-200% animate-gradient-waves absolute top-[-6rem] -z-10 right-[17rem] h-[84rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[6rem] lg:left-[28rem] xl:left-[10rem] 2xl:left-[50rem] 3xl:left-[60rem] dark:bg-gradient-to-r dark:from-custom-dark-blue dark:to-custom-dark-purple"></div>
        <div className="bg-gradient-to-r from-custom-green to-custom-blue bg-200% animate-gradient-waves absolute top-[-1rem] -z-10 left-[-5rem] h-[84rem] w-[27.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-12rem] lg:left-[-28rem] xl:left-[20rem] 2xl:left-[20rem] 3xl-left-[2rem] dark:bg-gradient-to-r dark:from-custom-dark-green dark:to-custom-dark-blue"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="bottom-center" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
