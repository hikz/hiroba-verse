const username = 'hikz'

export async function getUserAndRepos(){
  const profileRes = await fetch(`https://api.github.com/users/${username}`);
  if (!profileRes.ok) {
    console.log('error');
    throw new Error("User not found");
  }
  const profile = await profileRes.json();

  const reposRes = await fetch(`https://api.github.com/users/${username}/repos`);
  if (!reposRes.ok) throw new Error('Repo not found');
  const repos = await reposRes.json();


  let languages = [] ;// [["javascript", "php"], ["js", "python"]]
  
  repos.map(repo => {
    const data = getLanguages(repo.name);
    languages.push(data);
  })
  
  console.log(languages[0]);
  return [profile, repos, languages];
  
}

async function getLanguages (repo){
  const languagesRes = await fetch(`https://api.github.com/repos/${username}/${repo}/languages`);
  
if (!languagesRes.ok) throw new Error('Repo not found');
  const languages = await languagesRes.json();

  return languages;
}
