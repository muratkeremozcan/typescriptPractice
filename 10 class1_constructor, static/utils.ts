export type ValidStyleName = 'border-color' | 'background-color';

export interface IApp {
  // interface is for the INSTANCE of a class, not the class itself
  style: ValidStyleName;
  int: number;
}

export class App implements IApp {
  static elId: string = 'rainbow'; // static is to keep the declaration at the class vs instantiation
  style: ValidStyleName;
  int: number;
  constructor() {
    this.style = 'border-color';
    this.int = 1500;
  }
}

export function mutateElement(app: IApp): void {
  // var appComponent = document.getElementById(app.elId);
  var appComponent = document.getElementById(App.elId); // instead of the instance, using STATIC we can call the class itself
  setInterval(() => {
    if (appComponent) {
      appComponent.style[app.style] = generateColor();
    }
  }, app.int);
}
export function generateColor(): string {
  return '#' + (((1 << 24) * Math.random()) | 0).toString(16);
}
