type Includes<T extends readonly any[], U> = T extends [infer F, ...infer Rest]
  ? _Equal<F, U> extends true
    ? true
    : Includes<Rest, U>
  : false
