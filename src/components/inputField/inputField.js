import SubmitButton from "common/input/submitButton";
import TextArea from "common/textArea";
import React, { useRef, useState } from "react";
import styled from "styled-components";

const InputField = ({ setState, title }) => {
    const [inputValue, setInputValue] = useState("");
    const [isValidate, setIsValidate] = useState(false);
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
        setError("정확히 입력해주세요.");
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
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <TextArea
                        value={inputValue}
                        onChange={handleChange}
                        placeholder="숫자를 입력하세요"
                        isValidate={isValidate}
                        onBlur={checkValidation}
                        ref={textRef}
                    />
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                </label>
                <SubmitButton value="시작" />
            </form>
        </div>
    );
};

export default InputField;

const ErrorMessage = styled.p`
    color: red;
    font-weight: bold;
`;
