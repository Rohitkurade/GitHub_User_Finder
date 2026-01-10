export default function RepositoriesList({ repositories }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: 'bg-yellow-500/20 text-yellow-300',
      TypeScript: 'bg-blue-500/20 text-blue-300',
      Python: 'bg-green-500/20 text-green-300',
      Java: 'bg-red-500/20 text-red-300',
      CSS: 'bg-pink-500/20 text-pink-300',
      HTML: 'bg-orange-500/20 text-orange-300',
      React: 'bg-cyan-500/20 text-cyan-300',
      'C++': 'bg-purple-500/20 text-purple-300',
      Go: 'bg-cyan-600/20 text-cyan-200',
    };
    return colors[language] || 'bg-gray-500/20 text-gray-300';
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      {repositories.map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-gray-800/50 border border-primary/20 hover:border-primary rounded-lg p-6 transition hover:shadow-lg hover:-translate-y-1 duration-300"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white group-hover:text-primary transition mb-2">
                {repo.name}
              </h3>
              {repo.description && (
                <p className="text-gray-400 text-sm mb-4">{repo.description}</p>
              )}

              <div className="flex flex-wrap items-center gap-3">
                {repo.language && (
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLanguageColor(repo.language)}`}>
                    {repo.language}
                  </span>
                )}

                {repo.stargazers_count > 0 && (
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <span>⭐</span>
                    <span>{repo.stargazers_count}</span>
                  </div>
                )}

                {repo.forks_count > 0 && (
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <span>🍴</span>
                    <span>{repo.forks_count}</span>
                  </div>
                )}

                <div className="flex items-center gap-1 text-gray-400 text-sm ml-auto">
                  <span>📅</span>
                  <span>{formatDate(repo.updated_at)}</span>
                </div>
              </div>
            </div>

            <svg className="w-5 h-5 text-gray-600 group-hover:text-primary transition transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </a>
      ))}
    </div>
  );
}
