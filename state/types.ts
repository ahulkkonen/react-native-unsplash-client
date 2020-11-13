import { Color } from "../types";

export type UnsplashItem = {
    id: number;
    src: string;
    colors: [Color];
}

const asd: UnsplashItem = {
    id: 1,
    src: 'sdsad',
    colors: [{r: 1, g: 2, b: 2}]
}