
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private http:HttpClient) {}
  nombre: string=''; //variable para almacenar el nombre obtenido por el header

  ngOnInit(): void {
    var token = localStorage.getItem('token'); // almaceno el token en una variable token
    var headers; // declaro variable headers para almacenar luego los datos del encabezado

    // Compruebo que la variable token contenga datos para
    if (token) {
      headers = new HttpHeaders().set('authorization', 'Bearer '+token) //se crea un objeto de tipo Httpheaders
      //en el almacenamos el seteamos el authorization concatenado con el Bearer, debido a que
      //estamos usando un token de tipo bearer en el servicio
    }
    const options = {headers: headers}; //Se crea un objeto para almacenar los encabezados

    console.log('ness', options)

    this.http.get('http://localhost:3000/auth/',options).subscribe({ //Aqui consumimos el servicio get
      next: (response: any) => {
        console.log(response);
        this.nombre = response.name; //en la variable nombre almacenamos el name que llega por el header
      },
      error: (e) => console.error(e),
      complete: () => console.info('Proceso completado con exito')

    })
  }

}
