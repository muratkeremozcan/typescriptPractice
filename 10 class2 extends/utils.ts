export type ValidStyleName = 'border-color' | 'background-color';

export class Component { // parent class
  constructor() {
    this.log();
  }
  log() {
    console.log('Component got created');
  }
  whoAmI() {
    console.log('I\'m a component');
  }
}
export class App extends Component { // child class
  static elId: string = 'rainbow'; // static is to keep the declaration at the class vs instantiation
  style: ValidStyleName;
  int: number;
  constructor() {
    super(); // super method is to call the constructor of the parent class. otherwise you cannot have a constructor at the child
    this.style = 'border-color';
    this.int = 1500;
  }
  startOnInit(): void {
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
