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
@Table(name = "horse")
public class Horse {
    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "colour")
    private String colour;

}
