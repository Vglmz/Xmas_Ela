const items = [
  {
    image: "Assets/mp3.png",
    text: "Creo que te sorprenderia lo frecuente que es mi hobby de acostarme y pensar en ti escuchando musica. Me gusta recordarte y tenerte muy presente en mi mente todo el tiempo. Se siente muy lindo estar enamorada de ti Daniela.\n\nEstas son algunas canciones que amo escuchar pensando en ti. Algunas un poco más diferente de las que te suelo dedicar je, pero me gustan mucho y puede que algunas a ti tambien :)",
    audio: "",
    audioLabel: "... :)"
  },
  {
    image: "Assets/mp3-ivory.png",
    text: "Esta me recuerda mucho a cuando vivias en Bogota. Te la dedique cuando estabas aqui y te podia ver tan seguido como yo quisiera… y aun así habla acerca de como no te veo lo suficiente. No sabia en ese momento lo relevante que seria ahora. Me gusta mucho escucharla, me recuerda a los dias en tu casa, hablar por horas, mirarte y sonreir, ver peliculas (o no en realidad), tocarte antes de quedarnos dormidas y quedarme hasta el ultimo momento posible con tal verte unos minutos mas. Lo extraño mucho, ojala verte lo suficiente.",
    audio: "Songs/Go_Away.mp3",
    audioLabel: "Go Away - Omar Apollo"
  },
  {
    image: "Assets/mp3-humbe.png",
    text: "REM es de mis canciones favoritas que me has dedicado jamas. Un poco extraño? tal vez ahahah. Pero senti que fue tan genuino y tan tu que me gusto mucho. En especial saber que aun pensabas en mi y lo duro que es para ti estar lejos. Asi queee, como se que te gusta un poco Humbe, tambien quise incluir una de el aca. Esta me gusta bastante, es nueva. Un poco hot ahahahahha. No requiere mucha explicación linda ahaahah ;)",
    audio: "Songs/BOHEMIA.mp3",
    audioLabel: "BOHEMIA - HUMBE"
  },
  {
    image: "Assets/mp3-5.png",
    text: "Terreno un poco mas duro ahaahaha. Se lo mucho que te gusta Ed y aunque ya no lo esuchas taaan seguido, lo empece a escuchar bastante. Me gustar saber tus gustos, conocerte y entender las cosas que te gustan, y me di cuenta que me encanta tambien :). Esuche las viejitas claro, las que te encantan.\n\nEn cuanto a la canción, se que en este momento las cosas son complejas y no estas buscando una relación en el momento, pero quiero confiar más en lo que tenemos que en una etiqueta de pareja o definir algo inmediatamente. Te amo, lo sabes. Y me encantas tanto, que solo quiero que las cosas fluyan y salgan como deban salir. Pero quiero intentarlo contigo.",
    audio: "Songs/Land.mp3",
    audioLabel: "Where We Land - Ed Sheeran"
  },
  {
    image: "Assets/mp3-apolonio.png",
    text: "Otra de Omar Apollo ahahah. Me gusta mucho, y en realidad no lo escucho hace mucho hasta hace poco. Pienso mucho en ti cuando escucho su musica. Me gusta que te guste y que lo escucharas principalmente por mi. La canción tampoco requiere mucho analisis ahahah es sencilla, pero me gusta :)",
    audio: "Songs/Two.mp3",
    audioLabel: "The Two of Us - Omar Apollo"
  },
  {
    image: "Assets/mp3-maria.png",
    text: "Pshhh ahahahah. La verdad que me gusta muchisimo The Marias, en especial ella. Muchisimo. Esta es mi favorita del album que saco ella sola. En verdad no puedo pensar en nadie mas que tu. Creo que subestimas lo mucho que estas constantemente en mi mente. Ya sea en forma de recuerdos, lugares donde estuvimos, cosas que te gustan o algo que me diste por mas sencillo que fuera. Eres el pensamiento que mas ocupa mi mente, y eso me encanta.",
    audio: "Songs/Vueltas.mp3",
    audioLabel: "Vueltas - Not for Radio"
  },
  {
    image: "Assets/mp3-frank.png",
    text: "Ahahahhaha muyy diferente a lo que te suelo dedicar lo se lo se. Pero dato curioso me gusta mucho Frank Sinatra hahaahah. Creo que me has dicho que te gusta que aja te dedique cosas o muestre cosas sin pensar mucho en si te van a gustar necesariamente o son tu estilo, y que te gusta aja saber que me gusta. Así que obedeci ahahahah.\n\nEn cuanto a la canción, no se muy bien que decir ahahah. Hay días en los que en verdad me mata verte de lo hermosa que estas y quisiera aaaaaaaaaaaaa. Sabes? Ahahahahahaah. En cambio solo me quedo mirandote toda la noche mientras me hablas y esuchandote hasta que te canses de hablar. Tu voz, tu sonrisa, tus ojos, tu risa, tu cabello, tu sonrisaaa, tus labios, tus cejas, tu sonrisaaaaaaashdasjdba. Todo me enamora ela, cada parte de ti.",
    audio: "Songs/Frank.mp3",
    audioLabel: "The Way You Look Tonight - Frank Sinatra"
  },
  {
    image: "Assets/mp3-ed.png",
    text: "Se que te gustan las acusticas donde se escucha mucho la guitarra, y donde su voz se escucha tan así ahahahah. No se como explicarlo pero se que si. Dato curioso: De las canciones que me has dedicado, ‘Best Part of Me’ es probablemente mi favorita. La amo.\n\nAhora por el lado de la canción, mhmmm. Me gustas mucho, creo que eso puede quedar claro ahahahah. Y en verdad me fascinas y toda tu. Eres linda, interesante, amorosa, detallista, hermosa, cariñosa, estimulante, atenta, tierna, y podria seguir mucho más. Pero todo lo que eres es tanto y tan lindo que muchas veces quedo tonta y solo puedo pensar o decir ‘linda’. Eres muy linda. Estas muy linda. Todas verdaderas claro. Pero no tan sencillo como puede ser la palabra, en vez, recargadas con una cantidad de pensamientos y sentimientos que me cuesta expresar. Eres todo eso y mucho más amor.",
    audio: "Songs/So.mp3",
    audioLabel: "So - Ed Sheeran"
  },
  {
    text: "Estas son todas las canciones en una playlist :) Hace tiempo no te hago una hermosa, disfrutala mucho amor.",
    type: "spotify"
  }
];

