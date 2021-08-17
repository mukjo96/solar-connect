import React from "react";
import styled, { keyframes } from "styled-components";

const Loading = () => <Spinner></Spinner>;

const rotation = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }

`;

const Spinner = styled.div`
    height: 1em;
    width: 1em;
    border: 1px solid #156aff;
    border-radius: 50%;
    border-top: none;
    border-right: none;

    animation: ${rotation} 1s linear infinite;
`;

export default Loading;
