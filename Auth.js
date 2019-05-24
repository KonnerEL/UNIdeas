import {AsyncStorage} from "react-native";

//export const USER_KEY = "auth_demo";
export const setValueOnKey = (KEY,VALUE) => AsyncStorage.setItem(KEY,JSON.stringify(VALUE));

export const removeKey = (KEY) => AsyncStorage.removeItem(KEY);
//export const onSignIn = () => AsyncStorage.setItem(USER_KEY,"true");

//export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export const getValueFromKey = (KEY) => {
  return new Promise(function(resolve, reject) {
    AsyncStorage.getItem(KEY).then(res => {
      if (res != null) {
        resolve(JSON.parse(res));
      } else {
        resolve('empty');
      }
    })
    .catch(err => reject(err));
  });
};
//export const isSignedIn = () => {
  //return new Promise(function(resolve, reject) {
    //AsyncStorage.getItem(USER_KEY).then(res => {
      //if (res != null) {
        //resolve(true);
      //} else {
        //resolve(false);
      //}
    //})
    //.catch(err => reject(err));
  //});
//};