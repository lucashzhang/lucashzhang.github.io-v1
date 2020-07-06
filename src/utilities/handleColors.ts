export function assignColors(uniqLang: string[]) {
    let colorDict: { [index: string]: string; } = {};

    //Goes through every other one in order so colors that are too similar aren't next to each other


    for (let lang = 0; lang < uniqLang.length; lang+=2) {
        colorDict[uniqLang[lang]] = selectColors(lang / 2, uniqLang.length);
    }

    for (let lang = 1; lang < uniqLang.length; lang+=2) {
        colorDict[uniqLang[lang]] = selectColors(uniqLang.length - Math.floor(lang / 2), uniqLang.length);
    }

    console.log(colorDict);

    return colorDict;
}

function selectColors(colorNum: number, colors: number) {
    if (colors < 1) colors = 1; // defaults to one color - avoid divide by zero
    return "hsl(" + (colorNum * (360 / colors) % 360) + ",60%,45%)";
}