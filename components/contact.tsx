"use client"

import { useEffect, useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react"

export function Contact() {
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

    const element = document.getElementById("contact")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">ptviet98@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white">0918718610</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-400 to-emerald-400 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Ho Chi Minh City</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button className="p-3 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110">
                  <Github className="w-6 h-6 text-white" />
                </button>
                <button className="p-3 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110">
                  <Linkedin className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            {/*<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">*/}
            {/*  <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>*/}
            {/*  <form className="space-y-4">*/}
            {/*    <div>*/}
            {/*      <input*/}
            {/*        type="text"*/}
            {/*        placeholder="Your Name"*/}
            {/*        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-300"*/}
            {/*      />*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*      <input*/}
            {/*        type="email"*/}
            {/*        placeholder="Your Email"*/}
            {/*        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-300"*/}
            {/*      />*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*      <textarea*/}
            {/*        rows={4}*/}
            {/*        placeholder="Your Message"*/}
            {/*        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-300 resize-none"*/}
            {/*      ></textarea>*/}
            {/*    </div>*/}
            {/*    <button*/}
            {/*      type="submit"*/}
            {/*      className="w-full p-3 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-lg font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 flex items-center justify-center gap-2"*/}
            {/*    >*/}
            {/*      <Send className="w-5 h-5" />*/}
            {/*      Send Message*/}
            {/*    </button>*/}
            {/*  </form>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>

      <div className="text-center mt-12 pt-8 border-t border-white/10">
        <p className="text-gray-400">© 2024 Phan Trung Viet. Built with Next.js and Tailwind CSS.</p>
      </div>
    </section>
  )
}
