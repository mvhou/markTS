export const isNumber = (c:string):boolean => (c >= '0' && c <= '9');

export const isUpper = (c:string):boolean => (c >= 'A' && c <= 'Z');

export const isLower = (c:string):boolean => (c >= 'a' && c <= 'z');

export const isSpace = (c:string):boolean => [' ', '\n', '\t' , '\r', '\v'].includes(c);