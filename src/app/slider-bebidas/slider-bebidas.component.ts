import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider-bebidas',
  standalone: true,
  imports: [],
  templateUrl: './slider-bebidas.component.html',
  styleUrl: './slider-bebidas.component.css'
})
export class SliderBebidasComponent implements AfterViewInit {
  value = 0;
  trailValue = 0;
  interval = 4000;
  start: any;
  slider: HTMLElement | null = null;
  trails: NodeListOf<HTMLDivElement> | null = null;

  constructor(private router: Router){

  }

  redirigirPlato1(){
    this.router.navigateByUrl('/plato1')
  }

  ngAfterViewInit() {
    this.slider = document.querySelector('.slider');
    this.trails = document.querySelectorAll('.trail div');
    
    // Eliminar el setInterval para que el slider no cambie automáticamente
    // this.start = setInterval(() => this.slide('increase'), this.interval);
  
    this.initializeEventListeners();
    this.initializeTouchEvents();
  }
  
  initializeEventListeners() {
    if (this.trails) {
      this.trails.forEach((cur, index) => {
        cur.addEventListener('click', (e) => this.clickCheck(e, index));
      });
    }
  
    document.querySelectorAll('svg').forEach(cur => {
      cur.addEventListener('click', () => cur.classList.contains('next') ? this.slide('increase') : this.slide('decrease'));
    });
  }
  
  initializeTouchEvents() {
    let start = 0;
    let move = 0;
    let change = 0;
    let sliderWidth = 0;
  
    if (this.slider) {
      this.slider.addEventListener('touchstart', (e) => {
        start = e.touches[0].clientX;
        sliderWidth = this.slider!.clientWidth / (this.trails ? this.trails.length : 1);
      });
  
      this.slider.addEventListener('touchmove', (e) => {
        e.preventDefault();
        move = e.touches[0].clientX;
        change = start - move;
      });
  
      this.slider.addEventListener('touchend', () => {
        if (change > (sliderWidth / 4)) {
          this.slide('increase');
        } else if ((change * -1) > (sliderWidth / 4)) {
          this.slide('decrease');
        }
        [start, move, change, sliderWidth] = [0, 0, 0, 0];
      });
    }
  }
  
  slide(condition: string) {

    condition === 'increase' ? this.initiateINC() : this.initiateDEC();
    this.move(this.value, this.trailValue);
  
   
  }
  
  initiateINC() {
    if (this.trails) {
      this.trails.forEach(cur => cur.classList.remove('active'));
    }
    this.value === 80 ? this.value = 0 : this.value += 20;
    this.trailUpdate();
  }
  
  initiateDEC() {
    if (this.trails) {
      this.trails.forEach(cur => cur.classList.remove('active'));
    }
    this.value === 0 ? this.value = 80 : this.value -= 20;
    this.trailUpdate();
  }
  
  move(S: number, T: number) {
    if (this.slider && this.trails) {
      this.slider.style.transform = `translateX(-${S}%)`;
      this.trails[T].classList.add('active');
    }
  }
  
  trailUpdate() {
    if (this.value === 0) {
      this.trailValue = 0;
    } else if (this.value === 20) {
      this.trailValue = 1;
    } else if (this.value === 40) {
      this.trailValue = 2;
    } else if (this.value === 60) {
      this.trailValue = 3;
    } else {
      this.trailValue = 4;
    }
  }
  
  clickCheck(e: Event, index: number) {
    
    if (this.trails) {
      this.trails.forEach(cur => cur.classList.remove('active'));
    }
  
    const check = e.target as HTMLElement;
    check.classList.add('active');
    this.value = index * 20;
    this.trailUpdate();
    this.move(this.value, this.trailValue);
 
   
}
}
