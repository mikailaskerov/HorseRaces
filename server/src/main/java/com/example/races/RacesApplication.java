package com.example.races;

import com.example.races.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RacesApplication {

    public static void main(String[] args) {
        SpringApplication.run(RacesApplication.class, args);
    }

    @Autowired
    public PlayerRepository userRepository;

}
