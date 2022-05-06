
import { useEffect, useState } from "react";
import { HorseAPI } from "../api/HorseAPI";
import { HorseInRaceRegister } from "../components/HorseInRaceRegister";
import { Message } from "../components/Message";
import { Register } from "../components/Register";

export function Horse(){
  const [raceId, setRaceId] = useState("") as any;
  const [horses, setHorses] = useState("") as any;
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
            <h1>Horses</h1>
            <hr></hr>
            <div>You can add horses - write their color below!</div>
            <Register
                onNameTyped={(event) => setHorses(event?.target.value)}
                onClicked={() => registerHorse()}
            ></Register>
            <hr></hr>
            <div>Here you can add horses to the race!</div>
            <HorseInRaceRegister
                onRaceIdTyped={(event) => setRaceId(event?.target.value)}
                onHorseTyped={(event) => setHorses(event?.target.value)}
                onClicked={() => registerHorseInRace()}
            ></HorseInRaceRegister>
            <Message 
                message={notice}
            ></Message>
        </div>
    );

    async function registerHorse() {
      if (horses != '' ) {
          try {
            await HorseAPI.registerHorse(horses)
            setNotice("Colour is now in the database!" );
        } catch (error) {
            console.log(!error);
            return  setNotice("Colour is already in database...");
        }    
      }
      else{
        setNotice("Not all fields are filled!") ;
      }
      return;      
    }

    async function registerHorseInRace() {
        if (raceId != '' && horses != '' ) {
            try {
                await HorseAPI.registerHorseInRace(+raceId, horses)
                setNotice("The horse has been added to the race!" ) ;   
            } catch (error) {
                console.log(error);
                return  setNotice("The race does not exist or the horse has already been added");
            } 
        }
        else{
            setNotice("Not all fields are filled!") ;
          }
        return;      
      }
}