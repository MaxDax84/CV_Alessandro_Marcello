"use client"

import { useInView } from "@/hooks/use-in-view"
import { ChevronRight } from "lucide-react"

const experiences = [
  {
    company: "Alibaba Group — Milan, Italy",
    role: "Head of Business Development and Partnerships",
    period: "2025 — Present",
    description:
      "Own commercial performance and revenue growth for Southern Europe through a channel-led go-to-market model.",
    highlights: [
      "Lead and manage regional channel & partnership teams with direct ownership on revenue, customer acquisition, and retention",
      "Develop and execute strategic partnerships with government agencies, enterprises, and ecosystem partners to accelerate SME digital adoption",
      "Define new go-to-market models leveraging agencies, integrators, and institutional partners to scale acquisition efficiently",
      "Drive localized growth strategies to strengthen brand presence, user engagement, and revenue contribution across Italy and Southern Europe",
    ],
  },
  {
    company: "Alibaba Group — Milan, Italy",
    role: "Head of Customer Success",
    period: "2022 — 2025",
    description:
      "Built and led the European Customer Success organization from 0 to 22 FTEs, covering 4 core markets and multi-country outsourced teams.",
    highlights: [
      "Owned post-sales revenue performance, delivering +200% ARR growth and +200% retention uplift in two years, while maintaining NPS and CSAT above 85%",
      "Increased service and renewal revenue by +150% YoY through structured upsell, renewal, and account expansion programs",
      "Designed and rolled out the European CS & revenue playbook, aligning KPIs, forecasting, and operating cadence across markets",
      "Led high-impact partnerships with Italian and Spanish government institutions to accelerate SME acquisition and brand visibility",
    ],
  },
  {
    company: "Alibaba Group — Milan, Italy",
    role: "Senior Channel Marketing and Customer Success Manager",
    period: "2019 — 2022",
    description:
      "Launched Alibaba.com in Italy and Europe, building the EU customer success platform from zero to 20+ hires in four countries.",
    highlights: [
      "Led flagship projects (e.g., Made in Italy Pavilion), onboarding 1,000+ SMEs to global markets",
      "Kicked-off Service Partner Program to scale customer success across the region",
    ],
  },
  {
    company: "Alibaba Group — Milan, Italy",
    role: "Senior Business Development Specialist",
    period: "2018 — 2019",
    description:
      "Accelerated brand entry for Italian & Spanish companies on Tmall/Tmall Global.",
    highlights: [
      "Generated €1B+ GMV for Italian and Spanish companies on Tmall/Tmall Global",
      "Negotiated and executed 'HelloITA' Pavilion partnership with ITA (ICE) to promote national brands abroad",
    ],
  },
  {
    company: "Alibaba Group — Hangzhou, China",
    role: "Senior Business Development and Marketing Specialist",
    period: "2016 — 2018",
    description:
      "Designed global Alipay marketing campaigns targeting English-speaking markets.",
    highlights: [
      "Led Tmall Global expansion into Italy & Spain, launching major marketing events such as the Barcelona Tmall launch",
      "Selected for Alibaba Global Leadership Academy (top-tier international talent program)",
    ],
  },
  {
    company: "Amazon — Milan, Italy",
    role: "Brand Specialist",
    period: "2015 — 2016",
    description:
      "Managed top-tier media and entertainment accounts, including major global launches.",
    highlights: [
      "Oversaw major global launches including FIFA and Call of Duty",
      "Consistently exceeded revenue and GMV targets through commercial optimization and account development",
    ],
  },
  {
    company: "Sony — Basingstoke, UK",
    role: "Product Marketing Manager",
    period: "2013 — 2015",
    description:
      "Launched Sony videoconferencing products across Europe.",
    highlights: [
      "Achieved €6M sell-in value in first year of product launch",
    ],
  },
  {
    company: "Sony — Barcelona, Spain",
    role: "Product Marketing Manager",
    period: "2012 — 2013",
    description:
      "Selected for Sony EGP program — a European-wide graduate program for selected talents from across the EU.",
    highlights: [
      "Managed Iberia B2C product lines, exceeding sales targets by 180%",
    ],
  },
]

export function ExperienceSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="experience" className="py-24 md:py-32 bg-secondary/30 relative">
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
              Experience
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative pl-8 border-l-2 border-border hover:border-primary/50 transition-colors"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-primary font-medium">{exp.role}</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="flex gap-2 text-sm text-muted-foreground"
                      >
                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
