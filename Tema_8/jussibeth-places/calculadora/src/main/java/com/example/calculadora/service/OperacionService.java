package com.example.calculadora.service;

import java.util.List;

import com.example.calculadora.model.pojo.Operacion;
import com.example.calculadora.model.request.CreateOperacionRequest;

public interface OperacionService {

    List<Operacion> getOperaciones();

    Operacion getOperacion(String operacionId);

    Boolean removeOperacion(String operacionId);

    Operacion createOperacion(CreateOperacionRequest request);

}
