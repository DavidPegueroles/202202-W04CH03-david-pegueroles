# Listado de responsabilidades

## Componentes

- App
  Renderiza los componentes Info, Display, Actions, Keyboard.
  Enviar el estado de la llamada a Info.
  Enviar los números marcados a Display.
  Enviar las acciones a todos los botones de Keyboard y Actions.

- Info
  Renderizar el estado de la llamada que puede ser 'calling' o no.

- Display
  Renderizar los números marcados que reciba.

- Actions
  Renderiza la caja donde se encuentra el display y los botones de llamar y colgar.

  · Action
  Renderizar el botón que reciba
  Ejecuta una acción recibida mediante un evento de click.

- Keyboard
  Muestra los números de llamada y el botón delete.

  · Key
  Renderiza el botón que reciba que puede ser un número o delete.
  Ejecuta una acción recibida mediante un evento de click.

## Datos y acciones sobre los datos

- Listado de los números picados.
  Añadir y eliminar números de la lista de números picados.

- Estado de la llamada que puede ser 'calling' o no.
  Modificar el estado de la llamada para que sea 'calling' o no.

- Listado del contenido de los botones de llamada, que puede ser números y el delete. (no es de estado)
