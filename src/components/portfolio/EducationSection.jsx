import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, Calendar, X, Trophy, Star } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const certifications = [
    {
        name: 'Google AI Professional Certificate',
        provider: 'Google & Coursera',
        date: 'May 2026',
        image: '/certificates/googleAI.png',
    },
    {
        name: 'AI Ethics & Governance (Associate)',
        provider: 'Singapore Computer Society',
        date: 'Feb 2026',
        image: '/certificates/AIethics.png',
    },
    {
        name: 'Advanced Youth Cyber Exploration Programme',
        provider: 'A.YCEP',
        date: 'Dec 2024',
        image: '/certificates/aYCEP.png',
    },
    {
        name: 'Mission X',
        provider: 'Youth Corps Singapore',
        date: 'Oct 2024',
        image: '/certificates/missionX.png',
    },
    {
        name: 'Math Olympiad',
        provider: 'Ministry of Education Myanmar',
        date: 'Feb 2020',
        image: '/certificates/math.png',
    },
];

const educationData = [
    {
        school: 'Singapore Polytechnic',
        degree: 'Diploma in Information Technology',
        specialization: 'Software Development Specialization',
        period: 'Apr 2023 – Feb 2026',
        grade: 'GPA 3.51 / 4.0',
        gradePercent: 87.75,
        activities: [],
        highlights: [],
        icon: <FaGraduationCap/>,
    },
    {
        school: 'Thu Rein Nan Private High School',
        degree: 'High School',
        specialization: null,
        period: null,
        grade: 'Six Distinctions',
        gradePercent: null,
        activities: ['Mathematics Olympiad — 6th place ranking'],
        highlights: [
            { subject: 'Myanmar', icon: '' },
            { subject: 'English', icon: '' },
            { subject: 'Mathematics', icon: '' },
            { subject: 'Physics', icon: '' },
            { subject: 'Chemistry', icon: '' },
            { subject: 'Biology', icon: '' },
        ],
        matriculation: 'Matriculation Exam: 99 / 100',
        icon: <FaSchool/>,
    },
];

function CertCard({ cert, index }) {
    const [preview, setPreview] = useState(false);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass rounded-xl p-4 hover:border-[#06B6D4]/30 transition-all duration-300"
            >
                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                        {cert.image && (
                            <button
                                onClick={() => setPreview(true)}
                                className="w-14 h-14 rounded-lg overflow-hidden border border-[#06B6D4]/20 hover:border-[#06B6D4]/50 transition-all"
                            >
                                <img
                                    src={cert.image}
                                    alt={cert.name}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        )}
                    </div>
                    <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground text-sm leading-snug">{cert.name}</h4>
                        <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-muted-foreground">{cert.provider}</span>
                            <span className="text-xs text-[#06B6D4] font-mono flex-shrink-0 ml-2">{cert.date}</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Lightbox */}
            <AnimatePresence>
                {preview && cert.image && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
                        onClick={() => setPreview(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="relative max-w-2xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setPreview(false)}
                                className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-secondary flex items-center justify-center z-10"
                            >
                                <X className="w-4 h-4 text-foreground" />
                            </button>
                            <img src={cert.image} alt={cert.name} className="w-full rounded-xl shadow-2xl" />
                            <p className="text-center text-sm text-muted-foreground mt-3">{cert.name}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default function EducationSection() {
    return (
        <section id="education" className="relative py-24 lg:py-32">
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#8B5CF6]/5 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <SectionHeading
                    label="Education & Certifications"
                    title="Academic Background"
                    description="A solid foundation in Information Technology with specialized certifications."
                />

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="glass rounded-2xl p-8 h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-[#6366F1]/15 flex items-center justify-center">
                                    <GraduationCap className="w-6 h-6 text-[#6366F1]" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-semibold text-foreground text-lg">Education</h3>
                                    <p className="text-sm text-muted-foreground">Academic credentials</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {educationData.map((edu, i) => (
                                    <motion.div
                                        key={edu.school}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.15 }}
                                        className="glass rounded-xl p-5"
                                    >
                                        <div className="flex items-start gap-3 mb-3">
                                            <span className="text-2xl">{edu.icon}</span>
                                            <div>
                                                <h4 className="font-heading font-semibold text-foreground">{edu.school}</h4>
                                                <p className="text-sm text-muted-foreground">{edu.degree}</p>
                                                {edu.specialization && (
                                                    <p className="text-xs text-muted-foreground">{edu.specialization}</p>
                                                )}
                                            </div>
                                        </div>

                                        {edu.period && (
                                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                                                <Calendar className="w-3 h-3" />
                                                {edu.period}
                                            </div>
                                        )}

                                        {/* SP GPA bar */}
                                        {edu.gradePercent && (
                                            <div className="mt-2 pt-3 border-t border-border">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-sm text-muted-foreground">Overall GPA</span>
                                                    <span className="text-base font-heading font-bold gradient-text">{edu.grade}</span>
                                                </div>
                                                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${edu.gradePercent}%` }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                                        className="h-full rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]"
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        {/* High school distinctions */}
                                        {edu.highlights && edu.highlights.length > 0 && (
                                            <div className="mt-3">
                                                <div className="flex items-center gap-1.5 mb-2">
                                                    <Star className="w-3.5 h-3.5 text-[#F59E0B]" />
                                                    <span className="text-xs font-medium text-foreground">Six Distinctions</span>
                                                </div>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {edu.highlights.map((h) => (
                                                        <span key={h.subject} className="px-2 py-1 rounded-md bg-[#6366F1]/10 text-xs text-foreground">
                                                            {h.icon} {h.subject}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Matriculation */}
                                        {edu.matriculation && (
                                            <div className="mt-3 flex items-center gap-2 px-3 py-2 rounded-lg bg-[#22C55E]/10 border border-[#22C55E]/20">
                                                <Trophy className="w-3.5 h-3.5 text-[#22C55E] flex-shrink-0" />
                                                <span className="text-xs font-medium text-[#22C55E]">{edu.matriculation}</span>
                                            </div>
                                        )}

                                        {/* Activities */}
                                        {edu.activities && edu.activities.length > 0 && (
                                            <div className="mt-2">
                                                {edu.activities.map((a) => (
                                                    <div key={a} className="flex items-center gap-2 mt-1.5 px-3 py-2 rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/20">
                                                        <Trophy className="w-3.5 h-3.5 text-[#F59E0B] flex-shrink-0" />
                                                        <span className="text-xs text-foreground">{a}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Languages */}
                            <div className="mt-6">
                                <h4 className="text-sm font-medium text-foreground mb-3">Languages</h4>
                                <div className="flex gap-3 flex-wrap">
                                    <span className="px-3 py-1.5 rounded-lg glass text-sm text-foreground">
                                        🇬🇧 English — Professional
                                    </span>
                                    <span className="px-3 py-1.5 rounded-lg glass text-sm text-foreground">
                                        🇲🇲 Burmese — Native
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="glass rounded-2xl p-8 h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-[#06B6D4]/15 flex items-center justify-center">
                                    <Award className="w-6 h-6 text-[#06B6D4]" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-semibold text-foreground text-lg">Certifications</h3>
                                    <p className="text-sm text-muted-foreground">Click the image area to upload your certificate photo</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                {certifications.map((cert, i) => (
                                    <CertCard key={cert.name} cert={cert} index={i} />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}