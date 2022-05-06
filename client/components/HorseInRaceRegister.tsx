import React, { ReactElement } from "react";

interface Props {
    onClicked(query: any): void;
    onRaceIdTyped(number: any): void;
    onHorseTyped(text: any): void;
}

export function HorseInRaceRegister(props: Props): ReactElement {
    return (
        <>
            <label>
                <input type="number" placeholder="Race number" onChange={(event) => props.onRaceIdTyped(event)}/>
                <input type="text" placeholder="Horse colour" onChange={(event) => props.onHorseTyped(event)}/>
            </label>
           
            <button onClick={(credentials) => props.onClicked(credentials)}>Add</button>
        </>
    );
}