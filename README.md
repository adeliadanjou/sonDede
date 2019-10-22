# SonDede

 - USAR INPUT (PADRE ---> HIJO) -

1) En el hijo hay que poner el decorador @Input() y la propiedad que queremos recibir del padre
 #                               @Input() title: any;

2) En el ts del padre creamos la propiedad en cuestión titlePadre: String ="Soy el padre";

3) En el html del padre, en la etiqueta del hijo <hijo [title]= "titlePadre"></hijo>

4) En el html del hijo llamamos a su propiedad donde pusimos el input.