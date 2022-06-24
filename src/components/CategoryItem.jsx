import styled from 'styled-components';
import { mobile } from '../responsive'

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width:100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "40vh" })};
`
const Info = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color: white;
    margin: 20px;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 500;
`

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} alt="pic" />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem