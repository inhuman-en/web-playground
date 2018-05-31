import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth';

@Component({
  selector: 'wpl-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
