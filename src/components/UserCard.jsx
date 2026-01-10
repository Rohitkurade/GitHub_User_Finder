export default function UserCard({ user }) {
  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {/* Profile Info */}
      <div className="md:col-span-1">
        <div className="bg-gray-800/50 border border-primary/20 rounded-lg p-6 text-center">
          <img
            src={user.avatar_url}
            alt={user.name || user.login}
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary/30 hover:border-primary transition"
          />
          <h2 className="text-2xl font-bold text-white mb-1">{user.name || user.login}</h2>
          <p className="text-primary font-semibold mb-2">@{user.login}</p>
          {user.bio && <p className="text-gray-400 text-sm mb-4">{user.bio}</p>}

          {user.location && (
            <p className="text-gray-400 text-sm mb-2 flex items-center justify-center gap-2">
              <span>📍</span> {user.location}
            </p>
          )}

          {user.company && (
            <p className="text-gray-400 text-sm mb-4 flex items-center justify-center gap-2">
              <span>🏢</span> {user.company}
            </p>
          )}

          {user.blog && (
            <a
              href={user.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary transition text-sm flex items-center justify-center gap-2 mb-4"
            >
              <span>🔗</span> Website
            </a>
          )}

          <div className="flex gap-2 justify-center mb-4">
            {user.twitter_username && (
              <a
                href={`https://twitter.com/${user.twitter_username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-primary/20 text-primary rounded hover:bg-primary hover:text-white transition text-sm"
              >
                Twitter
              </a>
            )}
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-primary/20 text-primary rounded hover:bg-primary hover:text-white transition text-sm"
            >
              View Profile
            </a>
          </div>

          {user.email && (
            <p className="text-gray-400 text-sm break-all">
              <strong>Email:</strong> {user.email}
            </p>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="md:col-span-2 grid grid-cols-2 gap-4">
        <div className="bg-gray-800/50 border border-primary/20 rounded-lg p-6 group hover:border-primary hover:shadow-lg transition">
          <p className="text-gray-400 text-sm">Public Repositories</p>
          <p className="text-4xl font-bold text-primary group-hover:text-secondary transition">
            {formatNumber(user.public_repos)}
          </p>
        </div>

        <div className="bg-gray-800/50 border border-primary/20 rounded-lg p-6 group hover:border-primary hover:shadow-lg transition">
          <p className="text-gray-400 text-sm">Followers</p>
          <p className="text-4xl font-bold text-secondary group-hover:text-primary transition">
            {formatNumber(user.followers)}
          </p>
        </div>

        <div className="bg-gray-800/50 border border-primary/20 rounded-lg p-6 group hover:border-primary hover:shadow-lg transition">
          <p className="text-gray-400 text-sm">Following</p>
          <p className="text-4xl font-bold text-primary group-hover:text-secondary transition">
            {formatNumber(user.following)}
          </p>
        </div>

        <div className="bg-gray-800/50 border border-primary/20 rounded-lg p-6 group hover:border-primary hover:shadow-lg transition">
          <p className="text-gray-400 text-sm">Public Gists</p>
          <p className="text-4xl font-bold text-secondary group-hover:text-primary transition">
            {formatNumber(user.public_gists)}
          </p>
        </div>

        <div className="col-span-2 bg-gray-800/50 border border-primary/20 rounded-lg p-6">
          <p className="text-gray-400 text-sm mb-2">Member Since</p>
          <p className="text-xl font-semibold text-white">
            {new Date(user.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>

        <div className="col-span-2 bg-gray-800/50 border border-primary/20 rounded-lg p-6">
          <p className="text-gray-400 text-sm mb-2">Last Updated</p>
          <p className="text-xl font-semibold text-white">
            {new Date(user.updated_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
