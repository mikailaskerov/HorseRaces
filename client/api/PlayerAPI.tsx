export class PlayerAPI {
    
    static async registerPlayer(name: string) {
            
                const data = {
                    name: name
                };

                const response = await fetch("http://localhost:8080/api/player", {
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
            }}