let currentIndex = 0;

const imageEl = document.getElementById("carousel-image");
const textEl = document.getElementById("carousel-text");
const buttons = document.querySelectorAll(".nav-btn");

const audioPlayer = new Audio();
audioPlayer.volume = 0.7; // ajusta volumen

const audioLabel = document.getElementById("audio-label");

function extractNameFromPath(path) {
  if (!path) return '';
  const parts = path.split('/').pop().split('.').slice(0, -1).join('.');
  return parts.replace(/[_-]+/g, ' ');
}

function setAudioLabelForItem(item) {
  if (!audioLabel) return;
  if (!item) { audioLabel.textContent = ''; return; }
  if (item.type === 'spotify') {
    audioLabel.textContent = 'Playlist en Spotify :)';
    return;
  }
  const label = item.audioLabel || extractNameFromPath(item.audio);
  audioLabel.textContent = `Sonando: ${label}`;
}

// set initial label
setAudioLabelForItem(items[currentIndex]);

const spotifyEmbed = document.getElementById("spotify-embed");

const gif = document.querySelector(".mockup-gif");

if (gif) {
  setTimeout(() => {
    gif.classList.add("gif-green");
  }, 1200); // mitad del gif aprox
}



buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const direction = btn.dataset.direction;

    if (direction === "next") {
      currentIndex = (currentIndex + 1) % items.length;
    } else {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
    }

    updateContent();
  });
});

