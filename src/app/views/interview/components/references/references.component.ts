import { Component, OnInit, Input } from '@angular/core';
import { IReference } from '../../../../models/interview/reference.model';

@Component({
  selector: 'references',
  templateUrl: 'references.component.html'
})

export class ReferencesComponent implements OnInit {
  @Input() references: IReference[];

  constructor() { }

  ngOnInit() { }

}
