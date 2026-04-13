import React, { useRef, useEffect } from 'react';
import { Animated, PanResponder, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PersistentTerminal = () => {
  // 1. Initialize position
  const pan = useRef(new Animated.ValueXY()).current;

  // 2. Load saved position on mount
  useEffect(() => {
    const loadPosition = async () => {
      const savedPos = await AsyncStorage.getItem('@terminal_pos');
      if (savedPos) {
        const { x, y } = JSON.parse(savedPos);
        pan.setValue({ x, y });
        pan.extractOffset(); // Set this as the new starting point
      }
    };
    loadPosition();
  }, []);

  // 3. Configure PanResponder
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [null, { dx: pan.x, dy: pan.y }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: async (e, gestureState) => {
        // Flatten the offset so the next drag starts from here
        pan.extractOffset();
        
        // SAVE the new position to AsyncStorage
        const currentPos = {
          x: (pan.x as any)._offset, 
          y: (pan.y as any)._offset 
        };
        await AsyncStorage.setItem('@terminal_pos', JSON.stringify(currentPos));
      },
    })
  ).current;

  return (
    <Animated.View
      style={[styles.box, { transform: pan.getTranslateTransform() }]}
      {...panResponder.panHandlers}
    />
  );
};

const styles = StyleSheet.create({
  box: {
    height: 150,
    width: '100%',
    backgroundColor: '#1a1a1a',
    borderTopWidth: 2,
    borderColor: '#00ff00',
  },
});
