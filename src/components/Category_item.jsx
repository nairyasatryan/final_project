import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
 flex: 1;
 margin: 3px;
 height: 70vh;
 position: relative;
`;
const Image = styled.img`
   width:100%;
   height: 100%;
   object-fit: cover;
   ${mobile({ height: "20vh" })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;
const Title = styled.h1`
  color: black;
  background-color: rgba(255,255,255,0.6);
  margin-bottom: 20px;
 `;
const Button = styled.button`
   border: none;
   padding: 10px;
   background-color: white;
   color: grey;
   cursor: pointer;
   font-weight: 600;
`;



const Category_item = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Link to={'/productlist'}>
        <Button>SHOP NOW</Button>
        </Link>
      </Info>
    </Container>
  );
};

export default Category_item;
