function getRepos() {
    const username = document.getElementById('username').value;
    const url = `https://api.github.com/users/${username}/repos`;

    fetch(url)
        .then(res => res.json())
        .then(data => repositories(data))
        .catch( error => console.error(error))
}

function repositories(repos){
    const reposList = document.getElementById('reposList');
    reposList.innerHTML = '';

    repos.forEach(repo => {
        const repoItem = document.createElement('li')
        repoItem.classList.add('repoItem')

        const repoLink = document.createElement('a')
        repoLink.href = repo.html_url;
        repoLink.textContent = repo.name;

        repoItem.appendChild(repoLink);
        reposList.appendChild(repoItem);
    })
}