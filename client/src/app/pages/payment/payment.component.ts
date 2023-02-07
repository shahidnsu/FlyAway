import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClientService } from 'src/app/service/api-client.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  selectedFlights = this.flightService.getSelectedFlights();
  totalPrice = this.flightService.getTotalPriceOfSelectedFlights();

  isCompleted=true;
  isLinear = true;
  confirm = true;


  constructor(private route: Router, private flightService: ApiClientService) {}
  
  ngOnInit() {
    this.selectedFlights = this.flightService.getSelectedFlights();
    console.log('Selected flights service: ', this.selectedFlights);
  }

  // paymentHandler: any = null;
  // published_key = 'pk_test_51MWLP4CtRfbKEF0FQNdWE4BiKjKOekTvMmkR4WBsBQdOFpKftVrcXRsTArFdXHuH4c6M2qcYx1CY4Ur3Cs4PzUYQ00ntT6NrTJ'
  // constructor() {}
  // ngOnInit() {
  //   this.invokeStripe();
  // }
  // makePayment(amount: any) {
  //   const paymentHandler = (<any>window).StripeCheckout.configure({
  //     key: this.published_key,
  //     locale: 'auto',
  //     token: function (stripeToken: any) {
  //       console.log(stripeToken);
  //       alert('Stripe token generated!');
  //     },
  //   });
  //   paymentHandler.open({
  //     name: 'FlyAway',
  //     description: 'Book your flight!',
  //     amount: amount * 100,
  //   });
  // }
  // invokeStripe() {
  //   if (!window.document.getElementById('stripe-script')) {
  //     const script = window.document.createElement('script');
  //     script.id = 'stripe-script';
  //     script.type = 'text/javascript';
  //     script.src = 'https://checkout.stripe.com/checkout.js';
  //     script.onload = () => {
  //       this.paymentHandler = (<any>window).StripeCheckout.configure({
  //         key: this.published_key,
  //         locale: 'auto',
  //         token: function (stripeToken: any) {
  //           console.log(stripeToken);
  //           alert('Payment has been successfull!');
  //         },
  //       });
  //     };
  //     window.document.body.appendChild(script);
  //   }
  // }

}
