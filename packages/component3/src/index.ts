
import {getName as getName1} from "test-lerna-lib1";
import {getName as getName2} from "test-lerna-lib2";
console.log(`在com3调用${getName1()}`);
console.log(`在com3调用${getName2()}`);

console.log(`我是com3`);
