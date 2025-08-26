import { createI18n } from 'vue-i18n';

// Переводы с корректными языковыми кодами
const messages = {
  'en-US': {
    navbar: {
      about: 'About',
      feedback: 'Feedback',
      pricing: 'Pricing',
      faq: 'FAQ',
      login: 'Login',
      signup: 'Sign up',
      profile: 'Profile',
    },

    adventages: {
      title: 'About Us',
      title2: 'Why FlawlessSpace?',
      first: {
        name: 'Performance',
        text: 'We have thought through the logic of switching between Minecraft clients, and when you are called to check for unwanted software, you can simply disconnect from your cheat client and pass the test on a second clean Minecraft client.'
      },
      second: {
        name: 'Storage',
        text: "Enjoy superior cleaning features. We paid special attention to cleaning up unwanted software, which helps you pass verification on absolutely any server."
      },
      third: {
        name: 'Optimization',
        text: 'Our program is highly optimized. You will not encounter low FPS because we have optimized the creation and placement of virtual space for absolutely any server.'
      },
      fourth: {
        name: 'Linux Manager',
        text: 'Our Linux Manager will configure your OS to securely pass checks on servers. We support distributions such as Ubuntu, Deepin.'
      },
      fifth: {
        name: 'Custom version',
        text: 'Also, we have our own custom version of Minecraft 1.16.5 specially modified to pass checks on servers. With this version - you are safe!'
      },
      stat: {
      },
    },

    addons: {
      title: 'Additions',
      title2: 'Additional software',
      first: {
        name: 'Performance',
        text: 'We have thought through the logic of switching between Minecraft clients, and when you are called to check for unwanted software, you can simply disconnect from your cheat client and pass the test on a second clean Minecraft client.'
      },
      second: {
        name: 'Storage',
        text: "Enjoy superior cleaning features. We paid special attention to cleaning up unwanted software, which helps you pass verification on absolutely any server."
      },
      third: {
        name: 'Optimization',
        text: 'Our program is highly optimized. You will not encounter low FPS because we have optimized the creation and placement of virtual space for absolutely any server.'
      },
      stat: {
      },
    },


    title: {
      first: 'Get FlawlessSpace.',
      second: 'Unique product on market',
      button: 'Get it',
    },

    feedback: {
      title: "FeedBack",
      title2: "What Our Customers Say",
    },

    pricing: {
      title: "Pricing",
      title2: "Select a Subscription",
      month: "1 month",
      three_months: "3 month",
      year: "12 months",
      lifetime: "Lifetime",
      button: 'Buy'
    },

    faq: {
      title: 'Frequently Asked Questions',
      q1: 'How to launch FlawlessSpace Software after Purchase?',
      a1: 'After purchasing a subscription, download the executable exe file from your profile and run it.',
      q2: 'How can I contact Support?',
      a2: 'You can contact support in our Discord channel.',
      q3: 'How do I update my Profile Information?',
      a3: 'Your profile information is updated automatically. You do not need to do anything.',
      q4: 'Who can see my Profile Information?',
      a4: 'Clients can view public information about any customer by entering their nicknames in the URL. However, your private information (Email, HWID, Password) remains visible only to you.'
    },

    privacy: {
      title: 'Privacy Policy',
      date: '04.12.2024',
      section1: {
        title: '1. Introduction',
        text: 'Welcome to FlawlessSpace ("we," "our," or "us"). We are committed to protecting your privacy and ensuring a safe online experience for all our customers. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our website and services.',
      },
      section2: {
        title: '2. Information We Collect',
        text: 'We may collect the following types of personal information:',
        name: 'Name',
        nameDesc: 'For identification and communication purposes.',
        email: 'Email Address',
        emailDesc: 'To provide updates, support, and promotional offers related to our services.',
      },
      section3: {
        title: '3. How We Use Your Information',
        text: 'Your personal information may be used for the following purposes:',
        communication: 'Communication',
        communicationDesc: 'To send you updates, respond to inquiries, and provide support.',
        improvement: 'Service Improvement',
        improvementDesc: 'To enhance our website and services, ensuring the best possible experience.',
        legal: 'Legal Compliance',
        legalDesc: 'To comply with applicable laws and regulations.',
      },
      section4: {
        title: '4. Data Security',
        text: 'We implement a variety of security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.',
      },
      section5: {
        title: '5. Data Sharing',
        text: 'We do not sell, trade, or otherwise transfer your personal information to outside parties, except when necessary for service provision, or as required by law.',
      },
      section6: {
        title: '6. Data Retention',
        text: 'We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law.',
      },
      section7: {
        title: '7. Your Rights',
        text: 'You have the right to:',
        access: 'Access and update your personal information.',
        delete: 'Request the deletion of your personal information.',
        withdraw: 'Withdraw consent to data processing at any time by contacting us at',
      },
      section8: {
        title: '8. Changes to This Privacy Policy',
        text: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the effective date will be updated accordingly.',
      },
      section9: {
        title: '9. Contact Us',
        text: 'If you have any questions or concerns about this Privacy Policy, please contact us at ',
      },
    },

    rules: {
      title: 'Rules of Use',
      date: '04.12.2024',
      section1: {
        title: '1. Prohibited Activities',
        text: 'Customers of FlawlessSpace are prohibited from:',
        editingFiles: 'Editing Files',
        editingFilesDesc: 'You are not allowed to modify any files related to the launcher, website, or software.',
        hacking: 'Hacking or Cracking',
        hackingDesc: 'Any attempt to hack or crack the launcher, website, or software is strictly forbidden.',
        accountSharing: 'Account Sharing',
        accountSharingDesc: 'Selling, transferring, or sharing your account is not allowed.',
        fileDistribution: 'File Distribution',
        fileDistributionDesc: 'Unauthorized distribution of files related to the launcher, website, or software is prohibited.',
      },
      section2: {
        title: '2. Account Suspension',
        text: 'The Administrator reserves the right to suspend or ban your account at their sole discretion for violations of these rules or any other behavior deemed inappropriate.',
      },
      section3: {
        title: '3. Compliance',
        text: 'By using FlawlessSpace, you agree to comply with these rules and any other policies or guidelines provided by us.',
      },
      section4: {
        title: '4. Contact Information',
        text: 'For any inquiries or issues related to these rules, please contact us at ',
      },
    },

    terms: {
      title: 'Terms of Service',
      date: '04.12.2024',
      section1: {
        title: '1. Introduction',
        text: 'These Terms of Service ("Terms") govern your use of the FlawlessSpace website and services ("Services"). By accessing or using our Services, you agree to be bound by these Terms.',
      },
      section2: {
        title: '2. Customer Accounts',
        text: 'To access certain features of our Services, you may be required to create an account. You agree to provide accurate and complete information when creating your account and to keep this information up to date.',
      },
      section3: {
        title: '3. Customer Conduct',
        text: 'When using our Services, you agree to:',
        respectLaw: 'Respect the Law',
        respectLawDesc: 'Comply with all applicable laws and regulations.',
        respectOthers: 'Respect Others',
        respectOthersDesc: 'Refrain from harassing, abusing, or harming others.',
        respectServices: 'Respect Our Services',
        respectServicesDesc: 'Do not attempt to disrupt, hack, or otherwise interfere with our Services.',
      },
      section4: {
        title: '4. Intellectual Property',
        text: 'All content and materials available on our website, including but not limited to text, graphics, logos, and software, are the property of FlawlessSpace or our licensors and are protected by intellectual property laws.',
      },
      section5: {
        title: '5. Payment and Refund Policy',
        payment: 'Payment',
        paymentDesc: 'Payment for services must be made through our approved payment methods. By completing a purchase, you agree to pay the indicated amount.',
        refunds: 'Refunds',
        refundsDesc: 'Refund requests will be considered on a case-by-case basis. If you believe you are entitled to a refund, please contact us at ',
      },
      section6: {
        title: '6. Limitation of Liability',
        text: 'To the maximum extent permitted by law, FlawlessSpace will not be liable for any indirect, incidental, or consequential damages arising out of or in connection with your use of our Services.',
      },
      section7: {
        title: '7. Termination',
        text: 'We reserve the right to terminate your access to our Services at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other customers or our business interests.',
      },
      section8: {
        title: '8. Changes to These Terms',
        text: 'We may update these Terms from time to time. Any changes will be posted on this page, and the effective date will be updated accordingly.',
      },
      section9: {
        title: '9. Contact Us',
        text: 'If you have any questions or concerns about these Terms, please contact us at ',
      },
    },

    footer: {
      contact_email: "Contact email ",
      copyright: "Copyright FlawlessSpace © 2022-2024",
      privacy_policy: "Privacy Policy",
      terms_of_service: "Terms of Service",
      rules_of_use: "Rules of Use"
  }

  },
  'ru-RU': {
    navbar: {
      about: 'О нас',
      feedback: 'Отзывы',
      pricing: 'Цены',
      faq: 'Частые вопросы',
      login: 'Вход',
      signup: 'Регистрация',
      profile: 'Профиль',
    },

    title: {
      first: 'Получите FlawlessSpace.',
      second: 'Уникальный в своем роде продукт',
      button: 'Получить',
    },

    adventages: {
      title: 'О нас',
      title2: 'Почему FlawlessSpace?',
      first: {
        name: 'Производительность',
        text: 'Мы продумали логику переключения между майнкрафт - клиентами, и в то время когда вас вызвают на проверку нежелательного ПО, вы можете попросту отключится с вашего чит-клиента и пройти проверку на втором чистом майнкрафт клиенте.'
      },
      second: {
        name: 'Хранилище',
        text: "Оцените превосходные функции очистки. Мы уделили особое внимание очистке нежелательного ПО, что помогает вам пройти проверку на абсолютно любом сервере."
      },
      third: {
        name: 'Оптимизация',
        text: 'Наша программа отлично оптимизирована. Вы не столкнетесь с низким FPS, потому что мы оптимизировали создание и размещение виртуального пространства для абсолютно любого сервера.'
      },
      fourth: {
        name: 'Linux Manager',
        text: 'Наш Linux Manager настроит вашу ОС для безопасного прохождения проверок на серверах. Мы поддерживаем такие дистрибутивы как Deepin.'
      },
      fifth: {
        name: 'Custom version',
        text: 'Также, у нас есть своя кастомная версия Minecraft 1.16.5 специально модифицированная для прохождения проверок на серверах. С этой версией - вы в безопасности!'
      },
      stat: {
      },
    },

    addons: {
      title: 'Дополнения',
      title2: 'Дополнительный софт',
      first: {
        name: 'Производительность',
        text: 'Мы продумали логику переключения между майнкрафт - клиентами, и в то время когда вас вызвают на проверку нежелательного ПО, вы можете попросту отключится с вашего чит-клиента и пройти проверку на втором чистом майнкрафт клиенте.'
      },
      second: {
        name: 'Хранилище',
        text: "Оцените превосходные функции очистки. Мы уделили особое внимание очистке нежелательного ПО, что помогает вам пройти проверку на абсолютно любом сервере."
      },
      third: {
        name: 'Оптимизация',
        text: 'Наша программа отлично оптимизирована. Вы не столкнетесь с низким FPS, потому что мы оптимизировали создание и размещение виртуального пространства для абсолютно любого сервера.'
      },
      stat: {
      },
    },

    feedback: {
      title: "Фидбек",
      title2: "Что Говорят Покупатели",
    },
    
    pricing: {
      title: "Покупка",
      title2: "Выберите план",
      month: "1 месяц",
      three_months: "3 месяца",
      year: "12 месяцев",
      lifetime: "Навсегда",
      button: 'Купить'
    },

    faq: {
      title: 'Часто задаваемые вопросы',
      q1: 'Как запустить FlawlessSpace после покупки?',
      a1: 'После покупки подписки загрузите исполняемый exe файл из вашего профиля и запустите его.',
      q2: 'Как я могу связаться с поддержкой?',
      a2: 'Вы можете обратиться в поддержку через наш Discord-канал.',
      q3: 'Как обновить информацию в профиле?',
      a3: 'Информация в вашем профиле обновляется автоматически. Вам не нужно ничего делать.',
      q4: 'Кто может видеть мою информацию профиля?',
      a4: 'Клиенты могут видеть публичную информацию о любом покупателе, введя его ник в URL. Однако ваша личная информация (Email, HWID, Пароль) остается видимой только для вас.'
    },

    privacy: {
      title: 'Политика конфиденциальности',
      date: '04.12.2024',
      section1: {
        title: '1. Введение',
        text: 'Добро пожаловать в FlawlessSpace ("мы", "наш" или "нас"). Мы стремимся защитить вашу конфиденциальность и обеспечить безопасный онлайн-опыт для всех наших покупателей. В данной Политике конфиденциальности описывается, как мы собираем, используем и защищаем вашу личную информацию при взаимодействии с нашим сайтом и услугами.',
      },
      section2: {
        title: '2. Информация, которую мы собираем',
        text: 'Мы можем собирать следующие типы личной информации:',
        name: 'Имя',
        nameDesc: 'Для целей идентификации и связи.',
        email: 'Адрес электронной почты',
        emailDesc: 'Для предоставления обновлений, поддержки и рекламных предложений, связанных с нашими услугами.',
      },
      section3: {
        title: '3. Как мы используем вашу информацию',
        text: 'Ваша личная информация может быть использована для следующих целей:',
        communication: 'Связь',
        communicationDesc: 'Для отправки вам обновлений, ответа на запросы и предоставления поддержки.',
        improvement: 'Улучшение услуг',
        improvementDesc: 'Для улучшения нашего сайта и услуг, обеспечивая наилучший возможный опыт.',
        legal: 'Соблюдение закона',
        legalDesc: 'Для соблюдения применимых законов и нормативных актов.',
      },
      section4: {
        title: '4. Безопасность данных',
        text: 'Мы применяем различные меры безопасности для защиты вашей личной информации от несанкционированного доступа, изменения, разглашения или уничтожения.',
      },
      section5: {
        title: '5. Передача данных',
        text: 'Мы не продаем, не обмениваем и не передаем вашу личную информацию третьим лицам, за исключением случаев, когда это необходимо для предоставления услуг или в соответствии с законом.',
      },
      section6: {
        title: '6. Хранение данных',
        text: 'Мы сохраняем вашу личную информацию настолько долго, насколько это необходимо для выполнения целей, указанных в данной Политике конфиденциальности, если более длительный срок хранения не требуется или разрешен законом.',
      },
      section7: {
        title: '7. Ваши права',
        text: 'У вас есть право на:',
        access: 'Доступ и обновление вашей личной информации.',
        delete: 'Запрос на удаление вашей личной информации.',
        withdraw: 'Отзыв согласия на обработку данных в любое время, связавшись с нами по адресу ',
      },
      section8: {
        title: '8. Изменения в данной Политике конфиденциальности',
        text: 'Мы можем время от времени обновлять данную Политику конфиденциальности. Любые изменения будут опубликованы на этой странице, а дата вступления в силу будет обновлена соответственно.',
      },
      section9: {
        title: '9. Контакты',
        text: 'Если у вас есть вопросы или замечания по поводу данной Политики конфиденциальности, пожалуйста, свяжитесь с нами по адресу ',
      },
    },

    rules: {
      title: 'Правила использования',
      date: '04.12.2024',
      section1: {
        title: '1. Запрещенные действия',
        text: 'Покупателям FlawlessSpace запрещается:',
        editingFiles: 'Изменение файлов',
        editingFilesDesc: 'Запрещается изменять любые файлы, связанные с лаунчером, веб-сайтом или программным обеспечением.',
        hacking: 'Взлом или взлом программного обеспечения',
        hackingDesc: 'Любые попытки взлома лаунчера, веб-сайта или программного обеспечения строго запрещены.',
        accountSharing: 'Передача аккаунта',
        accountSharingDesc: 'Продажа, передача или совместное использование вашего аккаунта не разрешается.',
        fileDistribution: 'Распространение файлов',
        fileDistributionDesc: 'Неавторизованное распространение файлов, связанных с лаунчером, веб-сайтом или программным обеспечением, запрещено.',
      },
      section2: {
        title: '2. Приостановка аккаунта',
        text: 'Администратор оставляет за собой право приостановить или заблокировать ваш аккаунт по своему усмотрению за нарушение этих правил или любое другое поведение, считающееся неприемлемым.',
      },
      section3: {
        title: '3. Соблюдение',
        text: 'Используя FlawlessSpace, вы соглашаетесь соблюдать эти правила и любые другие политики или рекомендации, предоставленные нами.',
      },
      section4: {
        title: '4. Контактная информация',
        text: 'По любым вопросам или проблемам, связанным с этими правилами, пожалуйста, свяжитесь с нами по адресу',
      },
    },

    terms: {
      title: 'Условия использования',
      date: '04.12.2024',
      section1: {
        title: '1. Введение',
        text: 'Эти Условия использования ("Условия") регулируют ваше использование веб-сайта и услуг FlawlessSpace ("Услуги"). Доступ к нашим Услугам или их использование означает, что вы соглашаетесь соблюдать эти Условия.',
      },
      section2: {
        title: '2. Покупательские аккаунты',
        text: 'Для доступа к определенным функциям наших Услуг вам может потребоваться создать аккаунт. Вы соглашаетесь предоставить точную и полную информацию при создании аккаунта и поддерживать эту информацию в актуальном состоянии.',
      },
      section3: {
        title: '3. Поведение покупателей',
        text: 'При использовании наших Услуг вы соглашаетесь:',
        respectLaw: 'Соблюдать закон',
        respectLawDesc: 'Соблюдать все применимые законы и нормы.',
        respectOthers: 'Уважать других',
        respectOthersDesc: 'Не преследовать, не злоупотреблять и не причинять вред другим.',
        respectServices: 'Уважать наши Услуги',
        respectServicesDesc: 'Не пытаться нарушить работу, взломать или каким-либо образом вмешиваться в наши Услуги.',
      },
      section4: {
        title: '4. Интеллектуальная собственность',
        text: 'Все контенты и материалы, доступные на нашем веб-сайте, включая, но не ограничиваясь текстом, графикой, логотипами и программным обеспечением, являются собственностью FlawlessSpace или наших лицензиаров и защищены законами об интеллектуальной собственности.',
      },
      section5: {
        title: '5. Политика оплаты и возвратов',
        payment: 'Оплата',
        paymentDesc: 'Оплата за услуги должна производиться через одобренные нами способы оплаты. Завершив покупку, вы соглашаетесь оплатить указанную сумму.',
        refunds: 'Возвраты',
        refundsDesc: 'Запросы на возврат будут рассматриваться в индивидуальном порядке. Если вы считаете, что имеете право на возврат, пожалуйста, свяжитесь с нами по адресу',
      },
      section6: {
        title: '6. Ограничение ответственности',
        text: 'В максимальной степени, разрешенной законом, FlawlessSpace не несет ответственности за любые косвенные, случайные или сопутствующие убытки, возникающие из-за или в связи с использованием вами наших Услуг.',
      },
      section7: {
        title: '7. Прекращение',
        text: 'Мы оставляем за собой право прекратить ваш доступ к нашим Услугам по нашему усмотрению, без предварительного уведомления, за действия, которые мы считаем нарушением этих Условий или вредящими другим покупателям или нашим бизнес-интересам.',
      },
      section8: {
        title: '8. Изменения в этих Условиях',
        text: 'Мы можем обновлять эти Условия время от времени. Все изменения будут опубликованы на этой странице, и дата вступления в силу будет обновлена соответственно.',
      },
      section9: {
        title: '9. Свяжитесь с нами',
        text: 'Если у вас есть вопросы или сомнения по поводу этих Условий, пожалуйста, свяжитесь с нами по адресу ',
      },
    },

    footer: {
      contact_email: "Контактный email ",
      copyright: "Авторские права FlawlessSpace © 2022-2025",
      privacy_policy: "Политика конфиденциальности",
      terms_of_service: "Условия обслуживания",
      rules_of_use: "Правила использования"
    }

  },
};

const savedLanguage = localStorage.getItem('userLanguage') || 'en-US';

// Создаем экземпляр i18n с типами
const i18n = createI18n({
  legacy: false,
  locale: savedLanguage, // Язык по умолчанию
  fallbackLocale: 'en-US', // Резервный язык
  messages, // Наши переводы
});

export default i18n;
