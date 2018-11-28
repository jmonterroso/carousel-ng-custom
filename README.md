# SliderDev

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.
## Production Sever
You can find the application deployed in the following URL https://keen-banach-3593c4.netlify.com/

_For the deployment was used netlify in order to use a CI for keep the code updated with master branch._


# Directives
## App Carousel Directive
### Input Parameters and Default Values:
    
    
    timing:String: (Default:'250ms ease-in'): Speed and type of css animation for carousel transition    
    sm: number = (Default 1) : Number of slides to be shown per screen on small resolution width > 576px 
    md: number = 2 : Number of slides to be shown per screen on medium resolution, width> 768px
    lg: number = 5: : Number of slides to be shown per screen on large resolution width > 992px
    xlSlidesToDisplay: number = 8 : Number of slides to be shown per screen on xl resolution width > 1200px
    slideMargin: 0 : Margin Right between slides.
 
 #### Example how to call component
 ```
 <app-carousel *ngIf="carouselItems$ | async" slideMargin="10" lg="5" md="3" sm="1">
   <ng-container *ngFor="let item of carouselItems$ | async;">
     <ng-container *carouselItem>
       <img [src]="item.largeImageURL" class="img-fluid j-carousel-img"/>
       <div class="row j-carousel-caption mt-auto">
         <span class="col-12 mt-1"><strong>User: </strong>{{item.user}} - <strong>Likes: </strong> {{item.likes}}</span>
       </div>
     </ng-container>
   </ng-container>
 </app-carousel>
 ```
 
 
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
The code of this project was using angular cli to generate services directives and so on.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
