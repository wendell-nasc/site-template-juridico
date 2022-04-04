import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



/*
const nodemailer = require("nodemailer");
const smtpTransport = require('nodemailer-smtp-transport');




const smtpConfig:any = smtpTransport({
  host: "smtp.seuhost.com",
  port: 587,
  ignoreTLS: true,
  secure : true,
  tls: {
      rejectUnauthorized: true
  },
  auth: {
      user: "Seu login",
      pass: "sua senha"
  }
});

const transporter: any = nodemailer.createTransport(smtpConfig) ;

const message: any  = {
  from: "Seu Nome ",
  to: "Nome do Destinatário ",
  subject: "Assunto do Email",
  text: "Conteúdo do email em texto",
  html: "<h1>Conteúdo do email em HTML</h1>",
  headers: {
      'X-Laziness-level': 1000
  }
};


transporter.sendMail(message, (error:any, info:any) => {
  if (error) {
      return console.log(error);
  }
  console.log("The message was sent!");
  console.log(info);
});

*/

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/mzboawrv',
        { name: email.name, replyto: email.email, message: email.messages },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
          }
        );
    }
  }

  




 

}
