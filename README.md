# Section 5: Components & Databinding Deep Dive

*This is one of several repos that I created for the course "Angular - The Complete Guide (2022 Edition)".  For a complete list of repos created for this course: https://gist.github.com/christophervigliotti/92e5b3b93cbe9d630d8e9d81b7eb6636 .*

## Next Time

* Additional focus on the three ways to get data from the view (see Section 76 for the list).  Add notes.
77

## Notes

### number. chapter_title

url_goes_here

```
notes_go_here
```

### number. chapter_title

url_goes_here

```
notes_go_here
```

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

