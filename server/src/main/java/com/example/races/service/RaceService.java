package com.example.races.service;

import com.example.races.model.*;
import com.example.races.repository.*;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

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
        var player = playerRepository.findByName(user.getName());
        if(player.isPresent()){
            throw new RuntimeException("Player is already exsist!");
        }
        playerRepository.save(user);
    }

    public List<Player> getUsers() {
        return playerRepository.findAll();
    }

    public void addRace(Race race){
        raceRepository.save(race);
    }

    public void addHorse(Horse horse){
        var horsee = horseRepository.findByColour(horse.getColour());
        if(horsee.isPresent()){
            throw new RuntimeException("Colour is already exsist!");
        }
        horseRepository.save(horse);
    }

    public void addBet(Bet bet){
        betRepository.save(bet);
    }

    public void addResult(Result result){
        resultRepository.save(result);
    }

    public void addHorseInRace( int raceId, int horseId){

        var horseInRacee = horsesInRaceRepository.findByRaceIdAndHorseId(raceId, horseId);
        if(horseInRacee.isPresent()){
            throw new RuntimeException("This horse is already in the race!");
        }
        HorsesInRace horse = new HorsesInRace();
                horse.setRaceId(raceId);
                horse.setHorseId(horseId);
        horsesInRaceRepository.save(horse);
    }
    public Optional<Player> findPlayer(String name){
        return playerRepository.findByName(name);
    }

    public Optional<Horse> findHorse(String colour){
        return  horseRepository.findByColour(colour);
    }

    public Optional<HorsesInRace> findHorsesInRace(int raceId, int horseId){
        return horsesInRaceRepository.findByRaceIdAndHorseId(raceId, horseId);
    }
    public Bet findBet(int playerId, int raceId){
        return betRepository.findByPlayerIdAndRaceId(playerId, raceId);
    }

    public String startRace(int id){
        List<HorsesInRace> horseInRace = horsesInRaceRepository.findByRaceId(id);
        int random = (int) (Math.random() * horseInRace.size());
        HorsesInRace horse = horseInRace.get(random);
        Result winner = new Result();
        winner.setHorseId(horse.getHorseId());
        winner.setRaceId(horse.getRaceId());
        resultRepository.save(winner);
        Optional<Horse> colour = horseRepository.findById((long) winner.getHorseId ());
        Horse horseColour = colour.get();
        String result = horseColour.getColour();
        return result;
    }

    public String findResult(int id){
        Long result = (long) resultRepository.findByRaceId(id).getHorseId();
        Optional<Horse> horse = horseRepository.findById(result);
        return horse.get().getColour();
    }

    public String checkBet(int raceId,  int playerId){
        Bet players = betRepository.findByRaceIdAndPlayerId(raceId, playerId);
        Result result = resultRepository.findByRaceIdAndHorseId(raceId, players.getHorseId());
        String resultTwo = "";
        if (players.getRaceId() == result.getRaceId() && players.getHorseId() == result.getHorseId()){
            Optional<Player> player = playerRepository.findById((long) players.getPlayerId());
            Player name = player.get();
            resultTwo = name.getName();
        }
        return resultTwo;
    }
    public Optional<Race> findRace(int raceId){
        return raceRepository.findById(Long.valueOf(raceId));
    }

}
