const getCroppedImageUrl = (url: string) => {
//   if (!url) return noImage;

const target = 'media/';
//takes parameter url and finds index of "media/" in url and sets it to index variable.
  const index = url.indexOf(target) + target.length;
  //slices url from 0 to index and concatenates 'crop/600/400/' in between the url string.
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl;  