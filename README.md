# Section 5: Components & Databinding Deep Dive 👍

*This is one of several repos that I created for the course "Angular - The Complete Guide (2022 Edition)".  For a complete list of repos created for this course: https://gist.github.com/christophervigliotti/92e5b3b93cbe9d630d8e9d81b7eb6636 .*

## Next Time

* second pass through 79, focusing on getting notes down for each of the lifecycle hooks

## Notes

### 83. chapter_title

url_goes_here

```
notes_go_here
```

### 82. chapter_title

url_goes_here

```
notes_go_here
```

### 81. @ContentChild() in Angular 8+

url_goes_here

```
notes_go_here
```

### 80. Lifecycle Hooks and Template Access

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656110#overviewhere

after view init gives you access to template elements...before this hook has been reached you do not have access

### 79. Seeing Lifecycle Hooks in Action

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656106#overview

* (I am) lost and (the code is) broken.
* That was almost a haiku
* got it now (syntax error)
* the bigger issue is that I would benefit from reviewing this entire section again before proceeding.  not an issue but rather a way to fill in the knowlege gap.  adapt and overcome!

#### Actual Notes
via https://angular.io/guide/lifecycle-hooks 

##### ngAfterViewChecked()
Purpose
```
Respond after Angular checks the component's views and child views, or the view that contains the directive.
```
Timing
```
Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().
```
##### ngAfterViewInit()
Purpose
```
Respond after Angular initializes the component's views and child views, or the view that contains the directive.

See details and example in Responding to view changes in this document https://angular.io/guide/lifecycle-hooks#afterview 
```
Timing
```
Called once after the first ngAfterContentChecked().
```
##### ngAfterContentChecked()
Purpose
```
Respond after Angular checks the content projected into the directive or component.

See details and example in Responding to projected content changes in this document https://angular.io/guide/lifecycle-hooks#aftercontent 
```
Timing
```
Called after ngAfterContentInit() and every subsequent ngDoCheck().
```
##### ngAfterContentInit()
Purpose
```
Respond after Angular projects external content into the component's view, or into the view that a directive is in.

See details and example in Responding to changes in content in this document. https://angular.io/guide/lifecycle-hooks#aftercontent 
```
Timing
```
Called once after the first ngDoCheck().
```
##### ngDoCheck() 
* is called on every change detection run
* when an event is called
* when a promise gives us back some data
Purpose
```
Detect and act upon changes that Angular can't or won't detect on its own. See details and example in Defining custom change detection in this document https://angular.io/guide/lifecycle-hooks#docheck
```
Timing
```
Called immediately after ngOnChanges() on every change detection run, and immediately after ngOnInit() on the first run.
```
##### constructor  
* is called every time a new instance of this component is created
* it's called first
* technically not a lifecycle hook
##### ngOnChanges 
* is called every time there is a change
* is the only lifecycle hook to take an argument (of type SimpleChanges)
* example: `ngOnChanges(changes: SimpleChanges){}`
Purpose
```
Respond when Angular sets or resets data-bound input properties. The method receives a SimpleChanges object of current and previous property values.

Note that this happens very frequently, so any operation you perform here impacts performance significantly. See details in Using change detection hooks in this document.
```
Timing
```
Called before ngOnInit() (if the component has bound inputs) and whenever one or more data-bound input properties change. 

Note that if your component has no inputs or you use it without providing any inputs, the framework will not call ngOnChanges().
```
##### ngOnDestroy 
Purpose
```
	Cleanup just before Angular destroys the directive or component. Unsubscribe Observables and detach event handlers to avoid memory leaks. See details in Cleaning up on instance destruction in this document https://angular.io/guide/lifecycle-hooks#ondestroy 
```
Timing
```
Called immediately before Angular destroys the directive or component.
```
##### ngOnInit 
Purpose
```
Initialize the directive or component after Angular first displays the data-bound properties and sets the directive or component's input properties. See details in Initializing a component or directive in this document https://angular.io/guide/lifecycle-hooks#oninit 
```
Timing
```
Called once, after the first ngOnChanges(). ngOnInit() is still called even when ngOnChanges() is not (which is the case when there are no template-bound inputs).
```

### 78. Understanding the Component Lifecycle

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656102#overview


