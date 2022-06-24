import styled from "styled-components";
import { Send } from "@material-ui/icons";

const Container = styled.div`
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fcf5f5;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 65px;
    margin-bottom: 20px;
`
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`
const InputContainer = styled.div`
    width: 50%;
    height:40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;

`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
    font-size: 15px;
`
const Button = styled.button`
    flex: 1;
    padding: 5px;
    background-color: teal;
    color: white;
    border:none;

`

const NewsLetter = () => {
    return (
        <Container>
            <Title>NEWSLETTER</Title>
            <Description>Get timely updates from your favourite products.</Description>
            <InputContainer>
                <Input placeholder="Your email" />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default NewsLetter