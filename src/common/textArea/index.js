import React, { forwardRef } from "react";
import styled from "styled-components";

const TextArea = forwardRef(
    ({ value, onChange, placeholder, onBlur, isValidate }, ref) => {
        return (
            <StyledTextArea
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                required
                ref={ref}
                isValidate={isValidate}
            />
        );
    }
);
export default TextArea;

const StyledTextArea = styled.textarea`
    width: 100%;
    height: 200px;
    padding: 10px;
    box-sizing: border-box;
    border: ${(props) =>
        props.isValidate ? "solid 2px #156AFF" : "solid 2px red"};
    border-radius: 5px;
    font-size: 16px;
    font-family: inherit;
    resize: none;
`;
