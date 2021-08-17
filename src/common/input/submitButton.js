import React from "react";
import styled from "styled-components";

const SubmitButton = ({ value }) => {
    return <StyledInput type="submit" value={value} />;
};

export default SubmitButton;

const StyledInput = styled.input`
    width: 120px;
    height: 40px;
    color: #fff;
    background: #004fff;
    font-size: 16px;
    border: none;
    border-radius: 20px;
    box-shadow: 0 4px 16px rgba(0, 79, 255, 0.3);
    transition: 0.3s;
    :focus {
        outline: 0;
    }
    :hover {
        background: rgba(0, 79, 255, 0.9);
        cursor: pointer;
        box-shadow: 0 2px 4px rgba(0, 79, 255, 0.6);
    }
`;
