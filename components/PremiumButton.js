import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import theme from '../theme/colors';

const PremiumButton = ({ 
  title, 
  onPress, 
  variant = 'primary', 
  size = 'large',
  disabled = false,
  icon = null,
  style,
  textStyle,
  ...props 
}) => {
  const getButtonStyle = () => {
    const baseStyle = [styles.button, styles[`${variant}Button`], styles[`${size}Button`]];
    if (disabled) baseStyle.push(styles.disabledButton);
    if (style) baseStyle.push(style);
    return baseStyle;
  };

  const getTextStyle = () => {
    const baseStyle = [styles.buttonText, styles[`${variant}Text`], styles[`${size}Text`]];
    if (disabled) baseStyle.push(styles.disabledText);
    if (textStyle) baseStyle.push(textStyle);
    return baseStyle;
  };

  const renderContent = () => (
    <View style={styles.buttonContent}>
      {icon && <View style={styles.iconContainer}>{icon}</View>}
      <Text style={getTextStyle()}>{title}</Text>
    </View>
  );

  if (variant === 'gradient' || variant === 'premiumGradient') {
    const gradientColors = variant === 'premiumGradient' 
      ? theme.colors.gradientTertiary 
      : theme.colors.gradientPrimary;
    
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        activeOpacity={0.8}
        style={[styles.gradientContainer, style]}
        {...props}
      >
        <LinearGradient
          colors={gradientColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.gradient, styles[`${size}Button`]]}
        >
          {renderContent()}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={getButtonStyle()}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      {...props}
    >
      {renderContent()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.borderRadius.xl,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginRight: theme.spacing.sm,
  },
  buttonText: {
    fontWeight: theme.typography.fontWeight.semibold,
    textAlign: 'center',
  },
  
  // Button Variants
  primaryButton: {
    backgroundColor: theme.colors.primary,
    ...theme.shadows.md,
  },
  secondaryButton: {
    backgroundColor: theme.colors.secondary,
    ...theme.shadows.sm,
  },
  tertiaryButton: {
    backgroundColor: theme.colors.backgroundTertiary,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  ghostButton: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: theme.colors.primary,
  },
  premiumButton: {
    backgroundColor: theme.colors.tertiary,
    ...theme.shadows.lg,
  },
  disabledButton: {
    backgroundColor: theme.colors.backgroundTertiary,
    ...theme.shadows.none,
  },
  
  // Gradient Styles
  gradientContainer: {
    borderRadius: theme.borderRadius.xl,
    ...theme.shadows.md,
  },
  gradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.borderRadius.xl,
  },
  
  // Button Sizes
  smallButton: {
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
  },
  mediumButton: {
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
  },
  largeButton: {
    paddingVertical: theme.spacing.lg,
    paddingHorizontal: theme.spacing.xl,
  },
  
  // Text Variants
  primaryText: {
    color: theme.colors.textInverse,
  },
  secondaryText: {
    color: theme.colors.textInverse,
  },
  tertiaryText: {
    color: theme.colors.textPrimary,
  },
  ghostText: {
    color: theme.colors.primary,
  },
  premiumText: {
    color: theme.colors.textInverse,
  },
  disabledText: {
    color: theme.colors.textLight,
  },
  
  // Text Sizes
  smallText: {
    fontSize: theme.typography.fontSize.sm,
  },
  mediumText: {
    fontSize: theme.typography.fontSize.md,
  },
  largeText: {
    fontSize: theme.typography.fontSize.lg,
  },
});

export default PremiumButton;
