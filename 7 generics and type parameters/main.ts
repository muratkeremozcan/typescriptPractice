function identity<T> (arg: T): T {   // typed function: its argument is of type T, returns something of type T
  return arg;
}

identity(null).name;

identity('Murat').length;

identity<string>('Murat').bold;

