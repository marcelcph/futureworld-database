import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fact-box',
  templateUrl: './fact-box.component.html',
  styleUrls: ['./fact-box.component.scss'],
})
export class FactBoxComponent implements OnInit {

  @Input() factbox

  constructor() { }

  ngOnInit() {}

}
