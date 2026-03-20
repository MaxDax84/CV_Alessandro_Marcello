"use client"

import { useInView } from "@/hooks/use-in-view"
import { Trophy, Brain, Plane, Cpu } from "lucide-react"

const passions = [
  {
    icon: Trophy,
    title: "Sports & Competition",
    description:
      "Passionate about competitive sports, combining physical discipline with a competitive mindset that translates directly into professional drive.",
  },
  {
    icon: Brain,
    title: "Strategic Thinking",
    description:
      "Enthusiast of strategy games and frameworks, always looking for patterns and long-term planning opportunities — on and off the board.",
  },
  {
    icon: Cpu,
    title: "Emerging Technologies & AI",
    description:
      "Deeply interested in artificial intelligence and emerging tech trends that are reshaping how businesses scale and deliver value globally.",
  },
  {
    icon: Plane,
    title: "Cultural Exploration",
    description:
      "Avid traveler with hands-on experience living and working across Europe and Asia, bringing a truly global perspective to every challenge.",
  },
]

export function InterestsSection() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <h2 className="text-sm tracking-[0.3em] uppercase text-primary font-medium">
              Beyond Work
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {passions.map((passion, index) => {
              const Icon = passion.icon
              return (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/30 transition-all hover:bg-secondary/70"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {passion.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {passion.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
