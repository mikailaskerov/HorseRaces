package com.example.races.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "result")
public class Result {
    @Id
    @GeneratedValue
    private Long id;

    @Column (name = "race_id")
    private int raceId;

    @Column (name = "horse_id")
    private int horseId;
}
