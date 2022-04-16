// Estilos de App
import './App.css';

// Components
import Item from './Components/ItemList/Item';
import Main from './Components/Main/Main';
import NavBar from './Components/NavBar/NavBar';

// Firebase - Firestore
import { collection, query, getDocs} from 'firebase/firestore' ;
import { db } from './Firebase/firebaseConfig';

// UseState and UseEffect
import { useEffect, useState } from 'react';

function App() {

  const [productsData, setProductsData] = useState([]);
  
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
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Main />
      {productsData.map((data) =>{
        return <Item productsData={data} key={data.id} />
      })}
    </div>
  );
}

export default App;
