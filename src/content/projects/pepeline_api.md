# Creacion de Pepeline de Datos y API con Caché Inteligente

Este proyecto tiene como objetivo realizar la migración de una gran cantidad de datos mediante procesos ETL y desarrollar una API que permita interactuar con esos datos, esta API será desplegada en un entorno de nube productivo. Lugo se implementará un sistema de monitoreo que nos ayudará para poder analizar el rendimiento de nuestra API.

### Diagrama de la Arquitectura Utilizada
![digrama infraestructura](/images/proyecto/diagramaAPI.png)

## Migración de Datos

Para la migración de datos se utilizó un Azure Data Factory, aquie se creó un pepeline que fue el que nos ayudó a mover una gran cantidad de datos desde un dataset hasta nuestra base de datos.

## API

Para el desarrollo de la API se utilizo fastAPI con python. En este desarrollo iniciamos creando los endpoints de signup y login, para manegar esta autenticación de usuarios se implementó firebase. Luego se creó el endpoint para obtener el catálogo y para mejorar tiempo de respuesta se implementó un chaché de redis, esta caché nos ayuda mejorar los tiempos de respuesta al usuario. Finalmente se cre un endpint para agregar una nueva canción al catálogo, este endpoint cuenta con algunas validaciones que nos ayudan a garantizar que quien lo conseme si tenga los permisos necesarios.

##  Application Insights

Gracias al servicio de Aplication Insights de Azure se puede hacer un monitoreo del rendimiento de las APIS, aquí se pudo observar que al consumir el endpoint para obtener catálogo la primera vez era bastante mas lenta, pero ya el resto de peticiones si tenian una reduccion en el tiempo de espera.

![digrama infraestructura](/images/proyecto/rendimiento.png)

## Repositorios

**Repositorio API:** https://github.com/sosa-04/apiCanciones

**Repositorio Terraform:** https://github.com/sosa-04/terraformApiCanciones