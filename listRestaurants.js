const listRestaurants = [
	{
		id: 1,
		name: "IZHACFOOD",
		category: "Kébabs",
		description:
			"Izhac Food vous offre une large gamme de sandwich, Galette, Naan , Pain Turc…",
		price: "8€",
		googlelink:
			"https://www.google.com/search?client=firefox-b-d&sca_esv=6d6a8e16a9e96c37&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzfRh2f9-sht-gGe2-TN67GLrUwqcEZd028EtPit53RW4AcdZsO6S-8Io5FgteKZLOvNBgQYBZM30DSh5llq032gaipT1&q=Izhac+Food+Avis&sa=X&ved=2ahUKEwj-mLTxh6qMAxWjVKQEHe_kFhAQ0bkNegQIOxAE&biw=1280&bih=587&dpr=1.5",
		distance: "450m",
		img: "Image/restaurants/side-view-shawarma-with-fried-potatoes-board-cookware.jpg",
	},
	{
		id: 2,
		name: "CAFÉ BRULÉ",
		category: "Végétarien",
		description:
			"Chez Café Brulé, un seul mot d'ordre : la gourmandise ! Options sans gluten disponibles.",
		price: "12€",
		googlelink:
			"https://www.google.com/search?client=firefox-b-d&sca_esv=6d6a8e16a9e96c37&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzduFyGrkqWOnIShDnZ17m0DRo5spSC2lxvMKoPArKDlXAyJh408XdZMZhTQ96QbEL5_8hguj4EjakwyIffCtpDsdgT5G&q=Caf%C3%A9+Br%C3%BBl%C3%A9+Avis&sa=X&ved=2ahUKEwiRlZSaiKqMAxXyTaQEHdY1JpsQ0bkNegQILxAE&biw=1280&bih=587&dpr=1.5",
		distance: "1.1km",
		img: "Image/restaurants/brulé-café.png",
	},
	{
		id: 3,
		name: "LE KSAR",
		category: "Marocain",
		description:
			"Venez vous régalez autour d'une délicieuse cuisine marocaine !",
		price: "21€",
		googlelink:
			"https://www.google.com/search?client=firefox-b-d&sca_esv=6d6a8e16a9e96c37&si=APYL9btvhO6SAb8jF9HqTZMMa7vs_teLnZaEVrJZwRKFIIKjoU9hW50SjlZIVExM2spPKDEl3_v9ASP4CO4YcjTKYITFExq_rG89-6l5Lg4oeJuiCtJkrLZlpVqQ0o1XMeSa7YoHj0uf&q=Le+Ksar+Avis&sa=X&ved=2ahUKEwi0oq6iiKqMAxXLLPsDHTzFMHIQ0bkNegQILxAD&biw=1280&bih=587&dpr=1.5",
		distance: "750m",
		img: "Image/restaurants/woman-arab-dish-restaurant.jpg",
	},
	{
		id: 4,
		name: "CHEZ CÉSAR",
		category: "Street Food",
		description:
			"Dans un cadre convivial et reposant, Chéz César vous propose une cuisine variée et généreuse !",
		price: "32€",
		googlelink:
			"https://www.google.com/search?client=firefox-b-d&sca_esv=6d6a8e16a9e96c37&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzTW3xG1exHWgQ5O8qNLxeM7Sp3-zWeWkjACnhTUQK3lAXTCjy-vCrTfy9I_NPvkWh5Pp8hnd6FFHqUKv7Nq39wwWdWXP&q=Chez+C%C3%A9sar+Avis&sa=X&ved=2ahUKEwiCrpGsiKqMAxUtcKQEHTYAIAkQ0bkNegQIIxAE&biw=1280&bih=587&dpr=1.5",
		distance: "700m",
		img: "Image/restaurants/big-mac-burger-with-beef-melted-cheddar-full-white-salad.jpg",
	},
	{
		id: 5,
		name: "LE KIOSQUE",
		category: "Asiatique",
		description:
			"Toutes les saveurs exotiques et envoûtantes de l’Asie réunies dans votre assiette !",
		price: "25€",
		googlelink:
			"https://www.google.com/search?q=Le%20Kiosque%20Grand-Rond%20Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2MzI2MzYzMDM1NzczMDU2NTSz3MDI-IpRyidVwTszv7iwNFXBvSgxL0U3KD8vRcGxLLN4ESseSQDe05N8VAAAAA&rldimm=6236360657760535169&tbm=lcl&client=firefox-b-d&cs=1&hl=fr&sa=X&ved=0CCQQ9fQKKABqFwoTCODH9NyIqowDFQAAAAAdAAAAABAG&biw=1280&bih=587&dpr=1.5#lkt=LocalPoiReviews",
		distance: "300m",
		img: "Image/restaurants/rice-noodles-with-chicken-vegetables.jpg",
	},

	{
		id: 6,
		name: "FORNO GUSTO",
		category: "Italien",
		description:
			"Chez Forno Gusto, découvrez notre spécialité : la pizza à la Pala !",
		price: "18€",
		googlelink:
			"https://www.google.com/search?q=Forno%20Gusto%20Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxK2MLc0Nrc0MjM2NzAwNLI0NTAy3sDI-IpRwC2_KC9fwb20uCRfwbEss3gRK4YQAFj8tBxAAAAA&rldimm=8793792637001295023&tbm=lcl&client=firefox-b-d&cs=1&hl=fr&sa=X&ved=0CCkQ9fQKKABqFwoTCPDUkvaIqowDFQAAAAAdAAAAABAG&biw=1280&bih=587&dpr=1.5#lkt=LocalPoiReviews",
		distance: "280m",
		img: "Image/restaurants/pizza.jpg",
	},
];

export default listRestaurants;
