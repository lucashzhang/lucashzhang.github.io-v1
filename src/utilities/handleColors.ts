export function assignColors(uniqLang: string[]) {
    let colorDict: { [index: string]: string; } = {};

    //Goes through every other one in order so colors that are too similar aren't next to each other

    for (let lang = 0; lang < uniqLang.length; lang+=1) {
        colorDict[uniqLang[lang]] = selectColor(lang);
    }

    return colorDict;
}

function selectColor(number: number) {
    const hue: number = (number * 137.508) % 360; // use golden angle approximation
    var saturation: string = number % 2 === 0 ? "60%" : "40%";
    saturation = number % 3 === 0 ? "50%" : saturation;
    var value: string = number % 2 === 0 ? "40%" : "60%";
    value = number % 4 === 0 ? "50%" : value;
    return `hsl(${hue},${saturation},${value})`;
}