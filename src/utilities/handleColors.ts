import { RepoInfo } from './handleAPI';
import { shuffle } from './generalUtil';

export function assignColors(repoList: RepoInfo[]) {
    let colorDict: { [index: string]: any; } = {};

    let uniqLang: string[] = getUniqLang(repoList);

    uniqLang = shuffle(uniqLang);

    for (let lang in uniqLang) {
        let currLang: string = uniqLang[lang];
        colorDict[currLang] = selectColors(lang, uniqLang.length);
    }

    return colorDict;
}

function getUniqLang(repoList: RepoInfo[]) {
    let langList: string[] = repoList.map((repo: RepoInfo) => (repo.language));
    let uniqLang: string[] = langList.filter(function (v, i) { return i == langList.lastIndexOf(v); });

    return uniqLang;
}

function selectColors(colorNum: any, colors: any) {
    if (colors < 1) colors = 1; // defaults to one color - avoid divide by zero
    return "hsl(" + (colorNum * (360 / colors) % 360) + ",80%,50%)";
}