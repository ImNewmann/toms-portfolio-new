export const formatTitle = (currentRoute) => {
    let title = [];
    const words = currentRoute.split('-');
    words.forEach((word) => title.push(word.charAt(0).toUpperCase() + word.slice(1)));
    return title.join(' ');
};
