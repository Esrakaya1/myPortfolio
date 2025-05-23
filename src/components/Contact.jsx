import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const SERVICE_ID = "service_pec49ep";
const TEMPLATE_ID = "template_yqjdoth";
const PUBLIC_KEY = "IVSgZIZealhvHTiQo";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      },
      (error) => {
        console.log(error.text);
        alert("Something went wrong!");
      }
    );
    e.target.reset();
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative z-10 text-white">
      <div className="mb-8 text-center">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-4xl"
        >
          Get in Touch
        </motion.h2>
        <p className="mt-2 text-purple-200">
          Let’s build something great together—drop me a message!
        </p>
      </div>

      {/* Contact form */}
      <motion.form
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.8 }}
        className="bg-white/5  border border-white/10 rounded-xl shadow-2xl p-10 w-full max-w-lg space-y-6"
        onSubmit={handleOnSubmit}
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your name.."
          className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 outline-none transition"
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your email.."
          className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 outline-none transition"
        />
        <textarea
          placeholder="Your message.."
          name="message"
          required
          rows="5"
          className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 outline-none transition"
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 rounded-md bg-gradient-to-r from-purple-500 via-slate-500 to-indigo-300 text-white font-semibold shadow-md hover:shadow-[0_0_10px_2px_rgba(139,92,246,0.4)] transition flex items-center justify-center gap-2"
        >
          Submit
          <span className="inline-block transform rotate-45">➤</span>
        </button>
      </motion.form>

      {success && (
        <div className="fixed top-6 right-6 z-50 flex items-center justify-center gap-3 rounded-md bg-purple-600 px-4 py-2 text-white shadow-lg transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="text-sm font-medium">
            Thanks for your interest! I’ll respond to your message as soon as
            possible.
          </span>
        </div>
      )}
    </div>
  );
};

export default Contact;
