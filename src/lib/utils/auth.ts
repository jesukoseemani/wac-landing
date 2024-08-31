import { getCookie, setCookie } from "cookies-next";
import CryptoJS from "crypto-js";
import { IncomingMessage, ServerResponse } from "http";

export type ctxProps = {
  req: IncomingMessage;
  res: ServerResponse;
};

const key = process.env.NEXT_PUBLIC_ECDC_KEY ?? "";
const iv = process.env.NEXT_PUBLIC_ECDC_IV ?? "";

export const encryptText = (text: string) => {
  // console.log(CryptoJS.enc.Base64.stringify(CryptoJS.lib.WordArray.random(12)));
  const data = CryptoJS.AES.encrypt(text, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();

  return data;
};

export const decryptText = (text: string) => {
  const res = CryptoJS.AES.decrypt(text, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  const data = res.toString(CryptoJS.enc.Utf8);
  return data;
};

export const storeAndEcryptDataToCookie = <T>(
  key: string,
  data: T,
  ctx?: ctxProps,
): void => {
  try {
    const stringifiedData = JSON.stringify(data);
    const encryptedStringifiedData = encryptText(stringifiedData);

    const options = ctx ? { ...ctx } : undefined;

    setCookie(key, encryptedStringifiedData, options);
  } catch (error) {
    // console.error(`Error storing data with key ${key}:`, error);
  }
};

export const storeAndEncryptDataToLocalStorage = (
  key: string,
  data: unknown,
) => {
  try {
    const encryptedKey = encryptText(key);
    const stringifiedData = JSON.stringify(data);
    const encryptedStringifiedData = encryptText(stringifiedData);
    window.localStorage.setItem(encryptedKey, encryptedStringifiedData);
  } catch (error) {
    // console.error(`Error storing data with key ${key}:`, error);
  }
};

export const retrieveAndDecryptDataFromCookie = <T>(
  key: string,
  ctx?: ctxProps,
): T | null => {
  try {
    const options = ctx ? { ...ctx } : undefined;

    const stringifiedData = getCookie(key, options);

    if (typeof stringifiedData === "string") {
      const deCryptedStringifiedData = decryptText(stringifiedData);
      return JSON.parse(deCryptedStringifiedData) as T;
    } else {
      return null;
    }
  } catch (error) {
    // console.error(`Error retrieving data with key ${key}:`, error);
    return null;
  }
};

export const retrieveAndDecryptDataFromLocalStorage = <T>(
  key: string,
): T | null => {
  try {
    const encryptedKey = encryptText(key);
    const stringifiedData = window.localStorage.getItem(encryptedKey);
    if (stringifiedData !== null) {
      const deCryptedStringifiedData = decryptText(stringifiedData);
      return JSON.parse(deCryptedStringifiedData) as T;
    } else {
      return null;
    }
  } catch (error) {
    // console.error(`Error retrieving data with key ${key}:`, error);
    return null;
  }
};
