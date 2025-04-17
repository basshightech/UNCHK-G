package com.unchk.backend.administration.repository;

import com.unchk.backend.administration.entity.Document;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DocumentRepository extends JpaRepository<Document, Long> {}
