import React, { ReactElement } from "react";

interface Props {
    onClicked(query: any): void;
    onNameTyped(text: any): void;

}

export function Register(props: Props): ReactElement {
    return (
        <>
            <label>
                <input type="text" placeholder="Type here" onChange={(event) => props.onNameTyped(event)}/>
            </label>
           
            <button onClick={(credentials) => props.onClicked(credentials)}>Add</button>
        </>
    );
}