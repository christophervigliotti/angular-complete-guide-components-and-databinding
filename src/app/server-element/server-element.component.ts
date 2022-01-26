import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom 
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  };
}