export const toggleGalleryImage = (event) => {
    const clickedElement = event.target;
    const gallery = event.currentTarget;
    const invalidOperation = clickedElement.tagName !== "IMG" ||
        gallery.children[0] === clickedElement ||
        window.matchMedia("(max-width: 1000px)").matches;

    if (invalidOperation) return;

    const img = document.createElement("img");
    img.src = clickedElement.src;
    img.alt = clickedElement.alt;
    gallery.insertAdjacentElement("afterbegin", img);

    clickedElement.remove();
}