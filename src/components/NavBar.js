import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'
import { ButtonContainer } from './button'


export default class NavBar extends Component {
    render() {
        return (
            <NavWrapper className="navbar bg-warning navbar-dark px-sm-5">
                
            {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
            Creative Commons (Attribution 3.0 Unported);
            https://www.iconfinder.com/Makoto_msk  */}

            <Link to='/'>
                <img src={logo} alt="store" className="navbar-brand nav-store ms-2"></img>
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                        <h5 className="products-color">Products</h5>
                    </Link>
                </li>
            </ul>
            <Link to="/cart" className="ml-auto">
                <ButtonContainer className="nav-btn-shoplist me-2">
                    <span className="me-1">
                    <i class="fas fa-cart-plus" />
                    </span>
                    Shopping List
                </ButtonContainer>
            </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper= styled.nav`
    border-bottom:1px solid black;
    .nav-link{
        color:var(--mainWhite) !important;
        font-size:1.3rem;
    }
`