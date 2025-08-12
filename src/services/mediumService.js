const username = "hiroba";

export async function getMediumFeed(){
  const rssUrl = `https://medium.com/feed/@${username}`;
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;  
  const res = await fetch(apiUrl);
  const data = await res.json();
        
  if (!data.items || data.items.length === 0) {
    throw new Error("Tidak ada artikel ditemukan atau username salah");
  }

  return data;
} 
