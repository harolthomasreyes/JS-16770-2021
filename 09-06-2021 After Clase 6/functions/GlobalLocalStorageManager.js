const GetLocalStorage = () => localStorage;
const GetLocalStorageItem = (keyName) => localStorage.getItem(keyName);
const SetLocalStorage = (keyName, value) =>
  localStorage.setItem(keyName, value);
