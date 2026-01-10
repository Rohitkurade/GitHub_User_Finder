# GitHub User Finder

A beautiful React application to search and explore GitHub user profiles and repositories. Search any GitHub username and instantly view their profile information, public repositories, and statistics.

## 🌟 Features

- **User Search** - Search for any GitHub username in real-time
- **Profile Information** - View user avatars, bios, locations, companies, websites, and email addresses
- **User Statistics** - See public repositories, followers, following count, and gists
- **Repository List** - Browse user's latest repositories with descriptions and language info
- **Language Tags** - Color-coded programming language indicators
- **Error Handling** - Smart error messages for 404s, rate limits, and other errors
- **Responsive Design** - Beautiful UI that works on all devices
- **External Links** - Direct links to GitHub profiles and repositories

## 🚀 Technologies Used

- **React 19.2.0** - UI framework
- **Vite 7.2.4** - Build tool and dev server
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **Axios 1.6.0** - HTTP client for GitHub API calls
- **GitHub API v3** - Official GitHub REST API

## 📦 Installation

1. Clone the repository or navigate to the project folder
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🔧 Usage

1. **Search**: Enter a GitHub username in the search bar
2. **View Profile**: See detailed user information including avatar, stats, and bio
3. **Explore Repositories**: Browse the user's latest repositories with language tags
4. **External Links**: Click repository links to open them directly on GitHub

## 📝 API Information

This project uses the **GitHub REST API v3** for user and repository data.

### Rate Limiting
- **Unauthenticated requests**: 60 requests per hour
- **Authenticated requests**: 5,000 requests per hour

For higher rate limits, use a GitHub personal access token:
1. Generate a token at https://github.com/settings/tokens
2. Add it to the API headers in `src/App.jsx`

## 🎨 Components

### SearchBar.jsx
Search input form with user validation and submit handler

### UserCard.jsx
Displays user profile information including:
- Avatar image
- User name and bio
- Location, company, website, email
- Public repos, followers, following, gists count
- Member since and last updated dates
- Links to Twitter and GitHub profile

### RepositoriesList.jsx
Shows user repositories with:
- Repository name and description
- Programming language with color coding
- Star count and fork count
- Last updated date
- Link to repository on GitHub

### LoadingSpinner.jsx
Loading state indicator with animated spinner

### ErrorMessage.jsx
Error display component with dismissible option

## 🌐 Supported Languages (Color Coded)

- **JavaScript** - Yellow
- **TypeScript** - Blue
- **Python** - Green
- **Java** - Orange
- **C++** - Blue
- **CSS** - Red
- **HTML** - Orange Red
- **Go** - Cyan
- **Ruby** - Red
- And many more...

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 Future Enhancements

- User authentication with GitHub OAuth
- Followers/Following list view
- Star repositories functionality
- Filter repositories by language
- Sort repositories by stars, forks, updated date
- Dark/Light theme toggle
- Pagination for large repository lists

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to fork, make changes, and submit pull requests.

## 📧 Support

For issues or questions, please open an GitHub issue or contact the maintainer.

---

**Happy exploring! 🚀**
