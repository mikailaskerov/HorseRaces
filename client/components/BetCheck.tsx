import React, { ReactElement } from "react";

interface Props {
    onClicked(query: any): void;
    onRaceIdTyped(number: any): void;
    onPlayerTyped(text: any): void;
}

export function BetCheck(props: Props): ReactElement {
    return (
        <>
            <label>
                <input type="number" placeholder="Race number" onChange={(event) => props.onRaceIdTyped(event)}/>
                <input type="text" placeholder="Your name" onChange={(event) => props.onPlayerTyped(event)}/>
            </label>
           
            <button onClick={(credentials) => props.onClicked(credentials)}>Add</button>
        </>
    );
}