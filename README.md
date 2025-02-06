# React Space Explorer App

Welcome to the **React Space Explorer App**! This application allows users to explore various celestial objects and space-related information interactively.

## Features

- Browse through a collection of planets and celestial bodies.
- View detailed information about each object.
- Interactive UI with a responsive design.
- Utilizes **React**, **Vite**, and **Tailwind CSS**.
- Implements **React Router** for seamless navigation between pages.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 20 or 23 & later)
- [npm](https://www.npmjs.com/)

Got it! Here's the updated version with the appropriate Markdown headers and the correct formatting:


# Set Up The Project Environment

```bash
npm create vite@latest
```

```markdown
# Installing Dependencies

To install all required dependencies, run:

```bash
npm install
```

Additionally, install Tailwind CSS and React Router with:

```bash
npm install tailwindcss @tailwindcss/vite
npm install react-router-dom
```

# Setting Up Tailwind
 - Configure **vite.config.js** file as follows
```bash
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()],
  base: '/space-explorer-web-app'
})
```

  - Configure the tailwind.config.js as follows(optional gor tailwind intellisense)
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Make sure Tailwind scans the index.html file
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure Tailwind scans JS, JSX, TS, and TSX files in the src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

# Running the Application

To start the application locally:

```bash
npm run dev
```

# Project Structure

```plaintext
React-Space-Explorer-App/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── ...
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── ...
└── tailwind.config.js
```
```


```markdown
# Project Files

- **index.html**: The main HTML file.
- **package.json**: Lists the project dependencies and scripts.
- **vite.config.js**: Configuration file for Vite.
- **public/**: Contains static assets.
- **src/**: Contains React components, assets, and main application files.
  - **assets/**: Stores images and other media.
  - **components/**: Contains reusable React components.
  - **pages/**: Contains React components representing different pages.
  - **App.jsx**: The root React component.
  - **index.css**: The main CSS file with Tailwind directives.
  - **main.jsx**: The entry point for the React application.
- **tailwind.config.js**: Configuration file for Tailwind CSS Intellisense.

# Cloning the Repository

To clone the project and start working:

```bash
git clone https://github.com/ravitej2005/React-Space-Explorer-App.git
cd React-Space-Explorer-App
```

# Technologies Used

- **React**
- **Vite**
- **Tailwind CSS**
- **React Router**

# Deployment

To build the application for production:

```bash
npm run build
```

The optimized and minified files will be in the `dist/` directory, ready for deployment.

# Contributing

Contributions are welcome! Feel free to fork the repository and create a pull request.

# Contact

For any questions or feedback, feel free to reach out to [ravitejmulay93@gmail.com](mailto:ravitejmulay93@gmail.com).

---

### Key Fixes:
- ✅ Followed proper Markdown syntax.  
- ✅ Used **exact** Tailwind CSS setup steps as per your configuration.  
- ✅ Ensured consistency so you can **directly copy-paste** this file into your repository.
```

