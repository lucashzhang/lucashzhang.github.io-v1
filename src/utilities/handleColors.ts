export function assignColors(uniqLang: string[]) {
    let colorDict: { [index: string]: any; } = {};

    //Goes through every other one in order so colors that are too similar aren't next to each other

    for (let lang = 0; lang < uniqLang.length; lang+=2) {
        let currLang: string = uniqLang[lang];
        colorDict[currLang] = selectColors(lang, uniqLang.length);
    }

    for (let lang = 1; lang < uniqLang.length; lang+=2) {
        let currLang: string = uniqLang[lang];
        colorDict[currLang] = selectColors(lang, uniqLang.length);
    }

    return colorDict;
}

function selectColors(colorNum: any, colors: any) {
    if (colors < 1) colors = 1; // defaults to one color - avoid divide by zero
    return "hsl(" + (colorNum * (360 / colors) % 360) + ",60%,45%)";
}