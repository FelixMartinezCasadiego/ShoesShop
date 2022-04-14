import React from 'react';


const NavBar = () => {
    return (
        <>
            <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-dark p-4">
                    <h5 class="text-white h4">Home</h5>
                    <span class="text-muted">Search</span>
                </div>
            </div>
            <nav class="navbar navbar-dark bg-dark bg-opacity-75">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <h3>Logo</h3>
                    <div class="d-flex justify-content-between">
                        <h2 class="mx-1 d-none d-sm-block"><i class='bx bx-search-alt-2'></i></h2>
                        <h2 class="mx-4"><i class='bx bx-cart'></i></h2>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default NavBar;