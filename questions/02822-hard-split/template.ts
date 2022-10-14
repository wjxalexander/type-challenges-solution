type Split<S extends string, SEP extends string> = S extends ''
  ? SEP extends ''
    ? []
    : ['']
  : S extends `${infer H}${SEP}${infer Rest}`
    ? [H, ...Split<Rest, SEP>]
    : S extends ''
      ? []
      : string extends S
        ? string[]
        : [S]
