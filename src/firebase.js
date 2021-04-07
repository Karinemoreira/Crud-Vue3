import firebase from 'firebase';
import { ref, onUnmounted } from 'vue'

const config = {
  apiKey: "AIzaSyC1HYpzGkSkaI1_9nInqswlEeVROO1hYEo",
  authDomain: "crudvue3.firebaseapp.com",
  projectId: "crudvue3",
  storageBucket: "crudvue3.appspot.com",
  messagingSenderId: "1051297167204",
  appId: "1:1051297167204:web:2fed0908d59a0b0f73ec71"
};

const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.firestore()
const usersCollection = db.collection('users')

export const createUser = user => {
  return usersCollection.add(user) 
}

export const getUser = async id => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null 
}

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user) 
}

export const deleteUser = id => {
  return usersCollection.doc(id).delete() 
}

export const useLoadUsers = () => {
  const users = ref ([])
  const close = usersCollection.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
})

onUnmounted(close)
return users
}
