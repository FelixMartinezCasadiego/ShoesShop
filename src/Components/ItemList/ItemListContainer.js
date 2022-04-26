// Firebase - Firestore
// import { collection, query, getDocs} from 'firebase/firestore' ;
// import { db } from '../../Firebase/firebaseConfig';

// UseState and UseEffect
import {useState, useEffect, useContext} from 'react';

// Estilos de Item
import './Item.css';

// Components
import Item from './Item';
import CartContext from '../../Context/ItemsContext';

const ItemListContainer = () => {

  const {productsData}  = useContext(CartContext);

    /* const [productsData, setProductsData] = useState([]);

    useEffect(() =>{
        const getProducts = async () => {
          const q = query(collection(db, 'Shoes'));
          const docs = [];
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id: doc.id});
          });
          setProductsData(docs); 
        };
        getProducts();
      }, []); */

    return(
        <div className='ItemGrid'>
            {productsData.map((data) =>{
                return <Item productsData={data} key={data.id} />
                })}
        </div>
    )
}

export default ItemListContainer;