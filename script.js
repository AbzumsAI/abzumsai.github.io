const translations = {
  en: {
    metaDescription: "AbzumsAI course material, student projects, teaching team, gallery, and public video links.",
    title: "AbzumsAI",
    skip: "Skip to content",
    labels: {
      siteHeader: "Site header",
      home: "AbzumsAI home",
      mainLinks: "Main links",
      language: "Language",
      primaryLinks: "Primary links",
      courseSignals: "Course signals",
      siteStatus: "Site status",
      materialCounts: "Material counts",
      galleryPhotos: "Gallery photos",
      repoFilters: "Repo filters",
    },
    nav: {
      materials: "Materials",
      projects: "Projects",
      gallery: "Gallery",
      teachers: "Teachers",
      videos: "Videos",
      repos: "Repos",
      telegram: "Telegram",
    },
    hero: {
      eyebrow: "AI course material for healthcare students",
      copy: "A public home for the course run by the Research and Technology Department of Alborz University of Medical Sciences with MedX Community.",
      github: "Open GitHub",
      telegram: "Join Telegram",
      signalStudyTitle: "Study",
      signalStudyText: "Notebooks and handouts",
      signalPracticeTitle: "Practice",
      signalPracticeText: "Assignments and problems",
      signalBuildTitle: "Build",
      signalBuildText: "Projects with public repos",
    },
    status: {
      title: "8 public repos",
      text: "Assignments, notebooks, templates, problems, pretest files, bot source, site source, and organization docs. The slide archive is private.",
      link: "Site source",
    },
    materials: {
      eyebrow: "Current material",
      title: "Recovered and checked",
      allRepos: "All public repos",
      slidesTitle: "Private slide files",
      slidesText: "Course slides and workshop files are kept in the private Slides repo for course staff.",
      privateNote: "No public repo link",
      notebooksTitle: "Checked notebooks",
      notebooksText: "Starter, session, masterclass, project, and answer notebooks pass the JSON check.",
      notebooksLink: "Open notebooks",
      solutionsTitle: "Solution groups",
      solutionsText: "Assignments 1 to 7 have Python answers and notebook answers with a local test script.",
      solutionsLink: "Open answers",
      rebuiltTitle: "Rebuilt tasks",
      rebuiltText: "The Numpy and Pandas PDF tasks now have editable sources, solutions, checks, and notebooks.",
      assignmentsLink: "Open assignments",
      datasetTitle: "Final dataset",
      datasetText: "The machine learning homework now has its handout, data dictionary, CSV data, and starter check.",
      datasetLink: "Open dataset",
    },
    path: {
      eyebrow: "Course path",
      title: "From math to machine learning",
      oneTitle: "Start with the notebooks",
      oneText: "Use the notebook repo for Python practice, class tasks, and submission notes.",
      twoTitle: "Solve the problem sets",
      twoText: "Work through assignments, pretest material, and small Python examples from class.",
      threeTitle: "Keep the source clean",
      threeText: "Build PDFs from the LaTeX folders and keep handouts ready for each session.",
    },
    projects: {
      eyebrow: "Featured student projects",
      title: "Student projects",
      note: "Final projects from the Python programming section, presented at Projects Day.",
      repoLink: "Project repo",
      websiteLink: "Project website",
      one: {
        number: "Project 1",
        name: "RavTan Bot",
        owner: "Developer: Amirhossein Norouzi",
        title: "Anatomy learning assistant",
        text: "RavTan Bot receives anatomy images, numbers the visible parts, and names each part for the user. Students can also ask follow-up questions about each labeled area.",
      },
      two: {
        number: "Project 2",
        name: "MedCardy",
        owner: "Developers: Benjamin Zolfaghari and Mohammad Hossein Kazemi",
        title: "Medical exam question review",
        text: "MedCardy helps students create question packs, review previous exams, receive precise answers, and use quick flashcards before exams.",
      },
      three: {
        number: "Project 3",
        owner: "Developer: Reza Haji Ghasemi",
        title: "Newborn screening guide",
        text: "NeoScreenBot checks newborn screening data against the official health ministry guide and returns normal, repeat, confirmatory test, or urgent status.",
      },
      four: {
        number: "Project 4",
        owner: "Developer: Mohammad Dehghan Niri",
        title: "Trading strategy backtest tool",
        text: "BackTestPro lets users test trading strategies against past data without writing code, then review the results in a short time.",
      },
      five: {
        number: "Project 5",
        owner: "Developers: Aline Esmaeili and Elahe Ensani",
        title: "Digital health system",
        text: "EurekaAI combines a symptom analyzer, a voice assistant, and a clinic management system for simple medical guidance, voice access, and light patient and appointment management.",
      },
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Course moments",
      note: "Photos from AbzumsAI sessions and Projects Day.",
      photo1: "Photo 1",
      photo2: "Photo 2",
      photo3: "Photo 3",
      photo4: "Photo 4",
      photo5: "Photo 5",
      photo6: "Photo 6",
      photo7: "Photo 7",
      photo8: "Photo 8",
      photo9: "Photo 9",
      photo10: "Photo 10",
      photo11: "Photo 11",
    },
    teachers: {
      eyebrow: "Teaching team",
      title: "Teaching team",
      note: "The people who taught, guided, and shared experience during the course.",
      links: {
        sharif: "Sharif University",
        unisa: "UNISA",
        cuhk: "CUHK",
        ibcol: "IBCOL",
        micromaster: "Micromaster",
        ceSharif: "Sharif CE",
        neurailogic: "NeurAILogic",
        mpii: "MPII",
        hkust: "HKUST",
        tapsi: "Tapsi",
        epfl: "EPFL",
        ista: "ISTA",
        connect: "Connect",
      },
      iman: {
        name: "Iman Mohammadi",
        one: "BSc in Computer Engineering from Sharif University of Technology",
        two: "Computer science researcher at University of Salerno",
        three: "Computer science researcher at CUHK",
        four: "Bronze medalist at the International Blockchain Olympiad",
        five: "Teaching assistant in the Micromaster course",
      },
      ali: {
        name: "Ali Mohammadzadeh Shabestari",
        one: "Computer Engineering student at Sharif University of Technology",
        two: "Programming teaching assistant for several courses at Sharif Computer Engineering Department",
        three: "AI researcher at NeurAILogic",
        four: "Rank 13 in the national mathematics entrance exam",
      },
      sina: {
        name: "Sina Moradi",
        one: "Medical student at Alborz University of Medical Sciences",
        two: "Programmer and AI researcher in radiology",
        three: "Former math teacher at Allameh Helli 8 and 5 schools in Tehran",
        four: "Top provincial technologist in 1403",
      },
      negar: {
        name: "Negar Babashah",
        one: "BSc in Computer Engineering from Sharif University of Technology",
        two: "Algorithm researcher at Max Planck Institute in Germany",
        three: "Algorithm researcher at HKUST",
        four: "Software engineer at Tapsi",
        five: "Former math olympiad teacher at Salam schools in Tehran",
        six: "Gold medalist in the national math olympiad",
      },
      mehdi: {
        name: "Mehdi Lotfian",
        one: "BSc in Computer Engineering from Sharif University of Technology",
        two: "Machine learning researcher at EPFL in Switzerland",
        three: "Computer science researcher at CUHK",
        four: "Researcher at ISTA in Austria",
      },
      ehsan: {
        name: "Ehsan Khormali",
        one: "AI and neuroscience researcher",
        two: "Sixth year medical student",
        three: "Co-founder of Connect",
      },
      shayan: {
        name: "Shayan Salehi",
        one: "AI researcher at Imperial College London",
        two: "BSc graduate in Computer Engineering from Sharif University of Technology",
        three: "Rank 25 in the national mathematics entrance exam",
      },
      kowsar: {
        name: "Kowsar Shams",
        one: "MSc student in AI at University of Tehran",
        two: "AI researcher at Royan Stem Cell Technology Research Center",
        three: "Rank 16 in the national graduate entrance exam",
      },
    },
    videos: {
      eyebrow: "Public videos",
      title: "Public videos",
      note: "Three videos from the first part of the course are public on Telegram.",
      watch: "Watch on Telegram",
      one: {
        kicker: "Part 1, session 1",
        title: "Philosophy of technology and programming in the age of AI",
        text: "With Dr. Mohammad Ali Abam, along with experience sharing by AI researchers and builders from Sharif University of Technology.",
      },
      two: {
        kicker: "Part 1, session 2",
        title: "Digital health startups in the age of AI",
        text: "With Mona Azami, Dr. Farid Faraji, and Dr. Azin Etemadi Manesh, followed by a question and answer session.",
      },
      three: {
        kicker: "Part 1, session 3",
        title: "How medical students can enter AI",
        text: "An experience sharing session with Dr. Moein Shariatnia, medical student at Tehran University of Medical Sciences and active AI builder.",
      },
    },
    repos: {
      eyebrow: "Public repos",
      title: "Course work in one place",
      filterAll: "All",
      filterCourse: "Course",
      filterCode: "Code",
      filterDocs: "Docs",
      searchLabel: "Search repos",
      searchPlaceholder: "Search repos",
      kindCourse: "Course",
      kindCode: "Code",
      kindDocs: "Docs",
      openRepo: "Open repo",
      assignmentsText: "Homework sheets, editable sources, checks, and answer material for the course.",
      notebooksText: "Python notebooks, submission notes, and checked answer files for class work.",
      problemsText: "Small Python files used for examples and practice.",
      pretestText: "Exam and solution LaTeX sources for pretest work.",
      latexText: "Homework template, shared course style, and build notes.",
      botText: "Telegram bot source for common course questions.",
      githubText: "Organization profile shown on GitHub.",
      siteText: "Public course site served by GitHub Pages.",
      empty: "No repos match this search.",
      showingAll: "Showing {count} repos",
      showingFiltered: "Showing {count} {filter} repos",
      labels: {
        course: "course",
        code: "code",
        docs: "docs",
      },
    },
    footer: {
      text: "AbzumsAI, Alborz University of Medical Sciences and MedX Community.",
      github: "GitHub organization",
    },
  },
  fa: {
    metaDescription: "صفحه عمومی AbzumsAI برای منابع دوره، پروژه‌های دانشجویی، مدرسان، گالری و ویدیوهای عمومی.",
    title: "AbzumsAI",
    skip: "رفتن به محتوا",
    labels: {
      siteHeader: "سربرگ سایت",
      home: "خانه AbzumsAI",
      mainLinks: "پیوندهای اصلی",
      language: "زبان",
      primaryLinks: "پیوندهای مهم",
      courseSignals: "نکات دوره",
      siteStatus: "وضعیت سایت",
      materialCounts: "شمار منابع",
      galleryPhotos: "عکس‌های گالری",
      repoFilters: "فیلترهای مخزن",
    },
    nav: {
      materials: "منابع",
      projects: "پروژه‌ها",
      gallery: "گالری",
      teachers: "مدرسان",
      videos: "ویدیوها",
      repos: "مخزن‌ها",
      telegram: "تلگرام",
    },
    hero: {
      eyebrow: "منابع دوره هوش مصنوعی برای دانشجویان علوم پزشکی",
      copy: "خانه عمومی دوره‌ای که با همکاری معاونت تحقیقات و فناوری دانشگاه علوم پزشکی البرز و جامعه MedX برگزار شد.",
      github: "مشاهده گیت‌هاب",
      telegram: "عضویت در تلگرام",
      signalStudyTitle: "یادگیری",
      signalStudyText: "نوت‌بوک‌ها و جزوه‌ها",
      signalPracticeTitle: "تمرین",
      signalPracticeText: "تکلیف‌ها و مسئله‌ها",
      signalBuildTitle: "ساخت",
      signalBuildText: "پروژه‌ها با مخزن عمومی",
    },
    status: {
      title: "۸ مخزن عمومی",
      text: "تکلیف‌ها، نوت‌بوک‌ها، قالب‌ها، مسئله‌ها، پیش‌آزمون، سورس ربات، سورس سایت و مستندات سازمان. آرشیو اسلایدها خصوصی است.",
      link: "سورس سایت",
    },
    materials: {
      eyebrow: "منابع فعلی",
      title: "بازیابی و بررسی شده",
      allRepos: "همه مخزن‌های عمومی",
      slidesTitle: "فایل‌های خصوصی اسلاید",
      slidesText: "اسلایدها و فایل‌های کارگاه در مخزن خصوصی Slides برای تیم دوره نگهداری می‌شوند.",
      privateNote: "لینک عمومی ندارد",
      notebooksTitle: "نوت‌بوک‌های بررسی شده",
      notebooksText: "نوت‌بوک‌های شروع، جلسه‌ها، مسترکلاس، پروژه و پاسخ‌ها بررسی ساختار JSON را می‌گذرانند.",
      notebooksLink: "مشاهده نوت‌بوک‌ها",
      solutionsTitle: "گروه‌های پاسخ",
      solutionsText: "تکلیف‌های ۱ تا ۷ پاسخ پایتون و پاسخ نوت‌بوکی همراه با اسکریپت بررسی محلی دارند.",
      solutionsLink: "مشاهده پاسخ‌ها",
      rebuiltTitle: "تکلیف‌های بازسازی شده",
      rebuiltText: "تکلیف‌های Numpy و Pandas اکنون سورس قابل ویرایش، پاسخ، بررسی و نوت‌بوک دارند.",
      assignmentsLink: "مشاهده تکلیف‌ها",
      datasetTitle: "داده نهایی",
      datasetText: "تکلیف یادگیری ماشین اکنون صورت مسئله، فرهنگ داده، داده CSV و بررسی شروع دارد.",
      datasetLink: "مشاهده داده",
    },
    path: {
      eyebrow: "مسیر دوره",
      title: "از ریاضی تا یادگیری ماشین",
      oneTitle: "از نوت‌بوک‌ها شروع کنید",
      oneText: "برای تمرین پایتون، کارهای کلاسی و نکات ارسال، از مخزن نوت‌بوک‌ها استفاده کنید.",
      twoTitle: "مسئله‌ها را حل کنید",
      twoText: "تکلیف‌ها، پیش‌آزمون و مثال‌های کوچک پایتون کلاس را قدم به قدم کار کنید.",
      threeTitle: "سورس را مرتب نگه دارید",
      threeText: "PDFها را از پوشه‌های LaTeX بسازید و جزوه‌ها را برای هر جلسه آماده نگه دارید.",
    },
    projects: {
      eyebrow: "پروژه‌های منتخب دانشجویان",
      title: "پروژه‌های دانشجویی",
      note: "پروژه‌های پایانی بخش برنامه‌نویسی پایتون که در روز پروژه‌ها ارائه شدند.",
      repoLink: "مخزن پروژه",
      websiteLink: "وب‌سایت پروژه",
      one: {
        number: "پروژه ۱",
        name: "راوتن‌بات",
        owner: "توسعه‌دهنده: امیرحسین نوروزی",
        title: "دستیار آموزشی آناتومی",
        text: "راوتن‌بات تصویر آناتومی را دریافت می‌کند، بخش‌های قابل مشاهده را شماره‌گذاری می‌کند و نام هر بخش را به کاربر می‌گوید. دانشجو می‌تواند درباره هر بخش مشخص شده پرسش تکمیلی بپرسد.",
      },
      two: {
        number: "پروژه ۲",
        name: "مدکاردی",
        owner: "توسعه‌دهندگان: بنیامین ذوالفقاری و محمدحسین کاظمی",
        title: "مرور نمونه‌سوالات پزشکی",
        text: "مدکاردی به دانشجویان کمک می‌کند بسته‌های سوال بسازند، آزمون‌های قبلی را مرور کنند، پاسخ دقیق بگیرند و پیش از آزمون از فلش‌کارت‌های سریع استفاده کنند.",
      },
      three: {
        number: "پروژه ۳",
        owner: "توسعه‌دهنده: رضا حاجی قاسمی",
        title: "راهنمای غربالگری نوزاد",
        text: "NeoScreenBot داده‌های غربالگری نوزاد را با دستورالعمل رسمی وزارت بهداشت بررسی می‌کند و وضعیت طبیعی، نیاز به تکرار، نیاز به آزمایش تاییدی یا وضعیت اورژانسی را برمی‌گرداند.",
      },
      four: {
        number: "پروژه ۴",
        owner: "توسعه‌دهنده: محمد دهقان نیری",
        title: "ابزار بک‌تست استراتژی معاملاتی",
        text: "BackTestPro به کاربر اجازه می‌دهد بدون نوشتن کد، استراتژی معاملاتی خود را با داده‌های گذشته آزمایش کند و نتیجه را در زمان کوتاه بررسی کند.",
      },
      five: {
        number: "پروژه ۵",
        owner: "توسعه‌دهندگان: آلین اسماعیلی و الهه انسانی",
        title: "سامانه سلامت دیجیتال",
        text: "EurekaAI تحلیلگر علائم، دستیار صوتی و مدیریت کلینیک را کنار هم می‌آورد تا راهنمایی ساده پزشکی، دسترسی صوتی و مدیریت سبک بیماران و نوبت‌ها را پوشش دهد.",
      },
    },
    gallery: {
      eyebrow: "گالری",
      title: "لحظه‌هایی از دوره",
      note: "عکس‌هایی از جلسه‌های AbzumsAI و روز پروژه‌ها.",
      photo1: "عکس ۱",
      photo2: "عکس ۲",
      photo3: "عکس ۳",
      photo4: "عکس ۴",
      photo5: "عکس ۵",
      photo6: "عکس ۶",
      photo7: "عکس ۷",
      photo8: "عکس ۸",
      photo9: "عکس ۹",
      photo10: "عکس ۱۰",
      photo11: "عکس ۱۱",
    },
    teachers: {
      eyebrow: "تیم آموزش",
      title: "مدرسان دوره",
      note: "افرادی که در آموزش، راهنمایی و انتقال تجربه در طول دوره نقش داشتند.",
      links: {
        sharif: "دانشگاه شریف",
        unisa: "UNISA",
        cuhk: "CUHK",
        ibcol: "IBCOL",
        micromaster: "دوره Micromaster",
        ceSharif: "دانشکده کامپیوتر شریف",
        neurailogic: "NeurAILogic",
        mpii: "MPII",
        hkust: "HKUST",
        tapsi: "تپسی",
        epfl: "EPFL",
        ista: "ISTA",
        connect: "کانکت",
      },
      iman: {
        name: "ایمان محمدی",
        one: "لیسانس مهندسی کامپیوتر از دانشگاه صنعتی شریف",
        two: "پژوهشگر علوم کامپیوتر در University of Salerno",
        three: "پژوهشگر علوم کامپیوتر در CUHK",
        four: "مدال برنز المپیاد جهانی بلاکچین",
        five: "دستیار آموزشی در دوره Micromaster",
      },
      ali: {
        name: "علی محمدزاده شبستری",
        one: "دانشجوی مهندسی کامپیوتر در دانشگاه صنعتی شریف",
        two: "دستیار آموزشی برنامه‌نویسی در چندین درس دانشکده مهندسی کامپیوتر شریف",
        three: "پژوهشگر هوش مصنوعی در NeurAILogic",
        four: "رتبه ۱۳ کنکور ریاضی",
      },
      sina: {
        name: "سینا مرادی",
        one: "دانشجوی پزشکی دانشگاه علوم پزشکی البرز",
        two: "برنامه‌نویس و پژوهشگر هوش مصنوعی در رادیولوژی",
        three: "مدرس سابق ریاضی در مدارس علامه حلی ۸ و ۵ تهران",
        four: "فناور برتر استان در سال ۱۴۰۳",
      },
      negar: {
        name: "نگار باباشاه",
        one: "لیسانس مهندسی کامپیوتر از دانشگاه صنعتی شریف",
        two: "پژوهشگر الگوریتم در موسسه Max Planck آلمان",
        three: "پژوهشگر الگوریتم در HKUST",
        four: "مهندس نرم‌افزار در تپسی",
        five: "مدرس سابق المپیاد ریاضی در مدارس سلام تهران",
        six: "مدال طلای المپیاد ریاضی کشوری",
      },
      mehdi: {
        name: "مهدی لطفیان",
        one: "لیسانس مهندسی کامپیوتر از دانشگاه صنعتی شریف",
        two: "پژوهشگر یادگیری ماشین در EPFL سوییس",
        three: "پژوهشگر علوم کامپیوتر در CUHK",
        four: "پژوهشگر در ISTA اتریش",
      },
      ehsan: {
        name: "احسان خرمالی",
        one: "پژوهشگر هوش مصنوعی و نوروساینس",
        two: "دانشجوی سال ششم پزشکی",
        three: "هم‌بنیان‌گذار کانکت",
      },
      shayan: {
        name: "شایان صالحی",
        one: "پژوهشگر هوش مصنوعی در Imperial College لندن",
        two: "فارغ‌التحصیل کارشناسی مهندسی کامپیوتر از دانشگاه صنعتی شریف",
        three: "رتبه ۲۵ کنکور ریاضی",
      },
      kowsar: {
        name: "کوثر شمس",
        one: "دانشجوی کارشناسی ارشد هوش مصنوعی در دانشگاه تهران",
        two: "پژوهشگر هوش مصنوعی در پژوهشکده سلول‌های بنیادی رویان",
        three: "رتبه ۱۶ کنکور کارشناسی ارشد",
      },
    },
    videos: {
      eyebrow: "ویدیوهای عمومی",
      title: "ویدیوهای عمومی",
      note: "سه ویدیو از بخش اول دوره در تلگرام به صورت عمومی منتشر شده است.",
      watch: "مشاهده در تلگرام",
      one: {
        kicker: "بخش اول، جلسه ۱",
        title: "فلسفه تکنولوژی و برنامه‌نویسی در عصر هوش مصنوعی",
        text: "با حضور دکتر محمدعلی آبام، همراه با انتقال تجربه پژوهشگران و فعالان هوش مصنوعی از دانشگاه صنعتی شریف.",
      },
      two: {
        kicker: "بخش اول، جلسه ۲",
        title: "استارتاپ‌های سلامت دیجیتال در عصر هوش مصنوعی",
        text: "با حضور مونا اعظمی، دکتر فرید فرجی و دکتر آذین اعتمادی منش، همراه با پرسش و پاسخ.",
      },
      three: {
        kicker: "بخش اول، جلسه ۳",
        title: "مسیر ورود دانشجویان علوم پزشکی به هوش مصنوعی",
        text: "جلسه انتقال تجربه با دکتر معین شریعت نیا، دانشجوی پزشکی دانشگاه علوم پزشکی تهران و فعال حوزه هوش مصنوعی.",
      },
    },
    repos: {
      eyebrow: "مخزن‌های عمومی",
      title: "کارهای دوره در یک جا",
      filterAll: "همه",
      filterCourse: "دوره",
      filterCode: "کد",
      filterDocs: "مستندات",
      searchLabel: "جستجوی مخزن‌ها",
      searchPlaceholder: "جستجوی مخزن‌ها",
      kindCourse: "دوره",
      kindCode: "کد",
      kindDocs: "مستندات",
      openRepo: "مشاهده مخزن",
      assignmentsText: "صورت تکلیف‌ها، سورس‌های قابل ویرایش، بررسی‌ها و پاسخ‌های دوره.",
      notebooksText: "نوت‌بوک‌های پایتون، نکات ارسال و پاسخ‌های بررسی شده برای کارهای کلاسی.",
      problemsText: "فایل‌های کوچک پایتون برای مثال‌ها و تمرین.",
      pretestText: "سورس‌های LaTeX آزمون و پاسخ برای پیش‌آزمون.",
      latexText: "قالب تکلیف، استایل مشترک دوره و نکات ساخت.",
      botText: "سورس ربات تلگرام برای پرسش‌های رایج دوره.",
      githubText: "پروفایل سازمان در گیت‌هاب.",
      siteText: "سایت عمومی دوره روی GitHub Pages.",
      empty: "هیچ مخزنی با این جستجو پیدا نشد.",
      showingAll: "نمایش {count} مخزن",
      showingFiltered: "نمایش {count} مخزن {filter}",
      labels: {
        course: "دوره",
        code: "کد",
        docs: "مستندات",
      },
    },
    footer: {
      text: "AbzumsAI، دانشگاه علوم پزشکی البرز و جامعه MedX.",
      github: "سازمان گیت‌هاب",
    },
  },
};

