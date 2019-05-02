import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  product = ''
  barbeiro = 'Escolha o barbeiro';
  pagamento = 'Escolha a forma de pagamento';
  agendamento = 'Escolha a data para agendar';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController) {
    this.product = navParams.get('data');
    console.log(navParams.get('type'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

  showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Escolha o barbeiro');

    alert.addInput({
      type: 'radio',
      label: 'Arthur Conrado',
      value: 'Arthur Conrado',
      checked: (this.barbeiro == 'Arthur Conrado') ? true : false
    });

    alert.addInput({
      type: 'radio',
      label: 'Arthur Di Blasio',
      value: 'Arthur Di Blasio',
      checked: this.barbeiro == 'Arthur Di Blasio' ? true : false
    });

    alert.addInput({
      type: 'radio',
      label: 'Outro Barbeiro',
      value: 'Outro Barbeiro',
      checked: this.barbeiro == 'Outro Barbeiro' ? true : false
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.barbeiro  = data;
      }
    });
    alert.present();
  }


  doCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Escolha a forma de pagamento');

    alert.addInput({
      type: 'checkbox',
      label: 'Dinheiro',
      value: 'Dinheiro',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Cartão de crédito',
      value: 'Cartão de crédito'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Cartão de débito',
      value: 'Cartão de débito'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'PicPay',
      value: 'PicPay'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        this.pagamento = data;
      }
    });
    alert.present();
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Agendamento finalizado!',
      subTitle: 'Aguarde o barbeiro confirmar seu agendamento! Você pode acompanhar na sua listagem de agendamentos!',
      buttons: ['OK']
    });
    alert.present();
  }
}
