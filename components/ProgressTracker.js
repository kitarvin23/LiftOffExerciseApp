import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PremiumCard from './PremiumCard';
import theme from '../theme/colors';

const ProgressTracker = ({ 
  completedExercises = 0,
  totalExercises = 5,
  weeklyGoal = 3,
  currentStreak = 0,
  style 
}) => {
  const progressPercentage = (completedExercises / totalExercises) * 100;
  const weeklyProgress = Math.min((completedExercises / weeklyGoal) * 100, 100);

  return (
    <PremiumCard variant="elevated" style={[styles.container, style]}>
      <Text style={styles.title}>🏆 Your Progress</Text>
      
      {/* Main Progress Circle */}
      <View style={styles.progressSection}>
        <View style={styles.progressCircle}>
          <LinearGradient
            colors={theme.colors.gradientSuccess}
            style={styles.progressGradient}
          >
            <View style={styles.progressInner}>
              <Text style={styles.progressPercentage}>{Math.round(progressPercentage)}%</Text>
              <Text style={styles.progressLabel}>Complete</Text>
            </View>
          </LinearGradient>
        </View>
        
        <View style={styles.progressStats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{completedExercises}</Text>
            <Text style={styles.statLabel}>Completed</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{currentStreak}</Text>
            <Text style={styles.statLabel}>Day Streak</Text>
          </View>
        </View>
      </View>

      {/* Weekly Goal Progress */}
      <View style={styles.weeklySection}>
        <Text style={styles.weeklyTitle}>Weekly Goal</Text>
        <View style={styles.progressBar}>
          <View style={styles.progressBarBackground}>
            <LinearGradient
              colors={theme.colors.gradientSecondary}
              style={[styles.progressBarFill, { width: `${weeklyProgress}%` }]}
            />
          </View>
          <Text style={styles.weeklyText}>
            {completedExercises} of {weeklyGoal} exercises this week
          </Text>
        </View>
      </View>

      {/* Achievement Badges */}
      <View style={styles.achievementSection}>
        <Text style={styles.achievementTitle}>Recent Achievements</Text>
        <View style={styles.achievementList}>
          {currentStreak >= 3 && (
            <View style={styles.achievementBadge}>
              <Text style={styles.achievementIcon}>🔥</Text>
              <Text style={styles.achievementText}>3-Day Streak</Text>
            </View>
          )}
          {completedExercises >= 1 && (
            <View style={styles.achievementBadge}>
              <Text style={styles.achievementIcon}>💪</Text>
              <Text style={styles.achievementText}>First Exercise</Text>
            </View>
          )}
          {progressPercentage >= 50 && (
            <View style={styles.achievementBadge}>
              <Text style={styles.achievementIcon}>⭐</Text>
              <Text style={styles.achievementText}>Halfway There</Text>
            </View>
          )}
        </View>
      </View>
    </PremiumCard>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.lg,
  },
  title: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.lg,
    textAlign: 'center',
  },
  
  // Progress Section
  progressSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },
  progressCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: theme.spacing.xl, // Increased from lg (24px) to xl (32px) for better separation from stats
    flexShrink: 0, // Prevent the circle from shrinking and overlapping adjacent content
  },
  progressGradient: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressInner: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: theme.colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressPercentage: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.primary,
  },
  progressLabel: {
    fontSize: theme.typography.fontSize.xs,
    color: theme.colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: theme.typography.letterSpacing.wide,
  },
  progressStats: {
    flex: 1,
  },
  statItem: {
    marginBottom: theme.spacing.md,
  },
  statNumber: {
    fontSize: theme.typography.fontSize.xxl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.primary,
  },
  statLabel: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: theme.typography.letterSpacing.wide,
  },
  
  // Weekly Progress
  weeklySection: {
    marginBottom: theme.spacing.xl,
  },
  weeklyTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.md,
  },
  progressBar: {
    marginBottom: theme.spacing.sm,
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: theme.colors.backgroundTertiary,
    borderRadius: theme.borderRadius.full,
    overflow: 'hidden',
    marginBottom: theme.spacing.sm,
  },
  progressBarFill: {
    height: '100%',
    borderRadius: theme.borderRadius.full,
  },
  weeklyText: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  
  // Achievements
  achievementSection: {
    marginBottom: theme.spacing.lg,
  },
  achievementTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.md,
  },
  achievementList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
  },
  achievementBadge: {
    backgroundColor: theme.colors.tertiary,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.full,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.xs, // Add bottom margin to prevent vertical overlap
    ...theme.shadows.sm,
  },
  achievementIcon: {
    fontSize: theme.typography.fontSize.md,
    marginRight: theme.spacing.sm, // Increased from xs (4px) to sm (8px) for better icon-text separation
    flexShrink: 0, // Prevent icon from shrinking and overlapping text
  },
  achievementText: {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.textInverse,
  },
});

export default ProgressTracker;
