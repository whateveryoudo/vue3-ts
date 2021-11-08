/*
 * @Author: ykx
 * @Date: 2021-01-21 18:33:06
 * @LastEditTime: 2021-01-21 19:04:51
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \ts-base\test.ts
 */
interface Array1 {
    [index: number]: number;
    length: number;
    callee: Function;
}
function sum(arg1: number, arg2: number, arg3: number) {
    let args: Array1 = arguments;
    console.log(args[0] + args[1]);
}
sum(1, 2, 3)