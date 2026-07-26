// Trilingual Nepali Curriculum Dataset (Nepali - English - Malayalam)

export const LEVELS = [
  {
    id: "level1",
    number: 1,
    title: "Beginner Essentials",
    subtitle: "Greetings, Etiquette & Basic Questions",
    badge: "🌱 Starter",
    color: "from-amber-500 to-amber-600",
    description: "Start here! Learn how to greet people respectfully, ask essential questions, and understand basic numbers."
  },
  {
    id: "level2",
    number: 2,
    title: "Travel & Bargaining",
    subtitle: "Taxis, Directions & Market Shopping",
    badge: "🚖 Visitor",
    color: "from-red-500 to-crimson-600",
    description: "Master navigating Nepal, hiring taxis, getting directions, and politely bargaining prices in Kathmandu markets."
  },
  {
    id: "level3",
    number: 3,
    title: "Dining & Socializing",
    subtitle: "Ordering Dal Bhat, Hotels & Friends",
    badge: "🥟 Explorer",
    color: "from-teal-500 to-emerald-600",
    description: "Order legendary Momos & Dal Bhat, express food preferences, check into hotels, and make warm local connections."
  },
  {
    id: "level4",
    number: 4,
    title: "Advanced Grammar",
    subtitle: "SOV Sentence Building & Honorifics",
    badge: "🏔️ Himalayan Master",
    color: "from-blue-500 to-indigo-600",
    description: "Deep dive into Nepali verb tenses and honorifics. See how Malayalam and Nepali sentence structure match 1-to-1!"
  }
];

