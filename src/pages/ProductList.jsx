import styled from "styled-components";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import News_letter from "../components/News_letter";
import Products from "../components/Products";
import { mobile } from "../responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })};

`
 const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })};
  
 `;


 const Option = styled.option`
 `
const ProductList = () => {
  return (
    <Container>
      <Annoucement />
      <NavBar />
      <Title>Mangas</Title>
      <FilterContainer>
        <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select>
                <Option disabled selected>Color</Option>
                <Option>Black</Option>
                <Option>Blue</Option>
                <Option>White</Option>
                <Option>Yellow</Option>
                <Option>Green</Option>
                <Option>Red</Option>
            </Select>
            <Select>
                <Option disabled selected>Size</Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
                <Option>XXL</Option>

            </Select>
        </Filter>
        <Filter>
            <FilterText>Sort Products:
            <Select style={{marginLeft:"20px"}}>


                <Option selected>Newest</Option>
                <Option>Price (asc) </Option>
                <Option>Price (desc)</Option>
                

            </Select>
            </FilterText>
        </Filter>
      </FilterContainer>
      <Products/>
      <News_letter/>
      <Footer/>
    </Container>
  );
};

export default ProductList;
