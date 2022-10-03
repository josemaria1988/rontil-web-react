
import React from 'react';
import { useCatalogo } from '../../hooks/useCatalogo'
import './ItemListContainer.scss';
import ItemList from "../ItemList/ItemList";
import MoonLoader from "react-spinners/MoonLoader";
import Banner from '../Banner/Banner.jsx';
import '../Spinners/MoonLoader.scss';
import Searchbar from '../Searchbar/Searchbar.jsx'

export default function ItemListContainer() {


  const { productos, loading, categoryId } = useCatalogo()


  return (
  <>
    {loading ? <div className="spinner" ><MoonLoader/> </div>  
     : 
     <div>
      <Banner/>
      <div className="searchbar-container">
        <Searchbar className="searchbar"/>
      </div>
      {
        categoryId ? <h4 className="cardsTittle">{categoryId}</h4> : <h4 className="cardsTittle">Todos los productos</h4>
      }
    <div  className="divCards">
    
      <ItemList productos={productos}/>

    </div>

    </div>
  }
    </>
  );
}