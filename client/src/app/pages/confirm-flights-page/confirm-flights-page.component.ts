import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClientService } from 'src/app/service/api-client.service';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {StripeService} from 'ngx-stripe'
@Component({
  selector: 'app-confirm-flights-page',
  templateUrl: './confirm-flights-page.component.html',
  styleUrls: ['./confirm-flights-page.component.css'],
})
export class ConfirmFlightsPageComponent {
  selectedFlights = this.flightService.getSelectedFlights();
  //stripe: boolean = false;

  totalPrice = this.flightService.getTotalPriceOfSelectedFlights();

  isCompleted = true;
  isLinear = true;

  constructor(private route: Router, private flightService: ApiClientService,
    private http:HttpClient, private stripeService : StripeService) { }

  ngOnInit() {
    //this.invokeStripe();
    this.selectedFlights = this.flightService.getSelectedFlights();
  }

  checkout() {
    // Check the server.js tab to see an example implementation

    localStorage.setItem("trip", JSON.stringify(this.selectedFlights))
    this.http
      .post('http://localhost:3000/create-checkout-session', {price : this.totalPrice})
      .pipe(
        switchMap((session: any) => {
          
          return this.stripeService.redirectToCheckout({
            sessionId: session.id,
            
          });
          // 
          
        })
        
        
      )
      .subscribe((result: any) => {
      
        // If `redirectToCheckout` fails due to a browser or network
        // error, you should display the localized error message to your
        // customer using `error.message`.
        if (result.error) {
          alert('error happened')
          
         
        }
        
        else {
          
         
          
        }
    
      });
  }

  //  paymentHandler: any = null;
  // published_key =
  //   'pk_test_51MWLP4CtRfbKEF0FQNdWE4BiKjKOekTvMmkR4WBsBQdOFpKftVrcXRsTArFdXHuH4c6M2qcYx1CY4Ur3Cs4PzUYQ00ntT6NrTJ';

  //   check(){
  //     console.log('stripe', this.stripe);
  //   }

  // makePayment(amount: any) {
  //   const paymentHandler = (<any>window).StripeCheckout.configure({
  //     key: this.published_key,
  //     locale: 'auto',
  //     token: function (stripeToken: any) {
  //       localStorage.setItem("stripe", JSON.stringify(stripeToken))
  //       alert('Stripe token generated!');
  //       this.stripe = true;
  //     },
  //   });
  //   paymentHandler.open({
  //     name: 'FlyAway',
  //     description: 'Book your flight!',
  //     amount: amount * 100,
  //     // email: 'samiya.kazi09@gmail.com'
  //   });

  //   this.flightService.createTripList(this.selectedFlights).subscribe(res=>console.log(res));
    
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
  //           this.selectedFlights.stripe = true;
  //           console.log(this.selectedFlights);
  //           //alert('Payment has been successfull!');
            
  //         },
  //       });
  //     };
  //     window.document.body.appendChild(script);
  //   }
  // }
  backButton() {
    this.route.navigate(['/select-flights']);
  }

  //checkout function is comming for test
  
  
  
}



//  confirmedFlight = [
//     {
//       segments: [
//           {
//               departure: {
//                   iataCode: "DAC",
//                   at: "2023-03-04T13:00:00"
//               },
//               arrival: {
//                   iataCode: "KWI",
//                   at: "2023-03-04T15:55:00"
//             }
//           },
//           {
//               departure: {
//                   iataCode: "KEI",
//                   at: "2023-03-04T18:15:00"
//               },
//               arrival: {
//                   iataCode: "RUH",
//                   at: "2023-03-04T21:30:00"
//               }
//           }
//       ],
//       price: 136.67
//     }
// ,

//         {
//           segments: [
//               {
//                   departure: {
//                       iataCode: "RUH",
//                       at: "2023-03-04T13:00:00"
//                   },
//                   arrival: {
//                       iataCode: "KEI",
//                       at: "2023-03-04T15:55:00"
//                   }
//               },
//               {
//                   departure: {
//                       iataCode: "KEI",
//                       at: "2023-03-04T18:15:00"
//                   },
//                   arrival: {
//                       iataCode: "USA",
//                       at: "2023-03-04T21:30:00"
//                   }
//               }
//           ],
//           price: 136.67
//         }
//   ];

// confirmFlights = [
//   {
//     from: {
//       time: "5.00PM",
//       iataCode: "DEL",
//       airportName:"Indira Gandhi International Airport",
//     },
//     to: {
//       time: "7.30PM",
//       iataCode: "CCU",
//       airportName:"Subhash Chandra Bose International Airport",
//     },
//     travelDate: "01/31/2023",
//     duration: "09:30",
//     price: "$230"
//   },

//   {
//     from: {
//       time: "4.00PM",
//       iataCode: "DEL",
//       airportName:"Indira Gandhi International Airport",
//     },
//     to: {
//       time: "6.30PM",
//       iataCode: "CCU",
//       airportName:"Subhash Chandra Bose International Airport",
//     },
//     travelDate: "MM/DD/YYYY",
//     duration: "09:30",
//     price: "$230"
//   },
//   {
//     from: {
//       time: "3.00PM",
//       iataCode: "DEL",
//       airportName:"Indira Gandhi International Airport",
//     },
//     to: {
//       time: "5.30PM",
//       iataCode: "CCU",
//       airportName:"Subhash Chandra Bose International Airport",
//     },
//     travelDate: "MM/DD/YYYY",
//     duration: "09:30",
//     price: "$230"
//   }
// ];
