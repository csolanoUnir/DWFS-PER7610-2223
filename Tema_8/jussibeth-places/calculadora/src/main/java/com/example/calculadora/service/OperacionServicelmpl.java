package com.example.calculadora.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Objects;
import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.example.calculadora.data.OperacionRepository;
import com.example.calculadora.model.pojo.Operacion;
import com.example.calculadora.model.request.CreateOperacionRequest;

@Service
public class OperacionServicelmpl implements OperacionService {

    @Autowired
    private OperacionRepository repository;

    @Override
    public List<Operacion> getOperaciones() {

        List<Operacion> operaciones = repository.findAll();
        return operaciones.isEmpty() ? null : operaciones;
    }

    @Override
    public Operacion getOperacion(String operacionId) {
        return repository.findById(Long.valueOf(operacionId)).orElse(null);
    }

    @Override
    public Boolean removeOperacion(String operacionId) {

        Operacion operacion = repository.findById(Long.valueOf(operacionId)).orElse(null);

        if (operacion != null) {
            repository.delete(operacion);
            return Boolean.TRUE;
        } else {
            return Boolean.FALSE;
        }
    }

    public double sumar(List valores) {
        double resultado = 0;
        for (Object numero : valores) {
            resultado = resultado +  Double.parseDouble((String) numero);
        }
        return resultado;
    }

    public double restar(List valores) {
        double resultado = 0;
        for (Object numero : valores) {
            resultado = resultado -  Double.parseDouble((String) numero);
        }
        return resultado;
    }

    public double multiplicar(double numero1, double numero2) {
        return numero1 * numero2;
    }

    public double dividir(double numero1, double numero2) throws Exception {
        if (numero2 == 0){
            throw new ArithmeticException("/ por cero");
        }
        return numero1 / numero2;
    }

    public double potencia(double nesima, double numero){
        return Math.pow(numero,nesima);
    }

    public double raiz(double nesima, double numero){
        double resultado = Math.pow(numero, 1.0/nesima);
       return resultado;
    }
    @Override
    public Operacion createOperacion(CreateOperacionRequest request) {
        if (request != null && StringUtils.hasLength(request.getType().trim())
                && StringUtils.hasLength(request.getValores().trim())) {
            if(request.getType().trim().equals("suma")){
                OperacionServicelmpl operacionsuma = new OperacionServicelmpl();
                String[] arregloCadena = request.getValores().split(", ");
                double resultado = operacionsuma.sumar(List.of(arregloCadena));
                Operacion operacion = Operacion.builder().type(request.getType()).resultado(resultado)
                        .valores(request.getValores()).build();
                return repository.save(operacion);
            }
            if(request.getType().trim().equals("resta")){
                OperacionServicelmpl operacionresta = new OperacionServicelmpl();
                String[] arregloCadena = request.getValores().split(", ");
                double resultado = operacionresta.restar(List.of(arregloCadena));
                Operacion operacion = Operacion.builder().type(request.getType()).resultado(resultado)
                        .valores(request.getValores()).build();
                return repository.save(operacion);
            }
            if(request.getType().trim().equals("multiplica")){
                OperacionServicelmpl operacionmultiplica = new OperacionServicelmpl();
                String[] arregloCadena = request.getValores().split(", ");
                List<String> listaModificable = new ArrayList<>(List.of(arregloCadena));
                String numero1 = "0";
                String numero2 = "0";
                numero1= listaModificable.get(0);
                numero2= listaModificable.get(1);
                double resultado = operacionmultiplica.multiplicar(Double.parseDouble(numero1),Double.parseDouble(numero2));
                Operacion operacion = Operacion.builder().type(request.getType()).resultado(resultado)
                        .valores(request.getValores()).build();
                return repository.save(operacion);
            }

            if(request.getType().trim().equals("divide")){
                OperacionServicelmpl operaciondividir = new OperacionServicelmpl();
                String[] arregloCadena = request.getValores().split(", ");
                List<String> listaModificable = new ArrayList<>(List.of(arregloCadena));
                String numero1 = "0";
                String numero2 = "0";
                numero1= listaModificable.get(0);
                numero2= listaModificable.get(1);
                try {
                    double resultado = operaciondividir.dividir(Double.parseDouble(numero1),Double.parseDouble(numero2));
                    Operacion operacion = Operacion.builder().type(request.getType()).resultado(resultado)
                            .valores(request.getValores()).build();
                    return repository.save(operacion);
                }
                catch (Exception ex)
                {
                }

            }
            if(request.getType().trim().equals("potencia")){
                OperacionServicelmpl operacionpotencia = new OperacionServicelmpl();
                String[] arregloCadena = request.getValores().split(", ");
                List<String> listaModificable = new ArrayList<>(List.of(arregloCadena));
                String numero1 = "0";
                String numero2 = "0";
                numero1= listaModificable.get(0);
                numero2= listaModificable.get(1);
                double resultado = operacionpotencia.potencia(Double.parseDouble(numero1),Double.parseDouble(numero2));
                Operacion operacion = Operacion.builder().type(request.getType()).resultado(resultado)
                        .valores(request.getValores()).build();
                return repository.save(operacion);
            }

            if(request.getType().trim().equals("raiz")){
                OperacionServicelmpl operacionraiz = new OperacionServicelmpl();
                String[] arregloCadena = request.getValores().split(", ");
                List<String> listaModificable = new ArrayList<>(List.of(arregloCadena));
                String numero1 = "0";
                String numero2 = "0";
                numero1= listaModificable.get(0);
                numero2= listaModificable.get(1);
                double resultado = operacionraiz.raiz(Double.parseDouble(numero1),Double.parseDouble(numero2));
                Operacion operacion = Operacion.builder().type(request.getType()).resultado(resultado)
                        .valores(request.getValores()).build();
                return repository.save(operacion);
            }
        } else {
            return null;
        }
        return null;
    }

}
