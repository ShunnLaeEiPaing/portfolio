import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import SectionHeading from './SectionHeading';

const experiences = [
  {
    company: '1CLOUDSTAR PTE. LTD',
    position: 'Application Developer (Internship)',
    period: 'Apr 2025 - Feb 2026',
    location: 'Singapore',
    description: [
      'Contributed to the development of a cybersecurity web application focused on automated network device monitoring and vulnerability management.',
      'Assisted in frontend and backend development using React, Tailwind CSS, Python, and SQLAlchemy, including wireframe design, feature implementation, and debugging.',
      'Worked with Docker, Nginx, AWS EC2, Zabbix API, and NIST CVE API for deployment and vulnerability analysis.',
      'Collaborated with team members using Git and Agile Scrum practices throughout the project lifecycle.',
    ],
    tags: ['React', 'Python', 'Docker', 'AWS', 'Agile'],
    color: '#6366F1',
  },
  {
    company: 'Andaz Hotel',
    position: 'Banquet Server (Part Time)',
    period: 'Apr 2024 - Feb 2026',
    location: 'Singapore',
    description: [
      'Served 200+ guests per 8–10 hour banquet shift in a fast-paced event environment.',
      'Supported smooth service operations through effective teamwork and coordination.',
    ],
    tags: ['Teamwork', 'Communication', 'Adaptability'],
    color: '#06B6D4',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 lg:py-32">
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-[#6366F1]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Experience"
          title="Professional Journey"
          description="Hands-on experience building real-world applications and working in professional environments."
        />

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {i < experiences.length - 1 && (
                <div className="absolute left-[11px] top-6 bottom-0 w-px bg-gradient-to-b from-[#6366F1]/40 to-transparent" />
              )}
              
              {/* Timeline dot */}
              <div
                className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center"
                style={{ borderColor: exp.color, background: `${exp.color}20` }}
              >
                <div className="w-2 h-2 rounded-full" style={{ background: exp.color }} />
              </div>

              <div className="glass rounded-2xl p-6 hover:border-[#6366F1]/20 transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground">{exp.position}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, j) => (
                    <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                      <span className="text-[#6366F1] mt-1.5 flex-shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium"
                      style={{ background: `${exp.color}15`, color: exp.color }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}