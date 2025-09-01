import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import theme from '../theme/colors';

const PremiumCard = ({ 
  children, 
  variant = 'primary',
  onPress,
  style,
  contentStyle,
  disabled = false,
  ...props 
}) => {
  const getCardStyle = () => {
    const baseStyle = [styles.card, styles[`${variant}Card`]];
    if (style) baseStyle.push(style);
    return baseStyle;
  };

  const getContentStyle = () => {
    const baseStyle = [styles.content];
    if (contentStyle) baseStyle.push(contentStyle);
    return baseStyle;
  };

  if (variant === 'gradient' || variant === 'premiumGradient') {
    const gradientColors = variant === 'premiumGradient' 
      ? theme.colors.gradientTertiary 
      : theme.colors.gradientPrimary;
    
    const CardComponent = onPress ? TouchableOpacity : View;
    
    return (
      <CardComponent
        onPress={onPress}
        disabled={disabled}
        activeOpacity={onPress ? 0.95 : 1}
        style={[styles.gradientContainer, style]}
        {...props}
      >
        <LinearGradient
          colors={gradientColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <View style={getContentStyle()}>
            {children}
          </View>
        </LinearGradient>
      </CardComponent>
    );
  }

  if (onPress) {
    return (
      <TouchableOpacity
        style={getCardStyle()}
        onPress={onPress}
        disabled={disabled}
        activeOpacity={0.95}
        {...props}
      >
        <View style={getContentStyle()}>
          {children}
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={getCardStyle()} {...props}>
      <View style={getContentStyle()}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: theme.borderRadius.xl,
    overflow: 'hidden',
  },
  content: {
    padding: theme.spacing.lg,
  },
  
  // Card Variants
  primaryCard: {
    backgroundColor: theme.colors.surface,
    ...theme.shadows.md,
    borderWidth: 0.5,
    borderColor: theme.colors.borderLight,
  },
  elevatedCard: {
    backgroundColor: theme.colors.surface,
    ...theme.shadows.lg,
  },
  premiumCard: {
    backgroundColor: theme.colors.surface,
    ...theme.shadows.xl,
    borderWidth: 1,
    borderColor: theme.colors.tertiary,
  },
  darkCard: {
    backgroundColor: theme.colors.surfaceDark,
    ...theme.shadows.lg,
  },
  outlineCard: {
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    ...theme.shadows.sm,
  },
  
  // Gradient Styles
  gradientContainer: {
    borderRadius: theme.borderRadius.xl,
    ...theme.shadows.lg,
  },
  gradient: {
    borderRadius: theme.borderRadius.xl,
  },
});

export default PremiumCard;
