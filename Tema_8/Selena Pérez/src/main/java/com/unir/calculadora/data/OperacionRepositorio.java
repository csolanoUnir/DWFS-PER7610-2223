package com.unir.calculadora.data;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.unir.calculadora.model.slpm.Operaciones;

public interface OperacionRepositorio extends JpaRepository<Operaciones, Long> {

    List<Operaciones> findByType(String type);
}
