package com.example.races.repository;

import com.example.races.model.Bet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BetRepository extends JpaRepository<Bet, Long> {
    Bet findByPlayerIdAndRaceId(int playerId, int raceId);
    Bet findByRaceIdAndPlayerId(int raceId, int playerId);
}