import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stripe-example';
  http: any;
  hideCvc = true;

  // when you enter credit card info and press submit button chargeCreditCard() method will be called and token will be generated on Strip side
  chargeCreditCard(){ 
    let form=document.getElementsByTagName("form")[0];
    (<any>window).Stripe.card.createToken({
      number: form['cardNumber'].value,
      exp_month: form['expMonth'].value,
      exp_year: form['expYear'].value,
      cvc: form['cvc'].value
    }, (status:number, response:any) => {
      if (status === 200) {
        let token = response.id;
        this.chargeCard(token);
      }else {
        console.log(response.error.message)
      }
    })
  }

  chargeCard(token: string){
    const headers = new Headers({
        'token': token, 
        'amount': '100'
    });
    this.http.post('http://localhost:8080/payment/charge', {}, {headers: headers}).subscribe((resp: any) => {
        console.log(resp);
    });
}

}
