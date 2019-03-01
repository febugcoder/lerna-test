
import {getName as getName1} from "test-lerna-lib1";
console.log(`在com2调用${getName1()}`);
console.log(`我是com2`);

const name = "com2";

export const getName = () => {
    return name;
};
