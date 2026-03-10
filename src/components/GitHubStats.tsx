import { motion } from "framer-motion";

const GitHubStats = () => {
  const username = "dhruvgithu";

  return (
    <section id="github" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            GitHub <span className="gradient-text">Statistics</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong p-6 rounded-2xl neon-border flex items-center justify-center"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=a855f7&icon_color=06b6d4&text_color=e2e8f0`}
              alt="GitHub Stats"
              className="w-full max-w-md"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-strong p-6 rounded-2xl neon-border-blue flex items-center justify-center"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=a855f7&text_color=e2e8f0`}
              alt="Top Languages"
              className="w-full max-w-md"
              loading="lazy"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 glass-strong p-6 rounded-2xl neon-border-pink max-w-5xl mx-auto flex items-center justify-center"
        >
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&background=00000000&ring=a855f7&fire=f472b6&currStreakLabel=e2e8f0`}
            alt="GitHub Streak"
            className="w-full max-w-2xl"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;
