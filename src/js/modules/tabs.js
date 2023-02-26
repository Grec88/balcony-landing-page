const tabs = (tabObject) => {
    const header = document.querySelector(tabObject.headerSelector);
    const tabs = document.querySelectorAll(tabObject.tabSelector);
    const contents = document.querySelectorAll(tabObject.contentSelector);

    const hideTabContent = () => {
        contents.forEach(content => {
            content.style.display = 'none';
        });

        tabs.forEach(tab => {
            tab.classList.remove(tabObject.activeClass);
        })
    };

    const showTabContent = (i = 0) => {
        contents[i].style.display = 'block';
        tabs[i].classList.add(tabObject.activeClass);
    };

    hideTabContent();
    showTabContent();

    const toggleTab = (target) => {
        if (target &&
            (target.classList.contains(tabObject.tabSelector.replace(/\./, ""))
            || target.parentNode.classList.contains(tabObject.tabSelector.replace(/\./, "")))) {
                tabs.forEach((tab, i) => {
                    if(target == tab || target.parentNode == tab){
                        hideTabContent();
                        showTabContent(i);
                    };
                });
        }
    }

    header.addEventListener('click', (e) => {
        const target = e.target;
        toggleTab(target);
    });

    header.addEventListener('keydown', (e) => {
        const target = e.target;
        if (e.code === "Enter"){
            toggleTab(target);
        } 
    });

};

export {tabs};