import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { VideoView, useVideoPlayer } from 'expo-video';
import ExerciseDemonstration from '../components/ExerciseDemonstration';
import PremiumCard from '../components/PremiumCard';
import PremiumButton from '../components/PremiumButton';
import PremiumBadge from '../components/PremiumBadge';
import PremiumUpgradeModal from '../components/PremiumUpgradeModal';
import theme from '../theme/colors';

export default function ExerciseDetailScreen({ route, navigation }) {
  const { exercise } = route.params;
  const [videoError, setVideoError] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Create video player with proper configuration for expo-video
  const player = useVideoPlayer(exercise.videoUrl, (player) => {
    player.loop = false;
    player.muted = false;
    player.volume = 1.0;
    player.playbackRate = 1.0;
  });



  // Handle initial loading state
  useEffect(() => {
    // Simulate loading time for exercise data preparation
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second loading time

    return () => clearTimeout(loadingTimer);
  }, []);

  // Add debugging and error handling
  useEffect(() => {
    console.log('Video URL:', exercise.videoUrl);
    console.log('Player status:', player?.status);

    if (player) {
      // Listen for player status changes
      const subscription = player.addListener('statusChange', (status) => {
        console.log('Video status changed:', status);
        if (status.status === 'error') {
          console.error('Video error:', status.error);
          setVideoError(true);
        } else if (status.status === 'readyToPlay') {
          setVideoError(false);
          console.log('Video ready to play');
        }
      });

      return () => {
        subscription?.remove();
      };
    }
  }, [player, exercise.videoUrl]);

  const handleStartExercise = () => {
    if (exercise.difficulty === 'Advanced') {
      setShowUpgradeModal(true);
    } else {
      // TODO: Navigate to exercise session
      console.log('Starting exercise:', exercise.name);
    }
  };

  const handleUpgrade = () => {
    setShowUpgradeModal(false);
    // TODO: Handle premium upgrade
    console.log('User wants to upgrade to premium');
  };

  // Show loading state while data is being prepared
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <PremiumCard variant="elevated" style={styles.loadingCard}>
          <ActivityIndicator
            size="large"
            color={theme.colors.primary}
            style={styles.loadingSpinner}
          />
          <Text style={styles.loadingText}>Loading Exercise Details...</Text>
          <Text style={styles.loadingSubtext}>Preparing your workout experience</Text>
        </PremiumCard>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* Premium Exercise Header */}
        <PremiumCard variant="premiumGradient" style={styles.headerSection}>
          <View style={styles.headerContent}>
            <Text style={styles.exerciseName}>{exercise.name}</Text>
            <Text style={styles.exerciseDescription}>{exercise.description}</Text>

            <View style={styles.exerciseMetaInfo}>
              <View style={styles.metaItem}>
                <Text style={styles.metaLabel}>Category</Text>
                <Text style={styles.metaValue}>{exercise.category}</Text>
              </View>
              <View style={styles.metaItem}>
                <Text style={styles.metaLabel}>Duration</Text>
                <Text style={styles.metaValue}>{exercise.duration}</Text>
              </View>
              <View style={styles.metaItem}>
                <Text style={styles.metaLabel}>Difficulty</Text>
                <PremiumBadge
                  text={exercise.difficulty}
                  variant={exercise.difficulty.toLowerCase()}
                  size="small"
                  style={styles.centeredBadge}
                />
              </View>
            </View>

            {exercise.difficulty === 'Advanced' && (
              <View style={styles.premiumFeatureIndicator}>
                <Text style={styles.premiumFeatureText}>✨ Premium Exercise</Text>
              </View>
            )}
          </View>
        </PremiumCard>

        {/* Exercise Demonstration */}
        <ExerciseDemonstration exercise={exercise} />

        {/* How to Perform Section */}
        <PremiumCard variant="elevated" style={styles.instructionsSection}>
          <Text style={styles.sectionTitle}>How to Perform This Exercise</Text>
          {exercise.instructions && exercise.instructions.map((instruction, index) => (
            <View key={index} style={styles.instructionItem}>
              <View style={styles.instructionNumberContainer}>
                <Text style={styles.instructionNumber}>{index + 1}</Text>
              </View>
              <Text style={styles.instructionText}>{instruction}</Text>
            </View>
          ))}
        </PremiumCard>

        {/* Tips Section */}
        {exercise.tips && exercise.tips.length > 0 && (
          <PremiumCard variant="elevated" style={styles.tipsSection}>
            <Text style={styles.sectionTitle}>💡 Form Tips & Safety</Text>
            {exercise.tips.map((tip, index) => (
              <View key={index} style={styles.tipItem}>
                <View style={styles.tipBulletContainer}>
                  <Text style={styles.tipBullet}>✓</Text>
                </View>
                <Text style={styles.tipText}>{tip}</Text>
              </View>
            ))}
          </PremiumCard>
        )}

        {/* Enhanced Muscle Groups Section */}
        <PremiumCard variant="elevated" style={styles.muscleGroupsSection}>
          <Text style={styles.sectionTitle}>🎯 Targeted Muscle Groups</Text>

          <View style={styles.muscleGroup}>
            <Text style={styles.muscleGroupTitle}>Primary Muscles</Text>
            <View style={styles.muscleList}>
              {exercise.primaryMuscles && exercise.primaryMuscles.map((muscle, index) => (
                <PremiumBadge
                  key={index}
                  text={muscle}
                  variant="primary"
                  size="medium"
                  style={styles.muscleTag}
                />
              ))}
            </View>
          </View>

          <View style={styles.muscleGroup}>
            <Text style={styles.muscleGroupTitle}>Secondary Muscles</Text>
            <View style={styles.muscleList}>
              {exercise.secondaryMuscles && exercise.secondaryMuscles.map((muscle, index) => (
                <PremiumBadge
                  key={index}
                  text={muscle}
                  variant="outline"
                  size="medium"
                  style={styles.secondaryMuscleTag}
                />
              ))}
            </View>
          </View>
        </PremiumCard>

        {/* Enhanced Video Player Section */}
        <PremiumCard variant="elevated" style={styles.videoSection}>
          <Text style={styles.sectionTitle}>🎥 Video Demonstration</Text>
          {exercise.videoUrl ? (
            <View style={styles.videoContainer}>
              {videoError ? (
                <View style={styles.videoErrorContainer}>
                  <Text style={styles.videoErrorText}>Unable to load video</Text>
                  <PremiumButton
                    title="Retry"
                    variant="secondary"
                    size="small"
                    onPress={() => {
                      setVideoError(false);
                      // Reload the video by replacing the source
                      player.replace(exercise.videoUrl);
                    }}
                  />
                </View>
              ) : (
                <View style={styles.videoWrapper}>
                  <VideoView
                    style={styles.video}
                    player={player}
                    allowsFullscreen={true}
                    allowsPictureInPicture={true}
                    nativeControls={true}
                    contentFit="contain"
                    startsPictureInPictureAutomatically={false}
                    showsTimecodes={true}
                    requiresLinearPlayback={false}
                  />
                  <View style={styles.videoBorder} />
                </View>
              )}
            </View>
          ) : (
            <View style={styles.videoPlaceholder}>
              <Text style={styles.videoPlaceholderText}>📹</Text>
              <Text style={styles.videoPlaceholderSubtext}>
                Premium video demonstration coming soon
              </Text>
            </View>
          )}
        </PremiumCard>

        {/* Premium Action Buttons */}
        <View style={styles.buttonSection}>
          <PremiumButton
            title="🚀 Start Exercise"
            variant="gradient"
            size="large"
            onPress={handleStartExercise}
            style={styles.startButton}
          />

          {exercise.difficulty === 'Advanced' && (
            <PremiumButton
              title="✨ Unlock Premium Features"
              variant="premiumGradient"
              size="medium"
              onPress={() => setShowUpgradeModal(true)}
              style={styles.premiumUpgradeButton}
            />
          )}

          <PremiumButton
            title="← Back to Exercises"
            variant="ghost"
            size="medium"
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          />
        </View>
      </View>

      {/* Premium Upgrade Modal */}
      <PremiumUpgradeModal
        visible={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
        onUpgrade={handleUpgrade}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    padding: theme.spacing.lg,
  },

  // Loading State Styles
  loadingContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.xl,
  },
  loadingCard: {
    padding: theme.spacing.xxxl,
    alignItems: 'center',
    minWidth: 280,
  },
  loadingSpinner: {
    marginBottom: theme.spacing.lg,
  },
  loadingText: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.textPrimary,
    textAlign: 'center',
    marginBottom: theme.spacing.sm,
    letterSpacing: theme.typography.letterSpacing.tight,
  },
  loadingSubtext: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    opacity: 0.8,
    lineHeight: theme.typography.fontSize.md * theme.typography.lineHeight.relaxed,
  },

  // Premium Header Section
  headerSection: {
    marginBottom: theme.spacing.lg,
  },
  headerContent: {
    alignItems: 'center',
  },
  exerciseName: {
    fontSize: theme.typography.fontSize.hero,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.textInverse,
    marginBottom: theme.spacing.sm,
    textAlign: 'center',
    letterSpacing: theme.typography.letterSpacing.tight,
  },
  exerciseDescription: {
    fontSize: theme.typography.fontSize.lg,
    color: theme.colors.textInverse,
    textAlign: 'center',
    marginBottom: theme.spacing.lg,
    opacity: 0.9,
    lineHeight: theme.typography.fontSize.lg * theme.typography.lineHeight.relaxed,
  },
  exerciseMetaInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: theme.spacing.md,
    paddingHorizontal: theme.spacing.sm,
  },
  metaItem: {
    alignItems: 'center',
    flex: 1,
    minWidth: 0, // Prevents flex items from overflowing
  },
  metaLabel: {
    fontSize: theme.typography.fontSize.xs,
    color: theme.colors.textInverse,
    fontWeight: theme.typography.fontWeight.medium,
    marginBottom: theme.spacing.xs,
    textTransform: 'uppercase',
    letterSpacing: theme.typography.letterSpacing.wider,
    opacity: 0.8,
    textAlign: 'center',
  },
  metaValue: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.textInverse,
    fontWeight: theme.typography.fontWeight.bold,
    textAlign: 'center',
  },
  centeredBadge: {
    alignSelf: 'center',
  },
  premiumFeatureIndicator: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.full,
    marginTop: theme.spacing.md,
  },
  premiumFeatureText: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textInverse,
    fontWeight: theme.typography.fontWeight.semibold,
    letterSpacing: theme.typography.letterSpacing.wide,
  },


  // Enhanced Content Sections
  instructionsSection: {
    marginBottom: theme.spacing.lg,
  },
  tipsSection: {
    marginBottom: theme.spacing.lg,
  },
  muscleGroupsSection: {
    marginBottom: theme.spacing.lg,
  },
  sectionTitle: {
    fontSize: theme.typography.fontSize.xxl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.lg,
    letterSpacing: theme.typography.letterSpacing.tight,
  },

  // Enhanced Instructions
  instructionItem: {
    flexDirection: 'row',
    marginBottom: theme.spacing.lg,
    alignItems: 'flex-start',
  },
  instructionNumberContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.lg, // Increased from md (16px) to lg (24px) for better text separation
    marginTop: 2,
    flexShrink: 0, // Prevent the circle from shrinking and overlapping text
    ...theme.shadows.sm,
  },
  instructionNumber: {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.textInverse,
  },
  instructionText: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.textSecondary,
    flex: 1,
    lineHeight: theme.typography.fontSize.md * theme.typography.lineHeight.relaxed,
  },

  // Enhanced Tips
  tipItem: {
    flexDirection: 'row',
    marginBottom: theme.spacing.lg,
    alignItems: 'flex-start',
  },
  tipBulletContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: theme.colors.success,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.lg, // Increased from md (16px) to lg (24px) for better text separation
    marginTop: 2,
    flexShrink: 0, // Prevent the circle from shrinking and overlapping text
  },
  tipBullet: {
    fontSize: theme.typography.fontSize.xs,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.textInverse,
  },
  tipText: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.textSecondary,
    flex: 1,
    lineHeight: theme.typography.fontSize.md * theme.typography.lineHeight.relaxed,
  },

  // Enhanced Muscle Groups
  muscleGroup: {
    marginBottom: theme.spacing.lg,
  },
  muscleGroupTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.md,
    letterSpacing: theme.typography.letterSpacing.tight,
  },
  muscleList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
  },
  muscleTag: {
    marginRight: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  secondaryMuscleTag: {
    marginRight: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  // Enhanced Video Section
  videoSection: {
    marginBottom: theme.spacing.lg,
  },
  videoContainer: {
    position: 'relative',
    borderRadius: theme.borderRadius.xl,
    backgroundColor: '#000',
    ...theme.shadows.lg,
  },
  videoWrapper: {
    position: 'relative',
    borderRadius: theme.borderRadius.xl,
    overflow: 'hidden',
  },
  video: {
    width: '100%',
    height: 240,
    backgroundColor: '#000',
    borderRadius: theme.borderRadius.xl,
  },
  videoBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: theme.borderRadius.xl,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    opacity: 0.2,
    pointerEvents: 'none', // Allow touches to pass through to video controls
  },



  videoErrorContainer: {
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.backgroundTertiary,
    borderRadius: theme.borderRadius.xl,
  },
  videoErrorText: {
    fontSize: theme.typography.fontSize.lg,
    color: theme.colors.error,
    marginBottom: theme.spacing.lg,
    fontWeight: theme.typography.fontWeight.semibold,
  },
  videoPlaceholder: {
    height: 240,
    backgroundColor: theme.colors.backgroundTertiary,
    borderRadius: theme.borderRadius.xl,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: theme.colors.borderDark,
    borderStyle: 'dashed',
  },
  videoPlaceholderText: {
    fontSize: theme.typography.fontSize.mega,
    marginBottom: theme.spacing.md,
    opacity: 0.6,
  },
  videoPlaceholderSubtext: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.textTertiary,
    textAlign: 'center',
    fontWeight: theme.typography.fontWeight.medium,
  },
  // Enhanced Button Section
  buttonSection: {
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xxxl,
    gap: theme.spacing.md,
  },
  startButton: {
    marginBottom: theme.spacing.md,
  },
  premiumUpgradeButton: {
    marginBottom: theme.spacing.md,
  },
  backButton: {
    marginTop: theme.spacing.sm,
  },
});
