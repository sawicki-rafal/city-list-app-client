import {httpClient} from './httpClient';

const citiesPath = 'cities';

export default {
    getCities(page, size) {
        return httpClient.get(citiesPath, {
            params: {page, size}
        });
    },
    getCitiesByNameStartingWith(prefix, page, size) {
        return httpClient.get(`${citiesPath}/${prefix}`, {
            params: {page, size}
        });
    },
    editCity(id, newCity) {
        return httpClient.put(`${citiesPath}/${id}`, newCity);
    }
};
