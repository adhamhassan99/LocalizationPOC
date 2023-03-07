import {View, Text} from 'react-native';
import React, {ReactNode} from 'react';
import {store} from '../store/store';
import {Provider} from 'react-redux';

type Props = {
  children: ReactNode;
};

const Providers = (props: Props) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default Providers;
