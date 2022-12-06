import styled from "styled-components"

const Container = styled.div`
 height: 40px;
 background-color: teal;
 color: white;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 18px;
 font-weight: 500;
`

const Annoucement = () => {
  return (
    <Container>
      Here you can find every manga you want!!
    </Container>
  )
}

export default Annoucement
