type Push<T, U> = T extends any[] ? [...T, U] : never
