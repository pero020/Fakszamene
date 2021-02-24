exports.questions = function () {

  const questions = [
    {
      question: "1. Voliš li matematiku?",
      answers : {
        a: {
          a: "Da",
          type: "math",
          points: "2",
        },
        b: {
          b: "Sredje",
          type: "math",
          points: "1",
        },
        c: {
          c: "Malo",
          type: "math",
          points: "0",
        },
        d: {
          d: "Ne",
          type: "math",
          points: "-1",
        }
      },
    },
    {
      question: "2. Možeš li riješiti kompleksnije matematičke zadatke?",
      answers : {
        a: {
          a: "Da",
          type: "math",
          points: "2",
        },
        b: {
          b: "Kako koji",
          type: "math",
          points: "1",
        },
        c: {
          c: "Ako mi se posreći",
          type: "math",
          points: "0",
        },
        d: {
          d: "Ne",
          type: "math",
          points: "-1",
        },
      },
    },
    {
      question: "3. Zanimaju li te druge kulture?",
      answers : {
        a: {
          a: "Da",
          type: "geo",
          points: "2",
        },
        b: {
          b: "Većina da",
          type: "geo",
          points: "1",
        },
        c: {
          c: "Samo Amerikanska",
          type: "geo",
          points: "0",
        },
        d: {
          d: "Ne",
          type: "geo",
          points: "-1",
        }
      },
    },
    {
      question: "4. Kada putuješ, razgledavaš li prvo znamenitosti tog područja?",
      answers : {
        a: {
          a: "Uvijek",
          type: "geo",
          points: "2",
        },
        b: {
          b: "Ako su jako zanimljive",
          type: "geo",
          points: "1",
        },
        c: {
          c: "Prvo se ide na piće pa ako ostane vremena",
          type: "geo",
          points: "0",
        },
        d: {
          d: "Nikada",
          type: "geo",
          points: "-1",
        }
      },
    },
    {
      question: "5. Smatraš li biologiju zanimljivim predmetom?",
      answers : {
        a: {
          a: "Da",
          type: "bio",
          points: "2",
        },
        b: {
          b: "Kako koje područje",
          type: "bio",
          points: "1",
        },
        c: {
          c: "Nisam imao biologiju u srednjoj",
          type: "bio",
          points: "0",
        },
        d: {
          d: "Ne",
          type: "bio",
          points: "-1",
        }
      },
    },
    {
      question: "6. Imaš li volje učiti biologiju",
      answers : {
        a: {
          a: "Da",
          type: "bio",
          points: "2",
        },
        b: {
          b: "Ako sam dobro raspoložen",
          type: "bio",
          points: "1",
        },
        c: {
          c: "Ne uči mi se ništa",
          type: "bio",
          points: "0",
        },
        d: {
          d: "Ne",
          type: "bio",
          points: "-1",
        }
      },
    },
    {
      question: "7. Razumiješ li kemiju?",
      answers : {
        a: {
          a: "Da",
          type: "kem",
          points: "2",
        },
        b: {
          b: "Većinom da",
          type: "kem",
          points: "1",
        },
        c: {
          c: "Ne, prof. je kriv",
          type: "kem",
          points: "0",
        },
        d: {
          d: "Ne, ja sam kriv",
          type: "kem",
          points: "-1",
        }
      },
    },
    {
      question: "8. Misliš li da je višesatno gledanje kroz mikroskop zanimljivo?",
      answers : {
        a: {
          a: "Da",
          type: "kem",
          points: "2",
        },
        b: {
          b: "Višesatno svaki dan ne, ali ponekad da",
          type: "kem",
          points: "1",
        },
        c: {
          c: "Na satu je bilo zanimljivo, ali inaće ne",
          type: "kem",
          points: "0",
        },
        d: {
          d: "Ne",
          type: "kem",
          points: "-1",
        }
      },
    },
    {
      question: "9. Je li dizajn tvoja najveća strast",
      answers : {
        a: {
          a: "Da",
          type: "design",
          points: "2",
        },
        b: {
          b: "Ne najveća, al volim kada sve dobro izgleda",
          type: "design",
          points: "1",
        },
        c: {
          c: "Nije bitan izgled nego funkcionalnost",
          type: "design",
          points: "0",
        },
        d: {
          d: "Ne",
          type: "design",
          points: "-1",
        }
      },
    },
    {
      question: "10. Voliš li ići u Ikeu?",
      answers : {
        a: {
          a: "Da, svakom prilikom",
          type: "design",
          points: "2",
        },
        b: {
          b: "Da, ako mi nešto treba",
          type: "design",
          points: "1",
        },
        c: {
          c: "Odem preko volje i onda ne mogu naći izlaz",
          type: "design",
          points: "0",
        },
        d: {
          d: "Ne",
          type: "design",
          points: "-1",
        }
      },
    },
    {
      question: "11. Imaš li razvijeno apstraktno mišljenje za rješavanje problema?",
      answers : {
        a: {
          a: "Da",
          type: "eng",
          points: "2",
        },
        b: {
          b: "Osrednje, ali uvijek smislim rješenje",
          type: "eng",
          points: "1",
        },
        c: {
          c: "Većinom ne",
          type: "eng",
          points: "0",
        },
        d: {
          d: "Ne",
          type: "eng",
          points: "-1",
        }
      },
    },
    {
      question: "12. Odustaješ li lako kada ne znaš što učiniti?",
      answers : {
        a: {
          a: "Da",
          type: "eng",
          points: "-1",
        },
        b: {
          b: "Ni ne počnem nešto raditi ako se čini teškim",
          type: "eng",
          points: "0",
        },
        c: {
          c: "Malo razmislim pa ako ne ide, ne ide",
          type: "eng",
          points: "1",
        },
        d: {
          d: "Ne",
          type: "eng",
          points: "2",
        }
      },
    },
    {
      question: "13. Od koje godine koristiš kompjuter?",
      answers : {
        a: {
          a: "Od kad znam za sebe",
          type: "it",
          points: "2",
        },
        b: {
          b: "Od kad mi je trebalo za školu",
          type: "it",
          points: "1",
        },
        c: {
          c: "Skoro uvijek koristim mob, a ne komp",
          type: "it",
          points: "0",
        },
        d: {
          d: "Ni danas ih nikada ne koristim",
          type: "it",
          points: "-1",
        }
      },
    },
    {
      question: "14. Zanima li te tehnologija?",
      answers : {
        a: {
          a: "Da",
          type: "it",
          points: "2",
        },
        b: {
          b: "Zanimljivo je čitati o njoj, ali ne i učiti",
          type: "it",
          points: "1",
        },
        c: {
          c: "Ne zanima me dalje od društvenih mreža",
          type: "it",
          points: "0",
        },
        d: {
          d: "Ne želim imati doticaja s njom",
          type: "it",
          points: "-1",
        }
      },
    },
    {
      question: "15. Fasciniraju li te velika vozila poput avijona i brodova?",
      answers : {
        a: {
          a: "Da",
          type: "transport",
          points: "2",
        },
        b: {
          b: "Zanimljva su, no rađe bih uredski posao",
          type: "transport",
          points: "1",
        },
        c: {
          c: "Nikad ne znaš kad će prometna nesreća",
          type: "transport",
          points: "0",
        },
        d: {
          d: "Ne",
          type: "transport",
          points: "-1",
        }
      },
    },
    {
      question: "16. Jesi li jedva dočekao vozačku dozvolu?",
      answers : {
        a: {
          a: "Da i želim polagati i za druga vozila",
          type: "transport",
          points: "2",
        },
        b: {
          b: "Da",
          type: "transport",
          points: "1",
        },
        c: {
          c: "Žao mi je onih koji se voze samnom",
          type: "transport",
          points: "0",
        },
        d: {
          d: "Ne",
          type: "transport",
          points: "-1",
        }
      },
    },
    {
      question: "17. Zanima li te kako je izgrađen svijet oko nas?",
      answers : {
        a: {
          a: "Da",
          type: "build",
          points: "4",
        },
        b: {
          b: "Neke građevine me zanimaju, a neke ne",
          type: "build",
          points: "2",
        },
        c: {
          c: "Sretan sam dok se ništa ne ruši",
          type: "build",
          points: "0",
        },
        d: {
          d: "Ne",
          type: "build",
          points: "-2",
        }
      },
    },
    {
      question: "18. Uživaš li provođeći vrijeme na selu?",
      answers : {
        a: {
          a: "Da",
          type: "nature",
          points: "2",
        },
        b: {
          b: "Da, ako ne moram ništa raditi",
          type: "nature",
          points: "1",
        },
        c: {
          c: "Samo ako imam WiFi",
          type: "nature",
          points: "0",
        },
        d: {
          d: "Ne",
          type: "nature",
          points: "-1",
        }
      },
    },
    {
      question: "19. Bi li mogao dobrovljno učiti o zemlji i prirodi?",
      answers : {
        a: {
          a: "Da, čak i u slobodno vrijeme",
          type: "nature",
          points: "2",
        },
        b: {
          b: "Da",
          type: "nature",
          points: "1",
        },
        c: {
          c: "Možda bi se našlo nešto zanimljivo",
          type: "nature",
          points: "0",
        },
        d: {
          d: "Ne",
          type: "nature",
          points: "-1",
        }
      },
    },
    {
      question: "20. Voliš li životinje?",
      answers : {
        a: {
          a: "Da",
          type: "animals",
          points: "2",
        },
        b: {
          b: "Da, većinu",
          type: "animals",
          points: "1",
        },
        c: {
          c: "Samo neke ako su slatke",
          type: "animals",
          points: "0",
        },
        d: {
          d: "Ne, nikoje",
          type: "animals",
          points: "-1",
        }
      },
    },
    {
      question: "21. Bi li rađe imao psa ili dobrog prijatelja?",
      answers : {
        a: {
          a: "Psa",
          type: "animals",
          points: "2",
        },
        b: {
          b: "Ovisi koja pasmina, ali psa",
          type: "animals",
          points: "1",
        },
        c: {
          c: "Dobrog prijatelja",
          type: "animals",
          points: "0",
        },
        d: {
          d: "Bilo kakvog prijatelja",
          type: "animals",
          points: "-1",
        }
      },
    },
    {
      question: "22. Usrećava li te briga za bolesne i nemoćne?",
      answers : {
        a: {
          a: "Da",
          type: "sick",
          points: "4",
        },
        b: {
          b: "Da za bližnje",
          type: "sick",
          points: "2",
        },
        c: {
          c: "Bolje da se njihova obitelj brine o njima",
          type: "sick",
          points: "0",
        },
        d: {
          d: "Ne",
          type: "sick",
          points: "-2",
        }
      },
    },
    {
      question: "23. Voliš li raditi s djecom?",
      answers : {
        a: {
          a: "Da, sa svim uzrastima",
          type: "kids",
          points: "4",
        },
        b: {
          b: "Da, s mlađom",
          type: "kids",
          points: "2",
        },
        c: {
          c: "Možda",
          type: "kids",
          points: "0",
        },
        d: {
          d: "Ne",
          type: "kids",
          points: "-2",
        }
      },
    },
    {
      question: "24. Bi li htio biti dio velike firme?",
      answers : {
        a: {
          a: "Da",
          type: "business",
          points: "2",
        },
        b: {
          b: "Da, dok vidim svoj utjecaj",
          type: "business",
          points: "1",
        },
        c: {
          c: "Ovisi o poslu",
          type: "business",
          points: "0",
        },
        d: {
          d: "Ne",
          type: "business",
          points: "-1",
        }
      },
    },
    {
      question: "25. Zanima li te novac i njegova uloga u svijetu?",
      answers : {
        a: {
          a: "Da",
          type: "business",
          points: "2",
        },
        b: {
          b: "Da, ako mi pomaže više zaraditi",
          type: "business",
          points: "1",
        },
        c: {
          c: "Ne trebam znati o njemu dok ga je dovoljno",
          type: "business",
          points: "0",
        },
        d: {
          d: "Ne",
          type: "business",
          points: "-1",
        }
      },
    },
    {
      question: "26. Spada li povijest u zanimljive predmete?",
      answers : {
        a: {
          a: "Da, najzanimljivije",
          type: "history",
          points: "4",
        },
        b: {
          b: "Da, ako su ratovi u pitanju",
          type: "history",
          points: "2",
        },
        c: {
          c: "Ne baš",
          type: "history",
          points: "0",
        },
        d: {
          d: "Ne uopće",
          type: "history",
          points: "-2",
        }
      },
    },
    {
      question: "27. Voliš više učiti strane jezike ili hrvatski?",
      answers : {
        a: {
          a: "Strane",
          type: "lang",
          points: "4",
        },
        b: {
          b: "Strane koji me zanimaju",
          type: "lang",
          points: "2",
        },
        c: {
          c: "Draži mi je hrvatski",
          type: "jezik",
          points: "1",
        },
        d: {
          d: "Volim učiti hrvatski",
          type: "jezik",
          points: "2",
        }
      },
    },
    {
      question: "28. Jesi li spretan s hrvatskim jezikom?",
      answers : {
        a: {
          a: "Da, vrlo elokventan",
          type: "jezik",
          points: "2",
        },
        b: {
          b: "Da, no ne puno dalje od svakodnevnih razgovora",
          type: "jezik",
          points: "1",
        },
        c: {
          c: "Da, vrlo alokventan",
          type: "jezik",
          points: "0",
        },
        d: {
          d: "Ne",
          type: "jezik",
          points: "-1",
        }
      },
    },
    {
      question: "29. Jesi li umjetnička duša?",
      answers : {
        a: {
          a: "Da, potpuno",
          type: "art",
          points: "4",
        },
        b: {
          b: "Da, ali se ne bih mogao time baviti",
          type: "art",
          points: "2",
        },
        c: {
          c: "Umjetnost je dosadna",
          type: "art",
          points: "0",
        },
        d: {
          d: "Ne",
          type: "art",
          points: "-2",
        }
      },
    },
    {
      question: "30. Je li sport jedna od rijetkih stvari koje te zanimaju?",
      answers : {
        a: {
          a: "Jedina stvar",
          type: "sport",
          points: "2",
        },
        b: {
          b: "Da",
          type: "sport",
          points: "1",
        },
        c: {
          c: "Samo za zabavu",
          type: "sport",
          points: "0",
        },
        d: {
          d: "Ne",
          type: "sport",
          points: "-1",
        }
      },
    },
    {
      question: "31. Baviš li se nekim sportom?",
      answers : {
        a: {
          a: "Da, profesionalno",
          type: "sport",
          points: "2",
        },
        b: {
          b: "Da, više rekreacijski",
          type: "sport",
          points: "1",
        },
        c: {
          c: "Ponekad rekreacijski",
          type: "sport",
          points: "0",
        },
        d: {
          d: "Ne",
          type: "sport",
          points: "-1",
        }
      },
    },
    {
      question: "32. Sviraš li instrument?",
      answers : {
        a: {
          a: "Da, profesionalno",
          type: "music",
          points: "2",
        },
        b: {
          b: "Da, išao sam u glazbenu jedno vrijeme",
          type: "music",
          points: "1",
        },
        c: {
          c: "Ponekad amaterski",
          type: "music",
          points: "0",
        },
        d: {
          d: "Ne",
          type: "music",
          points: "-1",
        }
      },
    },
    {
      question: "33. Želiš li glazbom zarađivati za život?",
      answers : {
        a: {
          a: "Da, to je moja najveća strast",
          type: "music",
          points: "2",
        },
        b: {
          b: "Da, ali nema dovoljno para u tome",
          type: "music",
          points: "1",
        },
        c: {
          c: "Zašto ne ako sve drugo propadne",
          type: "music",
          points: "0",
        },
        d: {
          d: "Ne",
          type: "music",
          points: "-1",
        }
      },
    },
    {
      question: "34. Voliš li komuncirati s drugim ljudima?",
      answers : {
        a: {
          a: "Da",
          type: "comms",
          points: "2",
        },
        b: {
          b: "Da, ako su ljudi vrijedni razgovora",
          type: "comms",
          points: "1",
        },
        c: {
          c: "Samo s prijateljima",
          type: "comms",
          points: "0",
        },
        d: {
          d: "Ne",
          type: "comms",
          points: "-1",
        }
      },
    },
    {
      question: "35. Zanima li te znanost iza naše komunikacije?",
      answers : {
        a: {
          a: "Da",
          type: "comms",
          points: "2",
        },
        b: {
          b: "Da, zanimljivosti",
          type: "comms",
          points: "1",
        },
        c: {
          c: "Većinom ne",
          type: "comms",
          points: "0",
        },
        d: {
          d: "Ne",
          type: "comms",
          points: "-1",
        }
      },
    },
    {
      question: "36. Voliš li raditi svojim rukama tj. \"zaprljati ruke\"?",
      answers : {
        a: {
          a: "Da",
          type: "hands",
          points: "4",
        },
        b: {
          b: "Da ako nije prljavo ili vrlo zahtjevno",
          type: "hands",
          points: "2",
        },
        c: {
          c: "Većinom ne",
          type: "hands",
          points: "0",
        },
        d: {
          d: "Ne",
          type: "hands",
          points: "-2",
        }
      },
    },
  ]

  return questions;
};


