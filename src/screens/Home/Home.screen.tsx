import React, {useEffect} from 'react';
import {FlatList, Text, View, StyleSheet, Platform} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchMovies} from '../../features/moviesSlice';
import {RootState} from '../../store';
import {Movie} from '../../types';
import {MovieCard} from '../../components/MovieCard';
import {apiKey} from '../../constants';
import {Loading} from '../../components/Loading';

export const HomeScreen = React.memo(() => {
  const dispatch = useAppDispatch();

  const {movies, loading} = useAppSelector((state: RootState) => state.movies);

  const _renderItem = (item: Movie) => (
    <MovieCard movie={item} width={140} height={200} />
  );

  useEffect(() => {
    dispatch(
      fetchMovies({
        api_key: apiKey,
        language: 'en-US',
        sort_by: 'popularity.desc',
        include_adult: false,
        include_video: false,
        page: 1,
      }),
    );
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>MOVIES</Text>
      <View style={styles.flatListContainer}>
        <FlatList
          data={movies}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => _renderItem(item)}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.list}
          style={styles.flatList}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 32,
  },
  headerTitle: {
    color: '#000',
    fontSize: 24,
    fontFamily: 'Helvetica Neue',
    fontWeight: '700',
  },
  flatListContainer: {
    marginTop: 30,
    marginBottom: Platform.OS === 'ios' ? 50 : 80,
  },
  flatList: {
    marginHorizontal: -32,
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 32,
  },
});
