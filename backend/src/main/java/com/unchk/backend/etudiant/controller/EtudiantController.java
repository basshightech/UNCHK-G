package com.unchk.backend.etudiant.controller;

import com.unchk.backend.etudiant.entity.Etudiant;
import com.unchk.backend.etudiant.service.EtudiantService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/etudiants")
public class EtudiantController {
    private final EtudiantService service;

    public EtudiantController(EtudiantService service) {
        this.service = service;
    }

    @GetMapping
    public List<Etudiant> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Etudiant create(@RequestBody Etudiant e) {
        return service.save(e);
    }
}
