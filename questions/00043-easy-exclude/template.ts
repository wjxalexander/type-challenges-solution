type MyExclude<T, U> = T extends U ? never : T
let x: Exclude<'a' | 'b' | 'c', 'a' | 'b'>
