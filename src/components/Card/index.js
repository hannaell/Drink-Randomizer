import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const CardStyled = styled.div `
    min-height: 400px;
    width: 350px;
    background: #181919;
    border-radius: 10px;
    margin: 10px;
    overflow: hidden;
    font-family: 'Amatic SC', cursive;
    font-size: 20px;
    color: white;

    img {
        height: 200px;
        border-radius: 20px;  
    }

    ul {
        list-style-type: none;
        padding: 0px;
    }

    .Instructions {
        max-width: 400px;
        margin: 40px;
    }
`;

const Card = (props) => {
    return(
        <CardStyled>
            <img src={props.image} alt="A fancy drink"></img>
            <h3>{props.drinkName}</h3>
            <p>{props.need}</p>
            <p>{props.glass}</p>
            <ul>{props.ingredients.map((ingredient, index) => {
                return <li key={ingredient}>{props.measure[index]+" "+ingredient}</li>
            })}</ul>
            <p className="Instructions">{props.instructions}</p>
            
        </CardStyled>
    )
}

Card.propTypes = {
    image: PropTypes.string,
    drinkName: PropTypes.string,
    glass: PropTypes.string,
    need: PropTypes.string,
    instructions: PropTypes.string,
    ingredients: PropTypes.array,
    measure: PropTypes.array
}
export default Card;