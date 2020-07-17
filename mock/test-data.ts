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
];

export default testData;
