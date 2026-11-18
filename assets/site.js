/* Caravan & Key: language switching, animation, and the WhatsApp message planner. */
(function () {
  'use strict';

  /* Change the business WhatsApp number here. It updates every link on the page. */
  var WHATSAPP_NUMBER = '966550710646';

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------- Arabic copy (English lives in index.html) ---------- */
  var AR = {
    skip: 'انتقل إلى المحتوى',
    navLabel: 'القائمة الرئيسية',
    menuOpen: 'فتح القائمة',
    navServices: 'خدماتنا',
    navVisas: 'التأشيرات',
    navCompany: 'شركة أمريكية',
    navCanada: 'كندا',
    navHow: 'كيف نعمل',
    navPartners: 'الشركاء',
    ctaChatShort: 'تواصل معنا',
    ctaChat: 'تواصل عبر واتساب',
    ctaSee: 'تعرّف على خدماتنا',

    heroEyebrow: 'للمستثمرين الأجانب في المملكة العربية السعودية',
    heroTitle: 'تأشيراتك وشركتك الأمريكية وسفرك <em>نتولاها بالكامل.</em>',
    heroLead: 'نساعد المستثمرين في السعودية على الحصول على تأشيرات أمريكا وبريطانيا وكندا، وتأسيس الشركات في الولايات المتحدة، والاستثمار في كندا، والسفر بلا عناء.',
    heroPartner: 'تدير مكتب تراخيص؟ كن شريكًا لنا',

    boardLabel: 'لوحة مغادرة تعرض خدماتنا: تأشيرات أمريكا وبريطانيا وكندا، وتأسيس الشركات الأمريكية، والعقارات في كندا، وحجوزات السفر.',
    boardTitle: 'رحلات المغادرة من السعودية',
    boardTo: 'إلى',
    boardService: 'الخدمة',
    boardStatus: 'الحالة',
    boardFoot: 'فريق خاص واحد يتولى كل شيء.',

    stat1: 'المئات',
    stat1Label: 'من التأشيرات المعتمدة، مع حالات رفض قليلة جدًا',
    stat2: '3',
    stat2Label: 'وجهات للتأشيرات: أمريكا وبريطانيا وكندا',
    stat3: '1',
    stat3Label: 'فريق واحد للتأشيرات وتأسيس الشركات والسفر',
    stat4: '100%',
    stat4Label: 'خصوصية لبيانات أعمالك وعائلتك',

    svcEyebrow: 'ماذا نقدّم',
    svcTitle: 'كل ما تحتاجه في مكان واحد',
    stampVisa: 'تأشيرة',
    svc1Title: 'تأشيرات أمريكا وبريطانيا وكندا',
    svc1Text: 'إعداد كامل للطلبات، مع تدريب فردي لمقابلة السفارة الأمريكية.',
    svc1More: 'استكشف التأشيرات',
    svc2Title: 'تأسيس شركة أمريكية',
    svc2Text: 'أسّس شركتك الأمريكية من السعودية دون الحاجة إلى السفر أولًا.',
    svc2More: 'ابدأ شركتك',
    tick1: 'نماذج التسجيل',
    tick2: 'التأسيس النظامي',
    tick3: 'جاهزية للخدمات البنكية الأمريكية',
    svc3Title: 'العقارات في كندا',
    svc3Text: 'فرص عايناها بأنفسنا، مع محامين مقيمين في كندا.',
    svc3More: 'اكتشف كندا',
    svc4Title: 'خدمات سفر متكاملة',
    svc4Text: 'رحلات طيران وفنادق ومرشدون سياحيون محليون موثوقون.',
    svc4More: 'خطّط لرحلتك',

    altJet: 'رجل أعمال يحمل حقيبة ويتجه نحو طائرة خاصة عند الغروب',
    whyEyebrow: 'لماذا نحن',
    whyTitle: 'ركّز على أعمالك، ودع الباقي علينا.',
    whyLead: 'وفّر وقتك وتجنّب الأوراق المعقدة وطوابير السفارات الطويلة وفوضى حجوزات السفر.',
    why1Title: 'فريق واحد لكل شيء',
    why1Text: 'التأشيرات وتأسيس الشركة الأمريكية والسفر في مكان واحد.',
    why2Title: 'خصوصية تامة',
    why2Text: 'تبقى بيانات أعمالك وعائلتك سرية بالكامل.',
    why3Title: 'مصمَّم لك',
    why3Text: 'خدمات أُعدّت خصيصًا للمستثمرين الأجانب المقيمين في السعودية.',

    visaEyebrow: 'التأشيرات بكل سهولة',
    visaTitle: 'تأشيرات سياحية لثلاث من أبرز الوجهات',
    routeFrom: 'السعودية',
    routeUsa: 'أمريكا',
    routeUk: 'بريطانيا',
    routeCan: 'كندا',
    visa1Title: 'التأشيرة السياحية الأمريكية',
    visa1Text: 'إعداد كامل للطلب مع تدريب فردي على المقابلة.',
    visa2Title: 'التأشيرة السياحية البريطانية',
    visa2Text: 'مساعدة سريعة وواضحة لتأشيرة رحلاتك.',
    visa3Title: 'التأشيرة السياحية الكندية',
    visa3Text: 'دخول ميسّر للسفر ولخططك المستقبلية.',
    visaAsk: 'استفسر عن هذه التأشيرة',
    proofNum: 'من التأشيرات المنجزة، مع حالات رفض قليلة جدًا',
    proofEyebrow: 'خبرة حقيقية',
    proofTitle: 'تدريب على المقابلة الأمريكية وفرصة ثانية',
    proofText: 'حتى لو سبق رفض طلبك، نعيد حجز موعدك ونجهّزك بشكل فردي ونساعدك على التقديم من جديد بملف أقوى.',

    bizEyebrow: 'الأعمال والسفر',
    bizTitle: 'أسّس شركة أمريكية وسافر بسهولة',
    bizA: 'تأسيس شركة أمريكية',
    bizA1T: 'من السعودية',
    bizA1: 'أسّس شركتك الأمريكية دون الحاجة إلى السفر أولًا.',
    bizA2T: 'نظامي بالكامل',
    bizA2: 'تأسيس سليم لممارسة الأعمال والخدمات البنكية في أمريكا.',
    bizA3T: 'سريع وسهل',
    bizA3: 'نتولى عنك جميع نماذج التسجيل.',
    bizACta: 'استفسر عن الشركة الأمريكية',
    bizB: 'حجوزات سفر متكاملة',
    bizB1T: 'تذاكر الطيران',
    bizB1: 'أفضل المسارات لرحلات العمل أو العائلة.',
    bizB2T: 'حجوزات الفنادق',
    bizB2: 'فنادق مميزة في أي مدينة تزورها.',
    bizB3T: 'مرشدون سياحيون محليون',
    bizB3: 'مرشدون خاصون موثوقون بانتظارك عند وصولك.',
    bizBCta: 'خطّط لرحلتي',

    altToronto: 'أفق مدينة تورونتو وبرج سي إن وقت الغروب',
    altHomes: 'منازل حديثة في كندا',
    canEyebrow: 'العقارات في كندا والانتقال مستقبلًا',
    canTitle: 'استثمر في كندا اليوم، وخطّط لانتقالك لاحقًا',
    canQuote: 'زرت كندا بنفسي ورأيت هذه الفرص العقارية بعيني.',
    canCite: 'مؤسس Caravan & Key',
    can1T: 'معاينة شخصية',
    can1: 'نصيحة واقعية مبنية على زيارة فعلية لكندا، لا على إعلانات الإنترنت.',
    can2T: 'خطط المستقبل',
    can2: 'خيارات عقارية تراعي خطط انتقال عائلتك على المدى البعيد.',
    can3T: 'فريق قانوني معتمد',
    can3: 'يتولى شؤون العقار والهجرة في كندا محامون ذوو خبرة مقيمون هناك.',
    canNote: 'تفرض الأنظمة الكندية قيودًا على شراء غير الكنديين للعقارات السكنية، ولا يمنح شراء العقار بحد ذاته حق الإقامة. يؤكد لك محامونا ما ينطبق على حالتك قبل أي التزام.',
    canCta: 'استفسر عن كندا',

    howEyebrow: 'خطوات بسيطة',
    howTitle: 'ابدأ معنا في 3 خطوات سهلة',
    n1: '01', n2: '02', n3: '03',
    how1T: 'أخبرنا بهدفك',
    how1: 'تحدّث معنا عن تأشيرتك أو شركتك الأمريكية أو رحلتك.',
    how2T: 'نجهّز كل شيء',
    how2: 'نعبّئ نماذجك وندرّبك على المقابلات.',
    how3T: 'سافر مطمئنًا',
    how3: 'نحجز رحلاتك وفنادقك ومرشديك السياحيين.',

    planEyebrow: 'ابدأ من هنا',
    planTitle: 'أخبرنا بما تحتاجه',
    planLead: 'اختر الخدمات وسنكتب الرسالة نيابةً عنك. لن يُرسل شيء حتى تضغط على إرسال.',
    planQ1: 'كيف يمكننا مساعدتك؟',
    need1: 'تأشيرة أمريكا',
    need2: 'تأشيرة بريطانيا',
    need3: 'تأشيرة كندا',
    need4: 'تأسيس شركة أمريكية',
    need5: 'عقار في كندا',
    need6: 'طيران وفنادق ومرشدون',
    planQ2: 'أين تقيم؟',
    city1: 'الرياض',
    city2: 'جدة',
    city3: 'الظهران / الخبر',
    chatStatus: 'مكتب الخدمة الخاصة',
    chatLabel: 'رسالتك',
    chatSend: 'أرسل عبر واتساب',

    ptrEyebrow: 'لمكاتب التراخيص والشركاء',
    ptrTitle: 'أنت تتولى التراخيص في السعودية، ونحن نتولى كل ما هو خارجها.',
    ptrLead: 'بعد حصول المستثمرين الأجانب على ترخيصهم في السعودية، يحتاجون إلى من يساعدهم خارج المملكة. عرّفهم علينا واكسب عمولة عن كل صفقة.',
    handA: 'مكتبك: الترخيص السعودي',
    handB: 'Caravan & Key: كل ما هو خارج المملكة',
    altTower: 'برج المملكة في الرياض تحت سماء صافية',
    ptrBenefits: 'لماذا سيحب مكتبك العمل معنا',
    ben1T: 'دخل إضافي',
    ben1: 'احصل على عمولة عن كل عميل ترسله إلينا.',
    ben2T: 'دون أي عمل إضافي',
    ben2: 'لا حاجة إلى توظيف فريق جديد أو تعلّم أنظمة التأشيرات.',
    ben3T: 'عملاء أكثر رضا',
    ben3: 'يحصل مستثمروك على تأشيرات وسفر بسلاسة.',
    ben4T: 'بعلامتك التجارية',
    ben4: 'قدّم فريقنا على أنه خدمة كبار العملاء الخاصة بك.',
    ptrSteps: '4 خطوات سهلة',
    p1: '1', p2: '2', p3: '3', p4: '4',
    flow1T: 'تُنهي الترخيص',
    flow1: 'تُصدر ترخيص المستثمر في السعودية.',
    flow2T: 'تعرّفنا على العميل',
    flow2: 'تصل عميلك بفريق Caravan & Key.',
    flow3T: 'نتولى العمل كله',
    flow3: 'ننجز التأشيرات أو الشركة الأمريكية أو السفر.',
    flow4T: 'تحصل على عمولتك',
    flow4: 'تنال حصتك من كل صفقة.',
    ptrCtaText: 'لنبدأ العمل معًا بمحادثة سريعة مدتها 10 دقائق أو لقاء على فنجان قهوة.',
    ptrCta: 'احجز محادثة من 10 دقائق',

    faqEyebrow: 'معلومات تهمّك',
    faqTitle: 'الأسئلة الشائعة',
    q1: 'هل يمكنكم مساعدتي إذا سبق رفض تأشيرتي؟',
    a1: 'نعم. نعيد حجز موعدك ونجهّزك بشكل فردي ونساعدك على التقديم من جديد بملف أقوى.',
    q2: 'هل يجب أن أسافر إلى أمريكا لتأسيس شركة؟',
    a2: 'لا. يمكنك تأسيس شركتك الأمريكية من السعودية، ونتولى عنك جميع نماذج التسجيل.',
    q3: 'هل يمكنني التقديم من السعودية إذا لم أكن مواطنًا سعوديًا؟',
    a3: 'نعم في الغالب. يتقدّم المتقدمون عادةً من بلد إقامتهم النظامية، لذا تتيح لك الإقامة السارية أو الإقامة المميزة التقديم من داخل المملكة. ونؤكد لك متطلبات جواز سفرك قبل البدء.',
    q4: 'هل تبقى معلوماتي خاصة؟',
    a4: 'نعم. تبقى بيانات أعمالك وعائلتك سرية بالكامل.',
    q5: 'هل تضمنون الموافقة على تأشيرتي؟',
    a5: 'لا يمكن لأحد ضمان ذلك. فقرار التأشيرة يعود إلى حكومة الدولة التي تتقدّم إليها، ومهمتنا أن يكون طلبك مكتملًا وأن تكون مستعدًا جيدًا.',

    endEyebrow: 'نحن جاهزون متى كنت جاهزًا',
    endTitle: 'لنخطّط لتأشيرتك أو أعمالك أو رحلتك القادمة',
    endLead: 'راسلنا اليوم لمحادثة بسيطة وخاصة حول كيفية مساعدتك.',

    footAbout: 'التأشيرات وتأسيس الشركات الأمريكية والعقارات في كندا والسفر، للمستثمرين الأجانب المقيمين في السعودية.',
    footServices: 'الخدمات',
    footTravel: 'السفر',
    footContact: 'تواصل معنا',
    footHours: 'من السبت إلى الخميس، 09:00 إلى 21:00 (بتوقيت السعودية)',
    footCities: 'الرياض، جدة، الظهران / الخبر',
    footNote: 'Caravan & Key جهة خاصة مستقلة لتقديم الخدمات، وليست سفارة أو قنصلية أو جهة حكومية. يعود قرار كل تأشيرة إلى سلطات بلد الوجهة، ولا نضمن النتائج.',
    footRights: 'جميع الحقوق محفوظة.'
  };

  var META = {
    en: {
      title: document.title,
      description: $('meta[name="description"]').content,
      langLabel: 'العربية',
      langAria: 'Switch language to Arabic',
      menuClose: 'Close menu'
    },
    ar: {
      title: 'Caravan & Key | التأشيرات وتأسيس الشركات الأمريكية والسفر للمستثمرين في السعودية',
      description: 'نساعد المستثمرين الأجانب في السعودية على الحصول على تأشيرات أمريكا وبريطانيا وكندا، وتأسيس الشركات الأمريكية، والاستثمار في كندا، والسفر بلا عناء.',
      langLabel: 'English',
      langAria: 'التبديل إلى اللغة الإنجليزية',
      menuClose: 'إغلاق القائمة'
    }
  };

  /* Pre-filled WhatsApp messages for each call to action */
  var MESSAGES = {
    general: { en: 'Salam Caravan & Key. I would like to learn how you can help me.', ar: 'السلام عليكم Caravan & Key. أود معرفة كيف يمكنكم مساعدتي.' },
    usa: { en: 'Salam Caravan & Key. I am interested in the USA tourist visa and interview training.', ar: 'السلام عليكم Caravan & Key. أرغب في الاستفسار عن التأشيرة السياحية الأمريكية والتدريب على المقابلة.' },
    uk: { en: 'Salam Caravan & Key. I am interested in the UK tourist visa.', ar: 'السلام عليكم Caravan & Key. أرغب في الاستفسار عن التأشيرة السياحية البريطانية.' },
    canada: { en: 'Salam Caravan & Key. I am interested in the Canada tourist visa.', ar: 'السلام عليكم Caravan & Key. أرغب في الاستفسار عن التأشيرة السياحية الكندية.' },
    company: { en: 'Salam Caravan & Key. I would like to open a US company from Saudi Arabia.', ar: 'السلام عليكم Caravan & Key. أرغب في تأسيس شركة أمريكية من السعودية.' },
    travel: { en: 'Salam Caravan & Key. I would like help booking flights, hotels, and tour guides.', ar: 'السلام عليكم Caravan & Key. أحتاج إلى المساعدة في حجز الطيران والفنادق والمرشدين السياحيين.' },
    property: { en: 'Salam Caravan & Key. I would like to learn about property opportunities in Canada.', ar: 'السلام عليكم Caravan & Key. أرغب في معرفة الفرص العقارية في كندا.' },
    partner: { en: 'Salam Caravan & Key. I run a licensing office and would like to discuss a partnership.', ar: 'السلام عليكم Caravan & Key. أدير مكتب تراخيص وأرغب في مناقشة الشراكة معكم.' }
  };

  /* Departure board rows */
  var BOARD = [
    { en: ['USA', 'Tourist visa'], ar: ['أمريكا', 'تأشيرة سياحية'] },
    { en: ['UK', 'Tourist visa'], ar: ['بريطانيا', 'تأشيرة سياحية'] },
    { en: ['CANADA', 'Tourist visa'], ar: ['كندا', 'تأشيرة سياحية'] },
    { en: ['USA', 'Company setup'], ar: ['أمريكا', 'تأسيس شركة'] },
    { en: ['CANADA', 'Property & legal'], ar: ['كندا', 'عقارات ومحامون'] },
    { en: ['USA', 'Interview training'], ar: ['أمريكا', 'تدريب على المقابلة'] },
    { en: ['GLOBAL', 'Flights & hotels'], ar: ['عالميًا', 'طيران وفنادق'] },
    { en: ['GLOBAL', 'Private guides'], ar: ['عالميًا', 'مرشدون خاصون'] }
  ];
  var BOARD_ROWS = 5;

  var lang = root.lang === 'ar' ? 'ar' : 'en';

  /* ---------- i18n ---------- */
  var textNodes = $$('[data-i18n]');
  var attrNodes = $$('[data-i18n-attr]');
  textNodes.forEach(function (n) { n._en = n.innerHTML; });
  attrNodes.forEach(function (n) {
    n._enAttr = {};
    n.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
      var attr = pair.split(':')[0];
      n._enAttr[attr] = n.getAttribute(attr);
    });
  });

  function escapeHtml(s) { return s.replace(/&(?!amp;|lt;|gt;)/g, '&amp;'); }

  function applyLanguage() {
    var isAr = lang === 'ar';
    root.lang = lang;
    root.dir = isAr ? 'rtl' : 'ltr';
    document.title = META[lang].title;
    $('meta[name="description"]').content = META[lang].description;

    textNodes.forEach(function (n) {
      var key = n.getAttribute('data-i18n');
      n.innerHTML = isAr && AR[key] != null ? escapeHtml(AR[key]) : n._en;
    });
    attrNodes.forEach(function (n) {
      n.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var parts = pair.split(':');
        n.setAttribute(parts[0], isAr && AR[parts[1]] != null ? AR[parts[1]] : n._enAttr[parts[0]]);
      });
    });

    $('#langLabel').textContent = META[lang].langLabel;
    $('#langLabel').lang = isAr ? 'en' : 'ar';
    $('#langToggle').setAttribute('aria-label', META[lang].langAria);

    $$('[data-wa]').forEach(function (a) {
      var msg = MESSAGES[a.getAttribute('data-wa')] || MESSAGES.general;
      a.href = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg[lang]);
    });

    splitTitle();
    renderBoard();
    updatePlanner(false);
    syncMenuLabel();
  }

  $('#langToggle').addEventListener('click', function () {
    lang = lang === 'ar' ? 'en' : 'ar';
    try { localStorage.setItem('ck-lang', lang); } catch (e) {}
    try {
      var url = new URL(location.href);
      if (url.searchParams.has('lang')) { url.searchParams.set('lang', lang); history.replaceState(null, '', url); }
    } catch (e) {}
    if (reduceMotion) { applyLanguage(); return; }
    document.body.classList.add('is-switching');
    setTimeout(function () {
      applyLanguage();
      document.body.classList.remove('is-switching');
    }, 180);
  });

  /* ---------- Hero headline: word-by-word entrance ---------- */
  function splitTitle() {
    var title = $('#heroTitle');
    var i = 0;
    function walk(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (child) {
        if (child.nodeType === 3) {
          var frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach(function (part) {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
            var w = document.createElement('span');
            w.className = 'w';
            w.style.setProperty('--i', i++);
            w.textContent = part;
            frag.appendChild(w);
          });
          node.replaceChild(frag, child);
        } else if (child.nodeType === 1) {
          walk(child);
        }
      });
    }
    walk(title);
  }

  /* ---------- Departure board ---------- */
  var boardTimer = null;
  var boardNext = BOARD_ROWS;
  var boardRowIndex = 0;

  function renderBoard() {
    var list = $('#boardRows');
    list.innerHTML = '';
    boardNext = BOARD_ROWS % BOARD.length;
    boardRowIndex = 0;
    BOARD.slice(0, BOARD_ROWS).forEach(function (item) {
      var li = document.createElement('li');
      li.className = 'board__row';
      li.innerHTML = '<span class="flap flap--to"></span><span class="flap flap--svc"></span>' +
        '<span class="flap flap--ok"><svg class="ico" aria-hidden="true"><use href="#i-check"/></svg></span>';
      li.children[0].textContent = item[lang][0];
      li.children[1].textContent = item[lang][1];
      list.appendChild(li);
    });
  }

  function flip(cell, text, delay) {
    setTimeout(function () {
      cell.classList.remove('is-flip');
      void cell.offsetWidth;
      cell.classList.add('is-flip');
      setTimeout(function () { cell.textContent = text; }, 280);
    }, delay);
  }

  function tickBoard() {
    if (document.hidden) return;
    var rows = $$('.board__row');
    var row = rows[boardRowIndex];
    var item = BOARD[boardNext][lang];
    flip(row.children[0], item[0], 0);
    flip(row.children[1], item[1], 110);
    boardRowIndex = (boardRowIndex + 1) % rows.length;
    boardNext = (boardNext + 1) % BOARD.length;
  }

  function tickClock() {
    try {
      $('#boardClock').textContent = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Riyadh' }).format(new Date()) + ' AST';
    } catch (e) { $('#boardClock').textContent = ''; }
  }

  /* ---------- Planner ---------- */
  var planner = $('#planner');
  var preview = $('#plannerPreview');
  var send = $('#plannerSend');

  function labelOf(input) { return input.parentNode.querySelector('span').textContent.trim(); }

  function joinList(items) {
    if (lang === 'ar') {
      return items.length > 1 ? items.slice(0, -1).join('، ') + ' و' + items[items.length - 1] : items[0];
    }
    if (items.length < 2) return items[0];
    return items.slice(0, -1).join(', ') + (items.length > 2 ? ', and ' : ' and ') + items[items.length - 1];
  }

  function updatePlanner(animate) {
    var needs = $$('input[name="need"]:checked', planner).map(labelOf);
    var cityInput = $('input[name="city"]:checked', planner);
    var city = cityInput ? labelOf(cityInput) : '';

    if (!needs.length) {
      preview.textContent = lang === 'ar' ? 'اختر خدمة واحدة على الأقل لكتابة رسالتك.' : 'Pick at least one service to write your message.';
      preview.classList.add('is-empty');
      send.setAttribute('aria-disabled', 'true');
      send.setAttribute('tabindex', '-1');
      send.removeAttribute('href');
      return;
    }

    var list = joinList(needs);
    var message = lang === 'ar'
      ? 'السلام عليكم Caravan & Key. أقيم في ' + city + ' وأحتاج إلى المساعدة في: ' + list + '. أرجو إفادتي بالخطوات التالية.'
      : 'Salam Caravan & Key. I am based in ' + city + ' and I would like help with: ' + list + '. Please advise on the next steps.';

    preview.textContent = message;
    preview.classList.remove('is-empty');
    send.removeAttribute('aria-disabled');
    send.removeAttribute('tabindex');
    send.href = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);

    if (animate && !reduceMotion) {
      preview.classList.remove('is-pop');
      void preview.offsetWidth;
      preview.classList.add('is-pop');
    }
  }

  planner.addEventListener('change', function () { updatePlanner(true); });
  planner.addEventListener('submit', function (e) { e.preventDefault(); });

  /* ---------- Mobile menu ---------- */
  var menuBtn = $('#menuToggle');
  var sheet = $('#mobileNav');

  function syncMenuLabel() {
    var open = menuBtn.getAttribute('aria-expanded') === 'true';
    var label = open ? META[lang].menuClose : (lang === 'ar' ? AR.menuOpen : menuBtn._enAttr['aria-label']);
    menuBtn.setAttribute('aria-label', label);
  }

  function setMenu(open) {
    menuBtn.setAttribute('aria-expanded', String(open));
    sheet.classList.toggle('is-open', open);
    document.body.classList.toggle('is-locked', open);
    syncMenuLabel();
  }

  menuBtn.addEventListener('click', function () {
    setMenu(menuBtn.getAttribute('aria-expanded') !== 'true');
  });
  $$('a', sheet).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && sheet.classList.contains('is-open')) { setMenu(false); menuBtn.focus(); }
  });
  window.matchMedia('(min-width: 1120px)').addEventListener('change', function (e) { if (e.matches) setMenu(false); });

  /* ---------- Count-up ---------- */
  function countUp(el) {
    if (lang === 'ar' || reduceMotion) return;
    var target = parseInt(el.getAttribute('data-count'), 10);
    var finalText = el.textContent;
    var suffix = finalText.replace(/[0-9]/g, '');
    var start = performance.now();
    var duration = 1300;
    (function frame(now) {
      var p = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) { requestAnimationFrame(frame); } else { el.textContent = finalText; }
    })(start);
  }

  /* ---------- Scroll reveal ---------- */
  function setupReveal() {
    var items = $$('[data-reveal]');
    if (!('IntersectionObserver' in window) || reduceMotion) {
      items.forEach(function (el) { el.classList.add('is-in', 'is-done'); });
      return;
    }

    /* Stagger siblings that enter together */
    items.forEach(function (el) {
      var siblings = Array.prototype.filter.call(el.parentNode.children, function (c) { return c.hasAttribute('data-reveal'); });
      el.style.setProperty('--d', Math.min(siblings.indexOf(el), 4) * 0.09 + 's');
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        io.unobserve(el);
        el.classList.add('is-in');
        $$('[data-count]', el).forEach(countUp);
        /* Drop the reveal styles afterwards so hover transitions are not delayed */
        setTimeout(function () {
          el.classList.add('is-done');
          el.removeAttribute('data-reveal');
          el.classList.remove('is-in');
          el.style.removeProperty('--d');
        }, 1500);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Scroll-linked effects ---------- */
  var head = $('.site-head');
  var progress = $('#progress');
  var fab = $('#fab');
  var steps = $('#steps');
  var ticking = false;

  function onScroll() {
    ticking = false;
    var y = window.scrollY;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    head.classList.toggle('is-stuck', y > 12);
    progress.style.setProperty('--p', max > 0 ? (y / max).toFixed(4) : 0);
    fab.classList.toggle('is-on', y > 520);

    var r = steps.getBoundingClientRect();
    var vh = window.innerHeight;
    var p = Math.max(0, Math.min(1, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
    steps.style.setProperty('--p', p.toFixed(3));
  }

  function requestScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }
  window.addEventListener('scroll', requestScroll, { passive: true });
  window.addEventListener('resize', requestScroll);

  /* ---------- Active nav link ---------- */
  function setupSpy() {
    if (!('IntersectionObserver' in window)) return;
    var links = $$('.nav a');
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    links.forEach(function (a) {
      var section = $(a.getAttribute('href'));
      if (section) spy.observe(section);
    });
  }

  /* ---------- Start ---------- */
  $('#year').textContent = new Date().getFullYear();
  applyLanguage();
  setupReveal();
  setupSpy();
  onScroll();
  tickClock();
  setInterval(tickClock, 20000);
  if (!reduceMotion) { boardTimer = setInterval(tickBoard, 2200); }
})();
