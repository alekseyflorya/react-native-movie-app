import React from 'react';
import {View, FlatList} from 'react-native';
import {Movie} from '../types';
import {SimilarMovieCard} from './SimilarMovieCard';

type Props = {
  data: Movie[];
};

export const HorizontalSlider = React.memo(({data}: Props) => {
  const _renderItem = (item: Movie) => <SimilarMovieCard movie={item} />;

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => _renderItem(item)}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
});
