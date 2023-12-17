export const handleScroll = (ele: string, offsetTop: number): void => {
    let element = document.getElementById(ele);
    if (!element) {
        return;
    }
    let elementOffsetTop = element.offsetTop;
    window.scrollTo({
        top: elementOffsetTop - offsetTop,
        behavior: "smooth",
    });
};