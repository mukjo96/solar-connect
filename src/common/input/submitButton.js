import React from "react";
import styled from "styled-components";

const SubmitButton = ({ value }) => {
    return <StyledInput type="submit" value={value} />;
};

export default SubmitButton;

const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    margin: auto;
    color: #fff;
    background: rgb(21, 106, 255);
    font-size: 16px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 4px 16px rgba(21, 106, 255, 0.3);
    transition: 0.3s;
    :focus {
        outline: 0;
    }
    :hover {
        background: rgba(21, 106, 255, 0.9);
        cursor: pointer;
        box-shadow: 0 2px 4px rgba(21, 106, 255, 0.6);
    }
`;
