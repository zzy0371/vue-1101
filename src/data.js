export default {
	name:"qikuedu",
	addr:"东三街"
}


let num = 10;
let age = 50;
let sex = 1;

export {num,age}


// 



//   第一种
// 在js代码中 使用export  default  {}  可以导出一个未命名的对象      这种方式导入时 import 自定义对象名 from  js文件路径
//   


// 第二种
// 在js代码中 使用 export { 导出变量名, }      这种方式导入时  import {导出变量名} from 'js文件路径'