import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../HOC";
import { slideIn } from "../utlis/motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        "service_b3fgzil",
        "template_yrmsbec",
        {
          from_name: form.name,
          to_name: "Binayak",
          from_email: form.email,
          to_email: "binayakchhetri23.ac@gmail.com",
          message: form.message,
        },
        "7J03qQRFFZc_ew7JY"
      )
      .then(
        (res) => {
          setIsLoading(false);
          alert("Message sent successfully. I will get back to you soon.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(`Failed ${error}`);
          setIsLoading(false);
          alert("Failed to send message");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.8] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label htmlFor="name" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name ?"
              className="bg-tertiary py-4 px-6 rounded-lg text-white
              border-none font-medium placeholder:text-secondary outline-none"
            />
          </label>
          <label htmlFor="email" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email ?"
              className="bg-tertiary py-4 px-6 rounded-lg text-white
              border-none font-medium placeholder:text-secondary outline-none"
            />
          </label>
          <label htmlFor="message" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say ?"
              className="bg-tertiary py-4 px-6 rounded-lg text-white
              border-none font-medium placeholder:text-secondary outline-none"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit font-bold shadow-md shadow-primary rounded-xl cursor-pointer"
          >
            {" "}
            {isLoading ? "Sending..." : "Send"}{" "}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
