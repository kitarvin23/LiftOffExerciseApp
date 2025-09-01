// Premium Fitness App Color Palette - Sophisticated & Modern
export const colors = {
  // Primary Colors - Premium deep blues with sophistication
  primary: '#1A365D',        // Deep navy for trust and professionalism
  primaryLight: '#2D5A87',   // Lighter navy for hover states
  primaryDark: '#0F2A44',    // Darker navy for depth
  primaryAccent: '#4299E1',  // Bright blue for CTAs and highlights

  // Secondary Colors - Energetic coral/orange for motivation
  secondary: '#FF6B35',      // Vibrant coral for energy and action
  secondaryLight: '#FF8A65', // Lighter coral for backgrounds
  secondaryDark: '#E55722',  // Darker coral for pressed states

  // Tertiary Colors - Premium gold for premium features
  tertiary: '#F6AD55',       // Warm gold for premium elements
  tertiaryLight: '#FBD38D',  // Light gold for backgrounds
  tertiaryDark: '#ED8936',   // Dark gold for emphasis

  // Background Colors - Sophisticated grays with warmth
  background: '#FAFAFA',     // Warm white for main background
  backgroundSecondary: '#F7FAFC', // Cool light gray for sections
  backgroundTertiary: '#EDF2F7',  // Medium gray for cards
  backgroundDark: '#2D3748', // Dark background for contrast sections

  // Surface Colors - Elevated surfaces with subtle tints
  surface: '#FFFFFF',
  surfaceElevated: '#FFFFFF',
  surfaceTinted: '#F8FAFC',  // Slightly tinted surface
  surfaceDark: '#1A202C',    // Dark surface for premium sections

  // Text Colors - Enhanced hierarchy and readability
  textPrimary: '#1A202C',    // Rich dark gray for primary text
  textSecondary: '#4A5568',  // Medium gray for secondary text
  textTertiary: '#718096',   // Light gray for tertiary text
  textLight: '#A0AEC0',      // Very light gray for subtle text
  textInverse: '#FFFFFF',    // White text for dark backgrounds
  textAccent: '#4299E1',     // Accent color for links and highlights

  // Border Colors - Refined separators
  border: '#E2E8F0',         // Soft gray border
  borderLight: '#F1F5F9',    // Very light border
  borderDark: '#CBD5E0',     // Darker border for emphasis
  borderAccent: '#4299E1',   // Accent border for focus states

  // Status Colors - Refined and accessible
  success: '#38A169',        // Professional green
  successLight: '#68D391',   // Light green for backgrounds
  warning: '#D69E2E',        // Sophisticated amber
  warningLight: '#F6E05E',   // Light amber for backgrounds
  error: '#E53E3E',          // Clear red for errors
  errorLight: '#FC8181',     // Light red for backgrounds
  info: '#3182CE',           // Professional blue for info
  infoLight: '#63B3ED',      // Light blue for backgrounds

  // Difficulty Colors - More sophisticated palette
  beginner: '#38A169',       // Confident green
  beginnerLight: '#C6F6D5',  // Light green background
  intermediate: '#D69E2E',   // Sophisticated amber
  intermediateLight: '#FAF089', // Light amber background
  advanced: '#E53E3E',       // Bold red
  advancedLight: '#FED7D7',  // Light red background

  // Shadow Colors - Enhanced depth
  shadow: '#000000',
  shadowLight: 'rgba(0, 0, 0, 0.04)',
  shadowMedium: 'rgba(0, 0, 0, 0.08)',
  shadowDark: 'rgba(0, 0, 0, 0.12)',
  shadowHeavy: 'rgba(0, 0, 0, 0.16)',

  // Gradient Colors - Premium gradients for visual appeal
  gradientPrimary: ['#1A365D', '#2D5A87'],
  gradientSecondary: ['#FF6B35', '#FF8A65'],
  gradientTertiary: ['#F6AD55', '#FBD38D'],
  gradientSuccess: ['#38A169', '#68D391'],
  gradientSurface: ['#FFFFFF', '#F8FAFC'],
  gradientDark: ['#1A202C', '#2D3748'],
};

// Spacing System - 8px base unit
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
};

