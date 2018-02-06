
const projects = [
    // {
    //   title: 'NCR-North',
    //   projects : [
    //       {id: 1, name : 'Caloocan City'},
    //       {id: 2, name : 'Quezon City'},
    //       {id: 3, name : 'Valenzuela'},
    //   ]
    // },
    {
      title: 'Bulacan',
      projects : [
        {
          id : '',
          name : 'Baliwag'
        },
        {
            id          : 1, 
            name        : 'Camella Baliwag',
            sub_name    : 'Baliwag',
            folder_name : 'baliwag',
            prov        : 'Baliwag, Bulacan',
            comm        : 'Camella Baliwag',
            addr        : 'Brgy. Tangos, Baliuag, Bulacan',
            description : "Baliwag's proximity to Metro Manila and easy access NLEX continue to fuel its vital trade activities.  The expansion of Camella's flagship community propels Baliwag to the pinnacle of commercial affluence. Peaceful and a self-reliant community with efficient facilities and progressive economy.",

            commute     : "",
            vehicle     : "",
            road        : "DRT Highway, Old National Highway",
            transpo     : "Bus, Jeep, Tricycle, FX, Baliuag Transit Inc. Ordinary, Baliuag Transit Inc. Aircon, Five Star, ES Transport, Victory Liner",
            terminal    : "",
            others      : "SM Baliwag, San Agustin Parish Church, Baliwag Clock Tower, Baliwag Museum, JE Resort, El Nino Resort, Puregold Baliuag, NE Restaurant Le Family, 8 Waves Waterpark",
            hospital    : "Sagrada Familia Hospital, Baliuag District Hospital, De Jesus Hospital, Marcelo Hospital",
            school      : "Mariano Ponce High School, Baliuag University, St. Marv's College of Baliuag, Sagrada Familia School",
            church      : "St. Augustine Church, Sagrada Parish Church",
            mall        : "SM Baliwag",
            market      : "Puregold Baliwag, Tangos Mini Market, Baliuag Market",
            festival    : "",
            locations   : [
              {desc     : "", title : "Commute"},
              {desc     : "", title : "Vehicle"},
              {desc        : "DRT Highway, Old National Highway", title : "Major Roads"},
              {desc     : "Bus, Jeep, Tricycle, FX, Baliuag Transit Inc. Ordinary, Baliuag Transit Inc. Aircon, Five Star, ES Transport, Victory Liner", title : "Transportation & Terminals"},
              {desc    : "", title : ""},
              {desc      : "SM Baliwag, San Agustin Parish Church, Baliwag Clock Tower, Baliwag Museum, JE Resort, El Nino Resort, Puregold Baliuag, NE Restaurant Le Family, 8 Waves Waterpark", title : "Landmarks"},
              {desc    : "Sagrada Familia Hospital, Baliuag District Hospital, De Jesus Hospital, Marcelo Hospital", title : "Hospitals"},
              {desc      : "Mariano Ponce High School, Baliuag University, St. Marv's College of Baliuag, Sagrada Familia School", title : "Schools"},
              {desc      : "St. Augustine Church, Sagrada Parish Church", title : "Places of Worship"},
              {desc        : "SM Baliwag", title : "Malls"},
              {desc      : "Puregold Baliwag, Tangos Mini Market, Baliuag Market", title : "Supermarkets/WetMarkets"},
              {desc    : "", title : ""},
            ],
            launch      : "October 25, 3009",
            land        : "16 hectares",
            phase       : "5",
            amenity     : "",

            fbID        : "CamellaBaliwagOfficial",
            twID        : "camella_baliwag",
            igID        : "camellabaliwagofficial",
            ytID        : "UCvpm4BwyEFqdBHsWC7xqkWw",
            ytCH        : "Camella Bulacan",
            microsite   : "www.camellabulacan.net",
            email       : "Camellabaliwagofficial@gmail.com",
            overviewImg : require('./../assets/images/projects/baliwag/camellabaliwag/overview-bg.jpg'),
            logo        : require('./../assets/images/projects/baliwag/camellabaliwag/logo.png'),
            location_map : [
              {title : ' ', source : require('./../assets/images/projects/baliwag/camellabaliwag/map.jpg'), dimensions: { width: 300, height: 300 }},
              {title : 'Church', source : require('./../assets/images/projects/baliwag/camellabaliwag/map-church.jpg'), dimensions: { width: 300, height: 300 }},
              {title : 'Hospital', source : require('./../assets/images/projects/baliwag/camellabaliwag/map-hospital.jpg'), dimensions: { width: 300, height: 300 }},
              {title : 'Mall', source : require('./../assets/images/projects/baliwag/camellabaliwag/map-mall.jpg'), dimensions: { width: 300, height: 300 }},
              {title : 'Market', source : require('./../assets/images/projects/baliwag/camellabaliwag/map-market.jpg'), dimensions: { width: 300, height: 300 }},
              {title : 'School', source : require('./../assets/images/projects/baliwag/camellabaliwag/map-school.jpg'), dimensions: { width: 300, height: 300 }},
              {title : 'Transportation', source : require('./../assets/images/projects/baliwag/camellabaliwag/map-transpo.jpg'), dimensions: { width: 300, height: 300 }},
            ],
            subdivision_map : [
              {id : 1, title : 'Master Plan', source : require('./../assets/images/projects/baliwag/camellabaliwag/sdp-1.jpg'), dimensions: { width: 300, height: 300 }},
              {id : 2, title : 'Phase 5', source : require('./../assets/images/projects/baliwag/camellabaliwag/sdp-2.jpg'), dimensions: { width: 300, height: 300 }},
              {id : 3, title : 'Phase 4', source : require('./../assets/images/projects/baliwag/camellabaliwag/sdp-3.jpg'), dimensions: { width: 300, height: 300 }},
              {id : 4, title : 'Phase 6', source : require('./../assets/images/projects/baliwag/camellabaliwag/sdp-4.jpg'), dimensions: { width: 300, height: 300 }},
            ],
            amenities : [
              {id : 1, title : 'ClubHouse & Swimming pool', source : require('./../assets/images/projects/baliwag/camellabaliwag/amenity-1.jpg'), dimensions: { width: 300, height: 300 }},
              {id : 2, title : 'ClubHouse & Swimming pool', source : require('./../assets/images/projects/baliwag/camellabaliwag/amenity-2.jpg'), dimensions: { width: 300, height: 300 }},
            ],
            galleries : [
              {id : 1, title : null, source : require('./../assets/images/projects/baliwag/camellabaliwag/gallery-1.jpg'), dimensions: { width: 300, height: 300 }},
              {id : 2, title : null, source : require('./../assets/images/projects/baliwag/camellabaliwag/gallery-2.jpg'), dimensions: { width: 300, height: 300 }},
              {id : 3, title : null, source : require('./../assets/images/projects/baliwag/camellabaliwag/gallery-3.jpg'), dimensions: { width: 300, height: 300 }},
              {id : 4, title : null, source : require('./../assets/images/projects/baliwag/camellabaliwag/gallery-4.jpg'), dimensions: { width: 300, height: 300 }},
              {id : 5, title : null, source : require('./../assets/images/projects/baliwag/camellabaliwag/gallery-5.jpg'), dimensions: { width: 300, height: 300 }},
              {id : 6, title : null, source : require('./../assets/images/projects/baliwag/camellabaliwag/gallery-6.jpg'), dimensions: { width: 300, height: 300 }},
            ],
            available_house_models : [
              'Reana',
              'Olivia',
              'Nina'
            ]
        },
        
          // {id: 2, name : 'Bulakan'},
          // {id: 3, name : 'Malolos'},
      ],
    },
    // {
    //   title: 'Pampanga',
    //   projects : [
    //       {id: 1, name : 'Angeles'},
    //       {id: 2, name : 'Apalit'},
    //       {id: 3, name : 'Mexico'},
    //   ]
    // },
    // {
    //   title: 'Bataan',
    //   projects : [
    //       {id: 1, name : 'Balanga City'},
    //       {id: 2, name : 'Orani'},
    //   ]
    // },
    // {
    //   title: 'Nueva Ecija',
    //   projects : [
    //       {id: 1, name : 'Cabanatuan'},
    //       {id: 2, name : 'Gapan'},
    //       {id: 3, name : 'Camella San Jose'},
    //   ]
    // },
    // {
    //   title: 'Nueva Ecija',
    //   projects : [
    //       {id: 1, name : 'Cabanatuan'},
    //       {id: 2, name : 'Gapan'},
    //       {id: 3, name : 'Camella San Jose'},
    //   ]
    // },
    // {
    //   title: 'Nueva Ecija',
    //   projects : [
    //       {id: 1, name : 'Cabanatuan'},
    //       {id: 2, name : 'Gapan'},
    //       {id: 3, name : 'Camella San Jose'},
    //   ]
    // },
    // {
    //   title: 'Nueva Ecija',
    //   projects : [
    //       {id: 1, name : 'Cabanatuan'},
    //       {id: 2, name : 'Gapan'},
    //       {id: 3, name : 'Camella San Jose'},
    //   ]
    // },
    // {
    //   title: 'Nueva Ecija',
    //   projects : [
    //       {id: 1, name : 'Cabanatuan'},
    //       {id: 2, name : 'Gapan'},
    //       {id: 3, name : 'Camella San Jose'},
    //   ]
    // },
    // {
    //   title: 'Nueva Ecija',
    //   projects : [
    //       {id: 1, name : 'Cabanatuan'},
    //       {id: 2, name : 'Gapan'},
    //       {id: 3, name : 'Camella San Jose'},
    //   ]
    // },
    // {
    //   title: 'Nueva Ecija',
    //   projects : [
    //       {id: 1, name : 'Cabanatuan'},
    //       {id: 2, name : 'Gapan'},
    //       {id: 3, name : 'Camella San Jose'},
    //   ]
    // },
    // {
    //   title: 'Nueva Ecija',
    //   projects : [
    //       {id: 1, name : 'Cabanatuan'},
    //       {id: 2, name : 'Gapan'},
    //       {id: 3, name : 'Camella San Jose'},
    //   ]
    // },
    // {
    //   title: 'Nueva Ecija',
    //   projects : [
    //       {id: 1, name : 'Cabanatuan'},
    //       {id: 2, name : 'Gapan'},
    //       {id: 3, name : 'Camella San Jose'},
    //   ]
    // },
    // {
    //   title: 'Nueva Ecija',
    //   projects : [
    //       {id: 1, name : 'Cabanatuan'},
    //       {id: 2, name : 'Gapan'},
    //       {id: 3, name : 'Camella San Jose'},
    //   ]
    // },
    // {
    //   title: 'Nueva Ecija',
    //   projects : [
    //       {id: 1, name : 'Cabanatuan'},
    //       {id: 2, name : 'Gapan'},
    //       {id: 3, name : 'Camella San Jose'},
    //   ]
    // },
    // {
    //   title: 'Nueva Ecija',
    //   projects : [
    //       {id: 1, name : 'Cabanatuan'},
    //       {id: 2, name : 'Gapan'},
    //       {id: 3, name : 'Camella San Jose'},
    //   ]
    // },
    // {
    //   title: 'Nueva Ecija',
    //   projects : [
    //       {id: 1, name : 'Cabanatuan'},
    //       {id: 2, name : 'Gapan'},
    //       {id: 3, name : 'Camella San Jose'},
    //   ]
    // },
    // {
    //   title: 'Nueva Ecija',
    //   projects : [
    //       {id: 1, name : 'Cabanatuan'},
    //       {id: 2, name : 'Gapan'},
    //       {id: 3, name : 'Camella San Jose'},
    //   ]
    // },
  ];
import {SELECT_PROJECT_ACTION} from '../actions';

export default (state = projects, action) => {
    return state;
}