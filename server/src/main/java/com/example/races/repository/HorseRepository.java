package com.example.races.repository;

import com.example.races.model.Horse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface HorseRepository extends JpaRepository<Horse, Long> {
    Optional<Horse> findByColour(String colour);
}
