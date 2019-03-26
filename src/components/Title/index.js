import React from "react";
import styled from 'styled-components';

const TitleStyled = styled.h1 `
    font-family: 'Amatic SC', cursive;
    font-size: 50px;
    color: white;
`;

function Title(props) {
  return <TitleStyled>{props.title}</TitleStyled>;
}

export default Title;