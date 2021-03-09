const Data = {

    perks: [
        {
            img: "../assets/images/icon-online.svg",
            title: "Online Banking",
            description: "  Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
    
        },
        {
            img: "../assets/images/icon-budgeting.svg",
            title: "Simple Budgeting",
            description: "  See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
        },
        {
            img: "../assets/images/icon-onboarding.svg",
            title: "Fast Onboarding",
            description: " We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
        },
        {
            img: "../assets/images/icon-api.svg",
            title: "Open API",
            description: " Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
        },
    ],

    cards: [
        {
            img: "../assets/images/image-currency.jpg",
            author: "By Claire Robinson",
            title: "Receive money in any currency with no fees",
            content: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
        },
        {
            img: "../assets/images/image-restaurant.jpg",
            author: "By Wilson Hutton",
            title: "Treat yourself without worrying about money",
            content: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
        },
        {
            img: "../assets/images/image-plane.jpg",
            author: "By Wilson Hutton",
            title: "Take your Easybank card wherever you go",
            content: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
        },
        {
            img: "../assets/images/image-confetti.jpg",
            author: "By Claire Robinson",
            title: "Our invite-only Beta accounts are now live!",
            content: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
        }
    ]

}

const DOM = {

    getMenu() {
        const menuSection = document.querySelector('.menu-section');
        const menuToggle = menuSection.querySelector('.menu-toggle');
        Menu.toggleMenu(menuSection, menuToggle);

    },

    getMainElements() {
        const perkContainer = document.querySelector('.perks');
        const cardContainer = document.querySelector('.latest-articles');
       this.addHTML(perkContainer, cardContainer)
    },

    addHTML(perkContainer, cardContainer) {
        Data.cards.forEach(card => {
            cardContainer.innerHTML +=`
            <div class="card">
                <img src=${card.img} alt="">
                <div class="article-data">
                    <small class="author">${card.author}</small>
                    <h3>${card.title}</h3>
                    <p>
                        ${card.content}
                    </p>
                </div>
            </div>
            `
        });
        
        Data.perks.forEach(perk => {
            perkContainer.innerHTML += `
            <div class="perk">
                <img src=${perk.img} alt="">
                 <div class="perk-title">${perk.title}</div>
                <div class="description"><p>${perk.description}</p></div>
            </div>
            `;
        });
    }

}

const Menu = {

    toggleMenu(menuSection, menuToggle) {
        let show = true;

        menuToggle.addEventListener('click', () => {
            show = !show;
            document.body.style.overflow = show ? 'hidden' : 'initial';
            menuSection.classList.toggle('on', show);
        })
    }
}

const App = {
    init() {
        DOM.getMainElements();
        DOM.getMenu();
    }
}

App.init()