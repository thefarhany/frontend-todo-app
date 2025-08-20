import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex flex-col items-center text-center py-20 px-6">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-bold mb-4"
      >
        Organize Your Day with <span className="text-primary">TodoApp</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-lg text-muted-foreground max-w-xl mb-6"
      >
        Simple and powerful Todo List App to help you stay productive.
      </motion.p>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-8"
      >
        <Link
          to="/register"
          className="px-6 py-3 bg-primary text-white rounded-lg text-md font-semibold hover:bg-primary/90"
        >
          Get Started
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
