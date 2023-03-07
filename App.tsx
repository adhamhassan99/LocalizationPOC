/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import RNRestart from 'react-native-restart';

import {
  Button,
  I18nManager,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  NativeModules,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import i18n from './src/locales';
import i18next, {t} from 'i18next';
import MainContent from './src/components/MainContent';
// import {useSelector, useDispatch} from 'react-redux';
// import {toggleDirection} from './src/store/languageSlice';
import Providers from './src/components/Providers';
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  // const direction = useSelector(state => state.language.direction);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const {LanguageDirectionModule} = NativeModules;

  const toggleLang = () => {
    if (i18n.language == 'en') {
      i18n.language = 'ar';
      i18next.changeLanguage('ar');
      I18nManager.allowRTL(true);
      I18nManager.forceRTL(true);
    } else {
      i18n.language = 'en';
      i18next.changeLanguage('en');
      I18nManager.allowRTL(false);
      I18nManager.forceRTL(false);
    }
    // RNRestart.Restart();
    LanguageDirectionModule.toggleLanguageDirection('ltr');
  };

  return (
    <Providers>
      <MainContent />
    </Providers>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

// const pApp = (
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

export default App;
