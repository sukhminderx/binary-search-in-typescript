export class BinarySearch {
  constructor(list: Array<number>, val: number) {
    console.log(list);
    console.log(this.search(list, 0, list.length - 1, val));
  }

  search(
    list: Array<number>,
    lowIndex: number,
    highIndex: number,
    data: number
  ): boolean {
    let mid = Math.ceil(lowIndex + (highIndex - lowIndex) / 2);
    if(lowIndex>highIndex) {
      return false;
    } else if(list[mid]===data){
      return true;
    } else if (list[mid]<data) {
      return this.search(list, mid+1, highIndex, data);
    } else {
      return this.search(list, lowIndex, mid-1, data);      
    }
  }
}
