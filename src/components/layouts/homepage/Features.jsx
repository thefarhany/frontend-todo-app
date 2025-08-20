import { motion } from "framer-motion";
import { CheckCircle, PlusCircle, Pencil, Trash } from "lucide-react";

const Features = () => {
  const features = [
    { icon: PlusCircle, title: "Create Todo", desc: "Easily add your tasks." },
    { icon: Pencil, title: "Update Todo", desc: "Edit tasks whenever needed." },
    {
      icon: Trash,
      title: "Delete Todo",
      desc: "Remove completed or unneeded tasks.",
    },
    {
      icon: CheckCircle,
      title: "Mark as Done",
      desc: "Stay on track with your goals.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
      <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-6 bg-white shadow-md rounded-lg text-center"
          >
            <f.icon className="mx-auto h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold text-lg">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
