import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-light-nav',
  templateUrl: './light-nav.component.html',
  styleUrls: ['./light-nav.component.scss'],
})
export class LightNavComponent implements OnInit {

  constructor(public auth: AuthService, private IonRouterOutlet: Router) { }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(isAuthenticated =>{
      if(isAuthenticated){
        this.IonRouterOutlet.navigate(['/dashboard/admin'])
      }
    })
  }

  login(){
    this.auth.loginWithRedirect()
  }

}
