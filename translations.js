const translations = {

  /* ================= ENGLISH ================= */
  en: {
    meta:{ title:"Our Wedding — Masia Egara" },
    brand:{ short:"V&amp;E" },
    nav:{ home:"Home", event:"The Event", getting:"Getting There", location:"The Venue", faq:"FAQ", rsvp:"RSVP" },
    home:{
      eyebrow:"We're getting married",
      names:"Veronica &amp; Elena",
      date:"24 April, 2027",
      venue:"Masia Egara · Terrassa, Catalonia",
      welcome_title:"Welcome",
      welcome_text:"After all this time, we finally get to say it out loud: we're getting married, and we want you there with us. Under the old stone arches of Masia Egara, surrounded by the people we love most, we'll celebrate a day we've been dreaming about for a long time. Use the menu above for everything you need to know — the schedule, how to get there, where to stay, and answers to the questions we know you'll ask.",
      countdown_title:"Counting down to the big day",
      days:"Days", hours:"Hours", minutes:"Minutes", seconds:"Seconds",
      explore:"Explore the celebration"
    },
    event:{
      title:"The Celebration",
      intro:"Here's how the day will unfold. Every moment has its own place and its own light — from the first vows to the last dance.",
      items:[
        {time:"17:00", title:"Ceremony", place:"Bosque, Masia Egara", text:"We'll gather among the trees for the ceremony, conducted by Pau Torner. Please try to arrive at least half an hour early, around 16:30. The ceremony itself will last about an hour."},
        {time:"18:30", title:"Cocktail Hour", place:"Jardín Rojo, Masia Egara", text:"Drinks and Catalan cuisine from the Delta de l'Ebre, prepared by Xerta Catering, with photos and video happening alongside."},
        {time:"20:30", title:"Dinner", place:"Era, Masia Egara", text:"We'll sit down for dinner in the Era, right in front of the masia, topped off with cake!"},
        {time:"23:30", title:"Party", place:"Bodega, Masia Egara", text:"Time to dance the night away, indoors in the Bodega."}
      ],
      note:"These timings are as accurate as we can make them — we'll let you know if anything changes."
    },
    getting:{
      title:"How to Get There",
      intro:"Masia Egara sits in the countryside near Terrassa, about 25km (roughly 30 minutes) north of Barcelona. Here's how to reach us.",
      by_car_title:"By Car",
      by_car_text:"The address is Carretera de Rellinars Km 2.4, 08225 Terrassa, Barcelona, Spain — <a href='https://maps.app.goo.gl/DeM8DD5ZF3uXXBXk6' target='_blank' rel='noopener'>open in Google Maps</a>. There's a large car park about 10 minutes on foot from the venue, along a gravel path; if you have accessibility needs, there's a closer parking area available — just let us know.",
      by_bus_title:"By Bus",
      by_bus_text:"We're organizing shuttle buses from [Terrassa, meeting point] to Masia Egara, departing around [XX:XX], with a return service at the end of the night. More details closer to the date.",
      from_bcn_title:"From Barcelona",
      from_bcn_text:"We recommend landing in Barcelona. From there you can choose to stay in Barcelona itself, in Terrassa, or even in Sabadell, the nearest city, if you have a car.<br><br>To get from Barcelona to Terrassa, take the Ferrocarrils de la Generalitat (FGC) line S1 from Plaça Catalunya, Provença, or Muntaner in the city centre, and get off at Vallparadís Universitat or Terrassa Nord, where our shuttle buses will depart from. A single trip costs 5.40€; make sure to buy a Zona 3 ticket.<br><br>An Uber from Barcelona costs around 50€ and is also an option if you would rather travel there directly.",
      map_label:"Find us on the map",
      stay_title:"Where to Stay",
      stay_intro:"A few options near the venue and in Barcelona, from hotels to campsites, for anyone who'd like to stay over. Prices shown are approximate starting rates and shift with the season, so it's worth checking closer to the date.",
      book_label:"Book →",
      hotels:[
        {tag:"Hotel", name:"Hotel Terrassa Confort", dist:"From €65/night", text:"Terrassa, near the Parc Vallès shopping centre. 3-star, modern and functional.", group:"Terrassa", url:"https://www.hotelterrassaconfort.com/en/"},
        {tag:"Hotel", name:"Eurostars Don Cándido", dist:"From €90/night", text:"Terrassa. 4-star, a distinctive circular building with a restaurant and event spaces.", group:"Terrassa", url:"https://www.eurostarshotels.com/eurostars-don-candido.html"},
        {tag:"Hotel", name:"Boada Riera — The Rooms by Reini", dist:"From €90/night", text:"Right in the centre of Terrassa, inside a beautifully restored modernist building.", group:"Terrassa", url:"https://boadariera.com/"},
        {tag:"Hotel", name:"Aparthotel Attica 21 Vallès", dist:"From €75/night", text:"Sabadell. Studio-style rooms with a kitchenette, in a quiet residential area.", group:"Terrassa", url:"https://www.attica21hotels.com/aparthotel-attica21-valles/"},
        {tag:"Hotel", name:"Hotel Petit Luxe", dist:"From €90/night", text:"Terrassa centre, a boutique hotel right in the shopping district.", group:"Terrassa", url:"https://hotelpetitluxe.cat/en/"},
        {tag:"Hotel", name:"Holiday Inn Express & Suites Barcelona–Sabadell", dist:"From €100/night", text:"Sabadell, next to a shopping centre. New, modern, with free breakfast.", group:"Terrassa", url:"https://www.ihg.com/holidayinnexpress/hotels/us/en/sabadell/bcnbs/hoteldetail"},
        {tag:"Hotel", name:"Travelodge Barcelona del Vallès", dist:"From €60/night", text:"Barberà del Vallès, just off the AP-7 motorway.", group:"Terrassa", url:"https://www.travelodge.es/en/hotels-barcelona/valles"},
        {tag:"Hotel", name:"Hotel Exe Campus", dist:"From €60/night", text:"Cerdanyola del Vallès, on the UAB university campus.", group:"Terrassa", url:"https://www.hotelexecampus.com/"},
        {tag:"Camping", name:"Camping La Tatgera", dist:"From €20/night", text:"Talamanca, right at the edge of the Sant Llorenç del Munt natural park.", group:"Terrassa", url:"https://campingtalamanca.com/"},
        {tag:"Camping", name:"Camping El Pasqualet", dist:"From €25/person/night", text:"Caldes de Montbui, a family-friendly campsite with a pool.", group:"Terrassa", url:"https://elpasqualet.com/en/"},
        {tag:"Hotel", name:"Hotel Cram", dist:"From €138/night", text:"Eixample, a design-focused boutique hotel.", group:"Barcelona", url:"https://hotelcram.com/en/"},
        {tag:"Hotel", name:"Yurbban Trafalgar Hotel", dist:"From €130/night", text:"El Born, a boutique hotel with a rooftop pool and panoramic views.", group:"Barcelona", url:"https://trafalgar.yurbban.com/"},
        {tag:"Hotel", name:"Room Mate Emma", dist:"From €170/night", text:"Eixample, a futuristic design hotel steps from Passeig de Gràcia.", group:"Barcelona", url:"https://room-matehotels.com/en/emma/"},
        {tag:"Hotel", name:"Praktik Rambla", dist:"From €110/night", text:"Eixample, a short walk from Passeig de Gràcia and Plaça Catalunya.", group:"Barcelona", url:"https://www.hotelpraktikrambla.com/en/"},
        {tag:"Hotel", name:"Live & Dream", dist:"From €90/night", text:"Near Sants station, well connected by train and metro.", group:"Barcelona", url:"https://liveanddream.com/en/"},
        {tag:"Hotel", name:"Ibis Barcelona Meridiana", dist:"From €80/night", text:"Nou Barris, a reliable budget chain next to the Heron City shopping centre.", group:"Barcelona", url:"https://all.accor.com/hotel/3310/index.en.shtml"},
        {tag:"Camping", name:"Camping Estrella de Mar", dist:"From €27/night", text:"Castelldefels, a pine forest setting just 400m from the beach.", group:"Barcelona", url:"https://campingestrellademar.com/en/"},
        {tag:"Camping", name:"HolaCamp Barcelona (Gavà Beach)", dist:"From €40/night", text:"Gavà, right by the beach, about 30 minutes from the city.", group:"Barcelona", url:"https://www.holacamp.net/en/destinations/camping-barcelona"}
      ]
    },
    location:{
      title:"Masia Egara",
      subtitle:"Where we'll say I do",
      text1:"Masia Egara is a Catalan farmhouse just outside Terrassa, surrounded by fields and gardens. Its stone arches, wooden beams and open courtyards make it feel like a place that's been waiting for a celebration.",
      text2:"We love the colours and the lush gardens here, and we can't wait to share a true Catalan masia with you.",
      photo_note:"[Add photos of the venue here]",
      features:[
        {label:"Gardens", text:"Home to the Jardín Rojo, the Jardín Verde, and the centenary garden."},
        {label:"Ceremony space", text:"In the Bosque (forest), a small natural amphitheatre."},
        {label:"Onsite parking", text:"Available, please confirm with us in advance."},
        {label:"Accessibility", text:"Closer parking available near the venue for anyone who needs it."}
      ]
    },
    faq:{
      title:"Frequently Asked Questions",
      items:[
        {q:"Do you have a gift registry?", a:"The best gift is having you there with us. If you'd still like to contribute to something, a gift towards our honeymoon means more to us than a physical one — you're welcome to send it by bank transfer: IBAN [to be added]."},
        {q:"What's the dress code?", a:"Elegant. We'll be outdoors on grass and gravel, so we'd suggest comfortable shoes over thin heels."},
        {q:"Can we arrive by car?", a:"Yes: see the 'Getting There' page for the address, directions, and parking details."},
        {q:"Is there transport from Terrassa?", a:"Yes, we're arranging shuttle buses between Terrassa and the venue, both for arrival and for the return at the end of the night. Timings will be shared closer to the date."},
        {q:"Who can I contact with questions?", a:"Reach out any time! [Name]: [phone / email], [Name]: [phone / email]."},
        {q:"Can I bring a plus one?", a:"Unfortunately not, due to space limitations. If you're able to bring someone, they'll have received their own invitation."},
        {q:"Are children welcome?", a:"If your invitation includes your children, they're more than welcome! If it doesn't, we hope you understand — with such a small venue, we have to keep numbers tight."}
      ]
    },
    footer:{ text:"Made with love. See you at Masia Egara." },
    rsvp:{
      title:"Elena &amp; Vero's Wedding Questionnaire",
      intro_note:"One form per person, please, including children. We're not able to accommodate additional guests, so if you're bringing someone, they'll have received their own invitation.",
      text:"We'd be delighted to have you with us on our special day. Please confirm your attendance below, we need everyone's completed questionnaire back to make sure we have all the right information and can keep the wedding running smoothly. Everything you share will be treated with full privacy, in line with data protection law, and used only to organize our event. Thank you for your help, and please send it back before December 1st!",
      button:"Open the RSVP form"
    }
  },

  /* ================= ESPAÑOL ================= */
  es: {
    meta:{ title:"Nuestra Boda — Masia Egara" },
    brand:{ short:"V&amp;E" },
    nav:{ home:"Inicio", event:"El Evento", getting:"Cómo Llegar", location:"El Lugar", faq:"Preguntas", rsvp:"RSVP" },
    home:{
      eyebrow:"Nos casamos",
      names:"Veronica &amp; Elena",
      date:"24 Abril, 2027",
      venue:"Masia Egara · Terrassa, Cataluña",
      welcome_title:"Bienvenidos",
      welcome_text:"Después de todo este tiempo, por fin podemos decirlo en voz alta: nos casamos, y queremos teneros con nosotros. Bajo los antiguos arcos de piedra de Masia Egara, rodeados de las personas que más queremos, celebraremos un día que llevamos mucho tiempo soñando. Usad el menú de arriba para encontrar todo lo que necesitáis saber: el horario, cómo llegar, dónde alojaros y las respuestas a esas preguntas que sabemos que os haréis.",
      countdown_title:"Cuenta atrás para el gran día",
      days:"Días", hours:"Horas", minutes:"Minutos", seconds:"Segundos",
      explore:"Descubrir la celebración"
    },
    event:{
      title:"La Celebración",
      intro:"Así se desarrollará el día. Cada momento tiene su lugar y su propia luz, desde los primeros votos hasta el último baile.",
      items:[
        {time:"17:00", title:"Ceremonia", place:"Bosque, Masia Egara", text:"Nos reuniremos entre los árboles para la ceremonia, oficiada por Pau Torner. Intentad llegar al menos media hora antes, sobre las 16:30 — la ceremonia en sí durará aproximadamente una hora."},
        {time:"18:30", title:"Aperitivo", place:"Jardín Rojo, Masia Egara", text:"Cóctel y cocina catalana del Delta de l'Ebre, a cargo de Xerta Catering, con fotos y vídeo en paralelo."},
        {time:"20:30", title:"Cena", place:"Era, Masia Egara", text:"Cena sentada en la Era, justo delante de la masía — ¡rematada con tarta!"},
        {time:"23:30", title:"Fiesta", place:"Bodega, Masia Egara", text:"¡Hora de fiesta! A bailar en la Bodega, en el interior."}
      ],
      note:"Estos horarios son lo más precisos posible — os avisaremos si hay algún cambio."
    },
    getting:{
      title:"Cómo Llegar",
      intro:"Masia Egara está en plena naturaleza cerca de Terrassa, a unos 25 km (unos 30 minutos) al norte de Barcelona. Así podéis llegar hasta nosotros.",
      by_car_title:"En Coche",
      by_car_text:"La dirección es Carretera de Rellinars Km 2.4, 08225 Terrassa, Barcelona — <a href='https://maps.app.goo.gl/DeM8DD5ZF3uXXBXk6' target='_blank' rel='noopener'>abrir en Google Maps</a>. Hay un aparcamiento grande a unos 10 minutos a pie de la masía, por un camino de gravilla; si tenéis necesidades de accesibilidad, hay un aparcamiento más cercano disponible — avisadnos.",
      by_bus_title:"En Autobús",
      by_bus_text:"Estamos organizando autobuses desde [Terrassa, punto de encuentro] hasta Masia Egara, con salida prevista sobre las [XX:XX] y servicio de vuelta al final de la noche. Más detalles cerca de la fecha.",
      from_bcn_title:"Desde Barcelona",
      from_bcn_text:"Os recomendamos aterrizar en Barcelona. Desde allí podéis elegir alojaros en la propia Barcelona, en Terrassa o incluso en Sabadell, la ciudad más cercana, si disponéis de coche.<br><br>Para ir de Barcelona a Terrassa, coged los Ferrocarrils de la Generalitat (FGC), línea S1, desde Plaça Catalunya, Provença o Muntaner en el centro de la ciudad, y bajaos en Vallparadís Universitat o Terrassa Nord, de donde saldrán nuestros autobuses. Un trayecto cuesta 5,40€; recordad comprar un billete de Zona 3.<br><br>Un Uber desde Barcelona cuesta unos 50€ y también es una opción si preferís ir directamente.",
      map_label:"Encuéntranos en el mapa",
      stay_title:"Dónde Alojarse",
      stay_intro:"Algunas opciones cerca del lugar y en Barcelona, desde hoteles hasta campings, para quien quiera quedarse a dormir. Los precios son orientativos, desde la tarifa más económica, y varían según la temporada, así que conviene consultarlos más cerca de la fecha.",
      book_label:"Reservar →",
      hotels:[
        {tag:"Hotel", name:"Hotel Terrassa Confort", dist:"Desde 65€/noche", text:"Terrassa, cerca del centro comercial Parc Vallès. 3 estrellas, moderno y funcional.", group:"Terrassa", url:"https://www.hotelterrassaconfort.com/en/"},
        {tag:"Hotel", name:"Eurostars Don Cándido", dist:"Desde 90€/noche", text:"Terrassa. 4 estrellas, un edificio circular singular con restaurante y espacios para eventos.", group:"Terrassa", url:"https://www.eurostarshotels.com/eurostars-don-candido.html"},
        {tag:"Hotel", name:"Boada Riera — The Rooms by Reini", dist:"Desde 90€/noche", text:"En pleno centro de Terrassa, dentro de un edificio modernista restaurado.", group:"Terrassa", url:"https://boadariera.com/"},
        {tag:"Hotel", name:"Aparthotel Attica 21 Vallès", dist:"Desde 75€/noche", text:"Sabadell. Habitaciones tipo estudio con cocina, en una zona residencial tranquila.", group:"Terrassa", url:"https://www.attica21hotels.com/aparthotel-attica21-valles/"},
        {tag:"Hotel", name:"Hotel Petit Luxe", dist:"Desde 90€/noche", text:"Centro de Terrassa, hotel boutique en plena zona comercial.", group:"Terrassa", url:"https://hotelpetitluxe.cat/en/"},
        {tag:"Hotel", name:"Holiday Inn Express & Suites Barcelona–Sabadell", dist:"Desde 100€/noche", text:"Sabadell, junto a un centro comercial. Nuevo, moderno y con desayuno incluido.", group:"Terrassa", url:"https://www.ihg.com/holidayinnexpress/hotels/us/en/sabadell/bcnbs/hoteldetail"},
        {tag:"Hotel", name:"Travelodge Barcelona del Vallès", dist:"Desde 60€/noche", text:"Barberà del Vallès, justo al lado de la autopista AP-7.", group:"Terrassa", url:"https://www.travelodge.es/en/hotels-barcelona/valles"},
        {tag:"Hotel", name:"Hotel Exe Campus", dist:"Desde 60€/noche", text:"Cerdanyola del Vallès, en el campus de la UAB.", group:"Terrassa", url:"https://www.hotelexecampus.com/"},
        {tag:"Camping", name:"Camping La Tatgera", dist:"Desde 20€/noche", text:"Talamanca, justo en el borde del parque natural de Sant Llorenç del Munt.", group:"Terrassa", url:"https://campingtalamanca.com/"},
        {tag:"Camping", name:"Camping El Pasqualet", dist:"Desde 25€/persona/noche", text:"Caldes de Montbui, un camping familiar con piscina.", group:"Terrassa", url:"https://elpasqualet.com/en/"},
        {tag:"Hotel", name:"Hotel Cram", dist:"Desde 138€/noche", text:"Eixample, un hotel boutique centrado en el diseño.", group:"Barcelona", url:"https://hotelcram.com/en/"},
        {tag:"Hotel", name:"Yurbban Trafalgar Hotel", dist:"Desde 130€/noche", text:"El Born, un hotel boutique con piscina en la azotea y vistas panorámicas.", group:"Barcelona", url:"https://trafalgar.yurbban.com/"},
        {tag:"Hotel", name:"Room Mate Emma", dist:"Desde 170€/noche", text:"Eixample, un hotel de diseño futurista a pasos del Passeig de Gràcia.", group:"Barcelona", url:"https://room-matehotels.com/en/emma/"},
        {tag:"Hotel", name:"Praktik Rambla", dist:"Desde 110€/noche", text:"Eixample, a un corto paseo del Passeig de Gràcia y la Plaça Catalunya.", group:"Barcelona", url:"https://www.hotelpraktikrambla.com/en/"},
        {tag:"Hotel", name:"Live & Dream", dist:"Desde 90€/noche", text:"Cerca de la estación de Sants, muy bien comunicado en tren y metro.", group:"Barcelona", url:"https://liveanddream.com/en/"},
        {tag:"Hotel", name:"Ibis Barcelona Meridiana", dist:"Desde 80€/noche", text:"Nou Barris, una cadena económica de confianza junto al centro comercial Heron City.", group:"Barcelona", url:"https://all.accor.com/hotel/3310/index.en.shtml"},
        {tag:"Camping", name:"Camping Estrella de Mar", dist:"Desde 27€/noche", text:"Castelldefels, en un pinar a solo 400 m de la playa.", group:"Barcelona", url:"https://campingestrellademar.com/en/"},
        {tag:"Camping", name:"HolaCamp Barcelona (Gavà Beach)", dist:"Desde 40€/noche", text:"Gavà, justo al lado de la playa, a unos 30 minutos de la ciudad.", group:"Barcelona", url:"https://www.holacamp.net/en/destinations/camping-barcelona"}
      ]
    },
    location:{
      title:"Masia Egara",
      subtitle:"Donde nos daremos el sí quiero",
      text1:"Masia Egara es una masía catalana a las afueras de Terrassa, rodeada de campos y jardines. Sus arcos de piedra, vigas de madera y patios abiertos hacen que parezca un lugar que llevaba tiempo esperando una celebración.",
      text2:"Nos encantan los colores y los jardines exuberantes de este lugar, y estamos deseando compartir con vosotros una auténtica masía catalana.",
      photo_note:"[Añade aquí fotos del lugar]",
      features:[
        {label:"Jardines", text:"Cuenta con el Jardín Rojo, el Jardín Verde y el jardín centenario."},
        {label:"Espacio de ceremonia", text:"En el Bosque — un pequeño anfiteatro natural."},
        {label:"Aparcamiento propio", text:"Disponible — confirmadlo con nosotros con antelación."},
        {label:"Accesibilidad", text:"Aparcamiento más cercano a la masía disponible para quien lo necesite."}
      ]
    },
    faq:{
      title:"Preguntas Frecuentes",
      items:[
        {q:"¿Tenéis lista de bodas?", a:"El mejor regalo es teneros allí con nosotros. Si aun así queréis colaborar con algo, una aportación para nuestra luna de miel significa para nosotros más que cualquier regalo físico — podéis hacerla por transferencia: IBAN [pendiente de añadir]."},
        {q:"¿Cuál es el código de vestimenta?", a:"Elegante. Estaremos al aire libre, sobre hierba y gravilla, así que recomendamos calzado cómodo antes que tacones finos."},
        {q:"¿Podemos ir en coche?", a:"Sí — consulta la página 'Cómo Llegar' para la dirección, las indicaciones y los detalles del aparcamiento."},
        {q:"¿Hay transporte desde Terrassa?", a:"Sí, estamos organizando autobuses entre Terrassa y el lugar, tanto para la llegada como para la vuelta al final de la noche. Los horarios se compartirán más cerca de la fecha."},
        {q:"¿Con quién puedo contactar si tengo dudas?", a:"Escribidnos cuando queráis — [Nombre]: [teléfono / email], [Nombre]: [teléfono / email]."},
        {q:"¿Puedo traer a un +1?", a:"Lamentablemente no, por limitaciones de espacio. Si puedes venir acompañado/a, esa persona habrá recibido su propia invitación."},
        {q:"¿Pueden venir niños?", a:"Si vuestra invitación incluye a vuestros hijos, ¡serán más que bienvenidos! Si no es así, esperamos que lo entendáis — con un espacio tan pequeño, tenemos que ajustar bien el número de invitados."}
      ]
    },
    footer:{ text:"Hecho con cariño. Nos vemos en Masia Egara." },
    rsvp:{
      title:"Cuestionario previo boda Elena &amp; Vero",
      intro_note:"Un formulario por persona, por favor, incluidos los niños. No podemos incluir acompañantes adicionales, así que si vienes con alguien, esa persona habrá recibido su propia invitación.",
      text:"Estaremos encantados de contar con tu presencia en nuestro día especial. Confirma tu asistencia a continuación — necesitamos el cuestionario completado de cada persona para tener toda la información correcta y poder organizar bien la boda. Todo lo que compartas será tratado con total privacidad, de acuerdo con la Ley de Protección de Datos, y se usará únicamente para la organización de nuestro evento. ¡Gracias por tu ayuda, y recuerda enviarlo antes del 1 de diciembre!",
      button:"Abrir el formulario"
    }
  },

  /* ================= CATALÀ ================= */
  ca: {
    meta:{ title:"El Nostre Casament — Masia Egara" },
    brand:{ short:"V&amp;E" },
    nav:{ home:"Inici", event:"L'Esdeveniment", getting:"Com Venir", location:"El Lloc", faq:"Preguntes", rsvp:"RSVP" },
    home:{
      eyebrow:"Ens casem",
      names:"Veronica &amp; Elena",
      date:"24 Abril, 2027",
      venue:"Masia Egara · Terrassa, Catalunya",
      welcome_title:"Benvinguts",
      welcome_text:"Després de tot aquest temps, per fi ho podem dir en veu alta: ens casem, i volem que estigueu amb nosaltres. Sota els antics arcs de pedra de Masia Egara, envoltats de les persones que més estimem, celebrarem un dia que fa temps que somiem. Feu servir el menú de dalt per trobar tot el que necessiteu saber: l'horari, com venir, l'allotjament i les respostes a les preguntes que sabem que us fareu.",
      countdown_title:"Compte enrere per al gran dia",
      days:"Dies", hours:"Hores", minutes:"Minuts", seconds:"Segons",
      explore:"Descobrir la celebració"
    },
    event:{
      title:"La Celebració",
      intro:"Així es desenvoluparà el dia. Cada moment té el seu lloc i la seva pròpia llum, des dels primers vots fins a l'últim ball.",
      items:[
        {time:"17:00", title:"Cerimònia", place:"Bosque, Masia Egara", text:"Ens trobarem entre els arbres per a la cerimònia, oficiada per Pau Torner. Intenteu arribar almenys mitja hora abans, cap a les 16:30. La cerimònia en si durarà aproximadament una hora."},
        {time:"18:30", title:"Aperitiu", place:"Jardín Rojo, Masia Egara", text:"Còctel i cuina catalana del Delta de l'Ebre, a càrrec de Xerta Catering, amb fotos i vídeo en paral·lel."},
        {time:"20:30", title:"Sopar", place:"Era, Masia Egara", text:"Sopar assegut a l'Era, just davant la masia, rematat amb pastís!"},
        {time:"23:30", title:"Festa", place:"Bodega, Masia Egara", text:"Hora de festa! A ballar a la Bodega, a l'interior."}
      ],
      note:"Aquests horaris són tan precisos com podem — us avisarem si hi ha algun canvi."
    },
    getting:{
      title:"Com Venir",
      intro:"Masia Egara es troba enmig de la natura a prop de Terrassa, a uns 25 km (uns 30 minuts) al nord de Barcelona. Així podeu arribar fins a nosaltres.",
      by_car_title:"Amb Cotxe",
      by_car_text:"L'adreça és Carretera de Rellinars Km 2.4, 08225 Terrassa, Barcelona — <a href='https://maps.app.goo.gl/DeM8DD5ZF3uXXBXk6' target='_blank' rel='noopener'>obrir a Google Maps</a>. Hi ha un aparcament gran a uns 10 minuts a peu de la masia, per un camí de grava; si teniu necessitats d'accessibilitat, hi ha un aparcament més proper disponible; no dubteu a contactar amb nosaltres.",
      by_bus_title:"Amb Autobús",
      by_bus_text:"Estem organitzant autobusos des de [Terrassa, punt de trobada] fins a Masia Egara, amb sortida prevista cap a les [XX:XX] i servei de tornada a final de la nit. Més detalls a prop de la data.",
      from_bcn_title:"Des de Barcelona",
      from_bcn_text:"Us recomanem aterrar a Barcelona. Des d'allà podeu triar allotjament a la mateixa Barcelona, a Terrassa o, fins i tot, a Sabadell, la ciutat més propera, si teniu cotxe.<br><br>Per anar de Barcelona a Terrassa, agafeu els Ferrocarrils de la Generalitat (FGC), línia S1, des de Plaça Catalunya, Provença o Muntaner al centre de la ciutat, i baixeu a Vallparadís Universitat o Terrassa Nord, d'on sortiran els nostres autobusos. Un trajecte costa 5,40€; recordeu comprar un bitllet de Zona 3.<br><br>Un Uber des de Barcelona costa uns 50€ i és una altra opció per arribar directament al lloc.",
      map_label:"Troba'ns al mapa",
      stay_title:"Allotjament",
      stay_intro:"Algunes opcions a prop del lloc i a Barcelona, des d'hotels fins a càmpings, per a qui necessiti allotjament. Els preus són orientatius, des de la tarifa més econòmica, i varien segons la temporada, així que convé consultar-los més a prop de la data.",
      book_label:"Reserva →",
      hotels:[
        {tag:"Hotel", name:"Hotel Terrassa Confort", dist:"Des de 65€/nit", text:"Terrassa, a prop del centre comercial Parc Vallès. 3 estrelles, modern i funcional.", group:"Terrassa", url:"https://www.hotelterrassaconfort.com/en/"},
        {tag:"Hotel", name:"Eurostars Don Cándido", dist:"Des de 90€/nit", text:"Terrassa. 4 estrelles, un edifici circular singular amb restaurant i espais per a esdeveniments.", group:"Terrassa", url:"https://www.eurostarshotels.com/eurostars-don-candido.html"},
        {tag:"Hotel", name:"Boada Riera — The Rooms by Reini", dist:"Des de 90€/nit", text:"Al bell mig del centre de Terrassa, dins d'un edifici modernista restaurat.", group:"Terrassa", url:"https://boadariera.com/"},
        {tag:"Hotel", name:"Aparthotel Attica 21 Vallès", dist:"Des de 75€/nit", text:"Sabadell. Habitacions tipus estudi amb cuina, en una zona residencial tranquil·la.", group:"Terrassa", url:"https://www.attica21hotels.com/aparthotel-attica21-valles/"},
        {tag:"Hotel", name:"Hotel Petit Luxe", dist:"Des de 90€/nit", text:"Centre de Terrassa, hotel boutique en plena zona comercial.", group:"Terrassa", url:"https://hotelpetitluxe.cat/en/"},
        {tag:"Hotel", name:"Holiday Inn Express & Suites Barcelona–Sabadell", dist:"Des de 100€/nit", text:"Sabadell, al costat d'un centre comercial. Nou, modern i amb esmorzar inclòs.", group:"Terrassa", url:"https://www.ihg.com/holidayinnexpress/hotels/us/en/sabadell/bcnbs/hoteldetail"},
        {tag:"Hotel", name:"Travelodge Barcelona del Vallès", dist:"Des de 60€/nit", text:"Barberà del Vallès, just al costat de l'autopista AP-7.", group:"Terrassa", url:"https://www.travelodge.es/en/hotels-barcelona/valles"},
        {tag:"Hotel", name:"Hotel Exe Campus", dist:"Des de 60€/nit", text:"Cerdanyola del Vallès, al campus de la UAB.", group:"Terrassa", url:"https://www.hotelexecampus.com/"},
        {tag:"Camping", name:"Camping La Tatgera", dist:"Des de 20€/nit", text:"Talamanca, just a la vora del parc natural de Sant Llorenç del Munt.", group:"Terrassa", url:"https://campingtalamanca.com/"},
        {tag:"Camping", name:"Camping El Pasqualet", dist:"Des de 25€/persona/nit", text:"Caldes de Montbui, un càmping familiar amb piscina.", group:"Terrassa", url:"https://elpasqualet.com/en/"},
        {tag:"Hotel", name:"Hotel Cram", dist:"Des de 138€/nit", text:"Eixample, un hotel boutique centrat en el disseny.", group:"Barcelona", url:"https://hotelcram.com/en/"},
        {tag:"Hotel", name:"Yurbban Trafalgar Hotel", dist:"Des de 130€/nit", text:"El Born, un hotel boutique amb piscina a la terrassa i vistes panoràmiques.", group:"Barcelona", url:"https://trafalgar.yurbban.com/"},
        {tag:"Hotel", name:"Room Mate Emma", dist:"Des de 170€/nit", text:"Eixample, un hotel de disseny futurista a tocar del Passeig de Gràcia.", group:"Barcelona", url:"https://room-matehotels.com/en/emma/"},
        {tag:"Hotel", name:"Praktik Rambla", dist:"Des de 110€/nit", text:"Eixample, a un breu passeig del Passeig de Gràcia i la Plaça Catalunya.", group:"Barcelona", url:"https://www.hotelpraktikrambla.com/en/"},
        {tag:"Hotel", name:"Live & Dream", dist:"Des de 90€/nit", text:"A prop de l'estació de Sants, molt ben comunicat en tren i metro.", group:"Barcelona", url:"https://liveanddream.com/en/"},
        {tag:"Hotel", name:"Ibis Barcelona Meridiana", dist:"Des de 80€/nit", text:"Nou Barris, una cadena econòmica de confiança al costat del centre comercial Heron City.", group:"Barcelona", url:"https://all.accor.com/hotel/3310/index.en.shtml"},
        {tag:"Càmping", name:"Camping Estrella de Mar", dist:"Des de 27€/nit", text:"Castelldefels, en un pinar a només 400 m de la platja.", group:"Barcelona", url:"https://campingestrellademar.com/en/"},
        {tag:"Càmping", name:"HolaCamp Barcelona (Gavà Beach)", dist:"Des de 40€/nit", text:"Gavà, just al costat de la platja, a uns 30 minuts de la ciutat.", group:"Barcelona", url:"https://www.holacamp.net/en/destinations/camping-barcelona"}
      ]
    },
    location:{
      title:"Masia Egara",
      subtitle:"On ens direm el sí vull",
      text1:"Masia Egara és una masia catalana als afores de Terrassa, envoltada de camps i jardins. Els seus arcs de pedra, les bigues de fusta i els patis oberts fan que sembli un lloc que feia temps que esperava una celebració.",
      text2:"Ens encanten els colors i els jardins exuberants d'aquest lloc, i tenim moltes ganes de compartir amb vosaltres una autèntica masia catalana.",
      photo_note:"[Afegeix aquí fotos del lloc]",
      features:[
        {label:"Jardins", text:"Compta amb el Jardín Rojo, el Jardín Verde i el jardí centenari."},
        {label:"Espai de cerimònia", text:"Al Bosc: un petit amfiteatre natural."},
        {label:"Aparcament propi", text:"Disponible, us demanem que ho confirmeu amb nosaltres amb antelació."},
        {label:"Accessibilitat", text:"Aparcament més proper a la masia disponible per a qui ho necessiti."}
      ]
    },
    faq:{
      title:"Preguntes Freqüents",
      items:[
        {q:"Teniu llista de noces?", a:"El millor regal és que hi sigueu amb nosaltres. Si tot i així voleu col·laborar amb alguna cosa, una aportació per a la nostra lluna de mel significa per a nosaltres més que qualsevol regal físic; ho podeu fer per transferència: IBAN [pendent d'afegir]."},
        {q:"Quin és el codi de vestimenta?", a:"Elegant. Serem a l'aire lliure, sobre gespa i grava, així que recomanem calçat còmode abans que talons fins."},
        {q:"Podem venir amb cotxe?", a:"Sí — consulteu la pàgina 'Com Venir' per a l'adreça, les indicacions i els detalls de l'aparcament."},
        {q:"Hi ha transport des de Terrassa?", a:"Sí, estem organitzant autobusos entre Terrassa i el lloc, tant per a l'arribada com per a la tornada a final de la nit. Els horaris es compartiran més a prop de la data."},
        {q:"Amb qui puc contactar si tinc dubtes?", a:"Podeu contactar amb nosaltres quan vulgueu — [Nom]: [telèfon / email], [Nom]: [telèfon / email]."},
        {q:"Puc portar un acompanyant?", a:"Malauradament no, per limitacions d'espai. Si podeu venir acompanyats, aquesta persona haurà rebut la seva pròpia invitació."},
        {q:"Poden venir infants?", a:"Si la vostra invitació inclou els vostres fills, seran més que benvinguts! Si no és així, esperem que ho entengueu — amb un espai tan reduït, hem d'ajustar bé el nombre de convidats."}
      ]
    },
    footer:{ text:"Fet amb estimació. Ens veiem a Masia Egara." },
    rsvp:{
      title:"Qüestionari previ al casament Elena &amp; Vero",
      intro_note:"Un formulari per persona, si us plau, inclosos els infants. No podem incloure acompanyants addicionals, així que si véns amb algú, aquesta persona haurà rebut la seva pròpia invitació.",
      text:"Estarem encantats de comptar amb la teva presència en el nostre dia especial. Confirma la teva assistència aquí sota — necessitem el qüestionari emplenat de cada persona per tenir tota la informació correcta i poder organitzar bé el casament. Tot el que comparteixis serà tractat amb total privacitat, d'acord amb la Llei de Protecció de Dades, i s'utilitzarà únicament per a l'organització del nostre esdeveniment. Gràcies per la teva ajuda, i recorda que ho has de tornar abans de l'1 de desembre!",
      button:"Obrir el formulari"
    }
  },

  /* ================= FRANÇAIS ================= */
  fr: {
    meta:{ title:"Notre Mariage — Masia Egara" },
    brand:{ short:"V&amp;E" },
    nav:{ home:"Accueil", event:"L'Événement", getting:"Comment Venir", location:"Le Lieu", faq:"FAQ", rsvp:"RSVP" },
    home:{
      eyebrow:"Nous nous marions",
      names:"Veronica &amp; Elena",
      date:"24 Avril, 2027",
      venue:"Masia Egara · Terrassa, Catalogne",
      welcome_title:"Bienvenue",
      welcome_text:"Après tout ce temps, nous pouvons enfin le dire à voix haute : nous nous marions, et nous voulons vous avoir à nos côtés. Sous les vieilles arches de pierre de Masia Egara, entourés des personnes que nous aimons le plus, nous célébrerons un jour dont nous rêvons depuis longtemps. Utilisez le menu en haut de la page pour tout ce que vous devez savoir : le programme, comment venir, où loger, et les réponses aux questions que vous vous posez sûrement.",
      countdown_title:"Compte à rebours avant le grand jour",
      days:"Jours", hours:"Heures", minutes:"Minutes", seconds:"Secondes",
      explore:"Découvrir la célébration"
    },
    event:{
      title:"La Célébration",
      intro:"Voici comment la journée se déroulera. Chaque moment a sa place et sa propre lumière, des premiers vœux à la dernière danse.",
      items:[
        {time:"17h00", title:"Cérémonie", place:"Bosque, Masia Egara", text:"Nous nous retrouverons parmi les arbres pour la cérémonie, célébrée par Pau Torner. Merci d'essayer d'arriver au moins trente minutes à l'avance, vers 16h30. La cérémonie durera environ une heure."},
        {time:"18h30", title:"Cocktail", place:"Jardín Rojo, Masia Egara", text:"Boissons et cuisine catalane du Delta de l'Ebre, préparées par Xerta Catering, avec photos et vidéo en simultané."},
        {time:"20h30", title:"Dîner", place:"Era, Masia Egara", text:"Dîner assis à l'Era, juste devant la masia — le tout couronné d'un gâteau !"},
        {time:"23h30", title:"Fête", place:"Bodega, Masia Egara", text:"Place à la fête ! Direction la Bodega, en intérieur, pour danser."}
      ],
      note:"Ces horaires sont aussi précis que possible — nous vous préviendrons en cas de changement."
    },
    getting:{
      title:"Comment Venir",
      intro:"Masia Egara se trouve à la campagne près de Terrassa, à environ 25 km (soit environ 30 minutes) au nord de Barcelone. Voici comment nous rejoindre.",
      by_car_title:"En Voiture",
      by_car_text:"L'adresse est Carretera de Rellinars Km 2.4, 08225 Terrassa, Barcelone — <a href='https://maps.app.goo.gl/DeM8DD5ZF3uXXBXk6' target='_blank' rel='noopener'>ouvrir dans Google Maps</a>. Un grand parking se trouve à environ 10 minutes à pied du lieu, sur un chemin de gravier ; si vous avez des besoins d'accessibilité, un parking plus proche est disponible ; n'hésitez pas à nous contacter.",
      by_bus_title:"En Bus",
      by_bus_text:"Nous organisons des navettes depuis [Terrassa, point de rencontre] jusqu'à Masia Egara, avec un départ prévu vers [XXhXX] et un retour en fin de soirée. Plus de détails à l'approche de la date.",
      from_bcn_title:"Depuis Barcelone",
      from_bcn_text:"Nous vous recommandons d'atterrir à Barcelone. Vous pourrez ensuite choisir de loger à Barcelone même, à Terrassa, ou même à Sabadell, la ville la plus proche, si vous avez une voiture.<br><br>Pour aller de Barcelone à Terrassa, prenez les Ferrocarrils de la Generalitat (FGC), ligne S1, depuis Plaça Catalunya, Provença ou Muntaner, dans le centre de la ville, et descendez à Vallparadís Universitat ou Terrassa Nord, d'où partiront nos navettes. Un aller simple coûte 5,40€ ; pensez à acheter un billet Zona 3.<br><br>Un Uber depuis Barcelone coûte environ 50€ et reste aussi une option si vous préférez y aller directement.",
      map_label:"Notre emplacement sur la carte",
      stay_title:"Où Loger",
      stay_intro:"Quelques options près du lieu et à Barcelone, entre hôtels et campings, pour ceux qui souhaitent dormir sur place. Les prix indiqués sont des tarifs de départ approximatifs qui varient selon la saison, mieux vaut donc les vérifier à l'approche de la date.",
      book_label:"Réserver →",
      hotels:[
        {tag:"Hôtel", name:"Hotel Terrassa Confort", dist:"À partir de 65€/nuit", text:"Terrassa, près du centre commercial Parc Vallès. 3 étoiles, moderne et fonctionnel.", group:"Terrassa", url:"https://www.hotelterrassaconfort.com/en/"},
        {tag:"Hôtel", name:"Eurostars Don Cándido", dist:"À partir de 90€/nuit", text:"Terrassa. 4 étoiles, un bâtiment circulaire singulier avec restaurant et espaces événementiels.", group:"Terrassa", url:"https://www.eurostarshotels.com/eurostars-don-candido.html"},
        {tag:"Hôtel", name:"Boada Riera — The Rooms by Reini", dist:"À partir de 90€/nuit", text:"En plein centre de Terrassa, dans un bâtiment moderniste magnifiquement restauré.", group:"Terrassa", url:"https://boadariera.com/"},
        {tag:"Hôtel", name:"Aparthotel Attica 21 Vallès", dist:"À partir de 75€/nuit", text:"Sabadell. Chambres de type studio avec kitchenette, dans un quartier résidentiel calme.", group:"Terrassa", url:"https://www.attica21hotels.com/aparthotel-attica21-valles/"},
        {tag:"Hôtel", name:"Hotel Petit Luxe", dist:"À partir de 90€/nuit", text:"Centre de Terrassa, un hôtel boutique en plein quartier commerçant.", group:"Terrassa", url:"https://hotelpetitluxe.cat/en/"},
        {tag:"Hôtel", name:"Holiday Inn Express & Suites Barcelona–Sabadell", dist:"À partir de 100€/nuit", text:"Sabadell, à côté d'un centre commercial. Récent, moderne, avec petit-déjeuner inclus.", group:"Terrassa", url:"https://www.ihg.com/holidayinnexpress/hotels/us/en/sabadell/bcnbs/hoteldetail"},
        {tag:"Hôtel", name:"Travelodge Barcelona del Vallès", dist:"À partir de 60€/nuit", text:"Barberà del Vallès, juste à côté de l'autoroute AP-7.", group:"Terrassa", url:"https://www.travelodge.es/en/hotels-barcelona/valles"},
        {tag:"Hôtel", name:"Hotel Exe Campus", dist:"À partir de 60€/nuit", text:"Cerdanyola del Vallès, sur le campus universitaire de l'UAB.", group:"Terrassa", url:"https://www.hotelexecampus.com/"},
        {tag:"Camping", name:"Camping La Tatgera", dist:"À partir de 20€/nuit", text:"Talamanca, tout à côté du parc naturel de Sant Llorenç del Munt.", group:"Terrassa", url:"https://campingtalamanca.com/"},
        {tag:"Camping", name:"Camping El Pasqualet", dist:"À partir de 25€/personne/nuit", text:"Caldes de Montbui, un camping familial avec piscine.", group:"Terrassa", url:"https://elpasqualet.com/en/"},
        {tag:"Hôtel", name:"Hotel Cram", dist:"À partir de 138€/nuit", text:"Eixample, un hôtel boutique centré sur le design.", group:"Barcelona", url:"https://hotelcram.com/en/"},
        {tag:"Hôtel", name:"Yurbban Trafalgar Hotel", dist:"À partir de 130€/nuit", text:"El Born, un hôtel boutique avec piscine sur le toit et vue panoramique.", group:"Barcelona", url:"https://trafalgar.yurbban.com/"},
        {tag:"Hôtel", name:"Room Mate Emma", dist:"À partir de 170€/nuit", text:"Eixample, un hôtel design futuriste à deux pas du Passeig de Gràcia.", group:"Barcelona", url:"https://room-matehotels.com/en/emma/"},
        {tag:"Hôtel", name:"Praktik Rambla", dist:"À partir de 110€/nuit", text:"Eixample, à quelques minutes à pied du Passeig de Gràcia et de la Plaça Catalunya.", group:"Barcelona", url:"https://www.hotelpraktikrambla.com/en/"},
        {tag:"Hôtel", name:"Live & Dream", dist:"À partir de 90€/nuit", text:"Près de la gare de Sants, très bien desservi par le train et le métro.", group:"Barcelona", url:"https://liveanddream.com/en/"},
        {tag:"Hôtel", name:"Ibis Barcelona Meridiana", dist:"À partir de 80€/nuit", text:"Nou Barris, une chaîne économique fiable à côté du centre commercial Heron City.", group:"Barcelona", url:"https://all.accor.com/hotel/3310/index.en.shtml"},
        {tag:"Camping", name:"Camping Estrella de Mar", dist:"À partir de 27€/nuit", text:"Castelldefels, dans une pinède à seulement 400 m de la plage.", group:"Barcelona", url:"https://campingestrellademar.com/en/"},
        {tag:"Camping", name:"HolaCamp Barcelona (Gavà Beach)", dist:"À partir de 40€/nuit", text:"Gavà, juste à côté de la plage, à environ 30 minutes de la ville.", group:"Barcelona", url:"https://www.holacamp.net/en/destinations/camping-barcelona"}
      ]
    },
    location:{
      title:"Masia Egara",
      subtitle:"Là où nous nous dirons oui",
      text1:"Masia Egara est une ferme catalane traditionnelle aux portes de Terrassa, entourée de champs et de jardins. Ses arches de pierre, ses poutres en bois et ses cours ouvertes donnent l'impression d'un lieu qui n'attendait qu'une célébration.",
      text2:"Nous adorons les couleurs et les jardins luxuriants de ce lieu, et nous avons hâte de partager avec vous une véritable masia catalane.",
      photo_note:"[Ajoutez ici des photos du lieu]",
      features:[
        {label:"Jardins", text:"Le domaine compte le Jardín Rojo, le Jardín Verde et le jardin centenaire."},
        {label:"Espace cérémonie", text:"Dans le Bosque — un petit amphithéâtre naturel."},
        {label:"Parking sur place", text:"Disponible — merci de nous le confirmer à l'avance."},
        {label:"Accessibilité", text:"Un parking plus proche du lieu est disponible pour les personnes qui en ont besoin."}
      ]
    },
    faq:{
      title:"Questions Fréquentes",
      items:[
        {q:"Vous avez une liste de mariage ?", a:"Le plus beau cadeau, c'est votre présence à nos côtés. Si vous souhaitez tout de même contribuer à quelque chose, un geste pour notre lune de miel compte plus pour nous qu'un cadeau physique — vous pouvez le faire par virement : IBAN [à ajouter]."},
        {q:"Quelle est la tenue de rigueur ?", a:"Élégante. Nous serons en extérieur, sur herbe et gravier, nous conseillons donc des chaussures confortables plutôt que des talons fins."},
        {q:"On peut venir en voiture ?", a:"Oui — consultez la page « Comment Venir » pour l'adresse, l'itinéraire et les détails du stationnement."},
        {q:"Il y a un transport depuis Terrassa ?", a:"Oui, nous organisons des navettes entre Terrassa et le lieu, aussi bien à l'arrivée qu'au retour en fin de soirée. Les horaires seront communiqués à l'approche de la date."},
        {q:"Qui contacter en cas de question ?", a:"Vous pouvez nous écrire quand vous voulez — [Nom] : [téléphone / email], [Nom] : [téléphone / email]."},
        {q:"Je peux venir accompagné(e) ?", a:"Malheureusement non, en raison de contraintes de place. Si vous pouvez venir accompagné(e), cette personne aura reçu sa propre invitation."},
        {q:"Les enfants sont les bienvenus ?", a:"Si votre invitation inclut vos enfants, ils seront les bienvenus ! Si ce n'est pas le cas, nous espérons que vous comprendrez — le lieu étant assez restreint, nous devons limiter le nombre d'invités."}
      ]
    },
    footer:{ text:"À bientôt à Masia Egara !" },
    rsvp:{
      title:"Questionnaire avant le mariage Elena &amp; Vero",
      intro_note:"Un formulaire par personne, s'il vous plaît, enfants compris. Nous ne pouvons pas accueillir d'accompagnant supplémentaire — si vous venez avec quelqu'un, cette personne aura reçu sa propre invitation.",
      text:"Nous serions ravis de vous avoir à nos côtés pour notre jour spécial. Merci de confirmer votre présence dans le formulaire plus bas — nous avons besoin du questionnaire complété de chaque personne pour avoir toutes les bonnes informations et bien organiser le mariage. Tout ce que vous partagerez sera traité en toute confidentialité, conformément à la législation sur la protection des données, et utilisé uniquement pour l'organisation de notre événement. Merci pour votre aide, et pensez à nous le renvoyer avant le 1er décembre !",
      button:"Ouvrir le formulaire"
    }
  },

  /* ================= ITALIANO ================= */
  it: {
    meta:{ title:"Il Nostro Matrimonio — Masia Egara" },
    brand:{ short:"V&amp;E" },
    nav:{ home:"Home", event:"L'Evento", getting:"Come Arrivare", location:"Il Luogo", faq:"FAQ", rsvp:"RSVP" },
    home:{
      eyebrow:"Ci sposiamo",
      names:"Veronica &amp; Elena",
      date:"24 Aprile, 2027",
      venue:"Masia Egara · Terrassa, Catalogna",
      welcome_title:"Benvenuti",
      welcome_text:"Dopo tutto questo tempo, finalmente possiamo dirlo ad alta voce: ci sposiamo, e vogliamo avervi con noi. Sotto gli antichi archi in pietra di Masia Egara, circondati dalle persone che amiamo di più, festeggeremo un giorno che sogniamo da tempo. Usate il menu qui sopra per trovare tutto ciò che vi serve sapere: il programma, come arrivare, dove alloggiare e le risposte alle domande che sappiamo vi farete.",
      countdown_title:"Conto alla rovescia per il grande giorno",
      days:"Giorni", hours:"Ore", minutes:"Minuti", seconds:"Secondi",
      explore:"Scopri la celebrazione"
    },
    event:{
      title:"La Celebrazione",
      intro:"Ecco come si svolgerà la giornata. Ogni momento ha il suo posto e la sua luce, dai primi voti all'ultimo ballo.",
      items:[
        {time:"17:00", title:"Cerimonia", place:"Bosque, Masia Egara", text:"Ci ritroveremo tra gli alberi per la cerimonia, officiata da Pau Torner. Cercate di arrivare almeno mezz'ora prima, verso le 16:30. La cerimonia stessa durerà circa un'ora."},
        {time:"18:30", title:"Aperitivo", place:"Jardín Rojo, Masia Egara", text:"Drink e cucina catalana del Delta de l'Ebre, a cura di Xerta Catering, con foto e video in contemporanea."},
        {time:"20:30", title:"Cena", place:"Era, Masia Egara", text:"Cena seduta all'Era, proprio di fronte alla masia — il tutto coronato dalla torta!"},
        {time:"23:30", title:"Festa", place:"Bodega, Masia Egara", text:"È ora di festa! Si balla nella Bodega, al coperto."}
      ],
      note:"Questi orari sono il più precisi possibile — vi avviseremo in caso di cambiamenti."
    },
    getting:{
      title:"Come Arrivare",
      intro:"Masia Egara si trova in campagna vicino a Terrassa, a circa 25 km (circa 30 minuti) a nord di Barcellona. Ecco come raggiungerci.",
      by_car_title:"In Auto",
      by_car_text:"L'indirizzo è Carretera de Rellinars Km 2.4, 08225 Terrassa, Barcellona — <a href='https://maps.app.goo.gl/DeM8DD5ZF3uXXBXk6' target='_blank' rel='noopener'>apri in Google Maps</a>. C'è un ampio parcheggio a circa 10 minuti a piedi dalla location, lungo un sentiero di ghiaia; se avete esigenze di accessibilità, è disponibile un parcheggio più vicino — fatecelo sapere.",
      by_bus_title:"In Autobus",
      by_bus_text:"Stiamo organizzando dei bus navetta da [Terrassa, punto d'incontro] fino a Masia Egara, con partenza prevista intorno alle [XX:XX] e servizio di ritorno a fine serata. Ulteriori dettagli più vicino alla data.",
      from_bcn_title:"Da Barcellona",
      from_bcn_text:"Vi consigliamo di atterrare a Barcellona. Da lì potete scegliere di alloggiare a Barcellona stessa, a Terrassa, o persino a Sabadell, la città più vicina, se avete un'auto.<br><br>Per andare da Barcellona a Terrassa, prendete i Ferrocarrils de la Generalitat (FGC), linea S1, da Plaça Catalunya, Provença o Muntaner, nel centro città, e scendete a Vallparadís Universitat o Terrassa Nord, da dove partiranno i nostri bus navetta. Un biglietto di sola andata costa 5,40€; ricordate di comprare un biglietto Zona 3.<br><br>Un Uber da Barcellona costa circa 50€ ed è un'altra opzione se preferite arrivare direttamente.",
      map_label:"Trovaci sulla mappa",
      stay_title:"Dove Alloggiare",
      stay_intro:"Alcune opzioni vicino alla location e a Barcellona, tra hotel e campeggi, per chi desidera pernottare. I prezzi indicati sono tariffe di partenza approssimative e variano in base alla stagione, quindi conviene verificarli più vicino alla data.",
      book_label:"Prenota →",
      hotels:[
        {tag:"Hotel", name:"Hotel Terrassa Confort", dist:"Da 65€/notte", text:"Terrassa, vicino al centro commerciale Parc Vallès. 3 stelle, moderno e funzionale.", group:"Terrassa", url:"https://www.hotelterrassaconfort.com/en/"},
        {tag:"Hotel", name:"Eurostars Don Cándido", dist:"Da 90€/notte", text:"Terrassa. 4 stelle, un edificio circolare particolare con ristorante e spazi per eventi.", group:"Terrassa", url:"https://www.eurostarshotels.com/eurostars-don-candido.html"},
        {tag:"Hotel", name:"Boada Riera — The Rooms by Reini", dist:"Da 90€/notte", text:"Proprio nel centro di Terrassa, all'interno di un edificio modernista restaurato.", group:"Terrassa", url:"https://boadariera.com/"},
        {tag:"Hotel", name:"Aparthotel Attica 21 Vallès", dist:"Da 75€/notte", text:"Sabadell. Camere in stile studio con angolo cottura, in una zona residenziale tranquilla.", group:"Terrassa", url:"https://www.attica21hotels.com/aparthotel-attica21-valles/"},
        {tag:"Hotel", name:"Hotel Petit Luxe", dist:"Da 90€/notte", text:"Centro di Terrassa, un hotel boutique nel cuore della zona commerciale.", group:"Terrassa", url:"https://hotelpetitluxe.cat/en/"},
        {tag:"Hotel", name:"Holiday Inn Express & Suites Barcelona–Sabadell", dist:"Da 100€/notte", text:"Sabadell, accanto a un centro commerciale. Nuovo, moderno, con colazione inclusa.", group:"Terrassa", url:"https://www.ihg.com/holidayinnexpress/hotels/us/en/sabadell/bcnbs/hoteldetail"},
        {tag:"Hotel", name:"Travelodge Barcelona del Vallès", dist:"Da 60€/notte", text:"Barberà del Vallès, proprio accanto all'autostrada AP-7.", group:"Terrassa", url:"https://www.travelodge.es/en/hotels-barcelona/valles"},
        {tag:"Hotel", name:"Hotel Exe Campus", dist:"Da 60€/notte", text:"Cerdanyola del Vallès, nel campus universitario dell'UAB.", group:"Terrassa", url:"https://www.hotelexecampus.com/"},
        {tag:"Campeggio", name:"Camping La Tatgera", dist:"Da 20€/notte", text:"Talamanca, proprio ai margini del parco naturale di Sant Llorenç del Munt.", group:"Terrassa", url:"https://campingtalamanca.com/"},
        {tag:"Campeggio", name:"Camping El Pasqualet", dist:"Da 25€/persona/notte", text:"Caldes de Montbui, un campeggio a conduzione familiare con piscina.", group:"Terrassa", url:"https://elpasqualet.com/en/"},
        {tag:"Hotel", name:"Hotel Cram", dist:"Da 138€/notte", text:"Eixample, un hotel boutique incentrato sul design.", group:"Barcelona", url:"https://hotelcram.com/en/"},
        {tag:"Hotel", name:"Yurbban Trafalgar Hotel", dist:"Da 130€/notte", text:"El Born, un hotel boutique con piscina sul tetto e vista panoramica.", group:"Barcelona", url:"https://trafalgar.yurbban.com/"},
        {tag:"Hotel", name:"Room Mate Emma", dist:"Da 170€/notte", text:"Eixample, un hotel dal design futuristico a due passi dal Passeig de Gràcia.", group:"Barcelona", url:"https://room-matehotels.com/en/emma/"},
        {tag:"Hotel", name:"Praktik Rambla", dist:"Da 110€/notte", text:"Eixample, a pochi minuti a piedi dal Passeig de Gràcia e dalla Plaça Catalunya.", group:"Barcelona", url:"https://www.hotelpraktikrambla.com/en/"},
        {tag:"Hotel", name:"Live & Dream", dist:"Da 90€/notte", text:"Vicino alla stazione di Sants, ben collegato con treno e metropolitana.", group:"Barcelona", url:"https://liveanddream.com/en/"},
        {tag:"Hotel", name:"Ibis Barcelona Meridiana", dist:"Da 80€/notte", text:"Nou Barris, una catena economica affidabile accanto al centro commerciale Heron City.", group:"Barcelona", url:"https://all.accor.com/hotel/3310/index.en.shtml"},
        {tag:"Campeggio", name:"Camping Estrella de Mar", dist:"Da 27€/notte", text:"Castelldefels, in una pineta a soli 400 m dalla spiaggia.", group:"Barcelona", url:"https://campingestrellademar.com/en/"},
        {tag:"Campeggio", name:"HolaCamp Barcelona (Gavà Beach)", dist:"Da 40€/notte", text:"Gavà, proprio accanto alla spiaggia, a circa 30 minuti dalla città.", group:"Barcelona", url:"https://www.holacamp.net/en/destinations/camping-barcelona"}
      ]
    },
    location:{
      title:"Masia Egara",
      subtitle:"Dove ci diremo sì",
      text1:"Masia Egara è un'antica cascina catalana appena fuori Terrassa, circondata da campi e giardini. I suoi archi in pietra, le travi in legno e i cortili aperti la fanno sembrare un luogo che aspettava da tempo una celebrazione.",
      text2:"Amiamo i colori e i giardini lussureggianti di questo luogo, e non vediamo l'ora di condividere con voi una vera masia catalana.",
      photo_note:"[Aggiungi qui le foto della location]",
      features:[
        {label:"Giardini", text:"La location comprende il Jardín Rojo, il Jardín Verde e il giardino centenario."},
        {label:"Spazio cerimonia", text:"Nel Bosque — un piccolo anfiteatro naturale."},
        {label:"Parcheggio in loco", text:"Disponibile — vi chiediamo di confermarlo con noi in anticipo."},
        {label:"Accessibilità", text:"È disponibile un parcheggio più vicino alla location per chi ne ha bisogno."}
      ]
    },
    faq:{
      title:"Domande Frequenti",
      items:[
        {q:"Avete una lista nozze?", a:"Il regalo più bello è avervi con noi. Se comunque volete contribuire con qualcosa, un pensiero per il nostro viaggio di nozze per noi vale più di un regalo fisico — potete farlo tramite bonifico: IBAN [da aggiungere]."},
        {q:"Qual è il dress code?", a:"Elegante. Saremo all'aperto, su erba e ghiaia, quindi consigliamo scarpe comode piuttosto che tacchi sottili."},
        {q:"Possiamo arrivare in auto?", a:"Sì — consulta la pagina 'Come Arrivare' per l'indirizzo, le indicazioni e i dettagli sul parcheggio."},
        {q:"C'è un trasporto da Terrassa?", a:"Sì, stiamo organizzando bus navetta tra Terrassa e la location, sia per l'arrivo che per il ritorno a fine serata. Gli orari saranno condivisi più vicino alla data."},
        {q:"Chi posso contattare per domande?", a:"Scriveteci quando volete — [Nome]: [telefono / email], [Nome]: [telefono / email]."},
        {q:"Posso portare un accompagnatore?", a:"Purtroppo no, per limiti di spazio. Se potete venire accompagnati, quella persona avrà ricevuto un proprio invito."},
        {q:"I bambini sono benvenuti?", a:"Se il vostro invito include i vostri figli, saranno più che benvenuti! In caso contrario, speriamo comprendiate — con uno spazio così raccolto dobbiamo contenere il numero di ospiti."}
      ]
    },
    footer:{ text:"Fatto con amore. Ci vediamo a Masia Egara." },
    rsvp:{
      title:"Questionario prima del matrimonio Elena &amp; Vero",
      intro_note:"Un modulo per persona, per favore, bambini inclusi. Non possiamo accogliere accompagnatori aggiuntivi: se venite con qualcuno, quella persona avrà ricevuto un proprio invito.",
      text:"Saremo felicissimi di avervi con noi nel nostro giorno speciale. Confermate la vostra presenza qui sotto — abbiamo bisogno del questionario compilato di ogni persona per avere tutte le informazioni corrette e organizzare bene il matrimonio. Tutto ciò che condividerete sarà trattato con la massima riservatezza, in conformità con la normativa sulla protezione dei dati, e utilizzato solo per l'organizzazione del nostro evento. Grazie per il vostro aiuto, e ricordate di rimandarcelo entro il 1° dicembre!",
      button:"Apri il modulo"
    }
  }

};
