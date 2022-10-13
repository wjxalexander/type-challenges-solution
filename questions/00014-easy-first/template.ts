type First<T extends readonly any[]> = T["length"] extends 0 ? never : T[0]
