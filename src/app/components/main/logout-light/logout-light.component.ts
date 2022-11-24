import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-logout-light',
  templateUrl: './logout-light.component.html',
  styleUrls: ['./logout-light.component.scss'],
})
export class LogoutLightComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {}

  logOut(){
    this.auth.logout()
  }
}
