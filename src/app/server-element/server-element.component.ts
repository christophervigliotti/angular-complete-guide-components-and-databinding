import { 
  Component, 
  Input, 
  ViewEncapsulation, 
  OnInit, 
  OnChanges, 
  SimpleChanges,
  AfterContentInit,
  DoCheck,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom 
})
export class ServerElementComponent implements 
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy {
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  };
  @Input() name: string;

  /*
  ngAfterViewChecked is called 

  */
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called');
  }

  /*
  ngAfterViewInit is called 
    
  */ 
  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
  }

  /*
  ngAfterContentChecked is called 
    
  */ 
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called');
  }

  /*
  ngAfterContentInit is called 
    
  */ 
  ngAfterContentInit(){
    console.log('ngAfterContentInit called');
  }

  /*
  ngDoCheck is called 
    
  */ 
  ngDoCheck(){
    console.log('ngDoCheck called');
  }

  /*
  constructor is called 
    
  */ 
  constructor(){
    console.log('constructor called');
  }

  /*
  ngOnChanges is called 
    
  */ 
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called');
    console.log(changes);
  }

  /*
  ngOnDestroy is called 
    
  */ 
  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }

  /*
  ngOnInit is called 
    
  */ 
  ngOnInit(): void {
    console.log('ngOnInit called');
  }
}