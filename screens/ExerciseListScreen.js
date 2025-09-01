import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import PremiumCard from '../components/PremiumCard';
import PremiumBadge from '../components/PremiumBadge';
import PremiumHeader from '../components/PremiumHeader';
import ProgressTracker from '../components/ProgressTracker';
import theme from '../theme/colors';

// Updated exercise data with the 5 specified exercises including video URLs and detailed information
const exercises = [
  {
    id: '1',
    name: 'Barbell Bench Press',
    category: 'Upper Body',
    duration: '3 sets x 8-12 reps',
    description: 'A compound exercise targeting chest, shoulders, and triceps',
    difficulty: 'Intermediate',
    videoUrl: 'https://lyftaweb.s3.us-east-2.amazonaws.com/GymvisualMP4/00251201.mp4',
    avatarImageUrl: require('../assets/exercises/avatars/barbel_bench_press.png'),
    imageUrl: require('../assets/exercises/full/barbel_bench_press.png'),
    primaryMuscles: ['Pectoralis Major Sternal Head'],
    secondaryMuscles: ['Deltoid Anterior', 'Pectoralis Major Clavicular Head', 'Triceps Brachii'],
    instructions: [
      'Grasp the barbell with your hands slightly wider than shoulder-width apart, palms facing towards your feet.',
      'Lift the barbell off the rack and hold it straight over your chest with your arms fully extended.',
      'Slowly lower the barbell to your chest, keeping your elbows at a 90-degree angle as you do so.',
      'Push the barbell back up to the starting position, fully extending your arms but not locking your elbows.'
    ],
    tips: [
      'Control the Bar: Avoid dropping the bar quickly and bouncing it off your chest.',
      'Avoid Overextending: Stop just short of full extension to keep tension on your muscles.'
    ]
  },
  {
    id: '2',
    name: 'Front and Back Lunges',
    category: 'Lower Body',
    duration: '3 sets x 10 reps each leg',
    description: 'Dynamic leg exercise for quads, glutes, and hamstrings',
    difficulty: 'Beginner',
    videoUrl: 'https://lyftaweb.s3.us-east-2.amazonaws.com/GymvisualMP4/03361201.mp4',
    avatarImageUrl: require('../assets/exercises/avatars/front_and_back_lunges.png'),
    imageUrl: require('../assets/exercises/full/front_and_back_lunges.png'),
    primaryMuscles: ['Gluteus Maximus', 'Quadriceps'],
    secondaryMuscles: ['Adductor Magnus', 'Soleus'],
    instructions: [
      'Take a step forward with your right foot, keeping your spine tall and your shoulders down.',
      'Lower your body until your right thigh is parallel to the floor and your right knee is directly above your right ankle.',
      'Push back up to the starting position, driving through your right heel.',
      'Repeat the same steps with your left foot forward, alternating legs for the desired number of repetitions.'
    ],
    tips: [
      'Keep Your Upper Body Straight: Avoid leaning forward or backward as this can cause strain.',
      'Engage Your Core: Your core muscles play a crucial role in maintaining balance during lunges.',
      'Don\'t Rush: Take your time with each lunge, ensuring proper form and control.'
    ]
  },
  {
    id: '3',
    name: 'Barbell Push and Press',
    category: 'Full Body',
    duration: '3 sets x 6-8 reps',
    description: 'Explosive movement combining push press and overhead press',
    difficulty: 'Advanced',
    videoUrl: 'https://lyftaweb.s3.us-east-2.amazonaws.com/GymvisualMP4/11651201.mp4', // Using bench press as placeholder
    avatarImageUrl: require('../assets/exercises/avatars/barbel_push_and_press.png'),
    imageUrl: require('../assets/exercises/full/barbel_push_and_press.png'),
    primaryMuscles: ['Deltoid Anterior'],
    secondaryMuscles: ['Deltoid Lateral', 'Pectoralis Major Clavicular Head', 'Serratus Anterior', 'Triceps Brachii'],
    instructions: [
      'Grip the barbell slightly wider than shoulder-width, palms facing forward.',
      'Lift the barbell off the rack and bring it to rest at your collarbone or upper chest.',
      'Brace your core and push the barbell straight up in a smooth motion until your arms are fully extended overhead.',
      'Hold this position for a second, then slowly lower the barbell back down to the starting position.'
    ],
    tips: [
      'Controlled Movement: Don\'t rush the exercise. Lift the barbell straight up in a controlled motion.',
      'Appropriate Weight: Choose a weight that is challenging but manageable.',
      'Breathe Properly: Breathe in as you lower the barbell and breathe out as you lift it.'
    ]
  },
  {
    id: '4',
    name: 'Overhead Shoulder Press',
    category: 'Upper Body',
    duration: '3 sets x 8-10 reps',
    description: 'Shoulder strengthening exercise for deltoids and triceps',
    difficulty: 'Intermediate',
    videoUrl: 'https://lyftaweb.s3.us-east-2.amazonaws.com/GymvisualMP4/12241201.mp4', // Using bench press as placeholder
    avatarImageUrl: require('../assets/exercises/avatars/overhead_shoulder_press.png'),
    imageUrl: require('../assets/exercises/full/overhead_shoulder_press.png'),
    primaryMuscles: ['Deltoid Anterior'],
    secondaryMuscles: ['Deltoid Lateral', 'Pectoralis Major Clavicular Head', 'Serratus Anterior', 'Triceps Brachii'],
    instructions: [
      'Grip the barbell slightly wider than shoulder-width, palms facing forward.',
      'Lift the barbell off the rack and bring it to rest at your collarbone or upper chest.',
      'Brace your core and push the barbell straight up in a smooth motion until your arms are fully extended overhead.',
      'Hold this position for a second, then slowly lower the barbell back down to the starting position.'
    ],
    tips: [
      'Controlled Movement: Don\'t rush the exercise. Lift the barbell straight up in a controlled motion.',
      'Appropriate Weight: Choose a weight that is challenging but manageable.',
      'Breathe Properly: Breathe in as you lower the barbell and breathe out as you lift it.'
    ]
  },
  {
    id: '5',
    name: 'Donkey Calf Raise',
    category: 'Lower Body',
    duration: '3 sets x 15-20 reps',
    description: 'Isolated calf exercise for gastrocnemius and soleus',
    difficulty: 'Beginner',
    videoUrl: 'https://lyftaweb.s3.us-east-2.amazonaws.com/GymvisualMP4/06051201.mp4',
    avatarImageUrl: require('../assets/exercises/avatars/donkey_calf_raise.png'),
    imageUrl: require('../assets/exercises/full/donkey_calf_raise.png'),
    primaryMuscles: ['Gastrocnemius'],
    secondaryMuscles: ['Soleus'],
    instructions: [
      'Position your feet shoulder-width apart, with your toes pointing straight ahead or slightly outward.',
      'Slowly raise your heels off the ground, pushing up onto your toes while keeping your core engaged.',
      'Hold the position at the top for a moment, squeezing your calf muscles.',
      'Slowly lower your heels back down to the ground, returning to the starting position.'
    ],
    tips: [
      'Full Range of Motion: Rise up on your toes as high as possible and lower your heels below the level of the step.',
      'Controlled Movements: The movements should be slow and controlled, both when lifting and lowering.',
      'Weight Selection: Don\'t overload the barbell. Using too much weight can compromise your form.'
    ]
  },
];

