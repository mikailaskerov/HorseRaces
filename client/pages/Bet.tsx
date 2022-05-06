

import { useEffect, useState } from "react";
import { BetAPI } from "../api/BetAPI";
import { BetCheck } from "../components/BetCheck";
import { BetRegister } from "../components/BetRegister";
import { Message } from "../components/Message";

export function Bet(){
  const [raceId, setRaceId] = useState("") as any;
  const [player, setPlayer] = useState("") as any;
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
            <h1>Bets</h1>
            <hr></hr>
            <div>Here you can bet on the horse in the race!</div>
            <BetRegister
                onRaceIdTyped={(event) => setRaceId(event?.target.value)}
                onNameTyped={(event) => setPlayer(event?.target.value)}
                onHorseTyped={(event) => setHorses(event?.target.value)}
                onClicked={() => registerBet()}
            ></BetRegister>
             <hr></hr>
            <div>Here you can find out who won the bet in the previous race!</div>
            <BetCheck
            onRaceIdTyped={(event) => setRaceId(event?.target.value)}
            onPlayerTyped={(event) => setPlayer(event?.target.value)}
            onClicked={() => checkBet()}
            ></BetCheck>
            <Message 
                message={notice}
            ></Message>

        </div>
    );

    async function registerBet() {
        if (raceId != '' && horses != '' && player != '') {
            try {
                await BetAPI.registerBet(+raceId, horses, player);
                setNotice("Your bid has been accepted!");   
            } catch (error) {
                console.log(error);
                return setNotice("You lost, didn't place a bet, or the race hasn't finished yet!");
                }
            } 
        else{
            setNotice("Not all fields are filled!") ;
          }
        return;      
      }

    async function  checkBet(){
        if (raceId != '' && player != '') {
            const api = await BetAPI.checkBet(+raceId, player)
            if (api == "You won!"){
            try {
                setNotice(api);
            } catch (error) {
                console.log(error);
                return;
            }}
            else{ 
                setNotice("You lost or didn't make a bet!");
            } 
        }
        else{
            setNotice("Not all fields are filled!") ;
          }
        return;      
      }

    }

export default Bet;