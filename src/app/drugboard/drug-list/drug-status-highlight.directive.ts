import { Directive, HostBinding, Renderer2, ElementRef, OnInit, Input } from '@angular/core';
import { Drug } from '../../shared/models/drug.model';

@Directive({
  selector: '[appDrugStatusHighlight]'
})
export class DrugStatusHighlightDirective implements OnInit {
  @HostBinding('class') class: string;
  @Input() highlightOn: string;

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  ngOnInit() {
    const status = (!this.highlightOn)? this.elRef.nativeElement.innerText : this.highlightOn; // Have to pass in value manually... will need to fix this at some point
    if(status) {
      if (status === 'Approved') this.class = 'bg-success';
      if (status === 'Pending') this.class = 'bg-info';
      if (status === 'Declined') this.class = 'bg-danger';
      if (status === 'Canceled') this.class = 'bg-danger';
      if (status === 'Failed' || status == 'Error') this.class = 'bg-warning';
    }
  }
}
