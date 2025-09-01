import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import theme from '../theme/colors';

const PremiumBadge = ({ 
  text, 
  variant = 'primary',
  size = 'medium',
  style,
  textStyle,
  ...props 
}) => {
  const getBadgeStyle = () => {
    const baseStyle = [styles.badge, styles[`${variant}Badge`], styles[`${size}Badge`]];
    if (style) baseStyle.push(style);
    return baseStyle;
  };

  const getTextStyle = () => {
    const baseStyle = [styles.badgeText, styles[`${variant}Text`], styles[`${size}Text`]];
    if (textStyle) baseStyle.push(textStyle);
    return baseStyle;
  };

  if (variant === 'gradient' || variant === 'premiumGradient') {
    const gradientColors = variant === 'premiumGradient' 
      ? theme.colors.gradientTertiary 
      : theme.colors.gradientPrimary;
    
    return (
      <View style={[styles.gradientContainer, styles[`${size}Badge`], style]} {...props}>
        <LinearGradient
          colors={gradientColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <Text style={[styles.badgeText, styles.gradientText, styles[`${size}Text`], textStyle]}>
            {text}
          </Text>
        </LinearGradient>
      </View>
    );
  }

  return (
    <View style={getBadgeStyle()} {...props}>
      <Text style={getTextStyle()}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    borderRadius: theme.borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  badgeText: {
    fontWeight: theme.typography.fontWeight.semibold,
    textAlign: 'center',
  },
  
  // Badge Variants
  primaryBadge: {
    backgroundColor: theme.colors.primary,
  },
  secondaryBadge: {
    backgroundColor: theme.colors.secondary,
  },
  successBadge: {
    backgroundColor: theme.colors.success,
  },
  warningBadge: {
    backgroundColor: theme.colors.warning,
  },
  errorBadge: {
    backgroundColor: theme.colors.error,
  },
  premiumBadge: {
    backgroundColor: theme.colors.tertiary,
    ...theme.shadows.sm,
  },
  outlineBadge: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  
  // Difficulty Variants
  beginnerBadge: {
    backgroundColor: theme.colors.beginnerLight,
  },
  intermediateBadge: {
    backgroundColor: theme.colors.intermediateLight,
  },
  advancedBadge: {
    backgroundColor: theme.colors.advancedLight,
  },
  
  // Badge Sizes
  smallBadge: {
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.sm,
  },
  mediumBadge: {
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
  },
  largeBadge: {
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
  },
  
  // Text Variants
  primaryText: {
    color: theme.colors.textInverse,
  },
  secondaryText: {
    color: theme.colors.textInverse,
  },
  successText: {
    color: theme.colors.textInverse,
  },
  warningText: {
    color: theme.colors.textPrimary,
  },
  errorText: {
    color: theme.colors.textInverse,
  },
  premiumText: {
    color: theme.colors.textInverse,
  },
  outlineText: {
    color: theme.colors.textPrimary,
  },
  gradientText: {
    color: theme.colors.textInverse,
  },
  
  // Difficulty Text
  beginnerText: {
    color: theme.colors.beginner,
  },
  intermediateText: {
    color: theme.colors.intermediate,
  },
  advancedText: {
    color: theme.colors.advanced,
  },
  
  // Text Sizes
  smallText: {
    fontSize: theme.typography.fontSize.xs,
  },
  mediumText: {
    fontSize: theme.typography.fontSize.sm,
  },
  largeText: {
    fontSize: theme.typography.fontSize.md,
  },
  
  // Gradient Styles
  gradientContainer: {
    borderRadius: theme.borderRadius.full,
    ...theme.shadows.md,
  },
  gradient: {
    borderRadius: theme.borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PremiumBadge;
