import * as devIcon from 'react-icons/di';

export function capitalFirst(text) {
    text = text.toLowerCase();
    let capitalized = text.charAt(0).toUpperCase() + text.slice(1);

    return capitalized;
}

export function getDevIcon(lang) {
    let LangIcon;

    let formatted = `Di${correctLangName(capitalFirst(lang))}`;

    if (formatted in devIcon) {
        LangIcon = devIcon[formatted];
    } else {
        LangIcon = devIcon['DiVisualstudio']
    }

    console.log(formatted)

    return LangIcon;
}

function correctLangName(name) {
    let newName;
    switch (name) {
        case 'Jquery':
        case 'Javascript': {
            newName = 'Javascript1'
            break;
        }
        case 'Html': {
            newName = 'Html5'
            break;
        }
        case 'Reactjs': {
            newName = 'React';
            break;
        }
        case 'Angular': {
            newName = 'AngularSimple';
            break;
        }
        default: {
            newName = name;
            break;
        }
    }

    return newName;
}

export function getMainLang(langs) {

    let mainLang;
    if (langs.includes('ReactJS')) mainLang = 'ReactJS';
    else if (langs.includes('Angular')) mainLang = 'Angular';
    // else if (langs.includes('Flutter')) mainLang = 'Flutter';
    else mainLang = langs[0];

    return mainLang;
}

export function getUniqLang(repoList) {
    let langList = []
    for (let repo of repoList) {
        langList = langList.concat(repo.language)
    }
    let uniqLang = langList.filter((v, i) => { return i === langList.lastIndexOf(v); });
    uniqLang = uniqLang.filter((v) => { return v.length > 0 });

    uniqLang.sort();
    
    return uniqLang;
}

export function assignColors(uniqLang) {
    let colorDict = {};

    //Goes through every other one in order so colors that are too similar aren't next to each other

    for (let lang = 0; lang < uniqLang.length; lang+=1) {
        colorDict[uniqLang[lang]] = selectColor(lang);
    }

    return colorDict;
}

function selectColor(number) {
    const hue = (number * 137.508) % 360; // use golden angle approximation
    var saturation = number % 2 === 0 ? "60%" : "40%";
    saturation = number % 3 === 0 ? "50%" : saturation;
    var value = number % 2 === 0 ? "40%" : "60%";
    value = number % 4 === 0 ? "50%" : value;
    return `hsl(${hue},${saturation},${value})`;
}


export function parseLangList(list) {
    let res = list[0]

    if (res === '') return res;

    for (let i = 1; i < list.length; i++) {
        res += `, ${list[i]}`
    }

    return res;
}