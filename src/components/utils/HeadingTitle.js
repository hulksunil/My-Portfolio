const HeadingTitle = ({ title, description }) => {
    return (
        <div className="text-center mb-20 mainHeading">
            <h2 className="text-4xl font-display font-bold mb-4 pt-4">{title}</h2>
            {description ? (
                <p className="text-slate-500 max-w-2xl mx-auto text-lg">{description}</p>
            ) : (
                <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            )}
        </div>
    );
};

export default HeadingTitle;