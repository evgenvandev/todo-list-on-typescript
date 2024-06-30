/*
Freeman A. Essential TypeScript. From beginner to pro - 2019
Листинг 1-13. Тестирование модели данных в файле index.ts в папке src - Стр. 10
*/
import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let todos = [
	new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Shoes"),
	new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)];

let collection = new TodoCollection("Adam", todos);

console.clear();
console.log(`${collection.userName}'s Todo List`);

let newId = collection.addTodo("Go for run");
let todoItem = collection.getTodoById(newId);
console.log(JSON.stringify(todoItem));
