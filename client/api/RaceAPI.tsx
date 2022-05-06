export class RaceAPI {
    
    static async registerRace( date: Date, place: string ): Promise<any> {
                const data = {
                    date: date,
                    place: place
                };
                const response = await fetch("http://localhost:8080/api/race", {
                method: "POST",
                body: JSON.stringify(data),
                headers : {
                'Content-Type': 'application/json'
            }});
            
            return await response.json();
    }

    static async startRace( raceId: string ): Promise<any> {
        const response = await fetch("http://localhost:8080/api/result/find", {
            method: "POST",
            body: JSON.stringify(raceId),
            headers : {
            'Content-Type': 'application/json'
        }});
        if (response.ok) {
            return await response.text();
        }
        
        if (!response.ok){
        const responseTwo = await fetch("http://localhost:8080/api/race/start", {
            method: "POST",
            body: JSON.stringify(raceId),
            headers : {
            'Content-Type': 'application/json'
        }});
        if (!responseTwo.ok) {
            const error = await response.json();
            throw new Error(error.message);
    }
    
    return await responseTwo.text();
}}
}
