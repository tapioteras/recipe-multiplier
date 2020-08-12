const testData = [
  {
    category: 2,
    name: "Avokado-linssipasta",
    description:
      "Kokeilin lisätä linssejä avokadopastaan ja toimi yllättävän hyvin!",
    portions: 2,
    ingredients: [
      {
        unit: "g",
        amount: 300,
        name: "Punaisia tölkkilinssejä",
      },
      {
        unit: "kpl",
        amount: 1,
        name: "Iso avokado",
      },
      {
        unit: "kpl",
        amount: 0.5,
        name: "Valkosipulin kynsi",
      },
      {
        unit: "kpl",
        amount: 0.3,
        name: "Tuore chili",
      },
      {
        unit: "rkl",
        amount: 1.5,
        name: "Oliiviöljyä",
      },
      {
        unit: "rkl",
        amount: 1,
        name: "Sitruunamehua",
      },
      {
        name: "Suolaa",
      },
      {
        name: "Juustoa, esim. Parmesan",
      },
      {
        name: "Mustapippuria",
      },
      {
        name: "Tagliatelle-pastaa",
      },
    ],
    steps: [
      "Huuhtele ja valuta linssit",
      "Pilko avokado kulhoon ja muussaa osittain haarukalla. Sekoita joukkoon silputtu valkosipuli, viipaloitu chili, pieni kourallinen juustoraastetta, oliiviöljy, sitruunaamehu sekä ripaus suolaa ja pippuria.",
      "Keitä ja valuta pasta",
      "Kuumenna linseejä mikrossa kunnes ne lämpenevät",
      "Sekoita pastan joukkoon avokadoseos sekä linssit. Annostele lautaselle ja raasta vähän juustoa päälle.",
    ],
  },
  {
    category: 3,
    name: "Iso hedelmäsmoothie",
    ingredients: [
      {
        unit: "kpl",
        amount: 2,
        name: "banaania",
      },
      {
        unit: "kpl",
        amount: 1,
        name: "appelsiini",
      },
      {
        unit: "dl",
        amount: 0.5,
        name: "kookosölyjä",
      },
      {
        unit: "dl",
        amount: 1,
        name: "proteiinijauhoa",
      },
      {
        unit: "dl",
        amount: 0.5,
        name: "chian siemeniä",
      },
      {
        unit: "rkl",
        amount: 2,
        name: "macajauhetta",
      },
      {
        unit: "pss",
        amount: 4,
        name: "pakastesmoothiehedelmiä",
      },
      {
        unit: "dl",
        amount: 0.5,
        name: "pala inkivääriä",
      },
      {
        unit: "l",
        amount: 0.5,
        name: "greippimehua",
      },
    ],
  },
  {
    category: 1,
    name: "Pehmeät sämpylät",
    ingredients: [
      {
        unit: "dl",
        amount: 3,
        name: "maitoa tai vettä",
      },
      {
        unit: "g",
        amount: 25,
        name: "hiivaa",
      },
      {
        unit: "tl",
        amount: 1,
        name: "suolaa",
      },
      {
        unit: "tl",
        amount: 1,
        name: "sokeria",
      },
      {
        unit: "dl",
        amount: 7,
        name: "vehnäjauhoja",
      },
      {
        unit: "g",
        amount: 60,
        name: "voita tai margariinia",
      },
    ],
    steps: [
      "Lämmitä neste haaleaksi.",
      "Liuota hiiva,suola ja sokeri nesteeseen.",
      "Lisää vehnäjauhoja vähin erin.",
      "Yhdistä pehmeä rasva ja vaivaa taikinaa,kunnes irtoaa astian reunoista.",
      "Peitä liinalla ja anna kohota lämpimässä paikassa kaksinkertaiseksi.",
      "Vaivaa taikinaa pöydällä,jaa 10 osaan ja leivo pitkänomaiseksi sämpylöiksi.",
      "Jauhota sämpylät päältä ja jätä kohoamaan leivinpaperin päälle pellille,liinalla peitettynä.",
      "Paista 250 asteessa 10-15 minuuttia.",
    ],
  },
  {
    name: "Kinuski-suolapähkinäpalat",
    portions: 15,
    category: 1,
    ingredientsCategories: [
      { id: 1, name: "Pohja" },
      { id: 2, name: "Kuorrutus" },
    ],
    ingredients: [
      {
        category: 1,
        unit: "g",
        amount: 200,
        name: "margariinia",
      },
      {
        category: 1,
        unit: "dl",
        amount: 2.5,
        name: "sokeria",
      },
      {
        category: 1,
        unit: "kpl",
        amount: 3,
        name: "kananmunaa",
      },
      {
        category: 1,
        unit: "dl",
        amount: 5,
        name: "vehnäjauhoja",
      },
      {
        category: 1,
        unit: "tl",
        amount: 2,
        name: "leivinjauhetta",
      },
      {
        category: 1,
        unit: "tl",
        amount: 2,
        name: "vanilijasokeria",
      },
      {
        category: 1,
        unit: "dl",
        amount: 2,
        name: "maitoa",
      },
      {
        category: 2,
        unit: "dl",
        amount: 2,
        name: "kuohukermaa",
      },
      {
        category: 2,
        unit: "dl",
        amount: 2,
        name: "fariinisokeria",
      },
      {
        category: 2,
        unit: "rkl",
        amount: 1,
        name: "margariinia",
      },
      {
        category: 2,
        unit: "dl",
        amount: 2.5,
        name: "suolapähkinöitä",
      },
    ],
    steps: [
      "Vaahdota margariini ja sokeri. Lisää munat yksitellen vatkaten. Yhdistä kuivat aineet ja lisää sekoittaen vuorotellen maidon kanssa taikinaan. Levitä taikina leivinpaperilla vuorattuun uunivuokaan (n. 25 x 35 cm). Paista 175-asteisen uunin keskitasolla noin 25 minuuttia. Anna pohjan jäähtyä. Mittaa korkealaitaiseen kattilaan kerma ja fariinisokeri. Keitä noin 10 minuuttia välillä sekoittaen. Tee pisarakoe. Tiputa pisara kinuskia lasilliseen kylmää vettä. Jos kinuski jähmettyy, se on valmista. Sekoita joukkoon nokare margariinia. Rouhi pähkinät ja ripottele torttupohjalle. Valuta kinuski pinnalle. Leikkaa paloiksi.",
    ],
  },
  {
    tags: ["kala"],
    name: "Koskenlaskija-uunikala",
    category: 2,
    ingredientsCategories: [{ id: 1, name: "Kastike" }],
    ingredients: [
      {
        unit: "pkt (400 g)",
        amount: 1,
        name: "Pirkka alaskanseitiö annospaloina (pakaste)",
      },
      { unit: "tl", amount: 0.5, name: "suolaa" },
      { name: "mustapippuria" },
      { category: 1, unit: "rkl", amount: 2, name: "voita tai margariinia" },
      { category: 1, unit: "rkl", amount: 3, name: "vehnäjauhoja" },
      {
        category: 1,
        unit: "dl",
        amount: 4,
        name: "valio koskenlaskija-sulatejuustoa, perinteinen",
      },
      {
        category: 1,
        unit: "pkt (250 g)",
        amount: 0.5,
        name: "tilliä hienonnettuna",
      },
      { category: 1, unit: "tl", amount: 0.5, name: "suolaa" },
      { category: 1, name: "mustapippuria" },
    ],
    steps: [
      "sulata kala pakkausohjeen mukaan ja valuta sulamisvesi pois. kuutioi kala. laita palat voideltuun uunivuokaan ja mausta.",
      "sulata rasva pinnoitetussa kattilassa ja sekoita joukkon vehnäjauhot. anna kiehahtaa. lisää joukkon maito koko ajan sekoittaen. kiehauta. lisää kastikkeen joukkoon sulatejuusto pieninä nokareina ja sekoita tasaiseksi. mausta ja kaada kastike kalapalojen päälle vuokaan.",
      "paista 175-asteisessa uunissa 25-30 minuuttia. tarjoa keitettyjen perunoiden ja salaatin kanssa.",
    ],
  },
  {
    category: 2,
    name: "Tillipestolla kuorrutettu uunikala",
    portions: 4,
    ingredientsCategories: [
      { id: 1, name: "Tillipesto" },
      { id: 2, name: "Pinnalle" },
    ],
    ingredients: [
      {
        unit: "pkt (400 g)",
        amount: 1,
        name: "Pirkka alaskanseitiä annospaloina (pakaste)",
      },
      { unit: "tl", amount: 0.5, name: "suolaa" },
      {
        category: 1,
        unit: "nippu (50g)",
        amount: 1,
        name: "tilliä",
      },
      {
        category: 1,
        unit: "g",
        amount: 100,
        name: "emmetalia raastettuna",
      },
      {
        category: 1,
        unit: "dl",
        amount: 1,
        name: "mantelilastuja",
      },
      { category: 1, unit: "rkl", amount: 1, name: "rypsiöljyä" },
      { category: 1, unit: "rkl", amount: 2, name: "vettä" },
      { category: 1, unit: "tl", amount: 0.25, name: "suolaa" },
      { category: 1, name: "mustapippuria" },
      { category: 2, unit: "dl", amount: 0.25, name: "mantelilastuja" },
    ],
    steps: [
      "Lado pakkauksen ohjeen mukaan sulatetut kalapalat voideltuun uunivuokaan. Ripottele kalojen pintaan suolaa. Hienonna tillinvarret.",
      "Soseuta peston ainekset keskenään tasaiseksi tahnaksi sauvasekoittimella. Levitä pesto kalapaloille ja ripottele pinnalle mantelilastut.",
      "Paista 200-asteisen uunin keskitasolla noin 20 minuuttia. Tarkista kalan kypsyys. Tarjoa tillipestolla kuorrutettu uunikala perunasoseen kanssa.",
    ],
  },
  {
    tags: ["kala", "äyriäiset"],
    category: 2,
    name: "keltainen sei-katkarapuruukku",
    ingredients: [
      {
        unit: "g",
        amount: 300,
        name: "seitä tai turskaa pakasteena",
      },
      {
        unit: "dl",
        amount: 2,
        name: "vettä",
      },
      {
        unit: "kpl",
        amount: 0.5,
        name: "kalaliemikuutioita",
      },
      {
        unit: "rkl",
        amount: 2,
        name: "sitruunamehua",
      },
      {
        unit: "kpl",
        amount: 1,
        name: "valkosipulinkynsi",
      },
      {
        unit: "tl",
        amount: 0.5,
        name: "kuivattua rakuunaa",
      },
      {
        unit: "tlk (320 g)",
        amount: 1,
        name: "smetanaa",
      },
      {
        unit: "ps (á 250 g)",
        amount: 2,
        name: "kasvissauikaleita (pakaste)",
      },
      {
        unit: "ps (180g)",
        amount: 1,
        name: "katkarapuja (pakaste)",
      },
      {
        unit: "tl",
        amount: 0.5,
        name: "suolaa",
      },
      {
        unit: "dl",
        amount: 0.5,
        name: "tilliä hienonnettuna",
      },
    ],
    steps: [
      "sulata kalafileet kohmeisiksi, jos käytät pakastettua kalaa",
      "kuumenna paistokasarissa vesi ja lisää puolikas liemikuutio, sitruunamehu, hienonnettu valkosipuli, rakuuna ja smetana. kiehauta seos.",
      "lisää kasvissuikaleet ja kuullota kala. kuumenna kiehuvaksi. anna hautua miedolla lämmöllä n. 5 min.",
      "lisää katkaravut jäisinä ja kuumenna, mutta älä keitä enää. mausta suolalla ja sekoita joukkoon tilli. tarjoa keitetyn riisin kanssa. voit tarjota myös sellaisenaan leivän kanssa. silloin annos riittää useammalle.",
    ],
  },
  {
    tags: ["kala", "lohi"],
    name: "Smetana-uunilohi",
    category: 2,
    ingredients: [
      { unit: "g", amount: 580, name: "kirjolohifilee (1% suolaa)" },
      { unit: "prk (120g)", amount: 1, name: "smetanaa" },
      { unit: "rkl", amount: 0.5, name: "sitruunamehua" },
      { unit: "dl", amount: 0.75, name: "tilliä hienonnettuna" },
      { name: "suolaa" },
    ],
    steps: [
      "pyyhi filee talouspaperilla ja nosta uunivuokaan nahkapuoli alaspäin",
      "sekoita kulhossa smetana, sitruunamehu, tilli ja ripaus suolaa. levitä seos kalan päälle raidoiksi",
      "paista 200-asteisen uunin keskitasolla 20-30 minuuttia. kypsymisaika riippuu fileen paksuudesta. koristele tuoreella tillillä ja sitruunalohkoilla. tarjoa perunasoseen kanssa.",
    ],
  },
  {
    tags: ["kala"],
    portions: 6,
    name: "kalapuikot ja pinaattikastike",
    category: 2,
    ingredientsCategories: [
      { id: 1, name: "kastike" },
      { id: 2, name: "perunamuusi" },
    ],
    ingredients: [
      { unit: "kpl", amount: 16, name: "kalapuikkoa" },
      { unit: "l", amount: 1, name: "maitoa", category: 1 },
      { unit: "ps", amount: 1, name: "pinaattia (pakaste)", category: 1 },
      { name: "suolaa", category: 1 },
      { name: "vehnäjauhoja", category: 1 },
      { name: "rasvaa", category: 1 },
      { unit: "ps", amount: 1, name: "perunaa", category: 2 },
      { unit: "kpl", amount: 1, name: "valkosipulinkynsi", category: 2 },
      { name: "suolaa", category: 2 },
      { unit: "kpl", amount: 1, name: "sipulia", category: 2 },
      { name: "rasvaa", category: 2 },
      { name: "maitoa", category: 2 },
    ],
    steps: [
      "kuori ja pilko perunat ja laita ne kiehumaan kattilaan. kuutioi sipuli ja lisää perunoiden joukkoon kiehumaan. älä lisää valkosipulia vielä",
      "tee kastikkeelle suurus rasvasta ja jauhoista. lisää kastikkeeseen maitoa vaiheittain. lisää suola ja pinaatti. anna kiehua niin kauan, että pinaatti on täysin liuennut kastikkeeseen",
      "paista kalapuikot",
      "kun muusi on valmista, murskaa perunat survimella ja murskaa valkosipuli sekaan. lisää myös rasva ja maitoa oman maun mukaan",
    ],
  },
  {
    portions: 6,
    category: 2,
    name: "Soijamakaronilaatikko",
    ingredientsCategories: [
      { id: 1, name: "Munamaito" },
      { id: 2, name: "soijarouhe" },
    ],
    ingredients: [
      {
        unit: "dl",
        amount: 6,
        name: "maitoa",
        category: 1,
      },
      { name: "suolaa", category: 2 },
      { name: "soijakastiketta", category: 2 },
      { name: "vettä", category: 2 },
      { name: "paprikajauhetta", category: 2 },
      { name: "gillausmaustetta", category: 2 },
      { name: "valkopippuria", category: 1 },
      { name: "kananmunaa", unit: "kpl", amount: 2 },
      { name: "soijarouhetta", unit: "dl", amount: 3.5 },
      { name: "makaronia", unit: "dl", amount: 5 },
      { name: "sipuli", amount: 1, unit: "kpl", category: 2 },
      { name: "valkosipulin kynsi", amount: 2, unit: "kpl", category: 2 },
      { name: "rypsiöljyä (voiteluun)" },
      { name: "juustoraastetta (valinnainen)" },
    ],
    steps: [
      "keitä makaronit ja anna kiehua n. 7 min.",
      "kaada soijarouhe ja pilkottu sipuli raakana kattilaan. lisää reilusti vettä. anna kiehua n. 10 min. lisää soijakastike kiehumisen alkuvaiheessa. lisää mausteet kiehumisen loppuvaiheessa. murskaa raaka valkosipuli kiehumisen jälkeen",
      "sekoita munamaito ja lisää valkopippuri",
      "sekoita turvotettu soija sekä makaronit keskenään",
      "kaada seos voideltuun uunivuokaan",
      "lisää juustoraastetta seoksen sekaan ja/tai pinnalle halutessasi",
      "paista uunnissa 200 asteessa 45min - 1t",
    ],
  },
  {
    name: "pizzapohja",
    portions: 8,
    category: 2,
    ingredients: [
      { name: "vettä", amount: 2, unit: "dl" },
      { name: "puolikarkeita vehnäjauhoja", amount: 5, unit: "dl" },
      { name: "leivinjauhetta", amount: 3, unit: "tl" },
      { name: "suolaa", amount: 0.5, unit: "tl" },
      { name: "öljyä", amount: 0.5, unit: "dl" },
    ],
    steps: [
      "sekoita jauhot, leivinjauhe ja suola keskenään",
      "lisää vesi ja vaivaa",
      "lisää öljy vaivauksen loppuvaiheessa",
      "hienosäädä jauhojen määrä tarvittaessa",
      "lisää täytteet",
      "paista uunissa 230 asteessa n. 15 min.",
    ],
  },
  {
    category: 2,
    tags: ["kala"],
    name: "lohipastagratiini",
    portions: 6,
    ingredientsCategories: [{ id: 1, name: "valkokastike" }],
    ingredients: [
      {
        unit: "dl",
        amount: 8,
        name: "gnocchi-pastaa",
      },
      {
        amount: 1,
        unit: "rasia (300 g)",
        name: "lohisuikaleita (marinoituna tai ilman maun mukaan)",
      },
      {
        amount: 1,
        unit: "tlk (420 g)",
        name: "Pirkka tomaatti-oliivi-pastakastike",
      },
      {
        category: 1,
        name: "vehnäjauhoja",
      },
      {
        category: 1,
        name: "voita, öljyä tai kasvirasvasekoitetta",
      },
      {
        category: 1,
        name: "maitoa",
        amount: 3,
        unit: "dl",
      },
      {
        amount: 3,
        unit: "dl",
        name: "juustoraastetta",
      },
    ],
    steps: [
      "keitä pasta pakkauksen ohjeen mukaan",
      "tee valkokastike (pyri tekemään löysä koostumus)",
      "kaada voidellun uunivuoan pohjalle sen verran keitettyä pastaa, että pohja peittyy",
      "lusikoi lohisuikaleet vuokaan kerrokseksi pastan päälle",
      "lisää tomaatti-oliivi-pastakastike lohikerroksen päälle uudeksi kerrokseksi",
      "lisää loput pastat vuokaan",
      "kaada valkokastike vuokaan mahdollisimman tasaisesti",
      "lisää juustoraastetta päälle",
      "paista uuninssa 200 asteessa n. 45 min.",
    ],
  },
  {
    category: 2,
    name: "hernekeitto",
    portions: 2,
    ingredients: [
      { name: "hernekeittopurkki", amount: 2, unit: "kpl (500 g)" },
    ],
  },
  {
    category: 2,
    name: "kalakeitto",
    tags: ["kala"],
    portions: 6,
    ingredients: [
      { name: "kala" },
      { name: "peruna" },
      { name: "sipuli" },
      { name: "kalaliemikuutio" },
      { name: "herna-maissi-porkkana (pakaste)" },
      { name: "valkosipuli" },
      { name: "juustokerma tms. vastaava" },
    ],
  },
  {
    category: 2,
    name: "tortillat",
    ingredients: [],
  },
  {
    name: "parhaat ruisleipäset",
    tags: ["leipä"],
    portions: 13,
    category: 2,
    ingredients: [
      {
        name: "tuorehiivaa (25 g) / tai ps kuivahiivaa",
        amount: 0.5,
        unit: "pkt",
      },
      { name: "vettä", unit: "dl", amount: 5 },
      { name: "siirappia", unit: "rkl", amount: 1 },
      { name: "suolaa", amount: 1.5, unit: "tl" },
      { name: "ruisjauhoja", amount: 7.5, unit: "dl" },
    ],
    steps: [
      "Liuota hiiva kädenlämpöiseen veteen. Sekoita joukkoon loput ainekset esimerkiksi puuhaarukan avulla. Anna taikinan kohota lämpimässä paikassa noin 45 minuuttia.",
      "Älä vaivaa taikinaa, vaan ota suoraan kulhosta lusikalla nokareita pellille leivinpaperin päälle. Muotoile jauhoja apuna käyttäen noin 1 cm paksuiksi leipäsiksi / ohuiksi ruissämpylöiksi. Leivät menevät hieman kasaan paistuessaan. Vältä turhaa painelua, jotta taikina ei menetä ilmavuuttaan. Anna kohota ilman liinaa noin tunnin ajan. Leipäsiä ei voidella.",
      "Paista 225 asteessa 35 minuuttia. Älä peitä leipiä liinalla paistamisen jälkeen. Leivät kannattaa leikata kahtia leipomispäivänä, sillä kuori kovettuu pikku hiljaa. Leivän pohjaosan voi leikata hieman kantta ohuemmaksi, niin sisus jakautuu tasaisesti.",
    ],
  },
];

export default testData;
