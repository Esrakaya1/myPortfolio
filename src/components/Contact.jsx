import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_pec49ep";
const TEMPLATE_ID = "template_yqjdoth";
const PUBLIC_KEY = "IVSgZIZealhvHTiQo";

const Contact = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        alert("Message Sent Successfully");
      },
      (error) => {
        console.log(error.text);
        alert("Something went wrong!");
      }
    );
    e.target.reset();
  };
  return (
    // <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black px-4">
    //   <motion.h2 className="my-10 text-center text-4xl">Get in Touch</motion.h2>
    //   <p className="text-gray-300 text-center">
    //     Send me a message to get in touch.
    //   </p>

    //   <motion.form
    //     className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl max-w-xl mx-auto"
    //     onSubmit={handleOnSubmit}
    //   >
    //     <div className="formElement flex flex-col">
    //       <label className="mb-1">Name</label>
    //       <input
    //         type="text"
    //         id="from_name"
    //         name="from_name"
    //         placeholder=" Your name.."
    //         required
    //         className="rounded h-10"
    //       />
    //     </div>

    //     <div className="formElement flex flex-col">
    //       <label className="mb-1">E-mail</label>
    //       <input
    //         type="email"
    //         id="from_email"
    //         name="from_email"
    //         placeholder=" Your email.."
    //         required
    //         className="rounded h-10"
    //       />
    //     </div>

    //     <div className="formElement flex flex-col">
    //       <label className="mb-1">Message</label>
    //       <textarea
    //         name="message"
    //         rows="8"
    //         cols="30"
    //         placeholder=" Your message.."
    //         required
    //         className="rounded h-30"
    //       />
    //     </div>
    //     <button
    //       type="submit"
    //       className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-md hover:from-purple-600 hover:to-indigo-700 flex items-center justify-center gap-2 transition-all"
    //     >
    //       Submit
    //     </button>
    //   </motion.form>
    // </div>
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
    </div>
  );
};

export default Contact;
