import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './SectionHeading';

const categories = [
  {
    id: 'frontend',
    label: 'Frontend',
    color: '#6366F1',
    skills: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'HTML5/CSS3', level: 92 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'jQuery', level: 30 },
      { name: 'Bootstrap', level: 80 },
      { name: 'Responsive Design', level: 90 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    color: '#8B5CF6',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Node.js', level: 60 },
      { name: 'Django', level: 80 },
      { name: 'Flask', level: 80 },
      { name: 'RESTful APIs', level: 85 },
      { name: 'SQLAlchemy', level: 78 },
      { name: 'Java', level: 75 },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    color: '#06B6D4',
    skills: [
      { name: 'MySQL', level: 82 },
      { name: 'PostgreSQL', level: 90 },
      { name: 'SQL Server', level: 75 },
      { name: 'BigQuery', level: 30 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Cloud',
    color: '#22C55E',
    skills: [
      { name: 'Git / GitHub', level: 95 },
      { name: 'Docker', level: 75 },
      { name: 'AWS (EC2)', level: 40 },
      { name: 'GCP', level: 40 },
      { name: 'Postman', level: 85 },
      { name: 'Jira / Bitbucket', level: 90 },
      { name: 'Figma', level: 78 },
      { name: 'VS Code', level: 92 },
      { name: 'Linux', level: 75 },
    ],
  },
  {
    id: 'testing',
    label: 'Testing',
    color: '#F59E0B',
    skills: [
      { name: 'Playwright', level: 72 },
      { name: 'Vitest', level: 70 },
      { name: 'Pytest', level: 75 },
      { name: 'Django Test', level: 72 },
      { name: 'API Testing', level: 80 },
    ],
  },
];

function SkillBar({ name, level, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground font-mono">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full transition-shadow duration-300"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            boxShadow: `0 0 12px ${color}40`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const active = categories.find((c) => c.id === activeCategory);

  return (
    <section id="skills" className="relative py-24 lg:py-32">
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#8B5CF6]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Skills"
          title="Technical Arsenal"
          description="A comprehensive toolkit spanning frontend, backend, cloud, and testing technologies."
        />

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'text-white shadow-lg'
                  : 'glass text-muted-foreground hover:text-foreground'
              }`}
              style={
                activeCategory === cat.id
                  ? { background: cat.color, boxShadow: `0 4px 20px ${cat.color}40` }
                  : {}
              }
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto glass rounded-2xl p-8"
            >
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                {active.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={active.color}
                    delay={i * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}