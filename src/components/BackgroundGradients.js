import React from 'react';

const BackgroundGradients = () => {
    return (
        <div className="absolute inset-0 -z-10 bg-[#020617] overflow-hidden">
            {/* Base Mesh Gradient - Dimmed */}
            <div className="absolute inset-0 bg-mesh opacity-30"></div>

            {/* Large Animated Blobs - Dimmed & Multi-animated */}
            <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-[#0ea5e9]/15 rounded-full blur-[120px] animate-pulse-slow">
                <div className="absolute inset-0 bg-[#0ea5e9]/10 rounded-full animate-drift"></div>
            </div>
            <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-teal-500/15 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}>
                <div className="absolute inset-0 bg-teal-500/10 rounded-full animate-drift" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Center Accent Glow - Very Subtle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0ea5e9]/5 rounded-full blur-[150px]"></div>
        </div>
    );
};

export default BackgroundGradients;
