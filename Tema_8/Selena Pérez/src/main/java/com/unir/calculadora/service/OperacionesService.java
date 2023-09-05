package com.unir.calculadora.service;

import java.util.List;

import com.unir.calculadora.model.request.CrearOperacionesRequest;
import com.unir.calculadora.model.slpm.Operaciones;

public interface OperacionesService {

    List<Operaciones> getOperaciones();
    Operaciones getOperacion(String operacionId);
    Boolean removeOperacion(String operacionId);
    Operaciones createOperacion(CrearOperacionesRequest request);

}
