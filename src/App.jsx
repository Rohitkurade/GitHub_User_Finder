import { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import SearchBar from './components/SearchBar';
import RepositoriesList from './components/RepositoriesList';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';

export default function App() {
  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reposLoading, setReposLoading] = useState(false);

  const searchUser = async (username) => {
    if (!username.trim()) {
      setError('Please enter a username');
      return;
    }

    setLoading(true);
    setError(null);
    setUser(null);
    setRepositories([]);

    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`,
        {
          headers: {
            'Accept': 'application/vnd.github.v3+json',
          }
        }
      );
      setUser(response.data);
      
      // Fetch repositories
      if (response.data.repos_url) {
        setReposLoading(true);
        const reposResponse = await axios.get(response.data.repos_url, {
          params: { per_page: 10, sort: 'updated' },
          headers: {
            'Accept': 'application/vnd.github.v3+json',
          }
        });
        setRepositories(reposResponse.data);
        setReposLoading(false);
      }
    } catch (err) {
      if (err.response?.status === 404) {
        setError('User not found. Please check the username.');
      } else if (err.response?.status === 403) {
        setError('API rate limit exceeded. Please try again later.');
      } else {
        setError('Error fetching user data. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-darker to-dark text-gray-100">
      {/* Header */}
      <header className="border-b border-primary/20 sticky top-0 z-50 bg-dark/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              GitHub User Finder
            </h1>
          </div>
          <p className="text-gray-400">Search for GitHub users and explore their profiles and repositories</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <SearchBar onSearch={searchUser} loading={loading} />

        {/* Error Message */}
        {error && <ErrorMessage message={error} />}

        {/* Loading State */}
        {loading && <LoadingSpinner />}

        {/* User Card */}
        {user && !loading && (
          <>
            <UserCard user={user} />

            {/* Repositories Section */}
            {repositories.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">
                  Recent Repositories
                  <span className="ml-2 text-primary text-lg">({repositories.length})</span>
                </h2>
                {reposLoading ? (
                  <LoadingSpinner />
                ) : (
                  <RepositoriesList repositories={repositories} />
                )}
              </div>
            )}

            {repositories.length === 0 && !reposLoading && (
              <div className="text-center py-12 text-gray-400">
                <p>No public repositories found for this user.</p>
              </div>
            )}
          </>
        )}

        {/* Empty State */}
        {!user && !loading && !error && (
          <div className="text-center py-20">
            <svg className="w-20 h-20 mx-auto text-gray-600 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">Start Searching</h3>
            <p className="text-gray-400">Enter a GitHub username above to explore their profile and repositories</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-primary/20 mt-16 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
          <p>Built with React & Tailwind CSS | GitHub API Integration</p>
        </div>
      </footer>
    </div>
  );
}
