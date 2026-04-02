import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code2, ExternalLink, GitFork, Github, Star, Users } from "lucide-react";
import { Button } from "./ui/button";

interface GitHubRepo {
  name: string;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  description: string | null;
  fork: boolean;
}

interface GitHubUser {
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

interface LanguageStat {
  name: string;
  count: number;
  share: number;
}

interface RepoStat {
  name: string;
  html_url: string;
  stars: number;
  description: string | null;
  updated_at: string;
}

interface GitHubSnapshot {
  profileUrl: string;
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
  totalForks: number;
  topLanguages: LanguageStat[];
  topRepos: RepoStat[];
}

const username = "dhruvgithu";

const GitHubStats = () => {
  const [snapshot, setSnapshot] = useState<GitHubSnapshot | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let isActive = true;

    const loadGitHubStats = async () => {
      try {
        setStatus("loading");

        const [userResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`),
        ]);

        if (!userResponse.ok || !reposResponse.ok) {
          throw new Error("Failed to load GitHub data");
        }

        const user: GitHubUser = await userResponse.json();
        const repos: GitHubRepo[] = await reposResponse.json();
        const sourceRepos = repos.filter((repo) => !repo.fork);

        const totalStars = sourceRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        const totalForks = sourceRepos.reduce((sum, repo) => sum + repo.forks_count, 0);

        const languageCounts = sourceRepos.reduce<Record<string, number>>((acc, repo) => {
          if (!repo.language) return acc;
          acc[repo.language] = (acc[repo.language] || 0) + 1;
          return acc;
        }, {});

        const totalLanguageRepos = Object.values(languageCounts).reduce((sum, count) => sum + count, 0);

        const topLanguages = Object.entries(languageCounts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 6)
          .map(([name, count]) => ({
            name,
            count,
            share: totalLanguageRepos ? (count / totalLanguageRepos) * 100 : 0,
          }));

        const topRepos = [...sourceRepos]
          .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
          .slice(0, 3)
          .map((repo) => ({
            name: repo.name,
            html_url: repo.html_url,
            stars: repo.stargazers_count,
            description: repo.description,
            updated_at: repo.updated_at,
          }));

        if (!isActive) return;

        setSnapshot({
          profileUrl: user.html_url,
          publicRepos: user.public_repos,
          followers: user.followers,
          following: user.following,
          totalStars,
          totalForks,
          topLanguages,
          topRepos,
        });
        setStatus("ready");
      } catch {
        if (!isActive) return;
        setStatus("error");
      }
    };

    loadGitHubStats();

    return () => {
      isActive = false;
    };
  }, []);

  const statCards = snapshot
    ? [
        { label: "Public Repos", value: snapshot.publicRepos, icon: Github },
        { label: "Followers", value: snapshot.followers, icon: Users },
        { label: "Total Stars", value: snapshot.totalStars, icon: Star },
        { label: "Total Forks", value: snapshot.totalForks, icon: GitFork },
      ]
    : [];

  return (
    <section id="github" className="py-6 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-4"
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

        {status === "loading" && (
          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            <div className="glass-strong rounded-2xl p-6 min-h-[260px] animate-pulse" />
            <div className="glass-strong rounded-2xl p-6 min-h-[260px] animate-pulse" />
          </div>
        )}

        {status === "error" && (
          <div className="glass-strong rounded-2xl p-6 max-w-3xl mx-auto text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Github className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">GitHub stats couldn&apos;t load right now</h3>
            <p className="text-sm text-muted-foreground mb-5">
              The old image-based service is unavailable, so I replaced it with a native stats view. If GitHub rate limits requests temporarily, you can still open the profile directly.
            </p>
            <Button asChild>
              <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                Open GitHub Profile
              </a>
            </Button>
          </div>
        )}

        {status === "ready" && snapshot && (
          <>
            <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-strong p-6 rounded-2xl"
              >
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Profile Snapshot</p>
                    <h3 className="text-xl font-bold text-foreground">@{username}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {statCards.map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-border bg-muted/40 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <stat.icon className="w-4 h-4 text-primary" />
                        <span className="text-xs text-muted-foreground">{stat.label}</span>
                      </div>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5">
                  <Button asChild className="w-full">
                    <a href={snapshot.profileUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Visit GitHub Profile
                    </a>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass-strong p-6 rounded-2xl"
              >
                <div className="flex items-center gap-2 mb-5">
                  <Code2 className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Top Languages</h3>
                </div>

                <div className="space-y-4">
                  {snapshot.topLanguages.length > 0 ? (
                    snapshot.topLanguages.map((language) => (
                      <div key={language.name}>
                        <div className="flex items-center justify-between text-sm mb-1.5">
                          <span className="font-medium text-foreground">{language.name}</span>
                          <span className="text-muted-foreground">{language.count} repo{language.count > 1 ? "s" : ""}</span>
                        </div>
                        <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full rounded-full bg-primary transition-all duration-500"
                            style={{ width: `${Math.max(language.share, 12)}%` }}
                          />
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground">Language data is not available yet.</p>
                  )}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-4 glass-strong p-6 rounded-2xl max-w-5xl mx-auto"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-foreground">Highlighted Repositories</h3>
                <a
                  href={snapshot.profileUrl + "?tab=repositories"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  View all
                </a>
              </div>

              <div className="grid md:grid-cols-3 gap-3">
                {snapshot.topRepos.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-border bg-muted/30 p-4 hover:border-primary/40 hover:bg-primary/5 transition-all"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="font-semibold text-foreground leading-snug">{repo.name}</h4>
                      <ExternalLink className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-3 min-h-[60px]">
                      {repo.description || "Open this repository to view the project details and source code."}
                    </p>
                    <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-primary" />
                        {repo.stars}
                      </span>
                      <span>Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default GitHubStats;
