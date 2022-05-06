import React, { ReactElement } from "react";

interface Props {
    onClicked(query: any): void;
    onRaceTyped(number: any): void;
}

export function RaceStart(props: Props): ReactElement {
    return (
        <>
            <label>
                <input type="number" placeholder="Race number" onChange={(event) => props.onRaceTyped(event)}/>
            </label>
           
            <button onClick={(credentials) => props.onClicked(credentials)}>Go!</button>
        </>
    );
}