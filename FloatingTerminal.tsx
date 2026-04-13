import React, { useRef } from 'react';
import { View, Text, StyleSheet, Animated, PanResponder, ScrollView } from 'react-native';

const FloatingTerminal = ({ logs }: { logs: string[] }) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], { useNativeDriver: false }),
      onPanResponderRelease: () => pan.extractOffset(),
    })
  ).current;

  return (
    <Animated.View
      style={[styles.terminal, { transform: [{ translateX: pan.x }, { translateY: pan.y }] }]}
      {...panResponder.panHandlers}
    >
      <View style={styles.header}><Text style={styles.headerText}>Console Output</Text></View>
      <ScrollView style={styles.logArea}>
        {logs.map((log, i) => (
          <Text key={i} style={styles.logText}>{`> ${log}`}</Text>
        ))}
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  terminal: {
    position: 'absolute',
    bottom: 50,
    width: '90%',
    height: 200,
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
    elevation: 5,
  },
  header: { backgroundColor: '#333', padding: 5, borderTopLeftRadius: 8, borderTopRightRadius: 8 },
  headerText: { color: '#aaa', fontSize: 12, fontWeight: 'bold', textAlign: 'center' },
  logArea: { padding: 10 },
  logText: { color: '#00ff00', fontFamily: 'monospace', fontSize: 13, marginBottom: 4 },
});

export default FloatingTerminal;
