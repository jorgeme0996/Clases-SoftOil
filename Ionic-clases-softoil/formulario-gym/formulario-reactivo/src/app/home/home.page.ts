import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user:any ={
    nombre: '',
    apellido: '',
    celular: 0
  }

  constructor() {}

  onSubmit(){
    console.log(this.user);
  }
}
