import React from "react";
import styled from "styled-components";

const ResultField = ({ value }) => {
    const newValue = value ? value.join(",") : "";
    return (
        <Container>
            <ResultText>{newValue}</ResultText>
        </Container>
    );
};

export default ResultField;

const Container = styled.div`
    border: 2px solid #1d90ff;
    border-radius: 5px;
    padding: 3% 5%;
`;

const ResultText = styled.div`
    font-weight: bold;
`;
