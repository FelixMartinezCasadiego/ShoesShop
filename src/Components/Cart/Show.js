import { useState } from "react";

const Show = () => {

    const [menu, setMenu] = useState(false);

    const toggleMenu = () =>{
        setMenu(!menu)
    };

    const show1 = menu ? 'Carts show' : 'Carts' ;
    const show2 = menu ? 'Cart show' : 'Cart';

    return {
        menu,
        toggleMenu,
        show1,
        show2
    }
}

export default Show;

