import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../theme/colors';

const PremiumHeader = ({ 
  title,
  subtitle,
  variant = 'default',
  leftAction,
  rightAction,
  style,
  showPremiumBadge = false,
  ...props 
}) => {
  const renderContent = () => (
    <View style={styles.headerContent}>
      {/* Left Action */}
      {leftAction && (
        <View style={styles.leftAction}>
          {leftAction}
        </View>
      )}
      
      {/* Title Section */}
      <View style={styles.titleSection}>
        <Text style={[styles.title, styles[`${variant}Title`]]}>
          {title}
        </Text>
        {subtitle && (
          <Text style={[styles.subtitle, styles[`${variant}Subtitle`]]}>
            {subtitle}
          </Text>
        )}
        {showPremiumBadge && (
          <View style={styles.premiumBadge}>
            <Text style={styles.premiumBadgeText}>✨ PREMIUM</Text>
          </View>
        )}
      </View>
      
      {/* Right Action */}
      {rightAction && (
        <View style={styles.rightAction}>
          {rightAction}
        </View>
      )}
    </View>
  );

  if (variant === 'gradient') {
    return (
      <SafeAreaView style={[styles.container, style]} edges={['top']} {...props}>
        <LinearGradient
          colors={theme.colors.gradientPrimary}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          {renderContent()}
        </LinearGradient>
      </SafeAreaView>
    );
  }

  if (variant === 'premiumGradient') {
    return (
      <SafeAreaView style={[styles.container, style]} edges={['top']} {...props}>
        <LinearGradient
          colors={theme.colors.gradientTertiary}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          {renderContent()}
        </LinearGradient>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView 
      style={[styles.container, styles[`${variant}Container`], style]} 
      edges={['top']} 
      {...props}
    >
      {renderContent()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.xl,
    minHeight: 80,
  },
  
  // Layout Sections
  leftAction: {
    minWidth: 40,
    alignItems: 'flex-start',
  },
  titleSection: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: theme.spacing.md,
  },
  rightAction: {
    minWidth: 40,
    alignItems: 'flex-end',
  },
  
  // Title Styles
  title: {
    fontSize: theme.typography.fontSize.xxxl,
    fontWeight: theme.typography.fontWeight.bold,
    textAlign: 'center',
    letterSpacing: theme.typography.letterSpacing.tight,
  },
  subtitle: {
    fontSize: theme.typography.fontSize.md,
    fontWeight: theme.typography.fontWeight.medium,
    textAlign: 'center',
    marginTop: theme.spacing.xs,
    opacity: 0.8,
  },
  
  // Premium Badge
  premiumBadge: {
    backgroundColor: theme.colors.tertiary,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.full,
    marginTop: theme.spacing.sm,
    ...theme.shadows.sm,
  },
  premiumBadgeText: {
    fontSize: theme.typography.fontSize.xs,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.textInverse,
    letterSpacing: theme.typography.letterSpacing.wide,
  },
  
  // Variant Containers
  defaultContainer: {
    backgroundColor: theme.colors.surface,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.borderLight,
    ...theme.shadows.sm,
  },
  premiumContainer: {
    backgroundColor: theme.colors.surface,
    ...theme.shadows.md,
  },
  darkContainer: {
    backgroundColor: theme.colors.surfaceDark,
    ...theme.shadows.lg,
  },
  
  // Variant Title Styles
  defaultTitle: {
    color: theme.colors.textPrimary,
  },
  premiumTitle: {
    color: theme.colors.textPrimary,
  },
  darkTitle: {
    color: theme.colors.textInverse,
  },
  gradientTitle: {
    color: theme.colors.textInverse,
  },
  premiumGradientTitle: {
    color: theme.colors.textInverse,
  },
  
  // Variant Subtitle Styles
  defaultSubtitle: {
    color: theme.colors.textSecondary,
  },
  premiumSubtitle: {
    color: theme.colors.textSecondary,
  },
  darkSubtitle: {
    color: theme.colors.textInverse,
  },
  gradientSubtitle: {
    color: theme.colors.textInverse,
  },
  premiumGradientSubtitle: {
    color: theme.colors.textInverse,
  },
  
  // Gradient Styles
  gradient: {
    borderRadius: 0,
  },
});

export default PremiumHeader;
