export const images = () => {
    const imgPopup: HTMLDivElement = document.createElement('div');
    const workSection: Element = document.querySelector('.works');
    const bigImage: HTMLImageElement = document.createElement('img');

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click',(e:MouseEvent) =>{
        e.preventDefault();

        const target = e.target as Element;

        if(target && target.classList.contains('preview')){
            imgPopup.style.display = 'flex';

            const path = (target.parentNode as Element).getAttribute('href');
            bigImage.setAttribute('src', path);
        }
        if(target && target.matches('div.popup')){
            imgPopup.style.display = 'none';
        }
    })

}