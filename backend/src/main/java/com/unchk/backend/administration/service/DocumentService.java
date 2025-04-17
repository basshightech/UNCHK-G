package com.unchk.backend.administration.service;
import com.unchk.backend.administration.entity.Document;
import com.unchk.backend.administration.repository.DocumentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DocumentService {
    private final DocumentRepository repository;

    public DocumentService(DocumentRepository repository) {
        this.repository = repository;
    }

    public List<Document> getAll() { return repository.findAll(); }
    public Document save(Document d) { return repository.save(d); }
}
