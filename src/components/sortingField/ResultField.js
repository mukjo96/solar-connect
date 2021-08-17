import React from "react";
import styled from "styled-components";
import { numberSort } from "utils/sortNumber";

const ResultField = ({ value }) => {
    const ascendingValue = numberSort(value).join(",");
    const descendingValue = numberSort(value, true).join(",");
    return (
        <>
            <Container>
                <ResultText>{ascendingValue}</ResultText>
            </Container>

            <Container>
                <ResultText>{descendingValue}</ResultText>
            </Container>
        </>
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
