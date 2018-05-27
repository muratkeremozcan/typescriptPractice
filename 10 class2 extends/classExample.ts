class App {
  id: string; // property declarations, so that the constructor can use them
  styleName: string;
  timeout: number;
  constructor() { // the constructor gets called as soon as the class is initialized
    this.id = 'rainbow';
    this.styleName = 'border-color';
    this.timeout = 1500;
  }
}
function main(AppComponentClass) {
  const app = new AppComponentClass;
}

main(App);
