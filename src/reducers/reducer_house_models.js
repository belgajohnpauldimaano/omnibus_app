
/*MODEL HOMES*/
const houseModels = [
	/*EASY HOMES SERIES*/
	{
		name      : "Bella",
		flrArea   : 53,
		lotArea   : 88,
		lotAreaIU : 0,
		lotAreaEU : 0,
		summary   : "2-BR, 2 T&amp;B",
		features  : "2 Storeys, 2 Bedrooms, Living Area, Dining Area, Kitchen, 2 Toilet &amp; Baths",
		vTour     : "",
		series    : "easy",
		previously: "camella"
	},
	{
		name      : "Greta",
		flrArea   : 166,
		lotArea   : 143,
		lotAreaIU : 0,
		lotAreaEU : 0,
		summary   : "5-BR, 3 T&amp;B",
		features  : "2 Storeys, 5 Bedrooms, Living Area, Dining Area, Kitchen, 3 Toilet &amp; Baths, Balcony, Covered Porch, 2-Car Garage, Provision for Lanai (Rear)",
		vTour     : "",
		series    : "easy",
		previously: ""
	},
	{
		name      : "Freya",
		flrArea   : 110,
		lotArea   : 121,
		lotAreaIU : 0,
		lotAreaEU : 0,
		summary   : "5-BR, 3 T&amp;B",
		features  : "2 Storeys, 5 Bedrooms, Living Area, Dining Area, Kitchen, 3 Toilet &amp; Baths, Balcony, Covered Porch, Carport",
		vTour     : "",
		series    : "easy",
		previously: ""
	},
	{
		name      : "Ella",
		flrArea   : 100,
		lotArea   : 110,
		lotAreaIU : 0,
		lotAreaEU : 0,
		summary   : "5-BR, 3 T&amp;B",
		features  : "2 Storeys, 5 Bedrooms, Living Area, Dining Area, Kitchen, 3 Toilet &amp; Baths, Balcony, Firewall, Provision for Carport",
		vTour     : "",
		series    : "easy",
		previously: ""
	},
	{
		name      : "Dana",
		flrArea   : 85,
		lotArea   : 99,
		lotAreaIU : 0,
		lotAreaEU : 0,
		summary   : "5-BR, 3 T&amp;B",
		features  : "2 Storeys, 4 Bedrooms, Living Area, Dining Area, Kitchen, 3 Toilet &amp; Baths, Balcony, Firewall, Provision for Carport",
		vTour     : "",
		series    : "easy",
		previously: ""
	},
	{
		name      : "Cara",
		flrArea   : 66,
		lotArea   : 88,
		lotAreaIU : 0,
		lotAreaEU : 0,
		summary   : "3-BR, 2 T&amp;B",
		features  : "2 Storeys, 3 Bedrooms, Living Area, Dining Area, Kitchen, 2 Toilet &amp; Baths, Balcony, Firewall, Provision for Carport",
		vTour     : "",
		series    : "easy",
		previously: ""
	},
	{
		name      : "Mika",
		flrArea   : 46,
		lotArea   : 66,
		lotAreaIU : 0,
		lotAreaEU : 0,
		summary   : "2-BR, 1 T&amp;B",
		features  : "2 Storeys, 2 Bedrooms, Living Area, Dining Area, Kitchen, 1 Toilet &amp; Bath",
		vTour     : "",
		series    : "easy",
		previously: ""
	},
	{
		name      : "Reva",
		flrArea   : 40,
		lotArea   : 66,
		lotAreaIU : 0,
		lotAreaEU : 0,
		summary   : "3-BR, 2 T&amp;B",
		features  : "2 Storeys, 3 Bedrooms, Living Area, Dining Area, Kitchen, 2 Toilet &amp; Baths, Firewall",
		vTour     : "",
		series    : "easy",
		previously: ""
	},
	{
		name      : "Mikaela",
		flrArea   : 46,
		lotArea   : 0,
		lotAreaIU : 44,
		lotAreaEU : 66,
		summary   : "2-BR, 1 T&amp;B",
		features  : "2 Storeys, 4 Bedrooms, Living Area, Dining Area, Kitchen, 3 Toilet &amp; Baths",
		vTour     : "",
		series    : "easy",
		previously: ""
	},
	{
		name      : "Ravena",
		flrArea   : 40,
		lotArea   : 0,
		lotAreaIU : 44,
		lotAreaEU : 66,
		summary   : "3-BR, 2 T&amp;B",
		features  : "2 Storeys, 2 Bedrooms, Living Area, Dining Area, Kitchen, 1 Toilet &amp; Baths",
		vTour     : "",
		series    : "easy",
		previously: ""
	},


	/*CLASSIC SERIES*/
	// TOWNHOUSE
	{
		name      : "Aryanna",
		flrArea   : 42,
		lotArea   : 36,
		lotAreaIU : 0,
		lotAreaEU : 0,
		summary   : "3-BR, 1 T&amp;B",
		features  : "2 Storeys, 3 Bedrooms, Living Area, Dining Area, Kitchen, Service Area, Toilet &amp; Bath, Carport",
		vTour     : "",
		series    : "classic",
		previously: "townhouse"
	},
	{
		name      : "Arya",
		flrArea   : 35,
		lotArea   : 36,
		lotAreaIU : 0,
		lotAreaEU : 0,
		summary   : "2-BR, 1 T&amp;B",
		features  : "2 Storeys, 2 Bedrooms, Living Area, Dining Area, Kitchen, Service Area, Toilet &amp; Bath, Carport",
		vTour     : "",
		series    : "classic",
		previously: "townhouse"
	},
	// BUNGALOW
	{
		name      : "Azalea",
		flrArea   : 22,
		lotArea   : 36,
		lotAreaIU : 0,
		lotAreaEU : 0,
		summary   : "1-BR, 1 T&amp;B",
		features  : "Bedroom, Living Area, Dining Area, Kitchen, Service Area, Toilet &amp; Bath",
		vTour     : "",
		series    : "classic",
		previously: "bungalow"
	},
	// BLANK
	{
		name      : "Gianna_CU",
		flrArea   : 65,
		lotArea   : 71,
		lotAreaIU : 0,
		lotAreaEU : 0,
		summary   : "3-BR, 2 T&amp;B",
		features  : "2 Storeys, 3 Bedrooms, Living Area, Dining Area, Kitchen, Service Area, 2 Toilet &amp; Baths, Carport and Balcony",
		vTour     : "",
		series    : "classic",
		previously: "blank"
	},
	{
		name      : "Gianna_EU",
		flrArea   : 65,
		lotArea   : 70,
		lotAreaIU : 0,
		lotAreaEU : 0,
		summary   : "3-BR, 2 T&amp;B",
		features  : "2 Storeys, 3 Bedrooms, Living Area, Dining Area, Kitchen, Service Area, 2 Toilet &amp; Baths, Carport and Balcony",
		vTour     : "",
		series    : "classic",
		previously: "blank"
	},
	{
		name      : "Gianna_IU",
		flrArea   : 56,
		lotArea   : 50,
		lotAreaIU : 0,
		lotAreaEU : 0,
		summary   : "2-BR, 2 T&amp;B",
		features  : "2 Storeys, 2 Bedrooms, Living Area, Dining Area, Kitchen, Service Area, 2 Toilet &amp; Baths, Carport",
		vTour     : "",
		series    : "classic",
		previously: "blank"
	},
	// GRANDE
	{
		name      : "Gavina",
		flrArea   : 166,
		lotArea   : 143,
		lotAreaIU : 0,
		lotAreaEU : 0,
		summary   : "5-BR, 3 T&amp;B",
		features  : "2 Storeys, 5 Bedrooms, Living Area, Dining Area, Kitchen, Study Area, 3 Toilet &amp; Baths, 2-Car Garage, Balcony, Covered Porch, Provision for Lanai (Rear)",
		vTour     : "https://www.youtube.com/watch?v=CVbEfX7dw4E",
		series    : "classic",
		previously: "grande"
	},
	{
		name      : "Fatima",
		flrArea   : 110,
		lotArea   : 121,
		lotAreaIU : 0,
		lotAreaEU : 0,
		summary   : "5-BR, 3 T&amp;B",
		features  : "2 Storeys, 5 Bedrooms, Living Area, Dining Area, Kitchen, Study Area, 3 Toilet &amp; Baths, Balcony, Covered Porch, Carport, Provision for 1-Car Garage (Rear)",
		vTour     : "https://www.youtube.com/watch?v=aqF5D2_Eqxw",
		series    : "classic",
		previously: "grande"
	},
	// CAMELLA
	{
		name      : "Elaisa",
		flrArea   : 97,
		lotArea   : 110,
		lotAreaIU : 0,
		lotAreaEU : 0,
		summary   : "5-BR, 3 T&amp;B",
		features  : "2 Storeys, 4 Bedrooms, Living Area, Dining Area, Kitchen, Maid's Room, 2 Toilet &amp; Baths, Master Toilet &amp; Bath, Carport and Balcony",
		vTour     : "https://www.youtube.com/watch?v=haiKEw39nog",
		series    : "classic",
		previously: "camella"
	},
	{
		name      : "Drina",
		flrArea   : 83,
		lotArea   : 110,
		lotAreaIU : 0,
		lotAreaEU : 0,
		summary   : "4-BR, 3 T&amp;B",
		features  : "2 Storeys, 3 Bedrooms, Living Area, Dining Area, Kitchen, Maid's Room, 2 Toilet &amp; Baths, Master Toilet &amp; Bath, Carport and Balcony",
		vTour     : "https://www.youtube.com/watch?v=p173FU7vXNg",
		series    : "classic",
		previously: "camella"
	},
	{
		name      : "Carina",
		flrArea   : 72,
		lotArea   : 99,
		lotAreaIU : 0,
		lotAreaEU : 0,
		summary   : "4-BR, 2 T&amp;B",
		features  : "2 Storeys, 3 Bedrooms, Living Area, Dining Area, Kitchen, Maid's Room, 2 Toilet &amp; Baths, Carport and Balcony",
		vTour     : "",
		series    : "classic",
		previously: "camella"
	},
	{
		name      : "Carmela",
		flrArea   : 65,
		lotArea   : 88,
		lotAreaIU : 0,
		lotAreaEU : 0,
		summary   : "3-BR, 2 T&amp;B",
		features  : "2 Storeys, 3 Bedrooms, Living Area, Dining Area, Kitchen, 2 Toilet &amp; Baths, Carport and Balcony",
		vTour     : "https://www.youtube.com/watch?v=R7ovgW1uIh4",
		series    : "classic",
		previously: "camella"
	},
	{
		name      : "Mara",
		flrArea   : 53,
		lotArea   : 88,
		lotAreaIU : 0,
		lotAreaEU : 0,
		summary   : "3-BR, 2 T&amp;B",
		features  : "2 Storeys, 3 Bedrooms, Living Area, Dining Area, Kitchen, 2 Toilet &amp; Baths, Provision for Carport and Balcony",
		vTour     : "https://www.youtube.com/watch?v=SS-5M3Uuuqg",
		series    : "classic",
		previously: "camella"
	},
	// TERRAIN
	{
		name      : "Dorina_DH",
		flrArea   : 83,
		lotArea   : 108,
		lotAreaIU : 0,
		lotAreaEU : 0,
		summary   : "4-BR, 2 T&amp;B",
		features  : "2 Storeys, 3 Bedrooms, Living Area, Dining Area, Kitchen, Maid's Room, 2 Toilet &amp; Baths, Carport and Balcony",
		vTour     : "",
		series    : "classic",
		previously: "terrain"
	},
	{
		name      : "Dorina_UH",
		flrArea   : 83,
		lotArea   : 108,
		lotAreaIU : 0,
		lotAreaEU : 0,
		summary   : "4-BR, 2 T&amp;B",
		features  : "2 Storeys, 3 Bedrooms, Living Area, Dining Area, Kitchen, Maid's Room, 2 Toilet &amp; Baths, Carport and Balcony",
		vTour     : "",
		series    : "classic",
		previously: "terrain"
	},
	{
		name      : "Carmina_DH",
		flrArea   : 65,
		lotArea   : 99,
		lotAreaIU : 0,
		lotAreaEU : 0,
		summary   : "3-BR, 2 T&amp;B",
		features  : "2 Storeys, 3 Bedrooms, Living Area, Dining Area, Kitchen, 2 Toilet &amp; Baths, Carport and Balcony",
		vTour     : "",
		series    : "classic",
		previously: "terrain"
	},
	{
		name      : "Carmina_UH",
		flrArea   : 65,
		lotArea   : 99,
		lotAreaIU : 0,
		lotAreaEU : 0,
		summary   : "3-BR, 2 T&amp;B",
		features  : "2 Storeys, 3 Bedrooms, Living Area, Dining Area, Kitchen, 2 Toilet &amp; Baths, Carport and Balcony",
		vTour     : "",
		series    : "classic",
		previously: "terrain"
	},
	{
		name      : "Mariana_DH",
		flrArea   : 46,
		lotArea   : 72,
		lotAreaIU : 0,
		lotAreaEU : 0,
		summary   : "2-BR, 1 T&amp;B",
		features  : "2 Storeys, 2 Bedrooms, Living Area, Dining Area, Kitchen, Toilet &amp; Bath, Carport and Balcony",
		vTour     : "",
		series    : "classic",
		previously: "terrain"
	},
	{
		name      : "Mariana_UH",
		flrArea   : 46,
		lotArea   : 72,
		lotAreaIU : 0,
		lotAreaEU : 0,
		summary   : "2-BR, 1 T&amp;B",
		features  : "2 Storeys, 2 Bedrooms, Living Area, Dining Area, Kitchen, Toilet &amp; Bath, Carport and Balcony",
		vTour     : "",
		series    : "classic",
		previously: "terrain"
	},
	// LESSANDRA
	{
		name      : "Marga",
		flrArea   : 46,
		lotArea   : 77,
		lotAreaIU : 0,
		lotAreaEU : 0,
		summary   : "2-BR, 1 T&amp;B",
		features  : "2 Storeys, 2 Bedrooms, Living Area, Dining Area, Kitchen, Toilet &amp; Bath, Provision for Carport and Balcony",
		vTour     : "https://www.youtube.com/watch?v=eoXohAs0Ugg",
		series    : "classic",
		previously: "lessandra"
	},
	{
		name      : "Rina",
		flrArea   : 40,
		lotArea   : 44,
		lotAreaIU : 0,
		lotAreaEU : 0,
		summary   : "2-BR, 1 T&amp;B",
		features  : "2-Storeys, 2 Bedrooms, Living Area, Dining Area, Kitchen, Toilet &amp; Bath",
		vTour     : "https://www.youtube.com/watch?v=qpXNygQqVZ8",
		series    : "classic",
		previously: "lessandra"
	},
	{
		name      : "Nina",
		flrArea   : 50,
		lotArea   : 0,
		lotAreaIU : 50,
		lotAreaEU : 70,
		summary   : "3-BR, 2 T&amp;B",
		features  : "2-Storey Townhouse, 3 Bedrooms, Living Area, Dining Area, Kitchen, 2 Toilet &amp; Baths, Provision for Carport",
		vTour     : "",
		series    : "classic",
		previously: "lessandra"
	},
	{
		name      : "Margarita",
		flrArea   : 46,
		lotArea   : 0,
		lotAreaIU : 36,
		lotAreaEU : 54,
		summary   : "2-BR, 1 T&amp;B",
		features  : "2-Storey Townhouse, 2 Bedrooms, Living Area, Dining Area, Kitchen, Toilet &amp; Bath",
		vTour     : "",
		series    : "classic",
		previously: "lessandra"
	},
	{
		name      : "Reana",
		flrArea   : 40,
		lotArea   : 0,
		lotAreaIU : 40,
		lotAreaEU : 54,
		summary   : "2-BR, 1 T&amp;B",
		features  : "2-Storey Townhouse, 2 Bedrooms, Living Area, Dining Area, Kitchen, Toilet &amp; Bath",
		vTour     : "https://www.youtube.com/watch?v=hcNZVUnY9DE",
		series    : "classic",
		previously: "lessandra"
	},
	{
		name      : "Olivia",
		flrArea   : 60,
		lotArea   : 0,
		lotAreaIU : 50,
		lotAreaEU : 70,
		summary   : "3-BR, 2 T&amp;B",
		features  : "2-Storey Townhouse, 3 Bedrooms, Living Area, Dining Area, Kitchen, 2 Toilet &amp; Baths, Balcony, Provision for Carport",
		vTour     : "https://www.youtube.com/watch?v=hcNZVUnY9DE",
		series    : "classic",
		previously: "lessandra"
	}
]

export default (state = houseModels, action) => {
    return state;
}