const filterButtons = document.querySelectorAll(".filter-button");
const repoCards = document.querySelectorAll(".repo-card");
const repoCount = document.querySelector(".repo-count");
const repoSearch = document.querySelector("#repo-search");
const emptyState = document.querySelector(".empty-state");
const languageButtons = document.querySelectorAll("[data-language-button]");
const numberElements = document.querySelectorAll("[data-number-en][data-number-fa]");
let activeFilter = "all";
let activeLanguage = getStoredLanguage();

function getStoredLanguage() {
  try {
    const stored = localStorage.getItem("abzumsai-language");
    return stored === "fa" ? "fa" : "en";
  } catch {
    return "en";
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem("abzumsai-language", language);
  } catch {
    return;
  }
}

function t(key) {
  return key.split(".").reduce((value, part) => value && value[part], translations[activeLanguage]) || key;
}

function applyTemplate(template, values) {
  return Object.entries(values).reduce(
    (text, [key, value]) => text.replace(`{${key}}`, value),
    template,
  );
}

function formatNumber(value) {
  if (activeLanguage !== "fa") return String(value);
  return new Intl.NumberFormat("fa-IR", { useGrouping: false }).format(value);
}

function applyLanguage(language) {
  activeLanguage = language;
  const isPersian = language === "fa";
  document.documentElement.lang = isPersian ? "fa" : "en";
  document.documentElement.dir = isPersian ? "rtl" : "ltr";
  document.title = translations[language].title;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", translations[language].metaDescription);

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.setAttribute("content", translations[language].metaDescription);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.setAttribute("alt", t(element.dataset.i18nAlt));
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });

  numberElements.forEach((element) => {
    element.textContent = isPersian ? element.dataset.numberFa : element.dataset.numberEn;
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.languageButton === language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  saveLanguage(language);
  updateRepos();
}

function updateRepos() {
  if (!repoSearch || !repoCount || !emptyState) return;

  const searchText = repoSearch.value.trim().toLowerCase();
  let visibleCount = 0;

  repoCards.forEach((card) => {
    const matchesFilter = activeFilter === "all" || card.dataset.kind === activeFilter;
    const matchesSearch = card.textContent.toLowerCase().includes(searchText);
    const shouldShow = matchesFilter && matchesSearch;
    card.classList.toggle("hidden", !shouldShow);
    if (shouldShow) visibleCount += 1;
  });

  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === activeFilter;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (activeFilter === "all") {
    repoCount.textContent = applyTemplate(t("repos.showingAll"), { count: formatNumber(visibleCount) });
  } else {
    repoCount.textContent = applyTemplate(t("repos.showingFiltered"), {
      count: formatNumber(visibleCount),
      filter: t(`repos.labels.${activeFilter}`),
    });
  }

  emptyState.hidden = visibleCount > 0;
}

function setFilter(filter) {
  activeFilter = filter;
  updateRepos();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.languageButton));
});

if (repoSearch) {
  repoSearch.addEventListener("input", updateRepos);
}

applyLanguage(activeLanguage);
