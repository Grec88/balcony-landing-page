export const tabs = (tabsObj: { headerSelector: string, tabSelector: string, contentSelector: string, activeClass: string, display: string }) => {
    const header: HTMLElement = document.querySelector(tabsObj.headerSelector);
    const tabs:NodeListOf<HTMLElement> = document.querySelectorAll(tabsObj.tabSelector);
    const contents = <NodeListOf<HTMLElement>>document.querySelectorAll(tabsObj.contentSelector);

    const hideTabContent = () => {
        contents.forEach(content => {
            content.style.display = 'none';
        });

        tabs.forEach(tab => {
            tab.classList.remove(tabsObj.activeClass);
        })
    };

    const showTabContent = (i = 0) => {
        contents[i].style.display = tabsObj.display;
        tabs[i].classList.add(tabsObj.activeClass);
    };

    hideTabContent();
    showTabContent();

    const toggleTab = (target: HTMLElement) => {
        if (target &&
            (target.classList.contains(tabsObj.tabSelector.replace(/\./, ""))
                || (target.parentNode as Element).classList.contains(tabsObj.tabSelector.replace(/\./, "")))) {
            tabs.forEach((tab, i) => {
                if (target == tab || target.parentNode == tab) {
                    hideTabContent();
                    showTabContent(i);
                };
            });
        }
    }

    header.addEventListener('click', (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        toggleTab(target);
    });

    header.addEventListener('keydown', (e: KeyboardEvent) => {
        const target = e.target as HTMLElement;
        if (e.code === "Enter") {
            toggleTab(target);
        }
    });

};

