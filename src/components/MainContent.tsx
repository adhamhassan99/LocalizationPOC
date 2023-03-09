/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  useColorScheme,
  NativeModules,
  Button,
  StyleSheet,
  I18nManager,
} from 'react-native';
import React from 'react';
import i18next, {t} from 'i18next';
import {
  Colors,
  DebugInstructions,
  Header,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {useSelector, useDispatch} from 'react-redux';
import {toggleDirection} from '../store/languageSlice';
import {changeTheme} from '../store/themeSlice';
import i18n from '../locales';
import dark, {Theme} from '../themes/dark';
import {ThemeProvider, useTheme} from '@shopify/restyle';
import lightTheme from '../themes/light';
import neonTheme from '../themes/neon';
import Content from './Content';

type Props = {};

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

const MainContent = (props: Props) => {
  const isDarkMode = useColorScheme() === 'dark';
  const themeShopify = useTheme<Theme>();
  const {cardPrimaryBackground} = themeShopify.colors;
  // const direction = useSelector(state => state.language.direction);
  const dispatch = useDispatch();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const {LanguageDirectionModule} = NativeModules;
  const direction = useSelector(state => state.language.direction);
  const theme = useSelector(state => state.theme.theme);

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
    // LanguageDirectionModule.toggleLanguageDirection('ltr');
    dispatch(toggleDirection());
  };

  return (
    <ThemeProvider
      theme={
        theme === 'dark' ? dark : theme === 'light' ? lightTheme : neonTheme
      }>
      <Content />
    </ThemeProvider>
  );
};

export default MainContent;
