import Loading from "common/loading";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import numberSort from "utils/sortNumber";

const ResultField = ({ value }) => {
    const [resultValue, setResultValue] = useState({
        ascendingValue: "",
        descendingValue: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setResultValue({
            ascendingValue: numberSort(value).join(", "),
            descendingValue: "",
        });
        setIsLoading(true);
        setTimeout(() => {
            setResultValue((prev) => ({
                ...prev,
                descendingValue: numberSort(value, true).join(", "),
            }));
            setIsLoading(false);
        }, 3000);
    }, [value]);

    return (
        <>
            <Block>
                <Title>오름차순</Title>
                <ResultValue>
                    <ResultText>{resultValue.ascendingValue}</ResultText>
                </ResultValue>
            </Block>
            <Block>
                <Title>내림차순</Title>
                <ResultValue>
                    {isLoading ? (
                        <Loading />
                    ) : (
                        <ResultText>{resultValue.descendingValue}</ResultText>
                    )}
                </ResultValue>
            </Block>
        </>
    );
};

export default ResultField;

const Block = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem 0;
`;

const Title = styled.h3`
    font-size: 1em;
    font-weight: 600;
`;

const ResultValue = styled.div`
    border: 2px solid #156aff;
    border-radius: 5px;
    padding: 3% 5%;
`;

const ResultText = styled.div`
    font-weight: bold;
    overflow-wrap: break-word;
`;
