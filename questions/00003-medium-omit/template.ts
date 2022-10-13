type _MyExclude<T, K> = T extends K ? never : T

type _MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
type MyOmit<T, K extends keyof any> = _MyPick<T, _MyExclude<keyof T, K>>
