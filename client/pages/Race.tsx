
    import { useEffect, useState } from "react";
    import { RaceAPI } from "../api/RaceAPI";
    import { Message } from "../components/Message";
    import { RaceRegister } from "../components/RaceRegister";
import { RaceStart } from "../components/RaceStart";
    
    export function Race(){
      const [date, setDate] = useState('') as any;
      const [place, setPlace] = useState('') as any;
      const [race, setRace] = useState('') as any;
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
                <h1>Races</h1>
                <div>Here you can create a race!</div>
                <RaceRegister
                    onDateTyped={(event) => setDate(event?.target.value)}
                    onPlaceTyped={(event) => setPlace(event?.target.value)}
                    onClicked={() => registerRace()}
                ></RaceRegister>
                <hr></hr>
                <div>Here you can find out the results of the race!</div>
                <RaceStart
                    onRaceTyped={(event) => setRace(event?.target.value)}
                    onClicked={() => startRace()}
                ></RaceStart>
                <Message 
                    message={notice}
                ></Message>
            </div>
        );
    
        async function registerRace() {
          if (date != '' && place != '') {
              try {
                setNotice("Hello! That race number is -  " + await RaceAPI.registerRace(date, place) + "! Use it in interaction!" ) ;
              } catch (error) {
                  console.log(error);
                  return ;
              }    
          }
          else{
            setNotice("Not all fields are filled!") ;
          }
          return;      
      }

    async function startRace() {
        if (race != '') {
            try {
                setNotice( await RaceAPI.startRace(race) + " won!" ) ;
            } catch (error) {
                console.log(error);
                return setNotice("The race does not exist or you have not added horses to it!");
            }    
        }
        else{
            setNotice("Not all fields are filled!") ;
          }
        return;      
    }
  }