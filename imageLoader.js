export default function imageLoader({ src, width, quality }) {
  return `https://placehold.co/${src}?w=${width}&q=${quality || 75}`;
}
