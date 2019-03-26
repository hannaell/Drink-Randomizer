import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonStyled = styled.button`
    width: 200px;
    height: 80px;   
    border-radius: 10px;
    font-family: 'Amatic SC', cursive;
    font-size: 25px;
    background-color: #181919;
    color: white;
    border: none;
    margin-bottom: 10px;
    outline: none;
    transition: 0.4s;

    &:hover {
        transform: scale(1.2);
    }

`
const Button = ({handleButton}) => {
    return(
        <ButtonStyled onClick={handleButton} >Get a drink</ButtonStyled>
    )
}

Button.propTypes = {
    handleButton: PropTypes.func
}

export default Button;