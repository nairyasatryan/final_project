import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";



const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`

const SerachContainer = styled.div`
  border: 0.5px  solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px
`;
const Center = styled.div`
  flex: 1;
  text-align: center
`;


const Logo = styled.h1 `
 font-weight: bold;
 ${mobile({ fontSize: "24px" })}
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;


const MenuItem = styled.div`
 font-size: 14px;
 cursor: pointer;
 margin-left: 25px;
 ${mobile({ fontSize: "12px", marginLeft: "10px" })}

`

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SerachContainer>
            <Input />
            <Search style={{color: "grey", fontSize:16}} />
          </SerachContainer>
        </Left>
        <Center>
          <Logo>Samurai Entertainment</Logo>
        </Center>
        <Right>
        <Link to={'/'}>
          <MenuItem>HOME</MenuItem>
          </Link>
          <Link to={'/register'}>
          <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to={'/login'}>
          <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to={'/cart'}>
          <MenuItem>
          <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
          </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
