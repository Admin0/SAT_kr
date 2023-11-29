class stare {
  /**
   * 당신이 그것을 보지 않는 순간에도, 그것은 당신을 주시한다.
   * @param {*} target_selector 어떤 요소가 당신을 바라볼지 정해보세요
   * @param {*} options 몇가지 옵션을 제공합니다 (근데 기본값으로 두고 쓰는 거 추천)
   * - [perspective] 대상을 바라보는 시점의 거리 (단위 px, 기본 값 1000)
   * - [angle] css rotate3d의 각도 (단위 deg, 기본 값 15)
   */
  constructor(target_selector, options = { perspective: 1000, angle: 15 }) {
    this.target = document.querySelectorAll(target_selector);
    this.options = options;

    document.onmousemove = (event) => {
      this.target.forEach((element) => {
        if (window.innerWidth > element.offsetWidth + 48) {

          const a = this.options.angle;
          const x0 = element.getBoundingClientRect().y + element.offsetHeight / 2;
          const x = ((x0 - event.pageY) / window.innerHeight) * 2;
          // const x = (.5 - event.pageY / window.innerHeight) * 2; // not using x0
          const y0 = element.getBoundingClientRect().x + element.offsetWidth / 2;
          const y = ((event.pageX - y0) / window.innerWidth) * 2;
          // const y = (-.5 + event.pageX / window.innerWidth) * 2; // not using y0
          const z = 0;
          element.style.transform = `rotate3d(${x}, ${y}, ${z}, ${a * (x ** 2 + y ** 2)}deg)`;


          element.parentNode.style.perspective = `${this.options.perspective}px`;
        } else {
          this.target.forEach((element) => { element.style.transform = `rotate3d(0, 0, 0, 0)`; });
        }
      });
    };

  }

  perspective(v) { this.options.perspective = v != null ? v : 1000; return this; }
  angle(v) { this.options.angle = v != null ? v : 15; return this; }
}