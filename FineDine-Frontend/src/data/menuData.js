const menuData = [

    // ===========================
    // STARTERS
    // ===========================

    {
        id: 1,
        name: "Bruschetta",
        category: "Starters",
        description:
            "Grilled artisan bread topped with fresh tomatoes, basil, garlic and extra virgin olive oil.",
        price: 9.99,
        image: "/images/menu/bruschetta.jpg",
        isVeg: true,
        chefRecommended: false,
    },

    {
        id: 2,
        name: "Garlic Butter Prawns",
        category: "Starters",
        description:
            "Juicy prawns sautéed in garlic butter with herbs and lemon.",
        price: 14.99,
        image: "/images/menu/prawns.jpg",
        isVeg: false,
        chefRecommended: true,
    },

    {
        id: 3,
        name: "Crispy Calamari",
        category: "Starters",
        description:
            "Golden fried calamari served with homemade garlic aioli.",
        price: 13.99,
        image: "/images/menu/calamari.jpg",
        isVeg: false,
        chefRecommended: false,
    },

    {
        id: 4,
        name: "Stuffed Mushrooms",
        category: "Starters",
        description:
            "Button mushrooms stuffed with cheese, herbs and breadcrumbs.",
        price: 11.99,
        image: "/images/menu/stuffed-mushrooms.jpg",
        isVeg: true,
        chefRecommended: false,
    },

    {
        id: 5,
        name: "Caesar Salad",
        category: "Starters",
        description:
            "Crisp romaine lettuce tossed with parmesan, croutons and Caesar dressing.",
        price: 10.99,
        image: "/images/menu/caesar-salad.jpg",
        isVeg: true,
        chefRecommended: false,
    },

    {
        id: 6,
        name: "Chicken Satay",
        category: "Starters",
        description:
            "Grilled chicken skewers served with creamy peanut sauce.",
        price: 13.49,
        image: "/images/menu/chicken-satay.jpg",
        isVeg: false,
        chefRecommended: false,
    },

    {
        id: 7,
        name: "Spinach & Cheese Croquettes",
        category: "Starters",
        description:
            "Golden fried croquettes filled with spinach and mozzarella.",
        price: 10.49,
        image: "/images/menu/croquettes.jpg",
        isVeg: true,
        chefRecommended: false,
    },
    {
        id: 8,
        name: "Truffle Parmesan Fries",
        category: "Starters",
        description:
            "Crispy fries tossed in parmesan cheese, truffle oil and herbs.",
        price: 11.99,
        image: "/images/menu/truffle-fries.jpg",
        isVeg: true,
        chefRecommended: false,
    },



    // ===========================
    // MAIN COURSE
    // ===========================

    {
        id: 9,
        name: "Grilled Ribeye Steak",
        category: "Main Course",
        description:
            "Premium ribeye steak served with mashed potatoes and seasonal vegetables.",
        price: 29.99,
        image: "/images/menu/steak.jpg",
        isVeg: false,
        chefRecommended: true,
    },

    {
        id: 10,
        name: "Creamy Mushroom Pasta",
        category: "Main Course",
        description:
            "Penne pasta tossed in creamy mushroom parmesan sauce.",
        price: 18.99,
        image: "/images/menu/pasta.jpg",
        isVeg: true,
        chefRecommended: false,
    },

    {
        id: 11,
        name: "Grilled Salmon",
        category: "Main Course",
        description:
            "Fresh Atlantic salmon served with roasted vegetables.",
        price: 24.99,
        image: "/images/menu/salmon.jpg",
        isVeg: false,
        chefRecommended: false,
    },

    {
        id: 12,
        name: "Chicken Alfredo",
        category: "Main Course",
        description:
            "Creamy fettuccine Alfredo topped with grilled chicken.",
        price: 19.99,
        image: "/images/menu/alfredo.jpg",
        isVeg: false,
        chefRecommended: false,
    },

    {
        id: 13,
        name: "Lamb Chops",
        category: "Main Course",
        description:
            "Tender lamb chops served with rosemary garlic butter.",
        price: 31.99,
        image: "/images/menu/lamb-chops.jpg",
        isVeg: false,
        chefRecommended: true,
    },

    {
        id: 14,
        name: "Margherita Pizza",
        category: "Main Course",
        description:
            "Stone baked pizza topped with mozzarella, basil and tomato sauce.",
        price: 16.99,
        image: "/images/menu/pizza.jpg",
        isVeg: true,
        chefRecommended: false,
    },



    {
        id: 15,
        name: "Butter Chicken",
        category: "Main Course",
        description:
            "Classic Indian butter chicken served with fragrant rice.",
        price: 21.99,
        image: "/images/menu/butter-chicken.jpg",
        isVeg: false,
        chefRecommended: true,
    },


    {
        id: 16,
        name: "Seafood Risotto",
        category: "Main Course",
        description:
            "Creamy Italian risotto loaded with fresh seafood.",
        price: 26.99,
        image: "/images/menu/risotto.jpg",
        isVeg: false,
        chefRecommended: true,
    },



    // ===========================
    // DESSERTS
    // ===========================

    {
        id: 17,
        name: "Chocolate Lava Cake",
        category: "Desserts",
        description:
            "Warm chocolate cake with molten centre and vanilla ice cream.",
        price: 11.99,
        image: "/images/menu/lava-cake.jpg",
        isVeg: true,
        chefRecommended: true,
    },

    {
        id: 18,
        name: "Classic Cheesecake",
        category: "Desserts",
        description:
            "Creamy baked cheesecake topped with fresh berry compote.",
        price: 10.99,
        image: "/images/menu/cheesecake.jpg",
        isVeg: true,
        chefRecommended: false,
    },

    {
        id: 19,
        name: "Tiramisu",
        category: "Desserts",
        description:
            "Traditional Italian dessert layered with coffee and mascarpone.",
        price: 12.49,
        image: "/images/menu/tiramisu.jpg",
        isVeg: true,
        chefRecommended: true,
    },

    {
        id: 20,
        name: "Crème Brûlée",
        category: "Desserts",
        description:
            "Rich vanilla custard finished with caramelized sugar.",
        price: 11.49,
        image: "/images/menu/creme-brulee.jpg",
        isVeg: true,
        chefRecommended: false,
    },

    {
        id: 21,
        name: "Ice Cream Sundae",
        category: "Desserts",
        description:
            "Vanilla ice cream topped with chocolate sauce and nuts.",
        price: 8.99,
        image: "/images/menu/sundae.jpg",
        isVeg: true,
        chefRecommended: false,
    },
    {
        id: 22,
        name: "Red Velvet Cake",
        category: "Desserts",
        description:
            "Moist red velvet sponge layered with rich cream cheese frosting.",
        price: 10.99,
        image: "/images/menu/red-velvet.jpg",
        isVeg: true,
        chefRecommended: false,
    },

    {
        id: 23,
        name: "Belgian Chocolate Brownie",
        category: "Desserts",
        description:
            "Warm Belgian chocolate brownie served with vanilla ice cream.",
        price: 11.49,
        image: "/images/menu/brownie.jpg",
        isVeg: true,
        chefRecommended: false,
    },

    {
        id: 24,
        name: "Mango Panna Cotta",
        category: "Desserts",
        description:
            "Creamy Italian panna cotta topped with fresh mango puree.",
        price: 10.49,
        image: "/images/menu/mango-panna-cotta.jpg",
        isVeg: true,
        chefRecommended: false,
    },
    // ===========================
    // WINE & BEER
    // ===========================

    {
        id: 25,
        name: "My Favourite",
        category: "Wine & Beer",
        description: "AU | Bottle",
        price: 56,
        isVeg: true,
        chefRecommended: false,
    },

    {
        id: 26,
        name: "Catena Malbee",
        category: "Wine & Beer",
        description: "AU | Bottle",
        price: 59,
        isVeg: true,
        chefRecommended: false,
    },

    {
        id: 27,
        name: "La Vieille Rose",
        category: "Wine & Beer",
        description: "FR | 750 Ml",
        price: 44,
        isVeg: true,
        chefRecommended: false,
    },

    {
        id: 28,
        name: "Rhino Pale Ale",
        category: "Wine & Beer",
        description: "CA | 750 Ml",
        price: 31,
        isVeg: true,
        chefRecommended: false,
    },

    {
        id: 29,
        name: "Irish Guinness",
        category: "Wine & Beer",
        description: "IE | 750 Ml",
        price: 26,
        isVeg: true,
        chefRecommended: false,
    },



    // ===========================
    // COCKTAILS
    // ===========================

    {
        id: 30,
        name: "Aperol Spritz",
        category: "Cocktails",
        description: "Aperol | Villa Marchesi Prosecco | Soda | 30 Ml",
        price: 20,
        isVeg: true,
        chefRecommended: false,
    },

    {
        id: 31,
        name: "Dark 'N' Stormy",
        category: "Cocktails",
        description: "Dark Rum | Ginger Beer | Slice Of Lime",
        price: 16,
        isVeg: true,
        chefRecommended: false,
    },

    {
        id: 32,
        name: "Daiquiri",
        category: "Cocktails",
        description: "Rum | Citrus Juice | Sugar",
        price: 10,
        isVeg: true,
        chefRecommended: false,
    },

    {
        id: 33,
        name: "Old Fashioned",
        category: "Cocktails",
        description: "Bourbon | Brown Sugar | Angostura Bitters",
        price: 31,
        isVeg: true,
        chefRecommended: false,
    },

    {
        id: 34,
        name: "Negroni",
        category: "Cocktails",
        description: "Gin | Sweet Vermouth | Campari | Orange Garnish",
        price: 26,
        isVeg: true,
        chefRecommended: false,
    },



    // ===========================
    // BEVERAGES
    // ===========================

    {
        id: 35,
        name: "Fresh Orange Juice",
        category: "Beverages",
        description: "Freshly squeezed oranges served chilled.",
        price: 6.99,
        isVeg: true,
        chefRecommended: false,
    },

    {
        id: 36,
        name: "Lemon Mint Cooler",
        category: "Beverages",
        description: "Refreshing lemonade infused with fresh mint leaves.",
        price: 5.99,
        isVeg: true,
        chefRecommended: false,
    },

    {
        id: 37,
        name: "Iced Coffee",
        category: "Beverages",
        description: "Cold brewed coffee topped with fresh cream.",
        price: 6.99,
        isVeg: true,
        chefRecommended: false,
    },

    {
        id: 38,
        name: "Cappuccino",
        category: "Beverages",
        description: "Freshly brewed espresso with steamed milk foam.",
        price: 5.49,
        isVeg: true,
        chefRecommended: false,
    },


];

export default menuData;