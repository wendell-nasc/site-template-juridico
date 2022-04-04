import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})

export class BreadcrumbsComponent implements OnDestroy {

    //Propriedades e variaveis
    titulo!: string;
    tituloSubs$!: Subscription;


    
  //Injetar serviços
  constructor( private router: Router, private route: ActivatedRoute ) //Serviço de rotas
  
  { 


    //Trablhar com ActivatedRoute
   // console.log( route.snapshot.data! || undefined )//Dados Rota pai
   // console.log( route.snapshot.children[0].data! || undefined) //Dados Rota filha
    
    
  
  //Criado uma função que chama abaixo o metodo de breadcrumb e sobrescerve.... sera destruido com OnDestroy
  this.tituloSubs$ = this.construirBreadcrumbs() //Chamado o metodo abaixo para construir o Breadcrumbs
  .subscribe( ({ titulo }) => { //Obtem do router os observables de breadcrumbs enviados pelo rountin pages , no caso titulo das paginas
    //console.log( titulo ) 
    this.titulo = titulo;//titulo do Breadcrumbs foi destruturado acima... Inserido no HTML
    document.title = `Silvia - ${ titulo }`; //Titulo da pagina  foi destruturado acima... Inserido no HTML

  })



  } //Fim Construtor


  //Destroy a seção  
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe(); //Destroy o metodo quando finalizado a sessão
    console.log('Sessão destruída!')
  }




  //Metodo de Breadcrumbs
  construirBreadcrumbs(){    
    return this.router.events //events possui as propriedades: ActivationEnd , ChildActivationEnd, ChildActivationEnd , Scroll e e NavigationEnd  
          .pipe(
            filter( event => event instanceof ActivationEnd ),//Filtrado a propriedade ActivationEnd
            filter( ( evento:any ) => evento.snapshot.firstChild === null ), // Dos dois ActivationEnd retornado, Filtrado o firstChild que é nulo para retornar os dados no map abaixo
            map( ( evento: any ) => evento.snapshot.data ), // Usado o map para retornar apenas o snapshot.data do ActivationEnd filtrado acima
          )
  

  }







}
