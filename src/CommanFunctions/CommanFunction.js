import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image, TouchableHighlight } from "react-native";
import React from "react";
export function removeItem(key) {
  return AsyncStorage.removeItem(key);
}
export function clearAsyncStorage() {
  return AsyncStorage.clear();
}

export function setDataInAsync(key, data) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem(key, data);
}
export async function getDataForAsync(key) {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key).then(data => {
      resolve(JSON.parse(data));
    });
  });


}
