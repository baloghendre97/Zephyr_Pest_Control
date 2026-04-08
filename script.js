const pestData = {
    'egér': {
        title: 'Egérirtás',
        image: 'images/mouse.jpg',
        content: `
            <div class="modal-section">
                <h4>Szakszerű egérirtás</h4>
                <p><strong>Fajok:</strong> házi egér, güzü egér</p>
                <p>Előfordulásra utaló jelek: ürülék, rágás- és lábnyom, jellegzetes egérszag. Búvóhelyei: padlás, mennyezet fölött, szerelőakna, raktározott áruban és az alatt. Nem fél az embertől és szívesen választja életteréül a lakásokat, főként a hideg idő beálltával.</p>
                <p>Az egérirtás előtt a teljes területet felmérjük és elemezzük a kockázatokat. Meghatározzuk a probléma nagyságát és az egérirtás lehetőségeit. Az egérirtáshoz engedélyezett véralvadásgátló szerformát kiválasztjuk, azt zárható szerelvényben helyezzük ki. Az egérirtás utáni első ellenőrzés 1 hét múlva esedékes, majd rendszeresen a fogyasztás megszűnéséig. Ahol a csalétken kívül alternatív vonzó táplálékforrás is jelen van, ott csapó, élvebefogó, ragasztós csapdát alkalmazunk.</p>
            </div>
            <div class="modal-section">
                <h4>Megelőzés</h4>
                <p>A megelőzés két részből tevődik össze. Higiéniai intézkedések: a táplálékforrások minimálisra korlátozása. Műszaki intézkedések: szakembereink az egérirtás után az egerek újbóli bejutásának megakadályozása érdekében felhívjuk megrendelőink figyelmét a műszaki hiányosságok megszüntetésére. A raktározott élelmiszerek, készletek rendszeres ellenőrzésével megelőzhető elszaporodásuk és idejében beavatkozhatunk.</p>
            </div>
            <div class="modal-section">
                <h4>Az egerek kártétele</h4>
                <p>Fertőző megbetegedések kórokozóinak terjesztése. Raktározott élelmiszerek, készletek ürülékkel és vizelettel történő szennyezése. Rágással okozott károk csomagolt élelmiszereken, textilen, papíron, szigetelőanyagokon, csővezetékeken és elektromos vezetékeken. Tipikus egérszag és házakban a lakók éjszakai nyugalmának zavarása.</p>
            </div>
        `
    },
    'patkány': {
        title: 'Patkányirtás',
        image: 'images/rat.jpg',
        content: `
            <div class="modal-section">
                <h4>Szakszerű patkányirtás</h4>
                <p><strong>Fajok:</strong> házi patkány, vándor patkány</p>
                <p>Előfordulásra utaló jelek: rágás nyomok, poros területeken láb- és faroknyomok, járatok, hastól származó foltok a gyakran használt járatokban, felfúrások, ürülék ( barnásszürke kapszula formájú). A patkányirtás előtt a teljes területet felmérjük és elemezzük a kockázatokat. Meghatározzuk a probléma nagyságát és a patkányirtás lehetőségeit. A patkányirtáshoz engedélyezett véralvadásgátló szerformát kiválasztjuk, azt zárható szerelvényben helyezzük ki. Az irtás utáni első ellenőrzés 1 hét múlva esedékes, majd rendszeresen a fogyasztás megszűnéséig. Ahol a csalétken kívül alternatív vonzó táplálékforrás is jelen van, ott csapó, élvebefogó, ragasztós csapdát alkalmazunk.</p>
            </div>
            <div class="modal-section">
                <h4>Megelőzés</h4>
                <p>A megelőzés két részből tevődik össze. Higiéniai intézkedések: a táplálékforrások minimálisra korlátozása. Műszaki intézkedések: szakembereink a patkányirtás után a patkányok újbóli bejutásának megakadályozása érdekében felhívjuk megrendelőink figyelmét a műszaki hiányosságok megszüntetésére. A raktározott élelmiszerek, készletek rendszeres ellenőrzésével megelőzhető elszaporodásuk és idejében beavatkozhatunk.</p>
            </div>
            <div class="modal-section">
                <h4>A patkányok kártétele</h4>
                <p>Fertőző megbetegedések kórokozóinak terjesztése. Egy patkány az évi 20 kg táplálék elfogyasztásán kívül, ennél jóval nagyobb mennyiséget is beszennyezhet. Raktározott élelmiszerek, készletek ürülékkel és vizelettel történő szennyezése. Rágással okozott károk csomagolt élelmiszereken, textilen, papíron, szigetelőanyagokon, csővezetékeken és elektromos vezetékeken.</p>
            </div>
            <div class="modal-section">
                <h4>Patkányirtás vadászgörénnyel</h4>
                <p>A patkányirtás egy régebb óta ismert módszere az úgynevezett vadászgörényes hajtás, amelyre egyre inkább előtérbe kerül a biológiai védekezési módszerek népszerűségének növekedésével. A görénnyel és vadászkutyával történő patkányirtás előnyei: környezetkímélő eljárás, azonnali és látványos eredmény. Hátránya, hogy az irtás követően visszamaradt patkányokra hatástalan és újra rágcsálóirtószert kell kihelyezni vagy a görényes hajtást meg kell ismételni. Az ilyen irtást kimondottan erre a célra nevelt kutyákkal és betanított görényekkel lehet kivitelezni, ezért az ilyen irtás költsége magasabb, mint a hagyományos patkányirtás.</p>
            </div>
        `
    },
    'csótány': {
        title: 'Csótányirtás',
        image: 'images/cockroach.jpg',
        content: `
            <div class="modal-section">
                <h4>Szakszerű csótányirtás</h4>
                <p><strong>Fajok:</strong> konyhai csótány, német csótány, amerikai csótány</p>
                <p>A csótányirtás három fázisa: 1. előkészítés, 2. a csótányirtás végrehajtása, 3. utóellenőrzés. A fertőzöttséget felmérjük monitoring csapdákkal, valamint kiűző szer alkalmazásával. Kiválasztjuk a megfelelő technológiát és irtószert. Csótányirtásra alkalmazható eljárások: permetezés, hideg-, szárazködképzés, ULV-eljárás, gél alkalmazása, füstképzés, légtértelítés, mérgezett csalétek alkalmazása, felületkezelő aeroszol, rovarirtó permet, csapdázás, attraktáns alkalmazása. A csótányirtás után 6-8 héttel visszaellenőrzést tartunk. Időszakos ellenőrzések végzése attraktánssal ellátott ragasztós csapdák kihelyezésével történik. Ha csótány jelenlétét tapasztalja érdemes minél hamarabb szakemberhez fordulni, ne hagyja, hogy elszaporodjanak.</p>
            </div>
            <div class="modal-section">
                <h4>Megelőzés</h4>
                <p>A megfelelő higiénés körülmények fenntartása, alapos és rendszeres takarítás az alapja a megelőzésnek. Műszaki intézkedések: szakembereink a csótányirtás után a csótányok újbóli megtelepedésének, elszaporodásának megakadályozása érdekében felhívják megrendelőink figyelmét a műszaki hiányosságok megszüntetésére. Ahol lehetséges a rések és repedések betömése, megszüntetése szükséges.</p>
            </div>
            <div class="modal-section">
                <h4>A csótányok kártétele</h4>
                <p>A csótányok szennyezik az élelmiszereket, baktériumokat pl.: Salmonellát terjesztenek. A háti mirigy által termelt kellemetlen szagot áraszt.</p>
            </div>
        `
    },
    'poloska': {
        title: 'Ágyi poloskairtás',
        image: 'images/bedbug.jpg',
        content: `
            <div class="modal-section">
                <h4>Szakszerű ágyi poloskairtás</h4>
                <p>A jelenlétükre utaló jelek alapján meghatározzuk a fertőzöttség mértékét. Az ágyi poloskairtás során az összes lehetséges rejtekhelyet, valamint a feltételezett vonulási utakat reziduális hatású folyékony ágyi poloskairtószerrel kezeljük. A fali foglalatok porzószerrel kezelhetők. Kiegészítésképpen hidegköd- vagy füstképzést is alkalmazhatunk. Mindig az ágy felé haladva kell elvégezni a kezelést. A mosható textíliákat a kezelés után 48 órával mossuk ki. A kezelés után visszaellenőrzést kell végezni, szükség esetén az ágyi poloskairtást meg kell ismételni.</p>
                <p>Alkalmazható eljárások: permetezés, hideg-, szárazködképzés, ULV-eljárás, füstképzés, légtértelítés, porozás, felületkezelő aeroszol, rovarirtó permet. Az ágyi poloskairtás legfontosabb elemei a tapasztalt szakember, a megfelelő irtószer megválasztása és alaposság.</p>
            </div>
            <div class="modal-section">
                <h4>Megelőzés</h4>
                <p>Az ágyi poloska terjedése történhet aktív és passzív úton. Az épületbe passzív úton bejuthat használ ruhával, bútorral vagy saját magunk behurcolhatjuk lakásunkba pl.: egy fertőzött területen töltött éjszaka után. Az épületen belül aktívan terjed vagyis a szomszéd lakáson belül illetve szomszédos lakásokba is képen átterjedni. Amint észleli jelenlétüket forduljon szakemberhez és kérjen ágyi poloskairtást.</p>
            </div>
            <div class="modal-section">
                <h4>Az ágyi poloska kártétele</h4>
                <p>A poloska szúrása csoportokban láthatók a bőrön. Jellegzetes tünetei a viszketés, irritáció, duzzanatok, rossz közérzet. Nehezen gyógyul és érzékenységtől függően eltérően reagálnak rá az emberek. Szerepük a vírusok és baktériumok terjesztésében még nem bizonyított.</p>
            </div>
        `
    },
    'darázs': {
        title: 'Darázsirtás',
        image: 'images/wasp.jpg',
        content: `
            <div class="modal-section">
                <h4>Szakszerű darázsirtás</h4>
                <p><strong>Fajok:</strong> kecskedarázs, lódarázs, padlásdarázs</p>
                <p>A darázsirtás különös óvatosságot igényel, minden esetben bízza tapasztalt szakemberre! A darázsirtás veszélyes, mindig védőruhát kell viselni. A darazsak csak napközben aktívak. Minél magasabb a hőmérséklet, a darazsak annál aktívabbak. Ezért a darázsirtást kora hajnali vagy esti órákban a legcélszerűbb elvégezni. Darazsak terjedése a királynő vándorlása révén valósul meg. Az első éjszakai fagy során a fiatal királynő kivételével az összes darázs elpusztul. A fiatal királynők védett helyen telelnek át.</p>
            </div>
            <div class="modal-section">
                <h4>Mi a darázsirtás legcélszerűbb módja?</h4>
                <p>A fészek felkutatása és az abban élő összes darázs egyidejű elpusztítása. Darázsirtáskor alkalmazható eljárások: darázsirtó aeroszol, légtérkezelő aeroszol, hideg-, és melegköd-képzés, ULV-eljárás, porozás, csapda, attraktáns. Amennyiben szakszerű segítségre van szüksége, kérjen ajánlatot darázsirtásra! Segítünk!</p>
            </div>
            <div class="modal-section">
                <h4>Megelőzés</h4>
                <p>Darazsak előfordulásának megelőzésére alkalmazható eljárások: csapda, hálózás, darázsriasztó zsák alkalmazása. Az ablakokat, ajtókat és szellőzőnyílásokat lássuk el rovarhálóval. Kora tavasszal az áttelelő királynőt csapdával befoghatjuk. A fészkek leverésével is megelőzhető megtelepedésük, elszaporodásuk. Akadályozzuk meg, hogy a darazsak hozzáférjenek a vonzó táplálékhoz. A szeméttároló edények fedelét használat után zárjuk le. Alkalmazzunk darázsriasztó zsákot, amely egy természetes és irtószermentes megoldás.</p>
            </div>
            <div class="modal-section">
                <h4>A darazsak kártétele</h4>
                <p>Szúrásaik fájdalmasak és az érzékeny személyek számára nagyon veszélyesek. A darázs szúrása allergiás reakciót válthat ki. A méhekkel ellentétben a darazsak többször is képesek szúrni. Ha egy darázs szúrását követően rosszullét, szédülés lép fel, azonnal orvoshoz kell fordulni. Mikrobiológiailag az egyik legszennyezettebb élelmiszer-látógatók egyike.</p>
            </div>
        `
    },
    'szúnyog': {
        title: 'Szúnyoggyérítés és Irtás',
        image: 'images/mosquito.jpg',
        content: `
            <div class="modal-section">
                <h4>Földi kémiai szúnyogirtás</h4>
                <p>Kedvező időjárási viszonyok mellett egyes időszakokban a szúnyogok túlszaporodása elviselhetetlenné teszi a szabadban töltött időt. A szúnyogcsípésekért a nőstény szúnyogok a felelősek, szaporodásukhoz szükséges a melegvérű állatok vagy az ember vére. Szürkülettől a késő esti időszak között a legaktívabbak, ekkor érdemes a földi szúnyogirtást elvégezni. Nagyteljesítményű melegködképző generátorral végezzük, kizárólag erre a célra és célszervezetre engedélyezett készítménnyel.</p>
            </div>
            <div class="modal-section">
                <h4>Biológiai szúnyoglárva irtás</h4>
                <p>Mi is az a biológiai szúnyoglárvairtás? A lárvák tenyészőhelyeinek kezelése, olyan készítménnyel, amely biológiai úton előállított hatóanyagot tartalmaz, nem károsítja a környezetet és csak a szúnyoglárvákra fejti ki hatását. Hatóanyaga a bacillus thuringiensis subsp. israeliensis. A granulátum segítségével a növényzettel sűrűn benőtt területek kezelése is hatékony lesz.</p>
            </div>
            <div class="modal-section">
                <h4>Mit tehetünk a házunk körül?</h4>
                <p>Szüntessünk meg minden olyan vízgyülemet a ház körül, amely helyet biztosít a szúnyogok elszaporodásának: Esővízgyűjtő edényt fedjük le hálóval. Állatainknak kirakott vizet gyakorta cseréljük. Virágtartókban, vödrökben a megmaradó vizet öntsük ki. Kerti tavunkba telepítsünk halakat. Házunk előtti vízelveztő árkot tartsuk tisztán.</p>
            </div>
            <div class="modal-section">
                <h4>Szúnyoggyérítés a nyugodt nyári estékért</h4>
                <p>Cégünk a szúnyoggyérítésben élen jár. Olyan megoldásokat alkalmazunk a munkánk során, amik hatékonyak, így meg lehet szabadulni a kellemetlen rovaroktól. Szolgáltatásaink kedvező áron érhetőek el, bízza ránk a szúnyogirtást!</p>
            </div>
        `
    },
    'legyek': {
        title: 'Légyirtás',
        image: 'images/fly.jpg',
        content: `
            <div class="modal-section">
                <h4>Szakszerű légyirtás</h4>
                <p><strong>Fajok:</strong> házi légy, döglégy, zengő légy</p>
                <p>A legyek jelenléte minden környezetben zavaró és egészségügyi kockázatot is jelenthet. Szakszerű eljárásokkal (permetezés, csalétkek, ULV) hatékonyan gyéríthető az állományuk mind kültéren, mind beltéren.</p>
            </div>
        `
    },
    'muslinca': {
        title: 'Muslinca irtás',
        image: 'images/muslinca.jpg',
        content: `
            <div class="modal-section">
                <h4>Gyümölcslégy (Muslinca) elleni védekezés</h4>
                <p>A muslincák gyors szaporodása miatt hamar ellephetik a konyhákat és élelmiszerraktárakat. A megelőzés alapja a gyümölcsök és zöldségek lefedése, valamint a hulladékok gyors ürítése. Szakembereink célzott irtószeres kezeléssel szüntetik meg a fertőzést.</p>
            </div>
        `
    },
    'hangyák': {
        title: 'Hangyairtás',
        image: 'images/ant.jpg',
        content: `
            <div class="modal-section">
                <h4>Szakszerű hangyairtás</h4>
                <p><strong>Fajok:</strong> Fáraóhangya, Házi hangya (Kerti hangya)</p>
                <p><strong>Fáraóhangya:</strong> Hangyairtáskor alkalmazható eljárások: speciális összetételű mérgezett csalétek / gél alkalmazása. Fáraóhangya megelőzése gyakorlatilag lehetetlen.</p>
                <p><strong>Kerti hangya:</strong> Hangyairtáskor alkalmazható eljárások: permetezés, porozás, gél alkalmazása, felületkezelő aeroszol, rovarirtó permet, mérgezett csalétek. Házi hangya megelőzése gyakorlatilag lehetetlen, mivel a boly rendkívül nehezen kutatható fel. Megelőzésre gél alkalmazása, felületkezelő aeroszol ajánlott.</p>
            </div>
        `
    },
    'bolhák': {
        title: 'Bolhairtás',
        image: 'images/flea.jpg',
        content: `
            <div class="modal-section">
                <h4>Szakszerű bolhairtás</h4>
                <p><strong>Fajok:</strong> macskabolha, emberbolha</p>
                <p>A bolhairtás során az ingatlan padlófelületét és a háziállatok pihenőhelyeit kezeljük speciális rovarirtó permettel. A bolhák kártétele a viszkető csípések mellett fertőzések terjesztése is lehet. Forduljon szakemberhez a teljes mentesítésért.</p>
            </div>
        `
    },
    'pók': {
        title: 'Pókirtás',
        image: 'images/spider.jpg',
        content: `
            <div class="modal-section">
                <h4>Hogyan végezzük a pókirtást?</h4>
                <p>A pókirtást legfőképp az ingatlan külső falain végezzük a pókok életkörülményeinek legjobban megfelelő felületeken. Elsődleges módszerünk a permetezés, mellyel biztosíthatjuk a megfelelő irtószer célzott kijuttatását, ezzel garantálva a pókirtás hosszútávú hatását.</p>
                <p>Az ingatlanon belüli pókirtást is permetezéssel végezzük, mert így tudjuk a leginkább terhelt negatív sarkokat és esetleges réseket kezelni.</p>
            </div>
            <div class="modal-section">
                <h4>Mik a teendők?</h4>
                <p>Mielőtt megkezdjük a pókirtást a permetezés miatt nagy segítség, ha már a kiérkezésünk előtt letakarják a bútorokat, az élelmiszert elrakják. A szolgáltatás után a hosszantartó hatás érdekében mellőzzük a kezelt felületek lemosását. A kijuttatott irtószerek így hetekig megőrzik tartósságukat.</p>
            </div>
            <div class="modal-section">
                <h4>A pókok biológiája</h4>
                <p>Hazánkban általában az 1-20 mm nagyságú fajok fordulnak elő. Jellegzetes tulajdonságuk, hogy hálókat készítenek (kerekháló, hurokháló, tölcsérháló, vitorlaháló). Kizárólag ragadozó életmódot folytatnak. Akár hónapokon keresztül is tűrik az éhezést. Védekezésre a rovarirtó permet és az aeroszol palack alkalmas. Megelőzésként alapos takarítást és porszívózást javasolunk.</p>
            </div>
        `
    }
};

function openPestModal(id) {
    const data = pestData[id];
    if (!data) return;

    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalImg').src = data.image;
    document.getElementById('modalBody').innerHTML = data.content;
    
    document.getElementById('pestModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closePestModal() {
    document.getElementById('pestModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    const modal = document.getElementById('pestModal');
    if (event.target == modal) {
        closePestModal();
    }
};

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePestModal();
});
