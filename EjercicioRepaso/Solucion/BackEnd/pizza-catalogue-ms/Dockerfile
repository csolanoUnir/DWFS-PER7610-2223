FROM openjdk:11
EXPOSE 8084
VOLUME /tmp
COPY target/pizza-ms-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]