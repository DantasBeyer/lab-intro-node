class SortedList {
  constructor() {
    let list = new SortedList(itens,lenght);
    this.itens = []
    this.lenght = this.itens.length 
    
  }

  add(item) {
    this.itens.push(item);
    this.itens.sort((a, b) => a - b);
  }

  get(pos) {
    let pos = this.itens[2];
    if ( pos == this.itens.length){
      true
    } else {
      throw new Error('OutOfBounds')
    }
  }
 

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
