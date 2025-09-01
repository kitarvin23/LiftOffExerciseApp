import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ExerciseListScreen from './screens/ExerciseListScreen';
import ExerciseDetailScreen from './screens/ExerciseDetailScreen';
import theme from './theme/colors';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ExerciseList"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.surface,
            borderBottomWidth: 0,
            shadowColor: theme.colors.shadow,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.12,
            shadowRadius: 8,
            elevation: 8,
          },
          headerTintColor: theme.colors.primary,
          headerTitleStyle: {
            fontWeight: theme.typography.fontWeight.bold,
            fontSize: theme.typography.fontSize.xl,
            color: theme.colors.textPrimary,
            letterSpacing: theme.typography.letterSpacing.tight,
          },
          headerBackTitleVisible: false,
          headerLeftContainerStyle: {
            paddingLeft: theme.spacing.lg,
          },
          headerRightContainerStyle: {
            paddingRight: theme.spacing.lg,
          },
          cardStyle: {
            backgroundColor: theme.colors.background,
          },
          // Enhanced transitions
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
                opacity: current.progress.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [0, 0.5, 1],
                }),
              },
            };
          },
        }}
      >
        <Stack.Screen
          name="ExerciseList"
          component={ExerciseListScreen}
          options={{
            title: 'Available Exercises',
            headerShown: false, // We'll use custom header in the screen
          }}
        />
        <Stack.Screen
          name="ExerciseDetail"
          component={ExerciseDetailScreen}
          options={({ route }) => ({
            title: route.params?.exercise?.name || 'Exercise Details',
            headerTitleStyle: {
              fontWeight: theme.typography.fontWeight.bold,
              fontSize: theme.typography.fontSize.lg,
              color: theme.colors.textPrimary,
              letterSpacing: theme.typography.letterSpacing.tight,
            },
            headerStyle: {
              backgroundColor: theme.colors.surface,
              borderBottomWidth: 0.5,
              borderBottomColor: theme.colors.borderLight,
              ...theme.shadows.md,
            },
          })}
        />
      </Stack.Navigator>
      <StatusBar style="dark" backgroundColor={theme.colors.surface} />
    </NavigationContainer>
  );
}
