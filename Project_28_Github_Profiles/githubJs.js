const APIURL = 'https://api.github.com/users/'
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')


async function getUser (username) {
  try{
    const { data } = await axios(APIURL + username)
    createUserCard(data)
    getRepos(username)

  } catch(err){
    if(err.response.status === 404) {
      createErrorCard('No profile with this user name')
    }
  }
}

async function getRepos(username){
  try{
    const { data } = await axios(APIURL + username + '/repos?sort=created')
    addReposToCard(data)

  } catch(err){
    if(err.response.status === 404) {
      createErrorCard('Problem fetching repos')
    }
  }
}

function createUserCard(user){
  const cardHTML = `
      <div class="card">
        <div>
          <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
        </div>
        <div class="user-info">
          <h2>${user.name}</h2>
          <p>${user.bio}</p>

          <ul>
            <li>${user.followers} <strong>Followers</strong></li>
            <li>${user.following} <strong>Following</strong></li>
            <li>${user.public_repos}<strong>Repos</strong></li>
          </ul>

          <div id="repos">
          </div>
        </div>
      </div>
      `

      main.innerHTML = cardHTML
}

function createErrorCard (msg){
  const cardHTML =
  `
  <div class="card">
    <h2>${msg}</h2>
  </div>
  `

  main.innerHTML = cardHTML
}

function addReposToCard(repos){
  const reposEl = document.getElementById('repos')
  repos.slice(0,10).forEach(repo => {
    const repoEl = document.createElement('a')

    repoEl.classList.add('repo')
    repoEl.href = repo.html_url
    repoEl.target = '_blank'
    repoEl.innerText = repo.name

    reposEl.appendChild(repoEl)
  })
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const user = search.value

  if(user){
    getUser(user)
    search.value = ''
  }
})

// avatar_url: "https://avatars.githubusercontent.com/u/75806678?v=4"
// bio: null
// blog: "https://www.linkedin.com/in/raphael-mesquita-135996139/"
// company: null
// created_at: "2020-12-10T18:35:18Z"
// email: null
// events_url: "https://api.github.com/users/raphaelbmesquita123/events{/privacy}"
// followers: 1
// followers_url: "https://api.github.com/users/raphaelbmesquita123/followers"
// following: 4
// following_url: "https://api.github.com/users/raphaelbmesquita123/following{/other_user}"
// gists_url: "https://api.github.com/users/raphaelbmesquita123/gists{/gist_id}"
// gravatar_id: ""
// hireable: null
// html_url: "https://github.com/raphaelbmesquita123"
// id: 75806678
// location: "Limerick, Ireland"
// login: "raphaelbmesquita123"
// name: "Raphael Brandão Mesquita"
// node_id: "MDQ6VXNlcjc1ODA2Njc4"
// organizations_url: "https://api.github.com/users/raphaelbmesquita123/orgs"
// public_gists: 0
// public_repos: 4
// received_events_url: "https://api.github.com/users/raphaelbmesquita123/received_events"
// repos_url: "https://api.github.com/users/raphaelbmesquita123/repos"
// site_admin: false
// starred_url: "https://api.github.com/users/raphaelbmesquita123/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/raphaelbmesquita123/subscriptions"
// twitter_username: null
// type: "User"
// updated_at: "2021-03-24T20:58:53Z"
// url: "https://api.github.com/users/raphaelbmesquita123"
