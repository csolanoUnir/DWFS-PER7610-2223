package com.example.calculadora.data;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.calculadora.model.pojo.Operacion;

public interface OperacionRepository extends JpaRepository<Operacion, Long> {

    List<Operacion> findByType(String type);
}
