import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore = firebase.firestore()

// queries to select document or collection

firestore.collection('user').doc('h7egmwVhikLYBVKLaLTM ').collection('cartItems').doc('OrxlLHiFgweKcd2gsJfM')
// OR
firestore.doc('/user/h7egmwVhikLYBVKLaLTM/cartItems/OrxlLHiFgweKcd2gsJfM')

firestore.collection('/user/h7egmwVhikLYBVKLaLTM/cartItems')