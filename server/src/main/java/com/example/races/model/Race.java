package com.example.races.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "race")
public class Race {
    @Id
    @GeneratedValue
    private Long id;

    @Column (name = "date")
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date date;

    @Column (name = "place")
    private String place;
}
