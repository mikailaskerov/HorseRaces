import React, { ReactElement } from "react";
import styled from "styled-components";

const MessageBox = styled.div`
    background-color: yellow;
    border-radius: 10px;
    padding: 10px;
    min-width: 120px;
    text-align: center;
    font-family: "Times New Roman";
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

interface Props {
    message: string
}

export function Message(props: Props): ReactElement {
    return (
        <>
            {props.message &&
                <MessageBox>
                    <h4>{props.message}</h4>
                </MessageBox>
            }
        </>
    );
}