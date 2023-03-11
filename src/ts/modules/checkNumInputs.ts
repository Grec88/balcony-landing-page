export const checkNumInputs = (selector:string):void => {
    const numInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(selector);

    numInputs.forEach(numInput => {
        numInput.addEventListener('input', () => {
            numInput.value = numInput.value.replace(/\D/, '');
        })
    });
}