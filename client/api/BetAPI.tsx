export class BetAPI {
    
    static async registerBet( race_id: number, horse: string, name: string ): Promise<any> {
            
        const horse_id = await fetch("http://localhost:8080/api/horse/find", {
                method: "POST",
                body: horse
            })

        const player_id = await fetch("http://localhost:8080/api/player/find", {
                method: "POST",
                body: name
            })

        const data = {
            raceId: race_id,
            horseId: await horse_id.json(),
            playerId: await player_id.json(),
        };
        const response = await fetch(`http://localhost:8080/api/horsesinrace/find/${race_id}/${data.horseId}`, {
                method: "GET"
            });
        
        if (response.ok){
        const responseTwo = await fetch(`http://localhost:8080/api/bet/find/${data.playerId}/${race_id}`, {
                method: "GET"
            });

        if (!responseTwo.ok){
            await fetch("http://localhost:8080/api/bet", {
            method: "POST",
            body: JSON.stringify(data),
            headers : {
            'Content-Type': 'application/json'
        
    }})};
        if (!response.ok || responseTwo.ok) {
            const error = await response.json();
            throw new Error(error.message);
    }}}


    static async checkBet( race_id: number, name: string ): Promise<any> {
            
        const namePlayer = await fetch("http://localhost:8080/api/player/find", {
                method: "POST",
                body: name
            })
        const data = {
                playerId: await namePlayer.json(),
            };
        
        const response = await fetch(`http://localhost:8080/api/bet/check/${race_id}/${data.playerId}`, {
                method: "GET"
         });
         
         if (await response.text() == name){
             return "You won!";
         }
    }
}