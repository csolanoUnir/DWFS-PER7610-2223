package com.example.calculadora.controller;

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

import com.example.calculadora.model.pojo.Operacion;
import com.example.calculadora.model.request.CreateOperacionRequest;
import com.example.calculadora.service.OperacionService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class CalculadoraController {

    private final OperacionService service;

    @GetMapping("/test")
    public ResponseEntity<String> getTest() {
        return new ResponseEntity<String>("OK", HttpStatus.OK);
    }

    @GetMapping("/operaciones")
    public ResponseEntity<List<Operacion>> getOperaciones() {

        List<Operacion> operacion = service.getOperaciones();

        if (operacion != null) {
            return ResponseEntity.ok(operacion);
        } else {
            return new ResponseEntity<List<Operacion>>(Collections.emptyList(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/operaciones/{idOperacion}")
    public ResponseEntity<Operacion> getOperaciones(@PathVariable String idOperacion) {

        Operacion operacion = service.getOperacion(idOperacion);

        if (operacion != null) {
            return ResponseEntity.ok(operacion);
        } else {
            return new ResponseEntity<Operacion>(HttpStatus.BAD_REQUEST);
        }

    }

    @DeleteMapping("/operaciones/{idOperacion}")
    public ResponseEntity<Void> deleteOperacion(@PathVariable String idOperacion) {

        Boolean removed = service.removeOperacion(idOperacion);

        if (Boolean.TRUE.equals(removed)) {
            return ResponseEntity.ok().build();
        } else {
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        }

    }

    @PostMapping("/operaciones")
    public ResponseEntity<Operacion> getOperacion(@RequestBody CreateOperacionRequest request) {

        Operacion createdOperacion = service.createOperacion(request);

        if (createdOperacion != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(createdOperacion);
        } else {
            return new ResponseEntity<Operacion>(HttpStatus.BAD_REQUEST);
        }

    }

}
