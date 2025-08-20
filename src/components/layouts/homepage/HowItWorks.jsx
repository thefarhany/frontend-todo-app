import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      step: "1",
      title: "Register / Login",
      desc: "Create an account or login.",
    },
    { step: "2", title: "Add Todos", desc: "Start adding your tasks." },
    {
      step: "3",
      title: "Track & Manage",
      desc: "Update, complete, or delete tasks.",
    },
  ];

  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center max-w-4xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3 }}
            className="flex-1 bg-white shadow-md p-6 rounded-lg text-center"
          >
            <div className="text-4xl font-bold text-primary mb-4">{s.step}</div>
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
