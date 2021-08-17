import Timer from "components/timer/Timer";
import React from "react";
import styled from "styled-components";
import SortingField from "components/sortingField";

const App = () => {
    return (
        <Container>
            <Timer leng="ko-KR" />
            <Title>Sorting Machine</Title>
            <SortingField />
            <Timer leng="en-US" />
        </Container>
    );
};

export default App;

const Container = styled.div`
    margin: 0 auto;
    padding: 5%;
    max-width: 768px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 90vh;
`;

const Title = styled.h1`
    font-size: 3em;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0.9rem;
`;
