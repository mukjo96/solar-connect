import Timer from "components/timer/Timer";
import React from "react";
import styled from "styled-components";
import SortingField from "components/sortingField";

const App = () => {
    return (
        <Container>
            <Timer leng="ko-KR" />
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
`;
