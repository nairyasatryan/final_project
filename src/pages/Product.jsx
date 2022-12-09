import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import News_letter from "../components/News_letter";
import { bookNumber } from "../data";
import { mobile } from "../responsive";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 80%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  wont-weight: 200;

`;
const FilterBook = styled.select`
  padding: 5px;
  margin-left: 10px;
`;
const FilterBookOption = styled.option``;
const FilterCover = styled.select`
  padding: 5px;
  margin-left: 10px;
`;
const FilterCoverOption = styled.option``;


const AddContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })} 
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  
  &:hover{
    background-color: #f8f4f4;
  }
`;


const Product = () => {
  return (
    <Container>
      <Annoucement />
      <NavBar />
      <Wrapper>
        <ImageContainer>
          <Image src="https://m.media-amazon.com/images/I/91M9VaZWxOL.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Attack on Titans</Title>
          <Desc>
            Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin,
            lit. 'The Attack Titan') is a Japanese manga series written and
            illustrated by Hajime Isayama. It is set in a world where humanity
            is forced to live in cities surrounded by three enormous walls that
            protect them from gigantic man-eating humanoids referred to as
            Titans; the story follows Eren Yeager, who vows to exterminate the
            Titans after they bring about the destruction of his hometown and
            the death of his mother. Attack on Titan was serialized in
            Kodansha's monthly shōnen manga magazine Bessatsu Shōnen Magazine
            from September 2009 to April 2021, with its chapters collected in 34
            tankōbon volumes.
          </Desc>
          <Price> $ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Number of book</FilterTitle>
              <FilterBook>
                <FilterBookOption selected disabled>
                  Number
                </FilterBookOption>
                {bookNumber.map((item, index) => (
                  <FilterBookOption key={index}>{item.number}</FilterBookOption>
                ))}
              </FilterBook>
            </Filter>
            <Filter>
              <FilterTitle>Kind of cover</FilterTitle>
              <FilterCover>
                <FilterCoverOption selected disabled>
                  Cover
                </FilterCoverOption>
                <FilterCoverOption>Tender</FilterCoverOption>
                <FilterCoverOption>Tough</FilterCoverOption>
              </FilterCover>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
                <Remove/>
                <Amount>1</Amount>
                <Add/>
            </AmountContainer>
            <Button>ADD TO CARD</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <News_letter />
      <Footer />
    </Container>
  );
};

export default Product;
