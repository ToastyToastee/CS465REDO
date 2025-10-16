import { Component, OnInit } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { FormsModule } from "@angular/forms"; 
import { Router } from '@angular/router'; 
import { AuthenticationService } from '../services/authentication'; 
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

   public formError: string = ''; 
  submitted = false; 
 
  credentials = { 
    name: '', 
    email: '', 
    password: '' 
  }

  constructor( 
    private router: Router, 
    private authenticationService: AuthenticationService 
  ) { } 
 
  ngOnInit(): void { 
  }
  
  public onLoginSubmit(): void { 
    this.formError = ''; 
    if (!this.credentials.email || !this.credentials.password) {
      this.formError = 'Email and password are required, please try again';
      return;
    }

    this.doLogin();
  }

  private doLogin(): void { 
    let newUser = { 
      name: this.credentials.name, 
      email: this.credentials.email 
    } as User; 
 
    // console.log('LoginComponent::doLogin'); 
    // console.log(this.credentials); 

    this.authenticationService.login(newUser, this.credentials.password)
      .subscribe({
        next: (resp: any) => {
          if (resp && resp.token) {
            this.authenticationService.saveToken(resp.token);
            this.router.navigate(['']);
          }
        },
        error: (err: any) => {
          console.error('Login error', err);
          this.formError = 'Login failed, please check your credentials';
        }
      });
  }

}
