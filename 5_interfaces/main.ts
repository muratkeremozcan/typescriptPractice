interface IBook {
    author: string,
    name: string,
    isnb: number
}
class Book implements IBook {
    author: string; // need properties of the interface
    name: string;
    isnb: number;
    constructor (
        author: string,  // need constructor in the class
        name: string,
        isnb: number) {}
}

interface ILibrary {
    [index: string]: IBook // key value pair . Key is array string, value has to use IBook interface (author name isnb and their types)
}

let lib: ILibrary = {}; // the variable lib is using the ILibrary interface. index has to be string array, value has to be use IBook interface

lib["X132K_hash_value"] = new Book("Kyle Simpson", "You don't know JS", 93848585);