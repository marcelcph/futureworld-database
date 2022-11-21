import { Component, OnInit, Input } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-subhero',
  templateUrl: './subhero.component.html',
  styleUrls: ['./subhero.component.scss'],
})
export class SubheroComponent implements OnInit {

  @Input() subhero

  constructor(private clipboard: Clipboard) {}

  copyText(textToCopy: string) {
    this.clipboard.copy(textToCopy);
}

  ngOnInit() {}

}
