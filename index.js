class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
   this.items.push(item);
   this.length++;
    
   this.items.sort((a,b) => a-b);
  }

  get(pos) {  
      if(pos < this.length) {
        return this.items[pos];
      } else throw new Error('OutOfBounds');
    }
  
  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[this.items.length - 1]
    }
  }

  min() {
  if (this.items.length === 0) {
    throw new Error('EmptySortedList');
  }

  return this.items[0];
  }

  sum() {

    let sum = this.items.reduce((a, b) => a + b, 0)  
    
    return sum;
   }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
   
    let avg = this.items.reduce((a, b) => a + b, 0) / this.items.length;
    return avg;
}
}

module.exports = SortedList;
