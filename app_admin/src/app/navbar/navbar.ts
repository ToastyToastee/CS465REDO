import { Component, OnInit } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router'; 
import { AuthenticationService } from '../services/authentication'; 
import { FormsModule } from '@angular/forms';

@Component({ 
  selector: 'app-navbar', 
  standalone: true, 
  imports: [CommonModule, RouterModule, FormsModule], 
  templateUrl: './navbar.html', 
  styleUrls: ['./navbar.css'], 
}) 
 
 
export class NavbarComponent implements OnInit { 
  showLogin: boolean = false;
  formError: string = '';
  credentials = { name: '', email: '', password: '' };
 
  constructor( 
    private authenticationService: AuthenticationService 
  ) { } 
 
  ngOnInit() { } 
   
  public isLoggedIn(): boolean { 
    return this.authenticationService.isLoggedIn(); 
  } 
 
  public onLogout(): void { 
    return this.authenticationService.logout(); 
  } 

  public toggleLogin(): void {
    this.showLogin = !this.showLogin;
    this.formError = '';
  }

  public submitLogin(): void {
    this.formError = '';
    if (!this.credentials.email || !this.credentials.password) {
      this.formError = 'Email and password required';
      return;
    }
    const user = { name: this.credentials.name, email: this.credentials.email };
    this.authenticationService.login(user as any, this.credentials.password)
      .subscribe({ next: (resp: any) => {
        if (resp && resp.token) {
          this.authenticationService.saveToken(resp.token);
          this.showLogin = false;
        }
      }, error: (err: any) => {
        console.error('Login failed', err);
        this.formError = 'Login failed';
      }});
  }
 }
