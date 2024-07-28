export default class DynamicArray<T> {
  private size: number;
  private capacity: number;
  private array: T[];

  constructor(capacity = 1) {
    this.size = 0;
    this.capacity = capacity;
    this.array = new Array(this.capacity);
  }

  isEmpty() {
    return this.size == 0;
  }

  prepend(value: T) {
    if (this.isEmpty()) {
      this.array[0] = value;
      return;
    }

    if (this.size === this.capacity) {
      this.capacity *= 2;
      const newArray = new Array(this.capacity);

      newArray[0] = value;
      for (let i = 0; i < this.array.length; i++) {
        newArray[i + 1] = this.array[i];
      }
    } else {
      let next = this.size;

      for (let i = this.size - 1; i >= 0; i--, next--) {
        this.array[next] = this.array[i];
      }

      this.array[0] = value;
    }
    this.size++;
    return this;
  }

  append(value: T) {
    if (this.isEmpty()) {
      this.array[0] = value;
      return;
    }

    if (this.size === this.capacity) {
      this.capacity *= 2;
      const newArray = new Array(this.capacity);

      for (let i = 0; i < this.array.length; i++) {
        newArray[i] = this.array[i];
      }
      this.array = newArray;
    }

    this.array[this.size++] = value;
    return this;
  }

  pod() {
    if (this.isEmpty()) {
      throw new Error("Array is empty");
    }
    this.array[this.size++] = null;
  }

  clear() {
    for (let i = 0; i < this.capacity; i++) {
      this.array[i] = null;
    }
    this.size = 0;
  }

  set(index: number, value: T) {
    this.array[index] = value;

    return this;
  }

  removeAt(index: number) {
    if (index > this.size || index < 0)
      throw new Error("IndexOutOfBoundsException");

    const newArr = new Array(this.size - 1);

    for (let i = 0; i < this.size; i++) {
      if (i === index) i--;

      newArr[i] = this.array[i];
    }

    this.array = newArr;
    this.capacity = --this.size;
    return index;
  }

  removeValueAt(value: T) {
    const removeIdx = this.indexOf(value);
    if (removeIdx < -1) return null;

    this.removeAt(removeIdx);
    return removeIdx;
  }

  indexOf(value: T) {
    for (let i = 0; i < this.size; i++) {
      if (value === this.array[i]) return i;
    }
    return -1;
  }
}
