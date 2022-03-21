import {httpClient} from './httpClient';

const citiesPath = 'cities';

export default {
    login(credentials) {
        return httpClient.head(citiesPath, {auth: credentials});
    }
};