export default function ExerciseListScreen({ navigation }) {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (exerciseId) => {
    setImageErrors(prev => ({ ...prev, [exerciseId]: true }));
  };

  const renderExerciseItem = ({ item, index }) => (
    <PremiumCard
      variant="elevated"
      onPress={() => navigation.navigate('ExerciseDetail', { exercise: item })}
      style={[styles.exerciseItem, { marginTop: index === 0 ? 0 : theme.spacing.md }]}
    >
      <View style={styles.exerciseContent}>
        {/* Exercise Avatar/Thumbnail with Premium Styling */}
        <View style={styles.imageContainer}>
          {imageErrors[item.id] ? (
            <View style={[styles.exerciseImage, styles.imageFallback]}>
              <Text style={styles.imageFallbackText}>💪</Text>
            </View>
          ) : (
            <View style={styles.imageWrapper}>
              <Image
                style={styles.exerciseImage}
                source={item.avatarImageUrl}
                placeholder={null}
                contentFit="cover"
                onError={() => handleImageError(item.id)}
              />
              <LinearGradient
                colors={['transparent', 'rgba(26, 54, 93, 0.1)']}
                style={styles.imageOverlay}
              />
            </View>
          )}
        </View>

        {/* Exercise Information with Enhanced Typography */}
        <View style={styles.exerciseInfo}>
          <Text style={styles.exerciseName}>{item.name}</Text>
          <View style={styles.categoryRow}>
            <Text style={styles.exerciseCategory}>{item.category}</Text>
            <View style={styles.categoryDot} />
            <Text style={styles.exerciseDuration} numberOfLines={1} ellipsizeMode="tail">{item.duration}</Text>
          </View>

          {/* Premium Difficulty Badge */}
          <View style={styles.difficultyContainer}>
            <PremiumBadge
              text={item.difficulty}
              variant={item.difficulty.toLowerCase()}
              size="small"
            />
            {item.difficulty === 'Advanced' && (
              <View style={styles.premiumIndicator}>
                <Text style={styles.premiumIndicatorText}>✨</Text>
              </View>
            )}
          </View>
        </View>

        {/* Enhanced Arrow Indicator */}
        <View style={styles.arrowContainer}>
          <View style={styles.arrowCircle}>
            <Text style={styles.arrow}>›</Text>
          </View>
        </View>
      </View>
    </PremiumCard>
  );

  return (
    <View style={styles.container}>
      {/* Premium Header with Gradient */}
      <PremiumHeader
        title="Available Exercises"
        subtitle={`${exercises.length} premium workouts`}
        variant="gradient"
        rightAction={
          <TouchableOpacity style={styles.premiumButton}>
            <Text style={styles.premiumButtonText}>✨ PRO</Text>
          </TouchableOpacity>
        }
      />

      {/* Premium Progress Tracker */}
      <View style={styles.progressSection}>
        <ProgressTracker
          completedExercises={2}
          totalExercises={exercises.length}
          weeklyGoal={3}
          currentStreak={1}
        />
      </View>

      <FlatList
        data={exercises}
        renderItem={renderExerciseItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  // Premium Button in Header
  premiumButton: {
    backgroundColor: theme.colors.tertiary,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.full,
    ...theme.shadows.sm,
  },
  premiumButtonText: {
    fontSize: theme.typography.fontSize.xs,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.textInverse,
    letterSpacing: theme.typography.letterSpacing.wide,
  },

  // Progress Section
  progressSection: {
    marginHorizontal: theme.spacing.lg,
    marginTop: -theme.spacing.lg,
    marginBottom: theme.spacing.lg,
  },

  // List Styles
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.xxxl,
  },

  // Exercise Item Styles
  exerciseItem: {
    borderRadius: theme.borderRadius.xl,
  },
  exerciseContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0, // Padding handled by PremiumCard
  },

  // Enhanced Image Styles
  imageContainer: {
    marginRight: theme.spacing.lg,
  },
  imageWrapper: {
    position: 'relative',
    borderRadius: theme.borderRadius.xl,
    overflow: 'hidden',
  },
  exerciseImage: {
    width: 72,
    height: 72,
    borderRadius: theme.borderRadius.xl,
    backgroundColor: theme.colors.backgroundTertiary,
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: theme.borderRadius.xl,
  },
  imageFallback: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.backgroundTertiary,
    width: 72,
    height: 72,
    borderRadius: theme.borderRadius.xl,
  },
  imageFallbackText: {
    fontSize: theme.typography.fontSize.xxxl,
    color: theme.colors.textTertiary,
  },

  // Enhanced Exercise Info
  exerciseInfo: {
    flex: 1,
    paddingRight: theme.spacing.xl, // Increased from md (16px) to xl (32px) to prevent text overlap with arrow
    minWidth: 0, // Ensures flex child can shrink properly for text truncation
  },
  exerciseName: {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.xs,
    lineHeight: theme.typography.fontSize.xl * theme.typography.lineHeight.snug,
    letterSpacing: theme.typography.letterSpacing.tight,
    numberOfLines: 1, // Ensure single line to prevent vertical overflow
  },
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
    flex: 1, // Allow the row to take available space
    minWidth: 0, // Enable text truncation in flex children
  },
  exerciseCategory: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
    fontWeight: theme.typography.fontWeight.medium,
    textTransform: 'uppercase',
    letterSpacing: theme.typography.letterSpacing.wide,
    flexShrink: 0, // Prevent category text from shrinking
  },
  categoryDot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: theme.colors.textLight,
    marginHorizontal: theme.spacing.md, // Increased from sm (8px) to md (16px) for better spacing
    flexShrink: 0, // Prevent dot from shrinking
  },
  exerciseDuration: {
    fontSize: theme.typography.fontSize.xs,
    color: theme.colors.primaryAccent,
    fontWeight: theme.typography.fontWeight.semibold,
    flex: 1, // Allow duration text to take available space
    textAlign: 'left', // Ensure text starts from left
  },

  // Enhanced Difficulty Container
  difficultyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap', // Allow wrapping if content is too wide
    gap: theme.spacing.sm, // Add consistent gap between badge and premium indicator
  },
  premiumIndicator: {
    backgroundColor: theme.colors.tertiary,
    borderRadius: theme.borderRadius.full,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0, // Prevent indicator from shrinking
    // Removed marginLeft since we're using gap in parent container
  },
  premiumIndicatorText: {
    fontSize: theme.typography.fontSize.xs,
  },

  // Enhanced Arrow
  arrowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: theme.spacing.md, // Add left margin to create separation from text content
    flexShrink: 0, // Prevent arrow container from shrinking
  },
  arrowCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: theme.colors.backgroundTertiary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.borderLight,
  },
  arrow: {
    fontSize: theme.typography.fontSize.lg,
    color: theme.colors.primary,
    fontWeight: theme.typography.fontWeight.medium,
    marginLeft: 2, // Optical alignment
  },
});
