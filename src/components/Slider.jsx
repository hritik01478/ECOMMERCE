import styled from "styled-components";
// import Me from "../images/me.jpeg";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useState } from "react";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
    width:100%;
    height: 100vh;
    display: flex;
    // background-color: coral;
    position: relative;
    overflow: hidden;
    ${mobile({ display: "none" })};
`
const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color: transparent;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "15px"};
    right: ${props => props.direction === "right" && "15px"};
    cursor: pointer;
    opacity: 0.5;
    z-index:2;
`
const Wrapper = styled.div`
    height:100%;
    display: flex;
    transform: translateX(${props => props.slideIndex * -100}vw);
`
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height:100vh;
    background-color: #${props => props.bg};
`
const ImgContainer = styled.div`
    flex:1;
    height: 100%;
`
const Image = styled.img`
    height:80%;
`
const InfoContainer = styled.div`
    flex:1;
    padding: 50px;
`
const Title = styled.h1`
    font-size:50px;
`
const Desc = styled.p`
    margin:50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;

`
const Button = styled.button`
    cursor: pointer;
    background-color: transparent;
    padding: 10px;
    font-size: 20px;
`

function Slider() {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        }
        else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowBackIos />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg}>
                        <ImgContainer>
                            <Image src={item.img} alt="product"></Image>
                            {/* <img src="../images/me.jpeg" alt="" style={{ height: "80%" }} /> */}
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowForwardIos />
            </Arrow>
        </Container>
    )
}

export default Slider