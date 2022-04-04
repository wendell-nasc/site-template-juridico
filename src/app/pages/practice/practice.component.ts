
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styles: [
  ]
})
export class PracticeComponent implements OnInit {

  users = [
    {'id': 15,'name':'João'},
    {'id': 16,'name':'Maria'}
  ];





  
  
  
  
  ​
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  


  opcoesAreasPrincipal:any[] = [
    {
      titulo: 'Consultoria Jurídica​',
      descricao: 'A consultoria jurídica consiste em esclarecer questões ligadas ao universo do Direito e prestar informações e opiniões especializadas, prestando apoio nas questões jurídicas que podem enfrentar no dia a dia.',
      
    },
    {
      titulo: 'Contratação como Pessoa Jurídica​',
      descricao: 'A empresa contrata você como pessoa jurídica e não paga seus direitos trabalhistas​',
      
    },
    {
      titulo: 'Reclamações trabalhistas',
      descricao: 'Trata-se de ação contra a empresa a quem tenha prestado serviço, defendendo seus direitos judicialmente.',
      
    },
    {
      titulo: 'Defesas',
      descricao: 'Elaboramos a defesa de indivíduos e empresas em ações particulares, de interesse individual ou coletivo.',
      
    },
    {
      titulo: 'Ministério Público do Trabalho',
      descricao: 'Acompanhamos, defendemos seus interesses e prestamos assessoria junto ao Ministério Público do Trabalho.',
      
    },
    {
      titulo: 'Entidades Sindicais',
      descricao: 'Acompanhamos, defendemos seus interesses e prestamos assessoria junto as Entidades Sindicais.',
      
    },
    {
      titulo: 'Recursos',
      descricao: 'Elaboramos recursos contras as sentenças trabalhistas.',
      
    },  
   
  ];



  



	










  opcoesAreasPrincipal1:any[] = [
    {
      titulo: 'Elaboração de parecer jurídico',
      descricao: 'Elaboramos parecer jurídico, atuando como um consultor jurídico sobre assunto específico solicitado por pessoa física ou jurídica.',
      
    },
    {
      titulo: 'Análise de riscos trabalhistas e redução de passivos',
      descricao: 'Atuamos como um consultor jurídico sobre assunto específico solicitado por pessoa física ou jurídica.',
    },
    {
      titulo: 'Atuação Extrajudicial',
      descricao: 'Atuamos de forma extrajudicial, com extrema cautela e precisão para atender e obter êxito na negociação individual.',
    },
    {
      titulo: 'Audiências',
      descricao: 'Participamos nas audiências trabalhistas, especialmente em instruções processuais, produzindo provas para procedência dos pedidos',
    },
    {
      titulo: 'Contratos de trabalho e prestação de serviço',
      descricao: 'Conheça os direitos do trabalhador nos contratos!',
    },
       
      
   
  ];






   opcoesAreas:any[] = [
    {
      titulo: 'Demissão de doentes e acidentados​',
      descricao: 'Doentes e acidentados possuem estabilidade e não podem ser demitidos​',
      
    },
    {
      titulo: 'Contratação como Pessoa Jurídica​',
      descricao: 'A empresa contrata você como pessoa jurídica e não paga seus direitos trabalhistas​',
      
    },
    {
      titulo: 'Assédio moral​',
      descricao: 'O pagamento de salário por fora é contra a lei você deve ser indenizado por isto',
      
    },
    {
      titulo: 'Demissão de gestante​',
      descricao: 'Gestantes possuem estabilidade e não podem ser demitidas​',
      
    },
    {
      titulo: 'Ausência de Registro​',
      descricao: 'Empresa que não registra seu funcionário deve pagar multa e todos os direitos do colaborado​',
      
    },
    {
      titulo: 'Não pagamento de horas extras​',
      descricao: 'Quando a empresa não paga horas extras ela está descumprindo a lei e deve te indenizar',
      
    },
    {
      titulo: 'Pagamento de salário por fora​',
      descricao: 'O pagamento de salário por fora é contra a lei você deve ser indenizado por isto',
      
    },
    {
      titulo: 'Não pagamento de equiparação salarial​',
      descricao: 'Colaboradores na mesma função e com tempo igual de serviço devem receber o mesmo salário​',
      
    },
   


  ];



  opcoesAreas1:any[] = [
    
 
    {
      titulo: 'Insalubridade e Periculosidade',
      descricao: 'A legislação trabalhista protege, por meio de normas, todo trabalhador que executa suas funções em atividades insalubres ou perigosas.',
      
    },
    {
      titulo: 'Jornadas de trabalho abusivas',
      descricao: 'Jornada extensiva, priva do convívio familiar, do direito ao lazer e à instrução.',
      
    },
    {
      titulo: 'Justa causa indevida',
      descricao: 'A justa causa é derrubada na Justiça, além da rescisão a empresa pode ter que pagar milhares de reais por danos morais ao trabalhador.',
      
    },
    {
      titulo: 'Terceirizações ilegais',
      descricao: 'Terceirizações ilegais são aquelas que envolvem a atividade da empresa com a intenção de fraudar direitos trabalhistas.',
      
    },
    {
      titulo: 'Pedidos de demissão forçados',
      descricao: 'É muito comum que as empresas forcem seus funcionários a pedirem demissão, ameaçando-os com a demissão por justa causa.',
      
    },
    {
      titulo: 'Fraudes do cartão de ponto',
      descricao: 'A fraude no controle de ponto é um tema delicado, no entanto, infelizmente acontece com mais frequência do que se imagina.',
      
    },
    {
      titulo: 'Estágios fraudulentos',
      descricao: 'Empresas que utilizam a força de trabalho de verdadeiros empregados, como se fossem estagiários, de forma fraudulenta.',
      
    },


  ];





  constructor() { }

  ngOnInit(): void {
    this.gatilhoTeste(this.opcoesAreas)
  }

  gatilhoTeste(opcoesAreas: any ){
    console.log('teste',opcoesAreas);
  }



}
