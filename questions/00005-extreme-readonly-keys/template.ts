type _Equal<First, Second> = (<T>() => T extends First ? true : false) extends <
  T,
>() => T extends Second ? true : false
  ? true
  : false

type GetReadonlyKeys<T> = {
  [P in keyof T]-?: _Equal<
    { [O in P]: T[P] },
    { -readonly [O in P]: T[P] }
  > extends true
    ? never
    : P
}[keyof T]
