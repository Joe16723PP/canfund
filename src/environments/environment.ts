// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// http://207.148.65.39:3000/Canefund/v1
// https://us-central1-canfund-c7a3c.cloudfunctions.net/CaneFund/v1
export const environment = {
  production: false,
  apiUrl: 'http://207.148.65.39:3000/Canefund/v1',
  firebaseConfig: {
    apiKey: 'AIzaSyCcFlQhozrmYFl59p08_ipO5t6jZYuGgB4',
    authDomain: 'canfund-c7a3c.firebaseapp.com',
    databaseURL: 'https://canfund-c7a3c.firebaseio.com',
    projectId: 'canfund-c7a3c',
    storageBucket: 'canfund-c7a3c.appspot.com',
    messagingSenderId: '864047971170',
    appId: '1:864047971170:web:da2931b88ee864ec730a3b',
    measurementId: 'G-J6DTZZGDNQ'
  },
  recaptchaSiteKey: '6LfJ1-EUAAAAAI6FHKRaVPpj17DPQ9y9dLRTWb7e',
  postManLink: 'https://www.getpostman.com/collections/211b8bf61349c0bbfd38'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
