import React from 'react';

// Estilos
import '../NavBar/NavBar.css'

// React Router Dom
import { Link } from 'react-router-dom';

// Context
import CartContext from '../../Context/ItemsContext';
import { useContext } from 'react';


const NavBar = () => {

    const {itemsShoes} = useContext(CartContext);

    return (
        <>
            <div class="collapse sticky-top sticky-sm-top sticky-md-top" id="navbarToggleExternalContent">
                <div class="bg-dark p-4">
                    <Link to='/' className='DecorationNone'> <h5 class="text-white h4">Home</h5> </Link>
                    <Link to='/Search' className='DecorationNone'><span class="text-muted">Search</span></Link>
                </div>
            </div>
            <nav class="navbar navbar-dark bg-dark sticky-top sticky-sm-top sticky-md-top">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <Link to='/' className='DecorationNone'><h3 className='text-white'>Logo</h3></Link>
                    <div class="d-flex justify-content-between">
                        <Link to='/Search' className='DecorationNone'>
                            <h2 class="mx-1 d-none d-sm-block text-white"><i class='bx bx-search-alt-2'></i></h2>
                        </Link>
                        <Link to="/Cart" className='DecorationNone'>
                            <h2 class="mx-4 text-white">
                                <i class='bx bx-cart'></i>
                                <span> {itemsShoes.length} </span>
                            </h2>
                        </Link>
                        
                    </div>

                </div>
            </nav>
        </>
    )
}

export default NavBar;