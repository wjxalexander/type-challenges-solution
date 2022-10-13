type IndexOf<T extends any[], U, Acc extends any[] = []> = _Equal<
  T[0],
  U
> extends true
  ? Acc["length"]
  : T extends [infer F, ...infer Rest]
  ? IndexOf<Rest, U, [...Acc, F]>
  : -1
