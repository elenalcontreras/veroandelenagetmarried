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
      stay_intro:"A few options near the venue, from hotels to campsites, for anyone who'd like to stay over.",
      hotels:[
        {tag:"Hotel", name:"[Hotel Name 1]", dist:"[X km from the venue]", text:"[Short note — style, price range, link.]", group:"Terrassa"},
        {tag:"Hotel", name:"[Hotel Name 2]", dist:"[X km from the venue]", text:"[Short note — style, price range, link.]", group:"Terrassa"},
        {tag:"Camping", name:"[Camping Name]", dist:"[X km from the venue]", text:"[For anyone who fancies sleeping under the stars.]", group:"Terrassa"},
        {tag:"Hotel", name:"[Hotel Name 3]", dist:"[Barcelona, area to add]", text:"[Short note — style, price range, link.]", group:"Barcelona"},
        {tag:"Hotel", name:"[Hotel Name 4]", dist:"[Barcelona, area to add]", text:"[Short note — style, price range, link.]", group:"Barcelona"},
        {tag:"Camping", name:"[Camping Name 2]", dist:"[Barcelona, area to add]", text:"[For anyone who fancies camping near the city.]", group:"Barcelona"}
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
      stay_intro:"Algunas opciones cerca del lugar, desde hoteles hasta campings, para quien quiera quedarse a dormir.",
      hotels:[
        {tag:"Hotel", name:"[Nombre del Hotel 1]", dist:"[X km del lugar]", text:"[Breve nota — estilo, rango de precio, enlace.]", group:"Terrassa"},
        {tag:"Hotel", name:"[Nombre del Hotel 2]", dist:"[X km del lugar]", text:"[Breve nota — estilo, rango de precio, enlace.]", group:"Terrassa"},
        {tag:"Camping", name:"[Nombre del Camping]", dist:"[X km del lugar]", text:"[Para quien le apetezca dormir bajo las estrellas.]", group:"Terrassa"},
        {tag:"Hotel", name:"[Nombre del Hotel 3]", dist:"[Barcelona, zona por añadir]", text:"[Breve nota — estilo, rango de precio, enlace.]", group:"Barcelona"},
        {tag:"Hotel", name:"[Nombre del Hotel 4]", dist:"[Barcelona, zona por añadir]", text:"[Breve nota — estilo, rango de precio, enlace.]", group:"Barcelona"},
        {tag:"Camping", name:"[Nombre del Camping 2]", dist:"[Barcelona, zona por añadir]", text:"[Para quien le apetezca hacer camping cerca de la ciudad.]", group:"Barcelona"}
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
      stay_intro:"Algunes opcions a prop del lloc, des d'hotels fins a càmpings, per a qui necessiti allotjament.",
      hotels:[
        {tag:"Hotel", name:"[Nom de l'Hotel 1]", dist:"[X km del lloc]", text:"[Breu nota — estil, rang de preu, enllaç.]", group:"Terrassa"},
        {tag:"Hotel", name:"[Nom de l'Hotel 2]", dist:"[X km del lloc]", text:"[Breu nota — estil, rang de preu, enllaç.]", group:"Terrassa"},
        {tag:"Càmping", name:"[Nom del Càmping]", dist:"[X km del lloc]", text:"[Per a qui li faci gràcia dormir sota les estrelles.]", group:"Terrassa"},
        {tag:"Hotel", name:"[Nom de l'Hotel 3]", dist:"[Barcelona, zona per afegir]", text:"[Breu nota — estil, rang de preu, enllaç.]", group:"Barcelona"},
        {tag:"Hotel", name:"[Nom de l'Hotel 4]", dist:"[Barcelona, zona per afegir]", text:"[Breu nota — estil, rang de preu, enllaç.]", group:"Barcelona"},
        {tag:"Càmping", name:"[Nom del Càmping 2]", dist:"[Barcelona, zona per afegir]", text:"[Per a qui li faci gràcia acampar a prop de la ciutat.]", group:"Barcelona"}
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
      stay_intro:"Quelques options près du lieu, entre hôtels et campings, pour ceux qui souhaitent dormir sur place.",
      hotels:[
        {tag:"Hôtel", name:"[Nom de l'Hôtel 1]", dist:"[X km du lieu]", text:"[Courte note — style, gamme de prix, lien.]", group:"Terrassa"},
        {tag:"Hôtel", name:"[Nom de l'Hôtel 2]", dist:"[X km du lieu]", text:"[Courte note — style, gamme de prix, lien.]", group:"Terrassa"},
        {tag:"Camping", name:"[Nom du Camping]", dist:"[X km du lieu]", text:"[Pour ceux qui aiment dormir à la belle étoile.]", group:"Terrassa"},
        {tag:"Hôtel", name:"[Nom de l'Hôtel 3]", dist:"[Barcelone, quartier à préciser]", text:"[Courte note — style, gamme de prix, lien.]", group:"Barcelona"},
        {tag:"Hôtel", name:"[Nom de l'Hôtel 4]", dist:"[Barcelone, quartier à préciser]", text:"[Courte note — style, gamme de prix, lien.]", group:"Barcelona"},
        {tag:"Camping", name:"[Nom du Camping 2]", dist:"[Barcelone, quartier à préciser]", text:"[Pour ceux qui aiment camper près de la ville.]", group:"Barcelona"}
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
      stay_intro:"Alcune opzioni vicino alla location, tra hotel e campeggi, per chi desidera pernottare.",
      hotels:[
        {tag:"Hotel", name:"[Nome Hotel 1]", dist:"[X km dalla location]", text:"[Breve nota — stile, fascia di prezzo, link.]", group:"Terrassa"},
        {tag:"Hotel", name:"[Nome Hotel 2]", dist:"[X km dalla location]", text:"[Breve nota — stile, fascia di prezzo, link.]", group:"Terrassa"},
        {tag:"Campeggio", name:"[Nome Campeggio]", dist:"[X km dalla location]", text:"[Per chi ha voglia di dormire sotto le stelle.]", group:"Terrassa"},
        {tag:"Hotel", name:"[Nome Hotel 3]", dist:"[Barcellona, zona da specificare]", text:"[Breve nota — stile, fascia di prezzo, link.]", group:"Barcelona"},
        {tag:"Hotel", name:"[Nome Hotel 4]", dist:"[Barcellona, zona da specificare]", text:"[Breve nota — stile, fascia di prezzo, link.]", group:"Barcelona"},
        {tag:"Campeggio", name:"[Nome Campeggio 2]", dist:"[Barcellona, zona da specificare]", text:"[Per chi ha voglia di campeggiare vicino alla città.]", group:"Barcelona"}
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
