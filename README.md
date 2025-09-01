# LiftOffExerciseApp 🏋️‍♂️

A premium React Native fitness application built with Expo that provides comprehensive exercise demonstrations, video tutorials, and progress tracking for fitness enthusiasts.

## 📱 Project Overview

LiftOffExerciseApp is a sophisticated fitness tracking application that offers:
- **Exercise Library**: Curated collection of professional exercises with detailed instructions
- **Video Demonstrations**: High-quality exercise videos with proper form guidance
- **Step-by-Step Instructions**: Detailed breakdown of exercise movements and safety tips
- **Progress Tracking**: Monitor your workout completion and weekly goals
- **Premium Features**: Advanced exercises, analytics, and personalized training content
- **Modern UI**: Beautiful, responsive design with premium styling and smooth animations

## ✨ Features

### Core Features
- **Exercise List Screen**: Browse available exercises with premium card-based UI
- **Exercise Detail Screen**: Comprehensive exercise information including:
  - Video demonstrations with expo-video player
  - Step-by-step instructions with numbered guidance
  - Form tips and safety recommendations
  - Primary and secondary muscle group targeting
  - Exercise metadata (category, duration, difficulty)
- **Interactive Exercise Demonstrations**: Multiple position images showing proper form
- **Progress Tracking**: Visual progress indicators and streak tracking
- **Premium Upgrade Modal**: Subscription-based premium features

### Premium Features
- 🎯 Advanced exercise routines
- 📊 Detailed progress analytics
- 🏆 Achievement system with badges
- 📱 Offline exercise access
- 🎵 Exclusive premium content and nutrition guides

### Exercise Library
The app includes 5 professionally curated exercises:
1. **Barbell Bench Press** (Intermediate) - Upper body compound movement
2. **Front and Back Lunges** (Beginner) - Dynamic lower body exercise
3. **Barbell Push and Press** (Advanced) - Full body explosive movement
4. **Overhead Shoulder Press** (Intermediate) - Shoulder and core strengthening
5. **Donkey Calf Raise** (Beginner) - Calf muscle isolation

## 🚀 Installation Instructions

### Prerequisites
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **Expo CLI** - Install globally: `npm install -g @expo/cli`
- **Git** - [Download here](https://git-scm.com/)

### Platform-Specific Requirements

#### For iOS Development:
- **Xcode** (latest version) - Available on Mac App Store
- **iOS Simulator** (included with Xcode)
- **CocoaPods** - Install with: `sudo gem install cocoapods`

#### For Android Development:
- **Android Studio** - [Download here](https://developer.android.com/studio)
- **Android SDK** (API level 21 or higher)
- **Android Emulator** or physical Android device

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/kitarvin23/LiftOffExerciseApp.git
   cd LiftOffExerciseApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install iOS dependencies** (macOS only)
   ```bash
   cd ios && pod install && cd ..
   ```

## 🏃‍♂️ Running the App

### Development Server
Start the Expo development server:
```bash
npm start
# or
expo start
```

### Platform-Specific Commands

#### iOS (macOS only)
```bash
npm run ios
# or
expo run:ios
```

#### Android
```bash
npm run android
# or
expo run:android
```

#### Web
```bash
npm run web
# or
expo start --web
```

### Using Expo Go (Recommended for Quick Testing)
1. Install **Expo Go** app on your mobile device
2. Run `npm start` to start the development server
3. Scan the QR code with your device camera (iOS) or Expo Go app (Android)

## 📁 Project Structure

```
LiftOffExerciseApp/
├── App.js                     # Main app component with navigation setup
├── package.json               # Dependencies and scripts
├── app.json                   # Expo configuration
├── index.js                   # Entry point
├── assets/                    # Static assets
│   ├── exercises/             # Exercise-related images
│   │   ├── avatars/           # Exercise thumbnail images
│   │   ├── full/              # Full-size exercise images
│   │   └── exercise_demonstration/ # Step-by-step position images
│   ├── icon.png               # App icon
│   ├── splash-icon.png        # Splash screen icon
│   └── adaptive-icon.png      # Android adaptive icon
├── components/                # Reusable UI components
│   ├── ExerciseDemonstration.js    # Interactive exercise position viewer
│   ├── PremiumCard.js              # Premium-styled card component
│   ├── PremiumBadge.js             # Styled badge component
│   ├── PremiumButton.js            # Premium button component
│   ├── PremiumHeader.js            # Premium header component
│   ├── PremiumUpgradeModal.js      # Subscription upgrade modal
│   └── ProgressTracker.js          # Progress visualization component
├── screens/                   # App screens
│   ├── ExerciseListScreen.js       # Main exercise browsing screen
│   └── ExerciseDetailScreen.js     # Detailed exercise view
├── theme/                     # Design system
│   └── colors.js                   # Color palette and styling constants
└── utils/                     # Utility functions
    └── exerciseDemonstrationUtils.js # Exercise asset management
```

## 🛠 Technologies Used

### Core Framework
- **React Native** (0.79.6) - Cross-platform mobile development
- **Expo** (~53.0.22) - Development platform and build tools
- **React** (19.0.0) - UI library

### Navigation & UI
- **React Navigation** (v7) - Screen navigation and routing
- **Expo Linear Gradient** - Premium gradient effects
- **Expo Image** - Optimized image handling
- **React Native Reanimated** - Smooth animations and transitions

### Media & Assets
- **Expo Video** - Video playback for exercise demonstrations
- **Expo AV** - Audio/video utilities

### Development Tools
- **Babel** - JavaScript transpilation
- **Expo CLI** - Development and build tooling

## 📸 Screenshots

*Screenshots can be added to showcase:*
- Exercise list screen with premium card design
- Exercise detail screen with video player
- Progress tracking dashboard
- Premium upgrade modal
- Exercise demonstration viewer

## 🎨 Design System

The app features a sophisticated design system with:
- **Premium Color Palette**: Deep navy blues, energetic coral, and premium gold accents
- **Typography**: Carefully crafted font weights and spacing
- **Card-Based UI**: Elevated cards with shadows and gradients
- **Smooth Animations**: Enhanced transitions and interactions
- **Responsive Design**: Optimized for various screen sizes

## 🔧 Development

### Adding New Exercises
1. Add exercise data to the `exercises` array in `ExerciseListScreen.js`
2. Add corresponding images to `assets/exercises/` directories
3. Update `exerciseDemonstrationUtils.js` if adding new demonstration positions

### Customizing Theme
Modify `theme/colors.js` to adjust the app's color scheme and styling constants.

## 📄 License

This project is private and proprietary.

---

**Built with ❤️ using React Native and Expo**
