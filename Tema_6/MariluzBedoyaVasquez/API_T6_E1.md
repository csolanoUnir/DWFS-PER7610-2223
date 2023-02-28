- Nombre y descripción de los recursos identificados.
- API REST donde se indiquen las diferentes operaciones que ofrece la interfaz. Para cada operación será necesario indicar su método HTTP, endpoint, cuerpo (en caso de necesitarlo, con ejemplo) y códigos de respuesta HTTP posibles. Puedes servirte de la siguiente tabla:

- Recursos Identificados:
    usuario
    partidas
    barcos
    disparos
    tablero
    jugadores 
 
| Método HTTP  | URI                                    | Body            | Respuesta                |
| -------------| -------------------------------------- | -------------   | -------------------------|
| POST         | /usuario/registrar                     | { nombre="Mari", email="prueba@gmail.com, password="1234" }   |  201 OK, 400 Bad Request |
| GET          | /usuario/{id}                          | N/A             | 200 OK, 404 Not Found
| GET          | /usuario/ ?nombre?email                  |                | 200 OK, 404 Not Found
| DELETE       | /usuario/{id}                          |                 | 200 OK, 404 Not Found
| POST         | /partidas/partida                      | { jugador1="", jugador2="", fecha="", tablero="", duracion="" } | 201 OK, 400 Bad Request |
| DELETE       | /partidas/partida/{id}                 | N/A | 200 OK, 404 Not Found
| PUT          | /partidas/partida/{id}                 | { jugador1="",jugador2="", fecha="", tablero="", duracion="" }  | 201 OK, 400 Bad Request |
| GET          | /partidas/partida/{id}                 | N/A  | 200 OK, 404 Not Found
| POST         | /partidas/partida/{id}/barco           | { coordenadas=[x,y], cantidad_cuadrados=2, tablero=1} | 201 OK, 400 Bad Request |
| DELETE       | /partidas/partida/{id}/barco/{id}      | N/A | 200 OK, 404 Not Found
| GET          | /partidas/partida/{id}/barco           | N/A  | 200 OK, 404 Not Found
| POST         | /partidas/partida/{id}/disparo         | { jugador="", coordenadas=[x,y], tablero=""} |  201 OK, 400 Bad Request |

