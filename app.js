const translations = {
  en: {
    navWork:'Selected work',navAbout:'About me',navContact:'Contact',role:'FULL-STACK DEVELOPER',
    hero1:'Ideas to',hero2:'interfaces.',hero3:'And beyond.',
    intro:"Hi, I'm Myagmarsuren. I connect thoughtful interfaces with the logic behind them — building web apps, working with APIs, and exploring AI.",
    explore:'Explore my work',artCaption:'EVERY LAYER. ONE EXPERIENCE.',selected:'01 / SELECTED WORK',
    workTitle1:'Built with curiosity.',workTitle2:'Made to work.',workIntro:'A selection of projects — from everyday experiences to experiments with AI.',filterAll:'All projects',earlyWork:'AND WHERE IT STARTED',
    aboutLabel:'02 / THE PERSON BEHIND THE CODE',aboutTitle1:'A curious mind.',aboutTitle2:'A builder at heart.',
    aboutLead:'I enjoy turning an idea into something you can actually use.',
    aboutBody:"My work spans responsive interfaces, server-side logic, authentication, databases, and API integrations. I've built food delivery experiences, a movie discovery app, and tools that bring AI into everyday tasks.",
    aboutBody2:'Each project is a chance to connect another piece of the puzzle — and make the next one better.',
    cap1:'Interfaces that feel right',cap2:'The logic behind the screen',cap3:'Data, connected',cap4:'A little intelligence',
    resumeLabel:'Resume',resumeStatus:'View PDF',contactLabel:'03 / HELLO',contactTitle1:'Good things start',contactTitle2:'with clear thinking.',copyEmail:'Copy email',footerNote:'Always curious. Always building.',backTop:'BACK TO TOP ↑',
    copied:'Email copied. Say hello!',copyFailed:'Select and copy: erdenebyr.myagmarsuren@gmail.com',whatBuilt:'What I built',stack:'Technology stack',github:'Explore the code ↗',live:'Visit project ↗',details:'View project details',projects:'PROJECTS',close:'Close project details',light:'Switch to light theme',dark:'Switch to dark theme'
  },
  mn: {
    navWork:'Төслүүд',navAbout:'Миний тухай',navContact:'Холбогдох',role:'FULL-STACK ХӨГЖҮҮЛЭГЧ',
    hero1:'Санааг',hero2:'бодит болгоно.',hero3:'Код бүрээр.',
    intro:'Сайн уу, би Мягмарсүрэн. Харагдах хэсэг, цаадах логикийг нь холбож вэб апп бүтээдэг. API-тай ажиллаж, AI-ийн боломжуудыг туршдаг.',
    explore:'Миний төслүүд',artCaption:'БҮХ ДАВХАРГА. НЭГ ТУРШЛАГА.',selected:'01 / СОНГОСОН ТӨСЛҮҮД',
    workTitle1:'Сониуч зангаас эхэлж,',workTitle2:'бодит ажил болдог.',workIntro:'Өдөр тутмын хэрэглээнээс AI туршилт хүртэл — миний хийсэн ажлуудаас.',filterAll:'Бүх төсөл',earlyWork:'ЭХЛЭЛИЙГ ТАВЬСАН АЖЛУУД',
    aboutLabel:'02 / КОДЫН ЦААНАХ ХҮН',aboutTitle1:'Сониуч сэтгэл.',aboutTitle2:'Бүтээх хүсэл.',
    aboutLead:'Санааг бодитоор ашиглаж болох зүйл болгох дуртай.',
    aboutBody:'Миний төслүүд responsive интерфейс, серверийн логик, нэвтрэлт, өгөгдлийн сан, API холболтыг хамардаг. Хоол хүргэлт, кино хайлт болон AI ашигласан аппууд хийсэн.',
    aboutBody2:'Төсөл бүр шинэ зүйл холбож ойлгох, дараагийн ажлаа илүү сайн хийх боломж болдог.',
    cap1:'Хэрэглэхэд эвтэй интерфейс',cap2:'Дэлгэцийн цаадах логик',cap3:'Өгөгдлөө холбох нь',cap4:'AI-ийн боломжууд',
    resumeLabel:'Анкет',resumeStatus:'Анкет үзэх',contactLabel:'03 / САЙН БАЙНА УУ',contactTitle1:'Сайхан зүйлс',contactTitle2:'цэгцтэй бодлоос эхэлдэг.',copyEmail:'Имэйл хуулах',footerNote:'Үргэлж сониуч. Үргэлж бүтээнэ.',backTop:'ДЭЭШ ОЧИХ ↑',
    copied:'Имэйл хууллаа!',copyFailed:'Сонгоод хуулна уу: erdenebyr.myagmarsuren@gmail.com',whatBuilt:'Хийсэн зүйлс',stack:'Ашигласан технологи',github:'Кодыг үзэх ↗',live:'Төслийг нээх ↗',details:'Төслийн дэлгэрэнгүй',projects:'ТӨСӨЛ',close:'Дэлгэрэнгүйг хаах',light:'Цайвар горим',dark:'Бараан горим'
  }
};

