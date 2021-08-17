import SubmitButton from "common/input/submitButton";
import TextArea from "common/textArea";
import React, { useRef, useState } from "react";
import styled from "styled-components";

const InputField = ({ setState }) => {
    const [inputValue, setInputValue] = useState("");
    const [isValidate, setIsValidate] = useState(true);
    const [error, setError] = useState("");
    const textRef = useRef();

    const handleChange = (e) => {
        const { value } = e.target;

        setInputValue(value);
    };

    const checkValidation = () => {
        const regex = /^[0-9,]*$/;

        if (regex.test(inputValue)) {
            setIsValidate(true);
            setError("");
            return true;
        }
        setIsValidate(false);
        setError("공백없이 숫자만 입력해주세요.");
        return false;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (checkValidation()) {
            const numberList = inputValue
                .split(",")
                .filter((e) => e)
                .map(Number);
            setState(numberList);
            setInputValue("");
        }
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <TextArea
                value={inputValue}
                onChange={handleChange}
                placeholder="숫자를 입력하세요 (예> 1,2,3,4)"
                isValidate={isValidate}
                onBlur={checkValidation}
                ref={textRef}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}

            <SubmitButton value="시작" />
        </StyledForm>
    );
};

export default InputField;

const StyledForm = styled.form`
    text-align: center;

    input {
        margin-top: 1.5rem;
    }
`;

const ErrorMessage = styled.p`
    color: red;
    font-weight: 600;
    text-align: start;
`;
