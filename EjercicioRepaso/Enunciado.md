El ejercicio consiste en crear un proyecto Front-End y Back-End para una pizzeria.

El back estara compuesto por:
- Un microservicio catalogo, que alojara informacion de pizzas e ingredientes
- Un microservicio operador, que registrara pedidos realizados en la pizzeria. Realizará peticiones sin IP ni puerto contra el microservicio catalogo para validar que las pizzas recibidas existen, además de obtener otra información como su precio a la hora de calcular el total de un pedido.
- Eureka (Configuracion estandar)
- Zuul (Configuracion estandar)

El Front, muy sencillo, estara compuesto por:
- Un componente funcional que realice una llamada al back-end para obtener todas las pizzas disponibles (siempre a traves del servidor perimetral).
- Adicionalmente, si se quiere, se puede crear un pequeño formulario que permita dar de alta un pedido nuevo (siempre a traves de zuul).

Ambos proyectos, front y back, deben estar integrados correctamente y funcionar conjuntamente.

A nivel de persistencia, se usara Elasticsearch en el microservicio catalogo y H2 en el microservicio operador.
Se debe almacenar la siguiente informacion de pizzas:
- id, nombre, precio, si esta en rebaja o no, si es vegana o no, descripcion y lista de ingredientes.
Se debe almacenar la siguiente informacion de ingredientes:
- id, nombre, descripcion, si es vegano o no.
Se debe almacenar la siguiente informacion sobre ordenes (pedidos):
- id, concepto (todas las pizzas que se piden), precio total, direccion, si esta entregado o no, si las pizzas estan ya cocinadas o no.

Las operaciones que debe soportar el microservicio catalogo son:
- Obtener todas las pizzas.
- Obtener pizzas por identificador (varios atributos de una pizza encajan como identificador, habra que elegir...).
- Obtener pizzas en base al nombre o parte de él, si estan rebajadas o no, si son veganas o no.
- Dar de alta nuevas pizzas (sera necesario que se informen todos los atributos de una pizza que tengan sentido a traves de la api). Los ingredientes deben existir y la informacion solicitada debe ser correcta.
- Actualizar los ingredientes de una pizza.
- Obtener todos los ingredientes.
- Dar de alta nuevos ingredientes (sera necesario que se informen todos los atributos de un ingrediente que tengan sentido a traves de la api).
- Actualizar los datos de un ingrediente.

Las operaciones que debe soportar el microservicio operador (pedidos) son:
- Obtener todas las ordenes realizadas.
- Dar de alta una nueva orden (Solo se necesita como entrada las pizzas del pedido y la direccion. El resto de informacion relativa al pedido la calcula el microservicio).
- Modificar los estados (procesado, entregado) de una orden.

Se pide:
- Implementacion del MS Catalogo conforme a la especificacion haciendo uso de Elasticsearch (Spring data elasticsearch)
- Implementacion del MS Operador conforme a la especificacion (cualquier comprobacion de pizza o ingrediente se hara contra el MS Catalogo a través de Eureka, es decir, sin IP ni puerto)
- Implementacion de Eureka
- Implementacion de Zuul
- Proyecto front-End donde se hagan peticiones contra el back-end a traves de zuul (NUNCA contra ningun otro MS directamente)