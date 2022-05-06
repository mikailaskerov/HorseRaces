import React, { ReactElement } from "react";

interface Props {
    onClicked(query: any): void;
    onPlaceTyped(text: any): void;
    onDateTyped(text: any): void;
}

export function RaceRegister(props: Props): ReactElement {
    return (
        <>
            <label>
                <input type="date" placeholder="" onChange={(event) => props.onDateTyped(event)}/>
                <input type="text" placeholder="Place" onChange={(event) => props.onPlaceTyped(event)}/>
            </label>
           
            <button onClick={(credentials) => props.onClicked(credentials)}>Register</button>
        </>
    );
}