export const MODULES = [
  // --- LEVEL 1 ---
  {
    id: "mod1",
    levelId: "level1",
    title: "1. Respectful Greetings & Etiquette",
    icon: "Hand",
    summary: "Fundamental words of respect used daily in Nepal.",
    items: [
      {
        id: "m1_1",
        nepali: "नमस्ते / नमस्कार",
        roman: "Namaste / Namaskar",
        english: "Hello / Respectful Greeting",
        malayalam: "നമസ്കാരം",
        malayalamRoman: "Namaskaram",
        tip: "Put your palms together at chest height when saying Namaste. 'Namaskar' is used for elders or formal situations."
      },
      {
        id: "m1_2",
        nepali: "धन्यवाद",
        roman: "Dhanyabaad",
        english: "Thank you",
        malayalam: "നന്ദി",
        malayalamRoman: "Nandi",
        tip: "In Nepal, a warm smile is often used alongside Dhanyabaad."
      },
      {
        id: "m1_3",
        nepali: "तपाईंलाई कस्तो छ?",
        roman: "Tapai lai kasto chha?",
        english: "How are you? (Respectful)",
        malayalam: "നിങ്ങൾക്ക് എങ്ങനെയുണ്ട്?",
        malayalamRoman: "Ningalkk enganeyund?",
        tip: "'Tapai' means 'You' with high respect, identical to 'Ningal' in Malayalam!"
      },
      {
        id: "m1_4",
        nepali: "मलाई सञ्चै छ।",
        roman: "Malai sanchhai chha.",
        english: "I am doing well.",
        malayalam: "എനിക്ക് സുഖമാണ്.",
        malayalamRoman: "Enikk sukhamanu.",
        tip: "'Malai' = 'Enikk' (To me / I am)."
      },
      {
        id: "m1_5",
        nepali: "मेरो नाम ... हो।",
        roman: "Mero naam ... ho.",
        english: "My name is ...",
        malayalam: "എന്റെ പേര് ... ആണ്.",
        malayalamRoman: "Ente per ... aanu.",
        tip: "Notice the verb 'ho' ('aanu' in Malayalam) comes at the VERY END of the sentence!"
      },
      {
        id: "m1_6",
        nepali: "हजुर",
        roman: "Hajur",
        english: "Yes / Pardon? / Respectful response",
        malayalam: "അതെ / എന്താണ്?",
        malayalamRoman: "Athe / Enthaan?",
        tip: "Hajur is the most versatile polite word in Nepal. Use it when someone calls your name or to acknowledge politely."
      },
      {
        id: "m1_7",
        nepali: "माफ गर्नुहोला",
        roman: "Maaf garnuhola",
        english: "Excuse me / I am sorry",
        malayalam: "ക്ഷമിക്കണം",
        malayalamRoman: "Kshamikkanam",
        tip: "Use this to politely get attention in a crowded market or apologize."
      }
    ]
  },
  {
    id: "mod2",
    levelId: "level1",
    title: "2. Essential Visitor Questions",
    icon: "HelpCircle",
    summary: "How to ask where things are and seek clarification.",
    items: [
      {
        id: "m2_1",
        nepali: "यो के हो?",
        roman: "Yo ke ho?",
        english: "What is this?",
        malayalam: "ഇത് എന്താണ്?",
        malayalamRoman: "Ithu enthaanu?",
        tip: "'Yo' = 'Ithu' (This), 'Ke' = 'Enthu' (What), 'Ho' = 'Aanu' (Is)."
      },
      {
        id: "m2_2",
        nepali: "... कहाँ छ?",
        roman: "... kaha chha?",
        english: "Where is ...?",
        malayalam: "... എവിടെയാണ്?",
        malayalamRoman: "... evideyaanu?",
        tip: "Example: 'Toilet kaha chha?' = Where is the toilet?"
      },
      {
        id: "m2_3",
        nepali: "यसको दाम कति हो?",
        roman: "Yasako daam kati ho?",
        english: "How much does this cost?",
        malayalam: "ഇതിന് എത്ര വിലയാണ്?",
        malayalamRoman: "Ithin ethra vilayaanu?",
        tip: "'Kati' means 'Ethra' (How much)."
      },
      {
        id: "m2_4",
        nepali: "तपाईं अंग्रेजी बोल्नुहुन्छ?",
        roman: "Tapai angreji bolnuhunchha?",
        english: "Do you speak English?",
        malayalam: "നിങ്ങൾ ഇംഗ്ലീഷ് സംസാരിക്കുമോ?",
        malayalamRoman: "Ningal English samsarikkumo?",
        tip: "Bolnu = speak."
      },
      {
        id: "m2_5",
        nepali: "म बुझ्दिन।",
        roman: "Ma bujhdina.",
        english: "I don't understand.",
        malayalam: "എനിക്ക് മനസ്സിലാകുന്നില്ല.",
        malayalamRoman: "Enikk manassilakunnilla.",
        tip: "'Ma' = 'I', 'Bujhdina' = 'Don't understand'."
      },
      {
        id: "m2_6",
        nepali: "बिस्तारै भन्नुहोस्।",
        roman: "Bistaarai bhannuhos.",
        english: "Please speak slowly.",
        malayalam: "മെല്ലെ പറയൂ.",
        malayalamRoman: "Melle parayoo.",
        tip: "'Bistaarai' = slowly."
      }
    ]
  },
  {
    id: "mod3",
    levelId: "level1",
    title: "3. Numbers & Currency (1 - 1000)",
    icon: "Hash",
    summary: "Crucial numbers for paying cash and prices.",
    items: [
      { id: "m3_1", nepali: "एक (१)", roman: "Ek", english: "1 (One)", malayalam: "ഒന്ന്", malayalamRoman: "Onnu" },
      { id: "m3_2", nepali: "दुई (२)", roman: "Dui", english: "2 (Two)", malayalam: "രണ്ട്", malayalamRoman: "Randu" },
      { id: "m3_3", nepali: "तीन (३)", roman: "Teen", english: "3 (Three)", malayalam: "മൂന്ന്", malayalamRoman: "Moonnu" },
      { id: "m3_4", nepali: "चार (४)", roman: "Chaar", english: "4 (Four)", malayalam: "നാല്", malayalamRoman: "Naalu" },
      { id: "m3_5", nepali: "पाँच (५)", roman: "Paanch", english: "5 (Five)", malayalam: "അഞ്ച്", malayalamRoman: "Anju" },
      { id: "m3_6", nepali: "दस (१०)", roman: "Das", english: "10 (Ten)", malayalam: "പത്ത്", malayalamRoman: "Pathu" },
      { id: "m3_7", nepali: "सय (१००)", roman: "Say", english: "100 (One Hundred)", malayalam: "നൂറ്", malayalamRoman: "Nooru" },
      { id: "m3_8", nepali: "हजार (१०००)", roman: "Hajaar", english: "1000 (One Thousand)", malayalam: "ആയിരം", malayalamRoman: "Aayiram" },
      { id: "m3_9", nepali: "पाँच सय (५००)", roman: "Paanch Say", english: "500 (Five Hundred)", malayalam: "അഞ്ഞൂറ്", malayalamRoman: "Annooru" }
    ]
  },

  // --- LEVEL 2 ---
  {
    id: "mod4",
    levelId: "level2",
    title: "4. Taxis, Buses & Getting Around",
    icon: "Compass",
    summary: "Hiring taxis in Kathmandu/Pokhara & giving directions.",
    items: [
      {
        id: "m4_1",
        nepali: "ठमेल जाने हो?",
        roman: "Thamel jaane ho?",
        english: "Are you going to Thamel?",
        malayalam: "തമേലിലേക്ക് പോകുന്നുണ്ടോ?",
        malayalamRoman: "Thamelilekk pokunnundo?",
        tip: "Replace 'Thamel' with any location like 'Pokhara', 'Airport', or 'Boudha'."
      },
      {
        id: "m4_2",
        nepali: "मिटरमा जाने हो?",
        roman: "Meter ma jaane ho?",
        english: "Will you go by meter?",
        malayalam: "മീറ്ററിൽ പോകുമോ?",
        malayalamRoman: "Meteril pokumo?",
        tip: "Always ask taxis in Kathmandu if they will use the meter!"
      },
      {
        id: "m4_3",
        nepali: "यहाँ रोक्नुहोस्।",
        roman: "Yaha roknuhos.",
        english: "Stop here please.",
        malayalam: "ഇവിടെ നിർത്തൂ.",
        malayalamRoman: "Ivide nirthoo.",
        tip: "'Yaha' = Here ('Ivide'), 'Roknuhos' = Stop ('Nirthoo')."
      },
      {
        id: "m4_4",
        nepali: "दायाँ / बायाँ / सीधा",
        roman: "Daaya / Baaya / Seedha",
        english: "Right / Left / Straight ahead",
        malayalam: "വലത്തോട്ട് / ഇടത്തോട്ട് / നേരെ",
        malayalamRoman: "Valathott / Idathott / Naere",
        tip: "Essential when directing your taxi driver!"
      },
      {
        id: "m4_5",
        nepali: "नजिकै छ कि टाढा?",
        roman: "Najikai chha ki taadha?",
        english: "Is it nearby or far away?",
        malayalam: "അടുത്താണോ അതോ ദൂരെയാണോ?",
        malayalamRoman: "Aduthano atho dooreyano?",
        tip: "'Najik' = Near ('Aduthu'), 'Taadha' = Far ('Doore')."
      }
    ]
  },
  {
    id: "mod5",
    levelId: "level2",
    title: "5. Market Shopping & Bargaining",
    icon: "ShoppingBag",
    summary: "How to negotiate prices politely in souvenir shops.",
    items: [
      {
        id: "m5_1",
        nepali: "अलि महँगो भयो।",
        roman: "Ali mahango bhayo.",
        english: "It's a bit expensive.",
        malayalam: "കുറച്ച് വില കൂടുതലാണ്.",
        malayalamRoman: "Kurach vila kooduthalanu.",
        tip: "'Mahango' = Expensive ('Vila kooduthu')."
      },
      {
        id: "m5_2",
        nepali: "अलि सस्तो गर्नुहोस् ना!",
        roman: "Ali sasto garnuhos na!",
        english: "Please make it a bit cheaper!",
        malayalam: "കുറച്ച് വില കുറച്ചു തരൂ!",
        malayalamRoman: "Kurach vila kurachu tharoo!",
        tip: "'Sasto' = Cheap ('Vila kuravu'). Adding 'na' makes it friendly and persuasive."
      },
      {
        id: "m5_3",
        nepali: "अन्तिम दाम कति हो?",
        roman: "Antim daam kati ho?",
        english: "What is your final price?",
        malayalam: "അവസാന വില എത്രയാണ്?",
        malayalamRoman: "Avasana vila ethrayanu?",
        tip: "Use this when you are ready to pay."
      },
      {
        id: "m5_4",
        nepali: "म यो लिन्छु।",
        roman: "Ma yo linchhu.",
        english: "I will take this one.",
        malayalam: "ഞാൻ ഇത് എടുക്കാം.",
        malayalamRoman: "Njaan ithu edukkam.",
        tip: "'Linchhu' = I will take / buy."
      }
    ]
  },

  // --- LEVEL 3 ---
  {
    id: "mod7",
    levelId: "level3",
    title: "7. Food, Dining & Momos",
    icon: "Utensils",
    summary: "Ordering local Nepali food, expressing preferences.",
    items: [
      {
        id: "m7_1",
        nepali: "एक प्लेट ममो दिनुहोस्।",
        roman: "Ek plate momo dinuhos.",
        english: "Please give me one plate of Momo.",
        malayalam: "ഒരു പ്ലേറ്റ് മോമോ തരൂ.",
        malayalamRoman: "Oru plate momo tharoo.",
        tip: "'Dinuhos' = Please give ('Tharoo' in Malayalam)."
      },
      {
        id: "m7_2",
        nepali: "दाल भात धेरै मीठो छ!",
        roman: "Dal bhat dherai meetho chha!",
        english: "Dal Bhat is very delicious!",
        malayalam: "പപ്പടവും ചോറും വളരെ സ്വാദിഷ്ടമാണ്!",
        malayalamRoman: "Dal Bhat valare swadishtamanu!",
        tip: "'Meetho' = Delicious / Tasty ('Ruchiyulla' / 'Swadishta')."
      },
      {
        id: "m7_3",
        nepali: "पिरो कम गर्नुहोस्।",
        roman: "Piro kam garnuhos.",
        english: "Please make it less spicy.",
        malayalam: "എരിവ് കുറച്ച് ഇടൂ.",
        malayalamRoman: "Erivu kurach idoo.",
        tip: "'Piro' = Spicy ('Erivu'). Essential if you prefer mild food!"
      },
      {
        id: "m7_4",
        nepali: "पानी दिनुहोस्।",
        roman: "Paani dinuhos.",
        english: "Please give water.",
        malayalam: "വെള്ളം തരൂ.",
        malayalamRoman: "Vellam tharoo.",
        tip: "'Paani' = Water."
      },
      {
        id: "m7_5",
        nepali: "बिल दिनुहोस्।",
        roman: "Bill dinuhos.",
        english: "Please bring the bill.",
        malayalam: "ബില്ല് തരൂ.",
        malayalamRoman: "Bill tharoo."
      }
    ]
  },
  {
    id: "mod8",
    levelId: "level3",
    title: "8. Health & Emergency Phrases",
    icon: "ShieldAlert",
    summary: "Stay safe! Asking for help, pharmacy, & doctors.",
    items: [
      {
        id: "m8_1",
        nepali: "मलाई सहयोग चाहियो!",
        roman: "Malai sahayog chaahiyo!",
        english: "I need help!",
        malayalam: "എനിക്ക് സഹായം വേണം!",
        malayalamRoman: "Enikk sahayam venam!",
        tip: "'Chaahiyo' = Needed ('Venam')."
      },
      {
        id: "m8_2",
        nepali: "मेरो पेट दुखिरहेको छ।",
        roman: "Mero pet dukhiraheko chha.",
        english: "My stomach is hurting.",
        malayalam: "എന്റെ വയറ് വേദനിക്കുന്നു.",
        malayalamRoman: "Ente vayaru vedanikkunnu.",
        tip: "'Pet' = Stomach ('Vayaru'), 'Dukhirah' = Pain ('Vedana')."
      },
      {
        id: "m8_3",
        nepali: "अस्पताल / औषधि पसल कहाँ छ?",
        roman: "Aspataal / Aushadhi pasal kaha chha?",
        english: "Where is the hospital / pharmacy?",
        malayalam: "ആശുപത്രി / മെഡിക്കൽ ഷോപ്പ് എവിടെയാണ്?",
        malayalamRoman: "Aasupathri / Pharmacy evideyaanu?"
      }
    ]
  },

  // --- LEVEL 4 ---
  {
    id: "mod10",
    levelId: "level4",
    title: "10. SOV Sentence Structure & Verbs",
    icon: "BookOpen",
    summary: "Understanding Subject + Object + Verb alignment in Nepali & Malayalam.",
    items: [
      {
        id: "m10_1",
        nepali: "म भात खान्छु।",
        roman: "Ma bhat khanchhu.",
        english: "I eat rice. (Lit: I rice eat)",
        malayalam: "ഞാൻ ചോറ് കഴിക്കുന്നു.",
        malayalamRoman: "Njaan chor kazhikkunnu.",
        tip: "Notice structure: Subject (Ma/Njaan) + Object (Bhat/Chor) + Verb (Khanchhu/Kazhikkunnu). English is SVO ('I eat rice'), but Nepali & Malayalam are both SOV!"
      },
      {
        id: "m10_2",
        nepali: "म नेपाल जाँदैछु।",
        roman: "Ma Nepal jaandaichhu.",
        english: "I am going to Nepal.",
        malayalam: "ഞാൻ നേപ്പാളിലേക്ക് പോകുകയാണ്.",
        malayalamRoman: "Njaan Nepalilekk pokukayaanu.",
        tip: "'Ma' = Njaan, 'Nepal' = Nepal, 'Jaandaichhu' = Pokukayaanu."
      },
      {
        id: "m10_3",
        nepali: "हामी साथी हौं।",
        roman: "Haami saathi haun.",
        english: "We are friends.",
        malayalam: "ഞങ്ങൾ കൂട്ടുകാരാണ്.",
        malayalamRoman: "Njangal koottukar aanu.",
        tip: "'Haami' = We ('Njangal'), 'Saathi' = Friend ('Koottukaran')."
      }
    ]
  }
];

export const SURVIVAL_KIT = [
  { nepali: "नमस्ते", roman: "Namaste", english: "Hello", malayalam: "നമസ്കാരം" },
  { nepali: "धन्यवाद", roman: "Dhanyabaad", english: "Thank you", malayalam: "നന്ദി" },
  { nepali: "कति हो?", roman: "Kati ho?", english: "How much?", malayalam: "എത്രയാണ്?" },
  { nepali: "कहाँ छ?", roman: "Kaha chha?", english: "Where is it?", malayalam: "എവിടെയാണ്?" },
  { nepali: "सहयोग गर्नुस्", roman: "Sahayog garnus", english: "Help me", malayalam: "സഹായിക്കൂ" },
  { nepali: "मीठो छ", roman: "Meetho chha", english: "It's delicious", malayalam: "സ്വാദിഷ്ടമാണ്" }
];