// Premium Typography System - Enhanced hierarchy and readability
export const typography = {
  // Font Sizes - Refined scale for better hierarchy
  fontSize: {
    xs: 11,
    sm: 13,
    md: 15,
    lg: 17,
    xl: 19,
    xxl: 22,
    xxxl: 26,
    display: 32,
    hero: 38,
    mega: 44,
  },

  // Font Weights - Extended range for premium feel
  fontWeight: {
    thin: '100',
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },

  // Line Heights - Optimized for readability
  lineHeight: {
    tight: 1.1,
    snug: 1.25,
    normal: 1.4,
    relaxed: 1.6,
    loose: 1.8,
    extraLoose: 2.0,
  },

  // Letter Spacing - For premium typography feel
  letterSpacing: {
    tighter: -0.5,
    tight: -0.25,
    normal: 0,
    wide: 0.25,
    wider: 0.5,
    widest: 1.0,
  },
};

// Border Radius System
export const borderRadius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 24,
  full: 9999,
};

// Shadow System
export const shadows = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 8,
  },
  xl: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.16,
    shadowRadius: 16,
    elevation: 12,
  },
};

// Premium Component Styles - Enhanced visual appeal and interactions
export const components = {
  // Enhanced Card System
  card: {
    primary: {
      backgroundColor: colors.surface,
      borderRadius: borderRadius.xl,
      ...shadows.md,
      borderWidth: 0.5,
      borderColor: colors.borderLight,
    },
    elevated: {
      backgroundColor: colors.surface,
      borderRadius: borderRadius.xl,
      ...shadows.lg,
      borderWidth: 0,
    },
    premium: {
      backgroundColor: colors.surface,
      borderRadius: borderRadius.xl,
      ...shadows.xl,
      borderWidth: 1,
      borderColor: colors.tertiary,
    },
    dark: {
      backgroundColor: colors.surfaceDark,
      borderRadius: borderRadius.xl,
      ...shadows.lg,
      borderWidth: 0,
    },
  },

  // Enhanced Button System
  button: {
    primary: {
      backgroundColor: colors.primary,
      borderRadius: borderRadius.xl,
      paddingVertical: spacing.lg,
      paddingHorizontal: spacing.xl,
      ...shadows.md,
    },
    primaryGradient: {
      borderRadius: borderRadius.xl,
      paddingVertical: spacing.lg,
      paddingHorizontal: spacing.xl,
      ...shadows.md,
    },
    secondary: {
      backgroundColor: colors.secondary,
      borderRadius: borderRadius.xl,
      paddingVertical: spacing.lg,
      paddingHorizontal: spacing.xl,
      ...shadows.sm,
    },
    tertiary: {
      backgroundColor: colors.backgroundTertiary,
      borderRadius: borderRadius.xl,
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
      borderWidth: 1,
      borderColor: colors.border,
    },
    premium: {
      backgroundColor: colors.tertiary,
      borderRadius: borderRadius.xl,
      paddingVertical: spacing.lg,
      paddingHorizontal: spacing.xl,
      ...shadows.lg,
    },
    ghost: {
      backgroundColor: 'transparent',
      borderRadius: borderRadius.xl,
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
      borderWidth: 1.5,
      borderColor: colors.primary,
    },
  },

  // Enhanced Header System
  header: {
    default: {
      backgroundColor: colors.surface,
      borderBottomWidth: 0.5,
      borderBottomColor: colors.borderLight,
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.xl,
      ...shadows.sm,
    },
    premium: {
      backgroundColor: colors.surface,
      borderBottomWidth: 0,
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.xl,
      ...shadows.md,
    },
    gradient: {
      borderBottomWidth: 0,
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.xl,
      ...shadows.lg,
    },
  },

  // Premium Badge System
  badge: {
    primary: {
      backgroundColor: colors.primary,
      borderRadius: borderRadius.full,
      paddingVertical: spacing.xs,
      paddingHorizontal: spacing.sm,
    },
    secondary: {
      backgroundColor: colors.secondary,
      borderRadius: borderRadius.full,
      paddingVertical: spacing.xs,
      paddingHorizontal: spacing.sm,
    },
    premium: {
      backgroundColor: colors.tertiary,
      borderRadius: borderRadius.full,
      paddingVertical: spacing.xs,
      paddingHorizontal: spacing.sm,
      ...shadows.sm,
    },
    outline: {
      backgroundColor: 'transparent',
      borderRadius: borderRadius.full,
      paddingVertical: spacing.xs,
      paddingHorizontal: spacing.sm,
      borderWidth: 1,
      borderColor: colors.border,
    },
  },
};

export default {
  colors,
  spacing,
  typography,
  borderRadius,
  shadows,
  components,
};
