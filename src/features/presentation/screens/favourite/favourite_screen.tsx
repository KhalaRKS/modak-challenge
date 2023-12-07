import {Icon, Button, IconElement} from '@ui-kitten/components';
import React from 'react';
import {View} from 'react-native';
import {FlatList, TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {EmptyState} from '../../components/app_components/empty_state/empty_state';
import {ArtworkWidget} from '../../components/artwork_widget/artwork_widget';
import {Layout} from '../../layout/layout';
import {useRouter} from '../../hooks/useRouter';
import {ROUTES} from '../../router/routes';
import {favouriteViewModel} from './favourite_view_model';
import {styles} from './favourite_styles';
export const FavouriteScreen = () => {
  const {favouritesArtworks, cleanAllFavouritesArtworks} = favouriteViewModel();
  const {handlePush} = useRouter();

  const TrashIcon = (props): IconElement => (
    <Icon {...props} name="trash-outline" />
  );

  return (
    <Layout navigateText="GO HOME" route={ROUTES.HOME}>
      {favouritesArtworks.length ? (
        <>
          <View style={styles.buttonContainer}>
            <Button
              status="danger"
              style={styles.button}
              accessoryLeft={TrashIcon}
              onPress={cleanAllFavouritesArtworks}>
              CLEAR ALL FAVOURITES
            </Button>
          </View>
          <FlatList
            style={styles.list}
            data={favouritesArtworks}
            keyExtractor={(artwork, index) => `${artwork.image_id} + ${index}`}
            renderItem={({item, index}) => (
              <TouchableWithoutFeedback
                onPress={() => handlePush(ROUTES.DETAILS, {item})}>
                <ArtworkWidget item={item} index={index} fullWidth />
              </TouchableWithoutFeedback>
            )}
          />
        </>
      ) : (
        <EmptyState
          icon={'star'}
          title={'Oops!'}
          subtitle={'Something went wrong, try again!'}
          buttonText={"Let's pick some artworks!"}
        />
      )}
    </Layout>
  );
};
