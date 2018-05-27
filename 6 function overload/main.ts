type ValidStyleName = 'border-color' | 'background-color';
interface IMutateElement {
  elId: string;
  style: ValidStyleName;
  int: number;
}
function mutateElement(elId: string, style: ValidStyleName, int: number): void;  // declare the overloads
function mutateElement(option: IMutateElement): void;
function mutateElement(optionsOrID, style?, int?): void { // remember optional parameters
  if (typeof optionsOrID == 'string') { // check the type of passed in parameter
    console.log('if the first parameter is string, do this');
  } else {
    console.log('if the first parameter is an interface, do this');
  }
  function main() {
    mutateElement('rainbow', 'background-color', 1500); // pass in the parameters
    mutateElement({ elId: 'rainbow', style: 'border-color', int: 1500 });  // or pass in the interface
  }
}
