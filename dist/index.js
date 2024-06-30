"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Freeman A. Essential TypeScript. From beginner to pro - 2019
Листинг 1-13. Тестирование модели данных в файле index.ts в папке src - Стр. 10
*/
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
let todos = [
    new todoItem_1.TodoItem(1, "Buy Flowers"), new todoItem_1.TodoItem(2, "Get Shoes"),
    new todoItem_1.TodoItem(3, "Collect Tickets"), new todoItem_1.TodoItem(4, "Call Joe", true)
];
let collection = new todoCollection_1.TodoCollection("Adam", todos);
console.clear();
console.log(`${collection.userName}'s Todo List`);
let newId = collection.addTodo("Go for run");
let todoItem = collection.getTodoById(newId);
console.log(JSON.stringify(todoItem));
