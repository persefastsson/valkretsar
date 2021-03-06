export default function getKretsFromMunicipality(
  municipality: Kommun
): Valkrets | undefined {
  if (municipality in kommunerMedValkretsar) {
    return kommunerMedValkretsar[municipality] as Valkrets;
  }
  return;
}

export type Valkrets =
  | "Blekinge län"
  | "Dalarnas län"
  | "Gotlands län"
  | "Gävleborgs län"
  | "Göteborgs kommun"
  | "Hallands län"
  | "Jämtlands län"
  | "Jönköpings län"
  | "Kalmar län"
  | "Kronobergs län"
  | "Malmö kommun"
  | "Norrbottens län"
  | "Skåne läns norra och östra"
  | "Skåne läns södra"
  | "Skåne läns västra"
  | "Stockholms kommun"
  | "Stockholms län"
  | "Södermanlands län"
  | "Uppsala län"
  | "Värmlands län"
  | "Västerbottens län"
  | "Västernorrlands län"
  | "Västmanlands län"
  | "Västra Götalands läns norra"
  | "Västra Götalands läns södra"
  | "Västra Götalands läns västra"
  | "Västra Götalands läns östra"
  | "Örebro län"
  | "Östergötlands län";

export type Kommun =
  | "Ale"
  | "Alingsås"
  | "Alvesta"
  | "Aneby"
  | "Arboga"
  | "Arjeplog"
  | "Arvidsjaur"
  | "Arvika"
  | "Askersund"
  | "Avesta"
  | "Bengtsfors"
  | "Berg"
  | "Bjurholm"
  | "Bjuv"
  | "Boden"
  | "Bollebygd"
  | "Bollnäs"
  | "Borgholm"
  | "Borlänge"
  | "Borås"
  | "Botkyrka"
  | "Boxholm"
  | "Bromölla"
  | "Bräcke"
  | "Burlöv"
  | "Båstad"
  | "Dals-Ed"
  | "Danderyd"
  | "Degerfors"
  | "Dorotea"
  | "Eda"
  | "Ekerö"
  | "Eksjö"
  | "Emmaboda"
  | "Enköping"
  | "Eskilstuna"
  | "Eslöv"
  | "Essunga"
  | "Fagersta"
  | "Falkenberg"
  | "Falköping"
  | "Falun"
  | "Filipstad"
  | "Finspång"
  | "Flen"
  | "Forshaga"
  | "Färgelanda"
  | "Gagnef"
  | "Gislaved"
  | "Gnesta"
  | "Gnosjö"
  | "Gotland"
  | "Grums"
  | "Grästorp"
  | "Gullspång"
  | "Gällivare"
  | "Gävle"
  | "Göteborg"
  | "Götene"
  | "Habo"
  | "Hagfors"
  | "Hallsberg"
  | "Hallstahammar"
  | "Halmstad"
  | "Hammarö"
  | "Haninge"
  | "Haparanda"
  | "Heby"
  | "Hedemora"
  | "Helsingborg"
  | "Herrljunga"
  | "Hjo"
  | "Hofors"
  | "Huddinge"
  | "Hudiksvall"
  | "Hultsfred"
  | "Hylte"
  | "Håbo"
  | "Hällefors"
  | "Härjedalen"
  | "Härnösand"
  | "Härryda"
  | "Hässleholm"
  | "Höganäs"
  | "Högsby"
  | "Hörby"
  | "Höör"
  | "Jokkmokk"
  | "Järfälla"
  | "Jönköping"
  | "Kalix"
  | "Kalmar"
  | "Karlsborg"
  | "Karlshamn"
  | "Karlskoga"
  | "Karlskrona"
  | "Karlstad"
  | "Katrineholm"
  | "Kil"
  | "Kinda"
  | "Kiruna"
  | "Klippan"
  | "Knivsta"
  | "Kramfors"
  | "Kristianstad"
  | "Kristinehamn"
  | "Krokom"
  | "Kumla"
  | "Kungsbacka"
  | "Kungsör"
  | "Kungälv"
  | "Kävlinge"
  | "Köping"
  | "Laholm"
  | "Landskrona"
  | "Laxå"
  | "Lekeberg"
  | "Leksand"
  | "Lerum"
  | "Lessebo"
  | "Lidingö"
  | "Lidköping"
  | "Lilla Edet"
  | "Lindesberg"
  | "Linköping"
  | "Ljungby"
  | "Ljusdal"
  | "Ljusnarsberg"
  | "Lomma"
  | "Ludvika"
  | "Luleå"
  | "Lund"
  | "Lycksele"
  | "Lysekil"
  | "Malmö"
  | "Malung-Sälen"
  | "Malå"
  | "Mariestad"
  | "Mark"
  | "Markaryd"
  | "Mellerud"
  | "Mjölby"
  | "Mora"
  | "Motala"
  | "Mullsjö"
  | "Munkedal"
  | "Munkfors"
  | "Mölndal"
  | "Mönsterås"
  | "Mörbylånga"
  | "Nacka"
  | "Nora"
  | "Norberg"
  | "Nordanstig"
  | "Nordmaling"
  | "Norrköping"
  | "Norrtälje"
  | "Norsjö"
  | "Nybro"
  | "Nykvarn"
  | "Nyköping"
  | "Nynäshamn"
  | "Nässjö"
  | "Ockelbo"
  | "Olofström"
  | "Orsa"
  | "Orust"
  | "Osby"
  | "Oskarshamn"
  | "Ovanåker"
  | "Oxelösund"
  | "Pajala"
  | "Partille"
  | "Perstorp"
  | "Piteå"
  | "Ragunda"
  | "Robertsfors"
  | "Ronneby"
  | "Rättvik"
  | "Sala"
  | "Salem"
  | "Sandviken"
  | "Sigtuna"
  | "Simrishamn"
  | "Sjöbo"
  | "Skara"
  | "Skellefteå"
  | "Skinnskatteberg"
  | "Skurup"
  | "Skövde"
  | "Smedjebacken"
  | "Sollefteå"
  | "Sollentuna"
  | "Solna"
  | "Sorsele"
  | "Sotenäs"
  | "Staffanstorp"
  | "Stenungsund"
  | "Stockholm"
  | "Storfors"
  | "Storuman"
  | "Strängnäs"
  | "Strömstad"
  | "Strömsund"
  | "Sundbyberg"
  | "Sundsvall"
  | "Sunne"
  | "Surahammar"
  | "Svalöv"
  | "Svedala"
  | "Svenljunga"
  | "Säffle"
  | "Säter"
  | "Sävsjö"
  | "Söderhamn"
  | "Söderköping"
  | "Södertälje"
  | "Sölvesborg"
  | "Tanum"
  | "Tibro"
  | "Tidaholm"
  | "Tierp"
  | "Timrå"
  | "Tingsryd"
  | "Tjörn"
  | "Tomelilla"
  | "Torsby"
  | "Torsås"
  | "Tranemo"
  | "Tranås"
  | "Trelleborg"
  | "Trollhättan"
  | "Trosa"
  | "Tyresö"
  | "Täby"
  | "Töreboda"
  | "Uddevalla"
  | "Ulricehamn"
  | "Umeå"
  | "Upplands Väsby"
  | "Upplands-Bro"
  | "Uppsala"
  | "Uppvidinge"
  | "Vadstena"
  | "Vaggeryd"
  | "Valdemarsvik"
  | "Vallentuna"
  | "Vansbro"
  | "Vara"
  | "Varberg"
  | "Vaxholm"
  | "Vellinge"
  | "Vetlanda"
  | "Vilhelmina"
  | "Vimmerby"
  | "Vindeln"
  | "Vingåker"
  | "Vårgårda"
  | "Vänersborg"
  | "Vännäs"
  | "Värmdö"
  | "Värnamo"
  | "Västervik"
  | "Västerås"
  | "Växjö"
  | "Ydre"
  | "Ystad"
  | "Åmål"
  | "Ånge"
  | "Åre"
  | "Årjäng"
  | "Åsele"
  | "Åstorp"
  | "Åtvidaberg"
  | "Älmhult"
  | "Älvdalen"
  | "Älvkarleby"
  | "Älvsbyn"
  | "Ängelholm"
  | "Öckerö"
  | "Ödeshög"
  | "Örebro"
  | "Örkelljunga"
  | "Örnsköldsvik"
  | "Östersund"
  | "Österåker"
  | "Östhammar"
  | "Östra Göinge"
  | "Överkalix"
  | "Övertorneå";

