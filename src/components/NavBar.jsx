import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Center,
  Container,
  Logo,
  MenuItem,
  Right,
  Wrapper,
} from "./StyledCommponents/NavbarStyled";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Center>
          <Logo>LAMA.</Logo>
        </Center>
        <Right>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
