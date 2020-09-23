import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const NavContainer = styled.ul`
    padding: 10px;
    margin-top: 1px;
    margin-bottom: 20px;
    background-color: #E64A19;
    list-style: none;
    position: relative;
`;

const NavLink = styled(Link)`
  text-decoration: none;
`;

const NavList = styled.li`
    display:inline-block;
    background-color: #E64A19;
`;

const NavText = styled.p`
    display:block;
    padding:0 10px;
    color:#FFF;
    font-size:20px;
    line-height: 60px;
    text-decoration:none;
`;

export const Nav = () => (
    <NavContainer>
        <NavList>
            <NavLink to="/"><NavText>Shipping Label Maker</NavText></NavLink>
        </NavList>
        <NavList style={{float: 'right'}}>
            <NavLink to="/admin"><NavText>Admin</NavText></NavLink>
        </NavList>
    </NavContainer>);


