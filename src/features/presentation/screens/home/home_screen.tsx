import {
  Divider,
  Icon,
  Spinner,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import React, {useMemo} from 'react';

import {View} from 'react-native';
import {
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {ArtworkWidget} from '../../components/artwork_widget/artwork_widget';
import {styles} from './home_styles';
import {homeViewModel} from './home_view_model';
import {useNavigation, StackActions} from '@react-navigation/native';
import {Artwork} from '../../../domain/entities/artwork';
import {Layout} from '../../layout/layout';
import {ROUTES} from '../../router/routes';
import { CenteredSpinner } from '../../components/app_components/centered_spinner/centered_spinner';
export const HomeScreen = () => {
  const {artworks, isLoading, getArtworks} = homeViewModel();
  const navigation = useNavigation();

  return (
    <Layout navigateText="GO FAVOURITES" route={ROUTES.FAVOURITE}>
      <FlatList
        removeClippedSubviews
        style={styles.list}
        data={artworks}
        numColumns={2}
        keyExtractor={(artwork, index) => `${artwork.image_id} + ${index}`}
        renderItem={({item, index}) => (
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.dispatch(StackActions.push(ROUTES.DETAILS, {item}))
            }>
            <ArtworkWidget item={item} index={index} />
          </TouchableWithoutFeedback>
        )}
        onEndReached={getArtworks}
        onEndReachedThreshold={2}
        ListFooterComponent={isLoading ? CenteredSpinner : <></>}
        initialNumToRender={3}
      />
    </Layout>
  );
};
