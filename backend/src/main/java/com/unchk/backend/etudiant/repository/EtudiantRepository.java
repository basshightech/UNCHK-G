package com.unchk.backend.etudiant.repository;

import com.unchk.backend.etudiant.entity.Etudiant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EtudiantRepository extends JpaRepository<Etudiant, Long> {}
