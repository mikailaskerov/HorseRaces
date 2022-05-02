package com.example.races.repository;

import com.example.races.model.HorsesInRace;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HorsesInRaceRepository  extends JpaRepository<HorsesInRace, Long> {
    List<HorsesInRace> findByRaceId(int id);
}
