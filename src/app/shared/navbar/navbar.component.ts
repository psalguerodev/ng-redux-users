import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'psalguerodev-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  findUser(userId: string): void {
    if (!userId) return;
    this.router.navigate(['user', userId]);
  }

}
