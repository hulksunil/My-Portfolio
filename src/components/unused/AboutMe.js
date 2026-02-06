import HeadingTitle from "../utils/HeadingTitle";
import me from "../../assets/img/me.jpg";

const AboutMe = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <HeadingTitle title="About Me" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full max-w-5xl p-8 bg-slate-50 dark:bg-slate-900 rounded-[20px] mb-16">
                <div className="w-1/2 flex justify-center">
                    {/* Edit the object-[0%_0%] to change the position of the image */}
                    <img src={me} alt="Me" className="w-full max-w-sm aspect-square object-cover rounded-full object-[0%_0%]" />
                </div>
                <p className="text-slate-900 dark:text-white w-1/2">
                    I’m a Computer Engineering student at focused on backend development and systems programming. I enjoy building practical applications that connect mobile apps, backend services, and real world devices.                    <br />
                    <br />
                    I like turning everyday problems into simple, reliable solutions and shipping projects that people can actually use.                    <br />
                    <br />
                    Outside of class and internships, you’ll usually find me building side projects, competing in hackathons, or experimenting with new tools and ideas.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;