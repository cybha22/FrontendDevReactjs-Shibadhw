const ALL_RESTAURANTS = [
    {
        id: 1,
        name: "Very Long Name Restaurants Number 1 In List",
        photos: [
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&h=300&fit=crop"
        ],
        categories: ["THAI"],
        rating: 4,
        priceRange: "$$$$",
        isOpenNow: true,
        address: "123 Main Street, Bangkok District",
        phone: "+62 812 3456 7890",
        description: "Authentic Thai cuisine with a modern twist. Our chefs bring decades of experience from Bangkok to create unforgettable dining experiences.",
        reviews: [
            {
                id: 1,
                userName: "Budi Santoso",
                userImage: "https://i.pravatar.cc/150?img=1",
                rating: 5,
                text: "Makanan Thailand terbaik yang pernah saya coba di kota ini. Pad Thai dan Tom Yum mereka luar biasa. Pelayanannya juga sangat ramah dan cepat."
            },
            {
                id: 2,
                userName: "Siti Rahmawati",
                userImage: "https://i.pravatar.cc/150?img=5",
                rating: 4,
                text: "Suasana restorannya sangat nyaman dan dekorasinya cantik. Green curry mereka wajib dicoba. Harga memang agak mahal tapi worth it."
            },
            {
                id: 3,
                userName: "Andi Prasetyo",
                userImage: "https://i.pravatar.cc/150?img=3",
                rating: 4,
                text: "Selalu jadi pilihan utama kalau mau makan Thai food. Porsinya pas dan rasanya konsisten setiap kali datang."
            }
        ]
    },
    {
        id: 2,
        name: "Restaurants 2",
        photos: [
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop"
        ],
        categories: ["SEAFOOD"],
        rating: 3,
        priceRange: "$",
        isOpenNow: false,
        address: "456 Ocean Drive, Coastal Area",
        phone: "+62 813 4567 8901",
        description: "Fresh seafood straight from the ocean to your plate. We pride ourselves on serving the freshest catches daily.",
        reviews: [
            {
                id: 1,
                userName: "Dewi Lestari",
                userImage: "https://i.pravatar.cc/150?img=9",
                rating: 3,
                text: "Seafood-nya lumayan segar. Harganya sangat terjangkau untuk kualitas yang ditawarkan. Tempatnya agak kecil tapi bersih."
            },
            {
                id: 2,
                userName: "Rudi Hermawan",
                userImage: "https://i.pravatar.cc/150?img=11",
                rating: 3,
                text: "Ikan bakar dan udang gorengnya enak. Sambalnya juga mantap. Sayangnya sering tutup lebih awal dari jadwal."
            }
        ]
    },
    {
        id: 3,
        name: "Restaurants 3",
        photos: [
            "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop"
        ],
        categories: ["JAPANESE"],
        rating: 4.5,
        priceRange: "$$$",
        isOpenNow: true,
        address: "789 Sakura Lane, East Quarter",
        phone: "+62 814 5678 9012",
        description: "Traditional Japanese dining experience with authentic recipes passed down through generations. Sushi, ramen, and more.",
        reviews: [
            {
                id: 1,
                userName: "Maya Indah",
                userImage: "https://i.pravatar.cc/150?img=16",
                rating: 5,
                text: "Sushi-nya fresh banget dan ramen-nya autentik seperti di Jepang. Chef-nya sangat berpengalaman. Highly recommended!"
            },
            {
                id: 2,
                userName: "Fajar Nugroho",
                userImage: "https://i.pravatar.cc/150?img=12",
                rating: 4,
                text: "Tempat favorit untuk makan Japanese food. Salmon sashimi dan dragon roll mereka yang terbaik di kota ini."
            }
        ]
    },
    {
        id: 4,
        name: "Restaurants 4",
        photos: [
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop"
        ],
        categories: ["ITALIAN"],
        rating: 3.5,
        priceRange: "$$",
        isOpenNow: true,
        address: "321 Roma Avenue, West End",
        phone: "+62 815 6789 0123",
        description: "Authentic Italian cuisine featuring handmade pasta, wood-fired pizzas, and the finest imported ingredients from Italy.",
        reviews: [
            {
                id: 1,
                userName: "Lisa Permata",
                userImage: "https://i.pravatar.cc/150?img=20",
                rating: 4,
                text: "Pizza dan pastanya sangat enak, terasa autentik Italia. Tiramisu-nya juga wajib dicoba. Suasana romantis."
            },
            {
                id: 2,
                userName: "Hendra Wijaya",
                userImage: "https://i.pravatar.cc/150?img=14",
                rating: 3,
                text: "Makanannya enak tapi agak lama keluarnya. Wine selection-nya bagus. Overall pengalaman makan yang menyenangkan."
            }
        ]
    },
    {
        id: 5,
        name: "Restaurants 5",
        photos: [
            "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=400&h=300&fit=crop"
        ],
        categories: ["AMERICAN"],
        rating: 3,
        priceRange: "$",
        isOpenNow: false,
        address: "555 Liberty Street, Downtown",
        phone: "+62 816 7890 1234",
        description: "Classic American diner serving burgers, steaks, and comfort food. A family-friendly restaurant with generous portions.",
        reviews: [
            {
                id: 1,
                userName: "Tommy Setiawan",
                userImage: "https://i.pravatar.cc/150?img=15",
                rating: 3,
                text: "Burger klasik yang enak dengan porsi besar. French fries-nya crispy. Cocok untuk makan bareng keluarga atau teman."
            },
            {
                id: 2,
                userName: "Rina Susanti",
                userImage: "https://i.pravatar.cc/150?img=25",
                rating: 3,
                text: "Tempatnya cozy dan makanannya comfort food banget. Milkshake-nya juga enak. Harga sangat bersahabat."
            }
        ]
    },
    {
        id: 6,
        name: "Restaurants 6",
        photos: [
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
        ],
        categories: ["MEXICAN"],
        rating: 4.5,
        priceRange: "$$$",
        isOpenNow: true,
        address: "777 Fiesta Boulevard, South Side",
        phone: "+62 817 8901 2345",
        description: "Vibrant Mexican restaurant serving authentic tacos, burritos, and enchiladas. Live music on weekends.",
        reviews: [
            {
                id: 1,
                userName: "Diana Kusuma",
                userImage: "https://i.pravatar.cc/150?img=26",
                rating: 5,
                text: "Taco dan burrito-nya autentik banget! Guacamole-nya fresh dan nachos-nya crispy. Live music di weekend bikin suasana makin seru."
            },
            {
                id: 2,
                userName: "Arif Rahman",
                userImage: "https://i.pravatar.cc/150?img=17",
                rating: 4,
                text: "Mexican food terbaik di kota ini. Enchiladas dan quesadilla-nya luar biasa. Margarita-nya juga top."
            }
        ]
    },
    {
        id: 7,
        name: "Restaurants 7",
        photos: [
            "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop"
        ],
        categories: ["STEAKHOUSES"],
        rating: 3.5,
        priceRange: "$$",
        isOpenNow: true,
        address: "888 Grill Road, Midtown",
        phone: "+62 818 9012 3456",
        description: "Premium steakhouse serving the finest cuts of beef. Dry-aged steaks cooked to perfection on our charcoal grill.",
        reviews: [
            {
                id: 1,
                userName: "Agus Pramono",
                userImage: "https://i.pravatar.cc/150?img=13",
                rating: 4,
                text: "Steak-nya juicy dan empuk, well-seasoned. Side dishes-nya juga enak terutama mashed potato dan grilled vegetables."
            },
            {
                id: 2,
                userName: "Wulan Sari",
                userImage: "https://i.pravatar.cc/150?img=29",
                rating: 3,
                text: "Dagingnya berkualitas tapi saus-nya kurang berkarakter. Suasana restorannya nyaman untuk dinner."
            }
        ]
    },
    {
        id: 8,
        name: "Restaurants 8",
        photos: [
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop"
        ],
        categories: ["MEXICAN"],
        rating: 2.5,
        priceRange: "$$$$",
        isOpenNow: true,
        address: "999 Aztec Street, North End",
        phone: "+62 819 0123 4567",
        description: "Upscale Mexican dining with a contemporary twist. Fine dining atmosphere with curated tequila selection.",
        reviews: [
            {
                id: 1,
                userName: "Putri Handayani",
                userImage: "https://i.pravatar.cc/150?img=32",
                rating: 3,
                text: "Presentasi makanannya cantik dan tempatnya mewah. Tapi untuk harganya, rasanya masih kurang wow. Pelayanannya bagus."
            },
            {
                id: 2,
                userName: "Doni Saputra",
                userImage: "https://i.pravatar.cc/150?img=18",
                rating: 2,
                text: "Terlalu mahal untuk porsi dan rasa yang ditawarkan. Suasananya memang bagus tapi makanannya biasa saja."
            }
        ]
    },
    {
        id: 9,
        name: "Nasi Padang",
        photos: [
            "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop"
        ],
        categories: ["INDONESIAN"],
        rating: 4.5,
        priceRange: "$",
        isOpenNow: true,
        address: "100 Minang Street, Central",
        phone: "+62 820 1234 5678",
        description: "Authentic Padang cuisine with rich flavors and generous portions. Rendang, gulai, and sambal that will make you come back for more.",
        reviews: [
            {
                id: 1,
                userName: "Bambang Sutrisno",
                userImage: "https://i.pravatar.cc/150?img=33",
                rating: 5,
                text: "Rendangnya juara! Rasa Masakan Padang yang bikin nagih. Sambal hijaunya juga mantap. Harga sangat terjangkau."
            },
            {
                id: 2,
                userName: "Nita Anggraini",
                userImage: "https://i.pravatar.cc/150?img=34",
                rating: 4,
                text: "Nasi Padang favorit keluarga. Lauk-pauknya lengkap dan selalu fresh. Gulai tunjang dan ayam pop-nya paling enak."
            }
        ]
    },
    {
        id: 10,
        name: "Seoul Garden Korean BBQ",
        photos: [
            "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400&h=300&fit=crop"
        ],
        categories: ["KOREAN"],
        rating: 4,
        priceRange: "$$$",
        isOpenNow: false,
        address: "200 Gangnam Lane, East Side",
        phone: "+62 821 2345 6789",
        description: "Premium Korean BBQ experience with marinated meats and traditional side dishes. All-you-can-eat option available.",
        reviews: [
            {
                id: 1,
                userName: "Kevin Tanujaya",
                userImage: "https://i.pravatar.cc/150?img=35",
                rating: 4,
                text: "Korean BBQ terbaik! Daging-dagingnya berkualitas dan banchan-nya lengkap. Suasananya juga asik untuk makan bareng teman."
            },
            {
                id: 2,
                userName: "Felicia Chen",
                userImage: "https://i.pravatar.cc/150?img=36",
                rating: 4,
                text: "All you can eat-nya worth it banget. Bulgogi dan samgyeopsal-nya enak. Kimchi jjigae-nya juga autentik."
            }
        ]
    },
    {
        id: 11,
        name: "Le Petit Bistro",
        photos: [
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=400&h=300&fit=crop"
        ],
        categories: ["FRENCH"],
        rating: 5,
        priceRange: "$$$$",
        isOpenNow: true,
        address: "300 Champs Avenue, Uptown",
        phone: "+62 822 3456 7890",
        description: "Elegant French bistro offering classic dishes with a contemporary flair. Extensive wine list and impeccable service.",
        reviews: [
            {
                id: 1,
                userName: "Melinda Tjahjadi",
                userImage: "https://i.pravatar.cc/150?img=37",
                rating: 5,
                text: "Fine dining experience yang luar biasa. Foie gras dan beef bourguignon-nya sempurna. Wine pairing-nya juga excellent."
            },
            {
                id: 2,
                userName: "Gregorius Tanoto",
                userImage: "https://i.pravatar.cc/150?img=38",
                rating: 5,
                text: "Restoran terbaik di kota ini tanpa di ragukan lagi. Mantapss"
            }
        ]
    },
    {
        id: 12,
        name: "Dragon Palace Chinese Restaurant",
        photos: [
            "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=300&fit=crop"
        ],
        categories: ["CHINESE"],
        rating: 3.5,
        priceRange: "$$",
        isOpenNow: true,
        address: "400 Dynasty Road, Chinatown",
        phone: "+62 823 4567 8901",
        description: "Traditional Chinese cuisine with dim sum, Peking duck, and a wide variety of Cantonese and Szechuan dishes.",
        reviews: [
            {
                id: 1,
                userName: "William Huang",
                userImage: "https://i.pravatar.cc/150?img=39",
                rating: 4,
                text: "Dim sum nya enak dan variasinya banyak. Peking duck-nya juga oke. Tempatnya luas dan cocok untuk acara keluarga."
            },
            {
                id: 2,
                userName: "Cindy Lim",
                userImage: "https://i.pravatar.cc/150?img=40",
                rating: 3,
                text: "Makanannya standar Chinese food. Tidak terlalu istimewa tapi cukup memuaskan. Harganya juga murah."
            }
        ]
    }
];

function delay(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}

export async function fetchRestaurants(category) {
    await delay(600);

    if (category) {
        return ALL_RESTAURANTS.filter(function (r) {
            return r.categories.includes(category);
        });
    }

    return ALL_RESTAURANTS;
}

export async function fetchRestaurantById(id) {
    await delay(400);

    var restaurant = ALL_RESTAURANTS.find(function (r) {
        return r.id === parseInt(id);
    });

    if (!restaurant) {
        throw new Error("Restaurant not found");
    }

    return restaurant;
}

export async function fetchCategories() {
    await delay(300);

    var cats = new Set();
    ALL_RESTAURANTS.forEach(function (r) {
        r.categories.forEach(function (c) {
            cats.add(c);
        });
    });

    return Array.from(cats).sort();
}
