package com.chess.vishxl.Service;

import com.chess.vishxl.model.Institute;
import com.chess.vishxl.repository.InstituteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InstituteService {
    
    @Autowired
    private InstituteRepository instituteRepository;

    public List<Institute> getAllInstitutes() {
        return instituteRepository.findAll();
    }

    @SuppressWarnings("null")
    public Optional<Institute> getInstituteByName(String name) {
        return instituteRepository.findById(name);
    }

    @SuppressWarnings("null")
    public Institute saveInstitute(Institute institute) {
        return instituteRepository.save(institute);
    }

    @SuppressWarnings("null")
    public void deleteInstitute(String name) {
        instituteRepository.deleteById(name);
    }
}
