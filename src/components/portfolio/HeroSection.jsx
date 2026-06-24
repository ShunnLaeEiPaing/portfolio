import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, ExternalLink, Download, MapPin } from 'lucide-react';
import ParticleField from './PraticleField';

const titles = [
  'Full-Stack Developer',
  'Software Development'
];

export default function HeroSection({ avatarImg }) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout;
    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 80);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length - 1)), 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ParticleField />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/40 via-transparent to-[#030712] z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030712] to-transparent z-[1]" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6366F1]/10 rounded-full blur-3xl z-[1]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#06B6D4]/8 rounded-full blur-3xl z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-24 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold tracking-tight leading-[1.1] mb-4"
            >
              <span className="text-foreground">Shunn Lae</span>
              <br />
              <span className="gradient-text">Ei Paing</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="h-8 mb-6"
            >
              <span className="text-lg lg:text-xl text-[#06B6D4] font-mono">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
             className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-4"
            >
              Software developer with hands-on experience building full-stack applications,
              cybersecurity tools, and cloud-based solutions. Singapore Polytechnic graduate
              specializing in IT & Software Development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center justify-center lg:justify-start gap-3 text-sm text-muted-foreground mb-8"
            >
              <MapPin className="w-4 h-4" />
              <span>Singapore</span>
              <span className="text-border">·</span>
              <span>shunnlaeeipaing@gmail.com</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-medium text-sm hover:opacity-90 transition-opacity"
              >
                View Projects
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-foreground font-medium text-sm hover:bg-white/10 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                download="ShunnLaeEiPaing_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-foreground font-medium text-sm hover:bg-white/10 transition-colors"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </motion.div>
          </div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center order-first lg:order-last"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#6366F1]/20 to-[#06B6D4]/20 rounded-full blur-2xl animate-pulse" />
              <div className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-2 border-[#6366F1]/20">
                <img
                  src='/slep.jpg'
                  alt="Shunn Lae Ei Paing"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-4 top-12 glass rounded-xl px-3 py-2 flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
                <span className="text-xs font-medium text-foreground">React</span>
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -left-4 bottom-16 glass rounded-xl px-3 py-2 flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-[#06B6D4]" />
                <span className="text-xs font-medium text-foreground">Python</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
        </motion.div>
      </div>
    </section>
  );
}