const projects = [
  {id:'food',name:'NomNom — Food Delivery',repo:'food-delivery',categories:['fullstack'],tags:['Next.js','Express','MongoDB','JWT'],
    description:{en:'A complete food ordering experience, with a customer storefront and the tools to manage it.',mn:'Хэрэглэгчийн захиалгаас админы удирдлага хүртэлх хоол хүргэлтийн вэб апп.'},
    details:{en:'A Next.js customer interface backed by an Express API. The project includes authentication, a cart, customer orders, and separate admin dashboards. It has a local development data store and MongoDB integration.',mn:'Next.js интерфейсийг Express API-тай холбосон төсөл. Нэвтрэлт, сагс, хэрэглэгчийн захиалга, админы удирдлагатай. Локал өгөгдлийн хадгалалт болон MongoDB холболттой.'},
    features:{en:['Account creation, email verification, login and password reset','Food categories, cart quantities, address entry and order history','Admin food management, image uploads and order status updates','Server-side validation, user/admin roles and cookie-based sessions'],mn:['Бүртгэл, имэйл баталгаажуулалт, нэвтрэлт, нууц үг сэргээх','Хоолны ангилал, сагс, хаяг, захиалгын түүх','Админы хоолны удирдлага, зураг оруулах, захиалгын төлөв солих','Серверийн шалгалт, хэрэглэгч/админ эрх, cookie session']},
    art:'food',type:'FULL-STACK APPLICATION',
    visual:'<span class="food-brand">Nom<span>Nom</span></span><span class="food-line">Good food.<br>One order away.</span><span class="food-pill">Food delivery ↗</span><img class="food-photo" src="assets/food-burger.jpg" alt="Burger dish from the NomNom project" loading="lazy"><span class="food-badge"><b>Made</b>to order.</span>'},
  {id:'movie',name:'Movie Web App',repo:'movie-web-app',categories:['frontend'],tags:['Next.js','TypeScript','TMDB API','SWR'],
    description:{en:'A movie discovery app that connects search, genres, trailers, and recommendations.',mn:'Кино хайлт, жанр, трейлер, төстэй киноны саналуудыг нэгтгэсэн апп.'},
    details:{en:'A movie discovery interface powered by the TMDB API. Next.js server routes connect the interface to movie and trailer data, while the app supports browsing categories and paginated results.',mn:'TMDB API ашигладаг кино хайх апп. Next.js серверийн route-аар кино, трейлерийн мэдээлэл авч, ангиллаар үзэх болон хуудсаар хуваасан үр дүнг харуулдаг.'},
    features:{en:['Movie search with a dedicated results page','Genre browsing, popular, upcoming and top-rated categories','Movie detail pages, trailers and similar movies','Loading, empty, and error states with light/dark theme support'],mn:['Кино хайлт, хайлтын үр дүнгийн хуудас','Жанр болон алдартай, удахгүй гарах, өндөр үнэлгээтэй кинонууд','Киноны дэлгэрэнгүй, трейлер, төстэй кинонууд','Ачаалалт, алдаа, хоосон төлөв, цайвар/бараан горим']},
    art:'movie',type:'MOVIE DISCOVERY / API',
    visual:'<span class="movie-beam"></span><span class="movie-title">MOVIE<br><span>discovery.</span></span><span class="movie-play">▷</span><span class="movie-caption">SEARCH. DISCOVER. WATCH TRAILERS.</span>'},
  {id:'ai',name:'AI Image Models',repo:'ai-image-models',categories:['ai','fullstack'],tags:['Next.js','Gemini','Image generation','API routes'],
    description:{en:'A playground for food image generation, image understanding, and AI conversations.',mn:'Хоолны зураг үүсгэх, зураг шинжлэх, AI-тай харилцах туршилтын апп.'},
    details:{en:'An AI-powered application that connects several services through Next.js API routes. It uses external models for image generation and image analysis, making their capabilities usable through a web interface.',mn:'Next.js API route-аар AI үйлчилгээнүүдийг холбосон апп. Гаднын модель ашиглан зураг үүсгэх, зураг шинжлэх боломжийг вэб интерфейсээр хүргэдэг.'},
    features:{en:['Prompt-based food image generation through Pollinations','Food image analysis with Gemini','Separate server routes for generation, analysis, chat and ingredients','Server-side API keys, request validation and error handling'],mn:['Pollinations ашиглан текстээс хоолны зураг үүсгэх','Gemini-гаар хоолны зураг шинжлэх','Зураг үүсгэх, шинжлэх, чат, орцын тусдаа серверийн route','API түлхүүрийг серверт хадгалах, хүсэлт шалгах, алдаа боловсруулах']},
    art:'ai',type:'AI TOOLS / API INTEGRATION',
    visual:'<span class="ai-shape"></span><span class="ai-dot"></span><span class="ai-title">A prompt.<br><em>A possibility.</em></span>'},
  {id:'quiz',name:'AI Quiz App',repo:'quiz-app',categories:['ai','fullstack'],tags:['Next.js','PostgreSQL','Prisma','Clerk','Gemini'],
    description:{en:'Articles become summaries and quizzes, with authentication and a connected database.',mn:'Нийтлэлээс хураангуй, quiz үүсгэдэг, нэвтрэлт ба өгөгдлийн сантай апп.'},
    details:{en:'A full-stack learning project built with Next.js, Clerk authentication, Gemini, and a PostgreSQL database accessed through Prisma. The data model connects articles, quizzes, and questions.',mn:'Next.js, Clerk нэвтрэлт, Gemini болон Prisma-гаар холбосон PostgreSQL өгөгдлийн сан ашигладаг full-stack сургалтын апп. Өгөгдлийн загвар нь нийтлэл, quiz, асуултуудыг холбоно.'},
    features:{en:['User authentication with Clerk','AI-generated article summaries and quizzes','Related article, quiz and question data models','User-scoped server routes and input validation'],mn:['Clerk ашигласан хэрэглэгчийн нэвтрэлт','AI ашиглан нийтлэлийн хураангуй, quiz үүсгэх','Нийтлэл, quiz, асуултын холбоост өгөгдлийн загвар','Хэрэглэгчээр ялгасан серверийн route, оролтын шалгалт']},
    art:'quiz',type:'FULL-STACK / AI LEARNING',
    visual:'<span class="quiz-sheet"><b>Learn something.<br>Remember more.</b><span class="quiz-option chosen" style="display:block">A &nbsp; Curiosity is the starting point. ✓</span><span class="quiz-option" style="display:block">B &nbsp; Keep exploring.</span><span class="quiz-option" style="display:block">C &nbsp; Try something new.</span></span><span class="quiz-star">✳</span>'},
  {id:'child',name:'TO child',repo:'to-child',categories:['frontend'],tags:['HTML','CSS','JavaScript','localStorage','IndexedDB'],sourcePrivate:true,
    description:{en:'A prototype that helps kindergarten teachers record observations and share child development updates with parents.',mn:'Цэцэрлэгийн багшийн ажиглалт, тайлан болон эцэг эхтэй мэдээлэл хуваалцах урсгалыг хялбарчлах прототип.'},
    details:{en:'Teacher and parent views connect observations, advice, home activities and report drafts. This UI and workflow prototype stores demo data in the browser; server authentication, device sync and AI services are planned.',mn:'Багш, эцэг эхийн харагдацтай. Ажиглалт бүртгэх, зөвлөгөө бэлтгэх, гэрийн үйл ажиллагаа тэмдэглэх, тайлангийн ноорог гаргах урсгалыг туршсан. Энэ нь хөтөчид өгөгдөл хадгалдаг UI болон ажлын урсгалын прототип; серверийн нэвтрэлт, төхөөрөмж хоорондын синк, AI холболт цаашдын хөгжүүлэлтэд орно.'},
    type:'EDUCATION / UI PROTOTYPE'},
  {id:'dental',name:'Tsemgar Dental Clinic',repo:'tsemgar-dental-clinic',categories:['frontend'],tags:['HTML','CSS','JavaScript','localStorage'],sourcePrivate:true,
    description:{en:'A dental clinic workflow demo for appointments, patient records, treatments, payments and discounts.',mn:'Шүдний эмнэлгийн цаг захиалга, өвчтөний бүртгэл, эмчилгээ, төлбөр болон хөнгөлөлтийг нэг дор удирдах туршилтын вэб.'},
    details:{en:'Includes a calendar dashboard, appointment conflict checks, treatment history, payment and discount calculations, and appointment CSV export. Demo data stays in the browser; staff authentication, a shared database and live SMS are not connected.',mn:'Календарьтай хяналтын самбар, эмчийн цагийн давхардал шалгах, эмчилгээний түүх, үнэ ба хөнгөлөлтийн тооцоо, захиалгын CSV экспорттой. Жишээ өгөгдөл хөтөчид хадгалагдана; ажилтны нэвтрэлт, нэгдсэн өгөгдлийн сан болон бодит SMS үйлчилгээ хараахан холбоогүй.'},
    progressNote:{en:'Browser-local demo · Private repository',mn:'Хөтөчид өгөгдөл хадгалдаг туршилтын хувилбар · Private repository'},
    type:'CLINIC MANAGEMENT / PROTOTYPE'},
  {id:'calculator',name:'Calculator',repo:'Calculator-2',categories:['frontend'],tags:['HTML','CSS','JavaScript'],
    description:{en:'A desktop-style calculator with arithmetic, percentages and memory controls.',mn:'Үндсэн дөрвөн үйлдэл, хувь болон санах ойн товчлууруудтай ширээний тооны машины вэб хувилбар.'},
    details:{en:'Built with HTML, CSS and JavaScript. Includes square roots, sign changes, memory operations, a grand total and calculation history.',mn:'HTML, CSS, JavaScript ашиглан бүтээсэн. Язгуур олох, тэмдэг солих, санах ойд нэмэх ба хасах, нийт дүн болон тооцооллын түүх харах боломжтой.'},
    type:'INTERACTIVE TOOL / FRONTEND'},
  {id:'apple',name:'Apple Web',repo:'Apple',categories:['frontend'],tags:['HTML','CSS','Responsive layout'],
    description:{en:'An Apple-inspired product landing page built as a frontend layout exercise.',mn:'Apple-ийн бүтээгдэхүүн танилцуулах хуудаснаас санаа авсан frontend загварын дадлагын төсөл.'},
    details:{en:'Product hero sections, a product grid and media rows built with HTML and CSS, with separate tablet and mobile styles. A visual practice project without a checkout backend.',mn:'Бүтээгдэхүүний том зурагт хэсгүүд, картын grid болон медиа мөрүүдийг HTML, CSS-ээр хийсэн. Таблет, гар утасны тусдаа загвартай; худалдан авалтын backend холбоогүй UI дадлагын хуудас.'},
    type:'PRODUCT LANDING / UI PRACTICE'},
  {id:'pinetour',name:'Pinetour',repo:'Pinetour',categories:['frontend'],tags:['HTML','CSS','Flexbox'],
    description:{en:'A Mongolia travel landing page with destinations, a five-day itinerary and tour packages.',mn:'Монголын аяллын чиглэлүүд, таван өдрийн маршрут болон аяллын багцуудыг танилцуулах landing page.'},
    details:{en:'A static HTML and CSS layout featuring a scenic hero, destination cards, itinerary hover states and pricing cards. Built as a frontend practice project.',mn:'Байгалийн зурагтай нүүр хэсэг, аяллын газрын карт, маршрут дээрх hover дүрслэл болон үнийн багцуудтай. HTML, CSS ашиглан хийсэн frontend дадлагын төсөл.'},
    type:'TRAVEL LANDING / FRONTEND'},
  {id:'form',name:'Multi-step Form',repo:'multi-step-form',categories:['frontend'],tags:['React','Next.js','TypeScript','Form state'],
    description:{en:'A guided form experience, broken into clear steps with a dedicated success state.',mn:'Хэрэглэгчийг алхам алхмаар хөтөлдөг, амжилтын тусдаа төлөвтэй form интерфейс.'},
    details:{en:'A React and Next.js form project structured around three separate step components and a success screen. It explores form state, input validation and a clear progression through the flow.',mn:'Гурван тусдаа алхмын компонент болон амжилтын дэлгэцтэй React, Next.js form төсөл. Төлөв удирдах, оролт шалгах, алхмуудын урсгалыг ойлгомжтой болгох ажлыг хамардаг.'},
    features:{en:['Three separate form step components','Input validation and step progression','Shared form state across the flow','A focused completion and success screen'],mn:['Form-ийн гурван тусдаа алхмын компонент','Оролтын шалгалт болон алхам шилжих урсгал','Алхмуудын хоорондох нэгдсэн төлөв','Бөглөж дууссан амжилтын дэлгэц']},
    art:'form',type:'FORM EXPERIENCE / FRONTEND',
    visual:'<span class="form-card"><span class="form-steps"><i></i><i></i><i></i></span><strong>One step at a time.</strong><p>A little information. A smoother experience.</p><span class="form-field" style="display:block">Your name</span><span class="form-field" style="display:block">Your email</span><span class="form-next" style="display:block">Continue →</span></span>'}
];


