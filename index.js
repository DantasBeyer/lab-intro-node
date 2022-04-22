class SortedList {
  constructor(itens,lenght) {
    this.itens = []
    this.lenght = this.itens.length
  }

  add(item) {
    this.itens.push(item);
    this.itens.sort((a, b) => a - b);
  }

  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
