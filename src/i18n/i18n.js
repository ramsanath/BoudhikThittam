import I18n from 'react-native-i18n';

import en from './locales/en';
import tam from './locales/tam';

import Helper from './../util/helper';
import constants from './../constants/constants';
import Util from './../util/util';




let locale = constants.TAM

I18n.locale = locale;
I18n.fallbacks = true;
I18n.translations = {
    en,
    tam
};

export const string = (string, params = {}) => {
    return I18n.t(string, params);
}
export default I18n;
