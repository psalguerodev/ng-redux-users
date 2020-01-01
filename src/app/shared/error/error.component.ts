import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'psalguerodev-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  @Input() error: any;

  constructor() { }

  ngOnInit() {
  }

}
