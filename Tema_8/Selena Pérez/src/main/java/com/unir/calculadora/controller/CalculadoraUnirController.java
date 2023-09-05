package com.unir.calculadora.controller;

import java.util.Collections;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.unir.calculadora.model.request.CrearOperacionesRequest;
import com.unir.calculadora.model.slpm.Operaciones;
import com.unir.calculadora.service.OperacionesService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class CalculadoraUnirController {

    private final OperacionesService service;
    @GetMapping("/test")
    public ResponseEntity<String> getTest() {
        return new ResponseEntity<>("Conexión Correcta", HttpStatus.OK);
    }

    @GetMapping("/operaciones")
    public ResponseEntity<List<Operaciones>> getOperaciones() {
        List<Operaciones> operacion = service.getOperaciones();
        if (operacion != null) {
            return ResponseEntity.ok(operacion);
        } else {
            return new ResponseEntity<>(Collections.emptyList(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/operaciones/{idOperacion}")
    public ResponseEntity<Operaciones> getOperaciones(@PathVariable String idOperacion) {
        Operaciones operacion = service.getOperacion(idOperacion);
        if (operacion != null) {
            return ResponseEntity.ok(operacion);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/operaciones/{idOperacion}")
    public ResponseEntity<Void> deleteOperacion(@PathVariable String idOperacion) {
        Boolean removed = service.removeOperacion(idOperacion);
        if (Boolean.TRUE.equals(removed)) {
            return ResponseEntity.ok().build();
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    
    @PostMapping("/operaciones")
    public ResponseEntity<Operaciones> getOperacion(@RequestBody CrearOperacionesRequest request) {
        Operaciones createdOperacion = service.createOperacion(request);
        if (createdOperacion != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(createdOperacion);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}