import React, {useState, useRef, useEffect} from 'react';
import {View, Animated, StyleSheet, TouchableOpacity, Text} from 'react-native';

const Breathing = () => {
  const breathingAnimation = useRef(new Animated.Value(0)).current;
  const [isBreathing, setIsBreathing] = useState(false);

  const startBreathingAnimation = () => {
    if (!isBreathing) {
      setIsBreathing(true);
      Animated.loop(
        Animated.sequence([
          Animated.timing(breathingAnimation, {
            toValue: 1,
            duration: 4000,
            useNativeDriver: false,
          }),
          Animated.timing(breathingAnimation, {
            toValue: 0,
            duration: 4000,
            useNativeDriver: false,
          }),
        ]),
      ).start(() => {
        setIsBreathing(false);
      });
    }
  };

  const stopBreathingAnimation = () => {
    breathingAnimation.stopAnimation();
    setIsBreathing(false);
  };

  const breathingScale = breathingAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 2],
  });

  return (
    <View style={styles.container}>
      <View style={styles.balloonContainer}>
        <Animated.View
          style={[
            styles.balloon,
            {
              transform: [{scale: breathingScale}],
            },
          ]}></Animated.View>
      </View>
      <TouchableOpacity
        onPress={isBreathing ? stopBreathingAnimation : startBreathingAnimation}
        style={[
          styles.button,
          {backgroundColor: isBreathing ? '#1E125F' : '#fff'},
        ]}>
        <Text
          style={[
            styles.buttonText,
            {color: isBreathing ? '#fff' : '#000'},
          ]}>
          {isBreathing ? 'Pare' : 'Iniciar'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 100,
  },
  button: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 100,
    minWidth: "40%",
    borderWidth: 4,
    borderColor: '#e1e1e1',
  },
  buttonText: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
  },
  balloonContainer: {
    width: 220,
    height: 220,
    borderRadius: 220,
    backgroundColor: '#372179',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 10,
    borderColor: '#403487',
  },
  balloon: {
    width: 100,
    height: 100,
    backgroundColor: '#6A5EAF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Breathing;
