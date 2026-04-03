import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const username = "dhruvgithu";

type GitHubImageCardProps = {
  alt: string;
  caption: string;
  sources: string[];
};

const GitHubImageCard = ({ alt, caption, sources }: GitHubImageCardProps) => {
  const [sourceIndex, setSourceIndex] = useState(0);
  const [hasFailed, setHasFailed] = useState(false);

  const handleError = () => {
    if (sourceIndex < sources.length - 1) {
      setSourceIndex((current) => current + 1);
      return;
    }

    setHasFailed(true);
  };

  return (
    <div className="rounded-2xl border border-border bg-background/80 p-3 sm:p-4">
      <p className="text-sm font-medium text-foreground mb-3">{caption}</p>

      {hasFailed ? (
        <div className="rounded-xl border border-dashed border-border bg-muted/40 p-6 text-center">
          <Github className="w-8 h-8 text-primary mx-auto mb-3" />
          <p className="text-sm text-muted-foreground mb-3">GitHub image abhi load nahi hui, direct profile open kar sakte ho.</p>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <ExternalLink className="w-4 h-4" />
            Open GitHub Profile
          </a>
        </div>
      ) : (
        <img
          src={sources[sourceIndex]}
          alt={alt}
          loading="lazy"
          onError={handleError}
          className="block w-full h-auto rounded-xl bg-background"
        />
      )}
    </div>
  );
};

const GitHubStats = () => {
  const statsSources = [
    `https://github-readme-stats-sigma-five.vercel.app/api?username=${username}&show_icons=true&theme=default&hide_border=true`,
    `https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${username}&theme=default`,
  ];

  const streakSources = [
    `https://streak-stats.demolab.com?user=${username}&theme=default&hide_border=true`,
  ];

  const languagesSources = [
    `https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=default&hide_border=true`,
    `https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=${username}&theme=default`,
  ];

  const graphSources = [
    `https://github-readme-activity-graph.vercel.app/graph?username=${username}&bg_color=ffffff&color=0f172a&line=2563eb&point=2563eb&area=true&area_color=dbeafe&hide_border=true`,
  ];

  return (
    <section id="github" className="py-6 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            GitHub <span className="gradient-text">Statistics</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-5">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-border bg-card/80 p-4 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <GitHubImageCard
                alt="GitHub stats card for Dhruv Gahtori"
                caption="GitHub Stats Card"
                sources={statsSources}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-border bg-card/80 p-4 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <GitHubImageCard
                alt="GitHub streak stats for Dhruv Gahtori"
                caption="GitHub Streak Stats"
                sources={streakSources}
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl border border-border bg-card/80 p-4 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
          >
            <GitHubImageCard
              alt="GitHub contribution graph for Dhruv Gahtori"
              caption="Contribution Graph"
              sources={graphSources}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto rounded-2xl border border-border bg-card/80 p-4 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
          >
            <GitHubImageCard
              alt="Top programming languages chart for Dhruv Gahtori"
              caption="Top Languages Chart"
              sources={languagesSources}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
