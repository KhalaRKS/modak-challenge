import { Icon} from '@ui-kitten/components';
import {TouchableWithoutFeedback} from '@ui-kitten/components/devsupport';
import React from 'react';
import Animated from 'react-native-reanimated';
import {Artwork} from '../../../domain/entities/artwork';
import {ArtworkInformation} from '../../components/artwork_information/artwork_information';
import {Layout} from '../../layout/layout';
import {styles} from './details_styles';
import {detailsViewModel} from './details_view_model';

export const DetailsScreen = ({route}) => {
  const {item}: {item: Artwork} = route.params;
  const {isFavourite, addArtworkToFavourites} = detailsViewModel({id: item.id});

  return (
    <Layout navigateText={'GO BACK'}>
      <Animated.Text sharedTransitionTag={item.title} style={styles.title}>
      {item.title.length > 50 ? `${item.title.substring(0,50)}...` :  item.title}
      </Animated.Text>
      <Animated.Image
        style={styles.image}
        resizeMode="contain"
        // entering={FadeInRight.delay(350).duration(200)}
        source={{
          uri: `https://www.artic.edu/iiif/2/${item.image_id}/full/300,/0/default.jpg`,
        }}
        sharedTransitionTag={item.image_id}
      />
      <TouchableWithoutFeedback
        style={styles.starIcon}
        onPress={() => addArtworkToFavourites(item)}>
        <Icon fill={isFavourite ? '#FFC94D' : '#F2F8FF'} name="star" />
      </TouchableWithoutFeedback>
      <ArtworkInformation item={item} />
    </Layout>
  );
};
