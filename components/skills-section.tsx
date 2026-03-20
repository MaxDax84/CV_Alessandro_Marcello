"use client"

import { useInView } from "@/hooks/use-in-view"
import {
  Users,
  Target,
  LineChart,
  Zap,
  RefreshCw,
  Globe,
} from "lucide-react"

const technicalSkills = [
  { name: "Salesforce.com", category: "CRM" },
  { name: "HubSpot", category: "CRM" },
  { name: "Microsoft Office Suite", category: "Productivity" },
  { name: "LinkedIn", category: "Networking" },
]

const professionalInterests = [
  { icon: Target, label: "Country & Market Ownership" },
  { icon: LineChart, label: "Sales & Growth Strategy" },
  { icon: Users, label: "Team Leadership & Performance" },
  { icon: RefreshCw, label: "Customer Lifecycle Management" },
  { icon: Zap, label: "SaaS / Platform Monetization" },
  { icon: Globe, label: "Cross-Functional & International Leadership" },
]

const coreCompetencies = [
  "Go-to-Market Strategy",
  "Marketing Strategy",
  "Revenue Growth",
  "Partnerships & Ecosystem Development",
  "Customer Success",
  "Pipeline, Upsell & Retention",
  "Renewal Strategy",
  "NPS, CSAT & Customer Advocacy",
  "SaaS / Platform Monetization Models",
  "Cross-Functional Leadership",
  "Team Leadership & Performance Management",
  "SME Digital Adoption",
]

export function SkillsSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/30 relative">
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
              Skills & Expertise
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          {/* Core Competencies */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Core Competencies
            </h3>
            <div className="flex flex-wrap gap-3">
              {coreCompetencies.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Technical Proficiency
              </h3>
              <div className="space-y-3">
                {technicalSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50 hover:border-primary/30 transition-all"
                  >
                    <span className="font-medium text-foreground">
                      {skill.name}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground">
                      {skill.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Focus Areas */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Professional Focus Areas
              </h3>
              <div className="space-y-3">
                {professionalInterests.map((interest, index) => {
                  const Icon = interest.icon
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/50 hover:border-primary/30 transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium text-foreground">
                        {interest.label}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
