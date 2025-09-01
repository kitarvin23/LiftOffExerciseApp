import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { getExerciseDemonstrationImages, hasExerciseDemonstration } from '../utils/exerciseDemonstrationUtils';
import theme from '../theme/colors';

const ExerciseDemonstration = ({ exercise, style }) => {
  const [imageErrors, setImageErrors] = useState({});
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Get demonstration images with fallback to the exercise's main image
  const demonstrationImages = getExerciseDemonstrationImages(exercise.name, exercise.imageUrl);
  
  const handleImageError = (imageId) => {
    setImageErrors(prev => ({ ...prev, [imageId]: true }));
  };

  const renderImageItem = ({ item, index }) => {
    const isSelected = index === selectedImageIndex;
    const hasError = imageErrors[item.id];

    return (
      <TouchableOpacity
        style={[styles.imageItem, isSelected && styles.selectedImageItem]}
        onPress={() => setSelectedImageIndex(index)}
        activeOpacity={0.7}
      >
        {hasError ? (
          <View style={[styles.exerciseImage, styles.imageFallback]}>
            <Text style={styles.imageFallbackText}>📷</Text>
          </View>
        ) : (
          <Image
            source={item.source}
            style={styles.exerciseImage}
            contentFit="contain"
            placeholder={null}
            onError={() => handleImageError(item.id)}
          />
        )}
        <Text style={[
          styles.imageLabel,
          isSelected && styles.selectedImageLabel,
          item.isFallback && styles.fallbackImageLabel
        ]}>
          {item.label}
        </Text>
        {isSelected && <View style={styles.selectionIndicator} />}
      </TouchableOpacity>
    );
  };

  const renderMainImage = () => {
    if (demonstrationImages.length === 0) {
      return (
        <View style={styles.noImagesContainer}>
          <Text style={styles.noImagesText}>📷</Text>
          <Text style={styles.noImagesSubtext}>
            Demonstration images will be available soon
          </Text>
        </View>
      );
    }

    const currentImage = demonstrationImages[selectedImageIndex];
    const hasError = imageErrors[currentImage.id];

    return (
      <View style={styles.mainImageContainer}>
        {hasError ? (
          <View style={[styles.mainImage, styles.imageFallback]}>
            <Text style={styles.mainImageFallbackText}>📷</Text>
          </View>
        ) : (
          <Image
            source={currentImage.source}
            style={styles.mainImage}
            contentFit="contain"
            placeholder={null}
            onError={() => handleImageError(currentImage.id)}
          />
        )}
        <View style={styles.mainImageLabelContainer}>
          <Text style={styles.mainImageLabel}>{currentImage.label}</Text>
          {!currentImage.isFallback && hasExerciseDemonstration(exercise.name) && (
            <Text style={styles.mainImageSubLabel}>
              {selectedImageIndex + 1} of {demonstrationImages.length}
            </Text>
          )}
        </View>
      </View>
    );
  };

  if (demonstrationImages.length === 0) {
    return (
      <View style={[styles.container, style]}>
        <Text style={styles.sectionTitle}>Exercise Demonstration</Text>
        {renderMainImage()}
      </View>
    );
  }

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.sectionTitle}>Exercise Demonstration</Text>
      
      {/* Main demonstration image */}
      {renderMainImage()}

      {/* Thumbnail navigation - only show if multiple images */}
      {demonstrationImages.length > 1 && (
        <View style={styles.thumbnailSection}>
          <FlatList
            data={demonstrationImages}
            renderItem={renderImageItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.thumbnailContainer}
            ItemSeparatorComponent={() => <View style={styles.thumbnailSeparator} />}
          />
        </View>
      )}

      {/* Information about demonstration */}
      {hasExerciseDemonstration(exercise.name) && (
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            💡 Tap the thumbnails below to view different exercise positions
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.spacing.md,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.md,
  },
  mainImageContainer: {
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  mainImage: {
    width: '100%',
    height: 250,
    borderRadius: theme.borderRadius.lg,
    backgroundColor: theme.colors.backgroundSecondary,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  mainImageLabelContainer: {
    marginTop: theme.spacing.sm,
    alignItems: 'center',
  },
  mainImageLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.colors.textPrimary,
    textAlign: 'center',
  },
  mainImageSubLabel: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginTop: 2,
  },
  thumbnailSection: {
    marginBottom: theme.spacing.sm,
  },
  thumbnailContainer: {
    paddingHorizontal: theme.spacing.xs,
  },
  thumbnailSeparator: {
    width: theme.spacing.sm,
  },
  imageItem: {
    alignItems: 'center',
    padding: theme.spacing.xs,
    borderRadius: theme.borderRadius.md,
    minWidth: 80,
    position: 'relative',
  },
  selectedImageItem: {
    backgroundColor: theme.colors.backgroundSecondary,
  },
  exerciseImage: {
    width: 60,
    height: 60,
    borderRadius: theme.borderRadius.md,
    backgroundColor: theme.colors.backgroundTertiary,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  imageLabel: {
    fontSize: 12,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginTop: theme.spacing.xs,
    lineHeight: 14,
  },
  selectedImageLabel: {
    color: theme.colors.primary,
    fontWeight: '500',
  },
  fallbackImageLabel: {
    fontStyle: 'italic',
  },
  selectionIndicator: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    marginLeft: -2,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: theme.colors.primary,
  },
  imageFallback: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.backgroundTertiary,
  },
  imageFallbackText: {
    fontSize: 24,
    opacity: 0.5,
  },
  mainImageFallbackText: {
    fontSize: 48,
    opacity: 0.3,
  },
  noImagesContainer: {
    alignItems: 'center',
    padding: theme.spacing.xl,
    backgroundColor: theme.colors.backgroundSecondary,
    borderRadius: theme.borderRadius.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderStyle: 'dashed',
  },
  noImagesText: {
    fontSize: 48,
    opacity: 0.3,
    marginBottom: theme.spacing.sm,
  },
  noImagesSubtext: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  infoContainer: {
    backgroundColor: theme.colors.backgroundSecondary,
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
    marginTop: theme.spacing.xs,
  },
  infoText: {
    fontSize: 12,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    lineHeight: 16,
  },
});

export default ExerciseDemonstration;
