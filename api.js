import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyBYBLElwsdUoaPy4N5j7a8MgNDKm5W3_nc',
  authDomain: 'vanlife-a75c4.firebaseapp.com',
  projectId: 'vanlife-a75c4',
  storageBucket: 'vanlife-a75c4.appspot.com',
  messagingSenderId: '1074593206201',
  appId: '1:1074593206201:web:b40c440feafe63d007b068',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, 'van');

export async function getVans() {
  const snapshot = await getDocs(vansCollectionRef);
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vans;
}

//////////

// export async function getVans(id) {
//   const url = id ? `/api/vans/${id}` : '/api/vans';
//   const res = await fetch(url);
//   if (!res.ok) {
//     throw {
//       message: 'Failed to fetch vans',
//       statusText: res.statusText,
//       status: res.status,
//     };
//   }
//   const data = await res.json();
//   return data.vans;
// }

export async function getHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : '/api/host/vans';
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: 'Failed to fetch vans',
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}

export async function loginUser(creds) {
  const res = await fetch('/api/login', {
    method: 'post',
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
