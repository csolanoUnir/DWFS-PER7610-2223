package com.unir.calculadora.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.unir.calculadora.data.OperacionRepositorio;
import com.unir.calculadora.model.request.CrearOperacionesRequest;
import com.unir.calculadora.model.slpm.Operaciones;
@Service
public class OperacionesServiceUnir implements OperacionesService {

    @Autowired
    private OperacionRepositorio repository;

    @Override
    public List<Operaciones> getOperaciones() {

        List<Operaciones> operaciones = repository.findAll();
        return operaciones.isEmpty() ? null : operaciones;
    }

    @Override
    public Operaciones getOperacion(String operacionId) {
        return repository.findById(Long.valueOf(operacionId)).orElse(null);
    }

    @Override
    public Boolean removeOperacion(String operacionId) {

        Operaciones operacion = repository.findById(Long.valueOf(operacionId)).orElse(null);

        if (operacion != null) {
            repository.delete(operacion);
            return Boolean.TRUE;
        } else {
            return Boolean.FALSE;
        }
    }

    private double sumar(List valores) {
        double resultado = 0;
        for (Object numero : valores) {
            resultado = resultado +  Double.parseDouble((String) numero);
        }
        return resultado;
    }

    private double restar(List valores) {
        double resultado = 0;
        for (Object numero : valores) {
            resultado = resultado -  Double.parseDouble((String) numero);
        }
        return resultado;
    }

    private double multiplicar(double numero1, double numero2) {
        return numero1 * numero2;
    }

    private double dividir(double numero1, double numero2) throws Exception {
        if (numero2 == 0){
            throw new ArithmeticException("/ por cero");
        }
        return numero1 / numero2;
    }

    private double potencia(double nesima, double numero){
        return Math.pow(numero,nesima);
    }

    private double raiz(double nesima, double numero){
        double resultado = Math.pow(numero, 1.0/nesima);
       return resultado;
    }
    @Override
    public Operaciones createOperacion(CrearOperacionesRequest request) {
        if (request != null && StringUtils.hasLength(request.getType().trim())
                && StringUtils.hasLength(request.getValores().trim())) {
            if(request.getType().trim().equals("suma")){
                OperacionesServiceUnir operacionsuma = new OperacionesServiceUnir();
                String[] arregloCadena = request.getValores().split(", ");
                double resultado = operacionsuma.sumar(List.of(arregloCadena));
                Operaciones operacion = Operaciones.builder().type(request.getType()).resultado(resultado)
                        .valores(request.getValores()).build();
                return repository.save(operacion);
            }
            if(request.getType().trim().equals("resta")){
                OperacionesServiceUnir operacionresta = new OperacionesServiceUnir();
                String[] arregloCadena = request.getValores().split(", ");
                double resultado = operacionresta.restar(List.of(arregloCadena));
                Operaciones operacion = Operaciones.builder().type(request.getType()).resultado(resultado)
                        .valores(request.getValores()).build();
                return repository.save(operacion);
            }
            if(request.getType().trim().equals("multiplica")){
                OperacionesServiceUnir operacionmultiplica = new OperacionesServiceUnir();
                String[] arregloCadena = request.getValores().split(", ");
                double resultado = operacionmultiplica.multiplicar(Double.parseDouble(arregloCadena[0]),Double.parseDouble(arregloCadena[1]));
                Operaciones operacion = Operaciones.builder().type(request.getType()).resultado(resultado)
                        .valores(request.getValores()).build();
                return repository.save(operacion);
            }

            if(request.getType().trim().equals("divide")){
                OperacionesServiceUnir operaciondividir = new OperacionesServiceUnir();
                String[] arregloCadena = request.getValores().split(", ");
                try {
                    double resultado = operaciondividir.dividir(Double.parseDouble(arregloCadena[0]),Double.parseDouble(arregloCadena[1]));
                    Operaciones operacion = Operaciones.builder().type(request.getType()).resultado(resultado)
                            .valores(request.getValores()).build();
                    return repository.save(operacion);
                }
                catch (Exception ex)
                {
                }

            }
            if(request.getType().trim().equals("potencia")){
                OperacionesServiceUnir operacionpotencia = new OperacionesServiceUnir();
                String[] arregloCadena = request.getValores().split(", ");
                double resultado = operacionpotencia.potencia(Double.parseDouble(arregloCadena[0]),Double.parseDouble(arregloCadena[1]));
                Operaciones operacion = Operaciones.builder().type(request.getType()).resultado(resultado)
                        .valores(request.getValores()).build();
                return repository.save(operacion);
            }

            if(request.getType().trim().equals("raiz")){
                OperacionesServiceUnir operacionraiz = new OperacionesServiceUnir();
                String[] arregloCadena = request.getValores().split(", ");
                double resultado = operacionraiz.raiz(Double.parseDouble(arregloCadena[0]),Double.parseDouble(arregloCadena[1]));
                Operaciones operacion = Operaciones.builder().type(request.getType()).resultado(resultado)
                        .valores(request.getValores()).build();
                return repository.save(operacion);
            }
        } else {
            return null;
        }
        return null;
    }

}
