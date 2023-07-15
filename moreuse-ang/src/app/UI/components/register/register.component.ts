import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Userusecase } from 'src/app/domain/models/User/usecase/userusecase';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  registerForm!: FormGroup;
  public validationMessages = {
    name:[
      {type:'required', message:'Este campo es requerido'}
    ],
    email:[
      {type:'required', message:'Este campo es requierido'},
      {type:'email', message:'Este campo es de tipo email'}
    ],
    password:[
      {type:'required', message:'Este campo es requierido'},
      {type:'minlength', message:'Este campo debe tener minimo 8 caracteres'},
      {type:'pattern', message:'Este campo debe contener mayusculas y minusculas'}
    ],
    confirmPassword:[
      {type:'required', message:'Este campo es requierido'},
      {type:'minlength', message:'Este campo debe tener minimo 8 caracteres'},
      {type:'pattern', message:'Este campo debe contener mayusculas y minusculas'}
    ]
  }

  //constructor(private formBuilder: FormBuilder, private router: Router) { }
  constructor(private formBuilder: FormBuilder,private router: Router, private _userUseCase: Userusecase ) { }

  ngOnInit(): void {
    this.registerForm= this.formBuilder.group({
      name:['', [
        Validators.required,
      ]
      ],
      email: ['', [
        Validators.required,
        Validators.email
      ]
      ],
      password: ['', [
          Validators.required,
          Validators.pattern(/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/gm)
      ]
      ],
      confirmPassword: ['', [
        Validators.required,
        Validators.pattern(/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/gm)
      ]
      ],
      phone:[''],
      address:['']

    })
  }

  register() {
    if (this.registerForm.valid) {
      var name = this.registerForm.controls['name'].value
      var email = this.registerForm.controls['email'].value;
      var password = this.registerForm.controls['password'].value;
      var phone = this.registerForm.controls['phone'].value;
      var address = this.registerForm.controls['address'].value;
      this._userUseCase.register(name,email, password, phone, address).subscribe((response:any) => {
        if(response.User !=''){
          localStorage.setItem('token', response.token) // si obtengo respuesta almaceno en el local storage el token
          this.router.navigate(['/fullscreen/login'])
        }
        else {
          alert('Usuario o Password incorrectos, Verifique e intente nuevamente');
        }
        })

      //----
      //this.router.navigate(['/fullscreen/login']);
      //----
    }
    else {
      alert('Este formulario no es valido');
    }
  }


  public get campos(){
    return this.registerForm.controls
  }
}
