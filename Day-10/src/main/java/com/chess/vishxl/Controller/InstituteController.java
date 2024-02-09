package com.chess.vishxl.Controller;

import com.chess.vishxl.model.Institute;
import com.chess.vishxl.Service.InstituteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/institutes")
public class InstituteController {

    @Autowired
    private InstituteService instituteService;

    @GetMapping
    public List<Institute> getAllInstitutes() {
        return instituteService.getAllInstitutes();
    }

    @GetMapping("/{name}")
    public Optional<Institute> getInstituteByName(@PathVariable String name) {
        return instituteService.getInstituteByName(name);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public Institute saveInstitute(@RequestBody Institute institute) {
        return instituteService.saveInstitute(institute);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{name}")
    public void deleteInstitute(@PathVariable String name) {
        instituteService.deleteInstitute(name);
    }
}

