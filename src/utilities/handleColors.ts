import { shuffle } from './generalUtil';

export function assignColors(uniqLang: string[]) {
    let colorDict: { [index: string]: any; } = {};

    let langs = shuffle(uniqLang);

    for (let lang in langs) {
        let currLang: string = uniqLang[lang];
        colorDict[currLang] = selectColors(lang, uniqLang.length);
    }

    return colorDict;
}

function selectColors(colorNum: any, colors: any) {
    if (colors < 1) colors = 1; // defaults to one color - avoid divide by zero
    return "hsl(" + (colorNum * (360 / colors) % 360) + ",60%,45%)";
}