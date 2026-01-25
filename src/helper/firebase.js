import { initializeApp } from 'firebase/app';
import {
  getRemoteConfig,
  fetchAndActivate,
  getValue,
} from 'firebase/remote-config';
import {
  doc,
  updateDoc,
  increment,
  setDoc,
  getFirestore,
  getDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBFQp3hHC-zDMj6zloEQ-1ooJ6GKU4swHo',
  authDomain: 'my-porfolio-2025.firebaseapp.com',
  projectId: 'my-porfolio-2025',
  storageBucket: 'my-porfolio-2025.firebasestorage.app',
  messagingSenderId: '587675992022',
  appId: '1:587675992022:web:b5c4f3777317961357ee77',
  measurementId: 'G-F0V58G6190',
};

const app = initializeApp(firebaseConfig);
const remoteConfig = getRemoteConfig(app);
const db = getFirestore(app);

// Optional: Set minimum fetch interval to 0 during dev
remoteConfig.settings.minimumFetchIntervalMillis = 0;

export const fetchRemoteConfig = async () => {
  try {
    await fetchAndActivate(remoteConfig);
    const configValue = getValue(remoteConfig, 'my_projects');
    const parsed = JSON.parse(configValue.asString());

    return parsed;
  } catch (err) {
    console.error('Remote Config fetch failed:', err);
  }
};

export const incrementPageView = async (sameuser) => {
  const ref = doc(db, 'stats', 'pageViews');
  const snap = await getDoc(ref);

  try {
    if (sameuser) {
      return snap.exists() ? snap.data().count : 0;
    }
    await updateDoc(ref, {
      count: increment(1),
      updatedAt: new Date(),
    });
  } catch {
    await setDoc(ref, { count: 1, updatedAt: new Date() }, { merge: true });
  }
  return snap.exists() ? snap.data().count : 0;
};
