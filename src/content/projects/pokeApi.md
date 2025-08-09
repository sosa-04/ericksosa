# Evolucion Genarador de Reportes

Este proyecto tiene como objetivo implementar tanto frontend como backend para poder generar reportes mediante Azure Functions para que sean procesos en segundo plano, para la obtencion de informacion se utilizó la PokeApi, 

## Funcionalidades implementadas

Se implemento la funcion para poder eliminar un reporte, esto hace la eliminación del registro en la base de datos y a la vez elimina el csv correspondiente del blob storage.

## Retos

El mayor reto fue la creación y despliegue de la function porque se presentaron distintos problemas durante el procesos pero con un poco de investigacion se lograron resolver y se consiguio desplegar la function.

## Repositorios

**Repositorio UI:** https://github.com/sosa-04/FrontPokeApi

**Repositorio API:** https://github.com/sosa-04/BackPokeApi

**Repositorio Terraform:** https://github.com/sosa-04/TerraformPokeApi

**Repositorio DB:** https://github.com/sosa-04/BaseDatosPokeApi

**Repositorio Function:** https://github.com/sosa-04/FunctionPokeApi