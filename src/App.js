import Timer from "components/timer/Timer";
import InputField from "components/inputField/inputField";
import ResultField from "components/resultField/ResultField";

import { useState } from "react";
import styled from "styled-components";

const App = () => {
    const [inputNumberList, setInputNumberList] = useState([]);

    return (
        <Container>
            <Timer leng="ko-KR" />
            <InputField value={inputNumberList} setState={setInputNumberList} />
            <ResultField value={inputNumberList} />
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
    gap: 3rem 0;
`;