Object.assign(translations.en, {screenStatus:'IDEAS, CONNECTED.',screenIntro:'Thoughtful interfaces. Connected APIs. Real applications. I bring every layer together.',languageLabel:'LANGUAGE',themeLabel:'APPEARANCE',night:'NIGHT',day:'DAY',screenExplore:'EXPLORE MY WORK',screenIndex:'SELECTED WORK',screenProjects:'PROJECTS TO EXPLORE',screenHello:'SAY HELLO ↗',screenSignoff:'BUILT WITH CURIOSITY.',screenBack:'BACK TO HOME'});
Object.assign(translations.mn, {screenStatus:'САНААГ БОДИТ БОЛГОНО.',screenIntro:'Интерфейс, API, өгөгдөл — бүх хэсгийг нь холбож, бодитоор ашиглах апп бүтээнэ.',languageLabel:'ХЭЛ',themeLabel:'ГОРИМ',night:'ШӨНӨ',day:'ӨДӨР',screenExplore:'МИНИЙ ТӨСЛҮҮД',screenIndex:'СОНГОСОН АЖЛУУД',screenProjects:'ТӨСЛИЙГ НЭЭЖ ҮЗЭХ',screenHello:'ХОЛБОГДОХ ↗',screenSignoff:'СОНИУЧ ЗАНГААС БҮТЭЭВ.',screenBack:'НҮҮР РҮҮ БУЦАХ'});

