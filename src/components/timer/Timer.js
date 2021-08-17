import React from "react";
import styled from "styled-components";

const Timer = ({ leng }) => {
    const today = new Date();
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
    };
    const date = today.toLocaleDateString(leng, options);

    return (
        <TimerContainer>
            <span>{date}</span>
        </TimerContainer>
    );
};

export default Timer;

const TimerContainer = styled.div`
    padding: 3% 5%;
    text-align: center;
    font-weight: bold;
    font-size: 1.6rem;
`;
