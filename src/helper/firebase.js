import { initializeApp } from 'firebase/app';
import {
  getRemoteConfig,
  fetchAndActivate,
  getValue,
} from 'firebase/remote-config';

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