Object.assign(translations.en, {navWork:'Projects',navAbout:'About',navContact:'Contact',displayName:'MYAGMARSUREN',enterSpace:'MY SPACE',spaceInvitation:'Leave Earth. Explore the boundless universe.',cityName:'ULAANBAATAR',latitude:'LAT',longitude:'LON',altitude:'ALTITUDE',altitudeValue:'≈ 1,350 M',latitudeValue:'47.9184° N',longitudeValue:'106.9177° E',scaleNote:'An artistic view; sizes and distances are not to scale.',spaceFallback:'Explore my projects from the menu.'});
Object.assign(translations.mn, {navAbout:'Тухай',navContact:'Холбоо',displayName:'МЯГМАРСҮРЭН',enterSpace:'MY SPACE',spaceInvitation:'Дэлхийгээс гарч, хязгааргүй уудам огторгуйгаар аялацгаая.',cityName:'УЛААНБААТАР',latitude:'ӨРГӨРӨГ',longitude:'УРТРАГ',altitude:'Д.Т.ДЭЭШ',altitudeValue:'≈ 1,350 М',latitudeValue:'47.9184° ХӨ',longitudeValue:'106.9177° ЗУ',scaleNote:'Уран сайхны дүрслэл; хэмжээ, зай нь бодит харьцаатай биш.',spaceFallback:'Цэснээс миний төслүүдийг нээж үзээрэй.'});

Object.assign(translations.en, {"aboutLabel": "02 / ABOUT ME", "aboutTitle1": "Hello.", "aboutTitle2": "I'm Myagmarsuren.", "aboutLead": "I automated dental clinic services including registration, appointment booking, payments and discounts.", "aboutBody": "I am collaborating on a web and mobile app to reduce paperwork for kindergarten teachers. I am responsible for the software development as part of a kindergarten methodologist's master's thesis.", "aboutBody2": "I have more than five years of experience working as an executive assistant.", "aboutBody3": "I have also managed a team of more than 20 people at a tourist camp."});
Object.assign(translations.mn, {"aboutLabel": "02 / МИНИЙ ТУХАЙ", "aboutTitle1": "Сайн байна уу.", "aboutTitle2": "Намайг Мягмарсүрэн гэдэг.", "aboutLead": "Шүдний эмнэлгийн бүртгэл, цаг захиалга, төлбөр болон хөнгөлт зэрэг үйлчилгээг автоматжуулсан.", "aboutBody": "Цэцэрлэгийн багш нарын бичиг цаасны ажлыг хялбарчлах зорилгоор вэб болон мобайл апп-ыг цэцэрлэгийн арга зүйчийн магистрын дипломын ажлыг программ хангамж талаас нь хариуцаж хамтарч хийж байгаа.", "aboutBody2": "5 гаруй жилийн захирлын туслах хийсэн туршлагатай.", "aboutBody3": "20 гаруй хүнтэй жуулчны баазын багийг хариуцаж байсан туршлагатай."});


projects.push(
  {id:'halo',name:'HALO',repository:'pinecone-studio/pinequest-s5-episode-1-team-11',type:'TEAM PROJECT / WEB & MOBILE',tags:['React Native','Expo','TypeScript','Supabase'],
    description:{en:'A team project for monitoring home safety and notifying caregivers about potential hazards.',mn:'Гэрийн орчны аюултай нөхцөлийг ажиглаж, асран хамгаалагчид мэдэгдэх зорилготой багийн төсөл.'},
    details:{en:'A web and mobile system connecting camera monitoring, event records and caregiver alerts.',mn:'Вэб болон мобайл хувилбартай, камерын хяналт, үйл явдлын бүртгэл, асран хамгаалагчийн мэдэгдлийг холбох систем.'},
    contribution:{en:'Originated the project idea and contributed to research and mobile development: app foundation, household settings, dashboard, event history and critical-alert screens, plus household and event data integration.',mn:'Төслийн санааг гаргаж, судалгаа болон мобайл хөгжүүлэлт дээр ажилласан. Аппын суурь, гэр бүлийн тохиргоо, нүүрийн самбар, үйл явдлын түүх, яаралтай мэдэгдлийн дэлгэц болон өгөгдөлтэй холбох хэсгийг хөгжүүлсэн.'},
    prs:'https://github.com/pinecone-studio/pinequest-s5-episode-1-team-11/pulls?q=is%3Apr+author%3Amegnamigi'},
  {id:'nudkhen',name:'Нүдхэн',repository:'pinecone-studio/pinequest-s5-episode-2-team-2',type:'TEAM PROJECT / WEB & MOBILE',tags:['React Native','Expo','TypeScript','SQLite'],
    description:{en:'A team project with web and mobile versions for children’s eye-health checks, result history and advice for parents.',mn:'Хүүхдийн нүдний ажиглалт, үр дүнгийн түүх болон эцэг эхэд зориулсан зөвлөгөөтэй, вэб болон мобайл хувилбартай багийн төсөл.'},
    details:{en:'The iPhone app processes checks on the device and suggests when an eye-doctor visit may be needed, without making a diagnosis.',mn:'iPhone апп нь төхөөрөмж дээр ажиглалт боловсруулж, нүдний эмчид хандах шаардлагыг сануулах зориулалттай; онош тавихгүй.'},
    contribution:{en:'Contributed to research and mobile development: Expo app foundation, SQLite storage, child profiles, scan results, onboarding and profile dashboard. Added illustrated daily advice and an accessible swipe carousel.',mn:'Судалгаа болон мобайл хөгжүүлэлт дээр ажилласан. Expo аппын суурь, SQLite хадгалалт, хүүхдийн профайл, ажиглалтын үр дүн, onboarding болон профайлын самбар хөгжүүлсэн. Зурагт өдөр тутмын зөвлөгөө болон хажуу тийш гүйлгэх зөвлөгөөний хэсэг хийсэн.'},
    prs:'https://github.com/pinecone-studio/pinequest-s5-episode-2-team-2/pulls?q=is%3Apr+author%3Amegnamigi'},
  {id:'realify',name:'Realify3D',type:'TEAM PROJECT / 3D COMMERCE',tags:['UI design','UX design'],stackLabel:{en:'DESIGN',mn:'ДИЗАЙН'},
    description:{en:'A product presentation website for exploring online products in 3D and AR.',mn:'Онлайн дэлгүүрийн бүтээгдэхүүнийг 3D болон AR-аар үзэх боломжийг танилцуулах вэб.'},
    details:{en:'The website presents the Chrome extension workflow, interactive product previews and WebAR.',mn:'Chrome өргөтгөлийн ажиллах урсгал, бүтээгдэхүүний интерактив дүрслэл болон WebAR боломжийг танилцуулдаг.'},
    contribution:{en:'Responsible for UI/UX design in a team of three.',mn:'3 хүнтэй багт UI/UX дизайн хариуцан ажилласан.'}},
  {id:'classpulse',name:'ClassPulse',type:'TEAM PROJECT / WEB DESIGN',tags:['UI design','UX design'],stackLabel:{en:'DESIGN',mn:'ДИЗАЙН'},
    description:{en:'A website introducing an AI app for detecting sleeping or phone use in classroom camera footage.',mn:'Ангийн камерын дүрс дэх унтаж эсвэл утас оролдож буй сурагчийг илрүүлэх AI аппыг танилцуулах вэб.'},
    details:{en:'The landing page introduces a Windows and macOS trial, the app workflow and the download option.',mn:'Windows, macOS-ийн туршилтын хувилбар, аппын ажиллах урсгал болон татах боломжийг танилцуулдаг.'},
    contribution:{en:'Responsible for UI/UX design in a team of five.',mn:'5 хүнтэй багт UI/UX дизайн хариуцан ажилласан.'}}
);

