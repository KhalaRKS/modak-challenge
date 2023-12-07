import React from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {SafeAreaView} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
export const RootProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        {children}
      </ApplicationProvider>
    </GestureHandlerRootView>
  );
};
