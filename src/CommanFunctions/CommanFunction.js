import AsyncStorage from "@react-native-async-storage/async-storage";

export function removeItem(key) {
  return AsyncStorage.removeItem(key);
}
export function clearAsyncStorage() {
  return AsyncStorage.clear();
}
export function setDataInAsync(key, data) {
  return AsyncStorage.setItem(key, data);
}
export async function getDataForAsync(key) {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key).then(data => {
      resolve(data);
    });
  });
}