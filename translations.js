const translations = {

  /* ================= ENGLISH ================= */
  en: {
    meta:{ title:"Our Wedding — Masia Egara" },
    brand:{ short:"V&amp;E" },
    nav:{ home:"Home", event:"The Event", getting:"Getting There", location:"The Venue", faq:"FAQ", rsvp:"RSVP" },
    home:{
      eyebrow:"What??? We're getting married?????",
      names:"Veronica &amp; Elena",
      date:"24 April, 2027",
      venue:"Masia Egara · Terrassa, Catalonia",
      welcome_title:"Welcome",
      welcome_text:"Who would have thought we would do this? No, not locking Elena up in a bunker to simulate the Moon, even though that was your first guess. We are, however, on cloud nine. Who would have thought we would get married? Maybe you did, and so did we, after deciding on a crazy afternoon in December. Above all, we decided that we wanted to proudly celebrate our love with you, the people reading this message. After all, to raise two lesbians, it takes a village. And what better place to gather this village than Spain, one of the very first countries in the world to allow such a celebration to even exist? So, for the occasion, we are bringing you near Barcelona, Elena's hometown. More specifically, to a wonderful place called Masia Egara. Many things drew us to this venue, and we will reveal them step by step through this website, right up until the wedding day.",
      countdown_title:"Counting down to the big day",
      days:"Days", hours:"Hours", minutes:"Minutes", seconds:"Seconds",
      explore:"Explore the celebration"
    },
    event:{
      title:"The Celebration",
      intro:"What will our day look like? Thanks to the magical place that is Masia Egara, we will be carried through different spaces, each one with its own atmosphere. Together, we will watch the last lights of the day hide behind the trees and dance under the light of the furthest stars.",
      items:[
        {time:"17:00", title:"Ceremony", place:"Bosque, Masia Egara", text:"For the ceremony, we will gather in a tiny forest. This moment, the most intimate of the day, will last about an hour. If you can, please try to arrive at least half an hour early, around 16:30. See you among the trees!"},
        {time:"18:30", title:"Cocktail Hour", place:"Jardín Rojo, Masia Egara", text:"From the forest to a peaceful garden, we will have drinks and Catalan cuisine from the Delta de l'Ebre. We hope to share with you a little bit of the region we will be in!"},
        {time:"20:30", title:"Dinner", place:"Era, Masia Egara", text:"As night falls, we will move towards the walls of the masia. For dinner, we will sit in the Era, right in front of the masia's entrance!"},
        {time:"23:30", title:"Party", place:"Bodega, Masia Egara", text:"For the final part of the wedding, we will finally walk through the gates of the masia. Time to dance the night away, indoors, in the Bodega!"}
      ],
      note:"These timings are as accurate as we can make them; we'll let you know if anything changes."
    },
    getting:{
      title:"How to Get There",
      intro:"Masia Egara sits in the countryside near Terrassa, about 25km (roughly 30 minutes) north of Barcelona. Here's how to reach us.",
      by_car_title:"By Car",
      by_car_text:"The address is Carretera de Rellinars Km 2.4, 08225 Terrassa, Barcelona, Spain — <a href='https://maps.app.goo.gl/DeM8DD5ZF3uXXBXk6' target='_blank' rel='noopener'>open in Google Maps</a>. There's a large car park about 10 minutes on foot from the venue, along a gravel path; if you have accessibility needs, there's a closer parking area available — just let us know.",
      by_bus_title:"By Bus",
      by_bus_text:"We're still planning shuttle buses between Barcelona/Terrassa and Masia Egara, for both the arrival and the return at the end of the night. Check back on this page later: we'll add the meeting point and times here as soon as they're set.",
      from_bcn_title:"From Barcelona",
      from_bcn_text:"We recommend landing in Barcelona. From there you can choose to stay in Barcelona itself, in Terrassa, or even in Sabadell, the second nearest city, if you have a car.<br><br>To get from Barcelona to Terrassa, take the Ferrocarrils de la Generalitat (FGC) line S1 from Plaça Catalunya, Provença, or Muntaner in the city centre, and get off at Vallparadís Universitat or Terrassa Nord, where our shuttle buses will depart from. A single trip costs 5.40€; make sure to buy a Zona 3 ticket.<br><br>An Uber from Barcelona costs around 50€ and is also an option if you would rather travel there directly.",
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
      subtitle:"A Catalan farmhouse with eight centuries of stories",
      q1:"What is a masia?",
      text1:"A masia is a <strong>traditional Catalan farmhouse</strong>, where the family who owned the land lived and worked. Nowadays, many masias have been turned into hotels, restaurants, and spaces for celebrations.",
      q2:"What's the story of Masia Egara?",
      text2:"Masia Egara takes its name from <strong>Egara, the old Roman name of Terrassa</strong>. The house, originally known as Ca n'Amat, already appears in documents from the <strong>early 13th century</strong>, when it was under the rule of the monastery of Montserrat. The building you'll see today dates from the <strong>early 16th century</strong>, and it has always belonged to the same family. During the Spanish Civil War, that family <strong>hid republicans within its walls</strong>.",
      text2b:"Today it stands at the heart of <strong>300 hectares</strong> of fields and forest, surrounded by <strong>4 hectares of century-old gardens</strong> designed by the school of the architect <strong>Rubió i Tudurí</strong>, among the best-preserved private gardens in Catalonia. Inside, its rooms hold furniture and art from every period, from 16th-century tapestries to modern paintings.",
      q3:"Why did we fall in love with it?",
      text3:"It's close to where Elena comes from (right next to where she studied, actually), it carries a <strong>story of bravery</strong>, and, just like its history, it's full of <strong>secret corners</strong>. Walking around, we felt a kind of <strong>bohemian magic</strong>: the sense that something fantastic could happen at any moment."
    },
    faq:{
      title:"Frequently Asked Questions",
      items:[
        {q:"Do you have a gift registry?", a:"The best gift is having you there with us. If you'd still like to contribute to something, a gift towards our honeymoon means more to us than a physical one — you're welcome to send it by bank transfer: IBAN: <strong>FR80 2043 3026 26N2 6661 8614 910</strong> · BIC: <strong>NTSBFRM1XXX</strong>.<br><br>And since we're terrible at keeping secrets, here are three photos of where we're heading. Can you guess where it is? No prizes, just bragging rights.", photos:3},
        {q:"What's the dress code?", a:"Come as you are! Any variation of elegant, from classy to campy, is more than welcome. Wear any colour (OK, besides white, there will already be two of us in it), texture, or fabric: as long as you love it, we'll love it too."},
        {q:"Can we arrive by car?", a:"Yes: see the 'Getting There' page for the address, directions, and parking details!"},
        {q:"Is there transport from Barcelona or Terrassa?", a:"Yes, we're working on shuttle buses between Barcelona/Terrassa and Masia Egara, for both the arrival and the return at the end of the night. We're still planning them, so check back on the website later for the meeting point and times."},
        {q:"Who can I contact with questions?", a:"Reach out any time! <br>Elena López-Contreras: <a href='https://wa.me/33786571310' target='_blank' rel='noopener'>+33 7 86 57 13 10</a> (WhatsApp) or <a href='mailto:elenalcontreras@gmail.com'>elenalcontreras@gmail.com</a><br>Veronica Orlandi: <a href='tel:+33772398742'>+33 7 72 39 87 42</a> or <a href='mailto:veronica.orlandi97@gmail.com'>veronica.orlandi97@gmail.com</a>"},
        {q:"Can I bring a plus one?", a:"We would love to welcome everyone, but space is limited and we've dreamed of a small, intimate celebration surrounded by the people closest to us. So this time, the invitation is just for you, and we're so happy you'll be part of our day!"},
        {q:"Are children welcome?", a:"Yes, and if the sugar levels are high enough, we know we will see them on the dance floor. Please let us know in advance if your kids will be coming!"}
      ]
    },
    footer:{ text:"Made with love. See you at Masia Egara." },
    rsvp:{
      title:"Elena &amp; Vero's Wedding Questionnaire",
      text:"As you may have guessed, if you received this invitation, it's because <strong>you are part of our village</strong>: the people we share our lives with. We couldn't imagine celebrating without the very people who make it worth celebrating. So, coming from near or far, far away, <strong>we'd be delighted to have you with us</strong> on our special day.<br><br>The form at the link below will help us <strong>organize the whole day</strong> and <strong>know if you can attend</strong>. We need everyone's completed questionnaire back to make sure we have all the right information. Everything you share will be treated with <strong>full privacy</strong>, in line with data protection law, and used only to organize our event.<br><br>If you have children, <strong>complete a form for each of them</strong> as well. Our guest list is quite small, so every guest has received <strong>their own personal invitation</strong>: if someone dear to you is joining us, they'll have one with their name on it too!<br><br>Thank you for your help, and please send it back <strong>before December 1st</strong>!",
      button:"Open the RSVP form"
    }
  },

  /* ================= ESPAÑOL ================= */
  es: {
    meta:{ title:"Nuestra Boda — Masia Egara" },
    brand:{ short:"V&amp;E" },
    nav:{ home:"Inicio", event:"El Evento", getting:"Cómo Llegar", location:"El Lugar", faq:"Preguntas", rsvp:"RSVP" },
    home:{
      eyebrow:"¿¿¿Qué??? ¿¿¿Nos casamos?????",
      names:"Veronica &amp; Elena",
      date:"24 de abril de 2027",
      venue:"Masia Egara · Terrassa, Cataluña",
      welcome_title:"Bienvenidos",
      welcome_text:"¿Quién habría pensado que haríamos esto? No, no hablamos de encerrar a Elena en un búnker para simular la Luna, aunque seguro que es lo primero que se os ha pasado por la cabeza. Eso sí, estamos en una nube. ¿Quién habría pensado que nos casaríamos? Quizás vosotros sí, y, al final, nosotras también, después de decidirlo una tarde loca de noviembre. Por encima de todo, decidimos que queríamos celebrar esta boda con vosotros, las personas que estáis leyendo este mensaje. ¿Y qué mejor lugar para reunir a todos nuestros seres queridos que España, uno de los primeros países del mundo en permitir que una celebración así pudiera siquiera existir (el tercero, después de los Países Bajos y Bélgica)? Así que, para la ocasión, os llevamos cerca de Barcelona, la tierra de Elena. Más concretamente, a un lugar maravilloso llamado Masia Egara. Muchas cosas nos atrajeron de este sitio, y os las iremos desvelando poco a poco a través de esta web, hasta el día de la boda.",
      countdown_title:"Cuenta atrás para el gran día",
      days:"Días", hours:"Horas", minutes:"Minutos", seconds:"Segundos",
      explore:"Descubrir la celebración"
    },
    event:{
      title:"La Celebración",
      intro:"¿Cómo será nuestro día? Gracias a ese lugar mágico que es Masia Egara, iremos pasando por distintos rincones, cada uno con su propio ambiente. Juntos veremos cómo las últimas luces del día se esconden tras los árboles y bailaremos bajo la luz de las estrellas más lejanas.",
      items:[
        {time:"17:00", title:"Ceremonia", place:"Bosque, Masia Egara", text:"Para la ceremonia nos reuniremos en un pequeño bosque. Este momento, el más íntimo del día, durará alrededor de una hora. Si podéis, intentad llegar al menos media hora antes, sobre las 16:30. ¡Nos vemos entre los árboles!"},
        {time:"18:30", title:"Aperitivo", place:"Jardín Rojo, Masia Egara", text:"Del bosque pasaremos a un jardín tranquilo, donde tomaremos algo y probaremos cocina catalana del Delta de l'Ebre. ¡Queremos compartir con vosotros un poquito de la tierra en la que estaremos!"},
        {time:"20:30", title:"Cena", place:"Era, Masia Egara", text:"Cuando caiga la noche, nos acercaremos a los muros de la masía. Para cenar nos sentaremos en la Era, ¡justo delante de la entrada de la masía!"},
        {time:"23:30", title:"Fiesta", place:"Bodega, Masia Egara", text:"Para la última parte de la boda, por fin cruzaremos las puertas de la masía. ¡Hora de bailar hasta que el cuerpo aguante, en el interior, en la Bodega!"}
      ],
      note:"Estos horarios son lo más precisos posible; os avisaremos si hay algún cambio."
    },
    getting:{
      title:"Cómo Llegar",
      intro:"Masia Egara está en plena naturaleza cerca de Terrassa, a unos 25 km (unos 30 minutos) al norte de Barcelona. Así podéis llegar hasta nosotras.",
      by_car_title:"En Coche",
      by_car_text:"La dirección es Carretera de Rellinars Km 2.4, 08225 Terrassa, Barcelona — <a href='https://maps.app.goo.gl/DeM8DD5ZF3uXXBXk6' target='_blank' rel='noopener'>abrir en Google Maps</a>. Hay un aparcamiento grande a unos 10 minutos a pie de la masía, por un camino de gravilla; si tenéis necesidades de accesibilidad, hay un aparcamiento más cercano disponible — avisadnos.",
      by_bus_title:"En Autobús",
      by_bus_text:"Todavía estamos organizando autobuses entre Barcelona/Terrassa y Masia Egara, tanto para la llegada como para la vuelta al final de la noche. Volved a mirar esta página más adelante: añadiremos aquí el punto de encuentro y los horarios en cuanto estén cerrados.",
      from_bcn_title:"Desde Barcelona",
      from_bcn_text:"Os recomendamos aterrizar en Barcelona. Desde allí podéis elegir alojaros en la propia Barcelona, en Terrassa o incluso en Sabadell, la segunda ciudad más cercana, si disponéis de coche.<br><br>Para ir de Barcelona a Terrassa, coged los Ferrocarrils de la Generalitat (FGC), línea S1, desde Plaça Catalunya, Provença o Muntaner en el centro de la ciudad, y bajaos en Vallparadís Universitat o Terrassa Nord, de donde saldrán nuestros autobuses. Un trayecto cuesta 5,40€; recordad comprar un billete de Zona 3.<br><br>Un Uber desde Barcelona cuesta unos 50€ y también es una opción si preferís ir directamente.",
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
      subtitle:"Una masía catalana con ocho siglos de historias",
      q1:"¿Qué es una masía?",
      text1:"Una masía es una <strong>casa de campo tradicional catalana</strong>, donde vivía y trabajaba la familia propietaria de las tierras. Hoy en día, muchas masías se han convertido en hoteles, restaurantes y espacios para celebraciones.",
      q2:"¿Cuál es la historia de Masia Egara?",
      text2:"Masia Egara toma su nombre de <strong>Egara, el antiguo nombre romano de Terrassa</strong>. La casa, conocida originalmente como Ca n'Amat, aparece ya en documentos de <strong>principios del siglo XIII</strong>, cuando dependía del monasterio de Montserrat. El edificio que veréis hoy es de <strong>principios del siglo XVI</strong>, y siempre ha pertenecido a la misma familia. Durante la Guerra Civil, esa familia <strong>escondió a republicanos entre sus muros</strong>.",
      text2b:"Hoy se alza en el centro de <strong>300 hectáreas</strong> de campos y bosque, rodeada de <strong>4 hectáreas de jardines centenarios</strong> diseñados por la escuela del arquitecto <strong>Rubió i Tudurí</strong>, de los jardines privados mejor conservados de Cataluña. En su interior, las salas guardan muebles y obras de todas las épocas, desde tapices del siglo XVI hasta arte moderno.",
      q3:"¿Por qué nos enamoró?",
      text3:"Está cerca de donde es Elena (de hecho, justo al lado de donde estudió), guarda una <strong>historia de valentía</strong> y, como su propia historia, está llena de <strong>rincones secretos</strong>. Paseando por ella sentimos una especie de <strong>magia bohemia</strong>: la sensación de que en cualquier momento podía pasar algo fantástico."
    },
    faq:{
      title:"Preguntas Frecuentes",
      items:[
        {q:"¿Tenéis lista de bodas?", a:"El mejor regalo es teneros allí con nosotras. Si aun así queréis colaborar con algo, una aportación para nuestra luna de miel significa para nosotras más que cualquier regalo físico — podéis hacerla por transferencia: IBAN: <strong>FR80 2043 3026 26N2 6661 8614 910</strong> · BIC: <strong>NTSBFRM1XXX</strong>.<br><br>Y como se nos da fatal guardar secretos, aquí tenéis tres fotos de nuestro destino. ¿Adivináis adónde vamos? No hay premio, solo el honor de acertar.", photos:3},
        {q:"¿Cuál es el código de vestimenta?", a:"¡Venid como sois! Cualquier variante de elegante, de lo clásico a lo camp, será más que bienvenida. Usad cualquier color (vale, menos el blanco, que ya iremos dos así), textura o tejido: si a vosotros os encanta, a nosotras también."},
        {q:"¿Podemos ir en coche?", a:"Sí: consultad la página 'Cómo Llegar' para la dirección, las indicaciones y los detalles del aparcamiento."},
        {q:"¿Hay transporte desde Barcelona o Terrassa?", a:"Sí, estamos preparando autobuses entre Barcelona/Terrassa y Masia Egara, tanto para la llegada como para la vuelta al final de la noche. Todavía los estamos organizando, así que volved a mirar la web más adelante para ver el punto de encuentro y los horarios."},
        {q:"¿Con quién puedo contactar si tengo dudas?", a:"¡Escribidnos cuando queráis! <br>Elena López-Contreras: <a href='https://wa.me/33786571310' target='_blank' rel='noopener'>+33 7 86 57 13 10</a> (WhatsApp) o <a href='mailto:elenalcontreras@gmail.com'>elenalcontreras@gmail.com</a><br>Veronica Orlandi: <a href='tel:+33772398742'>+33 7 72 39 87 42</a> o <a href='mailto:veronica.orlandi97@gmail.com'>veronica.orlandi97@gmail.com</a>"},
        {q:"¿Puedo traer a un +1?", a:"Nos encantaría poder recibir a todo el mundo, pero el espacio es limitado y hemos soñado con una celebración pequeña e íntima, rodeadas de las personas más cercanas. Así que esta vez la invitación es solo para ti, ¡y estamos muy felices de que formes parte de nuestro día!"},
        {q:"¿Pueden venir niños?", a:"Sí, y si el nivel de azúcar es lo bastante alto, sabemos que los veremos en la pista de baile. ¡Avisadnos con antelación si vienen vuestros peques!"}
      ]
    },
    footer:{ text:"Hecho con cariño. Nos vemos en Masia Egara." },
    rsvp:{
      title:"Cuestionario de boda de Elena &amp; Vero",
      text:"Como ya habrás adivinado, si has recibido esta invitación es porque <strong>formas parte de nuestro pueblo</strong>: las personas con las que compartimos nuestra vida. No podríamos imaginar una celebración sin quienes hacen que valga la pena celebrar. Por eso, vengas de cerca o de muy, muy lejos, <strong>nos encantará tenerte con nosotras</strong> en nuestro día especial.<br><br>El formulario del enlace de abajo nos ayudará a <strong>organizar todo el día</strong> y a <strong>saber si puedes venir</strong>. Necesitamos recibir el cuestionario completado de cada persona para tener toda la información correcta. Todo lo que compartas será tratado con <strong>total privacidad</strong>, de acuerdo con la normativa de protección de datos, y se usará únicamente para organizar nuestro evento.<br><br>Si tienes hijos, <strong>rellena también un formulario para cada uno de ellos</strong>. Nuestra lista de invitados es bastante pequeña, así que cada invitado ha recibido <strong>su propia invitación personal</strong>: si viene alguien querido para ti, ¡también tendrá una con su nombre!<br><br>¡Gracias por tu ayuda, y recuerda enviarlo <strong>antes del 1 de diciembre</strong>!",
      button:"Abrir el formulario"
    }
  },

  /* ================= CATALÀ ================= */
  ca: {
    meta:{ title:"El Nostre Casament — Masia Egara" },
    brand:{ short:"V&amp;E" },
    nav:{ home:"Inici", event:"L'Esdeveniment", getting:"Com Venir", location:"El Lloc", faq:"Preguntes", rsvp:"RSVP" },
    home:{
      eyebrow:"Què??? Ens casem?????",
      names:"Veronica &amp; Elena",
      date:"24 d'abril de 2027",
      venue:"Masia Egara · Terrassa, Catalunya",
      welcome_title:"Benvinguts",
      welcome_text:"Qui hauria pensat que faríem això? No, no parlem de tancar l'Elena dins d'un búnquer per simular la Lluna, tot i que segur que és el primer que us ha passat pel cap. Això sí, estem en un núvol. Qui hauria pensat que ens casaríem? Potser vosaltres sí, i, al final, nosaltres també, després de decidir-ho una tarda boja de novembre. Per sobre de tot, vam decidir que volíem celebrar aquest casament amb vosaltres, les persones que esteu llegint aquest missatge. I quin lloc millor per reunir tots els nostres éssers estimats que Espanya, un dels primers països del món a permetre que una celebració així ni tan sols pogués existir (el tercer, després dels Països Baixos i Bèlgica)? Així doncs, per a l'ocasió, us portem a prop de Barcelona, la terra de l'Elena. Més concretament, a un lloc meravellós anomenat Masia Egara. Moltes coses ens van atreure d'aquest indret, i us les anirem desvetllant a poc a poc a través d'aquesta web, fins al dia del casament.",      countdown_title:"Compte enrere per al gran dia",
      days:"Dies", hours:"Hores", minutes:"Minuts", seconds:"Segons",
      explore:"Descobrir la celebració"
    },
    event:{
      title:"La Celebració",
      intro:"Com serà el nostre dia? Gràcies a aquest lloc màgic que és la Masia Egara, anirem passant per diferents racons, cadascun amb el seu propi ambient. Junts veurem com les últimes llums del dia s'amaguen darrere els arbres i ballarem sota la llum de les estrelles més llunyanes.",
      items:[
        {time:"17:00", title:"Cerimònia", place:"Bosque, Masia Egara", text:"Per a la cerimònia ens reunirem en un petit bosc. Aquest moment, el més íntim del dia, durarà aproximadament una hora. Si podeu, intenteu arribar almenys mitja hora abans, cap a les 16:30. Ens veiem entre els arbres!"},
        {time:"18:30", title:"Aperitiu", place:"Jardín Rojo, Masia Egara", text:"Del bosc passarem a un jardí tranquil, on prendrem alguna cosa i tastarem cuina catalana del Delta de l'Ebre. Volem compartir amb vosaltres una mica de la terra on serem!"},
        {time:"20:30", title:"Sopar", place:"Era, Masia Egara", text:"Quan caigui la nit, ens acostarem als murs de la masia. Per sopar seurem a l'Era, just davant de l'entrada de la masia!"},
        {time:"23:30", title:"Festa", place:"Bodega, Masia Egara", text:"Per a l'última part del casament, per fi creuarem les portes de la masia. Hora de ballar fins que el cos aguanti, a l'interior, a la Bodega!"}
      ],
      note:"Aquests horaris són tan precisos com podem; us avisarem si hi ha algun canvi."
    },
    getting:{
      title:"Com Venir",
      intro:"La Masia Egara es troba enmig de la natura a prop de Terrassa, a uns 25 km (uns 30 minuts) al nord de Barcelona. Així podeu arribar fins a nosaltres.",
      by_car_title:"Amb Cotxe",
      by_car_text:"L'adreça és Carretera de Rellinars Km 2.4, 08225 Terrassa, Barcelona — <a href='https://maps.app.goo.gl/DeM8DD5ZF3uXXBXk6' target='_blank' rel='noopener'>obrir a Google Maps</a>. Hi ha un aparcament gran a uns 10 minuts a peu de la masia, per un camí de grava; si teniu necessitats d'accessibilitat, hi ha un aparcament més proper disponible; no dubteu a contactar amb nosaltres.",
      by_bus_title:"Amb Autobús",
      by_bus_text:"Encara estem organitzant autobusos entre Barcelona/Terrassa i la Masia Egara, tant per a l'arribada com per a la tornada a final de la nit. Torneu a mirar aquesta pàgina més endavant: hi afegirem el punt de trobada i els horaris tan aviat com estiguin tancats.",
      from_bcn_title:"Des de Barcelona",
      from_bcn_text:"Us recomanem aterrar a Barcelona. Des d'allà podeu triar allotjament a la mateixa Barcelona, a Terrassa o, fins i tot, a Sabadell, la segona ciutat més propera, si teniu cotxe.<br><br>Per anar de Barcelona a Terrassa, agafeu els Ferrocarrils de la Generalitat (FGC), línia S1, des de Plaça Catalunya, Provença o Muntaner al centre de la ciutat, i baixeu a Vallparadís Universitat o Terrassa Nord, d'on sortiran els nostres autobusos. Un trajecte costa 5,40€; recordeu comprar un bitllet de Zona 3.<br><br>Un Uber des de Barcelona costa uns 50€ i és una altra opció per arribar directament al lloc.",
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
        {tag:"Càmping", name:"Camping La Tatgera", dist:"Des de 20€/nit", text:"Talamanca, just a la vora del parc natural de Sant Llorenç del Munt.", group:"Terrassa", url:"https://campingtalamanca.com/"},
        {tag:"Càmping", name:"Camping El Pasqualet", dist:"Des de 25€/persona/nit", text:"Caldes de Montbui, un càmping familiar amb piscina.", group:"Terrassa", url:"https://elpasqualet.com/en/"},
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
      subtitle:"Una masia catalana amb vuit segles d'històries",
      q1:"Què és una masia?",
      text1:"Una masia és una <strong>casa de pagès tradicional catalana</strong>, on vivia i treballava la família propietària de les terres. Avui dia, moltes masies s'han convertit en hotels, restaurants i espais per a celebracions.",
      q2:"Quina és la història de la Masia Egara?",
      text2:"La Masia Egara pren el nom d'<strong>Ègara, l'antic nom romà de Terrassa</strong>. La casa, coneguda originalment com a Ca n'Amat, ja apareix en documents de <strong>principis del segle XIII</strong>, quan depenia del monestir de Montserrat. L'edifici que veureu avui és de <strong>principis del segle XVI</strong>, i sempre ha pertangut a la mateixa família. Durant la Guerra Civil, aquella família <strong>va amagar republicans entre les seves parets</strong>.",
      text2b:"Avui s'alça al centre de <strong>300 hectàrees</strong> de camps i bosc, envoltada de <strong>4 hectàrees de jardins centenaris</strong> dissenyats per l'escola de l'arquitecte <strong>Rubió i Tudurí</strong>, dels jardins privats més ben conservats de Catalunya. A dins, les sales guarden mobles i obres de totes les èpoques, des de tapissos del segle XVI fins a art modern.",
      q3:"Per què ens en vam enamorar?",
      text3:"És a prop d'on és l'Elena (de fet, just al costat d'on va estudiar), guarda una <strong>història de valentia</strong> i, com la seva pròpia història, és plena de <strong>racons secrets</strong>. Passejant-hi vam sentir una mena de <strong>màgia bohèmia</strong>: la sensació que en qualsevol moment hi podia passar alguna cosa fantàstica."
    },
    faq:{
      title:"Preguntes Freqüents",
      items:[
        {q:"Teniu llista de noces?", a:"El millor regal és que hi sigueu amb nosaltres. Si tot i així voleu col·laborar amb alguna cosa, una aportació per a la nostra lluna de mel significa per a nosaltres més que qualsevol regal físic; ho podeu fer per transferència: IBAN: <strong>FR80 2043 3026 26N2 6661 8614 910</strong> · BIC: <strong>NTSBFRM1XXX</strong>.<br><br>I com que som un desastre guardant secrets, aquí teniu tres fotos del nostre destí. Endevineu on anem? No hi ha premi, només l'honor d'encertar-ho.", photos:3},
        {q:"Quin és el codi de vestimenta?", a:"Veniu com sou! Qualsevol variant d'elegant, del clàssic al camp, serà més que benvinguda. Feu servir qualsevol color (d'acord, menys el blanc, que ja n'anirem dues així), textura o teixit: si a vosaltres us encanta, a nosaltres també."},
        {q:"Podem venir amb cotxe?", a:"Sí: consulteu la pàgina 'Com Venir' per a l'adreça, les indicacions i els detalls de l'aparcament."},
        {q:"Hi ha transport des de Barcelona o Terrassa?", a:"Sí, estem preparant autobusos entre Barcelona/Terrassa i la Masia Egara, tant per a l'arribada com per a la tornada a final de la nit. Encara els estem organitzant, així que torneu a mirar la web més endavant per veure el punt de trobada i els horaris."},
        {q:"Amb qui puc contactar si tinc dubtes?", a:"Escriviu-nos quan vulgueu! <br>Elena López-Contreras: <a href='https://wa.me/33786571310' target='_blank' rel='noopener'>+33 7 86 57 13 10</a> (WhatsApp) o <a href='mailto:elenalcontreras@gmail.com'>elenalcontreras@gmail.com</a><br>Veronica Orlandi: <a href='tel:+33772398742'>+33 7 72 39 87 42</a> o <a href='mailto:veronica.orlandi97@gmail.com'>veronica.orlandi97@gmail.com</a>"},
        {q:"Puc portar un acompanyant?", a:"Ens encantaria poder rebre tothom, però l'espai és limitat i hem somiat amb una celebració petita i íntima, envoltades de les persones més properes. Així que aquesta vegada la invitació és només per a tu, i estem molt contentes que formis part del nostre dia!"},
        {q:"Poden venir infants?", a:"Sí, i si el nivell de sucre és prou alt, sabem que els veurem a la pista de ball. Aviseu-nos amb antelació si venen els vostres petits!"}
      ]
    },
    footer:{ text:"Fet amb amor. Ens veiem a la Masia Egara." },
    rsvp:{
      title:"Qüestionari del casament de l'Elena &amp; la Vero",
      text:"Com ja deus haver endevinat, si has rebut aquesta invitació és perquè <strong>formes part del nostre poble</strong>: les persones amb qui compartim la nostra vida. No podríem imaginar una celebració sense les persones que fan que valgui la pena celebrar. Per això, vinguis de prop o de molt, molt lluny, <strong>ens encantarà tenir-te amb nosaltres</strong> en el nostre dia especial.<br><br>El formulari de l'enllaç de sota ens ajudarà a <strong>organitzar tot el dia</strong> i a <strong>saber si pots venir</strong>. Necessitem rebre el qüestionari emplenat de cada persona per tenir tota la informació correcta. Tot el que comparteixis serà tractat amb <strong>total privacitat</strong>, d'acord amb la normativa de protecció de dades, i s'utilitzarà únicament per organitzar el nostre esdeveniment.<br><br>Si tens fills, <strong>emplena també un formulari per a cadascun</strong>. La nostra llista de convidats és força petita, així que cada convidat ha rebut <strong>la seva pròpia invitació personal</strong>: si ve algú estimat per a tu, també en tindrà una amb el seu nom!<br><br>Gràcies per la teva ajuda, i recorda enviar-lo <strong>abans de l'1 de desembre</strong>!",
      button:"Obrir el formulari"
    }
  },

  /* ================= FRANÇAIS ================= */
  fr: {
    meta:{ title:"Notre Mariage — Masia Egara" },
    brand:{ short:"V&amp;E" },
    nav:{ home:"Accueil", event:"L'Événement", getting:"Comment Venir", location:"Le Lieu", faq:"FAQ", rsvp:"RSVP" },
    home:{
      eyebrow:"Quoi ??? On se marie ?????",
      names:"Veronica &amp; Elena",
      date:"24 avril 2027",
      venue:"Masia Egara · Terrassa, Catalogne",
      welcome_title:"Bienvenue",
      welcome_text:"Qui aurait cru qu’un jour, on finirait vraiment par le faire ? Non, on ne parle pas d’enfermer à nouveau Elena dans un bunker pour simuler la Lune, même si c’est certainement la première chose à laquelle vous avez pensé. Cependant, l’espace fait encore partie de cette histoire, car nous sommes au septième ciel ! Dad jokes à part, qui aurait imaginé que nous nous marierions ? Peut-être vous, et nous aussi, après en avoir décidé au cours d’une folle journée de début novembre 2025. Surtout, nous avons décidé que nous voulions célébrer fièrement notre amour avec vous, les personnes qui êtes en train de lire ce message. Après tout, pour faire grandir deux lesbiennes aussi chouettes que nous, il a fallu tout un village. Et quel meilleur endroit que l’Espagne pour réunir notre village ? N’oublions pas que l’Espagne est l’un des tout premiers pays au monde à avoir permis qu’une célébration comme celle-ci puisse tout simplement exister ! Alors, pour l’occasion, nous vous emmenons près de Barcelone, la ville d’Elena. Plus précisément, nous allons vous faire découvrir un endroit magique à nos yeux : la Masia Egara. Nombreuses sont les raisons qui nous ont poussées jusqu’à cet endroit. Nous vous les dévoilerons pas à pas à travers ce site, jusqu’au jour du mariage !",
      countdown_title:"Compte à rebours avant le grand jour",
      days:"Jours", hours:"Heures", minutes:"Minutes", seconds:"Secondes",
      explore:"Découvrir la célébration"
    },
    event:{
      title:"La Célébration",
      intro:"Comment se déroulera la journée ? Grâce aux différents espaces de la Masia Egara, nous passerons d’un lieu à l’autre, chacun avec sa propre ambiance. Ensemble, nous regarderons les dernières lumières du jour disparaître derrière les arbres, puis nous danserons sous la lumière des étoiles les plus lointaines.",
      items:[
        {time:"17h00", title:"Cérémonie", place:"Bosque, Masia Egara", text:"Pour la cérémonie, nous nous retrouverons dans un petit bois. Ce sera le moment le plus intime de la journée et il durera environ une heure. Si vous le pouvez, essayez d’arriver au moins une demi-heure à l’avance, vers 16h30. Rendez-vous entre les arbres !"},
        {time:"18h30", title:"Apéritif", place:"Jardín Rojo, Masia Egara", text:"Après le bois, nous passerons dans un pittoresque jardin, où nous boirons un verre et découvrirons la cuisine catalane du Delta de l’Ebre. À travers la nourriture, nous essaierons de vous faire découvrir un petit morceau de la région où nous serons."},
        {time:"20h30", title:"Dîner", place:"Era, Masia Egara", text:"À la tombée du jour, nous nous rapprocherons des murs de la masia. Pour le dîner, nous nous installerons sur l’Era, juste devant l’entrée de la maison !"},
        {time:"23h30", title:"Fête", place:"Bodega, Masia Egara", text:"Pour la dernière partie du mariage, nous franchirons enfin les portes de la masia. Il est temps de danser toute la nuit, à l’abri, dans la Bodega !"}
      ],
      note:"Pour l’instant, voici les horaires prévus : nous vous préviendrons en cas de changement !"
    },
    getting:{
      title:"Comment venir ?",
      intro:"La Masia Egara se trouve à la campagne, près de la ville de Terrassa, située à environ 25 km (environ 30 minutes) au nord de Barcelone. Voici comment nous rejoindre :",
      by_car_title:"En voiture",
      by_car_text:"L’adresse est Carretera de Rellinars Km 2.4, 08225 Terrassa, Barcelone — <a href='https://maps.app.goo.gl/DeM8DD5ZF3uXXBXk6' target='_blank' rel='noopener'>ouvrir dans Google Maps</a>.<br><br>La Masia dispose d’un grand parking, situé à environ 10 minutes à pied, en empruntant un chemin en gravier. Si vous avez des besoins particuliers en matière d’accessibilité, faites-le-nous savoir : un parking plus proche est disponible, avec un nombre de places limité !",
      by_bus_title:"En bus",
      by_bus_text:"Nous organisons des navettes entre Barcelone/Terrassa et la Masia Egara, aussi bien pour l’aller que pour le retour en fin de soirée. Revenez consulter cette page un peu plus tard : nous y ajouterons le lieu de rendez-vous et les horaires dès qu’ils seront définis.",
      from_bcn_title:"Depuis Barcelone",
      from_bcn_text:"Si vous prenez l’avion, nous vous conseillons d’atterrir à Barcelone. De là, vous pouvez choisir de séjourner à Barcelone même, à Terrassa ou même à Sabadell, l’autre ville la plus proche, si vous avez une voiture.<br><br>Pour aller de Barcelone à Terrassa, prenez les Ferrocarrils de la Generalitat (FGC), ligne S1, depuis Plaça Catalunya, Provença ou Muntaner, dans le centre-ville, et descendez à Vallparadís Universitat ou Terrassa Nord, d’où partiront nos navettes. Un billet simple coûte 5,40 € ; pensez à prendre un billet pour la Zone 3.<br><br>Si vous préférez vous rendre directement sur place sans utiliser les transports en commun, vous pouvez prendre un Uber depuis Barcelone (environ 50 € en journée).",
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
      subtitle:"Une masia catalane chargée de huit siècles d’histoires",
      q1:"Qu'est-ce qu'une masia ?",
      text1:"La masia est un type de <strong>maison rurale traditionnelle catalane</strong>, dont les origines remontent au Moyen Âge et qui a été construite et utilisée jusqu’au XXe siècle. Dans la masia vivait et travaillait la famille qui cultivait et gérait les terres environnantes. Aujourd’hui, de nombreuses masias ont été transformées en hôtels, restaurants et lieux de réception.",
      q2:"Quelle est l'histoire de la Masia Egara ?",
      text2:"La Masia Egara tire son nom d’<strong>« Egara », l’ancien nom romain de Terrassa</strong>. La maison, connue à l’origine sous le nom de Ca n’Amat, apparaît déjà dans des documents du <strong>début du XIIIe siècle</strong>, à une époque où elle était sous le contrôle du monastère de Montserrat. Le bâtiment que vous découvrirez le jour du mariage date quant à lui du <strong>début du XVIe siècle</strong> et, depuis sa construction, a toujours appartenu à la même famille.<br><br>Pendant la guerre civile espagnole, la maison a ajouté un nouveau chapitre à son histoire : en pleine effervescence politique, la famille de la Masia Egara a décidé de <strong>cacher entre ses murs des résistants républicains</strong>.",
      text2b:"Aujourd’hui, la masia se trouve au cœur de <strong>300 hectares</strong> de champs et de bois, entourée de <strong>4 hectares de jardins centenaires</strong> conçus par l’école de l’architecte <strong>Rubió i Tudurí</strong>. Ces espaces sont considérés comme faisant partie des jardins privés les mieux conservés de Catalogne. À l’intérieur, ses salles abritent des meubles et des œuvres d’art de toutes les époques, des tapisseries du XVIe siècle à l’art moderne.",
      q3:"Pourquoi en sommes-nous tombées amoureuses ?",
      text3:"Tout d’abord, la Masia Egara se trouve précisément dans la région d’origine d’Elena. En effet, notre mariée préférée (la soussignée, Veronica, s’est permis quelques libertés en écrivant la traduction française) n’est pas seulement née et a grandi à Barcelone : elle a aussi étudié à Terrassa.<br><br>De plus, la masia, tout comme son histoire, regorge de <strong>recoins à découvrir</strong>. Les histoires de cette maison, faites de <strong>choix, de curiosité et de courage</strong>, font écho aux chemins qui nous ont menées jusqu’à cette journée si spéciale.<br><br>Enfin, le premier jour, en nous promenant dans les différents espaces de la masia, nous avons ressenti une sorte de <strong>magie</strong> : la sensation qu’à tout moment, quelque chose de fantastique pouvait arriver."
    },
    faq:{
      title:"Questions fréquentes",
      items:[
        {q:"Avez-vous une liste de mariage ?", a:"Non, parce que ce que nous voulons c’est surtout de vous emmener en Catalogne pour faire la fête avec nous ! Si vous souhaitez malgré tout nous offrir quelque chose, une petite contribution à notre voyage de noces nous ferait bien plus plaisir que n’importe quel cadeau matériel ! Si vous souhaitez participer, vous pouvez le faire par virement : IBAN: <strong>FR80 2043 3026 26N2 6661 8614 910</strong> · BIC: <strong>NTSBFRM1XXX</strong>.<br><br>Et comme nous sommes incapables de garder un secret, voici trois photos de notre destination. Saurez-vous deviner où nous allons ? La réponse se cache (pas si bien que ça) dans les images.", photos:3},
        {q:"Quel est le dress code ?", a:"Toutes les variantes de l’élégance, du classique au camp, sont les bienvenues. Portez la couleur (bon, peut-être à l’exception du blanc, puisque nous serons déjà deux), la longueur ou le tissu que vous voulez : si ça vous plaît, ça nous plaira aussi ! Come as you are."},
        {q:"Peut-on venir en voiture ?", a:"Oui ! Consultez la page « Comment venir ? » pour l’adresse, les indications et toutes les informations concernant le parking !"},
        {q:"Y aura-t-il des transports depuis Barcelone ou Terrassa ?", a:"Oui, nous préparons des navettes entre Barcelone/Terrassa et la Masia Egara, aussi bien pour l’aller que pour le retour en fin de soirée. Nous sommes encore en train de les organiser, alors revenez consulter le site un peu plus tard pour connaître le lieu de rendez-vous et les horaires."},
        {q:"Qui puis-je contacter si j’ai des questions ?", a:"Écrivez-nous quand vous voulez ! <br>Elena López-Contreras: <a href='https://wa.me/33786571310' target='_blank' rel='noopener'>+33 7 86 57 13 10</a> (WhatsApp) ou <a href='mailto:elenalcontreras@gmail.com'>elenalcontreras@gmail.com</a><br>Veronica Orlandi: <a href='tel:+33772398742'>+33 7 72 39 87 42</a> ou <a href='mailto:veronica.orlandi97@gmail.com'>veronica.orlandi97@gmail.com</a>"},
        {q:"Puis-je venir accompagné·e ?", a:"Nous aimerions pouvoir accueillir tout le monde, mais l’espace est limité et nous avons choisi de privilégier une célébration plus petite et plus intime ! Cette fois-ci, l’invitation est donc uniquement pour vous, et nous sommes très heureuses que vous fassiez partie de notre journée !"},
        {q:"Les enfants sont-ils les bienvenus ?", a:"Oui ! Et si leur niveau de sucre est suffisamment élevé, nous savons déjà que nous les retrouverons sur la piste de danse. Faites-nous simplement savoir à l’avance s’ils viendront faire la fête avec nous !"}
      ]
    },
    footer:{ text:"Fait avec amour. À bientôt à la Masia Egara !" },
    rsvp:{
      title:"Questionnaire du mariage d’Elena &amp; Vero",
      text:"Comme vous l’aurez compris, si vous avez reçu cette invitation, c’est parce que <strong>vous faites partie de notre « village »</strong> : les personnes avec qui nous avons grandi et avec qui nous partageons encore aujourd’hui nos aventures. Vous avoir à nos côtés ce jour-là, c’est partager avec vous un moment qui est aussi le fruit de tout ce que nous avons vécu ensemble ! Nous ne pourrions pas imaginer cette journée sans vous. Alors, que vous veniez de près ou de fort, fort lointain, <strong>nous serons ravies de vous avoir là avec nous</strong> !<br><br>Pour nous aider à <strong>organiser au mieux cette journée</strong>, nous vous demandons de remplir le formulaire que vous trouverez dans le lien ci-dessous. Le questionnaire nous permettra de <strong>savoir si vous pourrez être des nôtres</strong> et de recueillir toutes les informations dont nous avons besoin. Nous vous demandons de le remplir individuellement, une fois par personne invitée, afin de nous assurer d’avoir toutes les bonnes informations. Tout ce que vous partagerez sera traité avec la <strong>plus grande confidentialité</strong>, conformément à la réglementation sur la protection des données, et utilisé uniquement pour l’organisation de notre événement.<br><br>Si vous avez des enfants, <strong>merci de remplir également un formulaire pour chacun d’entre eux</strong>. Notre liste est assez petite, et pour cette raison nous avons adressé <strong>une invitation personnelle</strong> à chacune et chacun : si quelqu’un qui vous est cher sera avec nous, cette personne aura elle aussi reçu une invitation à son nom.<br><br>Merci pour votre aide, et n’oubliez pas de remplir le questionnaire <strong>avant le 1er décembre</strong> !",
      button:"Ouvrir le formulaire"
    }
  },

  /* ================= ITALIANO ================= */
  it: {
    meta:{ title:"Il Nostro Matrimonio — Masia Egara" },
    brand:{ short:"V&amp;E" },
    nav:{ home:"Home", event:"L'Evento", getting:"Come Arrivare", location:"Il Luogo", faq:"FAQ", rsvp:"RSVP" },
    home:{
      eyebrow:"Cosa??? Ci sposiamo?????",
      names:"Veronica &amp; Elena",
      date:"24 aprile 2027",
      venue:"Masia Egara · Terrassa, Catalogna",
      welcome_title:"Benvenuti",
      welcome_text:"Chi l'avrebbe mai detto, che alla fine l'avremmo fatto? No, non parliamo di rinchiudere di nuovo Elena in un bunker per simulare la Luna, anche se è stata sicuramente la prima cosa a cui avete pensato. In effetti, però, lo spazio c'entra anche questa volta, ed a questo giro è perché siamo al settimo cielo! Dad jokes a parte, chi si sarebbe mai aspettato che ci saremmo sposate? Forse voi sì, e anche noi, dopo averlo deciso in un matto pomeriggio di inizio novembre 2025. Soprattutto, abbiamo deciso che volevamo celebrare con orgoglio il nostro amore insieme a voi, le persone che stanno leggendo questo messaggio. Dopotutto, per crescere due ragazze simpatiche come noi, è servito un villaggio. E quale posto migliore della Spagna, per riunire il nostro villaggio? In effetti, non scordiamoci che la Spagna è uno dei primissimi paesi al mondo a permettere che una celebrazione del genere potesse anche solo esistere! Così, per l'occasione, vi portiamo vicino a Barcellona, la città di Elena. Più precisamente, vi faremo scoprire un posto che per noi è magico: la Masia Egara. Molteplici sono le ragioni che ci hanno spinte in questo luogo. Ve le sveleremo passo dopo passo attraverso questo sito, fino al giorno del matrimonio!",
      countdown_title:"Conto alla rovescia per il grande giorno",
      days:"Giorni", hours:"Ore", minutes:"Minuti", seconds:"Secondi",
      explore:"Scopri la celebrazione"
    },
    event:{
      title:"La Celebrazione",
      intro:"Come si svolgerà la giornata? Grazie agli spazi offerti dalla Masia Egara, ci sposteremo tra ambienti diversi, ognuno con la sua atmosfera. Insieme, guarderemo le ultime luci del giorno nascondersi dietro gli alberi e balleremo sotto la luce delle stelle più lontane.",
      items:[
        {time:"17:00", title:"Cerimonia", place:"Bosque, Masia Egara", text:"Per la cerimonia ci ritroveremo in un piccolo bosco. Questo momento, il più intimo e riservato della giornata, durerà circa un'ora. Se potete, cercate di arrivare almeno mezz'ora prima, verso le 16:30. Ci vediamo tra gli alberi!"},
        {time:"18:30", title:"Aperitivo", place:"Jardín Rojo, Masia Egara", text:"Dal bosco passeremo ad un pittoresco giardino, dove berremo qualcosa e assaggeremo la cucina catalana del Delta de l'Ebre. Grazie al cibo, cercheremo di condividere con voi un pezzetto della terra in cui saremo!"},
        {time:"20:30", title:"Cena", place:"Era, Masia Egara", text:"Al calar della sera, ci avvicineremo alle mura della masia. Per la cena ci siederemo sull'Era, proprio davanti all'ingresso della casa!"},
        {time:"23:30", title:"Festa", place:"Bodega, Masia Egara", text:"Per l'ultima parte del matrimonio, varcheremo finalmente le porte della masia. È ora di ballare tutta la notte, al coperto, nella Bodega!"}
      ],
      note:"Questi orari sono il più precisi possibile; vi avviseremo in caso di cambiamenti."
    },
    getting:{
      title:"Come Arrivare",
      intro:"La Masia Egara si trova in campagna, vicino alla città di Terrassa, situata circa 25 km (circa 30 minuti) a nord di Barcellona. Ecco come raggiungerci:",
      by_car_title:"In Auto",
      by_car_text:"L'indirizzo è Carretera de Rellinars Km 2.4, 08225 Terrassa, Barcellona — <a href='https://maps.app.goo.gl/DeM8DD5ZF3uXXBXk6' target='_blank' rel='noopener'>apri in Google Maps</a>. La location possiede un ampio parcheggio, a circa 10 minuti a piedi dalla masia attraverso un sentiero di ghiaia. Se avete esigenze di accessibilità, fatecelo sapere: è disponibile un parcheggio più vicino con un numero di posti limitato!",
      by_bus_title:"In Autobus",
      by_bus_text:"Stiamo organizzando dei bus-navetta tra Barcellona/Terrassa e la Masia Egara, sia per l'arrivo che per il ritorno a fine serata. Ricontrollate questa pagina più avanti: aggiungeremo qui il punto d'incontro e gli orari appena saranno definiti.",
      from_bcn_title:"Da Barcellona",
      from_bcn_text:"Se prendete l'aereo, vi consigliamo di atterrare a Barcellona. Da lì, potete scegliere di alloggiare a Barcellona stessa, a Terrassa, o persino a Sabadell, l'altra città più vicina, se avete un'auto.<br><br>Per andare da Barcellona a Terrassa, prendete i Ferrocarrils de la Generalitat (FGC), linea S1, da Plaça Catalunya, Provença o Muntaner, nel centro città, e scendete a Vallparadís Universitat o Terrassa Nord, da dove partiranno i nostri bus navetta. Un biglietto di sola andata costa 5,40€; ricordate di comprare un biglietto Zona 3.<br><br>Se preferite arrivare alla location direttamente senza mezzi pubblici, è possibile prendere un Uber da Barcellona (costo diurno di circa 50€).",
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
      subtitle:"Una masia catalana con otto secoli di storie",
      q1:"Cos'è una masia?",
      text1:"La masia è un tipo di <strong>casa colonica tradizionale catalana</strong>, la cui origine risale al Medioevo e che è stata costruita e utilizzata fino al XX secolo. Nella masia viveva e lavorava la famiglia che coltivava e gestiva i terreni circostanti. Oggi, molte masie sono state trasformate in hotel, ristoranti e spazi per eventi.",
      q2:"Qual è la storia della Masia Egara?",
      text2:"La Masia Egara prende il suo nome da <strong>“Egara”, l’antico nome romano di Terrassa</strong>. La casa, conosciuta in origine come Ca n’Amat, compare già in documenti dell’<strong>inizio del XIII secolo</strong>, epoca in cui era sotto il controllo del monastero di Montserrat. L’edificio che vedrete il giorno del matrimonio risale invece all’<strong>inizio del XVI secolo</strong> e, fin dalla sua costruzione, è sempre appartenuto alla stessa famiglia. Durante la Guerra civile spagnola, la casa aggiunse un nuovo tassello alla sua storia: nel pieno del fervore politico, la famiglia della Masia Egara decise di <strong>nascondere tra le sue mura alcuni resistenti repubblicani</strong>.",
      text2b:"Oggi, la masia sorge al centro di <strong>300 ettari</strong> di campi e bosco, circondata da <strong>4 ettari di giardini centenari</strong> progettati dalla scuola dell'architetto <strong>Rubió i Tudurí</strong>. Questi spazi sono considerati tra i giardini privati meglio conservati della Catalogna. All'interno, le sue sale custodiscono mobili e opere d'arte di ogni epoca, dagli arazzi del Cinquecento all'arte moderna.",
      q3:"Perché ce ne siamo innamorate?",
      text3:"Innanzitutto, la Masia Egara si trova proprio nelle terre d’origine di Elena. In effetti, la nostra sposa preferita (la sottoscritta, Veronica, si è presa qualche libertà scrivendo la traduzione in italiano) non è solo nata e cresciuta a Barcellona, ma ha proprio studiato a Terrassa. Inoltre, la masia, proprio come la sua storia, è piena di <strong>angoli da scoprire</strong>. Le vicende della casa, intrise di <strong>scelte, curiosità e coraggio</strong>, riflettono i sentieri che ci hanno portate fino a questo giorno così speciale. Infine, il primo giorno, passeggiando tra gli spazi della masia, abbiamo percepito una sorta di <strong>magia</strong>: la sensazione che, in qualsiasi momento, potesse succedere qualcosa di fantastico."
    },
    faq:{
      title:"Domande Frequenti",
      items:[
        {q:"Avete una lista nozze?", a:"No, perché la cosa che vogliamo di più è portarvi in Catalogna a festeggiare con noi! Se vi andasse comunque di contribuire con un regalo, un pensiero per il nostro viaggio di nozze per noi vale più di qualsiasi regalo fisico! Se volete contribuire, potete farlo tramite bonifico: IBAN: <strong>FR80 2043 3026 26N2 6661 8614 910</strong> · BIC: <strong>NTSBFRM1XXX</strong>.<br><br>E siccome siamo un disastro a mantenere i segreti, ecco tre foto della nostra destinazione. Riuscite a indovinare dove andiamo? La soluzione si nasconde (neanche troppo bene) nelle immagini.", photos:3},
        {q:"Qual è il dress code?", a:"Qualsiasi variante di elegante, dal classico al camp, è più che benvenuta. Indossate qualsiasi colore (ok, forse tranne il bianco, che saremo già in due), lunghezza o tessuto: se piace a voi, piacerà anche a noi! come as you are"},
        {q:"Possiamo arrivare in auto?", a:"Sì: consultate la pagina 'Come Arrivare' per l'indirizzo, le indicazioni e i dettagli sul parcheggio!"},
        {q:"C'è un trasporto da Barcellona o Terrassa?", a:"Sì, stiamo preparando dei bus navetta tra Barcellona/Terrassa e la Masia Egara, sia per l'arrivo che per il ritorno a fine serata. Li stiamo ancora organizzando, quindi ricontrollate il sito più avanti per il punto d'incontro e gli orari."},
        {q:"Chi posso contattare per domande?", a:"Scriveteci quando volete! <br>Elena López-Contreras: <a href='https://wa.me/33786571310' target='_blank' rel='noopener'>+33 7 86 57 13 10</a> (WhatsApp) oppure <a href='mailto:elenalcontreras@gmail.com'>elenalcontreras@gmail.com</a><br>Veronica Orlandi: <a href='tel:+33772398742'>+33 7 72 39 87 42</a> oppure <a href='mailto:veronica.orlandi97@gmail.com'>veronica.orlandi97@gmail.com</a>"},
        {q:"Posso portare un +1?", a:"Ci piacerebbe accogliere tutti, ma lo spazio è limitato e abbiamo optato per una celebrazione più piccola e intima! Quindi, questa volta, l'invito è solo per te, e siamo felicissime che tu faccia parte della nostra giornata!"},
        {q:"Bimbe e bimbi sono benvenuti?", a:"Sì, e se il livello di zuccheri sarà abbastanza alto, sappiamo che li vedremo in pista. Fateci sapere in anticipo se verranno a festeggiare!"}
      ]
    },
    footer:{ text:"Fatto con amore. Ci vediamo alla Masia Egara." },
    rsvp:{
      title:"Questionario del matrimonio di Elena &amp; Vero",
      text:"Come avrete intuito, se avete ricevuto questo invito è perché <strong>fate parte del nostro “villaggio”</strong>: le persone con cui siamo cresciute e con cui tuttora condividiamo le nostre avventure. Avervi accanto in questo giorno significa condividere con voi un momento che è anche il risultato di tutto ciò che abbiamo vissuto insieme! Non potremmo immaginare questa giornata senza di voi. Perciò, che veniate da vicino o da molto, molto lontano, <strong>saremo felicissime di avervi lì con noi</strong>! <br><br>Per aiutarci a <strong>organizzare al meglio la giornata</strong>, vi chiediamo di compilare il modulo che trovate nel link qui sotto. Il questionario ci permetterà di <strong>sapere se potrete esserci</strong> e di raccogliere tutte le informazioni di cui abbiamo bisogno. Vi chiediamo di compilarlo individualmente, una volta per ogni persona invitata, così da assicurarci di avere tutti i dati corretti. Tutto ciò che condividerete sarà trattato con la <strong>massima riservatezza</strong>, in conformità con la normativa sulla protezione dei dati, e utilizzato solo per l’organizzazione del nostro evento.<br><br>Se avete pargoli o pargole, <strong>compilate un modulo anche per ciascuno di loro</strong>. La nostra lista di invitati è piuttosto piccola e abbiamo <strong>invitato personalmente ogni persona</strong>: se c’è qualcuno a voi caro che sarà con noi, avrà ricevuto anche lui o lei il proprio invito!<br><br>Grazie per il vostro aiuto, e ricordatevi di compilare il questionario <strong>entro il 1° dicembre</strong>!",
      button:"Apri il modulo"
    }
  }

};
