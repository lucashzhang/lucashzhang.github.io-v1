export async function getGenAPI() {
    let username = 'lucashzhang';
    let response;
    let repoJson;
    let repoList = [];

    if (sessionStorage.getItem('lucashzhangRepoGeneral')) {
        repoJson = JSON.parse(sessionStorage.lucashzhangRepoGeneral);
        // console.log('Session Storage')
    } else {
        try {
            response = await fetch('https://api.github.com/users/' + username + '/repos');
            repoJson = await response.json();
            sessionStorage.setItem('lucashzhangRepoGeneral', JSON.stringify(repoJson));
            // console.log('API Call');
        } catch (error) {
            console.log(error);
            // TODO-- incorporate getting data from local storage
            return [];
        }
    }

    // List of repositories (usually forks) that I don't want on the website
    let blackList = ['tech-team-tutorial'];

    try {
        repoList = repoJson.map(item => ({
            name: item['name'],
            id: item['id'],
            description: item['description'] != null ? item['description'] : "",
            created: new Date(item['created_at']),
            language: item['language'],
            url: item['html_url'],
            homepage: item['homepage']
        }));
        repoList = repoList.filter(repo => {
            return repo['name'] != null && repo['language'] && !(blackList.includes(repo['name']))
        })
    } catch (error) {
        console.log(error);
        console.log("The list of repositories failed to build, \nthis was most likely caused by too many API calls")
        return [];
    }

    repoList.sort((a, b) => {
        if (a['created'] > b['created']) {
            return -1;
        } else {
            return 1;
        }
    })

    return repoList;

}