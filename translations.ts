export type Lang = 'RU' | 'KZ' | 'EN'

export const t = {
  // ── Navbar ──
  nav: {
    home:        { RU: 'Главная',    KZ: 'Басты бет', EN: 'Home' },
    destinations:{ RU: 'Направления',KZ: 'Бағыттар',  EN: 'Destinations' },
    concierge:   { RU: 'Связаться с нами', KZ: 'Бізбен байланысу', EN: 'Contact Us' },
  },

  // ── Home View ──
  home: {
    eyebrow:     { RU: 'Элитный тур и визовый консьерж', KZ: 'Элиталық тур және виза консьержі', EN: 'Elite Travel & Visa Concierge' },
    headline1:   { RU: 'Искусство путешествий',          KZ: 'Саяхаттың',                        EN: 'The Art of Travel' },
    headline2:   { RU: 'без границ',                     KZ: 'шекарасыз өнері',                  EN: 'without Borders' },
    subheadline: {
      RU: 'Мы создаём путешествия, выходящие за рамки обычного — визы оформлены, маршруты составлены, каждая деталь продумана с исключительной точностью.',
      KZ: 'Біз кәдімгіден асып түсетін саяхаттарды ұйымдастырамыз — визалар рәсімделген, маршруттар белгіленген, әр бөлшек мұқият ойластырылған.',
      EN: 'We orchestrate journeys that transcend the ordinary — visas arranged, routes curated, every moment conceived with uncommon precision.',
    },
    planBtn:     { RU: 'Спланировать путешествие', KZ: 'Саяхатты жоспарлау', EN: 'Plan Your Journey' },
    scroll:      { RU: 'Скролл',                   KZ: 'Айналдыру',          EN: 'Scroll' },
    promiseEyebrow:{ RU: 'Наше обещание',          KZ: 'Біздің уәде',        EN: 'Our Promise' },
    promiseTitle1: { RU: 'Создано для',             KZ: 'Талғампаз',          EN: 'Crafted for the' },
    promiseTitle2: { RU: 'взыскательного путешественника', KZ: 'саяхатшы үшін жасалған', EN: 'Discerning Traveller' },
    pillars: [
      {
        title: { RU: 'Доступ по всему миру',  KZ: 'Дүниежүзілік қолжетімділік', EN: 'Worldwide Access' },
        desc:  { RU: 'Эксклюзивные маршруты и редкие разрешения в места, куда редко добираются туристы.', KZ: 'Саяхатшылардың аз баратын жерлерге эксклюзивті маршруттар мен сирек рұқсаттар.', EN: 'Exclusive routes and rare permits to destinations few travellers ever reach.' },
      },
      {
        title: { RU: 'Безупречные визы',      KZ: 'Мінсіз визалар',             EN: 'Flawless Visas' },
        desc:  { RU: 'Каждый документ, каждая печать, каждое одобрение — всё готово до вашего приезда.', KZ: 'Әрбір құжат, әрбір мөр, әрбір мақұлдау — сіз келгенге дейін дайын.', EN: 'Every document, every stamp, every approval — handled before you arrive.' },
      },
      {
        title: { RU: 'Сервис белых перчаток', KZ: 'Ақ қолғаптар қызметі',       EN: 'White-Glove Service' },
        desc:  { RU: 'Персональный консьерж следит за каждой деталью от первого запроса до благополучного возвращения.', KZ: 'Арнайы консьерж алғашқы сұраудан қауіпсіз оралуға дейін барлық бөлшекке назар аударады.', EN: 'A dedicated concierge attends to every detail from first inquiry to safe return.' },
      },
    ],
    destEyebrow: { RU: 'Избранные направления', KZ: 'Таңдаулы бағыттар',   EN: 'Curated Destinations' },
    destTitle1:  { RU: 'Четыре мира,',           KZ: 'Төрт әлем,',          EN: 'Four Worlds,' },
    destTitle2:  { RU: 'один консьерж',           KZ: 'бір консьерж',        EN: 'One Concierge' },
    destBody:    {
      RU: 'От древних династий Китая и залитых солнцем площадей Италии до эфирных долин Турции и нефритовых берегов Малайзии — мы открываем каждую дверь.',
      KZ: 'Қытайдың ежелгі әулеттерінен және Италияның күнмен шашыраған алаңдарынан бастап Түркияның мистикалық алқаптары мен Малайзияның жасыл жағалауларына дейін — біз кез келген есікті ашамыз.',
      EN: 'From the ancient dynasties of China and the sun-drenched piazzas of Italy, to the ethereal valleys of Turkey and the jade shores of Malaysia — we open every door.',
    },
    exploreBtn:  { RU: 'Изучить направления',  KZ: 'Бағыттарды зерттеу',  EN: 'Explore Destinations' },
    ctaEyebrow:  { RU: 'Начните свою историю', KZ: 'Өз тарихыңызды бастаңыз', EN: 'Begin Your Story' },
    ctaTitle1:   { RU: 'Ваша следующая',        KZ: 'Сіздің келесі',        EN: 'Your Next Chapter' },
    ctaTitle2:   { RU: 'глава ждёт',            KZ: 'тарауыңыз күтеді',     EN: 'Awaits' },
    ctaBody:     {
      RU: 'Одного разговора достаточно. Свяжитесь с нами, и мы создадим опыт, созданный именно для вас.',
      KZ: 'Бір сөйлесу жеткілікті. Бізге хабарласыңыз, біз сізге арнайы тәжірибе жасаймыз.',
      EN: 'A single conversation is all it takes. Reach out and let us compose an experience tailored entirely to you.',
    },
    consultBtn:  { RU: 'Запросить консультацию', KZ: 'Кеңес сұрау',        EN: 'Request a Consultation' },
  },

  // ── Destinations View ──
  destinations: {
    eyebrow:  { RU: 'Наши направления',       KZ: 'Біздің бағыттарымыз', EN: 'Our Destinations' },
    title1:   { RU: 'Четыре исключительных',  KZ: 'Төрт ерекше',         EN: 'Four Extraordinary' },
    title2:   { RU: 'мира для открытий',      KZ: 'әлем ашылуға дайын',  EN: 'Worlds to Discover' },
    subtitle: { RU: 'Каждое направление — отдельная вселенная. Мы даём вам ключи.', KZ: 'Әрбір бағыт — өзіндік әлем. Кілттерді біз беруміз.', EN: 'Each destination is a universe unto itself. We provide the keys.' },
    counter:  { RU: 'из',                     KZ: '-нан',                 EN: 'of' },
    itineraryBtn: { RU: 'Запросить индивидуальный маршрут', KZ: 'Жеке маршрут сұрау', EN: 'Request Custom Itinerary' },
    readyEyebrow: { RU: 'Готовы начать?',     KZ: 'Бастауға дайынсыз ба?', EN: 'Ready to Begin?' },
    readyTitle1:  { RU: 'Ваше путешествие начинается', KZ: 'Саяхатыңыз', EN: 'Your Journey Starts' },
    readyTitle2:  { RU: 'с разговора',         KZ: 'сөйлесуден басталады', EN: 'with a Conversation' },
    conciergeBtn: { RU: 'Поговорить с консьержем', KZ: 'Консьержмен сөйлесу', EN: 'Speak with a Concierge' },
    countries: {
      china: {
        tagline:     { RU: 'Династии, мистика и небесный горизонт', KZ: 'Әулеттер, мистика және аспан кеңістігі', EN: 'Dynasty, Mysticism & The Celestial Horizon' },
        highlights:  { RU: ['Великая стена', 'Пики Чжанцзяцзе', 'Запретный город', 'Круиз по реке Ли'], KZ: ['Ұлы Қытай қорғаны', 'Чжанцзяцзе шыңдары', 'Тыйым салынған қала', 'Ли өзені бойымен круиз'], EN: ['The Great Wall', 'Zhangjiajie Peaks', 'Forbidden City', 'Li River Cruise'] },
        description: {
          RU: 'Пройдите путями, которыми когда-то ступали императоры. Китай раскрывается как целый континент — древние династии, застывшие в камне, леса над облаками и культура, требующая целой жизни для познания. Наш консьерж открывает частный доступ к историческим местам и берёт на себя все визовые формальности.',
          KZ: 'Императорлар жүрген жолдармен жүріңіз. Қытай бүтін бір континент сияқты ашылады — тасқа қатып қалған ежелгі әулеттер, бұлттар үстіндегі ормандар және бүкіл өмір бойы танып жетуге болмайтын мәдениет.',
          EN: 'Walk paths that emperors once tread. China unfolds as a continent unto itself — ancient dynasties frozen in stone, forests that float above the clouds, and a culture so layered it takes a lifetime to read. Our concierge unlocks private access to heritage sites and manages every visa formality.',
        },
        experience: {
          RU: 'Приватный рассветный доступ в Запретный город. Круиз по реке Ли на бамбуковой лодке ручной работы. Ужин при свечах во дворе старинного хутуна.',
          KZ: 'Тыйым салынған қалаға таңертеңгі жеке кіру. Қолмен жасалған бамбук қайығымен Ли өзені бойымен круиз. Ғасырлық дворда шам жарығымен кешкі ас.',
          EN: 'Private dawn access to the Forbidden City. A cruise along the Li River in hand-carved bamboo craft. A candlelit dinner within a centuries-old courtyard hutong.',
        },
      },
      italy: {
        tagline:     { RU: 'Дольче вита — на новом уровне', KZ: 'Дольче вита — жаңа деңгейде', EN: 'La Dolce Vita, Elevated' },
        highlights:  { RU: ['Амальфийское побережье', 'Виноградники Тосканы', 'Каналы Венеции', 'Сицилия и Эолийские острова'], KZ: ['Амальфи жағалауы', 'Тоскана жүзім бақтары', 'Венеция каналдары', 'Сицилия және Эол аралдары'], EN: ['Amalfi Coast', 'Tuscany Vineyards', 'Venice Canals', 'Sicily & the Aeolian Islands'] },
        description: {
          RU: 'Италия — не просто направление, это чувственный аргумент в пользу красоты бытия. От охровых холмов Тосканы до хрустальных вод Сицилии. Мы организуем проживание на виллах с приватными шефами и эксклюзивный доступ в Ватикан.',
          KZ: 'Италия тек бағыт қана емес — бұл өмір сұлулығына сенсорлық дәлел. Тосканының алтынды төбелерінен Сицилияның мөлдір суларына дейін. Жеке аспаздарымен вилларда тұру және Ватиканға эксклюзивті кіруді ұйымдастырамыз.',
          EN: 'Italy is not simply a destination — it is a sensory argument for the beauty of existence. From the ochre hilltowns of Tuscany to the crystalline waters of Sicily. We arrange villa stays with private chefs and exclusive Vatican access.',
        },
        experience: {
          RU: 'Приватная охота за трюфелями в умбрийских холмах. Рассветная гондола по Венеции. Зарезервированный столик в мишленовской остерии в переулке Палермо.',
          KZ: 'Умбрия төбелерінде жеке трюфель аулау. Венецияда таңғы гондола сапары. Палермо көшесіндегі Мишлен жұлдызды остерияда брондалған үстел.',
          EN: 'A private truffle hunt in the Umbrian hills. A sunrise gondola across Venice before the city wakes. A reserved table at a Michelin-starred osteria tucked in a Palermo side street.',
        },
      },
      turkey: {
        tagline:     { RU: 'Там, где сходятся цивилизации', KZ: 'Өркениеттер тоғысатын жер', EN: 'Where Civilisations Converge' },
        highlights:  { RU: ['Долины Каппадокии', 'Босфор Стамбула', 'Эгейское побережье', 'Руины Эфеса'], KZ: ['Каппадокия алқаптары', 'Стамбул Боғазы', 'Эгей жағалауы', 'Эфес қирандылары'], EN: ['Cappadocia Valleys', 'Istanbul Bosphorus', 'Aegean Coast', 'Ephesus Ruins'] },
        description: {
          RU: 'Турция занимает особое место, где Восток встречается с Западом, древность — с современностью. Парите над каминными трубами на частном воздушном шаре. Ужинайте на террасе над Босфором. Мы берём на себя все визовые и транспортные формальности.',
          KZ: 'Түркия Шығыс пен Батыстың, ежелгі мен заманауидің тоғысатын ерекше орынды алады. Жеке шар ұшу арқылы мың жылдық жартас үстінде қалықтаңыз. Мадетті туристердің кетуімен Эфес қирандыларын аралаңыз.',
          EN: 'Turkey occupies a singular place where East meets West, ancient meets contemporary. Drift over fairy chimneys in a private balloon at first light. Walk through ruins that pre-date memory. We handle every visa and travel arrangement.',
        },
        experience: {
          RU: 'Полёт на шаре над Каппадокией с шампанским на высоте. Личный гид по Эфесу после закрытия для туристов. Вечерняя прогулка по Босфору на частном гулете.',
          KZ: 'Биіктікте шампан шарабымен Каппадокия үстінде шар ұшу. Туристер кеткен соң Эфес бойынша жеке гид. Жеке гулетте Босфор бойымен кешкі круиз.',
          EN: 'A private balloon flight over Cappadocia with champagne at altitude. A personal guide through Ephesus after tourist hours. An evening cruise on the Bosphorus aboard a private gulet.',
        },
      },
      malaysia: {
        tagline:     { RU: 'Тропики, риф и роскошный отдых', KZ: 'Тропиктер, риф және сәнді демалыс', EN: 'Rainforest, Reef & Refined Sanctuary' },
        highlights:  { RU: ['Архипелаг Лангкави', 'Тропики Борнео', 'Джорджтаун', 'Заповедник Таман Негара'], KZ: ['Лангкави архипелагы', 'Борнео тропиктері', 'Джорджтаун', 'Таман Негара қорығы'], EN: ['Langkawi Archipelago', 'Borneo Rainforest', 'Penang Heritage Quarter', 'Taman Negara Reserve'] },
        description: {
          RU: 'Малайзия — страна контрастов. Древние тропические леса старше амазонских, коралловые сады, наполненные жизнью, и города, где колониальная элегантность соседствует с современной культурой. От водных вилл Лангкави до дикого Борнео — мы создаём незабываемые маршруты.',
          KZ: 'Малайзия — қарама-қайшылықтар елі. Амазоннан да ескі ежелгі тропикалық ормандар, өмірге толы маржан бақтары және отарлық сәнімен заманауи мәдениет астасқан қалалар. Лангкавидің су үстіндегі виллаларынан жабайы Борнеоға дейін.',
          EN: 'Malaysia is a country that holds immense contrasts with quiet grace. Ancient rainforests older than the Amazon, coral gardens that teem with life, and cities where colonial elegance blends into vibrant modern culture. From the overwater sanctuaries of Langkawi to the wild interior of Borneo.',
        },
        experience: {
          RU: 'Приватная водная вилла с дворецким на острове Лангкави. Ночная прогулка по Таман Негара — одному из старейших тропических лесов мира. Гастрономическое путешествие по историческим улицам Пенанга.',
          KZ: 'Лангкавидегі жеке дворецкийлі су үстіндегі вилла. Дүниежүзіндегі ең ежелгі тропикалық ормандардың бірі Таман Негарада түнгі серуен. Пенангтың мұра көшелері бойымен гастрономиялық саяхат.',
          EN: "A private overwater villa at a secluded Langkawi resort with a dedicated butler. A guided night walk through Taman Negara, one of the world's oldest rainforests. A culinary journey through Penang's UNESCO-listed heritage streets.",
        },
      },
    },
  },

  // ── Contact View ──
  contact: {
    eyebrow:     { RU: 'Запрос консьержу',       KZ: 'Консьержге сұраным',    EN: 'Concierge Request' },
    title1:      { RU: 'Начните своё',             KZ: 'Бастаңыз',              EN: 'Begin Your' },
    title2:      { RU: 'эксклюзивное путешествие', KZ: 'жеке саяхатыңызды',     EN: 'Bespoke Journey' },
    subtitle:    {
      RU: 'Поделитесь деталями, и ваш личный консьерж свяжется с вами, чтобы создать опыт, достойный ваших ожиданий.',
      KZ: 'Бірнеше мәлімет бөлісіңіз, жеке консьержіңіз сізбен байланысып, арманыңызға лайық тәжірибе жасайды.',
      EN: 'Share a few details and your personal concierge will be in touch to compose an experience worthy of your aspirations.',
    },
    labelName:   { RU: 'Полное имя',              KZ: 'Толық аты-жөні',        EN: 'Full Name' },
    placeholderName: { RU: 'Ваше имя',            KZ: 'Сіздің атыңыз',         EN: 'Your name' },
    labelPhone:  { RU: 'Номер телефона',           KZ: 'Телефон нөмірі',        EN: 'Phone Number' },
    labelDest:   { RU: 'Направление',              KZ: 'Бағыт',                 EN: 'Destination of Interest' },
    placeholderDest: { RU: 'Выберите направление', KZ: 'Бағытты таңдаңыз',      EN: 'Select a destination' },
    submitBtn:   { RU: 'Отправить запрос',          KZ: 'Сұранысты жіберу',      EN: 'Submit Request' },
    successTitle:{ RU: 'Запрос получен',            KZ: 'Сұраным алынды',        EN: 'Request Received' },
    successBody: {
      RU: 'Ваш консьерж свяжется с вами в течение нескольких часов, чтобы начать создавать ваше путешествие.',
      KZ: 'Консьержіңіз бірнеше сағат ішінде сізбен байланысып, саяхатыңызды жасауды бастайды.',
      EN: 'Your concierge will reach out within a few hours to begin crafting your journey. We look forward to making your vision a reality.',
    },
    orReach:     { RU: 'или свяжитесь напрямую',   KZ: 'немесе тікелей хабарласыңыз', EN: 'or reach us directly' },
    panelEyebrow:{ RU: 'Приватный консьерж',        KZ: 'Жеке консьерж',         EN: 'Private Concierge' },
    panelTitle1: { RU: 'Ваше путешествие —',        KZ: 'Сіздің саяхатыңыз —',   EN: 'Your Journey,' },
    panelTitle2: { RU: 'наша преданность',           KZ: 'біздің берілгендігіміз', EN: 'Our Devotion' },
    panelBody:   {
      RU: 'Мы отвечаем на каждый запрос в течение нескольких часов. Ваш консьерж всегда на связи.',
      KZ: 'Біз әр сұранысқа бірнеше сағат ішінде жауап береміз. Консьержіңіз әрқашан байланыста.',
      EN: 'We respond to every inquiry within hours. Your concierge is never more than a message away.',
    },
    errorName:   { RU: 'Введите ваше имя.',         KZ: 'Атыңызды енгізіңіз.',   EN: 'Please enter your name.' },
    errorPhone:  { RU: 'Введите номер телефона.',   KZ: 'Телефон нөміріңізді енгізіңіз.', EN: 'Please enter your phone number.' },
    errorDest:   { RU: 'Выберите направление.',     KZ: 'Бағытты таңдаңыз.',     EN: 'Please select a destination.' },
    destinations:{ RU: ['Китай', 'Италия', 'Турция', 'Малайзия'], KZ: ['Қытай', 'Италия', 'Түркия', 'Малайзия'], EN: ['China', 'Italy', 'Turkey', 'Malaysia'] },
  },

  // ── Footer ──
  footer: {
    navLabel:    { RU: 'Навигация',              KZ: 'Навигация',             EN: 'Navigation' },
    contactLabel:{ RU: 'Связаться с нами',       KZ: 'Бізбен байланысу',      EN: 'Get in Touch' },
    tagline:     { RU: 'Элитный туристический и визовый консьерж для тех, кто ожидает исключительного.', KZ: 'Ерекше нәрсені күтетіндерге арналған элиталық тур және виза консьержі.', EN: 'Elite travel and visa concierge for those who expect the exceptional.' },
    rights:      { RU: 'Все права защищены.',    KZ: 'Барлық құқықтар қорғалған.', EN: 'All rights reserved.' },
    eliteLabel:  { RU: 'Элитный тур и визовый консьерж', KZ: 'Элиталық тур және виза консьержі', EN: 'Elite Travel & Visa Concierge' },
  },
} as const
