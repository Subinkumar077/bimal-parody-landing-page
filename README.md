You're in ask mode, so I can't edit files directly. Here's the README content to copy into `README.md`:

```markdown
# Bimal Parody Landing Page

A satirical landing page parodying a popular brand, built from a Figma design. This project features a humorous take on product marketing with dark comedy elements.

## 🎯 Overview

This is a React-based single-page application that showcases a parody brand "Bimal" with products humorously labeled as "cancerous." The landing page includes a hero section, product listings, and a disclaimer footer, all styled with a vibrant color scheme.

## ✨ Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Product cards animated with Framer Motion
- **Modern UI**: Clean, modern interface with custom brand colors
- **TypeScript**: Fully typed for better development experience
- **Fast Development**: Powered by Vite for lightning-fast builds

## 🛠️ Tech Stack

- **React** 19.2.3 - UI library
- **TypeScript** 5.8.2 - Type safety
- **Vite** 6.2.0 - Build tool and dev server
- **Framer Motion** 11.18.2 - Animation library
- **Tailwind CSS** - Utility-first CSS framework (via CDN)

## 📁 Project Structure

```
bimal-parody-landing-page/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section with title and image
│   ├── ProductList.tsx     # Product listing container
│   ├── ProductCard.tsx     # Individual product card component
│   └── Footer.tsx          # Footer with disclaimer
├── App.tsx                 # Main application component
├── constants.ts            # Centralized data and configuration
├── index.tsx               # Application entry point
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration
└── tsconfig.json           # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bimal-parody-landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production build will be generated in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Brand Colors

Brand colors are defined in `index.html` within the Tailwind configuration. You can modify them in the `tailwind.config` object:

- `brand-yellow`: #F59E0B
- `brand-orange`: #EA580C
- `brand-red`: #DC2626
- `brand-cream`: #FFF7ED
- `brand-card`: #FAE8D2
- `brand-dark`: #290F00

### Content

All text content and product data can be modified in `constants.ts`:

- `TEXTS`: Hero titles, subtitles, and section descriptions
- `PRODUCT_DATA`: Product information array
- `IMAGES`: Image URLs for hero and product images

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🌐 Browser Support

Modern browsers that support ES2022 features:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is a parody/satirical work created for educational and entertainment purposes.

## 🤝 Contributing

This is a parody project. Contributions, suggestions, and improvements are welcome!

## ⚠️ Disclaimer

This is a satirical/parody project and is not affiliated with any real brand. All content is intended for humor and entertainment purposes only.
```

Copy the content above and paste it into your `README.md` file. If you want me to apply it directly, switch to agent mode and I can update the file.