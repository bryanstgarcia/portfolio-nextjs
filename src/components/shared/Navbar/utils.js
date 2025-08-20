export const handleScroll =
    ({ action }) =>
    (event) => {
        event.preventDefault();
        setTimeout(() => {
            window.location.href = event.target.href;
            action();
        }, 200);
        return false;
    };
export const handleRedirect =
    ({ action }) =>
    (event) => {
        event.preventDefault();
        let element = event.target;
        let anchorElementDOMName = "A";
        while (element.nodeName !== anchorElementDOMName) {
            element = element.parentElement;
        }
        setTimeout(() => {
            window.open(element.href, "_blank");
            action();
        }, 200);
        return false;
    };
