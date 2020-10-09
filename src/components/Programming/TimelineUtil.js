import * as devIcon from 'react-icons/di';

export function capitalFirst(text) {
    text = text.toLowerCase();
    let capitalized = text.charAt(0).toUpperCase() + text.slice(1);

    return capitalized;
}

export function getDevIcon(name, desc) {
    let LangIcon;
    let formatted = `Di${capitalFirst(name)}`
    formatted = correctLangName(formatted);

    if (RegExp('\\breact\\b').test(desc.toLowerCase()) || RegExp('\\breactjs\\b').test(desc.toLowerCase())) {
        formatted = 'DiReact';
    } else if (RegExp('\\bangular\\b').test(desc.toLowerCase())) {
        formatted = 'DiAngularSimple';
    }

    if (formatted in devIcon) {
        LangIcon = devIcon[formatted];
    } else {
        LangIcon = devIcon['DiVisualstudio']
    }

    return LangIcon;
}

function correctLangName(name) {
    let newName;
    switch (name) {
        case 'DiJavascript': {
            newName = 'DiJavascript1'
            break;
        }
        case 'DiHtml': {
            newName = 'DiHtml5'
            break;
        }
        default: {
            newName = name;
            break;
        }
    }

    return newName;
}

export function getUniqLang(repoList) {
    let langList = repoList.map((repo) => (`${repo.language}`));
    langList = langList.concat(getFromDesc(repoList))
    let uniqLang = langList.filter((v, i) => { return i === langList.lastIndexOf(v); });
    uniqLang = uniqLang.filter((v) => { return v.length > 0 });

    uniqLang.sort();
    
    return uniqLang;
}

function getFromDesc(repoList) {
    // These are all of the languages and frameworks that I currently know
    // Unfortunately, these will have to be manually updated over time
    let known = [
        'C',
        'ReactJS',
        'Redux',
        'Angular',
        'Java',
        'Swing',
        'JavaScript',
        'TypeScript',
        'Python',
        'Flutter',
        'Dart',
        'HTML',
        'CSS',
    ]

    let langList = []; 
    for (let lang of known) {
        for (let repo of repoList) {
            if (repo.description != null && RegExp('\\b'+ lang.toLowerCase() +'\\b').test(repo.description.toLowerCase())) {
                langList.push(`${lang}`);
                break;
            }
        }
    }

    return langList;
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