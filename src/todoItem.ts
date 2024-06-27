/*
Freeman A. Essential TypeScript. From beginner to pro - 2019
Листинг 1-10. Содержимое файла todoItem.ts в папке src - Стр. 8
*/
export class TodoItem {
  constructor(
    public id: number,
    public task: string,
    public complete: boolean = false
  ) {}

  printDetails(): void {
    console.log(
      `${this.id}\t${this.task} ${this.complete ? '\t(complete)' : ''}`
    );
  }
}
