const usernameBS = "2517051038"; //npm mahasiswa Unila
const usernameMedium = "hiroba";

export async function getBlogspotFeed(){
  const rssUrl = `https://${usernameBS}.blogspot.com/feeds/posts/default?alt=rss`;
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;  
  const res = await fetch(apiUrl);
  const data = await res.json();
        
  if (!data.items || data.items.length === 0) {
    throw new Error("Tidak ada artikel ditemukan atau username salah");
  }

  return data;
}


export async function getMediumFeed(){
  const rssUrl = `https://medium.com/feed/@${usernameMedium}`;
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;  
  const res = await fetch(apiUrl);
  const data = await res.json();
        
  if (!data.items || data.items.length === 0) {
    throw new Error("Tidak ada artikel ditemukan atau username salah");
  }

  return data;
} 
