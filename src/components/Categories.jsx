import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import Category_item from "./Category_item";


const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;



const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <Category_item item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
