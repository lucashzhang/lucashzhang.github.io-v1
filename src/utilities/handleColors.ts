export function assignColors(uniqLang: string[]) {
    let colorDict: { [index: string]: string; } = {};

    //Goes through every other one in order so colors that are too similar aren't next to each other


    for (let lang = 0; lang < uniqLang.length; lang+=1) {
        colorDict[uniqLang[lang]] = selectColor(lang);
    }

    console.log(colorDict);

    return colorDict;
}

function selectColor(number: number) {
    const hue: number = (number * 137.508) % 360; // use golden angle approximation
    const saturation: string = number % 2 == 0 ? "65%" : "50%";
    const value: string = number % 2 == 0 ? "40%" : "55%";
    return `hsl(${hue},${saturation},${value})`;
}