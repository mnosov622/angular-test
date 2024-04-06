import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pizza-card',
  standalone: true,
  templateUrl: './pizza-card.component.html',
  styleUrl: './pizza-card.component.css',
})
export class PizzaCardComponent {
  constructor() {}

  @Input() title!: string;
  @Input() description!: string;
  @Input() pizzaImage!: string;

  openFullscreen(pizzaImage: string) {
    const img = new Image();
    img.src = '../../../assets/img/' + pizzaImage + '.jpg';
    img.onload = function () {
      const elem = document.createElement('div') as any;
      elem.style.backgroundImage = `url(${img.src})`;
      elem.style.backgroundSize = 'contain';
      elem.style.backgroundRepeat = 'no-repeat';
      elem.style.backgroundPosition = 'center';
      elem.style.width = '100%';
      elem.style.height = '100%';
      document.body.appendChild(elem);

      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
      }

      elem.onclick = function () {
        if ((document as any).exitFullscreen) {
          (document as any).exitFullscreen();
        } else if ((document as any).mozCancelFullScreen) {
          /* Firefox */
          (document as any).mozCancelFullScreen();
        } else if ((document as any).webkitExitFullscreen) {
          /* Chrome, Safari and Opera */
          (document as any).webkitExitFullscreen();
        } else if ((document as any).msExitFullscreen) {
          /* IE/Edge */
          (document as any).msExitFullscreen();
        }
        document.body.removeChild(elem);
      };
    };
  }
}
