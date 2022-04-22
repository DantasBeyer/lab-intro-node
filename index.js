class SortedList {
  constructor(list) {
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
 

  max(highestValue) {
    let highestValue = this.itens.max ();
    if (highestValue == this.itens.length) {
      true
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min(lowestValue) {
    let lowestValue = tihs.intens.min();
    if (lowestValue == this.itens.length) {
      true
    } else {
      throw new Error('EmptySortedList');
    }
  }
 
  sum() {}

  avg() {}
}

module.exports = SortedList;
