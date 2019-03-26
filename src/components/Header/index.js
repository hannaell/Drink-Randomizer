import React from 'react';
import styled from 'styled-components';
import Title from '../Title';

const HeaderStyled = styled.div `
    width: 100vw;
    background-color: #181919;
    display: flex;
    justify-content: center;
    align-items: center;
`;

class Header extends React.Component {
    render(){
        return(
            <HeaderStyled>
                <Title title="What should I drink tonight?" />
            </HeaderStyled>
        );
    }
} 

export default Header;