interface KommunMedValkrets {
  [key: string]: Valkrets;
}

const kommunerMedValkretsar: KommunMedValkrets = {
  Ale: "Västra Götalands läns västra",
  Alingsås: "Västra Götalands läns västra",
  Alvesta: "Kronobergs län",
  Aneby: "Jönköpings län",
  Arboga: "Västmanlands län",
  Arjeplog: "Norrbottens län",
  Arvidsjaur: "Norrbottens län",
  Arvika: "Värmlands län",
  Askersund: "Örebro län",
  Avesta: "Dalarnas län",
  Bengtsfors: "Västra Götalands läns norra",
  Berg: "Jämtlands län",
  Bjurholm: "Västerbottens län",
  Bjuv: "Skåne läns västra",
  Boden: "Norrbottens län",
  Bollebygd: "Västra Götalands läns södra",
  Bollnäs: "Gävleborgs län",
  Borgholm: "Kalmar län",
  Borlänge: "Dalarnas län",
  Borås: "Västra Götalands läns södra",
  Botkyrka: "Stockholms län",
  Boxholm: "Östergötlands län",
  Bromölla: "Skåne läns norra och östra",
  Bräcke: "Jämtlands län",
  Burlöv: "Skåne läns södra",
  Båstad: "Skåne läns norra och östra",
  "Dals-Ed": "Västra Götalands läns norra",
  Danderyd: "Stockholms län",
  Degerfors: "Örebro län",
  Dorotea: "Västerbottens län",
  Eda: "Värmlands län",
  Ekerö: "Stockholms län",
  Eksjö: "Jönköpings län",
  Emmaboda: "Kalmar län",
  Enköping: "Uppsala län",
  Eskilstuna: "Södermanlands län",
  Eslöv: "Skåne läns västra",
  Essunga: "Västra Götalands läns östra",
  Fagersta: "Västmanlands län",
  Falkenberg: "Hallands län",
  Falköping: "Västra Götalands läns östra",
  Falun: "Dalarnas län",
  Filipstad: "Värmlands län",
  Finspång: "Östergötlands län",
  Flen: "Södermanlands län",
  Forshaga: "Värmlands län",
  Färgelanda: "Västra Götalands läns norra",
  Gagnef: "Dalarnas län",
  Gislaved: "Jönköpings län",
  Gnesta: "Södermanlands län",
  Gnosjö: "Jönköpings län",
  Gotland: "Gotlands län",
  Grums: "Värmlands län",
  Grästorp: "Västra Götalands läns östra",
  Gullspång: "Västra Götalands läns östra",
  Gällivare: "Norrbottens län",
  Gävle: "Gävleborgs län",
  Göteborg: "Göteborgs kommun",
  Götene: "Västra Götalands läns östra",
  Habo: "Jönköpings län",
  Hagfors: "Värmlands län",
  Hallsberg: "Örebro län",
  Hallstahammar: "Västmanlands län",
  Halmstad: "Hallands län",
  Hammarö: "Värmlands län",
  Haninge: "Stockholms län",
  Haparanda: "Norrbottens län",
  Heby: "Uppsala län",
  Hedemora: "Dalarnas län",
  Helsingborg: "Skåne läns västra",
  Herrljunga: "Västra Götalands läns södra",
  Hjo: "Västra Götalands läns östra",
  Hofors: "Gävleborgs län",
  Huddinge: "Stockholms län",
  Hudiksvall: "Gävleborgs län",
  Hultsfred: "Kalmar län",
  Hylte: "Hallands län",
  Håbo: "Uppsala län",
  Hällefors: "Örebro län",
  Härjedalen: "Jämtlands län",
  Härnösand: "Västernorrlands län",
  Härryda: "Västra Götalands läns västra",
  Hässleholm: "Skåne läns norra och östra",
  Höganäs: "Skåne läns västra",
  Högsby: "Kalmar län",
  Hörby: "Skåne läns västra",
  Höör: "Skåne läns västra",
  Jokkmokk: "Norrbottens län",
  Järfälla: "Stockholms län",
  Jönköping: "Jönköpings län",
  Kalix: "Norrbottens län",
  Kalmar: "Kalmar län",
  Karlsborg: "Västra Götalands läns östra",
  Karlshamn: "Blekinge län",
  Karlskoga: "Örebro län",
  Karlskrona: "Blekinge län",
  Karlstad: "Värmlands län",
  Katrineholm: "Södermanlands län",
  Kil: "Värmlands län",
  Kinda: "Östergötlands län",
  Kiruna: "Norrbottens län",
  Klippan: "Skåne läns norra och östra",
  Knivsta: "Uppsala län",
  Kramfors: "Västernorrlands län",
  Kristianstad: "Skåne läns norra och östra",
  Kristinehamn: "Värmlands län",
  Krokom: "Jämtlands län",
  Kumla: "Örebro län",
  Kungsbacka: "Hallands län",
  Kungsör: "Västmanlands län",
  Kungälv: "Västra Götalands läns västra",
  Kävlinge: "Skåne läns södra",
  Köping: "Västmanlands län",
  Laholm: "Hallands län",
  Landskrona: "Skåne läns västra",
  Laxå: "Örebro län",
  Lekeberg: "Örebro län",
  Leksand: "Dalarnas län",
  Lerum: "Västra Götalands läns västra",
  Lessebo: "Kronobergs län",
  Lidingö: "Stockholms län",
  Lidköping: "Västra Götalands läns östra",
  "Lilla Edet": "Västra Götalands läns västra",
  Lindesberg: "Örebro län",
  Linköping: "Östergötlands län",
  Ljungby: "Kronobergs län",
  Ljusdal: "Gävleborgs län",
  Ljusnarsberg: "Örebro län",
  Lomma: "Skåne läns södra",
  Ludvika: "Dalarnas län",
  Luleå: "Norrbottens län",
  Lund: "Skåne läns södra",
  Lycksele: "Västerbottens län",
  Lysekil: "Västra Götalands läns norra",
  Malmö: "Malmö kommun",
  "Malung-Sälen": "Dalarnas län",
  Malå: "Västerbottens län",
  Mariestad: "Västra Götalands läns östra",
  Mark: "Västra Götalands läns södra",
  Markaryd: "Kronobergs län",
  Mellerud: "Västra Götalands läns norra",
  Mjölby: "Östergötlands län",
  Mora: "Dalarnas län",
  Motala: "Östergötlands län",
  Mullsjö: "Jönköpings län",
  Munkedal: "Västra Götalands läns norra",
  Munkfors: "Värmlands län",
  Mölndal: "Västra Götalands läns västra",
  Mönsterås: "Kalmar län",
  Mörbylånga: "Kalmar län",
  Nacka: "Stockholms län",
  Nora: "Örebro län",
  Norberg: "Västmanlands län",
  Nordanstig: "Gävleborgs län",
  Nordmaling: "Västerbottens län",
  Norrköping: "Östergötlands län",
  Norrtälje: "Stockholms län",
  Norsjö: "Västerbottens län",
  Nybro: "Kalmar län",
  Nykvarn: "Stockholms län",
  Nyköping: "Södermanlands län",
  Nynäshamn: "Stockholms län",
  Nässjö: "Jönköpings län",
  Ockelbo: "Gävleborgs län",
  Olofström: "Blekinge län",
  Orsa: "Dalarnas län",
  Orust: "Västra Götalands läns norra",
  Osby: "Skåne läns norra och östra",
  Oskarshamn: "Kalmar län",
  Ovanåker: "Gävleborgs län",
  Oxelösund: "Södermanlands län",
  Pajala: "Norrbottens län",
  Partille: "Västra Götalands läns västra",
  Perstorp: "Skåne läns norra och östra",
  Piteå: "Norrbottens län",
  Ragunda: "Jämtlands län",
  Robertsfors: "Västerbottens län",
  Ronneby: "Blekinge län",
  Rättvik: "Dalarnas län",
  Sala: "Västmanlands län",
  Salem: "Stockholms län",
  Sandviken: "Gävleborgs län",
  Sigtuna: "Stockholms län",
  Simrishamn: "Skåne läns norra och östra",
  Sjöbo: "Skåne läns södra",
  Skara: "Västra Götalands läns östra",
  Skellefteå: "Västerbottens län",
  Skinnskatteberg: "Västmanlands län",
  Skurup: "Skåne läns södra",
  Skövde: "Västra Götalands läns östra",
  Smedjebacken: "Dalarnas län",
  Sollefteå: "Västernorrlands län",
  Sollentuna: "Stockholms län",
  Solna: "Stockholms län",
  Sorsele: "Västerbottens län",
  Sotenäs: "Västra Götalands läns norra",
  Staffanstorp: "Skåne läns södra",
  Stenungsund: "Västra Götalands läns västra",
  Stockholm: "Stockholms kommun",
  Storfors: "Värmlands län",
  Storuman: "Västerbottens län",
  Strängnäs: "Södermanlands län",
  Strömstad: "Västra Götalands läns norra",
  Strömsund: "Jämtlands län",
  Sundbyberg: "Stockholms län",
  Sundsvall: "Västernorrlands län",
  Sunne: "Värmlands län",
  Surahammar: "Västmanlands län",
  Svalöv: "Skåne läns västra",
  Svedala: "Skåne läns södra",
  Svenljunga: "Västra Götalands läns södra",
  Säffle: "Värmlands län",
  Säter: "Dalarnas län",
  Sävsjö: "Jönköpings län",
  Söderhamn: "Gävleborgs län",
  Söderköping: "Östergötlands län",
  Södertälje: "Stockholms län",
  Sölvesborg: "Blekinge län",
  Tanum: "Västra Götalands läns norra",
  Tibro: "Västra Götalands läns östra",
  Tidaholm: "Västra Götalands läns östra",
  Tierp: "Uppsala län",
  Timrå: "Västernorrlands län",
  Tingsryd: "Kronobergs län",
  Tjörn: "Västra Götalands läns västra",
  Tomelilla: "Skåne läns norra och östra",
  Torsby: "Värmlands län",
  Torsås: "Kalmar län",
  Tranemo: "Västra Götalands läns södra",
  Tranås: "Jönköpings län",
  Trelleborg: "Skåne läns södra",
  Trollhättan: "Västra Götalands läns norra",
  Trosa: "Södermanlands län",
  Tyresö: "Stockholms län",
  Täby: "Stockholms län",
  Töreboda: "Västra Götalands läns östra",
  Uddevalla: "Västra Götalands läns norra",
  Ulricehamn: "Västra Götalands läns södra",
  Umeå: "Västerbottens län",
  "Upplands Väsby": "Stockholms län",
  "Upplands-Bro": "Stockholms län",
  Uppsala: "Uppsala län",
  Uppvidinge: "Kronobergs län",
  Vadstena: "Östergötlands län",
  Vaggeryd: "Jönköpings län",
  Valdemarsvik: "Östergötlands län",
  Vallentuna: "Stockholms län",
  Vansbro: "Dalarnas län",
  Vara: "Västra Götalands läns östra",
  Varberg: "Hallands län",
  Vaxholm: "Stockholms län",
  Vellinge: "Skåne läns södra",
  Vetlanda: "Jönköpings län",
  Vilhelmina: "Västerbottens län",
  Vimmerby: "Kalmar län",
  Vindeln: "Västerbottens län",
  Vingåker: "Södermanlands län",
  Vårgårda: "Västra Götalands läns södra",
  Vänersborg: "Västra Götalands läns norra",
  Vännäs: "Västerbottens län",
  Värmdö: "Stockholms län",
  Värnamo: "Jönköpings län",
  Västervik: "Kalmar län",
  Västerås: "Västmanlands län",
  Växjö: "Kronobergs län",
  Ydre: "Östergötlands län",
  Ystad: "Skåne läns södra",
  Åmål: "Västra Götalands läns norra",
  Ånge: "Västernorrlands län",
  Åre: "Jämtlands län",
  Årjäng: "Värmlands län",
  Åsele: "Västerbottens län",
  Åstorp: "Skåne läns norra och östra",
  Åtvidaberg: "Östergötlands län",
  Älmhult: "Kronobergs län",
  Älvdalen: "Dalarnas län",
  Älvkarleby: "Uppsala län",
  Älvsbyn: "Norrbottens län",
  Ängelholm: "Skåne läns norra och östra",
  Öckerö: "Västra Götalands läns västra",
  Ödeshög: "Östergötlands län",
  Örebro: "Örebro län",
  Örkelljunga: "Skåne läns norra och östra",
  Örnsköldsvik: "Västernorrlands län",
  Östersund: "Jämtlands län",
  Österåker: "Stockholms län",
  Östhammar: "Uppsala län",
  "Östra Göinge": "Skåne läns norra och östra",
  Överkalix: "Norrbottens län",
  Övertorneå: "Norrbottens län",
};
