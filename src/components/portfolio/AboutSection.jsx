import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cloud, Shield, Palette } from 'lucide-react';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';

const highlights = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'Building end-to-end applications with React, Node.js, Python, and modern frameworks.',
    color: '#6366F1',
  },
  {
    icon: Shield,
    title: 'Cybersecurity Focus',
    description: 'Experience developing AI-powered vulnerability scanning and security monitoring tools.',
    color: '#8B5CF6',
  },
  {
    icon: Cloud,
    title: 'Cloud Technologies',
    description: 'Hands-on with AWS EC2, Google Cloud Platform, BigQuery, and Cloud Composer.',
    color: '#06B6D4',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User research, wireframing, prototyping, and responsive design implementation.',
    color: '#22C55E',
  },
];

const stats = [
  { value: '7+', label: 'Projects Built' },
  { value: '3.51', label: 'GPA / 4.0' },
  { value: '4+', label: 'Certifications' },
  { value: '10+', label: 'Technologies' },
];

export default function AboutSection({ aboutBg }) {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 opacity-5">
        <img src={aboutBg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#6366F1]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="About Me"
          title="Building Digital Experiences"
          description="Passionate software developer with a strong foundation in full-stack development, UI/UX designs and cybersecurity. I thrive on solving complex problems and building applications that make a difference."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center glass rounded-2xl p-6">
              <div className="text-3xl lg:text-4xl font-heading font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, i) => (
            <GlassCard key={item.title} delay={i * 0.1}>
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${item.color}15` }}
              >
                <item.icon className="w-5 h-5" style={{ color: item.color }} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}