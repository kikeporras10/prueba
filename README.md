# Prueba

Consiste en dos proyectos: 
  - examen-api
  - examen-front
  
# examen-api (Java 11, Spring Boot)
Expone la información contenida en un arhcivo .json mediante un servicio REST a traves del método GET

<img width="1279" alt="Screen Shot 2022-06-02 at 8 28 55 PM" src="https://user-images.githubusercontent.com/2301250/171769420-7ab88b9c-6f99-4de4-8000-db4103cae21b.png">

![Screen Shot 2022-06-02 at 8 31 55 PM](https://user-images.githubusercontent.com/2301250/171769645-917f4c0d-f6c8-4a57-acfb-3e2232fdd050.png)



# examen-front (HTML5, Bootstrap 5, JQuery)
Consume el servicio que expone el proyecto examen-api, mostrando los elementos en una lista con la siguiente información
- Id
- nombre
- Fecha de último logeo
- Calculo de tiempo de logeo en base a la fecha actual y a la última fecha de logeo.

<img width="641" alt="Screen Shot 2022-06-02 at 8 33 36 PM" src="https://user-images.githubusercontent.com/2301250/171769823-6952c792-fc6c-4036-8e09-1a531c49cddb.png">