function updateContent() {
  const current = items[currentIndex];

  // Reset visual
  imageEl.classList.add("hidden");
  spotifyEmbed.classList.add("hidden");
  audioPlayer.pause();

  textEl.style.opacity = 0;

  setTimeout(() => {
    // render text allowing explicit newlines in the data to become HTML line breaks
    if (current.text && current.text.indexOf('\n') !== -1) {
      textEl.innerHTML = current.text.replace(/\n/g, '<br>');
    } else {
      textEl.textContent = current.text || '';
    }
    textEl.style.opacity = 1;

    if (current.type === "spotify") {
      // 🎶 mostrar Spotify
      spotifyEmbed.classList.remove("hidden");
      setAudioLabelForItem(current);
    } else {
      // 🖼 mostrar imagen
      imageEl.src = current.image;
      imageEl.classList.remove("hidden");

      // 🔊 audio normal
      audioPlayer.src = current.audio;
      audioPlayer.currentTime = 0;
      audioPlayer.play().catch(() => {});
      setAudioLabelForItem(current);
    }
  }, 200);
}

const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const overlay = document.getElementById("overlay");

openModal.addEventListener("click", () => {
  // default modal view
  overlay.classList.remove("hidden");
  // show default content and hide quiz if needed
  const modalDefault = document.getElementById('modalDefault');
  const modalQuiz = document.getElementById('modalQuiz');
  if (modalDefault) modalDefault.classList.remove('hidden');
  if (modalQuiz) modalQuiz.classList.add('hidden');
  // initialize modal slideshow
  initModalSlides();
});

closeModal.addEventListener("click", () => {
  overlay.classList.add("hidden");
  // hide quiz view if open
  const modalQuiz = document.getElementById('modalQuiz');
  const modalDefault = document.getElementById('modalDefault');
  if (modalQuiz) modalQuiz.classList.add('hidden');
  if (modalDefault) modalDefault.classList.remove('hidden');
});

// image button that opens the quiz modal
const openModalImg = document.getElementById('openModalImg');
if (openModalImg) {
  openModalImg.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    openQuiz();
  });
}

/* --- Modal slideshow implementation for modalDefault --- */
const modalSlidesData = [
  {
    title: 'Chocolatito navideño',
    text: 'Me gusta demasiado hacer las cosas que son importantes para ti y que te gustan, aunque yo las odie un poco ahahahaha. Y se que te gusta tal vez mucho el chocolate caliente con masmelos ahahahahah. Solo porque soy pancito tragada que contigo te lo prepararia en una tasa muy navideña ahahaha mientras te consiento todo el dia :3 Y por ti prometo probarlo :)',
    images: ['Assets/purin-reno.png']
  },
  {
    title: 'Alumbrados rolos eeeee',
    text: 'Claramente este plan no podia faltar ahahahha. A mi me gusta, y saber que a ti te encanta me da mas ganas aun de hacerlo :). Yo te tomo fotos lindas y caminamos muy romanticamente mientras mua mua pero mua mua no muy publico pero aun así mua mua para que estes muy feli :3 Yo te tomo fotos romanticas con mi camara :) yyyy nos podemos tomar una foto romantica como la que nos tomo santi por tu cumple. Prometo hacerlo muy romantico todo hermosa.',
    images: ['Assets/pinguinos.png']
  },
  {
    title: 'Cineee Melanieee ahahah',
    text: 'Por si se te olvida (aunque es imposible porque nunca me callo acerca de lo mucho que me gustan) soy una mujer de cine 🚬 ahahahaha. Así queeee claramente tenemos que ver muchas muchas muchassss pelis :) De navidad obvio. Yo veo hasta las mas cliches y las mas tontas contigo :3 Pero tambien mis pelis de cine 🚬 que tengo que mostrarte para que me puedas hablar por 1 hora sobre que te gusto o no y mirarte como tonta enamorada :) Ademas hay una peli que es de terror que es de navidad y esa me da mucho miedo tonces la quiero ver contigo ahahahaha',
    images: ['Assets/aguacate.png']
  },
  {
    title: 'Jueguitos divertidos eeee',
    text: 'Hace mucho tiempo me dijiste que me querias mostrar tu granja de slime rancher ahahahahah y quiero verla!!! En general siento que me gustaria mucho jugar contigo. Me la paso muy bien contigo y amo lo cliche que puedo ser mostrandote como jugar solo para poder tocarte las manos je. Podemos jugar toda la noche :3 lo que a ti te guste hermosa, en todo te puedo ganar ahahahah. Ademas!!! Tenemos que jugar clue ahahhahaah soy un fastidio con eso pero lo amo. Me gusta mucho pasar el tiempo contigo bonita.',
    images: ['Assets/kirby-navideño.png']
  },
  {
    title: 'Cena de pancito chef',
    text: 'Soy demasiado cliche ahahahah eso ya se sabe. Y me gustan las cosas sencillas? Como hacerte una cena romantica y tener una linda cita navideña contigo. Yo te puedo cocinar lo que tu quieras amor. Pasta, sushi, burritos, hamburguesa smash en termino 3/4 como te gusta, lo que tu desees hermosa. Y como soy muy romantica aja tu te imaginas ahahah velas porque me gusta mucho como te ves con luz calida, flores para ti :3, comida especial para cebo y pita ahahaha todo linda.Y claramente sexo romantico ;)',
    images: ['Assets/pinguino-romantico.png']
  }
];

