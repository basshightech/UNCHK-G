package com.unchk.backend.etudiant.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.util.Date;

@Entity
@Data
public class Etudiant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String ine;
    private String nom;
    private String prenom;
    private Date dateNaissance;
    private String formation;
    private String promo;
    private int anneeDebut;
    private int anneeSortie;
    private String diplomes;
    private String autresFormations;
}
