import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

const projects = [
  {
    title: 'AI-Powered Vulnerability Scanning Tool',
    description: 'Developed an AI-powered vulnerability scanning tool to monitor devices, identify potential security vulnerabilities, and provide recommendations for remediation.',
    tags: ['Python', 'Django', 'React', 'Tailwind CSS', 'Gemini AI', 'Docker', 'AWS EC2'],
    category: 'fullstack',
    color: '#6366F1',
    featured: true,
  },
  {
    title: 'Automating Data Insights with Cloud Data Warehouse',
    description: 'Automated extraction of data from Facebook APIs, transformation and storage of video insights into Google BigQuery with scheduler on Google Cloud Composer.',
    tags: ['Python', 'Google Cloud Composer', 'Airflow DAGs', 'BigQuery'],
    category: 'backend',
    color: '#8B5CF6',
    featured: true,
  },
  {
    title: 'Aura Bridge Tuition Centre Website',
    description:
      'Designed and developed a modern, responsive website for Aura Bridge Tuition Centre. The website showcases the centre’s programmes, teaching approach, parent testimonials, and provides clear call-to-action sections for class enquiries and bookings.',
    tags: ['JavaScript', 'React', 'Bootstrap', 'CSS', 'Responsive Design', 'Animations'],
    category: 'frontend',
    color: '#8B5CF6',
    featured: true,
  },
  {
    title: 'Pet Guardians',
    description: 'Developed a digital pet care platform by designing database tables and implementing API endpoints for pet training, feeding, grooming, and quest-based activities.',
    tags: ['JavaScript', 'MySQL', 'HTML', 'CSS', 'JWT', 'Git'],
    category: 'fullstack',
    color: '#06B6D4',
    featured: false,
  },
  {
    title: 'Bank Transaction Analysis System',
    description: 'Analyzed data within a database and created a website for bank transaction handling and visualization.',
    tags: ['JavaScript', 'Databases', 'Frontend Development'],
    category: 'frontend',
    color: '#22C55E',
    featured: false,
  },
  {
    title: 'Student Management System',
    description: 'Developed a student management system using Java Swing for managing academic modules, GPA viewing, student administration, and attendance tracking.',
    tags: ['Java', 'Java Swing'],
    category: 'backend',
    color: '#F59E0B',
    featured: false,
  },
  {
    title: 'Focus Flow - Application Design',
    description: 'Led the team in design and development of a user interface focused on improving usability and UX, including user research, journey maps, and wireframes.',
    tags: ['UI/UX Design', 'Figma', 'Wireframes', 'Prototyping'],
    category: 'design',
    color: '#EC4899',
    featured: false,
  },
  {
    title: 'Senior Safety Monitoring System',
    description: 'Implemented AI-based activity detection to identify falls through real-time camera monitoring. Integrated Telegram API for instant alerts to family members.',
    tags: ['Python', 'IoT', 'YOLO AI', 'Telegram API'],
    category: 'fullstack',
    color: '#EF4444',
    featured: true,
  },
];

const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'backend', label: 'Backend' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'design', label: 'Design' },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-[#06B6D4]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Projects"
          title="Featured Work"
          description="A collection of projects showcasing full-stack development, AI integration, cloud solutions, and UI/UX design."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${activeFilter === f.id
                  ? 'bg-[#6366F1] text-white shadow-lg shadow-[#6366F1]/20'
                  : 'glass text-muted-foreground hover:text-foreground'
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`glass rounded-2xl overflow-hidden group hover:border-[#6366F1]/20 transition-all duration-300 ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
              >
                <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}60)` }} />

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-semibold text-foreground text-lg leading-snug pr-4">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="flex-shrink-0 px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#6366F1]/15 text-[#6366F1]">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-border">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-secondary text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* <div className="flex items-center gap-3 pt-3 border-t border-border">
                    <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-[#6366F1] transition-colors">
                      <ChevronRight className="w-3.5 h-3.5" />
                      Learn More
                    </button>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}