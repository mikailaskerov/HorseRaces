export class HorseAPI {
    
    static async registerHorse(colour: string) {
            
        const data = {
            colour: colour
        };
        
            const response =
                await fetch("http://localhost:8080/api/horse", {
                method: "POST",
                body: JSON.stringify(data),
                headers : {
                'Content-Type': 'application/json'
            }
            
        });
        if (!response.ok){
            const error = await response.json();
            throw new Error(error.message); 
        }
        }

        static async registerHorseInRace( race_id: number, horseName: string ): Promise<any> {
            
            const response = await fetch("http://localhost:8080/api/horse/find", {
                method: "POST",
                body: horseName
            });

            const responseTwo = await fetch("http://localhost:8080/api/race/find", {
                method: "POST",
                body: JSON.stringify(race_id),
                headers : {
                'Content-Type': 'application/json'
            
        }});

        const resp = responseTwo.json()
        if (await resp === null){
            const error = await resp;
            throw new Error(error.message); 
        }

           if (response.ok && await resp !== null ){
            const responseTree = await fetch(`http://localhost:8080/api/horsesinrace/${race_id}/${await response.json()}`, {
                method: "GET"
            });
            
            if (!responseTree.ok || await resp === null){
                const error = await responseTree.json();
                throw new Error(error.message); 
            }
        
            };
        }

    }