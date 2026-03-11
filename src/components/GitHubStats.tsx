import { motion } from "framer-motion";

const GitHubStats = () => {
  const username = "dhruvgithu";

  return (
    <div id="github" className="py-4 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-display">
            GitHub <span className="gradient-text">Statistics</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-strong p-4 rounded-2xl neon-border flex items-center justify-center"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=a855f7&icon_color=06b6d4&text_color=e2e8f0&hide_title=true`}
              alt="GitHub Stats"
              className="w-full max-w-sm"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-strong p-4 rounded-2xl neon-border-blue flex items-center justify-center"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=a855f7&text_color=e2e8f0&hide_title=true`}
              alt="Top Languages"
              className="w-full max-w-sm"
              loading="lazy"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 glass-strong p-4 rounded-2xl neon-border-pink max-w-4xl mx-auto flex items-center justify-center"
        >
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&background=00000000&ring=a855f7&fire=f472b6&currStreakLabel=e2e8f0`}
            alt="GitHub Streak"
            className="w-full max-w-lg"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default GitHubStats;
