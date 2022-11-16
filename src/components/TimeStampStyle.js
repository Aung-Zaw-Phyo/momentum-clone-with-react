import styled from "styled-components";

export const Welcome = styled.div`
    position: absolute;
    text-align: center;
    padding: 1rem;
    top: 50%;
    left: 0;
    right: 0;
    margin: auto;
    transform: translateY(-50%);
`

export const Time = styled.p`
    font-size: 8rem;
    font-weight: 500;
    margin: 0;
    paddin: 0;

    @media screen and (max-width: 600px) {
        font-size: 5rem;
    }
`

export const Greeting = styled.p`
    font-size: 4rem;
    font-weight: 600;
    margin: 0;
    padding: 0;

    @media screen and (max-width: 600px) {
        font-size: 3rem;
    }
`