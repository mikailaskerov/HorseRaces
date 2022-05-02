import React, { useState } from 'react';
import axios from 'axios';
export function Player(){
    const [player, setPlayer] = useState(null);
    
    const apiURL = "http://localhost:3000/api/player";

    const fetchData = async () => {
        const response = await axios.get(apiURL)

        setPlayer(response.data) 
    }

    return (
        <div className="Player">
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
      </div>

      {}
      <div className="players">
        // Данные из API будут тут
            </div>

    </div>
    )
}
    export default Player;