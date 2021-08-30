const { CONTINENTS, COUNTRIES } = require('./jest_tests');

describe('Arrays', () => {
    test('shouldn\'t be empty arrays', () => {
        expect(CONTINENTS.length).not.toBe(0)
    });
    test('shouldn\'t be empty arrays', () => {
        expect(COUNTRIES.length).not.toBe(0)
    });
});

const { getCountry,
    getCountryByCode,
    getContinentByCode,
    getContinentData} = require('./jest_tests');

describe('All functions', () => {
   test('should be defined', () => {
       expect([getCountry,
           getCountryByCode,
           getContinentByCode,
           getContinentData]).toBeDefined()
   });
   test('shouldn\'t be undefined', () => {
        expect([getCountry,
            getCountryByCode,
            getContinentByCode,
            getContinentData]).not.toBeUndefined()
    });
});

describe('Function getCountry', () => {
    test('should return full info about country', () => {
        const countryInfo = {
            code: 'GB',
            name: 'United Kingdom',
            capital: 'London',
            area: 244_820,
            continent: 'EU'
        };
        expect(getCountry('GB')).toEqual(countryInfo)
    });
});

describe('Function getCountryByCode', () => {
    test('should return full name of country', () => {
        // const codes = ['United States', 'Germany', 'Denmark', 'Ukraine', 'China', 'United Kingdom', 'India'];
        expect(getCountryByCode('CN').name).toEqual('China')
    })
});

describe('Function getContinentByCode', () => {
    test('should return continent', () => {
        expect(getContinentByCode('DE')).toEqual('Europe');
    });
});

describe('Function getContinentData', () => {
    test('should return number', () => {
        expect(getContinentData('EU').countries.length).not.toBe(0);
        expect(getContinentData('NA')).toEqual({
            area: 9629091,
            countries: ["United States"]
        })
    });
});