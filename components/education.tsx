"use client"

import { useEffect, useState } from "react"
import { GraduationCap, Award, Calendar } from "lucide-react"

const educationData = [
  {
    type: "education",
    title: "Bachelor of Computer Science",
    institution: "Ton Duc Thang University",
    period: "June 2016 - December 2020",
    description: "Major: Computer Science",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "from-blue-500 to-purple-500",
  },
  {
    type: "certification",
    title: "Global Software Talent Training Course",
    institution: "Fsoft",
    period: "2019",
    description: "520 hours comprehensive software development training",
    icon: <Award className="w-6 h-6" />,
    color: "from-green-500 to-teal-500",
  },
  {
    type: "certification",
    title: "TOEIC Certificate",
    institution: "ETS",
    period: "2019",
    description: "Score: 650",
    icon: <Award className="w-6 h-6" />,
    color: "from-yellow-500 to-orange-500",
  },
]

export function Education() {
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

    const element = document.getElementById("education")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Education & Certifications
            </span>
          </h2>

          <div className="grid gap-6">
            {educationData.map((item, index) => (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 ${isVisible ? "animate-fade-in-up" : ""}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center flex-shrink-0`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      <span className="text-purple-400 font-medium">{item.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-lg text-purple-400 mb-2">{item.institution}</p>
                    <p className="text-gray-300">{item.description}</p>
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