let modalSlideIndex = 0;

function initModalSlides(){
  const slidesContainer = document.getElementById('modalSlides');
  const counter = document.getElementById('modalCounter');
  if (!slidesContainer) return;
  slidesContainer.innerHTML = '';
  modalSlidesData.forEach((s, i) => {
    const div = document.createElement('div');
    div.className = 'slide';
    div.setAttribute('data-index', i);
    // alternate sides: even -> images on right (image-left meaning images at right?), we'll use image-left for images on the left when i%2===0
    const sideClass = (i % 2 === 0) ? 'image-left' : 'image-right';
    div.classList.add(sideClass);

    const row = document.createElement('div'); row.className = 'slide-row';

    const textCol = document.createElement('div'); textCol.className = 'slide-text';
    if (s.title) {
      const h = document.createElement('h3'); h.className = 'slide-title'; h.textContent = s.title;
      textCol.appendChild(h);
    }
    const p = document.createElement('p');
p.innerHTML = s.text.replace(/\n/g, '<br>');
textCol.appendChild(p);

    const imgsWrap = document.createElement('div'); imgsWrap.className = 'slide-images';
    (s.images||[]).forEach(src => {
      const im = document.createElement('img'); im.src = src; im.alt = '';
      imgsWrap.appendChild(im);
    });

    row.appendChild(textCol);
    row.appendChild(imgsWrap);
    div.appendChild(row);
    slidesContainer.appendChild(div);
  });
  modalSlideIndex = 0;
  renderModalSlide();

  // wire nav buttons (id'd in HTML)
  const prev = document.getElementById('modalPrev');
  const next = document.getElementById('modalNext');
  if (prev) { prev.onclick = ()=>{ modalSlideIndex = (modalSlideIndex-1+modalSlidesData.length)%modalSlidesData.length; renderModalSlide(); }; }
  if (next) { next.onclick = ()=>{ modalSlideIndex = (modalSlideIndex+1)%modalSlidesData.length; renderModalSlide(); }; }

  // close X already wired to closeModal variable
}

function renderModalSlide(){
  const slides = document.querySelectorAll('#modalSlides .slide');
  slides.forEach(s => s.classList.remove('active'));
  const active = slides[modalSlideIndex];
  if (active) active.classList.add('active');
  const counter = document.getElementById('modalCounter');
  if (counter) counter.textContent = `${modalSlideIndex+1} / ${modalSlidesData.length}`;
}

