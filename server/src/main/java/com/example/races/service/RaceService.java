package com.example.races.service;

import com.example.races.model.*;
import com.example.races.repository.*;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class RaceService {
    private final HorseRepository horseRepository;
    private final PlayerRepository playerRepository;
    private final RaceRepository raceRepository;
    private final BetRepository betRepository;
    private final ResultRepository resultRepository;
    private final HorsesInRaceRepository horsesInRaceRepository;

    public void addUser(Player user){
        playerRepository.save(user);
    }

    public List<Player> getUsers() {
        return playerRepository.findAll();
    }

    public void addRace(Race race){
        raceRepository.save(race);
    }

    public void addHorse(Horse horse){
        horseRepository.save(horse);
    }

    public void addBet(Bet bet){
        betRepository.save(bet);
    }

    public void addResult(Result result){
        resultRepository.save(result);
    }

    public void addHorseInRace(HorsesInRace horsesInRace){
        horsesInRaceRepository.save(horsesInRace);
    }

    public Player findPlayer(String user){
        return playerRepository.findByName(user);
    }

    public List<HorsesInRace> horseInRaceList(int raceId){
        return horsesInRaceRepository.findByRaceId(raceId);
    }
}
