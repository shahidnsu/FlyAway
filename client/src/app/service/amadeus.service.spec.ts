// @ts-nocheck
import { of } from 'rxjs';
import '@angular/compiler';
import { AmadeusService } from './amadeus.service';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { Injectable, ReflectiveInjector} from '@angular/core';
import { Airport } from '../interfaces/airport';
import {TestBed} from '@angular/core/testing'
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { MockService } from 'ng-mocks';
import {Observable} from "rxjs";
const airportsMocks = [
  {
      "name": "Londolovit Airport",
      "city": "Londolovit",
      "iata": "LNV"
  },
]
let apiClient: HttpClient
describe('AmadeusService', () => {

=======
import { Injectable, ReflectiveInjector } from '@angular/core';
import { Airport } from '../interfaces/airport';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MockService } from 'ng-mocks';
import { Observable } from 'rxjs';
const airportsMocks = [
  {
    name: 'Londolovit Airport',
    city: 'Londolovit',
    iata: 'LNV',
  },
];
let apiClient: HttpClient;
describe('AmadeusService', () => {
>>>>>>> b4ed4300b0003f593616bdf5bbefb82e4fdb6b29
  const http = { get: jest.fn(() => of(airportsMocks)) };
  let service: AmadeusService;
  const provide = (mock: any): any => mock;
  service = new AmadeusService(provide(http) as any);
<<<<<<< HEAD


  test('should fetch a list of airports', () => {
     let result = service.airportSearch('dhaka').subscribe((airports) => {
      // expect(http.get).toHaveBeenCalled();
      expect(http.get).toHaveBeenCalledWith('http://localhost:3000/aiport/dhaka')
     });
  });

  it('should fetch a list of airports with given iata code', () => {
    service.airportRoute('dhaka').subscribe((airports) => {
    
      expect(http.get).toHaveBeenCalled()
=======
  test('should fetch a list of airports', () => {
    let result = service.airportSearch('dhaka').subscribe((airports) => {
      // expect(http.get).toHaveBeenCalled();
      expect(http.get).toHaveBeenCalledWith(
        'http://localhost:3000/aiport/dhaka'
      );
    });
  });
  it('should fetch a list of airports with given iata code', () => {
    service.airportRoute('dhaka').subscribe((airports) => {
      console.log(airports);
      expect(http.get).toHaveBeenCalled();
    });
  });
  it('should fetch a list of options', () => {
    service.searchFlight('dhaka').subscribe((airports) => {
      console.log(airports);
>>>>>>> b4ed4300b0003f593616bdf5bbefb82e4fdb6b29
    });
  });

  it('should fetch a list of options', () => {
    service.searchFlight('dhaka').subscribe((airports) => {
     
    });
  });

  test('should Call the airport route with iataCode', () => {
    let result = service.airportRoute('DAC').subscribe((airports) => {
     // expect(http.get).toHaveBeenCalled();
     expect(http.get).toHaveBeenCalledWith('http://localhost:3000/search-airports-routes/DAC')
    });
 });
 it('should Call the Amadeus APi', () => {
  service.airportRoute('DAC').subscribe((airports) => {
    // expect(http.get).toHaveBeenCalled();
    expect(http.get).toHaveBeenCalled()
   });
});
});



//'http://localhost:3000/search-airports-routes/${iataCode}'