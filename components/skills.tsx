"use client"

import { useEffect, useState } from "react"
import { Code, Database, Smartphone } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend/Mobile",
    icon: <Smartphone className="w-6 h-6" />,
    skills: ["React Native", "ReactJS", "Redux", "Zustand"],
    color: "from-blue-400 to-cyan-400",
  },
  {
    title: "Backend & Tools",
    icon: <Database className="w-6 h-6" />,
    skills: ["Node.js", "Nestjs", "Prisma", "MongoDB", "Firebase", "AppCenter"],
    color: "from-green-400 to-emerald-400",
  },
  {
    title: "Other Technologies",
    icon: <Code className="w-6 h-6" />,
    skills: ["Git", "REST API", "GraphQL", "RealmDB", "Web3.js", "Ethers.js", "Flutter", "Kotlin", "Swift"],
    color: "from-purple-400 to-pink-400",
  },
]

export function Skills() {
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

    const element = document.getElementById("skills")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 ${isVisible ? "animate-fade-in-up" : ""}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 hover:bg-white/20 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
