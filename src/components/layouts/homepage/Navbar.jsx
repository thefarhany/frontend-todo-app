import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className=" px-6 py-4 bg-white shadow-md flex justify-between items-center sticky top-0 z-50"
    >
      <Link to="/" className="text-2xl font-bold text-primary">
        TodoApp
      </Link>
      <div className="flex gap-4">
        <Link
          to="/login"
          className="px-4 py-2 text-sm font-medium hover:text-primary"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary/90"
        >
          Register
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
