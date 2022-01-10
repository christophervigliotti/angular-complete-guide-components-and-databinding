# Section 5: Components & Databinding Deep Dive

## Next Time

* rewatch 67
* 68
* 69

## Notes

### number. chapter_title

link_url

```
notes
```

### 69. Binding to Custom Events

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656076#questions

```
notes
```

### 68. Assigning an Alias to Custom Properties

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656072#questions


assigning an alias the element property... 

* `@Input()` becomes `@Input('srvElement')` in server-element.component.ts
* `[element]="serverElement"` becomes `[srvElement]="serverElement"` in app.component.html

```
```

### 67. Binding to Custom Properties

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656066#questions

```
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

