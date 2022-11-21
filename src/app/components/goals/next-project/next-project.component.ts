import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-next-project',
  templateUrl: './next-project.component.html',
  styleUrls: ['./next-project.component.scss'],
})
export class NextProjectComponent implements OnInit {

  @Input() nextproject

  constructor() { }

  ngOnInit() {}

}
