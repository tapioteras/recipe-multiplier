const testData = [
  {
    tags: ["avokado", "kasvis"],
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
    tags: ["kala"],
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
    tags: ["kasvis", "soija"],
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
    tags: ["kala", "lohi"],
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
    tags: ["kasvis"],
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
  {
    category: 2,
    name: "Kukkakaalipihvit",
    portions: "8",
    ingredientsCategories: null,
    ingredients: [
      { amount: "250", unit: "g", name: "kukkakaalia" },
      { amount: "2", unit: "", name: "kananmunaa" },
      { amount: "1", unit: "", name: "valkosipulinkynsi hienonnettuna" },
      {
        amount: "1",
        unit: "dl",
        name: "Valio mustaleima emmentalia raastettuna",
      },
      { amount: 0.25, unit: "tl", name: "suolaa" },
      { amount: null, unit: "ripaus", name: "mustapippuria" },
      { amount: null, unit: "", name: "öljyä paistamiseen" },
    ],
    steps: [
      "Raasta kukkakaali pieneksi muruksi. Sekoita kukkakaalimurun joukkoon kananmuna, valkosipuli, juustoraaste ja mausteet.",
      "Kuumenna rasva paistinpannussa. Nostele massasta kasoja kuumalle pannulle. Painele litteämmiksi paistinlastan avulla. Paista pihvejä noin 2 minuuttia per puoli. Tarjoa raikkaan salaatin ja esimerkiksi tsatsikin kanssa.",
    ],
    tags: ["K-Ruoka", "kukkakaali", "kasvis"],
  },
  {
    category: 2,
    name: "Jonin katkarapupiirakka",
    portions: "8",
    ingredientsCategories: [
      { id: 0, name: "Pohja" },
      { id: 1, name: "Täyte" },
      { id: 2, name: "Pinnalle" },
      { id: 3, name: "Koristeluun" },
    ],
    ingredients: [
      {
        amount: "100",
        unit: "g",
        name: "Pirkka leivontamargariinia",
        category: 0,
      },
      { amount: "2", unit: "dl", name: "Pirkka vehnäjauhoja", category: 0 },
      {
        amount: "1",
        unit: "dl",
        name: "Pirkka emmental-mozzarellajuustoraastetta",
        category: 0,
      },
      { amount: null, unit: "rkl", name: "vettä", category: 0 },
      { amount: null, unit: "", name: "kesäkurpitsaa", category: 1 },
      { amount: "1", unit: "rkl", name: "öljyä", category: 1 },
      { amount: null, unit: "", name: "suolaa", category: 1 },
      {
        amount: null,
        unit: "",
        name: "Pirkka valkosipuli-pippurisekoitusta",
        category: 1,
      },
      {
        amount: "2",
        unit: "ps",
        name: "Pirkka katkarapuja (pakaste)",
        category: 1,
      },
      { amount: "1", unit: "rkl", name: "sitruunanmehua", category: 1 },
      { amount: null, unit: "", name: "tilliä", category: 1 },
      { amount: "2", unit: "", name: "valkuaista", category: 2 },
      { amount: "150", unit: "g", name: "Pirkka kevytmajoneesia", category: 2 },
      {
        amount: null,
        unit: "",
        name: "tuoretta korianteria hienonnettuna",
        category: 2,
      },
      { amount: null, unit: "", name: "tuoretta korianteria", category: 3 },
    ],
    steps: [
      "Nypi margariini ja vehnäjauhot murumaiseksi seokseksi. Lisää juustoraaste ja vesi ja sekoita taikina tasaiseksi.",
      "Painele taikina vuokaan ja aseta taikinaa myötäilemään leivinpaperi jotta reunat eivät valuisi paistettaessa.",
      "Paista pohjaa 200-asteisessa uunissa 10-15 minuuttia.",
      "Viipaloi kesäkurpitsa ja kypsennä viipaleita öljyssä pannulla. Mausta suolalla ja pippurisekoituksella.",
      "Sulata katkaravut juoksevan kylmän veden alla ja valuta hyvin.",
      "Levitä esipaistetun piiraspohjan päälle katkaravut ja mausta sitruunanmehulla. Lisää kesäkurpitsaviipaleet ja hienonnettu tilli.",
      "Vatkaa valkuaiset kovaksi vaahdoksi ja sekoita joukkoon varovasti majoneesi ja hienonnettu korianteri. Levitä seos piirakan päälle.",
      "Paista 200-asteisessa uunissa vielä 15-20 minuuttia, kunnes piiras on saanut kauniin värin.",
    ],
    tags: ["äyriäiset", "K-Ruoka"],
  },
  {
    category: 2,
    name: "Värikäs kesäkeitto",
    portions: "6",
    ingredientsCategories: null,
    ingredients: [
      { amount: "3", unit: "", name: "Pirkka porkkanaa" },
      { amount: "1", unit: "", name: "kukkakaali" },
      { amount: "4", unit: "", name: "uutta perunaa" },
      { amount: "125", unit: "g", name: "retiisejä" },
      { amount: "1", unit: "", name: "nippusipuli varsineen" },
      { amount: "1", unit: "", name: "valkosipulinkynsi" },
      { amount: "1", unit: "rkl", name: "voita" },
      { amount: "1", unit: "l", name: "vettä" },
      { amount: "1", unit: "", name: "kasvisliemikuutio" },
      {
        amount: null,
        unit: "dl",
        name: "pakasteherneitä tai tuoreita riivittyjä",
      },
      { amount: 0.5, unit: "rs", name: "Pirkka maustamatonta sulatejuustoa" },
      { amount: null, unit: "ripaus", name: "mustapippuria" },
    ],
    steps: [
      "Kuori ja viipaloi porkkanat. Paloittele kukkakaali kukinnoiksi ja kuutioi varsi. Lohko pestyt perunat. Lohko retiisit neljään osaan. Hienonna sipuli ja valkosipuli, säästä sipulinvarret koristeeksi.",
      "Kuullota porkkanoita, sipulia ja valkosipulia voissa kattilassa pari minuuttia. Lisää kukkakaalit, perunat, vesi ja kasvisliemikuutio. Kuumenna kiehuvaksi ja keitä noin 10 minuuttia.",
      "Lisää keittoon herneet ja anna keiton kiehua vielä muutaman minuutin ajan, kunnes vihannekset ovat kypsiä. Sekoita keiton joukkoon sulatejuusto. Mausta pippurilla.",
      "Ripottele keiton pinnalle sipulinvarret ja retiisilohkot juuri ennen tarjoamista, jotta retiisien väri säilyy.",
    ],
    tags: ["kasvis", "K-Ruoka"],
  },
  {
    category: 2,
    name: "Sitruunainen katkarapu-pinaattipasta",
    portions: "4",
    ingredientsCategories: [{ id: 1, name: "Koristeeksi" }],
    ingredients: [
      { amount: 300, unit: "g", name: "Pirkka tagliatelle-pastaa" },
      { amount: 1, unit: "dl", name: "Pirkka cashewpähkinöitä" },
      { amount: 1, unit: "tlk", name: "kookoskermaa" },
      { amount: 3, unit: "rkl", name: "sitruunanmehua" },
      { amount: 1, unit: "", name: "valkosipulinkynsi" },
      { amount: 1, unit: "rkl", name: "vaaleaa suurustetta" },
      { amount: 1, unit: "ps", name: "Pirkka katkarapuja (pakaste)" },
      { amount: 150, unit: "g", name: "tuoretta pinaattia" },
      { amount: 0.5, unit: "tl", name: "suolaa" },
      { amount: null, unit: "ripaus", name: "mustapippuria" },
      { amount: 1, unit: "dl", name: "kevätsipulia", category: 1 },
      { amount: 1, unit: "", name: "sitruunan raastettu kuori", category: 1 },
    ],
    steps: [
      "Keitä pasta pussin ohjeen mukaan.",
      "Paahda cashewpähkinöitä pannulla ilman rasvaa. Kaada joukkoon kookoskerma ja sitruunanmehu. Mausta puristetulla valkosipulinkynnellä, suolalla ja mustapippurilla.",
      "Mittaa joukkoon suuruste ja kuumenna. Sekoita kastikkeen joukkoon sulatetut katkaravut ja huuhdotut, hieman hienonnetut pinaatinlehdet.",
      "Nosta pasta tarjoilukulhoon ja kaada kastike päälle. Koristele hienonnetulla kevätsipulilla ja sitruunankuoriraasteella.",
    ],
    tags: ["K-Ruoka", "äyriäiset"],
  },
  {
    category: 2,
    name: "kukkakaali kung pao",
    tags: ["kasvis", "kukkakaali"],
    portions: 4,
    ingredientsCategories: [
      { id: 1, name: "kastike" },
      { id: 2, name: "lisäksi" },
    ],
    ingredients: [
      { amount: 1, unit: "kpl", name: "iso kukkakaali" },
      { amount: 2, unit: "rkl", name: "maizenaa" },
      { amount: 2, unit: "rkl", name: "riisiviinietikkaa" },
      { amount: 2, unit: "rkl", name: "soijakastiketta" },
      { amount: 2, unit: "rkl", name: "rypsiöljyä" },
      { category: 1, amount: 3, unit: "kpl", name: "valkosipulinkynttä" },
      { category: 1, amount: 0.5, unit: "dl", name: "soijakastiketta" },
      { category: 1, amount: 2, unit: "rkl", name: "hoisin-kastiketta" },
      { category: 1, amount: 2, unit: "rkl", name: "vaahterasiirappia" },
      { category: 1, amount: 1, unit: "rkl", name: "seesamiöljyä" },
      {
        category: 1,
        amount: 1,
        unit: "rkl",
        name: "rajamäen liquid inkivääriä",
      },
      { category: 2, amount: 4, unit: "kpl", name: "kevätsipulia" },
      { category: 2, amount: 0.5, unit: "tl", name: "chilihiutaleita" },
      {
        category: 2,
        amount: 2,
        unit: "rkl",
        name: "suolapähkinöitä rouhittuna",
      },
      { name: "tarjoiluun keitettyä riisiä" },
    ],
    steps: [
      "Leikkaa kukkakaali suupaloiksi. Kuumenna kattilallinen vettä kiehuvaksi ja ryöppää kukkakaaleja viitisen minuuttia. Valuta siivilässä ja anna jäähtyä. Sekoita maizena, riisiviinietikka ja soijakastike keskenään ja sekoita seos sitten kukkakaalien joukkoon.",
      "Kuori ja hienonna valkosipulinkynnet. Sekoita keskenään valkosipulit, soijakastike, hoisin-kastike, vaahterasiirappi, seesamiöljy ja Liquid Inkivääri.",
      "Kuumenna rypsiöljy pannulla ja paista kukkaaleja kuumalla lämmöllä pari minuuttia, jotta ne saavat väriä. Lisää kastike pannulle ja anna kiehahtaa.",
      "Hienonna kevätsipuli ja sekoita kukkakaalien joukkoon. Viimeistele kukkakaali kung pao chiihiutaleilla ja rouhituilla suolapähkinöillä. Tarjoile riisin kanssa.",
    ],
  },
  {
    category: 2,
    name: "feta-pinaattikiusaus",
    tags: ["kasvis"],
    portions: 4,
    ingredients: [
      {
        amount: 1,
        unit: "pss",
        name: "Apetit Peruna - sipulisekoitusta(1 kg)",
      },
      {
        amount: 200,
        unit: "g",
        name: "fetajuustoa",
      },
      { amount: 5, unit: "dl", name: "ruokakermaa" },
      {
        amount: 80,
        unit: "g",
        name: "tuoretta pinaattia(tai ½ pss Apetit Kotimainen pinaattia)",
      },
      { amount: 1, unit: "tl", name: "suolaa" },
      { amount: 0.5, unit: "tl", name: "mustapippuria" },
      { name: "muskottipähkinää" },
      { name: "kevätsipulia" },
    ],
    steps: [
      "Kaada peruna-sipulisekoitus uunivuokaan.",
      "Murustele feta ja sekoita joukkoon.",
      "Mittaa tehosekoittimeen ruokakerma, pinaatti (sulata pakastepinaatti ensin, jos käytät sitä), suola, mustapippuri ja muskottipähkinä. Surauttele sekaisin ja kaada vuokaan.",
      "Paista kiusausta 200 asteessa 50-60 minuuttia. Anna vetäytyä 15 minuuttia ennen tarjoilua. Ripottele pinnalle runsaasti hienonnettua kevätsipulia ennen tarjoilua.",
    ],
  },
  {
    name: "Härkäpapupyörykät",
    portions: 1,
    ingredientsCategories: null,
    ingredients: [
      { amount: 2, unit: "dl", name: "kaurakermaa" },
      { amount: 0.5, unit: "dl", name: "korppujauhoja" },
      { amount: 50, unit: "g", name: "punaista paprikaa" },
      {
        amount: 1,
        unit: "rs",
        name: "Beanit Härkis Original kypsää härkäpapuvalmistetta",
      },
      { amount: 0.5, unit: "tl", name: "timjamia" },
      { amount: 0.5, unit: "tl", name: "suolaa" },
      { amount: null, unit: "ripaus", name: "mustapippuria" },
    ],
    steps: [
      "Sekoita korppujauhot ja kaurakerma ja anna seoksen turvota hetki.",
      "Hienonna paprika pieniksi kuutioiksi. Lisää paprikakuutiot, härkäpapuvalmiste ja mausteet turvotettujen korppujauhojen joukkoon ja sekoita massa tasaiseksi.",
      "Muotoile massa pyöryköiksi leivinpaperilla vuoratulle pellille. Paista 225 asteessa 10-15 minuuttia.",
    ],
    tags: ["K-Ruoka", "kasvis", "härkis"],
    category: 2,
  },
  {
    name: "Yrttinen kermaviilikastike",
    portions: "4",
    ingredientsCategories: null,
    ingredients: [
      { amount: 1, unit: "tlk", name: "Pirkka Kevyt kermaviiliä" },
      { amount: 0.5, unit: "dl", name: "Pirkka Kevyt majoneesia" },
      { amount: 0.5, unit: "dl", name: "tilliä" },
      { amount: 0.5, unit: "dl", name: "ruohosipulia hienonnettuna" },
      { amount: 0.5, unit: "dl", name: "basilikaa hienonnettuna" },
      { amount: 0.25, unit: "tl", name: "suolaa" },
      { amount: 0.25, unit: "tl", name: "sokeria" },
      { amount: null, unit: "ripaus", name: "mustapippuria" },
    ],
    steps: [
      "Sekoita kastikkeen ainekset. Tarjoa salaatti- tai dippikastikkeena.",
    ],
    tags: ["K-Ruoka", "kastike"],
    category: 2,
  },
  {
    name: "Helppo uunilohi",
    portions: "4",
    ingredientsCategories: null,
    ingredients: [
      { amount: 600, unit: "g", name: "kirjolohifileetä" },
      { amount: 0.75, unit: "tl", name: "suolaa" },
      {
        amount: 1,
        unit: "prk",
        name: "Pirkka laktoositonta juustokermaa (15 %)",
      },
      { amount: 0.25, unit: "tl", name: "mustapippuria" },
      { amount: 1, unit: "dl", name: "ruohosipulia hienonnettuna" },
    ],
    steps: [
      "Poista kirjolohifileestä tarvittaessa ruodot ja ylimääräinen rasva. Halutessasi voit leikata fileen valmiiksi annospaloiksi. Pyyhi kala talouspaperilla ja nosta uunivuokaan nahkapuoli alaspäin. Mausta kalan pinta suolalla.",
      "Sekoita ruokakerma, mustapippuri ja puolet ruohosipulista keskenään. Kaada vuokaan kalan päälle.",
      "Paista 175-asteisen uunin keskitasolla noin 30 minuuttia. Kypsymisaika riippuu kalan paksuudesta. Ripottele pinnalle loput ruohosipulit. Tarjoa esimerkiksi keitettyjen perunoiden kanssa.",
    ],
    tags: ["K-Ruoka", "lohi"],
    category: 2,
  },
  {
    name: "Katkarapukasari pastalle",
    portions: 1,
    ingredientsCategories: [{ id: 1, name: "Lisäksi" }],
    ingredients: [
      { amount: 1, unit: "ps", name: "Pirkka katkarapuja (pakaste)" },
      { amount: 1, unit: "", name: "Pirkka purjo" },
      { amount: 2, unit: "", name: "valkosipulinkynttä" },
      { amount: 1, unit: "rkl", name: "öljyä" },
      { amount: 1, unit: "rkl", name: "Pirkka tomaattisosetta" },
      { amount: 2, unit: "dl", name: "Pirkka laktoositonta ruokakermaa" },
      { amount: 0.5, unit: "tl", name: "valkosipulisuolaa" },
      { amount: null, unit: "", name: "mustapippuria" },
      {
        amount: null,
        unit: "",
        name: "Pirkka tagliatelle-pastaa",
        category: 1,
      },
      { amount: null, unit: "", name: "parmesaania raastettuna", category: 1 },
    ],
    steps: [
      "Sulata ja valuta katkaravut. Suikaloi halkaistu ja huuhdeltu purjo. Kuori hienonna valkosipulinkynnet.",
      "Kuullota purjo ja valkosipuli öljyssä. Lisää tomaattipyree ja katkaravut. Kaada joukkoon kerma ja kuumenna kiehuvaksi, mutta älä enää keitä. Mausta mustapippurilla. Tarjoa lisäksi tagliatellea.",
    ],
    tags: ["K-Ruoka", "äyriäiset"],
    category: 2,
  },
  {
    name: "Tomaattinen vihannespannari, pellillinen",
    portions: "6",
    ingredientsCategories: [{ id: 1, name: "Täyte" }],
    ingredients: [
      { amount: 7, unit: "dl", name: "maitoa" },
      { amount: 3, unit: "", name: "Pirkka Luomu kananmunaa" },
      { amount: 2.5, unit: "dl", name: "vehnäjauhoja" },
      { amount: 1, unit: "dl", name: "Luomu ohrajauhoja" },
      { amount: 1, unit: "dl", name: "Pirkka Luomu kaurahiutaleita" },
      { amount: 1, unit: "tl", name: "suolaa" },
      { amount: 2, unit: "rkl", name: "rypsiöljyä" },
      { amount: 4, unit: "", name: "porkkanaa", category: 1 },
      { amount: 1, unit: "", name: "purjo", category: 1 },
      { amount: 1, unit: "rkl", name: "rypsiöljyä", category: 1 },
      { amount: 0.5, unit: "tl", name: "suolaa", category: 1 },
      { amount: 1, unit: "tl", name: "basilikaa", category: 1 },
      { amount: 1, unit: "tl", name: "timjamia", category: 1 },
      { amount: 1, unit: "rs", name: "Pirkka kirsikkatomaatteja", category: 1 },
    ],
    steps: [
      "Vatkaa kevyesti maidon joukkoon munat, vehnäjauhot, ohrajauhot ja kaurahiutaleet sekä suola. Sekoita joukkoon myös öljy. Taikina saa turvota täytteen valmistamisen ajan.",
      "Raasta porkkanat karkeaksi raasteeksi. Viipaloi halkaistu, huuhdottu purjo. Kuumenna öljy paistokasarissa ja kuullota siinä purjoviipaleet. Lisää kasariin myös  porkkanaraaste pehmenemään noin 5 minuutiksi. Mausta vihannesseos suolalla, basilikalla ja timjamilla.",
      "Kaada pannukakkutaikina leivinpaperilla vuorattuun uunipannuun. Levitä päälle vihannesseos sekä halkaistut kirsikkatomaatit.",
      "Paista pannari 200 asteessa toiseksi alimmalla tasolla noin 35 minuuttia. Tarjoa pannari vihreän salaatin kanssa.",
    ],
    tags: ["K-Ruoka", "kasvis"],
    category: 2,
  },
  {
    name: "Tortillavuoka",
    portions: "6",
    ingredientsCategories: null,
    ingredients: [
      { amount: 1, unit: "rs", name: "naudan jauhelihaa (10 % rasvaa)" },
      { amount: 1, unit: "", name: "sipuli" },
      { amount: 4, unit: "", name: "valkosipulikynttä" },
      { amount: 1, unit: "rkl", name: "öljyä" },
      { amount: 1, unit: "tlk", name: "Pirkka mustapapuja" },
      { amount: 1, unit: "tlk", name: "Pirkka chilitomaattimurskaa" },
      { amount: 1, unit: "tl", name: "juustokuminaa" },
      { amount: 1, unit: "tl", name: "paprikajauhetta" },
      { amount: null, unit: "ripaus", name: "mustapippuria" },
      { amount: 0.75, unit: "tl", name: "suolaa" },
      {
        amount: 1,
        unit: "tlk",
        name: "Pirkka laktoositonta ruokakermaa (15 %)",
      },
      { amount: 2, unit: "dl", name: "K-Menu mozzarellajuustoraastetta" },
      { amount: 4, unit: "", name: "Pirkka täysjyvävehnätortillaa" },
    ],
    steps: [
      "Kuori ja hienonna sipuli sekä valkosipulinkynnet. Ruskista sipulit rasvassa kuumalla pannulla. Lisää jauheliha tai MiFu jauhis ja ruskista.",
      "Huuhtele ja valuta mustapavut. Lisää pavut, tomaattimurska sekä mausteet pannulle. Hauduta kastiketta muutama minuutti. Lisää lopuksi ruokakerma ja kuumenna kastike.",
      "Leikkaa tortillat 4-6 sektoriin tai suikaleiksi. Kaada voidellun uunivuoan pohjalle ensin hieman kastiketta. Levitä päälle tasainen kerros tortillaviipaleita. Levitä päälle kastiketta ja jatka samoin vielä yksi kerros.",
      "Ripottele pinnalle juustoraaste ja paista tortillavuokaa 200 asteisen uunin keskitasolla noin 15 minuuttia tai kunnes pinta on saanut hieman väriä.",
    ],
    tags: ["K-Ruoka"],
    category: 2,
  },
  {
    name: "Värikäs pastavuoka",
    portions: "5",
    ingredientsCategories: [
      { id: 1, name: "Munamaito" },
      { id: 2, name: "Pinnalle" },
    ],
    ingredients: [
      { amount: 7, unit: "dl", name: "Pirkka spirali -pastaa" },
      { amount: 1, unit: "", name: "parsakaali" },
      { amount: 1, unit: "", name: "punainen paprika" },
      { amount: 2, unit: "", name: "sipulia" },
      { amount: 1, unit: "", name: "valkosipulinkynttä" },
      { amount: 2, unit: "rkl", name: "aurinkokuivattujen tomaattien öljyä" },
      { amount: 50, unit: "g", name: "Pirkka aurinkokuivattuja tomaatteja" },
      { amount: 2, unit: "", name: "kananmunaa", category: 1 },
      { amount: 6, unit: "dl", name: "maitoa", category: 1 },
      { amount: 1, unit: "tl", name: "suolaa", category: 1 },
      { amount: 1, unit: "tl", name: "mustapippuria", category: 1 },
      { amount: 2, unit: "tl", name: "basilikaa", category: 1 },
      { amount: 1, unit: "dl", name: "juustoraastetta", category: 2 },
    ],
    steps: [
      "Huuhdo ja paloittele parsakaali. Leikkaa myös varsi ohuiksi viipaleiksi.",
      "Keitä pasta suolalla maustetussa vedessä lähes kypsäksi (n. 8 min). Lisää kypsymisen loppuvaiheessa keitinveteen parsakaalit ja keitä vielä pari minuuttia.",
      "Kuutioi paprika, hienonna sipulit ja valkosipulinkynnet sekä suikaloi aurinkokuivatut tomaatit. Kuumenna tilkka öljyä paistokasarissa ja lisää paprika, sipulit ja valkosipulit. Kuullota kasviksia hetken aikaa ja lisää joukkoon aurinkokuivatut tomaatit.",
      "Sekoita kasvikset valutetun pastan ja parsakaalien joukkoon. Kaada seos isoon voideltuun uunivuokaan.",
      "Sekoita munat, maito ja mausteet keskenään. Kaada seos vuokaan. Ripottele pinnalle juustoraastetta. Kypsennä 175 asteessa noin tunti. Tarjoa raikkaan salaatin kanssa.",
    ],
    tags: ["K-Ruoka", "kasvis"],
    category: 2,
  },
  {
    name: "Yrttinen kermaviilikastike",
    portions: "4",
    ingredientsCategories: null,
    ingredients: [
      { amount: 1, unit: "tlk", name: "Pirkka Kevyt kermaviiliä" },
      { amount: 0.5, unit: "dl", name: "Pirkka Kevyt majoneesia" },
      { amount: 0.5, unit: "dl", name: "tilliä" },
      { amount: 0.5, unit: "dl", name: "ruohosipulia hienonnettuna" },
      { amount: 0.5, unit: "dl", name: "basilikaa hienonnettuna" },
      { amount: 0.25, unit: "tl", name: "suolaa" },
      { amount: 0.25, unit: "tl", name: "sokeria" },
      { amount: null, unit: "ripaus", name: "mustapippuria" },
    ],
    steps: [
      "Sekoita kastikkeen ainekset. Tarjoa salaatti- tai dippikastikkeena.",
    ],
    tags: ["K-Ruoka", "kastike"],
    category: 3,
  },
  {
    name: "Helmipuuro",
    portions: 8,
    ingredients: [
      { amount: 5, unit: "dl", name: "Vesi" },
      { amount: 1, unit: "l", name: "Maito" },
      { amount: 5, unit: "dl", name: "Helmisuurimoita" },
    ],
    steps: [
      "kaada vesi, maito ja suola kattilaan. keitä kiehuvaksi",
      "lisää helmisuurimot, kun seos alkaa selvästi kiehua",
      "keitä n. 8 min ja anna vetäytyä kattilassa pari minuuttia",
    ],
    tags: ["puuro"],
    category: 2,
  },
  {
    name: "Kauraleipäset",
    portions: 11,
    ingredients: [
      { amount: "0.5", unit: "pkt", name: "Tuorehiivaa" },
      { amount: "5", unit: "dl", name: "Vettä" },
      { amount: "1", unit: "rkl", name: "Siirappia" },
      { amount: "1.5", unit: "tl", name: "Suolaa" },
      { amount: "1", unit: "rkl", name: "Psylliumia" },
      { amount: "6", unit: "dl", name: "Kaurajauhoja" },
      { amount: "1.5", unit: "dl", name: "Kaurahiutaleita" },
    ],
    steps: [
      "Liuota hiiva kädenlämpöiseen veteen. Jos kohotat taikinan yön yli jääkaapissa, vesi voi olla viileää. Sekoita joukkoon loput ainekset. Anna taikinan kohota lämpimässä paikassa noin 45 minuuttia (tai jääkaapissa yön yli).",
      "Älä vaivaa taikinaa, vaan ota suoraan kulhosta lusikalla nokareita pellille leivinpaperin päälle. Muotoile jauhoja apuna käyttäen noin 1 cm paksuiksi leipäsiksi, halutessasi sydämen muotoisiksi. Vältä turhaa painelua ja käsittele taikinaa kevyin ottein, jotta se ei menetä ilmavuuttaan. Anna kohota ilman liinaa noin tunnin ajan. Leipäsiä ei voidella.",
      "Paista 225 asteessa 35 minuuttia. Älä peitä leipäsiä liinalla paistamisen jälkeen.",
    ],
    tags: ["leipä"],
    category: 3,
  },
  {
    name: "Kesäkurpitsa-tomaattivuoka",
    portions: 6,
    ingredients: [
      { amount: "2", unit: "Kpl", name: "Kesäkurpitsaa" },
      { amount: "3", unit: "Kpl", name: "Valkosipulinkynttä" },
      { amount: "1", unit: "Dl", name: "Pestoa" },
      { amount: "6", unit: "Kpl", name: "Tomaattia" },
      { amount: "1,5", unit: "Dl", name: "Tuoretta basilikaa" },
      { amount: "150", unit: "G", name: "Fetaa murustettuna" },
      { amount: "0,5", unit: "Tl", name: "Mustapippuria" },
      { amount: "1", unit: "Dl", name: "Juustoraastetta" },
    ],
    steps: [
      "Pese ja viipaloi kesäkurpitsat. Hienonna valkosipulinkynnet. Leikkaa tomaatit reiluiksi viipaleiksi.",
      "Voitele uunivuoka. Lado pohjalle puolet kesäkurpitsaviipaleista. Levitä päälle puolet valkosipulista ja pestosta.",
      "Lado seuraavaan kerrokseen puolet tomaateista, basilikanlehdistä ja murustetusta fetasta.",
      "Toista uudelleen kesäkurpitsa- ja tomaattikerrokset.",
      "Ripottele vuokaan päällimmäiseksi vielä juustoraastetta ja paista 200-asteisessa uunissa noin 40 minuuttia.",
      "Tarjoa kesäkurpitsa-tomaattivuoka hyvän leivän kanssa kasvisateriana tai liharuoan lisäkkeenä.",
    ],
    tags: ["kasvis"],
    category: 2,
  },
  {
    name: "Mannapuuro",
    portions: 4,
    ingredients: [
      { amount: "0.25", unit: "l", name: "vettä" },
      { amount: "0.75", unit: "l", name: "maitoa" },
      { amount: "1.5", unit: "dl", name: "mannasuurimoita" },
      { amount: "1", unit: "tl", name: "suolaa" },
    ],
    steps: [
      "sekoita vesi ja maito sekä suola kattilaan",
      "lisää mannasuurimot vasta, kun seos kiehuu selvästi",
      "keitä n. 8 min ja anna vetäytyä kattilassa pari minuuttia ennen tarjoilua",
    ],
    tags: ["puuro"],
    category: 3,
  },
  {
    name: "Mifu-nuudelipannu",
    portions: 6,
    ingredients: [
      { amount: "1", unit: "tlk", name: "Ananasmurska" },
      { amount: "1.5", unit: "tl", name: "Tikka masala" },
      { amount: "2", unit: "pkt", name: "Mifu" },
      { amount: "4", unit: "pkt", name: "Nuudeli" },
      { amount: "3", unit: "rkl", name: "Soijakastike" },
      { amount: "0.5", unit: "tl", name: "Chilimauste" },
      { amount: "0.5", unit: "tl", name: "Mustapippuri" },
      { amount: "2", unit: "dl", name: "Ruokakerma" },
      { amount: "1", unit: "kpl", name: "Sipuli" },
      { amount: "2", unit: "kpl", name: "Valkosipuli" },
      { amount: "1", unit: "pss", name: "wok-vihanneksia (pakaste)" },
      { amount: "0.5", unit: "dl", name: "cashew-pähkinät" },
    ],
    steps: [
      "paista pannussa mifu, sipuli ja pähkinät",
      "sulata ja paista wok-vihanneksia toisessa pannussa",
      "yhdistä paistetut jutut kattilaan ja lisää mausteet sekä ananas",
      "lisää ruokakerma seokseen ja ja kiehuta n. 10 min",
      "keitä nuudelit erillisessä kattilassa pakkauksen ohjeen mukaan",
      "murkskaa valkosipuli seokseen ennen tarjoilua ja sekoita",
    ],
    tags: ["mifu", "kasvis"],
    category: 2,
  },
  {
    name: "Ohrarieskat",
    portions: 12,
    ingredients: [
      { amount: "0.5", unit: "tl", name: "suolaa" },
      { amount: "3", unit: "dl", name: "Ohrajauhoja" },
      { amount: "3", unit: "dl", name: "perunamuusia" },
      { amount: "1", unit: "kpl", name: "Kananmunaa" },
    ],
    steps: [
      "sekoita ainekset",
      "jaa taikina 12 osaan",
      "aseta taikinanokareet leivinpaperin uunipellille leivinpaperin päälle",
      "taputtele nokareet n. 1 cm litteiksi lätyiksi ripotellen ohrajauhoa taikinanokareiden päälle",
      "paista uunissa 250 asteessa n. 15 min, kunnes rieskat ovat saaneet vähän väriä",
    ],
    tags: ["leipä"],
    category: 3,
  },
  {
    name: "Purjo-pinaattipiirakka",
    portions: 4,
    ingredientsCategories: [
      { id: 1, name: "pohja" },
      { id: 2, name: "täyte" },
    ],
    ingredients: [
      { amount: "4", unit: "dl", name: "Täysjyvävehnäjauhoja", category: 1 },
      { amount: "50", unit: "g", name: "Emmenta-raastetta", category: 1 },
      { amount: "160", unit: "g", name: "Voita", category: 1 },
      { amount: "0.5", unit: "dl", name: "Kylmää vettä", category: 1 },
      { amount: "3", unit: "kpl", name: "Purjoa", category: 2 },
      { amount: "2", unit: "rk", name: "Rypsiöljyä", category: 2 },
      { amount: "", unit: "", name: "Suolaa ja mustapippuria", category: 2 },
      { amount: "1", unit: "pss", name: "Pinaattia 150 g", category: 2 },
      { amount: "2", unit: "dl", name: "Ruokakerma", category: 2 },
      { amount: "3", unit: "", name: "kananmunaa", category: 2 },
      { amount: "0.5", unit: "tl", name: "Kananmunaa", category: 2 },
      { amount: "1", unit: "rkl", name: "Dijon-sinappia", category: 2 },
      { amount: "100", unit: "g", name: "Emmental-raastetta", category: 2 },
    ],
    steps: [
      "Pohja: Sekoita täysjyvävehnäjauhot ja emmental-raaste keskenään. Kuutioi voi ja nypi voi ja jauho-juustoseos murumaiseksi. Lisää vettä ruokalusikallinen kerrallaan, jotta saat aikaan kiinteän taikinapallon. Painele taikina piirakkavuoan pohjalle ja reunoille ja esipaista 200 asteessa kymmenen minuuttia.",
      "Täyte: huuhtele purjot ja leikkaa ne renkaiksi. Kuumenna öljy pannussa ja kuullota purjorenkaita miedolla lämmöllä 10-15 minuuttia, kunnes ne ovat pehmeitä. Mausta suolalla ja mustapippurilla. Anna hieman jäähtyä.",
      "Anna pinaattien sulaa kohmeisiksi ja laita ne sitten tehosekoittimeen yhdessä kerman ja munien kanssa. Surauta sileäksi. Mausta seos muskottipähkinällä ja suolalla.",
      "Sivele piirakan pohja sinapilla ja levitä purjot päälle. Kaada pinaatti-kermaseos piirakan pinnalle ja ripottele juustoraaste päälle. Paista piirakka 200 asteessa vielä 25-30 minuuttia, kunnes täyte on hyytynyt ja juusto kauniisti ruskistunut. Anna piirakan vetäytyä hetki ennen tarjoilua.",
    ],
    tags: ["kasvis"],
    category: 3,
  },
  {
    name: "Uunimunakas perunalla ja kesäkurpitsalla",
    portions: 4,
    ingredients: [
      { amount: "1", unit: "kpl", name: "Kesäkurpitsaa" },
      { amount: "", unit: "", name: "Rypsiöljyä" },
      {
        amount: "1",
        unit: "Pss",
        name: "Apetit Kotimainen perunasiivut sour cream & onionia (à 500 g)",
      },
      { amount: "8", unit: "Kpl", name: "Kananmunaa" },
      { amount: "1", unit: "Dl", name: "Kermaa" },
      { amount: "0.5", unit: "Dl", name: "Paprikajauhetta" },
      { amount: "1", unit: "Tl", name: "Suolaa" },
      { amount: "0.5", unit: "Tl", name: "Mustapippuria" },
      { amount: "1", unit: "Kpl", name: "Pieni kesäsipuli varsineen" },
      { amount: "1", unit: "Pallo", name: "Mozzarellaa" },
    ],
    steps: [
      "Leikkaa kesäkurpitsa siivuiksi. Kuumenna loraus öljyä uuninkestävässä pannussa ja kuullota kesäkurpitsaa pari minuuttia. Lisää perunasiivut ja jatka kuullottamista muutama minuutti.",
      "Riko kananmunat kulhoon ja sekoita joukkoon kerma. Mausta paprikajauheella, suolalla ja mustapippurilla. Kaada seos pannulle kesäkurpitsojen ja perunoiden joukkoon. Siirrä pannu 200 asteiseen uuniin ja paista 20 minuuttia tai kunnes munakas on hyytynyt.",
      "Hienonna kesäsipuli ja ripottele munakkaan päälle. Revi mozzerella käsin ja levitä palat munakkaan päälle. Tarjoile heti.",
    ],
    tags: ["kasvis"],
    category: 2,
  },
  {
    name: "Raikas kurkkukastike",
    category: 2,
    portions: 6,
    tags: ["kastike"],
    ingredients: [
      {
        unit: "dl", amount: "2", name: "kermaviiliä",
      },
      {
        unit: "kpl", amount: "0.5", name: "sirtruuna",
      },
      {
        unit: "kpl", amount: "0.5", name: "kurkku",
      },
      {
        unit: "tl", amount: "0.5", name: "suolaa",
      },
      { name: "mustapippuria"},
      { name: "tuoretta tilliä tai minttua"}
    ],
    steps: [
      "sekoita ainekset keskenään ja laita jääkaappiin maustumaan hetkeksi ennen tarjoilua."
    ]
  },
  {
    name: "Leivitetty kalafilee",
    category: 2,
    portions: 4,
    tags: ["kala"],
    description: "resepti haettu osoitteesta https://www.meillakotona.fi/reseptit/leivitetty-kalafilee-ja-raikas-kurkkukastike",
    ingredients: [
      {
        unit: "g", amount: "700", name: "siikaa",
      },
      {
        name: "vehnäjauhoja",
      },
      {
        unit: "kpl", amount: 1, name: "kananmuna"
      },
      {
        name: "korppujauhoja / ruiskorppujauhoja",
      },
      {
        unit: "tl", amount: 1, name: "suolaa"
      },
      {
        name: "voita"
      },
      {
        name: "rypsiöljyä"
      }
    ],
    steps: [
      "Nypi kalafileistä ruodot pois. Leikkaa suuret fileet kahteen osaan. Mausta fileet molemmin puolin suolalla ja pippurilla.",
      "Ota kolme laakeaa lautasta. Laita yhteen vehnäjauhot, riko toiseen kananmuna ja kaada korppujauhot kolmanteen.",
      "Pyörittele fileitä ensin vehnäjauhoissa, sitten kananmunassa ja lopuksi korppujauhoissa. Nosta leivitetyt kalafileet leivinpaperille tai työlaudalle kuivahtamaan. Kuorruta samalla tavalla kaikki palat.",
      "Kuumenna voin ja öljyn seos paistinpannulla. Kun voi sulaa ja vaalea vaahto alkaa laskeutua, nosta palat pannulle. Paista molemmin puolin, koosta riippuen keskilämmöllä 1–2 minuuttia. Nosta palat talouspaperin päälle. Tarjoa leivitetyt kalafileet kurkkukastikkeen ja hyvän perunamuusin kanssa."
    ]
  },
  {
    name: "Perunamuusi",
    portions: 6,
    description: "resepti haettu osoitteesta https://www.meillakotona.fi/reseptit/leivitetty-kalafilee-ja-raikas-kurkkukastike",
    category: 2,
    tags: ["muusi", "kasvis"],
    ingredients: [
      {
        unit: "kpl", amount: "10", name: "perunaa"
      },
      {
        name: "kasvirasvasekoitetta tai voita"
      },
      {
        name: "suolaa"
      },
      {
        name: "valkosipulia (valinnainen)"
      },
      {
        name: "maitoa"
      },
      {
        name: "sipulia (valinnainen)"
      },
    ],
    steps: [
      "keitä pottuja (ja sipuleita, ei valkosipulia) n. 20 min",
      "muussaa potut (ja sipulit) survimella",
      "murksaa raaka valkosipuli sekaan",
      "lisää suolaa maun mukaan",
      "lisää juoksevaa rasvaa maun mukaan",
      "lisää vähän maitoa ja sekoita",
      "lisäile maitoa ja sekoittele/muussaa muusia survimella siihen asti, että muusi näyttää omaan makuun sopivalta"
    ]
  },

  {
    "category": 2,
    "ingredients": [
      {
        "amount": 1,
        "name": "cannelloneja",
        "unit": "pkt"
      },
      {
        "amount": 1,
        "name": "Pirkka naudan jauhelihaa (10 %)",
        "unit": "pkt"
      },
      {
        "amount": 1,
        "name": "Pirkka Italian yrtit tuorejuustoa",
        "unit": "pkt"
      },
      {
        "amount": 1,
        "name": "sipuli",
        "unit": ""
      },
      {
        "amount": 1,
        "name": "valkosipulinkynttä",
        "unit": ""
      },
      {
        "amount": 2,
        "name": "porkkanaa",
        "unit": ""
      },
      {
        "amount": 0.75,
        "name": "suolaa",
        "unit": "tl"
      },
      {
        "amount": 0.5,
        "name": "mustapippuria",
        "unit": "tl"
      },
      {
        "amount": 1,
        "name": "timjamia",
        "unit": "tl"
      },
      {
        "amount": 0.5,
        "name": "Pirkka emmental-mozzarellajuustoraastetta",
        "unit": "ps"
      },
      {
        "amount": 1,
        "category": 1,
        "name": "Pirkka paseerattua tomaattia",
        "unit": "tlk"
      },
      {
        "amount": 2,
        "category": 1,
        "name": "Pirkka laktoositonta ruokakermaa (15 %)",
        "unit": "dl"
      },
      {
        "amount": 0.5,
        "category": 1,
        "name": "suolaa",
        "unit": "tl"
      },
      {
        "amount": 0.5,
        "category": 1,
        "name": "mustapippuria",
        "unit": "tl"
      },
      {
        "amount": 1,
        "category": 1,
        "name": "timjamia",
        "unit": "tl"
      },
      {
        "amount": 0.5,
        "category": 2,
        "name": "Pirkka emmental-mozzarellajuustoraastetta",
        "unit": "ps"
      }
    ],
    "ingredientsCategories": [
      {
        "id": 1,
        "name": "Kastike"
      },
      {
        "id": 2,
        "name": "Pinnalle"
      }
    ],
    "name": "Cannellonit jauhelihatäytteellä",
    "portions": "5",
    "steps": [
      "Hienonna sipuli ja valkosipulinkynnet. Raasta porkkanat karkeaksi raasteeksi. Kuullota sipuleita hetki paistinpannussa öljyssä. Lisää pannulle jauheliha ja ruskista. Lisää porkkanaraaste, tuorejuusto ja mausteet. Sekoita tasaiseksi. Anna täytteen jäähtyä hetki ja lisää joukkoon juustoraaste.",
      "Voitele uunivuoka öljyllä. Täytä cannelloniputket jauhelihatäytteellä ja asettele riviin vuoan pohjalle.",
      "Sekoita paseerattu tomaatti ja ruokakerma keskenään ja mausta seos suolalla, pippurilla ja timjamilla. Kaada tomaattikastike cannellonien pinnalle. Levitä kastike tasaisesti niin, että sitä menee myös pastaputkien väleihin. Ripottele pinnalle juustoraaste.",
      "Kypsennä 200 asteessa uunin alatasolla noin 30 minuuttia. Tarjoa cannellonit vihreän salaatin kanssa."
    ],
    "tags": [
      "kasvis",
      "soija"
    ]
  },
  {
    "category": 2,
    "ingredients": [
      {
        "amount": 1,
        "name": "Beanit Härkis Original kypsää härkäpapuvalmistetta",
        "unit": "rs"
      },
      {
        "amount": 1,
        "name": "sipuli",
        "unit": ""
      },
      {
        "amount": 2,
        "name": "valkosipulinkynttä",
        "unit": ""
      },
      {
        "amount": 1,
        "name": "öljyä",
        "unit": "rkl"
      },
      {
        "amount": 1,
        "name": "Pirkka tomaattimurska 500g",
        "unit": "tlk"
      },
      {
        "amount": 0.5,
        "name": "Pirkka aurinkokuivattuja tomaattisuikaleita",
        "unit": "dl"
      },
      {
        "amount": 1,
        "name": "Pirkka tomaattisosetta",
        "unit": "rkl"
      },
      {
        "amount": 1,
        "name": "suolaa",
        "unit": "tl"
      },
      {
        "amount": 1,
        "name": "kuivattua basilikaa",
        "unit": "tl"
      },
      {
        "amount": 0.5,
        "name": "sokeria",
        "unit": "tl"
      },
      {
        "amount": null,
        "name": "mustapippuria",
        "unit": "ripaus"
      },
      {
        "amount": 1,
        "name": "Pirkka kaura kasvirasvasekoitetta (16 %)",
        "unit": "dl"
      },
      {
        "amount": null,
        "category": 1,
        "name": "tuoretta basilikaa",
        "unit": ""
      }
    ],
    "ingredientsCategories": [
      {
        "id": 1,
        "name": "Lisäksi"
      }
    ],
    "name": "Härkis-pastakastike",
    "portions": "6",
    "steps": [
      "Kuori ja hienonna sipuli sekä valkosipulinkynnet. Kuullota sipuleita pannulla öljyssä. (Voit käyttää aurinkokuivattujen tomaattien öljymarinadia.)",
      "Lisää pannulle tomaattimurska, aurinkokuivatut tomaattisuikaleet, tomaattisose ja mausteet. Anna kastikkeen hautua kannen alla noin 10-15 minuuttia.",
      "Sekoita kastikkeen joukkoon kaurakerma sekä härkäpapuvalmiste. (Voit halutessasi korvata osan kaurakermasta vedellä). Kuumenna kastike ja tarjoa se pastan sekä tuoreen basilikan kanssa."
    ],
    "tags": [
      "härkis",
      "kasvis"
    ]
  },
  {
    "category": 2,
    "ingredients": [
      {
        "amount": 12,
        "name": "Pirkka lasagnelevyä",
        "unit": ""
      },
      {
        "amount": 2,
        "name": "Pirkka pastakastiketta (tomaatti-valkosipuli)",
        "unit": "tlk"
      },
      {
        "amount": 2,
        "name": "Beanit Härkis Original kypsää härkäpapuvalmistetta",
        "unit": "pkt"
      },
      {
        "amount": 3,
        "category": 1,
        "name": "voita tai margariinia",
        "unit": "rkl"
      },
      {
        "amount": 1,
        "category": 1,
        "name": "Pirkka vehnäjauhoja",
        "unit": "dl"
      },
      {
        "amount": 1,
        "category": 1,
        "name": "Pirkka laktoositonta kevytmaitojuomaa",
        "unit": "l"
      },
      {
        "amount": 0.5,
        "category": 1,
        "name": "suolaa",
        "unit": "tl"
      },
      {
        "amount": 0.5,
        "category": 1,
        "name": "mustapippuria",
        "unit": "tl"
      },
      {
        "amount": 100,
        "category": 1,
        "name": "Pirkka emmental-mozzarellajuustoraastetta",
        "unit": "g"
      },
      {
        "amount": 100,
        "category": 2,
        "name": "Pirkka emmental-mozzarellajuustoraastetta",
        "unit": "g"
      }
    ],
    "ingredientsCategories": [
      {
        "id": 1,
        "name": "Juustokastike"
      },
      {
        "id": 2,
        "name": "Pinnalle"
      }
    ],
    "name": "Härkislasagne",
    "portions": "8",
    "steps": [
      "Valmista ensin juustokastike. Sulata kattilassa rasva ja sekoita joukkoon vehnäjauhot. Kaada kattilaan puolet maidosta kokoajan vispilällä sekoittaen. Kuumenna ja sekoita tasaiseksi. Lisää loppu maito. Sekoita koko ajan ja keitä pari minuuttia. Lisää suola, mustapippuri ja juustoraaste.",
      "Kuumenna pastakastikkeet kattilassa. Siirrä kattila pois levyltä ja sekoita joukkoon härkäpapuvalmisteet.",
      "Voitele suorakaiteen muotoinen vuoka. Kaada vuoan pohjalle härkiskastiketta ja levitä päälle lasagnelevyjä. Kaada levyjen päälle härkis- ja juustokastiketta. Täytä näin kaksi seuraavaa kerrosta. Viimeisen lasagnelevykerroksen päälle tulee vain juustokastiketta ja pinnalle juustoraastetta.",
      "Paista uunin alastasolla 200 asteessa noin 35 minuuttia. Anna lasagnen vetäytyä peitettynä noin 10 minuuttia ennen tarjoamista. Tarjoa salaatin kanssa."
    ],
    "tags": [
      "härkis",
      "kasvis"
    ]
  },
  {
    "category": 2,
    "ingredients": [
      {
        "amount": 300,
        "name": "Pirkka penne täysjyväpastaa",
        "unit": "g"
      },
      {
        "amount": 1,
        "name": "kesäkurpitsa",
        "unit": ""
      },
      {
        "amount": 2,
        "name": "sipulia",
        "unit": ""
      },
      {
        "amount": 1,
        "name": "valkosipulinkynsi",
        "unit": ""
      },
      {
        "amount": 2,
        "name": "öljyä",
        "unit": "rkl"
      },
      {
        "amount": 0.5,
        "name": "suolaa",
        "unit": "tl"
      },
      {
        "amount": null,
        "name": "mustapippuria",
        "unit": ""
      },
      {
        "amount": 1,
        "name": "kirjolohisuikaleita (sis. suolaa 1 %)",
        "unit": "rs"
      },
      {
        "amount": 0.5,
        "name": "Pirkka kirsikkatomaatteja",
        "unit": "rs"
      },
      {
        "amount": 0.5,
        "name": "tuoretta basilikaa",
        "unit": "ruukkua"
      },
      {
        "amount": 1,
        "category": 1,
        "name": "Valio Koskenlaskija murennettua",
        "unit": "ps"
      }
    ],
    "ingredientsCategories": [
      {
        "id": 1,
        "name": "Pinnalle"
      }
    ],
    "name": "Kirjolohi-tomaattipasta",
    "portions": "4",
    "steps": [
      "Keitä pasta suolalla maustetussa vedessä pakkauksen ohjeen mukaan. Sekoita kypsän, valutetun pastan joukkoon 1 rkl öljyä.",
      "Suikaloi kesäkurpitsa. Kuori ja hienonna sipulit ja valkosipuli.",
      "Kuullota sipulit rasvassa paistokasarissa. Lisää kesäkurpitsasuikaleet ja ruskista niitä hieman. Mausta suolalla ja pippurilla.",
      "Siirrä kasvisseos paistokasarin toiseen reunaan. Kumoa kasariin lohisuikaleet ja kypsennä. Halkaise kirsikkatomaatit ja hienonna basilika. Sekoita tomaatit ja basilika varovasti kasviksien sekä lohen joukkoon.",
      "Kuumenna tarjoilukulho. Kaada siihen kuuma pasta ja kirjolohi-kasvisseos. Tarjoa lisäksi juustomurua."
    ],
    "tags": [
      "kala",
      "lohi"
    ]
  },
  {
    "category": 2,
    "ingredients": [
      {
        "amount": 1,
        "name": "sipuli",
        "unit": ""
      },
      {
        "amount": 3,
        "name": "valkosipulinkynttä",
        "unit": ""
      },
      {
        "amount": 1,
        "name": "Pirkka mieto punainen chili",
        "unit": ""
      },
      {
        "amount": 1,
        "name": "kukkakaali",
        "unit": ""
      },
      {
        "amount": 2,
        "name": "oliiviöljyä",
        "unit": "rkl"
      },
      {
        "amount": 1,
        "name": "currya",
        "unit": "rkl"
      },
      {
        "amount": 1,
        "name": "Pirkka tomaattimurskaa",
        "unit": "tlk"
      },
      {
        "amount": 1,
        "name": "Pirkka kookosmaitoa",
        "unit": "tlk"
      },
      {
        "amount": 1,
        "name": "Pirkka Luomu babypinaattia",
        "unit": "ps"
      },
      {
        "amount": 1,
        "name": "Pirkka ananaspaloja mehussa",
        "unit": "prk"
      },
      {
        "amount": 1,
        "name": "suolaa",
        "unit": "tl"
      },
      {
        "amount": null,
        "name": "sokeria",
        "unit": "ripaus"
      },
      {
        "amount": null,
        "name": "mustapippuria",
        "unit": "ripaus"
      },
      {
        "amount": null,
        "category": 1,
        "name": "keitettyä riisiä",
        "unit": ""
      },
      {
        "amount": 0.5,
        "category": 1,
        "name": "tuoretta korianteria",
        "unit": "ruukkua"
      }
    ],
    "ingredientsCategories": [
      {
        "id": 1,
        "name": "Lisäksi"
      }
    ],
    "name": "Kukkakaalicurry",
    "portions": "4",
    "steps": [
      "Hienonna kuorittu sipuli ja kuoritut valkosipulinkynnet. Viipaloi chili ja poista halutessasi siemenet. Revi kukkakaalista kukinnot ja paloittele varsi.",
      "Kuumenna öljy korkeareunaisella pannulla. Lisää curry, sipulit ja chili ja kuullota kasvikset mausteöljyssä.",
      "Kumoa pannulle kukkakaalit ja sekoita. Lisää tomaattimurska ja kookosmaito.",
      "Keitä currya ilman kantta miedolla lämmöllä 10-15 minuuttia kunnes kukkakaalit ovat kypsiä.",
      "Lisää babypinaatit ja ananakset liemineen ja mausta curry suolalla, sokerilla ja mustapippurilla. Kuumenna ruoka ja tarjoa korianterin ja keitetyn riisin kanssa."
    ],
    "tags": [
      "kasvis",
      "kukkakaali"
    ]
  },
  {
    "category": 2,
    "ingredients": [
      {
        "amount": 1,
        "name": "sipuli",
        "unit": ""
      },
      {
        "amount": 2,
        "name": "valkosipulinkynttä",
        "unit": ""
      },
      {
        "amount": 1.5,
        "name": "öljyä",
        "unit": "rkl"
      },
      {
        "amount": 2,
        "name": "Pirkka currya",
        "unit": "tl"
      },
      {
        "amount": 2,
        "name": "juustokuminaa",
        "unit": "tl"
      },
      {
        "amount": 1,
        "name": "Pirkka inkivääriä",
        "unit": "tl"
      },
      {
        "amount": 2,
        "name": "punaisia linssejä (kuivattu)",
        "unit": "dl"
      },
      {
        "amount": 1,
        "name": "Pirkka kookosmaitoa",
        "unit": "tlk"
      },
      {
        "amount": 2,
        "name": "K-Menu kuorittuja tomaatteja tomaattimehussa",
        "unit": "tlk"
      },
      {
        "amount": 2,
        "name": "vettä",
        "unit": "dl"
      },
      {
        "amount": 2,
        "name": "Pirkka tomaattisosetta",
        "unit": "rkl"
      },
      {
        "amount": 1,
        "name": "suolaa",
        "unit": "tl"
      },
      {
        "amount": null,
        "name": "mustapippuria",
        "unit": "ripaus"
      },
      {
        "amount": 1,
        "name": "sitruunanmehua tai valkoviinietikkaa",
        "unit": "rkl"
      },
      {
        "amount": 1,
        "name": "sokeria",
        "unit": "tl"
      }
    ],
    "ingredientsCategories": null,
    "name": "Linssikeitto",
    "portions": 1,
    "steps": [
      "Hienonna sipulit ja valkosipulit. Kuullota sipulit ja mausteet öljyssä isossa kattilassa. Huuhtele linssit lävikössä.",
      "Lisää linssit, kookosmaito ja kuoritut tomaatit kattilaan. Huuhtele tomaattien tölkki vedellä (2 dl) ja lisää vesi kattilaan. Lisää myös tomaattisose, suola ja mustapippuri",
      "Keitä kannen alla 15-20 minuuttia. Nosta kattila liedeltä ja soseuta keitto sauvaskoittimella. Lisää sitruunanmehu ja sokeri. Tarjoa linssikeitto tuoreen leivän kanssa."
    ],
    "tags": [
      "Kasvis",
      "linssi"
    ]
  },
  {
    "category": 2,
    "ingredients": [
      {
        "amount": 2,
        "category": 0,
        "name": "vehnäjauhoja",
        "unit": "dl"
      },
      {
        "amount": 0.5,
        "category": 0,
        "name": "Pirkka perunasosejauhetta",
        "unit": "pkt"
      },
      {
        "amount": 1,
        "category": 0,
        "name": "Pirkka neljän viljan hiutaleita",
        "unit": "dl"
      },
      {
        "amount": 2,
        "category": 0,
        "name": "leivinjauhetta",
        "unit": "tl"
      },
      {
        "amount": 150,
        "category": 0,
        "name": "Pirkka leivontamargariinia",
        "unit": "g"
      },
      {
        "amount": 1,
        "category": 0,
        "name": "Pirkka emmental-mozzarellajuustoraastetta",
        "unit": "dl"
      },
      {
        "amount": 0.5,
        "category": 0,
        "name": "vettä",
        "unit": "dl"
      },
      {
        "amount": 2,
        "category": 1,
        "name": "sipulia",
        "unit": ""
      },
      {
        "amount": 2,
        "category": 1,
        "name": "valkosipulinkynttä",
        "unit": ""
      },
      {
        "amount": 2,
        "category": 1,
        "name": "porkkanaa",
        "unit": ""
      },
      {
        "amount": 1,
        "category": 1,
        "name": "kesäkurpitsa",
        "unit": ""
      },
      {
        "amount": 1,
        "category": 1,
        "name": "öljyä",
        "unit": "rkl"
      },
      {
        "amount": 1,
        "category": 1,
        "name": "Pirkka Parhaat mustapippurituorejuustoa",
        "unit": "pkt"
      },
      {
        "amount": 0.5,
        "category": 1,
        "name": "suolaa",
        "unit": "tl"
      },
      {
        "amount": 3,
        "category": 1,
        "name": "kananmunaa",
        "unit": ""
      },
      {
        "amount": 1,
        "category": 1,
        "name": "Pirkka ruokakermaa",
        "unit": "tlk"
      }
    ],
    "ingredientsCategories": [
      {
        "id": 0,
        "name": "Pohja"
      },
      {
        "id": 1,
        "name": "Täyte"
      }
    ],
    "name": "Mehevä kasvispiirakka",
    "portions": "8",
    "steps": [
      "Sekoita pohjan kuivat aineet keskenään. Nypi sekaan kylmä paloiteltu rasva ryynimäiseksi seokseksi. Sekoita joukkoon juustoraaste. Lisää kylmä vesi nopeasti sekoittaen. Levitä taikina voidellun irtopohjavuoan (halkaisija 24 cm) pohjalle ja reunoille. Siirrä vuoka jääkaappiin täytteen valmistamisen ajaksi.",
      "Kuori ja hienonna sipulit ja valkosipulit. Kuori porkkanat ja raasta ne sekä kesäkurpitsa karkeaksi raasteeksi.",
      "Kuumenna öljy paistokasarissa, lisää sipulit, valkosipulit, porkkanat ja kesäkurpitsa. Kiehauta vihanneksia, kunnes niistä irtoava neste on lähes haihtunut. Lisää joukkoon paloiteltu tuorejuusto. Mausta suolalla ja anna seoksen hieman jäähtyä.",
      "Sekoita kananmunat ja kerma keskenään. Kaada seos kasvisten joukkoon. Sekoita ja kaada seos vuokaan.",
      "Paista 200 asteessa uunin alimmalla tasolla noin 25 minuuttia. Tarjoa haaleana."
    ],
    "tags": [
      "kasvis"
    ]
  },
  {
    "name": "Puutarhurin piiras",
    "portions": "8",
    "ingredientsCategories": [
      {
        "id": 1,
        "name": "Täyte"
      },
      {
        "id": 2,
        "name": "Munaseos"
      },
      {
        "id": 3,
        "name": "Pinnalle"
      }
    ],
    "ingredients": [
      {
        "amount": 1,
        "unit": "pkt",
        "name": "Pirkka piirakkataikinaa"
      },
      {
        "amount": 10,
        "unit": "",
        "name": "purjoa",
        "category": 1
      },
      {
        "amount": 2,
        "unit": "",
        "name": "porkkanaa",
        "category": 1
      },
      {
        "amount": 1,
        "unit": "rkl",
        "name": "öljyä",
        "category": 1
      },
      {
        "amount": 1,
        "unit": "",
        "name": "kesäkurpitsa",
        "category": 1
      },
      {
        "amount": 1,
        "unit": "",
        "name": "Pirkka mieto punainen chili",
        "category": 1
      },
      {
        "amount": 1,
        "unit": "rs",
        "name": "Pirkka kirsikkatomaatteja",
        "category": 1
      },
      {
        "amount": 1,
        "unit": "tlk",
        "name": "Pirkka kasvirasvasekoitetta",
        "category": 2
      },
      {
        "amount": 2,
        "unit": "",
        "name": "kananmunaa",
        "category": 2
      },
      {
        "amount": 0.75,
        "unit": "tl",
        "name": "suolaa",
        "category": 2
      },
      {
        "amount": 2,
        "unit": "tl",
        "name": "timjamia",
        "category": 2
      },
      {
        "amount": null,
        "unit": "",
        "name": "mustapippurirouhetta",
        "category": 2
      },
      {
        "amount": 1,
        "unit": "ps",
        "name": "Pirkka emmental-mozzarellajuustoraastetta",
        "category": 3
      }
    ],
    "steps": [
      "Sulata piirakkataikina pakkauksen ohjeen mukaan. Taputtele taikina piirakkavuoan (halkaisija 30 cm) pohjalle ja reunoille. Kypsennä piirakkapohjaa 10 minuuttia 200 asteessa alimmalla tasolla.",
      "Viipaloi halkaistu ja huuhdottu purjo. Kuori ja raasta porkkanat. Kuullota purjot ja porkkanat kuumassa öljyssä.",
      "Viipaloi kesäkurpitsa. Halkaise chili, poista siemenet ja viipaloi mahdollisimman ohuiksi viipaleiksi. Halkaise tomaatit.",
      "Levitä esipaistetulle piirakkapohjalle purjo-porkkanaseos, kesäkurpitsat, chilit ja tomaatit.",
      "Sekoita kasvirasvan joukkoon munat ja mausteet. Kaada seos vuokaan. Ripottele pinnalle juustoraaste.",
      "Kypsennä edelleen alimmalla tasolla noin 30 minuuttia."
    ],
    "tags": [
      "kasvis"
    ],
    "category": 2
  }
];

export default testData;
