import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balloons',
  template: `<div id="balloon-container"></div>`,
  styleUrls: ['./balloons.component.css'],
})
export class BalloonsComponent implements OnInit {

  ngOnInit(): void {
    const density = 7;
    const balloons = [];
    const colors = ['yellow', 'green', 'blue', 'red'];

    const stringElement = document.createElement("div");
    stringElement.classList.add("string");

    const balloonContainer = document.getElementById("balloon-container");

    for (let i = 0; i < density; i++) {
      const element = document.createElement("div");
      element.classList.add("balloon");
      element.classList.add(randomColor());

      element.append(stringElement.cloneNode());
      balloonContainer.append(element);
     
      setTimeout(() => {
        releaseBalloon(element);
      }, (i * 2000) + random(500, 1000));
    }


    function randomColor() {
      return colors[ random(0, colors.length) ];
    }

    function random (min, max){
      return Math.floor(Math.random() * (max-min)) + min;
    }

    function releaseBalloon(balloon) {
      const delay = random(100, 1000);
      const x = random(-99, -30);
      const y = random(-99, -30);

      const sequence = [{
          offset: 0,
          transform: `rotateZ(45deg) translate(0, 0)`
      }];

      if(random(0,2) === 0) {
          balloon.style.left = `${-1*x}vw`;

          sequence.push({
            offset: x/-200,
            transform: `rotateZ(45deg) translate(${x}vw, 0)`
          });
          sequence.push({
            offset: (x+y)/-200,
            transform: `rotateZ(45deg) translate(${x}vw, ${y}vh)`
          });
          sequence.push({
            offset: (-100+y)/-200,
            transform: `rotateZ(45deg) translate(-100vw, ${y}vh)`
          });
      } else {
          sequence.push({
            offset: y/-200,
            transform: `rotateZ(45deg) translate(0, ${y}vh)`
          });
          sequence.push({
            offset: (x+y)/-200,
            transform: `rotateZ(45deg) translate(${x}vw, ${y}vh)`
          });
          sequence.push({
            offset: (-100+x)/-200,
            transform: `rotateZ(45deg) translate(${x}vw, -100vh)`
          });
      }

      sequence.push({
        offset: 1,
        transform: `rotateZ(45deg) translate(-100vw, -100vh)`
      });

      const balloonAnimation = balloon.animate(sequence, {
        duration: 15000,
        delay: delay
      });

      balloonAnimation.onfinish = () => { releaseBalloon(balloon) }
      
    }
  }
}