# 📱 Mobile App Learning Project

A comprehensive React Native learning project built with Expo and modern mobile development technologies. This repository serves as my playground for exploring and mastering mobile app development using cutting-edge tools and best practices.

## 🎯 Project Purpose

This project is designed for **learning and experimenting** with mobile app development technologies. It showcases various UI components, API integrations, theming, internationalization, and modern React Native patterns.

## 🚀 Technologies & Stack

### Core Framework
- **[Expo](https://expo.dev/)** - Development platform for React Native
- **[Expo Router](https://docs.expo.dev/router/introduction/)** - File-based routing for React Native
- **[Expo API Routes](https://docs.expo.dev/router/reference/api-routes/)** - Server-side API routes

### UI & Styling
- **[React Native Reusables](https://github.com/mrzachnugent/react-native-reusables)** - Unstyled, accessible UI components
- **[NativeWind](https://www.nativewind.dev/)** - Tailwind CSS for React Native
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)** - Smooth animations

### Backend & Database
- **[Supabase](https://supabase.com/)** - Backend-as-a-Service with PostgreSQL
- **[Supabase Client](https://supabase.com/docs/reference/javascript/supabase-createclient)** - JavaScript client for Supabase

### Development Tools
- **[Expo Create Stack](https://github.com/danstepanov/create-expo-stack)** - Project scaffolding tool
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and better DX
- **[ESLint](https://eslint.org/)** - Code linting and formatting

### Additional Features
- **[i18n](https://react.i18next.com/)** - Internationalization support
- **[Vexo Analytics](https://vexo.co/)** - Mobile app analytics
- **[AsyncStorage](https://github.com/react-native-async-storage/async-storage)** - Local data persistence

## 📁 Project Structure

```
├── app/                          # Expo Router pages
│   ├── (drawer)/                 # Drawer navigation group
│   │   ├── (tabs)/              # Tab navigation group
│   │   │   ├── index.tsx        # Dashboard with API demos
│   │   │   └── two.tsx          # Settings screen
│   │   ├── _layout.tsx          # Drawer layout
│   │   └── index.tsx            # Components showcase
│   ├── api/                     # API routes (Expo Router API)
│   │   ├── hello+api.ts         # Hello API endpoint
│   │   └── users+api.ts         # Users CRUD API
│   ├── _layout.tsx              # Root layout with theme provider
│   ├── +html.tsx                # Web HTML configuration
│   ├── +not-found.tsx           # 404 page
│   └── modal.tsx                # Modal screen with UI demos
│
├── components/                   # Reusable components
│   ├── ui/                      # UI primitive components
│   │   ├── button.tsx           # Button component
│   │   ├── card.tsx             # Card component
│   │   ├── input.tsx            # Input component
│   │   └── ...                  # Other UI components
│   ├── ThemeToggle.tsx          # Dark/light theme toggle
│   └── ...                      # Other components
│
├── utils/                       # Utility functions
│   ├── api.ts                   # API configuration and helpers
│   └── supabase.ts              # Supabase client setup
│
├── lib/                         # Library functions and hooks
│   ├── useColorScheme.tsx       # Theme management hook
│   ├── constants.ts             # App constants
│   └── ...                      # Other utilities
│
├── translation/                 # Internationalization
│   ├── en.json                  # English translations
│   ├── fr.json                  # French translations
│   └── index.ts                 # i18n configuration
│
└── assets/                      # Static assets
    ├── icon.png                 # App icon
    ├── splash.png               # Splash screen
    └── ...                      # Other assets
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Vexo Analytics
EXPO_PUBLIC_VEXO_API_KEY="your-vexo-api-key"

# Supabase Configuration
EXPO_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
EXPO_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"

# API Configuration
EXPO_PUBLIC_API_BASE_URL="/api"
EXPO_PUBLIC_API_URL_DEV="http://localhost:8081"
EXPO_PUBLIC_API_URL_PROD="https://your-app.expo.app"

# Expo Configuration
EXPO_UNSTABLE_DEPLOY_SERVER=1
```

### Required Setup

1. **Supabase Project**: Create a project at [supabase.com](https://supabase.com)
2. **Vexo Analytics**: Sign up at [vexo.co](https://vexo.co) for analytics
3. **Environment Variables**: Configure all required environment variables

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm
- Expo CLI (`npm install -g @expo/cli`)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <project-name>
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start the development server**
   ```bash
   npx expo start
   ```

5. **Run on device/simulator**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app

## ✨ Features Implemented

### 🎨 UI Components Showcase
- **Dashboard**: Interactive cards with progress bars and statistics
- **Settings Screen**: Form inputs, switches, radio buttons, and more
- **Component Gallery**: Advanced UI components like tables, popovers, accordions
- **Modal Screens**: Dialogs, alerts, tabs, and skeleton loading states

### 🌙 Dark Mode Support
- **Theme Toggle**: Switch between light and dark themes
- **System Integration**: Respects system color scheme preferences
- **Consistent Theming**: All components adapt to theme changes
- **Platform Support**: Works on iOS, Android, and Web

### 🔌 API Integration
- **Hello API**: GET/POST requests with personalized responses
- **Users API**: Full CRUD operations (Create, Read, Delete)
- **Environment-based URLs**: Automatic dev/prod API switching
- **Error Handling**: Comprehensive error states and loading indicators
- **Type Safety**: TypeScript interfaces for all API responses

### 🌍 Internationalization
- **Multi-language Support**: English and French translations
- **Language Detection**: Automatic language detection
- **Fallback System**: Graceful fallback for missing translations

### 📊 Analytics Integration
- **Vexo Analytics**: App usage tracking and insights
- **Event Tracking**: Custom events and user interactions

### 🎯 Developer Experience
- **TypeScript**: Full type safety throughout the app
- **Code Organization**: Clean folder structure and separation of concerns
- **Reusable Components**: Modular and composable UI components
- **Environment Configuration**: Easy setup for different environments

## 📱 Screens Overview

1. **Dashboard** (`/dashboard`)
   - User profile with statistics
   - Interactive progress bars
   - API demo sections with real-time responses

2. **Settings** (`/settings`)
   - Profile management forms
   - Theme and language preferences
   - Privacy and notification controls

3. **Components Showcase** (`/`)
   - Toggle controls and interactive elements
   - Data tables with user management
   - Popovers, hover cards, and tooltips
   - Aspect ratio containers and layouts

4. **Modal Demos** (`/modal`)
   - UI components showcase
   - Interactive demos with animations
   - Accordion sections and tabbed content

## 🔧 Available Scripts

```bash
# Development
pnpm start                 # Start Expo development server
pnpm run android          # Run on Android
pnpm run ios              # Run on iOS
pnpm run web              # Run on Web

# Code Quality
pnpm run lint             # Run ESLint
pnpm run type-check       # Run TypeScript check

# Building
pnpm run build            # Build for production
```

## 🚀 Deployment

This project is configured for deployment using Expo's hosting services:

1. **EAS Build**: `npx eas build`
2. **EAS Submit**: `npx eas submit`
3. **Expo Web**: `npx expo export:web`

## 📚 Learning Resources

This project demonstrates concepts from:

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Reusables](https://rnr-docs.vercel.app/)
- [NativeWind Documentation](https://www.nativewind.dev/quick-starts/expo)
- [Supabase React Native Guide](https://supabase.com/docs/guides/getting-started/tutorials/with-expo-react-native)
- [Expo Router Documentation](https://expo.github.io/router/docs/)

## 🤝 Contributing

This is a personal learning project, but suggestions and improvements are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ for learning mobile app development**

*This repository serves as a comprehensive example of modern React Native development practices and is continuously updated with new features and improvements.* 