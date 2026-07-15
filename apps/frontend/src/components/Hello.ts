export function Hello(): HTMLElement {

    const h1 = document.createElement("h1");

    h1.textContent = "Hello World";

    return h1;

}