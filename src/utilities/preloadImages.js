export const preloadImages = (path) => {
  return new Promise(resolve => {
    const img = new Image();
    img.src = path;
    img.onload = () => resolve({ path, status: "ok" });
  });
}