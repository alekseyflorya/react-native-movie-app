import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {Movie} from '../types';
import {posterURL} from '../constants';

interface Props {
  movie: Movie;
}

const {width} = Dimensions.get('window');

export const SimilarMovieCard = React.memo(({movie}: Props) => {
  const uriPath = `${posterURL}${movie.backdrop_path}`;

  const navigation = useNavigation<NativeStackNavigationProp<any, any>>();

  return (
    <TouchableOpacity onPress={() => navigation.push('Detail', {movie})}>
      <View style={styles.container}>
        <Shadow distance={6} offset={[0, 3]} startColor={'rgba(0, 0, 0, 0.1)'}>
          <Image
            resizeMode="stretch"
            source={{
              uri: uriPath,
            }}
            style={styles.image}
          />
        </Shadow>
        <View style={styles.titleWrapper}>
          <Text ellipsizeMode="tail" numberOfLines={2} style={styles.titleText}>
            {movie.title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  image: {
    width: width - 48,
    minHeight: 200,
    borderRadius: 17,
  },
  titleWrapper: {
    width: width - 48,
    paddingVertical: 16,
    alignItems: 'flex-start',
  },
  titleText: {
    fontSize: 16,
    color: '#FFFFFFE3',
    fontFamily: 'HelveticaNeue-Bold',
    textTransform: 'uppercase',
  },
});
