"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
/*
Freeman A. Essential TypeScript. From beginner to pro - 2019
Листинг 1-10. Содержимое файла todoItem.ts в папке src - Стр. 8
*/
class TodoItem {
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    printDetails() {
        console.log(`${this.id}\t${this.task} ${this.complete ? '\t(complete)' : ''}`);
    }
}
exports.TodoItem = TodoItem;
