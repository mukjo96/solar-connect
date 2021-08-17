import React from "react";
import styled from "styled-components";

const TextArea = ({ value, onChange, placeholder }) => {
    return (
        <StyledTextArea
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            required
        />
    );
};
export default TextArea;

const StyledTextArea = styled.textarea`
    width: 100%;
    height: 200px;
    padding: 10px;
    box-sizing: border-box;
    border: solid 2px #1e90ff;
    border-radius: 5px;
    font-size: 16px;
    resize: none;
`;
