# Section 5: Components & Databinding Deep Dive

## Progress

### Next Steps

* TODO: proceed with section 70

### Completed

* DONE 1/10/2022: rewatch & review section 67 (improve notes, close knowledge gaps)
* DONE 1/11/2022: rewatch & review section 66 (improve notes, close knowledge gaps)
* DONE 1/11/2022: rewatch & review section 68 (improve notes, close knowledge gaps)
* DONE 1/11/2022: rewatch & review section 69 (improve notes, close knowledge gaps)

## Notes

### number. chapter_title

link_url

```
notes
```

### 71. chapter_title

link_url

```
notes

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

