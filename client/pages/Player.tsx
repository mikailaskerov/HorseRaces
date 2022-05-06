import { useEffect, useState } from "react";
import { PlayerAPI } from "../api/PlayerAPI";
import { Message } from "../components/Message";
import { Register } from "../components/Register";

export function Player(){
  const [players, setPlayers] = useState("") as any;
  const [notice, setNotice] = useState("") as any;

  useEffect(() => {
    if (!notice) {
        return;
    }
    const timeout = setTimeout(() => setNotice(""), 5000);
    return () => {
        clearTimeout(timeout);
    };
}, [notice])

  return (
       <div>
            <h1>Player</h1>
            <hr></hr>
            <div>To interact with the site, your name must be entered into the database! You can add it below</div>
            <Register
                onNameTyped={(event) => setPlayers(event?.target.value)}
                onClicked={() => registerPlayer()}
            ></Register>
            <Message 
                message={notice}
            ></Message>
        </div>
    );

    async function registerPlayer() {
      if (players != '' ) {
          try {
            await PlayerAPI.registerPlayer(players)
            setNotice("You are now registered!");
          } catch (error) {
              console.log(error);
              setNotice("This name is already in database..."); 
              return;
          }    
      }
      else{
        setNotice("Not all fields are filled!") ;
      }
      return;      
  }
}