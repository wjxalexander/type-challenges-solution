type IsTuple<T> = T extends never
  ? false
  : T extends readonly any[]
    ? [...T, any]['length'] extends T['length'] // push an element in to original array
        ? false
        : true
    : false