const projectPresentation = {
  food: {group:'own', live:'https://food-delivery-seven-orcin.vercel.app/', image:'assets/projects/food.webp', title:{en:'Food delivery',mn:'Хоол хүргэлт'}},
  movie: {group:'own', live:'https://movie-web-app-nu-eight.vercel.app/', image:'assets/projects/movie.webp', title:{en:'Movie discovery',mn:'Кино ертөнц'}},
  ai: {group:'own', live:'https://ai-image-models-gamma.vercel.app/', image:'assets/projects/ai.webp', title:{en:'AI image tools',mn:'AI зурагтай ажиллах нь'}},
  quiz: {group:'own', live:'https://quiz-app-tawny-five-86.vercel.app/', title:{en:'AI Quiz',mn:'AI асуулт, хариулт'}},
  child: {group:'own', live:'https://to-child.vercel.app/', image:'assets/projects/child.png', title:{en:'TO child',mn:'TO child'}},
  dental: {group:'own', live:'https://tsemgar-dental-clinic.vercel.app/', image:'assets/projects/dental.png', title:{en:'Tsemgar Dental Clinic',mn:'Цэмгар шүдний эмнэлэг'}},
  calculator: {group:'own', live:'https://calculator-2-sage.vercel.app/', image:'assets/projects/calculator.png', title:{en:'Calculator',mn:'Тооны машин'}},
  apple: {group:'own', live:'https://apple-one-indol.vercel.app/', image:'assets/projects/apple.png', title:{en:'Apple Web',mn:'Apple Web'}},
  pinetour: {group:'own', live:'https://pinetour-brown-rho.vercel.app/', image:'assets/projects/pinetour.png', title:{en:'Pinetour',mn:'Pinetour'}},
  form: {group:'own', live:'https://multi-step-form-ruddy-five.vercel.app/', image:'assets/projects/form.png', title:{en:'Multi-step form',mn:'Алхамт бүртгэл'}},
  halo: {group:'team', live:'https://halo-team11.vercel.app/', image:'assets/projects/halo.png', title:{en:'HALO',mn:'HALO'}},
  nudkhen: {group:'team', image:'assets/projects/nudkhen.png', video:'assets/projects/nudkhen-demo.mp4', appUrl:'studio.pinecone.pinequest.team2:///', previewFormat:'mobile', imageWidth:792, imageHeight:1722, title:{en:'Нүдхэн',mn:'Нүдхэн'}},
  realify: {group:'team', live:'https://realify3d.vercel.app/#commerce', image:'assets/projects/realify.png', title:{en:'Realify3D',mn:'Realify3D'}},
  classpulse: {group:'team', live:'https://classpulse-eosin.vercel.app/', image:'assets/projects/classpulse.png', imageWidth:3024, imageHeight:1964, browserCapture:true, title:{en:'ClassPulse',mn:'ClassPulse'}}
};
projects.forEach(project => Object.assign(project, projectPresentation[project.id]));
const teamProjectOrder = ['nudkhen','halo','classpulse','realify'];
const orderedTeamProjects = projects.filter(project => project.group === 'team')
  .sort((a,b) => teamProjectOrder.indexOf(a.id) - teamProjectOrder.indexOf(b.id));
projects.splice(0, projects.length, ...projects.filter(project => project.group !== 'team'), ...orderedTeamProjects);
Object.assign(translations.en, {ownProjects:'My Own Projects',teamProjects:'Team Projects',visitSite:'Visit site',sourceCode:'GitHub',previousProject:'Previous project',nextProject:'Next project',projectScope:'PROJECT',projectStack:'TECHNOLOGIES',noTeamTitle:'Team projects',noTeamBody:'Team projects will appear here soon.',noPreview:'SOURCE CODE',siteUnavailable:'Live site is currently unavailable',codeOnly:'Explore the source on GitHub',openNewTab:'opens in a new tab',projectView:'PROJECTS',projectPreview:'Actual project screenshot'});
Object.assign(translations.mn, {ownProjects:'My Own Projects',teamProjects:'Team Projects',visitSite:'Сайт үзэх',sourceCode:'GitHub',previousProject:'Өмнөх төсөл',nextProject:'Дараах төсөл',projectScope:'ТӨСЛИЙН ТУХАЙ',projectStack:'ТЕХНОЛОГИ',noTeamTitle:'Багийн төслүүд',noTeamBody:'Багийн төслүүд удахгүй энд нэмэгдэнэ.',noPreview:'ТӨСЛИЙН КОД',siteUnavailable:'Сайт одоогоор нээгдэхгүй байна',codeOnly:'GitHub-аас төслийн кодыг үзэх',openNewTab:'шинэ табд нээгдэнэ',projectView:'ТӨСЛҮҮД',projectPreview:'Төслийн бодит зураг'});

