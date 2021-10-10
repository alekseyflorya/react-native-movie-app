import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {Movie} from '../types';
import {posterURL} from '../constants';
import {getCustomDate} from '../utils';

interface Props {
  movie: Movie;
  width?: number | string;
  height?: number | string;
}

export const MovieCard = React.memo(
  ({movie, width = '100%', height = '100%'}: Props) => {
    const uriPath = `${posterURL}${movie.poster_path}`;

    const navigation = useNavigation<NativeStackNavigationProp<any, any>>();

    return (
      <Shadow distance={6} offset={[0, 3]} startColor={'rgba(0, 0, 0, 0.1)'}>
        <View style={[styles.container, {width: width, height: height}]}>
          <TouchableOpacity onPress={() => navigation.push('Detail', {movie})}>
            <Image
              resizeMode="cover"
              source={{
                uri: uriPath,
              }}
              style={{
                ...styles.image,
                width: width,
                height: height,
              }}
            />
            <View style={styles.titleWrapper}>
              <Text
                ellipsizeMode="tail"
                numberOfLines={2}
                style={styles.titleText}>
                {movie.title}
              </Text>
              <Text style={styles.dateText}>
                {getCustomDate(movie.release_date, 'year')}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Shadow>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    borderRadius: 15,
  },
  titleWrapper: {
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    width: 140,
    height: 70,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#ffffffe2',
    paddingHorizontal: 12,
    paddingVertical: 10,
    alignItems: 'flex-start',
  },
  titleText: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'HelveticaNeue-Bold',
  },
  dateText: {
    fontSize: 12,
    color: '#000',
    fontFamily: 'HelveticaNeue-Light',
  },
});
