import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 bg-primary text-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-4"
      >
        Ready to be more productive?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-6 text-lg"
      >
        Join TodoApp today and take control of your tasks!
      </motion.p>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8"
      >
        <Link
          to="/register"
          className="px-6 py-3 bg-white text-primary text-md font-semibold rounded-lg hover:bg-gray-100"
        >
          Get Started Now
        </Link>
      </motion.div>
    </section>
  );
};

export default CTA;
