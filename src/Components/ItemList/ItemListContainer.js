import { collection, query } from 'firebase/firestore';
import React, {useState, useEffect} from 'react';

// Firebase - Firestore
import {db} from '../../Firebase/firebaseConfig';

const ItemListContainer = () => {
    const [AlbumsData, setAlbumsData] = useState([]);

    useEffect ( () => {
        const getsProducts = async () => {
            const q = query(collection(db, 'Shoes'));
            const querySnapshot = await getsDocs(q);
            querySnapshot.forEach()
        }
    },[]);
}

export default ItemListContainer;