// Formspree AJAX submit + success message
const responseForm = document.querySelector('.response-form');
const successMessage = document.getElementById('successMessage');
if (responseForm) {
  responseForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const url = responseForm.action;
    const formData = new FormData(responseForm);
    const submitBtn = responseForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    const prevText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    if (successMessage) {
      successMessage.classList.add('hidden');
      successMessage.textContent = '';
    }
    try {
      const res = await fetch(url, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        responseForm.reset();
        if (successMessage) {
          successMessage.textContent = 'Muy bien bonita, gracias por tu respuesta';
          successMessage.classList.remove('hidden');
        }
      } else {
        const data = await res.json().catch(() => ({}));
        if (successMessage) {
          successMessage.textContent = data.error || 'Aaaaa me voy a matar no funciono y se callo :( pero sigueee';
          successMessage.classList.remove('hidden');
        }
      }
    } catch (err) {
      if (successMessage) {
        successMessage.textContent = 'Aaaaa me voy a matar no funciono y se callo :( pero sigueee';
        successMessage.classList.remove('hidden');
      }
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = prevText;
    }
  });
}

/* --- 8-bit snow effect (Snow) --- */
const Snow = {
  el: '#snow',
  density: 10000,
  maxHSpeed: 5,
  minFallSpeed: 2,
  canvas: null,
  ctx: null,
  particles: [],
  mp: 1,
  quit: false,
  init() {
    this.canvas = document.querySelector(this.el);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.reset();
    requestAnimationFrame(this.render.bind(this));
    window.addEventListener('resize', this.reset.bind(this));
  },
  reset() {
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.canvas.width = this.w;
    this.canvas.height = this.h;
    this.particles = [];
    this.mp = Math.ceil(this.w * this.h / this.density);
    for (let i = 0; i < this.mp; i++) {
      const size = Math.random() * 4 + 5;
      this.particles.push({
        x: Math.random() * this.w,
        y: Math.random() * this.h,
        w: size,
        h: size,
        vy: this.minFallSpeed + Math.random(),
        vx: (Math.random() * this.maxHSpeed) - this.maxHSpeed / 2,
        fill: '#ffffff',
        s: (Math.random() * 0.2) - 0.1
      });
    }
  },
  render() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.w, this.h);
    this.particles.forEach((p) => {
      p.y += p.vy;
      p.x += p.vx;
      this.ctx.fillStyle = p.fill;
      this.ctx.fillRect(p.x, p.y, p.w, p.h);
      if (p.x > this.w + 5 || p.x < -5 || p.y > this.h) {
        p.x = Math.random() * this.w;
        p.y = -10;
      }
    });
    if (this.quit) return;
    requestAnimationFrame(this.render.bind(this));
  },
  destroy() {
    this.quit = true;
  }
};

// Initialize snow after DOM is ready (script is deferred so DOM is already parsed)
try {
  Snow.init();
} catch (e) {
  // fail silently
}

/* --- Quiz logic --- */
const modalDefaultEl = document.getElementById('modalDefault');
const modalQuizEl = document.getElementById('modalQuiz');
const quizProgress = document.getElementById('quizProgress');
const questionText = document.getElementById('questionText');
const submitAnswerBtn = document.getElementById('submitAnswer');
const unlockedGrid = document.getElementById('unlockedGrid');
const finalLetter = document.getElementById('finalLetter');
const letterContent = document.getElementById('letterContent');
const closeQuizBtn = document.getElementById('closeQuiz');

// persistence removed: quiz resets on close/reopen

