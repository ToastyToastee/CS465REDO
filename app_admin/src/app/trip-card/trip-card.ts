import { Component, Input, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../services/authentication'; 

@Component({
  selector: 'app-trip-card',
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './trip-card.html',
  styleUrls: ['./trip-card.css']
})
export class TripCard implements OnInit {
  @Input('trip') trip: any;

  constructor( 
private router: Router, 
private authenticationService: AuthenticationService 
) {} 

  ngOnInit(): void {

  }

  public editTrip(trip: Trip) {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['edit-trip']);
  }

  public isLoggedIn() 
{ 
return this.authenticationService.isLoggedIn(); 
}

}
