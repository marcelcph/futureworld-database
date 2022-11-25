import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';



@Component({
  selector: 'app-logout-light',
  templateUrl: './logout-light.component.html',
  styleUrls: ['./logout-light.component.scss'],
})
export class LogoutLightComponent implements OnInit {

  constructor(public auth: AuthService, private IonRouterOutlet: Router) { }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(isAuthenticated =>{
      if(isAuthenticated){
        this.IonRouterOutlet.navigate(['/dashboard/admin'])
      }
    })
  }

  logOut(){
    this.auth.logout()
  }
}
