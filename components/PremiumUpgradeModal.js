import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PremiumButton from './PremiumButton';
import PremiumCard from './PremiumCard';
import theme from '../theme/colors';

const PremiumUpgradeModal = ({ visible, onClose, onUpgrade }) => {
  const features = [
    {
      icon: '🎯',
      title: 'Advanced Exercises',
      description: 'Access to expert-level workouts and techniques'
    },
    {
      icon: '📊',
      title: 'Progress Tracking',
      description: 'Detailed analytics and performance insights'
    },
    {
      icon: '🏆',
      title: 'Achievement System',
      description: 'Unlock badges and celebrate milestones'
    },
    {
      icon: '📱',
      title: 'Offline Access',
      description: 'Download exercises for offline training'
    },
    {
      icon: '👨‍💼',
      title: 'Personal Trainer',
      description: 'AI-powered form correction and tips'
    },
    {
      icon: '🎵',
      title: 'Premium Content',
      description: 'Exclusive workouts and nutrition guides'
    }
  ];

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <LinearGradient
          colors={theme.colors.gradientPrimary}
          style={styles.headerGradient}
        >
          <View style={styles.header}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
            <Text style={styles.title}>✨ Upgrade to Premium</Text>
            <Text style={styles.subtitle}>Unlock your full potential</Text>
          </View>
        </LinearGradient>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.featuresSection}>
            {features.map((feature, index) => (
              <PremiumCard key={index} variant="elevated" style={styles.featureCard}>
                <View style={styles.featureContent}>
                  <Text style={styles.featureIcon}>{feature.icon}</Text>
                  <View style={styles.featureText}>
                    <Text style={styles.featureTitle}>{feature.title}</Text>
                    <Text style={styles.featureDescription}>{feature.description}</Text>
                  </View>
                </View>
              </PremiumCard>
            ))}
          </View>

          <PremiumCard variant="premiumGradient" style={styles.pricingCard}>
            <Text style={styles.pricingTitle}>Premium Plan</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>$9.99</Text>
              <Text style={styles.pricePeriod}>/month</Text>
            </View>
            <Text style={styles.pricingSubtitle}>Cancel anytime • 7-day free trial</Text>
          </PremiumCard>

          <View style={styles.buttonContainer}>
            <PremiumButton
              title="🚀 Start Free Trial"
              variant="premiumGradient"
              size="large"
              onPress={onUpgrade}
              style={styles.upgradeButton}
            />
            <PremiumButton
              title="Maybe Later"
              variant="ghost"
              size="medium"
              onPress={onClose}
              style={styles.laterButton}
            />
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  headerGradient: {
    paddingTop: theme.spacing.xxxl,
  },
  header: {
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.xl,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: theme.spacing.lg,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: theme.typography.fontSize.lg,
    color: theme.colors.textInverse,
    fontWeight: theme.typography.fontWeight.bold,
  },
  title: {
    fontSize: theme.typography.fontSize.hero,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.textInverse,
    textAlign: 'center',
    marginBottom: theme.spacing.sm,
    letterSpacing: theme.typography.letterSpacing.tight,
  },
  subtitle: {
    fontSize: theme.typography.fontSize.lg,
    color: theme.colors.textInverse,
    textAlign: 'center',
    opacity: 0.9,
  },
  content: {
    flex: 1,
    padding: theme.spacing.lg,
  },
  featuresSection: {
    marginBottom: theme.spacing.xl,
  },
  featureCard: {
    marginBottom: theme.spacing.md,
  },
  featureContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureIcon: {
    fontSize: theme.typography.fontSize.xxxl,
    marginRight: theme.spacing.lg,
  },
  featureText: {
    flex: 1,
  },
  featureTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.xs,
  },
  featureDescription: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.textSecondary,
    lineHeight: theme.typography.fontSize.md * theme.typography.lineHeight.relaxed,
  },
  pricingCard: {
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },
  pricingTitle: {
    fontSize: theme.typography.fontSize.xxl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.textInverse,
    marginBottom: theme.spacing.md,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: theme.spacing.sm,
  },
  price: {
    fontSize: theme.typography.fontSize.mega,
    fontWeight: theme.typography.fontWeight.black,
    color: theme.colors.textInverse,
  },
  pricePeriod: {
    fontSize: theme.typography.fontSize.lg,
    color: theme.colors.textInverse,
    opacity: 0.8,
    marginLeft: theme.spacing.xs,
  },
  pricingSubtitle: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.textInverse,
    opacity: 0.8,
  },
  buttonContainer: {
    gap: theme.spacing.md,
    paddingBottom: theme.spacing.xl,
  },
  upgradeButton: {
    marginBottom: theme.spacing.md,
  },
  laterButton: {
    marginTop: theme.spacing.sm,
  },
});

export default PremiumUpgradeModal;
