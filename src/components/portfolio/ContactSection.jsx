import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import SectionHeading from './SectionHeading';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'shunnlaeeipaing@gmail.com', href: 'mailto:shunnlaeeipaing@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+65 80623609', href: 'tel:+6580623609' },
  { icon: MapPin, label: 'Location', value: 'Jurong West, Singapore', href: null },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open mailto with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:shunnlaeeipaing@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#6366F1]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Let's Work Together"
          description="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your team."
        />

        <div className="max-w-xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 w-full"
          >
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="glass rounded-xl p-4 flex items-center gap-4 hover:border-[#6366F1]/20 transition-all duration-300 group block"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#6366F1]/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-[#6366F1]" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        <p className="text-sm text-foreground font-medium group-hover:text-[#6366F1] transition-colors">
                          {item.value}
                        </p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <div className="glass rounded-xl p-4 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#6366F1]/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-[#6366F1]" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        <p className="text-sm text-foreground font-medium">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col items-center w-full">
              <p className="text-sm text-muted-foreground mb-3 text-center">Find me on</p>
              <div className="flex gap-3 justify-center">
                <a
                  href="https://github.com/ShunnLaeEiPaing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-[#6366F1] hover:border-[#6366F1]/20 transition-all duration-300"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shunn-lae-ei-paing31122003/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-[#06B6D4] hover:border-[#06B6D4]/20 transition-all duration-300"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          {/* <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-6 space-y-4 text-center">
              <h3 className="text-lg font-semibold">Get in Touch</h3>
              <p className="text-sm text-muted-foreground">
                Prefer a quick way to reach me? Use one of these options:
              </p>

              <div className="flex flex-col gap-3 mt-4">
                <a
                  href="mailto:shunnlaeeipaing@gmail.com"
                  className="w-full h-11 flex items-center justify-center rounded-xl glass"
                >
                  Send Email
                </a>

                <a
                  href="tel:+6580623609"
                  className="w-full h-11 flex items-center justify-center rounded-xl glass"
                >
                  Call Me
                </a>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}