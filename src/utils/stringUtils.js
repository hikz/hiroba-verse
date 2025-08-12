export function stripHTML(html) {
  return html.replace(/<[^>]*>/g, ''); // delete all tag from string <...>
}


export function sliceString(str, end){ // slice string (end : number)
  const cleanStr = stripHTML(str);
  return cleanStr.slice(0, end);
}

export function readingTime(text) {
  const wordsPerMinute = 200; // average
  const cleanStr = stripHTML(text);
  const words = cleanStr.trim().split(/\s+/).length; // count word from text
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}

