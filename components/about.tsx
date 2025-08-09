"use client"

import { useEffect, useState } from "react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">About Me</span>
          </h2>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <p className="text-lg text-gray-300 leading-relaxed">
              React Native Developer with <span className="text-purple-400 font-semibold">4+ years of experience</span>{" "}
              building cross-platform mobile applications in{" "}
              <span className="text-pink-400 font-semibold">eCommerce, Crypto, and Social Networking</span>. Skilled in
              React Native, Flutter, Native iOS/Android, and Web3 integration.
            </p>
            <br />
            <p className="text-lg text-gray-300 leading-relaxed">
              Strong background in optimizing performance, delivering seamless user experiences, and building
              high-quality, user-focused products. Experienced in managing releases, integrating CI/CD pipelines, and
              collaborating in Agile teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
