// type MyAwaited<T> = T extends Promise<infer P>
//   ? P extends Promise<infer X>
//     ? MyAwaited<Promise<X>>
//     : P
//   : never
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer P>
  ? P extends Promise<unknown>
    ? MyAwaited<P>
    : P
  : never
