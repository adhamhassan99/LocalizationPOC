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
import i18n from '../locales';

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
  // const direction = useSelector(state => state.language.direction);
  const dispatch = useDispatch();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const {LanguageDirectionModule} = NativeModules;
  const direction = useSelector(state => state.language.direction);

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
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <Header />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
          direction: direction,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            alignSelf: 'center',
            writingDirection: direction,
            textAlign: direction === 'ltr' ? 'left' : 'right',
          }}>
          {i18next.language}
        </Text>

        <Text style={{fontSize: 20, fontWeight: '700', alignSelf: 'center'}}>
          {direction}
        </Text>

        <Section title={t('StepOne')}>{t('section1')}</Section>
        <Section title={t('see-your-changes')}>
          <Text>{t('reload-inst')}</Text>
        </Section>
        <Section title={t('StepOne')}>{t('section1')}</Section>
        <Section title={t('see-your-changes')}>
          <Text>{t('reload-inst')}</Text>
        </Section>
        <Button title={t('toggle-Language')} onPress={() => toggleLang()} />
      </View>
    </SafeAreaView>
  );
};

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

export default MainContent;
