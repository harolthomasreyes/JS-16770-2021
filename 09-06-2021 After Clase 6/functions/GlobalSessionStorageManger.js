const GetSessionStorage = () => sessionStorage;
const GetSessionStorageItem = (keyName) => sessionStorage.getItem(keyName);
const SetSessionStorage = (keyName, value) =>
  sessionStorage.setItem(keyName, value);
