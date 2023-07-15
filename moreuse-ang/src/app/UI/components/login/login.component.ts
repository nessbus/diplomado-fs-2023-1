import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Userusecase } from 'src/app/domain/models/User/usecase/userusecase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  public validationMessages = {
    email:[
      {type:'required', message:'Este campo es requierido'},
      {type:'email', message:'Este campo es de tipo email'}
    ],
    password:[
      {type:'required', message:'Este campo es requierido'},
      {type:'minlength', message:'Este campo debe tener minimo 8 caracteres'},
      {type:'pattern', message:'Este campo debe contener mayusculas y minusculas'}
    ]
  }

  //constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient ) { }
  constructor(private formBuilder: FormBuilder, private router: Router, private _userUseCase: Userusecase ) {}

  ngOnInit(): void {
   this.loginForm= this.formBuilder.group({
    email: ['', [
      Validators.required,
      Validators.email
    ]
    ],
    password: ['', [
        Validators.minLength(8),
        Validators.required,
        Validators.pattern(/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/gm)
      ]
    ]
    })
  }

  login() {
    // Consumo de servicios, la clase se llama en el constructor
    // y la importacion del modulo 'HttpClientModule' en el modulo principal


    // if (this.loginForm.valid){
    //   var email = this.loginForm.controls['email'].value;
    //   var password = this.loginForm.controls['password'].value;
    //   this.http.post('http://localhost:3000/auth/login', {email: email, password: password}).subscribe({
    //     next: (response: any) => {
    //       localStorage.setItem('token', response.token);
    //     },
    //     error:(e) => console.error(e),
    //     complete: () => this.router.navigate(['/'])
    //   })

   //--------------------------
    if (this.loginForm.valid) { //primero valido el formulario que este correcto
      var email = this.loginForm.controls['email'].value;
      var password = this.loginForm.controls['password'].value;
      this._userUseCase.login(email, password).subscribe((response:any) => {
        if(response.token !=''){
          localStorage.setItem('token', response.token) // si obtengo respuesta almaceno en el local storage el token
          this.router.navigate(['/'])
        }
        else {
          alert('Usuario o Password incorrectos, Verifique e intente nuevamente');
        }
        })
    } else {
      alert('Este formulario no es valido');
    }

  }


  public get campos(){
    return this.loginForm.controls
  }
}
