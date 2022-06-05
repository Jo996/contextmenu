const contextmenu = document.querySelector(".contextmenu");
let ctxPosition = {
    pageX: 0,
    pageY: 0,
};
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    const ctxHeight = contextmenu.offsetHeight;
    const ctxWidth = contextmenu.offsetWidth + 5;

    const width0verflow = e.pageX + ctxWidth > window.innerWidth;
    const height0verflow = e.pageY + ctxHeight > window.innerHeight;
    ctxPosition = {
        pageX: width0verflow ? e.pageX - ctxWidth - 5 : e.pageX,
        pageY: height0verflow ? e.pageY - ctxHeight : e.pageY,
    };
    hideContextMenu();
    setTimeout(showCtxMenu, 50);
});
document.addEventListener("click", hideContextMenu);

function showCtxMenu() {
    contextmenu.style.cssText = `
    opacity: 1;
    transform: scale(1);
    top: ${ctxPosition.pageY}px;
    left: ${ctxPosition.pageX}px;
    `;
}

function hideContextMenu() {
    contextmenu.style.cssText = `
    opacity: 0;
    transform: sccale(0);
    top: ${ctxPosition.pageY}px;
    left: ${ctxPosition.pageX}px;
    `;
}