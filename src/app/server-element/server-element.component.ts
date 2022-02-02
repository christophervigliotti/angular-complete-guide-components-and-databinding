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
  OnDestroy,
  ViewChild,
  ElementRef
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
  // no bueno @ViewChild('heading') header: ElementRef;
  @ViewChild('heading',{static:true}) header: ElementRef;

  /*
  ngAfterViewChecked is called 

  */
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called');
  }

  /*
  ngAfterViewInit 
  * is called 
  */ 
  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
    console.log(' - Test Content: ' + this.header.nativeElement.textContent);
  }

  /*
  ngAfterContentChecked 
  * is called 
  */ 
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called');
    console.log(' - Test Content: ' + this.header.nativeElement.textContent);
  }

  /*
  ngAfterContentInit 
  * is called 
  */ 
  ngAfterContentInit(){
    console.log('ngAfterContentInit called');
    console.log(' - Test Content: ' + this.header.nativeElement.textContent);
  }

  /*
  ngDoCheck 
  * is called on every change detection run
  * when an event is called
  * when a promise gives us back some data
  */ 
  ngDoCheck(){
    console.log('ngDoCheck called');
  }

  /*
  constructor  
  * is called every time a new instance of this component is created
  * it's called first
  */ 
  constructor(){
    console.log('constructor called');
  }

  /*
  ngOnChanges 
  * is called every time there is a change
  * is the only lifecycle hook to take an argument (of type SimpleChanges)
  */ 
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called');
    console.log(changes);
  }

  /*
  ngOnDestroy is called 
    
  */ 
  ngOnDestroy(){
    console.log('ngOnDestroy called (in parent ts file)');
  }

  /*
  ngOnInit is called 
    
  */ 
  ngOnInit(): void {    
    console.log('ngOnInit called (in parent ts file)');
    console.log(' - Test Content: ' + this.header.nativeElement.textContent);
  }
}