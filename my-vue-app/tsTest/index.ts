/*
 * @Author: ykx
 * @Date: 2022-07-08 17:36:28
 * @LastEditTime: 2022-07-11 10:01:44
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \my-vue-app\tsTest\index.ts
 */
function test<T> (arg: T): T {
    console.log(arg);
    return arg
}

test<number>(123);
test<string>('111');


interface Search {
    <T, Y>(name: T, age: Y) :T
}
let fn:Search = function <T, Y>(name: T, age: Y): T {
    return name
}

console.log(fn('123', 11))

interface Person {
    name: string;
    age: number;
}
function student<T extends Person>(arg: Partial<T>): Partial<T> {
    return arg
}

console.log(student({name: 'ykx', age: 20}))

interface Info{
    newName?: string;
    newAge?: number;
    newHeight?: number;
}
type Attrs = 'age' | 'name' | 'height';
const obj: Record<Attrs, Info> = {
    name: { newName: 'ykx'},
    age: { newAge: 20},
    height: { newHeight: 170},
}
console.log(obj);


interface Todo {
    title: string;
    desc: string;
    time: string
}

type TypePreview = Pick<Todo, 'title'>

const todo: TypePreview = {
    title: '123',
}