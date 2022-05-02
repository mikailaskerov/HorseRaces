package com.example.races.controller;
import com.example.races.model.*;
import com.example.races.service.RaceService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/api")
public class RaceController {

    public final RaceService raceService;

    @PostMapping("/player")
    public void userRegistration(@RequestBody Player user){
        raceService.addUser(user);
    }

    @GetMapping("/player")
    public List<Player> getUsers() {
        return raceService.getUsers();
    }

    @PostMapping("/player/find")
    public Long userFind(@RequestBody String name){
        var player = raceService.findPlayer(name);
        return player.getId();
    }

    @PostMapping("/race")
    public void raceRegistration(@RequestBody Race race){
        raceService.addRace(race);
    }

    @PostMapping("/horse")
    public void horseRegistration(@RequestBody Horse horse){
        raceService.addHorse(horse);
    }

    @PostMapping("/bet")
    public void betRegistration(@RequestBody Bet bet){
        raceService.addBet(bet);
    }

    @PostMapping("/result")
    public void resultRegistration(@RequestBody Result result){
        raceService.addResult(result);
    }

    @PostMapping("/horsesinrace")
    public void horsesInRaceRegistration(@RequestBody HorsesInRace horsesInRace){
        raceService.addHorseInRace(horsesInRace);
    }

    @PostMapping("/horsesinrace/find")
    public  List<HorsesInRace> horseInRaceList(@RequestBody int id){
        List<HorsesInRace> horsesInRace;
        return horsesInRace = raceService.horseInRaceList(id);
    }
}
