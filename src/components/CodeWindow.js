import React, { memo } from 'react';

const CodeWindow = () => {
    return (
        <div className="relative group perspective-1000 will-change-transform">
            {/* Main Code Window */}
            <div className="glass rounded-3xl overflow-hidden border border-white/40 dark:border-white/5 shadow-2xl transition-all duration-700 bg-white/70 dark:bg-[#020617]/40 backdrop-blur-2xl group-hover:shadow-[0_0_50px_rgba(14,165,233,0.1)] dark:group-hover:shadow-[0_0_50px_rgba(14,165,233,0.15)] will-change-transform">
                {/* Title Bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-black/[0.03] dark:border-white/[0.03] bg-white/50 dark:bg-white/5">
                    <div className="flex gap-2">
                        <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
                        <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-white/50 dark:bg-black/30 px-3 py-1 rounded-md border border-black/5 dark:border-white/5">
                        AboutMe.ts
                    </div>
                    <div className="w-12"></div>
                </div>

                {/* Code Content */}
                <div className="p-8 font-mono text-[13px] md:text-[15px] leading-relaxed">
                    <div className="flex gap-4 text-slate-600 dark:text-slate-300">
                        <span className="text-slate-400 dark:text-slate-500 w-4">1</span>
                        <p className="mb-2 md:mb-4 lg:mb-8">
                            <span className="text-purple-600 dark:text-purple-400 font-bold">const</span> <span className="text-[#0ea5e9]">developer</span> <span className="">=</span> <span className="">{'{'}</span>
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <span className="text-slate-400 dark:text-slate-500 w-4">2</span>
                        <p className="pl-6 mb-2 md:mb-4 lg:mb-8">
                            <span className="text-slate-500 dark:text-slate-400">name:</span> <span className="text-teal-600 dark:text-teal-400">'Sunil'</span><span className="text-slate-400 dark:text-slate-300">,</span>
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <span className="text-slate-400 dark:text-slate-500 w-4">3</span>
                        <p className="pl-6 mb-2 md:mb-4 lg:mb-8">
                            <span className="text-slate-500 dark:text-slate-400">role:</span> <span className="text-teal-600 dark:text-teal-400">'Software Engineer'</span><span className="text-slate-400 dark:text-slate-300">,</span>
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <span className="text-slate-400 dark:text-slate-500 w-4">4</span>
                        <p className="pl-6 mb-2 md:mb-4 lg:mb-8">
                            <span className="text-slate-500 dark:text-slate-400">passion:</span> <span className="text-teal-600 dark:text-teal-400">'Building Scalable Systems'</span><span className="text-slate-400 dark:text-slate-300">,</span>
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <span className="text-slate-400 dark:text-slate-500 w-4">5</span>
                        <p className="pl-6 mb-2 md:mb-4 lg:mb-8">
                            <span className="text-slate-500 dark:text-slate-400">location:</span> <span className="text-teal-600 dark:text-teal-400">'Montréal, QC'</span><span className="text-slate-400 dark:text-slate-300">,</span>
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <span className="text-slate-400 dark:text-slate-500 w-4">6</span>
                        <p className="pl-6 mb-2 md:mb-4 lg:mb-8">
                            <span className="text-slate-500 dark:text-slate-400">status:</span> <span className="text-purple-600 dark:text-purple-400">true</span>
                        </p>
                    </div>
                    <div className="flex gap-4 text-slate-600 dark:text-slate-300">
                        <span className="text-slate-400 dark:text-slate-500 w-4">7</span>
                        <p className="mb-2 md:mb-4 lg:mb-8">
                            <span className="">{'}'}</span><span className="">;</span>
                        </p>
                    </div>
                    <div className="mt-8 italic text-slate-400 dark:text-slate-500">
                        // Dreaming in code, building in reality.
                    </div>
                    <div className="h-4"></div> {/* Extra space to prevent badge overlap */}
                </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-10 -right-12 glass bg-white/90 dark:!bg-slate-900/60 p-3 md:p-4 rounded-2xl border border-white dark:border-white/5 shadow-xl flex items-center gap-3 animate-float hidden xl:flex scale-90 xl:scale-100 origin-bottom-left will-change-transform">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 flex items-center justify-center text-teal-600 dark:text-teal-400">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <div>
                    <p className="text-[8px] md:text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest leading-none mb-1">Performance</p>
                    <p className="text-xs md:text-sm font-bold text-slate-900 dark:text-white leading-none">Optimized</p>
                </div>
            </div>

            <div className="absolute -bottom-10 -left-12 glass bg-white/90 dark:!bg-slate-900/60 p-3 md:p-4 rounded-2xl border border-white dark:border-white/5 shadow-xl flex items-center gap-3 animate-float hidden xl:flex scale-90 xl:scale-100 origin-top-right will-change-transform" style={{ animationDelay: '1s' }}>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-[#0ea5e9]/10 dark:bg-[#0ea5e9]/20 flex items-center justify-center text-[#0ea5e9]">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </div>
                <div>
                    <p className="text-[8px] md:text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest leading-none mb-1">Experience</p>
                    <p className="text-xs md:text-sm font-bold text-slate-900 dark:text-white leading-none">2+ Internships</p>
                </div>
            </div>
        </div>
    );
};

export default memo(CodeWindow);
