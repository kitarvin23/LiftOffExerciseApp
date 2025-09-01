/**
 * Utility functions for handling exercise demonstration assets
 */

// Static imports for all demonstration images
const DEMONSTRATION_IMAGES = {
  'barbell_bench_press_start_pos': require('../assets/exercises/exercise_demonstration/barbell_bench_press_start_pos.png'),
  'barbell_bench_press_end_pos': require('../assets/exercises/exercise_demonstration/barbell_bench_press_end_pos.png'),
  'front_and_back_lunges_start_pos': require('../assets/exercises/exercise_demonstration/front_and_back_lunges_start_pos.png'),
  'front_and_back_lunges_mid_pos': require('../assets/exercises/exercise_demonstration/front_and_back_lunges_mid_pos.png'),
  'front_and_back_lunges_end_pos': require('../assets/exercises/exercise_demonstration/front_and_back_lunges_end_pos.png'),
  'barbell_push_and_press_start_pos': require('../assets/exercises/exercise_demonstration/barbell_push_and_press_start_pos.png'),
  'barbell_push_and_press_mid_pos': require('../assets/exercises/exercise_demonstration/barbell_push_and_press_mid_pos.png'),
  'barbell_push_and_press_end_pos': require('../assets/exercises/exercise_demonstration/barbell_push_and_press_end_pos.png'),
  'overhead_shoulder_press_start_pos': require('../assets/exercises/exercise_demonstration/overhead_shoulder_press_start_pos.png'),
  'overhead_shoulder_press_end_pos': require('../assets/exercises/exercise_demonstration/overhead_shoulder_press_end_pos.png'),
  'donkey_calf_raise_start_pos': require('../assets/exercises/exercise_demonstration/donkey_calf_raise_start_pos.png'),
  'donkey_calf_raise_end_pos': require('../assets/exercises/exercise_demonstration/donkey_calf_raise_end_pos.png'),
};

// Map exercise names to their asset file prefixes
const EXERCISE_NAME_TO_ASSET_MAP = {
  'Barbell Bench Press': 'barbell_bench_press',
  'Front and Back Lunges': 'front_and_back_lunges',
  'Barbell Push and Press': 'barbell_push_and_press',
  'Overhead Shoulder Press': 'overhead_shoulder_press',
  'Donkey Calf Raise': 'donkey_calf_raise',
};

// Define available positions for each exercise
const EXERCISE_POSITIONS = {
  'barbell_bench_press': ['start_pos', 'end_pos'],
  'front_and_back_lunges': ['start_pos', 'mid_pos', 'end_pos'],
  'barbell_push_and_press': ['start_pos', 'mid_pos', 'end_pos'],
  'overhead_shoulder_press': ['start_pos', 'end_pos'],
  'donkey_calf_raise': ['start_pos', 'end_pos'],
};

// Position labels for display
const POSITION_LABELS = {
  'start_pos': 'Starting Position',
  'mid_pos': 'Mid Movement',
  'end_pos': 'End Position',
};

/**
 * Get the asset prefix for an exercise name
 * @param {string} exerciseName - The display name of the exercise
 * @returns {string|null} - The asset prefix or null if not found
 */
export const getExerciseAssetPrefix = (exerciseName) => {
  return EXERCISE_NAME_TO_ASSET_MAP[exerciseName] || null;
};

/**
 * Get available demonstration positions for an exercise
 * @param {string} exerciseName - The display name of the exercise
 * @returns {Array} - Array of available position objects
 */
export const getExerciseDemonstrationPositions = (exerciseName) => {
  const assetPrefix = getExerciseAssetPrefix(exerciseName);
  
  if (!assetPrefix || !EXERCISE_POSITIONS[assetPrefix]) {
    return [];
  }

  return EXERCISE_POSITIONS[assetPrefix].map(position => ({
    id: position,
    position: position,
    label: POSITION_LABELS[position],
    assetPath: `../assets/exercises/exercise_demonstration/${assetPrefix}_${position}.png`,
  }));
};

/**
 * Get demonstration image source for a specific exercise and position
 * @param {string} exerciseName - The display name of the exercise
 * @param {string} position - The position (start_pos, mid_pos, end_pos)
 * @returns {object|null} - Image source object or null if not available
 */
export const getDemonstrationImageSource = (exerciseName, position) => {
  const assetPrefix = getExerciseAssetPrefix(exerciseName);

  if (!assetPrefix || !EXERCISE_POSITIONS[assetPrefix]?.includes(position)) {
    return null;
  }

  const imageKey = `${assetPrefix}_${position}`;
  return DEMONSTRATION_IMAGES[imageKey] || null;
};

/**
 * Check if an exercise has demonstration assets available
 * @param {string} exerciseName - The display name of the exercise
 * @returns {boolean} - True if demonstration assets are available
 */
export const hasExerciseDemonstration = (exerciseName) => {
  const assetPrefix = getExerciseAssetPrefix(exerciseName);
  return assetPrefix && EXERCISE_POSITIONS[assetPrefix] && EXERCISE_POSITIONS[assetPrefix].length > 0;
};

/**
 * Get all demonstration images for an exercise with fallback handling
 * @param {string} exerciseName - The display name of the exercise
 * @param {object} fallbackImage - Fallback image source to use if no demonstrations available
 * @returns {Array} - Array of demonstration image objects
 */
export const getExerciseDemonstrationImages = (exerciseName, fallbackImage = null) => {
  const positions = getExerciseDemonstrationPositions(exerciseName);
  
  if (positions.length === 0) {
    // No demonstration assets available, return fallback or empty array
    if (fallbackImage) {
      return [{
        id: 'fallback',
        source: fallbackImage,
        position: 'fallback',
        label: 'Exercise Image',
        isFallback: true,
      }];
    }
    return [];
  }

  return positions.map(pos => ({
    id: pos.id,
    source: getDemonstrationImageSource(exerciseName, pos.position),
    position: pos.position,
    label: pos.label,
    isFallback: false,
  })).filter(img => img.source !== null); // Filter out failed loads
};
