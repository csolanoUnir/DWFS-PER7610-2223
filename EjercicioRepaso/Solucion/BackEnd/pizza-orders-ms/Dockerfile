FROM openjdk:11
EXPOSE 8082
VOLUME /tmp
COPY target/pizza-orders-ms-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]