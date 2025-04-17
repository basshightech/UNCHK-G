package com.unchk.backend.etudiant.service;

import com.unchk.backend.etudiant.entity.Etudiant;
import com.unchk.backend.etudiant.repository.EtudiantRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EtudiantService {
    private final EtudiantRepository repository;

    public EtudiantService(EtudiantRepository repository) {
        this.repository = repository;
    }

    public List<Etudiant> getAll() { return repository.findAll(); }
    public Etudiant save(Etudiant e) { return repository.save(e); }
}
