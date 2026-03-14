// Mock data for cake products
// This file contains all cake product information used across the app

export const cakes = [
  {
    id: 1,
    slug: "dau-tay-kem-tuoi",
    name: "Dâu Tây Kem Tươi",
    nameEn: "Strawberry Cream",
    description: "Kem tươi & dâu tây tươi",
    price: 450000,
    originalPrice: 520000,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVH0zbA37dEsksI3f1Fv1p8UIpAd7fZsqbO31uAVA92yayYCjURtocfV6X829_o0mKo_Il2SoAiLNR6lcDaqAJMWItSJmEcGllTcqV4Ixzg7j59ayTLd8HdRYFNKYXD2f7WKN-bl4eU1s8IWiI7e81oRFONFnVhCSbaDoGwZBKhJFSRa7wh_4YRDmxcafrXwZDSDk3cdDZM_aJXv9zLRk3p1ICPp27pRWSqdMYI0zFsWB-aYcbQNK6-ILDS4erMh97CMcNNS-AstM0",
    category: "best-seller",
    isHot: true,
    rating: 4.9,
    reviewCount: 120,
    sizes: [
      { size: "15cm", label: "Nhỏ (4-6)", price: 450000 },
      { size: "20cm", label: "Vừa (8-10)", price: 650000 },
      { size: "25cm", label: "Lớn (12+)", price: 850000 }
    ],
    flavors: ["Vani", "Sô-cô-la", "Trà xanh", "Nhung đỏ"],
    ingredients: "Bột mì Nhật cao cấp, dâu tây hữu cơ tươi sạch, trứng gà trang trại, hạt vani Tahitian, kem tươi nguyên chất, đường hữu cơ tối giản.",
    deliveryInfo: "Giao hàng nội thành TP.HCM (Quận 1, 2, 3, 7). Đặt trước 24h để đảm bảo độ tươi mới nhất.",
    sizeGuide: "16cm: Tiệc nhỏ thân mật.\n20cm: Họp mặt gia đình.\n24cm: Tiệc văn phòng hoặc sự kiện."
  },
  {
    id: 2,
    slug: "matcha-nhat-ban",
    name: "Matcha Nhật Bản",
    nameEn: "Matcha Japan",
    description: "Trà xanh Uji thượng hạng",
    price: 480000,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxwBqyLmz7S-yXAIWy9Z-Mczrneqft8gCiSZNZ0owqqptb5Dq4Ik-5R54mpyi-wafcFmLKc3qKTiQy9-M4G8tFBi-3DCuHmZWrHiYRSd5t8IlfKgVIhXQ7v2kKp2g0Z-2NLZNyxhpwzk85bekwKFisLy3QWIWKfEvv70_nsaeRnZgnKPGBWME3dqAygtKT2ubufkzlq-sy1lz0HydS-2bXI8ijDkFEJdp9-01WFVE4n5Ff1wvGz2SjMT59_z2__5ZXCfrs9pUzcIUr",
    category: "signature",
    rating: 4.8,
    reviewCount: 85,
    sizes: [
      { size: "15cm", price: 480000 },
      { size: "20cm", price: 680000 },
      { size: "25cm", price: 880000 }
    ]
  },
  {
    id: 3,
    slug: "socola-nhung",
    name: "Socola Nhung",
    nameEn: "Velvet Chocolate",
    description: "Socola đen nguyên chất",
    price: 520000,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVCKKEDgqcIHMufSDT8zp-Q-q6cgRKw6KkgMGF-rAc6UOwmTApxPM2TVXqF3DEaZnurIYZrAbP1VNoII-y4RRYq8MvtaVTvfnno2JnchUyH4lW5ObOTuURco-mesjWsnZL3jcmBCIVELjsrpRVSCpmRAAnZZqhVgwnvHisBCWvUipXkuOqzGRy87vqcPCCp2I0KnJgzh5sW85PPFEx-zX2crRWtzQMbVblmFOIvY5wmgIIT-2UqXanCIPnb7ojvIS9Q7i0KOClHJTy",
    category: "signature",
    rating: 4.9,
    reviewCount: 156,
    sizes: [
      { size: "15cm", price: 520000 },
      { size: "20cm", price: 720000 },
      { size: "25cm", price: 920000 }
    ]
  },
  {
    id: 4,
    slug: "tiramisu-co-dien",
    name: "Tiramisu Cổ Điển",
    nameEn: "Classic Tiramisu",
    description: "Hương vị Ý truyền thống",
    price: 490000,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUdXBMrbqO8iJrygghFYj_yaH5EwdcwPHMpNgGQnBf95yw0OzzLtz_yN1b3Qnfs_VEB_yBDV-Stz8H6uP49IwqtPWJ7oXN4dw6SWmqZT2lg00b9Zx2kMuTyh2P2xUdCfJKpC70T0c5hRHtEDO2lnapVgcrIyMTy_ij3eakvZmDm2Kq_z1Hu6A7bam_qLirMKhXlaeezNXNK-nt4hbke3pgcUtZii10GUmGZ6EchiuS_Rmo1z-WNllrQ4BRdSRYYKzolNKQ9e2ANuqj",
    category: "signature",
    rating: 4.7,
    reviewCount: 92,
    sizes: [
      { size: "15cm", price: 490000 },
      { size: "20cm", price: 690000 },
      { size: "25cm", price: 890000 }
    ]
  },
  {
    id: 5,
    slug: "double-dark-truffle",
    name: "Double Dark Truffle",
    nameEn: "Double Dark Truffle",
    description: "Socola đậm đà với ganache",
    price: 1150000,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDitp5Cs3U7ETQ9REYDhQjKESm5hqQX6A2fe8v9dHJh0ydneo3LAZf6wnK6bX3ZJ-eldMskvAdsmvW-H7ONUOoYnEPe6LTy1jBGeLaH-VfanU2JHKm6trvWmwi03szU1smH6urqdF-Fwlnme4yTyGBpnK-nFqZYFnn5arQrPvRK-Ebsh0zlznpY5J2sd8rCYtmw3YOrxTDvcQrwjoKAoaMzQjioIBcUce6Yf5rZaVGaADh-f3Qj54zLIyb2c1rPqLKifDb2Vs2BlCBz",
    category: "premium",
    isBestseller: true,
    rating: 4.9,
    reviewCount: 78
  },
  {
    id: 6,
    slug: "strawberry-dream",
    name: "Strawberry Dream",
    nameEn: "Strawberry Dream",
    description: "Dâu tươi & Kem tươi",
    price: 1350000,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDugGiMLto8aFqlfRBND9gEr_BJ5z_YvDxHxc_GVc3ITCu8czsVtl4lix1p3idLh85elTCEnoTd_h2RHcn3HkGFMOoTSSA8jxhyVjwu998i4ilap4CFfkHHw_BDZj_Zy4MJELN-IztZg14AEa_UwVt5b4XarqIbTJH65X_9iy1JcOOhJ2OkPtTpC5XShf0A4GB2py_SU9TFkyG2h9Ksn42rZSbgf6bxEX919AyWDI4X7swxhoeINwFhPtHrTVfpogoB3HdYi6l_61JJ",
    category: "premium",
    isLimited: true,
    rating: 4.8,
    reviewCount: 45
  },
  {
    id: 7,
    slug: "classic-vanilla-bean",
    name: "Classic Vanilla Bean",
    nameEn: "Classic Vanilla Bean",
    description: "Vanilla Madagascar thượng hạng",
    price: 950000,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFzCVzZx8zpPDp_ipZC9loRv8XHX1HtwWIRymQfxbhTrJ3t6YmXyY_VQPobmnKUIMaQlorD83aRFHS5cEaI3JJOXyaMAvWctQUT-YaIH60Y_lKeJ1ApWS_gmUvT-JqaNd9zXEKxnnfUyxr2mfb0Yks1B1f9n1Cn9C9QXJCOu0RzFRCPBviXlUroTwgV-s0ScErj5OpPRU_uY7zDpwIwua6XdhdsBdEg5fqYxtLLs54otfuWOHkkp-Hups0_ri26fG6BC3G7ZmKe1jv",
    category: "signature",
    rating: 4.6,
    reviewCount: 67
  },
  {
    id: 8,
    slug: "matcha-zen-cake",
    name: "Matcha Zen Cake",
    nameEn: "Matcha Zen Cake",
    description: "Cốt bánh Matcha Uji thượng hạng",
    price: 1250000,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQN5nep1eC32whxK4O35sZ-qu4xZ2i2f9eK1tqEEscar4gYp1uGckFTNYM5w-Qd4kvApZmceHQg8ApEQ6U2BosJpjZqmQ3VQKNyb_nGHEUZKXFIld6OnADrWSahPk9Mf30GVgUei7zC6zKI7whRHrL4ln5ruRWEEyadYxEvhjYNAOajlAf8WEdXO_3kNlma_astYdFhEtbiQFpeG6lCHOKpnRSIkROw5huJz3b3c5z6_YrJKT2wxC9MNbxK1f5_0E6IySXskE2F_4m",
    category: "signature",
    isNew: true,
    rating: 4.7,
    reviewCount: 34
  },
  {
    id: 9,
    slug: "velvet-crimson",
    name: "Velvet Crimson",
    nameEn: "Red Velvet",
    description: "Red velvet truyền thống",
    price: 1050000,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMsCAqg0w4NrbWjKAoESD1_Es9mdLR5tAqJs8pCH4l2TjygHZjs1G16XUnF6eCQ70uCCb0EPsh6NwCmitZki_pPizgmfTLJc0L6jFDOGDXDoJRIQipmK-rSJuzdmTfy7ZPYeU8FWRD8di4NBYbBBwUCNjtlzIa1jZTnY0bwP-QhcF5YzLotTYyk4DdK2tTPO9Bv2jOZLnFEUwFykV1CGtcC6aF2qlqzp6EkdmDdjSzLILswEAUR7lw7dj8T8iZKYHKC3tqL-YFU0qt",
    category: "signature",
    rating: 4.8,
    reviewCount: 89
  },
  {
    id: 10,
    slug: "blueberry-zest",
    name: "Blueberry Zest",
    nameEn: "Blueberry Zest",
    description: "Chanh tươi & Việt quất",
    price: 1180000,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoC1thOCsrPZ345rf2Dz9CXSUqi-7A2Dix-1O1tIrhxgGqtR_9todfZ6HkATHVKCZ5ypt8fzvdyudWLRQGVFKUvHyW168rAZIREptgD3BYrcVdF0yelTw1Bkw1Sbx3AjkN8JbGVDY5UDsvX9ulc3gDGfsDsZEjPIinjWx19g4GrX-nscqT0Lhdff8pU-ohEVR6TfFDA378Te2AODnnIyKFO2blkKgvEeO6ZpcViFmUFyE8dXYFXnl9PwxjkFipK6XcQc0O_xggzdLb",
    category: "signature",
    rating: 4.5,
    reviewCount: 52
  }
];

// Helper function to get cake by slug
export const getCakeBySlug = (slug) => {
  return cakes.find(cake => cake.slug === slug);
};

// Helper function to get related cakes (excluding current)
export const getRelatedCakes = (currentSlug, limit = 4) => {
  return cakes
    .filter(cake => cake.slug !== currentSlug)
    .slice(0, limit);
};

// Helper function to format price
export const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(price);
};

// Contact information
export const contactInfo = {
  address: "123 Đường Nguyễn Huệ, Quận 1, TP.HCM",
  phone: "+84 123 456 789",
  email: "hello@nhucake.com",
  zalo: "Nhu Cake",
  messenger: "m.me/nhucake",
  workingHours: {
    weekday: "8:00 - 21:00",
    weekend: "9:00 - 22:00"
  }
};

// Categories for filtering
export const categories = [
  { id: "all", name: "Tất cả", icon: "cake" },
  { id: "best-seller", name: "Sinh Nhật", icon: "celebration" },
  { id: "signature", name: "Signature", icon: "edit_square" },
  { id: "premium", name: "Cưới", icon: "favorite" },
  { id: "mini", name: "Mini", icon: "bakery_dining" }
];
