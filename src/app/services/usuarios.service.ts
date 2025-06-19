import { Injectable } from '@angular/core';
import { ErrorsService } from './tools/errors.service';
import { ValidatorService } from './tools/validator.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    public validatorService: ValidatorService,
    public errorService: ErrorsService
  ) { }

  public esquemaUser(){
    return {
      'first_name': '',
      'last_name': '',
      'email': '',
      'password': '',
      'role': 'participante',
      'telefono': '',
      'ciudad': '',
      'edad': '',
      'terminos_condiciones': false
    }
  }

  //Funcion para validar usuario
  public validarUsuario(data: any){
    console.log("Validando user... ", data);
    let error: any = [];

    if(!this.validatorService.required(data["first_name"])){
      error["first_name"] = this.errorService.required;
    }

    if(!this.validatorService.required(data["last_name"])){
      error["last_name"] = this.errorService.required;
    }

    if(!this.validatorService.required(data["email"])){
      error["email"] = this.errorService.required;
    }else if(!this.validatorService.max(data["email"], 40)){
      error["email"] = this.errorService.max(40);
    }else if (!this.validatorService.email(data['email'])) {
      error['email'] = this.errorService.email;
    }

    if(!this.validatorService.required(data["password"])){
      error["password"] = this.errorService.required;
    }

    if(!this.validatorService.required(data["telefono"])){
      error["telefono"] = this.errorService.required;
    }

    if(!this.validatorService.required(data["ciudad"])){
      error["ciudad"] = this.errorService.required;
    }

    if(!this.validatorService.required(data["edad"])){
      error["edad"] = this.errorService.required;
    }

    return error;
  }

}
