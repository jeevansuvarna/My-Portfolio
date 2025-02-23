"use client";
import About from "@/component/About";
import Banner from "@/component/Banner";
import Contact from "@/component/ContactUs";
import Work from "@/component/Experience";
import Projects from "@/component/Projects";
import Footer from "@/component/footer";
import { useEffect } from "react";
// import Head from 'next/head'

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") || "dark";
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(savedTheme);
      const themeIcon = document.getElementById("theme-icon");
      if (themeIcon) {
        themeIcon.textContent = savedTheme === "light" ? "🌕" : "🌙";
      }
      const toggleCircle = document.getElementById("toggle-circle");
      if (toggleCircle) {
        toggleCircle.classList.toggle("translate-x-8", savedTheme === "dark");
      }
    }
  }, []);
  return (
    <div className="h-[88vh] mx-auto p-4">
      <Banner />
      <About />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
