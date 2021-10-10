import React from 'react';
import {
  SafeAreaView,
  View,
  ActivityIndicator,
  Platform,
  StyleSheet,
} from 'react-native';

export const Loading = () => {
  const size = Platform.OS === 'ios' ? 'large' : 50;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ActivityIndicator size={size} color={'#F27E00'} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
