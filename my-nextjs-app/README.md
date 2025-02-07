# My Next.js App

This is a Next.js application initialized with Bun as the package manager.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd my-nextjs-app
   ```

2. **Install dependencies**:
   ```bash
   bun install
   ```

3. **Run the development server**:
   ```bash
   bun dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:3000` to see your application in action.

## Project Structure

- `pages/`: Contains the application's pages.
  - `index.tsx`: The main entry point for the application.
  - `_app.tsx`: Customizes the default App component.
  
- `public/`: Static files such as images and icons.
  - `favicon.ico`: The favicon for the application.
  
- `styles/`: Contains CSS files.
  - `Home.module.css`: CSS modules for the Home component.
  - `globals.css`: Global CSS styles for the application.

- `bun.lockb`: Locks the dependencies to specific versions.

- `package.json`: Configuration file for Bun, listing dependencies and scripts.

- `tsconfig.json`: TypeScript configuration file.

## Contributing

Feel free to submit issues or pull requests to improve this project.

## License

This project is licensed under the MIT License.