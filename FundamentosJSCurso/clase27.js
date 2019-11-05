//Javascript solo puede hacer una tarea a la vez
//No es multitarea puede delegar la ejecucion de ciertas funciones a  otros procesos (EVENT LOOP)

//JavaScript delega en el navegador ciertas tareas 
//y les asocia funciones que deberán ser ejecutadas al ser completadas.
//Estas funciones se llaman callbacks, 
//y una vez que el navegador ha regresado con la respuesta, 
//el callback asociado pasa a la cola de tareas para ser ejecutado 
//una vez que JavaScript haya terminado todas las instrucciones que están 
//en la pila de ejecución.


//Javascript tiene una pila de ejecucion o call stack donde se ponen las funciones  y se van ejecutando en orden
//Delega ciertas tareas al navegador, cuando la respuesta de la tarea regresa, va a la cola de tareas y espera que se  ejecuta la fn  asociada (callback) 
//Solo hasta no existan funciones en la pila de ejecuciones, busca las funciones en la cola de tareas  para ejecutarlas
//NO VOY A BLOQUEAR EL EVENT LOOP