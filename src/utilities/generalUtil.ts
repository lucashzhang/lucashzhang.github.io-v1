import * as devIcon from 'react-icons/di';

export function shuffle(array: any[]) {
    for (let i: number = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }

    return array;
}

export function capitalFirst(text: string) {
    text = text.toLowerCase();
    let capitalized: string = text.charAt(0).toUpperCase() + text.slice(1);

    return capitalized;
}

export function getDevIcon(name: string, desc: string) {
    let LangIcon: any;
    let formatted = `Di${capitalFirst(name)}`
    formatted = correctLangName(formatted);

    if (formatted in devIcon) {
        LangIcon = devIcon[formatted as keyof typeof devIcon];
    } else if (desc.toLowerCase().indexOf('react') >= 0) {
        LangIcon = devIcon['DiReact'];
    } else if (desc.toLowerCase().indexOf('angular') >= 0) {
        LangIcon = devIcon['DiAngularSimple'];
    } else {
        LangIcon = devIcon['DiVisualstudio']
    }

    return LangIcon;
}

function correctLangName(name: string) {
    let newName: string;
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