const quizQuestions = [
  { q: '¿Cual ha sido mi cita favorita nuestra?', choices: ['La del pollo cerca a mi casa','Viendo el conjuro contigo :3'], correct: 0, img: 'Assets/bakugo.png', text: 'Tu novio je' },
  { q: '¿Cuál es mi favorito tuyo?', choices: ['Tus ojos','Tu sonrisa'], correct: 1, img: 'Assets/shota.png', text: 'Tu otro novio ahahahah' },
  { q: '¿Dejaria todo a un lado por estar contigo hmm?', choices: ['No seas tonta -_-','Chipi siempre :3'], correct: 1, img: 'Assets/cebo-arreglo.png', text: 'Je cebo :)' },
  { q: '¿Deberias vivir en Bogota el proximo año?', choices: ['Chip y te visito todos los dias amor','Mmmm ñop'], correct: 0, img: 'Assets/Tomate.png', text: 'Gato tomate :3' },
  { q: '¿Te extraño y me gustas más cada vez?', choices: ['Je sipi :3','Naaaa no creo'], correct: 0, img: 'Assets/kirby-waa.png', text: 'Lindo kirby' }
];

let quizIndex = 0;
let quizScore = 0;

function renderHearts() {
  quizProgress.innerHTML = '';
  for (let i=0;i<quizQuestions.length;i++){
    const span = document.createElement('span');
    span.className = 'heart';
    span.innerHTML = '❤️';
    quizProgress.appendChild(span);
  }
}

function openQuiz(){
  if (modalDefaultEl) modalDefaultEl.classList.add('hidden');
  if (modalQuizEl) modalQuizEl.classList.remove('hidden');
  // init (always fresh)
  quizIndex = 0; quizScore = 0; unlockedGrid.innerHTML = ''; finalLetter.classList.add('hidden'); letterContent.innerHTML = '';
  renderHearts();
  // prepare slides but keep them hidden until the player finishes the quiz
  prepareQuizSlides();
  const openSlidesBtn = document.getElementById('quizOpenSlidesBtn');
  const quizSliderEl = document.getElementById('quizSlider');
  if (openSlidesBtn) openSlidesBtn.classList.add('hidden');
  if (quizSliderEl) quizSliderEl.classList.add('hidden');
  renderQuestion();
}

function renderQuestion(){
  const q = quizQuestions[quizIndex];
  questionText.textContent = `Pregunta ${quizIndex+1}: ${q.q}`;
  const choice0 = document.getElementById('choice0');
  const choice1 = document.getElementById('choice1');
  const feedback = document.getElementById('questionFeedback');
  feedback.textContent = '';
  if (choice0) { choice0.textContent = q.choices[0]; choice0.classList.remove('correct','wrong'); }
  if (choice1) { choice1.textContent = q.choices[1]; choice1.classList.remove('correct','wrong'); }
}

function updateHeart(index){
  const hearts = quizProgress.querySelectorAll('.heart');
  if (hearts[index]) hearts[index].classList.add('filled');
}

function revealItem(question){
  const div = document.createElement('div');
  div.className = 'unlocked-item';
  const img = document.createElement('img');
  img.src = question.img;
  img.alt = 'Desbloqueado';
  const p = document.createElement('p');
  p.textContent = question.text;
  div.appendChild(img);
  div.appendChild(p);
  unlockedGrid.appendChild(div);
}
function handleChoice(choiceIndex, buttonEl){
  const question = quizQuestions[quizIndex];
  const feedback = document.getElementById('questionFeedback');
  if (choiceIndex === question.correct) {
    // correct
    quizScore++;
    updateHeart(quizIndex);
    // animate correct button
    if (buttonEl) { buttonEl.classList.add('correct'); }
    revealItem(question);
    // advance after short delay
    setTimeout(()=>{
      quizIndex++;
      if (quizIndex >= quizQuestions.length){
        showFinal();
      } else {
        renderQuestion();
      }
    }, 520);
  } else {
    // wrong: animate and show feedback, then advance
    if (buttonEl) {
      buttonEl.classList.add('wrong');
      setTimeout(()=> buttonEl.classList.remove('wrong'), 520);
    }
    if (feedback) {
      feedback.textContent = 'Ai mal pipipi vuelve a intentar';
    }
    // advance after short delay
    setTimeout(()=>{
      quizIndex++;
      if (quizIndex >= quizQuestions.length){
        showFinal();
      } else {
        renderQuestion();
      }
    }, 520);
  }
}

