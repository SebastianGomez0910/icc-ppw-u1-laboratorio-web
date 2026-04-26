# Practica 6: Fetch Api


### 1. Datos cargados desde la API (GET)
![Lista cragada](assets/01-lista.png)

**Descripcion:** Se obtenien los 20 registros inicales desde la API de JSONPlaceholder utilizanod el metodo HTTP `GET.

### 2. Estado de carga (Spinner)
![Spinner de carga](assets/02-spinner.png)
**Descripcion:** Se visualiza el spinner de carga que se renderiza temporalmente en el contenedor principal mientras se resuelve la promesa de la peticion `fetch`.

### 3. Crear Post (POST)
![Crear Post](assets/03-post.png)
**Descripcion:** Operacion exitosa, tras enviar el formulario se ejecuta una peticion `POST`, al recibir el codigo de estado `201 Created` la interfaz añade un nuevo registro.

### 4. Editar Post (PUT)
![Editar Post](assets/04-editar.png)
**Descricion:** Al activar el boton "Actualizar" el formulario se autocompleta con los datos existentes, tras modificar la informacion y guardar, se realiza una peticion `PUT`, actualizando instantaneamente la tarjeta correspondiente en la interfaz grafica.

### 5. Eliminar Post (DELETE)
![confirmar eliminacion](assets/05-confrimacion-delete.png)
![eliminado](assets/05-eliminar.png)
**Descripcion:** Uso del metodo `DELETE`. Se implemento un cuadro de dialogo para confirmar y evitar eliminaciones accindentales, una vez confirmada la accion, es removido el post.

### 6. Manejo de Errores.
![Captura de error](assets/06-error.png)
**Descripcion:** Simulando fallo un fallo de red, el bloque `try catch` captura de excepcion en lugar de que la aplicacion colapse o quede en blanco.

### 7. Devtool Network
![Network](assets/07-network.png)
**Descripcion:** Se observa el ciclo completo de las operaciones CRUD:
- `GET`inicial para cargar los 20 post (Status 200).
- `POST`para la creacion de un nuevo recurso (Status 201).
- `PUT` y `Delete`aplicados a IDs especificos (Status 200).

### 8. Capturas del Servicio API y Componentes
![api Service](assets/08-apiS1.png)
![api Service ](assets/08-apiS2.png)

![components](assets/08-componets.png)
![components](assets/08-componets1.png)

**Descripcion:** Capturas de las secciones clave del codigo. 
