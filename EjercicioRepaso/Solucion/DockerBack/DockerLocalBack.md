La solución para dockerizar los 4 componentes del back-end, **tal como se indica en el pdf del tema 8 (sección 8.9) al que os referí varias veces** es la siguiente:

Comenzar realizando ``docker build .`` en cada uno de los directorios de trabajo raiz de cada componente (microservicios, eureka y zuul)

**Desplegar Eureka**
``docker run -p 8761:8761 <idImagenEureka>``

**Obtenemos IP del contenedor de Eureka para poder dar valor a las variables de entorno de los microservicios y de Zuul**

Para ello obtenemos instancias en ejecucion
``docker ps``

Obtendremos algo de este estilo:

``97e542fdc74b   09d965eca47a   "java -jar /app.jar"   26 seconds ago   Up 25 seconds   0.0.0.0:8761->8761/tcp   amazing_clarke``

Cogemos el primer valor por la izquierda, que es el ID del contenedor, y obtenemos su IP:

``docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' 97e542fdc74b``

El resultado podría ser:

``187.17.0.2``

Ahora, con esta IP, ya podemos desplegar Pizza-ms y pizza-orders-ms

**Lanzamos pizza-ms**

``docker run -p 8084:8084 --env EUREKA_URL=http://187.17.0.2:8761/eureka <idImagenPizzaMs>``

**Lanzamos pizza-orders-ms**

``docker run -p 8082:8082 --env EUREKA_URL=http://187.17.0.2:8761/eureka <idImagenPizzaOrdersMs>``

**Lanzamos Zuul**

Aqui el único "reto" a tener en cuenta era que se requería de una variable de entorno adicional, y su valor era exactamente la IP que habíamos obtenido antes.
Por tanto, se puede desplegar zuul con:

``docker run -p 8762:8762 --env EUREKA_URL=http://187.17.0.2:8761/eureka --env EUREKA_HOST=187.17.0.2 <idImagenZuul>``

**Comprobaciones**

Una vez desplegados los componentes podemos realizar peticiones a través de Zuul y Eureka como por ejemplo:

curl --location --request GET 'http://localhost:8762/ms-pizza-catalogue/pizzas'

curl --location --request POST 'http://localhost:8762/ms-pizza-orders/orders' \
--header 'Content-Type: application/json' \
--data-raw '{
    "pizzas":["carbonara", "pepperoni"],
    "address": "Rue de paradis 18"
}'