function showFinal(){
  // prepare final letter content (do NOT show the `finalLetter` element here)
  const lines = [];
  lines.push(`<p>Muy bien hermosa :3.</p>`);
  if (quizScore === quizQuestions.length) {
    lines.push('<p>Cartita cacorra :3:</p>');
    lines.push('<p>Se que todo esto es algo muy tonto para lo que quisiera darte esta noche. Quisiera estar contigo mucho. Extraño verte y besarte ela. Me siento diferente cuando estoy contigo, diferente lindo. Quiero sentir eso siempre y que tu lo sientes tambien. Eres tan importante para mi como no te imaginas. Yo me muero por ti por mas cursi que suene, pero es cierto. Eres probablemente lo que mas me importa en el mundo y no te cambiaria por nada. Eres lo unico que no quisiera que cambiara en mi vida. Te quiero para siempre. Todo el tiempo. Y honestamente, toda mia. Tus besos, tus abrazos, las charlas contigo, tocarte, mirarte, hacerte estas tontadas. No quisiera hacerlas por nadie mas que tu. Y espero que sientas eso. Lo mucho que te amo. Lo mucho que me importas. No se como ponerlo en palabras. Me quedo corta. Así que, nuevamente te hago una pagina tonta. Para expresar todo lo que me cuesta decirte en palabras y si  quisiera intentar hacerlo en persona solo terminaria conmigo llorando sin decir nada. Intento mejorar en eso je, lo intento. Pero me haces sentir tanto que aun no hallo como.</p>');
    lines.push('<p>Espero te haya gustado linda. Claro esta esto no es en remplazo de tu regalo je, que espero te guste por mas tonto que sea. Pero como alguien no me quiere dar su dirección! tendras que esperar hasta que nos veamos (ojala en bucara je :3). Solo queria darte esto esta noche. No pienses que puedo pasar esta noche sin darte algo si quiera cacorro como esto.</p>');
    lines.push('<p>Te amo como a nada mas ela. Espero tus besos y vernos mucho amor.</p>');
    lines.push('<p>Toda tuya siempre, Pancito.</p>');
    // do NOT reveal the `finalLetter` DOM node here — the letter will be shown
    // only inside the last slide when the user opens the slides view
  } else {
    lines.push('<p>Oi — no todas las respuestas son correctas.</p>');
    lines.push('<p>Vuelve a intentar amor.</p>');
    lines.push('<div style="margin-top:12px;"><button id="retryQuiz" class="submit-btn">Volver a intentar</button></div>');
  }
  letterContent.innerHTML = lines.join('');
  // hide question area
  questionText.textContent = '';

  // If player got all correct, show the open-slides arrow button
  const openSlidesBtn = document.getElementById('quizOpenSlidesBtn');
  const quizSliderEl = document.getElementById('quizSlider');
  const prevSlideBtn = document.getElementById('quizPrevSlide');
  const nextSlideBtn = document.getElementById('quizNextSlide');
  const slideDisplay = document.getElementById('quizSlideDisplay');

  if (quizScore === quizQuestions.length && openSlidesBtn) {
    openSlidesBtn.classList.remove('hidden');
    // clicking the open button shows the slider view (5 imágenes + carta)
    openSlidesBtn.onclick = () => {
      const qContainer = document.getElementById('questionContainer');
      if (qContainer) qContainer.classList.add('hidden');
      if (unlockedGrid) unlockedGrid.classList.add('hidden');
      if (finalLetter) finalLetter.classList.add('hidden');

      // hide the open-slides button itself so it doesn't sit above the slides
      openSlidesBtn.classList.add('hidden');

      if (quizSliderEl) {
        quizSliderEl.classList.remove('hidden');
        quizSliderEl.setAttribute('aria-hidden', 'false');
      }

      prepareQuizSlides();
      renderQuizSlide();
    };
  } else if (openSlidesBtn) {
    openSlidesBtn.classList.add('hidden');
  }

  // attach retry if present
  const retryBtn = document.getElementById('retryQuiz');
  if (retryBtn) {
    retryBtn.addEventListener('click', ()=>{
      // reset quiz
      quizIndex = 0; quizScore = 0; unlockedGrid.innerHTML = ''; finalLetter.classList.add('hidden'); letterContent.innerHTML = '';
      // also hide slider if visible
      if (quizSliderEl) { quizSliderEl.classList.add('hidden'); }
      const qContainer = document.getElementById('questionContainer'); if (qContainer) qContainer.classList.remove('hidden');
      if (openSlidesBtn) openSlidesBtn.classList.add('hidden');
      // stored progress disabled: nothing to clear
      if (finalLetter) finalLetter.classList.remove('letter-style');
      renderHearts(); renderQuestion();
    });
  }
}

