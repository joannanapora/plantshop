import React from 'react';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/plant.svg';
import './header.component.scss';

import { auth } from '../../firebase/firebase.utils';


const Header = (currentUser) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}> SIGN OUT </div>
                    :
                    <link classBane='option' to='/sign-in'></link>
            }
        </div>
    </div>
);

export default Header;