Object.assign(translations.en, {entryHome:'Home',cityName:'Ulaanbaatar, Mongolia',weatherCredit:'Weather data'});
Object.assign(translations.mn, {entryHome:'Нүүр',cityName:'Ulaanbaatar, Mongolia',weatherCredit:'Цаг агаарын эх сурвалж'});
translations.en.scrollProjects = 'Scroll to explore ↔';
translations.mn.scrollProjects = 'Хажуу тийш гүйлгэж үзэх ↔';
translations.en.privateSource = 'GitHub (private)';
translations.mn.privateSource = 'GitHub (private)';
translations.en.prototypeNote = 'In development · Private source repository';
translations.mn.prototypeNote = 'Хөгжүүлж буй прототип · Эх кодын repository private';
Object.assign(translations.en, {activityPeriod:'Contributions over the past year',activityProfile:'View GitHub profile',activityProfileLabel:'View megnamigi’s contributions on GitHub, opens in a new tab'});
Object.assign(translations.mn, {activityPeriod:'Сүүлийн нэг жилийн contributions',activityProfile:'GitHub профайл үзэх',activityProfileLabel:'megnamigi-ийн GitHub contributions үзэх, шинэ табд нээгдэнэ'});
Object.assign(translations.en, {myContribution:'MY CONTRIBUTION',myPullRequests:'My pull requests',teamPreview:'TEAM PROJECT · WEB & MOBILE',mobilePreview:'MOBILE APP · iPhone'});
Object.assign(translations.mn, {myContribution:'МИНИЙ ОРОЛЦОО',myPullRequests:'Миний PR-ууд',teamPreview:'БАГИЙН ТӨСӨЛ · ВЭБ & МОБАЙЛ',mobilePreview:'МОБАЙЛ АПП · iPhone'});
Object.assign(translations.en, {demoVideo:'Demo video · iPhone Simulator',demoVideoLabel:'Silent demo of the Home, advice, games and test menus',downloadVideo:'Download video'});
Object.assign(translations.mn, {demoVideo:'Демо видео · iPhone симулятор',demoVideoLabel:'Нүүр, зөвлөгөө, тоглоом болон шалгалтын цэсийг харуулах дуугүй демо',downloadVideo:'Видео татах'});
Object.assign(translations.en, {openNativeApp:'Open app on iPhone',nativeAppNote:'Requires Нүдхэн already installed on your iPhone. If it is not installed, you can watch the demo video here.'});
Object.assign(translations.mn, {openNativeApp:'iPhone дээр апп нээх',nativeAppNote:'Нүдхэн апп өмнө нь суусан iPhone дээр нээгдэнэ. Суулгаагүй бол эндээс демо видеог үзээрэй.'});

const modeIcons = {dark:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-mode-icon="dark"><path d="M20.7 13.2A8.9 8.9 0 0 1 10.8 3.3 9 9 0 1 0 20.7 13.2Z"/></svg>`,light:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true" data-mode-icon="light"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>`};

let language = 'en';
let activeProjectGroup = 'own';
const selectedProjects = {own:'food', team:null};
let toastTimer;
const grid = document.getElementById('project-grid');
const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));

function readPreference(key, fallback) { try { return localStorage.getItem(key) || fallback; } catch { return fallback; } }
function savePreference(key, value) { try { localStorage.setItem(key, value); } catch {} }

