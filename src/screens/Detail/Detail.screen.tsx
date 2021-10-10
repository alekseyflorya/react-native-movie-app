import React, {useEffect} from 'react';
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import {apiKey, posterURL} from '../../constants';
import {fetchSimilarMovies} from '../../features/moviesSlice';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {RootState} from '../../store';
import {Loading} from '../../components/Loading';
import {getCustomDate} from '../../utils';
import {HorizontalSlider} from '../../components/HorizontalSlider';
import {Shadow} from 'react-native-shadow-2';
import ArrowLeftIcon from '../../components/ArrowLeftIcon';

interface Props {
  navigation: any;
  route: any;
}

const {width, height} = Dimensions.get('window');

export const DetailScreen = React.memo(({navigation, route}: Props) => {
  const dispatch = useAppDispatch();
  const {movie} = route.params;
  const rate = Math.round(movie?.vote_average * 10) || 0;
  const uriPath = `${posterURL}${movie?.backdrop_path}`;

  const {similar, loading} = useAppSelector((state: RootState) => state.movies);

  const goBack = () => navigation.goBack();

  useEffect(() => {
    dispatch(
      fetchSimilarMovies({
        id: movie.id,
        params: {
          api_key: apiKey,
          language: 'en-US',
          page: 1,
        },
      }),
    );
  }, [dispatch, movie.id]);

  if (loading) {
    return <Loading />;
  }
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="stretch"
        source={{
          uri: uriPath,
        }}
      />
      <View style={styles.contentWrapper}>
        <Text style={styles.secondaryText}>
          {getCustomDate(movie.release_date, 'year')}
        </Text>
        <Text style={styles.titleText}>{movie.title}</Text>
        <Text style={styles.labelText}>OVERVIEW:</Text>
        <Text
          ellipsizeMode="tail"
          numberOfLines={4}
          style={styles.secondaryText}>
          {movie.overview}
        </Text>
        <Text style={styles.labelText}>SIMILAR MOVIES:</Text>
        <HorizontalSlider data={similar} />
        <Shadow
          distance={6}
          offset={[0, 3]}
          startColor={'rgba(0, 0, 0, 0.1)'}
          containerViewStyle={styles.shadowContainer}
          viewStyle={styles.rateContainer}>
          <Text style={styles.rateText}>{rate}%</Text>
        </Shadow>
      </View>
      <TouchableOpacity onPress={goBack} style={styles.backBtn}>
        <ArrowLeftIcon />
      </TouchableOpacity>
    </ScrollView>
  );
});

const text = {
  fontFamily: 'HelveticaNeue-Bold',
  color: '#FFFFFFE3',
  fontSize: 18,
};
const styles = StyleSheet.create({
  container: {
    width,
    height,
    position: 'relative',
    backgroundColor: '#1C1C1C',
  },
  image: {
    width: width,
    minHeight: 240,
  },
  contentWrapper: {
    position: 'relative',
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginBottom: 50,
  },
  secondaryText: {
    ...text,
    fontFamily: 'HelveticaNeue-Light',
  },
  titleText: {
    ...text,
    fontSize: 24,
    marginVertical: 6,
  },
  labelText: {
    ...text,
    marginVertical: 30,
  },
  shadowContainer: {
    position: 'absolute',
    top: -40,
    right: 30,
  },
  rateContainer: {
    backgroundColor: '#484848',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rateText: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 24,
    color: '#FFF',
  },
  backBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.68)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 24,
    left: 24,
  },
});
