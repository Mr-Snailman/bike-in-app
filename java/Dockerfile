FROM openjdk:11-jdk-slim
RUN mkdir /app
ENV profile "default"
WORKDIR /app
EXPOSE 8080
ENTRYPOINT java -Dspring.profiles.active=${profile} -jar bike-in-app.jar ${args}
COPY ./target/bike-in-app.jar /app
