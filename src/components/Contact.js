import { useState } from "react";
import { IoMail } from "react-icons/io5";
import { TiLocationOutline } from "react-icons/ti";
import { FaGithub, FaLinkedin } from "react-icons/fa";

/**
 * Contact component
 * Displays the contact information and a form to send me a message
 */
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6ba159bd-7e42-4013-bda1-82f8bd4dd954");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setTimeout(() => setResult(""), 5000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="py-24 odd-section" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-5xl font-extrabold mb-8 tracking-tight">
              Let's <span className="text-[#0ea5e9] underline decoration-4 underline-offset-8">Talk.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-md">
              Currently open to new opportunities and interesting collaborations. Feel free to reach out via email or any social platform.
            </p>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[#0ea5e9]">
                  <IoMail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</p>
                  <p className="text-lg font-bold">sunil.kub17@gmail.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[#0ea5e9]">
                  <TiLocationOutline size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Location</p>
                  <p className="text-lg font-bold">Montréal, QC, Canada</p>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/hulksunil"
                  target="_blank"
                >
                  <FaGithub size={"30px"} />
                </a>
                <a
                  href="https://www.linkedin.com/in/Sunil-Kublalsingh/"
                  target="_blank"
                >
                  <FaLinkedin size={"30px"} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="glass p-8 md:p-12 rounded-3xl bg-slate-50 dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800">
            <form className="space-y-6" onSubmit={onSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-sm font-bold">Your Name</label>
                  <input
                    className="w-full px-6 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent transition-all outline-none"
                    placeholder="John Doe"
                    type="text"
                    name="name"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-sm font-bold">Email Address</label>
                  <input
                    className="w-full px-6 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent transition-all outline-none"
                    placeholder="john@example.com"
                    type="email"
                    name="email"
                    required
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div className="space-y-2">
                <label className="text-sm font-bold">Your Message</label>
                <textarea
                  className="w-full px-6 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Tell me about your project..."
                  rows="5"
                  name="message"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-[#0ea5e9] text-white font-bold rounded-xl shadow-lg shadow-[#0ea5e9]/20 hover:shadow-[#0ea5e9]/40 hover:-translate-y-0.5 active:scale-95 transition-all"
              >
                Send Message
              </button>

              {/* Result Message */}
              {result && (
                <p className="text-center text-sm font-medium text-[#0ea5e9] mt-4">
                  {result}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