exports.topics = function() {

  topics = ["math", "geo", "bio", "kem", "design", "eng", "it", "transport", "build", "nature", "animals", "sick", "kids", "business", "history", "lang", "jezik", "art", "sport", "music", "hands", "comms",]
  return topics
};


exports.countPoints = function(data, key) {
  let points = 0;

  if (data.hasOwnProperty(key)) {
    if (Array.isArray(data[key])) {
      for (var i=0; i<data[key].length; i++) {
        points += parseInt(data[key][i]);
      }
    } else {
      points += parseInt(data[key]);
    }
  } else {
    points = 0
  }
  return points;

};


exports.pickCollege = function(p) {
  const colleges = [];

  if(p["math"] > 3) {
    colleges.push("PMF - Matematika");
  }
  if(p["math"] > 2 && p["kids"] > 3) {
    colleges.push("PMF - Matematika Nastavnički");
  }
  if(p["geo"] > 2 && p["nature"] > 0 && p["math"] > 2 && p["eng"] > 1) {
    colleges.push("PMF - Geofizika");
  }
  if(p["geo"] > 3) {
    colleges.push("PMF - Geografija");
  }
  if(p["geo"] > 2 && p["history"] > 2 && p["kids"] > 1) {
    colleges.push("PMF - Geografija i Povijest Nastavnički");
  }
  if(p["eng"] > 3 && p["math"] > 3) {
    colleges.push("PMF - Fizika");
  }
  if(p["eng"] > 3 && p["math"] > 3 && p["kids"] > 1) {
    colleges.push("PMF - Fizika Nastavnički");
  }
  if(p["bio"] > 2 && p["kem"] > 2 && p["kids"] > 1) {
    colleges.push("PMF - Biologija i Kemija Nastavnički");
  }
  if(p["bio"] > 3) {
    colleges.push("PMF - Biologija");
  }
  if(p["kem"] > 3) {
    colleges.push("PMF - Kemija");
  }
  if(p["kem"] > 3 && p["bio"] > 2) {
    colleges.push("PMF - Molekularna Biologija");
  }

  // Fali smjerova na PMF-u

  if(p["build"] > 1 && p["eng"] > 2 && p["design"] > 2) {
    colleges.push("Arhitektonski - Arhitektura i Urbanizam")
  }
  if(p["design"] > 3) {
    colleges.push("Arhitektonski - Dizajn");
  }
  if(p["eng"] > 2 && p["it"] > 2) {
    colleges.push("FER - Elektrotehnika i Informacijska Tehnologija");
    colleges.push("TVZ - Elektrotehnika, Mehatronika");
  }
  if(p["eng"] > 2 && p["it"] > 3) {
    colleges.push("FER - Računarstvo");
    colleges.push("TVZ - Računarstvo, Informatika");
  }
  if(p["kem"] > 3) {
    colleges.push("FKIT - Kemijsko Inžinjerstvo");
  }
  if(p["kem"] > 2 && p["nature"] > 2) {
    colleges.push("FKIT - Ekoinžinjerstvo");
  }
  if(p["kem"] > 2 && p["design"] > 1) {
    colleges.push("FKIT - Kemija i inžinjerstvo materijala");
  }
  if(p["kem"] > 3 && p["eng"] > 2) {
    colleges.push("FKIT - Primjenjena Kemija");
  }
  if(p["transport"] > 3) {
    colleges.push("FPZ - Promet");
  }
  if(p["transport"] > 2 && p["business"] > 2) {
    colleges.push("FPZ - Inteligentni Prometni Sustavi i Logistika");
  }
  if(p["aeronautika"] > 3) {
    colleges.push("FPZ - Aeronautika");
  }
  if(p["eng"] > 2 && p["it"] > 2 && p["hands"] > -1) {
    colleges.push("FSB - Strojarstvo");
    colleges.push("TVZ - Strojarstvo");
  }
  if(p["transport"] > 3 && p["eng"] > 2) {
    colleges.push("FSB - Brodogradnja");
    colleges.push("FSB - Zrakoplovstvo");
  }
  if(p["nature"] > 2 && p["eng"] > 2 && p["it"] > 1) {
    colleges.push("Geodetski - Geodezija i Geoinformatika");
  }
  if(p["nature"] > 3 && p["eng"] > 2) {
    colleges.push("Geotehnički - inžinjerstvo okoliša");
  }
  if(p["build"] > 2 && p["eng"] > 2) {
    colleges.push("Građevinarski - Građevinarstvo");
    colleges.push("TVZ - Graditeljstvo");
  }
  if(p["design"] > 3) {
    colleges.push("Grafički - Grafička Tehnologija");
  }
  if(p["nature"] > 2 && p["eng"] > 2 && p["hands"] > 2) {
    colleges.push("Metalurški - Metalurgija");
  }
  if(p["build"] > 2 && p["nature"] > 1 && p["hands"] > 3) {
    colleges.push("RGN - Rudarstvo");
  }
  if(p["nature"] > 3 && p["eng"] > 2) {
    colleges.push("RGN - Geološko Inžinjerstvo");
  }
  if(p["eng"] > 2 && p["kem"] > 1 && p["build"] > 1 && p["hands"] > 1) {
    colleges.push("RGN - Naftno Rudarstvo");
  }
  if(p["design"] > 2 && p["kem"] > 2 && p["eng"] > 1) {
    colleges.push("Tekstilno Tehnološki - Tekstilna Tehnologija i Inžinjerstvo");
  }
  if(p["design"] > 3) {
    colleges.push("Tekstilno Tehnološki - Tekstilni i Modni Dizajn");
  }
  if(p["nature"] > 3 && p["hands"] > 3) {
    colleges.push("Agronomski - Svi Smjerovi");
  }
  if(p["kem"] > 2 && p["eng"] > 2) {
    colleges.push("PBF - Prehrambena Tehnologija");
  }
  if(p["kem"] > 2 && p["bio"] > 2 && p["eng"] > 2) {
    colleges.push("PBF - Biotehnologija");
  }
  if(p["kem"] > 1 && p["bio"] > 1 && p["sport"] > 1) {
    colleges.push("PBF - Nutricionizam");
  }
  if(p["nature"] > 3 && p["hands"] > 3) {
    colleges.push("Šumarski - Svi smjerovi");
  }
  if(p["kids"] > 1 && p["sick"] > 1 && p["jezik"] > 1) {
    colleges.push("ERF - Logopedija");
  }
  if(p["kids"] > 3 && p["sick"] > 0) {
    colleges.push("ERF - Socijalna Pedagogija");
  }
  if(p["sick"] > 3) {
    colleges.push("ERF - Rehabilitacija");
  }
  if(p["kem"] > 3) {
    colleges.push("Farmaceutsko Biokemijski - Farmacija");
  }
  if(p["bio"] > 2 && p["kem"] > 2 && p["sick"] > 1) {
    colleges.push("Farmaceutsko Biokemijski - Medicinska Biokemija");
  }
  if(p["sick"] > 1 && p["bio"] > 3) {
    colleges.push("Medicinski - Medicina");
    colleges.push("Stomatološki - Dentalna Medicina");
  }
  if(p["animals"] > 2 && p["bio"] > 2) {
    colleges.push("Veterinarski - Veterinarska Medicina");
  }
  if(p["business"] > 2 && p["math"] > 1) {
    colleges.push("Ekonomski - svi smjerovi");
  }
  if(p["it"] > 2 && p["business"] > 1) {
    colleges.push("FOI - Informacijski i Poslovni Sustavi");
  }
  if(p["business"] > 2 && p["it"] > 1) {  // Još neki kriterij za FOI ekonomika poduzetnistva
    colleges.push("FOI - Ekonomika Poduzetništva");
  }
  if(p["business"] > 2 && p["history"] > 3) {
    colleges.push("FPZ - Politologija");
  }
  if(p["comms"] > 3 && p["art"] > 1) {
    colleges.push("FPZ - Novinarstvo");
  }
  if(p["sick"] > 3 && p["kids"] > 1) {
    colleges.push("Pravni Fakultet - Socijalni Rad");
  }
  if(p["comms"] > 1 && p["history"] > 1 && p["business"] > 2) {
    colleges.push("Pravni Fakultet - Pravo");
  }
  if(p["kids"] > 1 && p["jezik"] > 0 && p["eng"] < 2) {
    colleges.push("Učiteljski - Rani i Predškolski Odgoj");
  }
  if(p["kids"] > 3 && p["jezik"] > 0 && p["music"] > 0 && p["eng"] < 2) {
    colleges.push("Učiteljski - Učiteljski");
  }
  if(p["sport"] > 3) {
    colleges.push("Kineziološki - Kineziologija");
  }
  if(p["comms"] > 3 && p["math"] > 2) {
    colleges.push("Filozofski - Psihologija");
    colleges.push("Hrvatski Studij - Psihologija");
  }
  if(p["comms"] > 2 && p["history"] > 1 && p["geo"] > 2 && p["business"] > 2) {
    colleges.push("Filozofski - Sociologija");
    colleges.push("Hrvatski Studij - Sociologija");
  }
  if(p["pov"] > 3 && p["geo"] > 3) {
    colleges.push("Filozofski - Povijest i Geografija");
  }
  if(p["jezik"] > 1 && p["lang"] > 1 && p["geo"] > 3) {
    colleges.push("Filozofski - Jezici");
  }
  if(p["jezik"] > 3 && p["art"] > 1) {
    colleges.push("Filozofski - Komparativna Književnost, Kroatistika");
    colleges.push("Hrvatski Studij - Kroatistika");
  }
  if(p["pov"] > 3 && p["art"] > 3  && p["design"] > 1) {
    colleges.push("Filozofski - Povijest Umjetnosti");
  }

  // Fale neki smjerovi Hrv. Studija

  if(p["art"] > 3 || p["music"] > 3) {
    colleges.push("Akademija - Smjer po izboru");
  }
  if(p["hands"] > 3 && p["eng"] > 2 && p["build"] > 1) {
    colleges.push("OSHR - Vojno Inžinjerstvo, Vođenje i Upravljanje");
  }
  if(p["sick"] > 3 && p["bio"] > 2) {
    colleges.push("Zdravstveno Veleučilište - Sestrinjstvo");
  }
  if(p["sick"] > 1 && p["bio"] > 1 && p["hands"] > 1 && p["sport"] > 0) {
    colleges.push("Zdravstveno Veleučilište - Fizioterapija");
  }

  // Fale neki smjerovi Zdravstvenog Velečilišta

  if(p["design"] > 2 && p["it"] > 1) {
    colleges.push("TVZ - Informatika, Informatički dizajn");
  }
  if(p["it"] > 2 && p["business"] > 2 && p["eng"] > 1) {
    colleges.push("TVZ - Informatika, Elektroničko Poslovanje");
  }
  if(p[""] > 0 && p[""] > 0) {
    colleges.push("");
  }
  if(p[""] > 0 && p[""] > 0) {
    colleges.push("");
  }
  if(p[""] > 0 && p[""] > 0) {
    colleges.push("");
  }
  if(p[""] > 0 && p[""] > 0) {
    colleges.push("");
  }  
  if(p[""] > 0 && p[""] > 0) {
    colleges.push("");
  }
  if(p[""] > 0 && p[""] > 0) {
    colleges.push("");
  }
  if(p[""] > 0 && p[""] > 0) {
    colleges.push("");
  }
  if(p[""] > 0 && p[""] > 0) {
    colleges.push("");
  }
  if(p[""] > 0 && p[""] > 0) {
    colleges.push("");
  }
  if(p[""] > 0 && p[""] > 0) {
    colleges.push("");
  }
  if(p[""] > 0 && p[""] > 0) {
    colleges.push("");
  }



if (colleges.length < 1) {
  colleges.push("Algoritam nije pronašao Faks za Tebe")
}

  return colleges
}
