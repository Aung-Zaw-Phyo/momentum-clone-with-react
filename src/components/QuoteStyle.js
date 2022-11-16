import styled from "styled-components";

export const QuoteContainer = styled.div`
    position: fixed;
    text-align: center;
    bottom: 0;
    width: 700px;
    left: 50%;
    margin: auto;
    transform: translateX(-50%);

    @media screen and (max-width: 700px) {
        width: 350px;
    }
`

export const Text = styled.p`
    font-size: 1.2rem;
`