"use client"

import { useEffect, useState } from "react"
import { Calendar, TrendingUp } from "lucide-react"

const experiences = [
  {
    title: "SENIOR SOFTWARE ENGINEER",
    company: "CORTEX AG",
    project: "DOPAMINE APP",
    period: "1/2022 - now",
    description: "DeFi application with over 1M global users",
    achievements: [
      "Built and maintained UI in React Native for a DeFi application with over 3M global users",
      "Integrated blockchain features with Web3.js/Ethers.js and smart contracts",
      "Migrated legacy modules to functional components with hooks, improving maintainability",
      "Optimized performance, animations and rendering on native threads → 25% performance boost",
      "Reduced app launch time by 30% through performance profiling and optimization",
      "Led project, release management, code reviews, and onboarding for junior developers",
    ],
    technologies: ["React Native", "Zustand", "Firebase", "CI/CD", "Nestjs", "MongoDB"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "SOFTWARE ENGINEER",
    company: "TIKICORP",
    project: "TIKI APP",
    period: "2/2020 - 1/2022",
    description: "Tiki is an ecommerce platform in Vietnam with ~10M users",
    achievements: [
      "Developed Tiki Rewards (mobile & web) for viewing and redeeming coupons using loyalty points",
      "Built Tiki Game features (Slot Machine, Daily Check-in) in the mobile app to increase user engagement",
      "Delivered TikiNOW subscription (mobile & web) for showcasing benefits and enabling package checkout",
      "Created custom Native Modules for seamless interaction between native code (Kotlin, Swift) and React Native",
    ],
    technologies: ["React Native", "ReactJS", "JavaScript", "Redux", "Kotlin", "Swift"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "REACT NATIVE DEVELOPER",
    company: "ANT-TECH",
    project: "SHOWSOURCING",
    period: "7/2019 - 2/2020",
    description: "Helps product managers collect products & suppliers information during trade shows",
    achievements: [
      "Built user application using React Native, interact to RealmDB to do functionalities",
      "Improved performance and user experience",
    ],
    technologies: ["React Native", "RxJS", "TypeScript", "RealmJS"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "REACT NATIVE DEVELOPER",
    company: "ANT-TECH",
    project: "WECHAIN",
    period: "5/2019 - 7/2019",
    description: "Platform for capturing and sharing memories from private and corporate events",
    achievements: [
      "Built user application using React Native",
      "Implemented Redux state management and API integration",
    ],
    technologies: ["React Native", "Redux", "Redux Sagas", "RESTful API"],
    color: "from-yellow-500 to-orange-500",
  },
]

export function Experience() {
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

    const element = document.getElementById("experience")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-400 to-pink-400"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 ${index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"} ${isVisible ? "animate-fade-in-up" : ""}`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} border-4 border-slate-900`}
                ></div>

                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      <span className="text-purple-400 font-medium">{exp.period}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-lg text-purple-400 mb-2">{exp.company}</p>
                    <p className="text-md font-semibold text-pink-400 mb-3">{exp.project}</p>
                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-purple-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
