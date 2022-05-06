package com.example.races.controller;
import com.example.races.model.*;
import com.example.races.service.RaceService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@CrossOrigin(origins = {"http://localhost:1234"})
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
        Optional<Player> player = raceService.findPlayer(name);
        return player.get().getId();
    }

    @PostMapping("/race")
    public Long raceRegistration(@RequestBody Race race){
        raceService.addRace(race);
        return race.getId();
    }

    @PostMapping("/horse")
    public void horseRegistration(@RequestBody Horse horse){
        raceService.addHorse(horse);
    }

    @PostMapping("/horse/find")
    public Long horseFind(@RequestBody String colour){
        Optional<Horse> horse = raceService.findHorse(colour);
        return horse.get().getId();
    }

    @PostMapping("/bet")
    public void betRegistration(@RequestBody Bet bet){
        raceService.addBet(bet);
    }

    @PostMapping("/result")
    public void resultRegistration(@RequestBody Result result){
        raceService.addResult(result);
    }

    @GetMapping("/horsesinrace/{raceId}/{horseId}")
    public void horsesInRaceRegistration(@PathVariable Integer raceId, @PathVariable Integer horseId){
        raceService.addHorseInRace(raceId, horseId);
    }

    @GetMapping("horsesinrace/find/{raceId}/{horseId}")
    public Long horseInRaceFind(@PathVariable Integer raceId, @PathVariable Integer horseId){
        Optional<HorsesInRace> horsesInRace = raceService.findHorsesInRace(raceId, horseId);
        return horsesInRace.get().getId();
    }

    @GetMapping("bet/find/{playerId}/{raceId}")
    public Long betFind(@PathVariable Integer playerId, @PathVariable Integer raceId){
        Bet bet = raceService.findBet(playerId, raceId);
        return bet.getId();
    }

    @PostMapping("/race/start")
    public String horseInRaceList(@RequestBody int id){
        return raceService.startRace(id);
    }

    @PostMapping("/result/find")
    public String resultFind(@RequestBody Integer id){
        return raceService.findResult(id);
    }

    @PostMapping("/race/find")
    public Optional<Race> raceFind(@RequestBody Integer id){
        return raceService.findRace(id);
    }

    @GetMapping("bet/check/{raceId}/{playerId}")
    public String betCheck(@PathVariable Integer raceId, @PathVariable Integer playerId){
        return raceService.checkBet(raceId, playerId);
    }
}