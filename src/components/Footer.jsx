import { Facebook, Instagram, Pinterest } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  
`;

const Logo = styled.h1`
`;
const Desc = styled.p`
`;
const SocialContainer = styled.div`
`;
const SocialIcon = styled.div`
`;
 

const Center = styled.div`
  flex: 1;
`;
const Rigth = styled.div`
  flex: 1;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SE</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          ratione excepturi quas laudantium molestias autem asperiores possimus
          odio eligendi, ad harum iure vero, na tus animi consectetur tempora.
          Nisi, totam odio?
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center></Center>
      <Rigth></Rigth>
    </Container>
  );
};

export default Footer;