what's up with 
```
  ngOnInit(): void {
      
  }
```
(it's a lifecycle hook)  
  
When a new component is created in Angular, we go through a few phases in the creation process.  Here we have a chance to hook into these phases and execute some code (by implementing some methods)  
  
* `ngOnChanges` at the start when a component is created AND when any bound input property changes
* `ngOnInit` called once the component is initialized.
* `ngDoCheck` called during every change detection run.  Change detection is the system by which Angular determines that something changes inside a component.  When a property value changes and it's output in the template, Angular needs to re-render.  This will fire even when nothing changes...it's fired when certain triggering events happen.
* `ngAfterContentInit` called after content (ng-content) has been projected into the view
* `ngAfterContentChecked` called every time the projected content has been checked
* `ngAfterViewInit` called after the component's view (and child views) has been initialized
* `ngAfterViewChecked` called every time the view (and child views) have been checked
* `ngOnDestroy` called once the component is about to be destroyed

### 77. Projecting Content into Components with ng-content

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656100#overview

The preferred method for passing HTML from one place to another...  

removing from server-element.component.html...

```
<p>
  <strong 
    *ngIf="element.type === 'server'" 
    style="color: red"
  >{{ element.content }}</strong>

  <em 
    *ngIf="element.type === 'blueprint'"
  >{{ element.content }}</em>
</p>
```

...and in app.component.html we change...

```
<app-server-element 
  *ngFor="let serverElement of serverElements" 
  [srvElement]="serverElement"
>
</app-server-element>
```

...to...

```
<app-server-element 
  *ngFor="let serverElement of serverElements" 
  [srvElement]="serverElement"
>
</app-server-element>
```

...and then add the ng-content directive.  This marks the spot telling Angular to include code found in the opening and closing `<app-server-element>` tags.  

### The Three Ways To Get Data From The View (recap)

1. two-way databinding
2. local references passed through references (lecture 74)
3. local references fetched through @ViewChild (this lecture) 

```
code_examples_of_each_here
```

### 76. getting Access to the Template & DOM with @ViewChild

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656094#overview

* @ViewChild decorator added to cockpit.component.ts `@ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;`
* serverContent value is now retrieved via `serverContent: this.serverContentInput.nativeElement.value`

To recap, there are three ways to get data from the view.

1. two-way databinding
2. local references passed through references (lecture 74)
3. local references fetched through @ViewChild (this lecture) 

### 75. @ViewChild() in Angular 8+

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14865241#overview

In Angular 8+, the `@ViewChild()` syntax which you'll see in the next lecture needs to be changed slightly:

Instead of:

```
@ViewChild('serverContentInput') serverContentInput: ElementRef;
```

use

```
@ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
```

The same change (add `{ static: true }` as a second argument) needs to be applied to ALL usages of `@ViewChild()` (and also `@ContentChild()` which you'll learn about later) IF you plan on accessing the selected element inside of `ngOnInit()`.

If you DON'T access the selected element in `ngOnInit` (but anywhere else in your component), `set static: false` instead!

If you're using Angular 9+, you only need to add `{ static: true }` (if needed) but not `{ static: false }`.


### 74. Using Local References in Templates

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656092#questions

Replacing two-way databinding with local references

in cockpit.component.html...
1. change `<input type="text" class="form-control" [(ngModel)]="newServerName" />` to `<input type="text" class="form-control" #serverNameInput />`
2. pass in serverNameInput to `onAddServer`... `(click)="onAddServer(serverNameInput)"` 

...then changed cockpit.component.ts, adding the nameInput argument (of type HTMLInputElement) and then setting the value of serverName to the value property of nameInput...

old...
```
onAddServer() {
this.serverCreated.emit({
    serverName: this.newServerName, 
    serverContent: this.newServerContent
});
}
```
new...
```
onAddServer(nameInput: HTMLInputElement) {
// console.log(nameInput.value);
this.serverCreated.emit({
    serverName: nameInput.value, 
    serverContent: this.newServerContent
});
}
```

Note that the newServerName  property of CockpitComponent are now no longer being used.

### 73. More on View Encapsulation

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656086#questions


* Override css/view encapsulation using the `encapsulation` argument of the `@Component` decorator.
* `ViewEncapsulation.Emulated` is the default (no need to add it)
* `ViewEncapsulation.None` (no attributes being added to elements of your component if you use this (view source and do a compare between `Emulated` and `None`)) 
* `ViewEncapsulation.ShadowDom` uses shadow dom technology.  This should give you same result as `Emulated` but only in browsers that support shadow dom.
* "Note: Shadow DOM is supported by default in Firefox (63 and onwards), Chrome, Opera, and Safari. The new Chromium-based Edge (79 and onwards) supports it too; the old Edge didn't." from https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM

### 72. Understanding View Encapsulation

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656082#questions

### 71. Custom Property and Event Binding Summary

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656080#questions

```
Component communication is a key feature.  With @input & the ability 
to make your properties bindable from outside (from the parent component) using this component.  The same for @output, which allows parent compoents (using this component) to listen to events that you created via event emitters.  Allows you to allow you to make a dynamic app that allows components to talk to each other.  These input & output chains can make things too complicated.  Later in the class: there is another approach to having components talk to each other.

```

### 70. Assigning an Alias to Custom Events

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656078#questions

* `@Output() blueprintCreated...` becomes `@Output('bpCreated') blueprintCreated...`
* Just like chap 68 the alias name is passed as an argument

### 69. Binding to Custom Events

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656076#questions


* inform the parent component that a new server or blueprint is created `onServerAdded()` and `onBlueprintAdded()` created.  these methods will handle/respond to the event
* below is the modified version of file app.component.html.  attributes `(serverCreated)="onServerAdded($event)"` and `(blueprintCreated)="onBlueprintAdded($event)"` are added to the `<app-cockpit>` tag.  these methods are wired to event emitter output properties in file server-element.component.ts.  
* We are passing the event to the method via $event

```
<!-- app.component.html -->
<div class="container">
  <app-cockpit 
    (serverCreated)="onServerAdded($event)"
    (blueprintCreated)="onBlueprintAdded($event)"
  ></app-cockpit>
  <hr>
  <div class="row">
    <div class="col-xs-12">
      <app-server-element 
        *ngFor="let serverElement of serverElements" 
        [srvElement]="serverElement"
      >
      </app-server-element>
    </div>
  </div>
</div>
```

```
// server-element.component.ts (partial)
@Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
@Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

```

### 68. Assigning an Alias to Custom Properties

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656072#questions


assigning an alias the element property... 

* `@Input()` becomes `@Input('srvElement')` in server-element.component.ts
* `[element]="serverElement"` becomes `[srvElement]="serverElement"` in app.component.html

### 67. Binding to Custom Properties

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656066#questions


* by default all properties of components are only accessible by that component (this is good)
* use property binding to bind to properties of other components 
* you have to be explicit about what properties you want to expose to other components
* a decorator is added to a property to expose it to other components.  For example, `@Input()` is added to `element: {type: string,name: string,content: string}`, making it `@Input() lement: {type: string,name: string,content: string}`.  Once this is done we are successfully exposing this property to it's parent component(s) 
* Parent components are components that are hosting/ have implemented a component).  In this example, the app component is a parent of the server-element component.

```
more notes...

bound the 'element' property to the main component by... 

1. adding [element]="serverElement" to 

    <app-server-element 
        *ngFor="let serverElement of serverElements" 
        [element]="serverElement"
    >
    </app-server-element>

    in app.component.html

2. adding @Input() to 

    export class ServerElementComponent implements OnInit {
    @Input() element: {
        type: string,
        name: string,
        content: string
    };

    and importing it: import { Component, Input, OnInit } from '@angular/core';

    in server-element.components.ts 
```

### 66. Property & Event Binding Overview

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656062#questions 

sending data into data into a component and/or receive an event

* HTML Elements - native properties and events
* Directives - custom properties and events
* Components - custom properties and events

### 65. Splitting Apps Into Components

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656060#questions

```
ng g c cockpit --spec false  
ng g c server-element --spec false  

not working.   --spec false is now --skip-tests true  

gtg  

refactor  
```

### 64. Module Introduction

App downloaded.  Installed + launched via...

```
sudo npm i -g npm@6
sudo npm install
ng serve
```y

# Flotsam

