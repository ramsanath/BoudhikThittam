import I18n from 'react-native-i18n';
import en from './locales/en';
import tam from './locales/tam';
import Helper from './../util/helper';
import Util from './../util/util';


let locale = 'tam'

I18n.locale = locale;
I18n.fallbacks = true;
I18n.translations = {
    en,
    tam
};

export const getCurrentLocale = () => I18n.locale
export const string = (string, params = {}) => {
    return I18n.t(string, params);
}


export default I18n;
