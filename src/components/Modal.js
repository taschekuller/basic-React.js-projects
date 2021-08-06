import React, { Component } from 'react'
import styled from 'styled-components'
import { ProductConsumer } from '../context'
import { ButtonContainer } from './button'
import { Link } from 'react-router-dom'


export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) =>{
                    const {modalOpen,closeModal} = value
                    const {img, title, price} = value.modalProduct

                    if(!modalOpen){
                        return null;
                    }
                    else{
                        return(
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="modal-bg col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                        <h5>Item added to the Cart</h5>
                                        <img src={img} className="img-fluid" alt="product"></img>
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">price: ₺ {price}</h5>
                                        <Link to='/'>
                                            <ButtonContainer onClick={()=>closeModal()}>
                                            Continue Shopping
                                            </ButtonContainer>
                                        </Link>
                                        <Link to='/cart'>
                                            <ButtonContainer onClick={()=>closeModal()}>
                                            Go to the Cart
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                        )
                    } 
                }}
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div `
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba (0, 0, 0, 0.3px);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background: var(--mainYellow);
}
`