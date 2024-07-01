/*
Freeman A. Essential TypeScript. From beginner to pro - 2019
Листинг 1-20. Получение элементов коллекции в файле index.ts в папке src - Стр. 15
*/
import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let todos: TodoItem[] = [
	new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Shoes"),
	new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)];

let collection: TodoCollection = new TodoCollection("Adam", todos);

console.clear();
console.log(`${collection.userName}'s Todo List`);

collection.getTodoItems(true).forEach(item => item.printDetails());