// --- Quiz slider logic: 5 imágenes desbloqueadas (en el mismo orden de preguntas) + carta final ---
let quizSlides = [];
let quizSlideIndex = 0;

// imágenes usadas para el slider final (diferentes a las imágenes desbloqueadas por pregunta)
const quizSlideImages = [
  'Assets/1.jpeg',
  'Assets/2.jpeg',
  'Assets/3.jpeg',
  'Assets/4.jpeg',
  'Assets/5.jpeg'
];

function prepareQuizSlides(){
  // build slides using the separate `quizSlideImages` array so slides differ from unlocked items
  quizSlides = quizSlideImages.map((src, i) => ({ type: 'image', img: src, text: quizQuestions[i] ? quizQuestions[i].text : '' }));
  quizSlides.push({ type: 'letter' });
  quizSlideIndex = 0;
}

function renderQuizSlide(){
  const display = document.getElementById('quizSlideDisplay');
  const prevBtn = document.getElementById('quizPrevSlide');
  const nextBtn = document.getElementById('quizNextSlide');
  if (!display) return;
  const s = quizSlides[quizSlideIndex];
  display.innerHTML = '';
  if (s.type === 'letter') {
    // show the final letter content with paper styling
    const letterHtml = document.getElementById('letterContent') ? document.getElementById('letterContent').innerHTML : '';
    display.innerHTML = `<div class="letter-paper">${letterHtml || '<p>Carta</p>'}</div>`;
  } else {
    const img = document.createElement('img'); img.src = s.img; img.alt = '';
    display.appendChild(img);
    const p = document.createElement('p'); p.textContent = s.text || '';
  }

  // prev button visibility
  if (prevBtn) {
    if (quizSlideIndex > 0) prevBtn.classList.remove('hidden'); else prevBtn.classList.add('hidden');
    prevBtn.onclick = () => { quizSlideIndex = Math.max(0, quizSlideIndex - 1); renderQuizSlide(); };
  }
  if (nextBtn) {
    nextBtn.onclick = () => { quizSlideIndex = Math.min(quizSlides.length - 1, quizSlideIndex + 1); renderQuizSlide(); };
  }
}

// wire choice buttons
const choice0 = document.getElementById('choice0');
const choice1 = document.getElementById('choice1');
if (choice0) choice0.addEventListener('click', (e)=>{ handleChoice(0, e.currentTarget); });
if (choice1) choice1.addEventListener('click', (e)=>{ handleChoice(1, e.currentTarget); });
if (closeQuizBtn) closeQuizBtn.addEventListener('click', ()=>{ overlay.classList.add('hidden'); modalQuizEl.classList.add('hidden'); if (modalDefaultEl) modalDefaultEl.classList.remove('hidden'); });
