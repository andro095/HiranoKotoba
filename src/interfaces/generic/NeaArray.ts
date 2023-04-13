type BNEArray<T, N extends number, Current extends T[]> = Current['length'] extends N ? [...Current, ...T[]] : BNEArray<T, N, [...Current, T]>;

export type NEArray<T, N extends number> = BNEArray<T, N, []>;