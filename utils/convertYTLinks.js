export function convertToEmbed(url) {
    // return url.replace('watch?v=', 'embed/')
    const videoId = url.split('v=')[1]?.split('&')[0] || 
                    url.split('youtu.be/')[1]?.split('&')[0];
                    
    return `https://www.youtube.com/embed/${videoId}`;
}
