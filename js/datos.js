/* ==========================================================================
   DATOS DE LA INVITACION
   Este es el UNICO archivo que necesitas editar para personalizar todo.
   Cambia los textos entre comillas y guarda. Nada mas.
   ========================================================================== */

const DATOS = {

  /* --- El bebe y el evento ------------------------------------------- */
  bebe: "Julián",
  evento: "Baby Shower",

  /* --- Papas ---------------------------------------------------------- */
  mama: "Yolaine del Valle",
  papa: "Julio Torres",

  /* --- Sello de lacre --------------------------------------------------
     Letra que va grabada en el sello dorado de la portada.
     Si lo dejas vacio usa la inicial del bebe.                            */
  selloInicial: "",

  /* --- Fecha y hora ---------------------------------------------------
     fechaISO: formato AAAA-MM-DDTHH:MM  (24h). Se usa para la cuenta regresiva.
     Los otros tres campos son solo lo que se ve en pantalla.            */
  fechaISO: "2026-08-15T10:30",
  diaSemana: "Sábado",
  diaNumero: "15",
  mes: "Agosto",
  anio: "2026",
  hora: "10:30 AM",

  /* --- Lugar ----------------------------------------------------------- */
  lugarNombre: "Club De Leones",
  lugarDireccion: "El Carmen De Bolívar\n242 Cra. 47",
  // Pega aqui el enlace de Google Maps del lugar
  lugarMapa: "https://maps.app.goo.gl/Mo8J6XahheHEeoZAA",

  /* --- Dress code ------------------------------------------------------
     Colores sugeridos, en hexadecimal. Puedes poner de 2 a 6.            */
  dressCode: [],
  dressCodeNota: "El color azul estará reservado para los papás. Te agradecemos elegir otro tono para acompañarnos.",

  /* --- Confirmacion por WhatsApp --------------------------------------
     Numero en formato internacional SIN + ni espacios. Ej Mexico: 5213312345678
     Colombia: 573001234567 | Espana: 34600123456                         */
  whatsapp: "573008230169",
  whatsappMensaje: "¡Hola! Soy {nombre} y confirmo mi asistencia al Baby Shower de Julián",

  /* --- Textos ----------------------------------------------------------- */
  fraseIntro: "Mientras Diosito prepara el día de mi llegada con mucho amor…",
  fraseInvitacion: "Viven una etapa llena de amor y desean compartir contigo este momento tan especial, por ello, te invitan a celebrar.",
  fraseConfirmar: "Nos encantará saber que nos acompañarás.\nTe agradeceremos confirmar tu asistencia para poder preparar todos los detalles.",
  fraseRegalos1: "Tu presencia es el mejor regalo que podemos recibir en este día tan especial.",
  fraseRegalos2: "Si deseas tener un detalle adicional, puedes llevar un regalito para Julián.",
  fraseCierre: "¡Te esperamos!",

  /* --- Imagenes (dejalas vacias "" si aun no las tienes) ---------------- */
  fotoPapas: "assets/foto-papas.jpg",
  fotoUltrasonido: "",

  /* --- Musica de fondo -------------------------------------------------
     Pon tu archivo en assets/ y escribe aqui el nombre.
     Si lo dejas vacio, el boton de musica no aparece.                     */
  musica: "assets/musica.mp3",
  volumenInicial: 0.5,

  /* --- Fondos -----------------------------------------------------------
     patron:        el mosaico que se repite a los lados. PNG transparente.
     patronTamano:  a que ancho se repite en pantalla, en px.
                    Mas chico = motivos mas pequenos y juntos. 260 a 340.
     arco:          la plantilla de la portada, con el arco y los animalitos.
     fondoToile:    color del papel que se ve por detras del mosaico.       */
  patron: "assets/patron-toile-soft.jpg",
  patronTamano: 720,
  arco: "assets/arco-portada-limpio.jpg",
  fondoToile: "#fdfdfb",

  /* Mono azul sobre el arco de la portada. Tu plantilla ya viene completa,
     asi que por defecto va apagado. Ponlo en true si lo quieres.           */
  mostrarMono: true
};
