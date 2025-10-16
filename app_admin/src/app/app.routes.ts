import { Routes } from '@angular/router';
import { AddTrip} from './add-trip/add-trip';
import { TripListing } from './trip-listing/trip-listing';
import { EditTrip } from './edit-trip/edit-trip';
import { Login } from './login/login';

export const routes: Routes = [
    {path: 'add-trip', component: AddTrip},
    {path: 'login', component: Login},
    {path: 'edit-trip', component: EditTrip},
    {path: '', component: TripListing, pathMatch: 'full' }
];
