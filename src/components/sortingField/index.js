import React, { useState } from "react";
import styled from "styled-components";

import InputField from "./inputField";
import ResultField from "./ResultField";

const SortingField = () => {
    const [inputNumberList, setInputNumberList] = useState([]);

    return (
        <Container>
            <InputField value={inputNumberList} setState={setInputNumberList} />
            <ResultField value={inputNumberList} />
        </Container>
    );
};

export default SortingField;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem 0;
`;
