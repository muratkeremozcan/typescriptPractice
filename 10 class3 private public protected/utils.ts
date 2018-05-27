export type ValidStyleName = 'border-color' | 'background-color';

export interface Component { // parent class
  startOnInit(_p): void;
}
export class App implements Component { // child class
  static elId: string = 'rainbow'; // static is to keep the declaration at the class vs instantiation
  style: ValidStyleName;
  int: number;
  constructor() {
    this.style = 'border-color';
    this.int = 1500;
  }
  startOnInit(_param): void {
    var appComponent = document.getElementById(App.elId); // instead of the instance, using STATIC we can call the class itself
    setInterval(() => {
      if (appComponent) {
        appComponent.style[this.style] = generateColor();
      }
    }, this.int);
  }
}
export function generateColor(): string {
  return '#' + (((1 << 24) * Math.random()) | 0).toString(16);
}
