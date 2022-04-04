import { Component, OnInit } from '@angular/core';


//declare function customIniciarFunçãoGlobal(): any; //Declara função global para evitar erros de templates... está no arquivo assets/js/custom.js

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',  
  styles: [
  ]
})
export class PagesComponent implements OnInit  {

  //Variaveis ou propriedades   

  //progresso1: number = 25;
  //progresso2: number = 35;


  users = [
    {'id': 15,'name':'João'},
    {'id': 16,'name':'Maria'}
  ];




  //Injetado o serviço para validar e setar a cor do tema
  constructor(
                //private settingsService: SettingsService,//Serviço para tratar a logica de manusear os componentes do DOM
                  ) 
    { }


  //Quando as páginas são recarregadas  
  ngOnInit() {

    
    //customIniciarFunçãoGlobal(); //Chama função global para não da erro no template caso se destruida seção pelo botao logout...está no arquivo assets/js/custom.js



      this.gatilhoTeste(this.users)
 
  
 

    


  }

  gatilhoTeste(opcoesAreas: any ){
    console.log('teste',opcoesAreas);
  }



}
