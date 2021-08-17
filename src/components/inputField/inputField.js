import SubmitButton from "common/input/submitButton";
import TextArea from "common/textArea";
import React, { useState } from "react";

const InputField = ({ setState, title }) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        const { value } = e.target;
        const regex = /[0-9 | ,]$/;
        if (regex.test(value) || value === "") {
            setInputValue(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const numberList = inputValue
            .split(",")
            .filter((e) => e !== "" && true)
            .map(Number);
        setState(numberList);
        setInputValue("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    {title}
                    <TextArea
                        value={inputValue}
                        onChange={handleChange}
                        placeholder="숫자를 입력하세요"
                    />
                </label>
                <SubmitButton value="시작" />
            </form>
        </div>
    );
};

export default InputField;
