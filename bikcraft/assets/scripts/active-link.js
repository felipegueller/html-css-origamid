const activeLink = links => {
    const linksArray = Array.from(links);
    linksArray.forEach(link => link.classList.remove('ativo'));

    const currentLink = linksArray
        .find(link => link.href.includes(location.href));
    currentLink.classList.add('ativo');
}

export { activeLink };