import {
  AfterViewInit,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';

import {Observable} from 'rxjs';
import {CarouselItemDirective} from '../directives/carousel-item.directive';
import {animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style} from '@angular/animations';

@Component({
  selector: 'app-carousel',
  exportAs: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {

  ngOnInit(): void {
  }

  constructor(private builder: AnimationBuilder) {
  }

  @ContentChildren(CarouselItemDirective) items: QueryList<CarouselItemDirective>;
  @ViewChild('carousel') private carousel: ElementRef;
  @ViewChild('carouselInner') private carouselInner: ElementRef;
  @ViewChildren('carouselItem', {read: ElementRef}) private itemsElements: QueryList<ElementRef>;
  @Input() timing = '250ms ease-in';
  @Input() showControls = true;
  private slidesToDisplay: number = 5;
  @Input() sm: number = 1;
  @Input() md: number = 2;
  @Input() lg: number = 5;
  @Input() xlSlidesToDisplay: number = 8;
  @Input() slideMargin: 0;
  private player: AnimationPlayer;
  private itemWidth: number;
  private currentSlide = 0;
  slideWidth: number = 0;
  carouselWrapperStyle = {};
  slideWidthStyle = {};
  showNext = true;
  showPrev = true;
  private breakpoints = {
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576
  };

  slide(type: string) {
    let nextSlide: number;
    if (type === 'next') {
      nextSlide = (this.currentSlide + this.slidesToDisplay) * 1;
    }
    if (type === 'prev') {
      nextSlide = (this.currentSlide - this.slidesToDisplay) * 1;
    }
    if (type === 'current') {
      nextSlide = this.currentSlide;
    }
    // nextSlide = (type === 'next') ? (this.currentSlide + this.slidesToDisplay) * 1 : (this.currentSlide - this.slidesToDisplay) * 1;
    const amount = nextSlide / this.slidesToDisplay;
    this.currentSlide = nextSlide;
    const offset = this.carousel.nativeElement.offsetWidth * amount;
    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carouselInner.nativeElement);
    this.player.play();
  }


  private buildAnimation(offset) {
    if (offset < 0) {
      offset = 0;
    }
    return this.builder.build([
      animate(this.timing, style({transform: `translateX(-${offset}px)`}))
    ]);
  }

  next() {

    if (this.currentSlide + (this.slidesToDisplay) >= this.items.length) return;
    this.slide('next');
  }

  prev() {
    if (this.currentSlide === 0) return;
    this.slide('prev');
  }

// constructor( private builder : AnimationBuilder ) {
// }

  calculateProportions() {
    this.slidesToDisplay = +this.sm;
    if (window.innerWidth >= this.breakpoints.md) {
      this.slidesToDisplay = +this.md;
    }
    if (window.innerWidth >= this.breakpoints.lg) {

      this.slidesToDisplay = +this.lg;
    }
    if (window.innerWidth >= this.breakpoints.xl) {
      this.slidesToDisplay = +this.xlSlidesToDisplay;
    }
    this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width;
    this.slideWidth = (this.carousel.nativeElement.offsetWidth / this.slidesToDisplay) - this.slideMargin;
    this.slideWidthStyle = {
      width: `${this.slideWidth}px`,
      'margin-right': `${this.slideMargin}px`
    };
    console.log(this.slideWidthStyle, 'slideWidthStyle '); //deleteinbuild
  }

  viewportResize() {
    const that = this;
    window.addEventListener('resize', function () {
        setTimeout(() => {
          that.calculateProportions();
          that.slide('current');
        }, 300);
      }
    );
  }

  ngAfterViewInit() {
    // For some reason only here I need to add setTimeout, in my local env it's working without this.
    setTimeout(() => {
      this.calculateProportions();
      this.viewportResize();
    });

  }

}
