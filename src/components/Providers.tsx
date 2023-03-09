import {View, Text} from 'react-native';
import React, {ReactNode} from 'react';
import {store} from '../store/store';
import {Provider} from 'react-redux';
import {ThemeProvider} from '@shopify/restyle';
import dark from '../themes/dark';

type Props = {
  children: ReactNode;
};

const Providers = (props: Props) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default Providers;
