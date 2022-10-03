export const toCapitalize = (string = '') => string.charAt(0)?.toUpperCase() + string.slice(1);

export const shuffle = (data) =>  data.sort(() => Math.random()- 0.5);

export const getLocalStorageData = () => {
    let values = [], keys = Object.keys(localStorage), i = keys.length;
    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }
    return values;
}