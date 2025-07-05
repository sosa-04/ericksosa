---
---
# Infraestructura de un Ecommerce con Azure

## Escenario

Una empresa de comercio electrónico en crecimiento busca una infraestructura
escalable y robusta en la nube para gestionar sus operaciones de venta en línea.
La plataforma debe soportar un alto volumen de transacciones, proporcionar una
experiencia de usuario fluida a través de un portal principal, permitir la gestión
interna de productos y pedidos mediante un portal de backoffice, y ofrecer
capacidades analíticas avanzadas sobre los datos de ventas para la toma de
decisiones estratégicas.

Además, la plataforma debe ser capaz de manejar tareas intensivas o que no
requieren una respuesta inmediata al usuario de forma eficiente en segundo
plano, asegurando que la experiencia del usuario no se vea afectada por
procesos de larga duración, como la confirmación de pedidos, la actualización de
inventarios complejos o la generación de notificaciones masivas.
El objetivo es que cada equipo diseñe, justifique e implemente esta infraestructura
utilizando servicios de la nube de Azure.

### Diagrama de la Arquitectura Propuesta

![digrama infraestructura](/public/images/proyecto/diagrama.png)

Esta arquitectura propuesta nos permite realizar desde actividades poco exigentes hasta las más exigentes, esto gracias a la combinación de distintos elementos de la nube de Azure. Permitiendole a la empresa poder gestionar sus operaciones de una excelente forma y dandole la oportunidad de tener reportes avanzados sobre los datos que venta que le ayudan a tomar mejores desciciones. Ademas, permite que el usuario tenga una experiencia fluida en el portal gracias a que se trabaja con una SSR y elementos que permiten ejecutar tareas intensivas en segundo plano.

## Elementos

* **Frontoffice:** Para esta parte del sistema se está utilizando un app service donde se aloja una ssr junto con la api para minimizar la latencia, esto unido con un quee storage y una function app ayuda a la confirmacion de pedidos en segundo plano. Todo esto se encuentra conecto con la base de datos transaccional, garantizando de esta forma una experiencia fluida por parte del usuario.
* **Backoffice:** En el backoofice se esta trabajando con dos app service, uno aloja la spa y el otra la api, esto tambien se conecta con un blob storage para el manejo de archivos estaticos. Para la gestion de inventarios complejos y la generacion de notificaciones esto se encuentra conectado con un quee storage y una function app que realiza todas estas tareas en segundo plano, esto esta conectado la base de datos transaccional. Tambien se incluye una conexion con power BI embedded para la generacion de reportes directamente desde la plataforma.
* **Reportes:** Para la generacion de reportes en primer elemento con el que nos encontramos es con una herramienta ETL alojada un una function app que se encarge de estraer los datos de la base de datos transaccional, transformarlos y cargarlos en el data warehouse y para la generacion de reportes se ha conectado un instancia de power BI embedded.

## Evidencias de Despliegue

**Frontffice:** Aquí se muestra la salida del apply en terraform para elementos del frontoffice.

![backoffice](/public/images/proyecto/frontoffice.png)

**Backoffice:**  Aquí se muestra la salida del apply en terraform para elementos del backoffice.

![backoffice](/public/images/proyecto/backOffice.png)

**Analítica:**  Aquí se muestra la salida del apply en terraform para la function que almacenara el ETL.

![backoffice](/public/images/proyecto/analitica.png)

**Functions:**  Aquí se muestra la salida del apply en terraform para las base de datos transaccional y los elementos para ejecución de tareas en segundo plano.

![backoffice](/public/images/proyecto/functions.png)

**Backoffice:**  Se muestran todos los elementos desde el panel de administración de Azure.

![backoffice](/public/images/proyecto/elementosAzure.png)

**DB:**  Se muestra la conexión a la base de datos trasaccional y al data warehouse.

![backoffice](/public/images/proyecto/dbTransaccional.png)

![backoffice](/public/images/proyecto/dwh.png)

## Conclusiones

* Diseñar esta infraestructura fue muy interesante porque me hizo ver todo lo que hay detras de una plataforma y como la desciociones que se toman en el diseño de la infraestructura repercuten directamente en el rendimiendo, por lo que para garantizar un correcto funcionamiento hay que analizar cada detalle y siempre tener en cuenta el factor costo.

* Separar los la infraestructura representó un reto porque es necesario analizar como los distintos elementos se interconectan y en base a esto tomar la descición de los elementos que iban a alojar en cada repositorio. Es por eso que en el repositorio de las functions se colocaron todos los elementos que se comparten entre en frontoffice y el backoffice y los respectivos repositorios para el frontoffice y el bacoffice. En el repositorio del backoffice tambien se colocaron los elementos para la analítica.

**Repositorio Frontoffice:** https://github.com/sosa-04/terraform_frontoffice

**Repositorio Backoffice:** https://github.com/sosa-04/terraform_backoffice

**Repositorio Functions:** https://github.com/sosa-04/terraform_functions

### Tareas en Segundo Plano

Para el prosesamiento asíncrono de tareas en segundo plano se combinaron dos elementos, el quee storage y una function app. El quee storage nos permite manejar una cola con tadas las tareas que se deben de ejecutar y un serverless se encarga de ir tomando y ejecutando las tareas de la cola.

### Elementos Para la Analítica

Para realizar un buen análisis es importante desechar datos sin valor y enfocarse en los que si lo tienen, para garantizar esto existen dos elementos super importantes, las herramientas ETL y un Data Warehouse. Las herramientas ETL ayudan a poder extraer datos desde la base de datos transaccional luego prosede a transformarlos dejando solo datos importantes y finalmente los carga en el Data Warehouse que es la base de datos a la cual nos conectaremos para poder generar los distintos reportes que ayudan a toma de desciciones. 
