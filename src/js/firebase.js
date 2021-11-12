import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase_config";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore/lite";
import {
  getStorage,
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
} from "firebase/storage";

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const st = getStorage(firebaseApp);

export const getRecord = async (id) => {
  console.log("... getting credentials");
  const record = doc(db, `images/${id}`);
  const recordDoc = await getDoc(record);
  return recordDoc.data();
};

export const setRecord = async (id, files) => {
  console.log("... getting credentials");
  const record = doc(db, `images/${id}`);
  await setDoc(record, { files });
  return true;
};

export const uploadFile = async (id, file) => {
  const imagesRef = ref(st, `${id}/${file.name}`);
  let result;
  result = await uploadBytes(imagesRef, file);
  return true;
};

export const uploadFiles = async (id, files) => {
  const result = await Promise.all(files.map((f) => uploadFile(id, f)));
  return true;
};

export const removeFile = async (id, file) => {
  const imagesRef = ref(st, `${id}/${file.name}`);
  let result;
  result = await uploadBytes(imagesRef, file);
  return true;
};

export const listFiles = async (id) => {
  const listRef = ref(st, `${id}/`);
  const list = await listAll(listRef);
  return list.items;
};

export const getImgURL = async (imgRef) => {
  const url = await getDownloadURL(imgRef);
  return url;
};

export const getImgURLs = async (items) => {
  const data = await Promise.all(items.map((i) => getImgURL(i)));
  return data;
};
