window.addEventListener('load', () => {
  let objectArray = [];
  const numberOfPeople = 100
  const body = document.querySelector('body');
  class People {
    constructor() {
      this.x = Math.random() * window.innerWidth / 3;
      this.y = Math.random() * window.innerHeight / 3 + 100;
      this.limitX = body.width;
      this.limitY = body.width;
      this.velocity = Math.random() * 20;
    }

    move() {
      let direction = [this.x, this.y];
      let displacement = direction[Math.floor(Math.random() * direction.length)];
      if (displacement == this.x) {
        this.x += this.velocity
        if (this.x == this.limitX) {
          this.x = 0
        }
      } else {
        this.y += this.velocity;
        if (this.y == this.limitY) {
          this.y = 0;
        }
      }
    }
    draw() {
      const object = document.createElement('div');
      object.setAttribute('style', 'background-color: blue; position: absolute; width: 20px; height: 20px; border-radius: 50%')
      object.style.transform = `translate(${this.x}px, ${this.y}px)`;
      body.appendChild(object);
    }
  }


  function init() {
    for (let i = 0; i < numberOfPeople; i++) {
      objectArray.push(new People)
    }
  }
  init();

  function animate() {
    for (let i = 0; i < objectArray.length; i++) {
      objectArray[i].move();
      objectArray[i].draw();

    }
    requestAnimationFrame(animate)
  }

  animate()

  function counter() {
    let count = 0
    const border = document.querySelector('border');
    const positionX = 480;
    const counter = document.getElementById('count-el');
    for (let i = 0; i < objectArray.length; i++) {
      if (objectArray[i].x == positionX) {
        counter.textContent = count++;
        console.log(count)
      }
    }
  }
  counter()

})