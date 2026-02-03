const ActiveStatusBadge = () => {
    const text = "Available for new opportunities";
    return (
        <div className="hidden md:flex lg:flex items-center gap-2 bg-[#0ea5e9]/5 dark:bg-white/5 border border-[#0ea5e9]/20 dark:border-white/10 w-fit px-2 py-1 rounded-full backdrop-blur-md">
            <span className="relative flex h-2 w-2">
                {/* Outer ring - pinging */}
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary"></span>
                {/* Inner ring - solid circle */}
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[#0ea5e9] dark:text-[#38bdf8] text-[10px] font-bold uppercase tracking-[0.2em]">{text}</span>
        </div>
    );
};

export default ActiveStatusBadge;