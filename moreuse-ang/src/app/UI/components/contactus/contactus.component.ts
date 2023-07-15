import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactForm!: FormGroup;
  public validationMessages = {
    name:[
      {type:'required', message:'Este campo es requerido'}
    ],
    email:[
      {type: 'required', message:'Este campo es requerido'},
      {type: 'email', message:'Este campo es de tipo email'}
    ],
    subject:[
      {type:'required', message:'Este Campo es requerido'}
    ],
    message:[
      {type:'required', message:'Este Campo es requerido'}
    ]
  }
  constructor(private formBuilder: FormBuilder, private router: Router){}

  ngOnInit(): void {
    this.contactForm =this.formBuilder.group({
      name:['name',[
        Validators.required
      ]],
      email: ['email', [
        Validators.required,
        Validators.email
      ]],
      subject:['subject',[
        Validators.required
      ]],
      message:['message',[
        Validators.required
      ]],
    })
  }

  contactUs() {
    if (this.contactForm.valid) {
      alert('Su mensaje fue enviado con exito')
    } else {
      alert('Debe llenar todos los campos');
    }
  }

  public get campos(){
    return this.contactForm.controls
  }

  //Mensaje de alerta



  //Funcion para limpiar Imputs al obtener el focus
  limpiarCampo(fieldName: string) {
    this.contactForm.controls[fieldName].setValue('');

  }

}
