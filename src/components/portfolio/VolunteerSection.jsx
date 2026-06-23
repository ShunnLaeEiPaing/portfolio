import React from "react";
import { motion } from "framer-motion";
import { Trophy, Shield, Users, Gavel, School  } from "lucide-react";
import SectionHeading from './SectionHeading';

const achievements = [
  {
    icon: Shield,
    title: "Advanced Youth Cyber Exploration Programme",
    org: "A.YCEP Singapore",
    desc: "Completed intensive cybersecurity training program covering intrusion detection, vulnerability assessment, and security protocols in high-pressure simulation environments.",
    color: "text-blue-400 border-blue-400/30 bg-blue-400/5",
  },
  {
    icon: Gavel,
    title: "Judge — 5th Asia-Pacific STEM/AI Innovation Challenge",
    org: "Asia-Pacific Region",
    desc: "Selected as a judge to evaluate STEM and AI technology innovation projects from across the Asia-Pacific region, demonstrating recognized expertise in emerging technologies.",
    color: "text-green-400 border-green-400/30 bg-green-400/5",
  },
  {
    icon: Users,
    title: "Mission X Camp — Youth Corps Singapore",
    org: "Youth Corps Singapore",
    desc: "Participated in community service and leadership development through Youth Corps Singapore's flagship Mission X programme, contributing to social impact projects.",
    color: "text-yellow-400 border-yellow-400/30 bg-yellow-400/5",
  },
  {
    icon: Trophy,
    title: "Singapore Polytechnic Open House Volunteer",
    org: "Singapore Polytechnic",
    desc: "Represented the School of Computing during Open House events, guiding prospective students and showcasing IT programmes and student projects.",
    color: "text-purple-400 border-purple-400/30 bg-purple-400/5",
  },
  {
    icon: School,
    title: "SOC Alumni Homecoming Volunteer",
    org: "School of Computing (SOC)",
    desc: "Volunteered at the SOC Alumni Homecoming event, welcoming returning alumni and assisting in guiding them through campus tours. Explained updated course structures, curriculum changes, and helped facilitate interactions between alumni and current students. Strengthened communication and leadership skills while representing the School of Computing.",
    color: "text-amber-600 border-amber-600/30 bg-amber-600/5",
  }
];

export default function AchievementsSection({ securityImage }) {
  return (
    <section className="py-24 relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Community"
          title="Achievements & Volunteering"
          description="Contributing to the tech community and beyond through volunteering and competitions."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group border border-border bg-card p-6 hover:border-primary/40 transition-all"
            >
              <div className={`inline-flex items-center justify-center w-10 h-10 border mb-4 ${a.color}`}>
                <a.icon size={18} />
              </div>
              <h3 className="font-heading font-bold text-base mb-1 group-hover:text-primary transition-colors">
                {a.title}
              </h3>
              <p className="font-mono text-xs text-blue-500 mb-3">{a.org}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}