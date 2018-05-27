export type ValidStyleName = 'border-color' | 'background-color';

export class App { // child class
  public static elId: string = 'rainbow'; // can be PRIVATE STATIC too
  private readonly style: ValidStyleName; // private cannot be used by child class , READONLY cannot be modified by other
  public int: number; // public can be used by child class and another module
  constructor() {
    this.style = 'border-color';
    this.int = 1500;
  }
  protected startOnInit(): void { // protected allows it to be called by child class and not by another module
    var appComponent = document.getElementById(App.elId); // instead of the instance, using STATIC we can call the class itself
    setInterval(() => {
      if (appComponent) {
        appComponent.style[this.style] = generateColor();
      }
    }, this.int);
  }
}

class MyApp extends App {
  constructor() {
    super();
    this.startOnInit();
    this.int;
  }
}
export function generateColor(): string {
  return '#' + (((1 << 24) * Math.random()) | 0).toString(16);
}
