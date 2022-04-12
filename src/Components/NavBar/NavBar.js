import React from 'react';

const NavBar = () => {
    return (
        <>
            <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-dark p-4">
                    <h5 class="text-white h4">Collapsed content</h5>
                    <span class="text-muted">Toggleable via the navbar brand.</span>
                </div>
            </div>
            <nav class="navbar navbar-dark bg-dark bg-opacity-75">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <h3>Logo</h3>
                    <div class="d-flex justify-content-between">
                        <h5 class="mx-1">Buscador</h5>
                        <h5 class="mx-4">carrito</h5>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default NavBar;