export const capitalize = (str:string) => str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase()

export const padFront = (str:string, width:number, char:string=' ') => (new Array(Math.max(width - str.length, 0))).fill(char).join('') + str

export const padBack = (str:string, width:number, char:string=' ') => str + (new Array(Math.max(width - str.length))).fill(char).join('')