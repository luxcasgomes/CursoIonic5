import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl : AlertController) { }

  ngOnInit() {
  }

  async alert(){
    const alert = await this.alertCtrl.create({
      header:"Alert",
      subHeader:"subtitle",
      message: "this is an alert message.",
      buttons:["OK"]
    });

    alert.present();
  }

  async multiple(){
    const alert = await this.alertCtrl.create({
      header:"Alert",
      subHeader:"subtitle",
      message: "this is an alert message.",
      buttons:["OK","Uga","Uga"]
    });

    alert.present();
}
async confirm(){
  const alert = await this.alertCtrl.create({
    header:"Confirm!",
    message: "this is an alert message.",
    buttons:[{
      text: "Cancel",
      role: "cancel",
      cssClass:"danger",
      handler:(blah) =>{
        console.log("Confirm cancel: blah");
      }
    }, {
      text: "okay",
      handler: () => {
        console.log("Confirm Okay")
      }
    }

    ]
  });
  alert.present();
}

async prompt(){
  const alert = await this.alertCtrl.create({
    header: "Confirma os dados aí meu mano.",
    inputs:[
      {
        name:"email",
        type: "text",
        placeholder: "Informe seu E-mail"
      }, {
        name:"senha",
        type: "password",
        placeholder: "Digite sua senha."
      }
    ],
    buttons:[{
      text: "Cancel",
      role: "cancel",
      cssClass:"danger",
      handler:(blah) =>{
        console.log("Confirm cancel: blah");
      }
    }, {
      text: "okay",
      handler: (form) => {
        console.log(form)
      }
    }

    ]
  })

  alert.present();
}
}
