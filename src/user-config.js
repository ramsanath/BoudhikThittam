import { storage } from './util/helper';
import { constants } from './util/constants';


const defaultPreference = {
    locale: 'tam'
};

export function setLocalePreference(locale) {
    storage.put(constants.USER_LOCALE, locale);
}

export function getLocalePreference() {
    // TODO: use local storage somehow to get this data

    // const locale = storage.get(constants.USER_LOCALE);
    return defaultPreference.locale;
}