function renderProjects() {
  const t = translations[language];
  const visible = projects.filter(project => project.group === activeProjectGroup);
  const project = visible.find(project => project.id === selectedProjects[activeProjectGroup]) || visible[0];
  const navigation = document.getElementById('project-navigation');
  document.querySelectorAll('[data-project-group]').forEach(button => {
    const selected = button.dataset.projectGroup === activeProjectGroup;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  navigation.hidden = !project;
  document.getElementById('project-scroll-hint').hidden = !project;
  document.getElementById('project-early').hidden = activeProjectGroup !== 'own';
  if (!project) {
    document.getElementById('project-announcement').textContent = t.noTeamTitle;
    grid.innerHTML = `<div class="team-empty"><span class="team-constellation" aria-hidden="true">✦ · ✧</span><h2>${t.noTeamTitle}</h2><p>${t.noTeamBody}</p></div>`;
    return;
  }
  selectedProjects[activeProjectGroup] = project.id;
  const selectedIndex = visible.indexOf(project);
  grid.innerHTML = visible.map((project, index) => {
  const github = project.repository ? `https://github.com/${project.repository}` : project.repo ? `https://github.com/megnamigi/${project.repo}` : null;
  const live = project.live && !project.unavailable;
  const destination = live ? project.live : project.prs || github;
  const destinationLabel = live ? t.visitSite : project.prs ? t.myPullRequests : project.sourcePrivate ? t.privateSource : t.codeOnly;
  const nativeAction = project.appUrl ? `<a class="showcase-live" href="${project.appUrl}" aria-describedby="native-note-${project.id}">${t.openNativeApp}<span aria-hidden="true">↗</span></a>` : '';
  const preview = project.video
    ? `<video controls playsinline preload="metadata" poster="${project.image}" aria-label="${escapeHTML(project.name + ': ' + t.demoVideoLabel)}"><source src="${project.video}" type="video/mp4"><a href="${project.video}" download>${t.downloadVideo}</a></video>`
    : project.image
    ? `${project.browserCapture ? '<div class="browser-capture">' : ''}<img src="${project.image}" width="${project.imageWidth || 1280}" height="${project.imageHeight || 800}" alt="${escapeHTML(t.projectPreview + ': ' + project.name + (project.previewFormat === 'mobile' ? ' · ' + t.mobilePreview : ''))}" decoding="async" loading="lazy">${project.browserCapture ? '</div>' : ''}`
    : `<div class="project-code-preview"><span>${project.group === 'team' || live || project.sourcePrivate ? escapeHTML(project.type) : t.noPreview}</span><strong>${escapeHTML(project.name)}</strong><code>${escapeHTML(project.tags.join(' / '))}</code></div>`;
  return `<article class="project-showcase" data-project-id="${project.id}" aria-labelledby="showcase-title-${project.id}" role="group" aria-roledescription="${language === 'mn' ? 'Слайд' : 'Slide'}" aria-label="${index+1} / ${visible.length}">
    <div class="showcase-copy"><p class="showcase-kicker"><span>${String(index+1).padStart(2,'0')} / ${String(visible.length).padStart(2,'0')}</span>${escapeHTML(project.type)}</p>
      <h2 id="showcase-title-${project.id}">${escapeHTML(project.title[language])}</h2>
      <p class="showcase-summary">${escapeHTML(project.description[language])}</p>
      ${project.details[language] ? `<p class="showcase-details">${escapeHTML(project.details[language])}</p>` : ''}
      ${project.contribution ? `<div class="showcase-contribution"><span>${t.myContribution}</span><p>${escapeHTML(project.contribution[language])}</p></div>` : ''}
      <div class="showcase-stack"><span>${escapeHTML(project.stackLabel?.[language] || t.projectStack)}</span><p>${project.tags.map(escapeHTML).join(' · ')}</p></div>
      <div class="showcase-actions">${nativeAction}${project.prs ? `<a class="showcase-prs" href="${project.prs}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(t.myPullRequests + ': ' + project.name + ', ' + t.openNewTab)}">${t.myPullRequests}<span aria-hidden="true">↗</span></a>` : ''}${live ? `<a class="showcase-live" href="${project.live}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(t.visitSite + ': ' + project.name + ', ' + t.openNewTab)}">${t.visitSite}<span aria-hidden="true">↗</span></a>` : ''}${github ? `<a class="showcase-github" href="${github}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML((project.sourcePrivate ? t.privateSource : 'GitHub') + ': ' + project.name + ', ' + t.openNewTab)}">${project.sourcePrivate ? t.privateSource : 'GitHub'} <span aria-hidden="true">↗</span></a>` : ''}</div>
      ${project.appUrl ? `<p class="showcase-note" id="native-note-${project.id}">${escapeHTML(t.nativeAppNote)}</p>` : ''}
      ${project.unavailable ? `<p class="showcase-note">${t.siteUnavailable}</p>` : ''}
      ${project.sourcePrivate ? `<p class="showcase-note">${escapeHTML(project.progressNote?.[language] || t.prototypeNote)}</p>` : ''}
    </div>
    <${project.video ? 'div' : 'a'} class="showcase-preview${project.image ? '' : ' is-code'}${project.previewFormat === 'mobile' ? ' is-mobile-preview' : ''}${project.video ? ' is-video-preview' : ''}" ${project.video ? '' : `href="${destination}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(destinationLabel + ': ' + project.name + ', ' + t.openNewTab)}"`}>
      <div class="preview-toolbar" aria-hidden="true"><span class="preview-dots"><i></i><i></i><i></i></span><span>${project.previewFormat === 'mobile' ? t.mobilePreview : live ? new URL(project.live).hostname : 'github.com / ' + (project.repository?.split('/')[0] || 'megnamigi')}</span><span>${project.video ? '▶' : '↗'}</span></div>${preview}<span class="preview-cta">${project.video ? t.demoVideo : destinationLabel}${project.video ? '' : '<span aria-hidden="true">↗</span>'}</span>
    </${project.video ? 'div' : 'a'}>
  </article>`;
  }).join('');
  document.getElementById('project-index').innerHTML = visible.map((item,i) => `<button type="button" data-select-project="${item.id}" aria-pressed="false"><span>${String(i+1).padStart(2,'0')}</span>${escapeHTML(item.name)}</button>`).join('');
  grid.setAttribute('role', 'region');
  grid.setAttribute('aria-label', language === 'mn' ? 'Төслүүдийг баруун, зүүн тийш гүйлгэх' : 'Scroll projects left or right');
  grid.tabIndex = 0;
  requestAnimationFrame(() => {
    grid.scrollTo({left:Math.max(0,selectedIndex) * grid.clientWidth, behavior:'instant'});
    updateProjectPosition();
  });
}

function updateProjectPosition() {
  const visible = projects.filter(project => project.group === activeProjectGroup);
  if (!visible.length || !grid.clientWidth) return;
  const index = Math.max(0,Math.min(visible.length-1,Math.round(grid.scrollLeft / grid.clientWidth)));
  const project = visible[index];
  selectedProjects[activeProjectGroup] = project.id;
  [...grid.children].forEach((card,i) => {
    card.classList.toggle('is-current',i === index);
    if (i !== index) card.querySelectorAll('video').forEach(video => video.pause());
  });
  document.querySelectorAll('[data-select-project]').forEach(button => {
    const active = button.dataset.selectProject === project.id;
    button.classList.toggle('active',active);
    button.setAttribute('aria-pressed',String(active));
  });
  document.getElementById('project-position').textContent = `${String(index+1).padStart(2,'0')} / ${String(visible.length).padStart(2,'0')}`;
  const announcement = document.getElementById('project-announcement');
  const text = `${index+1} / ${visible.length}: ${project.name}`;
  if (announcement.textContent !== text) announcement.textContent = text;
  document.querySelector('[data-project-step="-1"]').disabled = index === 0;
  document.querySelector('[data-project-step="1"]').disabled = index === visible.length-1;
}

function scrollToProject(id) {
  const cards = [...grid.querySelectorAll('[data-project-id]')];
  const index = cards.findIndex(card => card.dataset.projectId === id);
  if (index < 0) return;
  grid.scrollTo({left:index * grid.clientWidth,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
}
let projectScrollFrame;
grid.addEventListener('scroll', () => {
  cancelAnimationFrame(projectScrollFrame);
  projectScrollFrame = requestAnimationFrame(updateProjectPosition);
}, {passive:true});
grid.addEventListener('keydown', event => {
  if (event.target !== grid || !['ArrowLeft','ArrowRight'].includes(event.key)) return;
  event.preventDefault();
  const cards = [...grid.querySelectorAll('[data-project-id]')];
  const current = Math.round(grid.scrollLeft / grid.clientWidth);
  const next = cards[current + (event.key === 'ArrowRight' ? 1 : -1)];
  if (next) scrollToProject(next.dataset.projectId);
});
let projectTrackWidth = 0;
new ResizeObserver(() => {
  if (!grid.clientWidth || grid.clientWidth === projectTrackWidth) return;
  projectTrackWidth = grid.clientWidth;
  const cards = [...grid.querySelectorAll('[data-project-id]')];
  const index = cards.findIndex(card => card.dataset.projectId === selectedProjects[activeProjectGroup]);
  if (index >= 0) grid.scrollTo({left:index * grid.clientWidth,behavior:'instant'});
}).observe(grid);

function setLanguage(nextLanguage) {
  language = translations[nextLanguage] ? nextLanguage : 'en';
  document.documentElement.lang = language;
  const t = translations[language];
  document.querySelectorAll('[data-i18n]').forEach(element => { element.textContent = t[element.dataset.i18n]; });
  document.querySelectorAll('[data-i18n-aria]').forEach(element => element.setAttribute('aria-label',t[element.dataset.i18nAria]));
  document.querySelectorAll('[data-language]').forEach(button => {
    const selected = button.dataset.language === language;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  document.title = language === 'en' ? 'Myagmarsuren — Full-stack Developer' : 'Мягмарсүрэн — Full-stack хөгжүүлэгч';
  document.querySelectorAll('[data-close-panel]').forEach(button => button.setAttribute('aria-label', t.screenBack));
  document.querySelectorAll('[data-toggle-language]').forEach(button => {
    button.textContent = language.toUpperCase();
    const label = language === 'en' ? 'English selected. Switch to Mongolian' : 'Монгол хэл сонгосон. Англи хэл рүү солих';
    button.setAttribute('aria-label',label);
    button.title = label;
  });
  updateThemeLabel();
  savePreference('my-portfolio-language', language);
  renderProjects();
  window.dispatchEvent(new Event("portfolio:language"));
}

function updateThemeLabel() {
  const dark = document.documentElement.dataset.theme === 'dark';
  document.querySelectorAll('.segmented [data-set-theme]').forEach(button => { const selected = button.dataset.setTheme === (dark ? 'dark' : 'light'); button.classList.toggle('active', selected); button.setAttribute('aria-pressed', String(selected)); });
  document.querySelector('meta[name="theme-color"]').content = dark ? '#07152c' : '#ccecff';
  document.querySelectorAll('[data-toggle-theme]').forEach(button => {
    button.innerHTML = modeIcons[dark ? 'dark' : 'light'];
    const label = language === 'mn' ? (dark ? 'Шөнийн горим идэвхтэй. Өдрийн горимд шилжих' : 'Өдрийн горим идэвхтэй. Шөнийн горимд шилжих') : (dark ? 'Night mode active. Switch to day mode' : 'Day mode active. Switch to night mode');
    button.setAttribute('aria-label',label);
    button.title = label;
  });
}

let themeTransition = null;
let themeRequest = 0;
function setTheme(theme) {
  const request = ++themeRequest;
  if (themeTransition) { themeTransition.skipTransition(); themeTransition = null; }
  const apply = () => {
    if (request !== themeRequest) return;
    document.documentElement.dataset.theme = theme;
    savePreference('my-portfolio-theme', theme);
    updateThemeLabel();
    window.dispatchEvent(new Event('portfolio:theme'));
  };
  if (theme === document.documentElement.dataset.theme || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !document.startViewTransition) { apply(); return; }
  document.documentElement.dataset.journey = theme === 'dark' ? 'launch' : 'land';
  try {
    const transition = document.startViewTransition(apply);
    themeTransition = transition;
    transition.finished.catch(() => {}).finally(() => { if (themeTransition === transition) themeTransition = null; });
  } catch { apply(); }
}
document.querySelectorAll('[data-set-theme]').forEach(button => button.addEventListener('click', () => setTheme(button.dataset.setTheme)));
document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
function revealProjectStart() {
  if (window.matchMedia('(max-width: 760px)').matches) document.getElementById('work-panel').scrollTop = 0;
}
document.querySelectorAll('[data-project-group]').forEach(button => button.addEventListener('click', () => {
  activeProjectGroup = button.dataset.projectGroup;
  renderProjects();
  revealProjectStart();
}));
document.querySelectorAll('[data-project-step]').forEach(button => button.addEventListener('click', () => {
  const visible = projects.filter(project => project.group === activeProjectGroup);
  const index = visible.findIndex(project => project.id === selectedProjects[activeProjectGroup]);
  const next = visible[index + Number(button.dataset.projectStep)];
  if (next) scrollToProject(next.id);
}));
document.getElementById('project-index').addEventListener('click', event => {
  const button = event.target.closest('[data-select-project]');
  if (!button) return;
  const id = button.dataset.selectProject;
  scrollToProject(id);
});
document.getElementById('copy-email').addEventListener('click', async () => {
  let message;
  try { await navigator.clipboard.writeText('erdenebyr.myagmarsuren@gmail.com'); message = translations[language].copied; }
  catch { message = translations[language].copyFailed; }
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 4500);
});

document.documentElement.dataset.theme = readPreference('my-portfolio-theme', 'dark') === 'light' ? 'light' : 'dark';

setLanguage(readPreference('my-portfolio-language', 'en'));

function updateNavigation() {
  const openPanelElement = document.querySelector('.site-panel[open]');
  const activePanel = openPanelElement?.id.replace('-panel', '');
  const onHome = !activePanel && document.documentElement.dataset.experience === 'entry';
  document.querySelectorAll('.entry-header nav a, .entry-header [data-open-panel], .screen-header nav button').forEach(item => {
    const isHome = item.matches('.entry-current, [data-return-home]');
    const active = isHome ? onHome : item.dataset.openPanel === activePanel;
    item.classList.toggle('is-active', active);
    if (active) item.setAttribute('aria-current', isHome ? 'page' : 'true');
    else item.removeAttribute('aria-current');
  });
}
function openPanel(name) {
  const panel = document.getElementById(name + '-panel');
  if (panel && !panel.open) { panel.showModal(); panel.scrollTop = 0; }
  updateNavigation();
}
document.querySelectorAll('.site-panel').forEach(panel => panel.addEventListener('close', () => {
  panel.querySelectorAll('video').forEach(video => video.pause());
  updateNavigation();
}));
document.querySelectorAll('[data-open-panel]').forEach(button => button.addEventListener('click', () => openPanel(button.dataset.openPanel)));
document.querySelectorAll('[data-close-panel]').forEach(button => button.addEventListener('click', () => document.getElementById(button.dataset.closePanel + '-panel').close()));
document.querySelectorAll('.site-panel').forEach(panel => panel.addEventListener('click', event => {
  if (event.target !== panel) return;
  const bounds = panel.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) panel.close();
}));

const entrance = document.querySelector('[data-enter-space]');
const home = document.querySelector('[data-return-home]');
function setExperience(entered) {
  document.documentElement.dataset.experience = entered ? 'entered' : 'entry';
  document.querySelector('.screen-header').hidden = !entered;
  document.querySelector('.cosmos-stage').hidden = !entered;
  document.querySelector('.experience-footer').hidden = !entered;
  entrance.hidden = entered;
  document.querySelector('.entry-invitation').hidden = entered;
  updateNavigation();
  window.dispatchEvent(new Event('portfolio:experience'));
  (entered ? home : entrance).focus({preventScroll:true});
}
entrance.addEventListener('click', () => {
  setExperience(true);
  activeProjectGroup = 'own';
  renderProjects();
  openPanel('work');
});
home.addEventListener('click', () => setExperience(false));
updateNavigation();

document.querySelectorAll('[data-toggle-language]').forEach(button => button.addEventListener('click', () => setLanguage(language === 'en' ? 'mn' : 'en')));
document.querySelectorAll('[data-toggle-theme]').forEach(button => button.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark')));
