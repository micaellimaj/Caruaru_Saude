// Inicializa o mapa
const map = L.map('mapa').setView([-8.281533197772488, -35.971278763311766], 15);

// Adiciona um tile layer (mapa base)

const googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});


const googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});


const googleSatelites = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});


const openstret = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


// Criação de um ícone personalizado
const vacina = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/4840/4840600.png', // Altere para o caminho do seu ícone
    iconSize: [38, 38], // Tamanho do ícone
    iconAnchor: [22, 38], // Ponto de ancoragem do ícone
    popupAnchor: [-3, -76] // Ponto onde a pop-up deve aparecer
});

const hospital = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/5385/5385627.png', // Altere para o caminho do seu ícone
    iconSize: [38, 38], // Tamanho do ícone
    iconAnchor: [22, 38], // Ponto de ancoragem do ícone
    popupAnchor: [-3, -76] // Ponto onde a pop-up deve aparecer
});

const otica = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/1296/1296563.png', // Altere para o caminho do seu ícone
    iconSize: [38, 38], // Tamanho do ícone
    iconAnchor: [22, 38], // Ponto de ancoragem do ícone
    popupAnchor: [-3, -76] // Ponto onde a pop-up deve aparecer
});

const farmacia = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/17573/17573260.png', // Altere para o caminho do seu ícone
    iconSize: [38, 38], // Tamanho do ícone
    iconAnchor: [22, 38], // Ponto de ancoragem do ícone
    popupAnchor: [-3, -76] // Ponto onde a pop-up deve aparecer
});

const mathospital = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/4428/4428415.png', // Altere para o caminho do seu ícone
    iconSize: [38, 38], // Tamanho do ícone
    iconAnchor: [22, 38], // Ponto de ancoragem do ícone
    popupAnchor: [-3, -76] // Ponto onde a pop-up deve aparecer
});

const clinica = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/10887/10887257.png', // Altere para o caminho do seu ícone
    iconSize: [38, 38], // Tamanho do ícone
    iconAnchor: [22, 38], // Ponto de ancoragem do ícone
    popupAnchor: [-3, -76] // Ponto onde a pop-up deve aparecer
});

const diagnostico = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/387/387617.png', // Altere para o caminho do seu ícone
    iconSize: [38, 38], // Tamanho do ícone
    iconAnchor: [22, 38], // Ponto de ancoragem do ícone
    popupAnchor: [-3, -76] // Ponto onde a pop-up deve aparecer
});

const laboratorio = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/5064/5064642.png', // Altere para o caminho do seu ícone
    iconSize: [38, 38], // Tamanho do ícone
    iconAnchor: [22, 38], // Ponto de ancoragem do ícone
    popupAnchor: [-3, -76] // Ponto onde a pop-up deve aparecer
});

const oftalmologista = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/3439/3439936.png', // Altere para o caminho do seu ícone
    iconSize: [38, 38], // Tamanho do ícone
    iconAnchor: [22, 38], // Ponto de ancoragem do ícone
    popupAnchor: [-3, -76] // Ponto onde a pop-up deve aparecer
});

const pediatria = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/8123/8123655.png', // Altere para o caminho do seu ícone
    iconSize: [38, 38], // Tamanho do ícone
    iconAnchor: [22, 38], // Ponto de ancoragem do ícone
    popupAnchor: [-3, -76] // Ponto onde a pop-up deve aparecer
});

const ortopedia = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/3843/3843252.png', // Altere para o caminho do seu ícone
    iconSize: [38, 38], // Tamanho do ícone
    iconAnchor: [22, 38], // Ponto de ancoragem do ícone
    popupAnchor: [-3, -76] // Ponto onde a pop-up deve aparecer
});

const cardiologia = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/6833/6833327.png', // Altere para o caminho do seu ícone
    iconSize: [38, 38], // Tamanho do ícone
    iconAnchor: [22, 38], // Ponto de ancoragem do ícone
    popupAnchor: [-3, -76] // Ponto onde a pop-up deve aparecer
});

const mental = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/3998/3998035.png', // Altere para o caminho do seu ícone
    iconSize: [38, 38], // Tamanho do ícone
    iconAnchor: [22, 38], // Ponto de ancoragem do ícone
    popupAnchor: [-3, -76] // Ponto onde a pop-up deve aparecer
});

const animal = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/403/403890.png', // Altere para o caminho do seu ícone
    iconSize: [38, 38], // Tamanho do ícone
    iconAnchor: [22, 38], // Ponto de ancoragem do ícone
    popupAnchor: [-3, -76] // Ponto onde a pop-up deve aparecer
});



// Grupo de marcadores: Cidades importantes
const hospitais = L.layerGroup([
    L.marker([-8.260470465898486, -35.96651349618412], {icon: hospital})
    .bindPopup(`
      <b>Hospital Unimed</b><br><br>
      <img src="https://medicinasa.com.br/wp-content/uploads/2024/09/Hospital-Unimed-Caruaru-2.jpg" alt="Logo Hospital Unimed" width="300"><br><br>
      <br>R. Artur Antônio da Silva, 549 - Universitário<br>
      <br>Telefone: <a href="tel:+558121035000">(81) 2103-5000</a><br>
      <br><a href="https://wa.me/558121035000">WhatsApp</a><br>
      <br>E-mail: <a href="mailto:ouvidoria@unimedcaruaru.com.br">ouvidoria@unimedcaruaru.com.br</a><br>
      <br>Instagram: <a href="https://www.instagram.com/unimedcaruaru" target="_blank">@unimedcaruaru</a><br>
      <br><a href="https://maps.app.goo.gl/N185PTAWjKD3D8U16" target="_blank">Como chegar?</a>
    `),
    L.marker([-8.274331856057763, -35.97419058135635], {icon: hospital})
    .bindPopup(`
      <b>Instituto Pernambuco</b><br><br>
      <img src="https://scontent.fcau15-1.fna.fbcdn.net/v/t39.30808-6/285364509_108078008590902_8126718525964792137_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=nm-_Nv_QTXMQ7kNvgGE3oR2&_nc_ht=scontent.fcau15-1.fna&_nc_gid=At4BtZ4KTakWZ3GLWxfy2yf&oh=00_AYBIsEOREZXcWntfsNxXWWrROlgDSgFkGl8njFw1UEsX9Q&oe=6720C60A" alt="Instituto Pernambuco" width="300"><br><br>
      <br>Av. Agamenon Magalhães, 961 - Maurício de Nassau<br>
      <br>Telefone: <a href="tel:+558137214002">(81) 3721-4002</a><br>
      <br><a href="https://wa.me/5581988736052">WhatsApp</a><br>
      <br>E-mail: <a href="mailto:contato@ipcaruaru.com.br">contato@ipcaruaru.com.br</a><br>
      <br>Instagram: <a href="https://www.instagram.com/ipcaruaru" target="_blank">@ipcaruaru</a><br>
      <br><a href="https://maps.app.goo.gl/YypmLK7m73WepS6JA" target="_blank">Como chegar?</a>
    `),
    L.marker([-8.279974207391726, -35.97120744253445], {icon: hospital})
    .bindPopup(`
      <b>Hospital São Sebastião</b><br><br>
      <img src="https://i0.wp.com/pernambuconoticias.com.br/wp-content/uploads/2019/09/Hospital-S%C3%A3o-Sebasti%C3%A3o.png?fit=551%2C327&ssl=1" alt="HSS" width="300"><br><br>
      <br>Avenida Agamenom Magalhães, s/n - Maurício de Nassau<br>
      <br>Telefone: <a href="tel:+558135124150">(81) 3512-4150</a><br>
      <br><a href="https://wa.me/5581987094367">WhatsApp</a><br>
      <br>E-mail: <a href="mailto:adm.apoio@hss.org.br">adm.apoio@hss.org.br</a><br>
      <br>Instagram: <a href="https://www.instagram.com/hsscabo" target="_blank">@hsscabo</a><br>
      <br><a href="https://maps.app.goo.gl/1WmJtAZ8sp8C3j15A" target="_blank">Como chegar?</a>
    `),
    L.marker([-8.270354222774237, -35.97643292036329], {icon: hospital})
    .bindPopup(`
      <b>Hospital Santa Efigênia</b><br><br>
      <img src="https://blogcenario.com.br/wp-content/uploads/2023/03/DEC5D752-9409-484B-874D-17F4D86EE76D.jpeg" alt="HSE" width="300"><br><br>
      <br>R. Gonçalo Coelho, 40 - Maurício de Nassau<br>
      <br>Telefone: <a href="tel:+558121038500">(81) 2103-8500</a><br>
      <br>E-mail: <a href="mailto:sac@hospitalsantaefigenia.com.br">sac@hospitalsantaefigenia.com.br</a><br>
      <br>Instagram: <a href="https://www.instagram.com/hospitalsantaefigenia" target="_blank">@hospitalsantaefigenia</a><br>
      <br><a href="https://maps.app.goo.gl/R8ABJXUaBoa28DAf9" target="_blank">Como chegar?</a>
    `),
    L.marker([-8.275033886548892, -35.97255022941711], {icon: hospital})
    .bindPopup(`
      <b>Hospital Memorial de Pernambuco</b><br><br>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT4rsImZTF-HmTOtL3bYkNKXyyPqdbH7p1yA&s" alt="HMP" width="300"><br><br>
      <br>R. João Cursino, s/n - Maurício de Nassau<br>
      <br>Telefone: <a href="tel:+558131365668">(81) 3136-5668</a><br>
      <br><a href="https://wa.me/558131365668">WhatsApp</a><br>
      <br>Instagram: <a href="https://www.instagram.com/hmp_hospitalmemorialdepe" target="_blank">@hmp_hospitalmemorialdepe</a><br>
      <br><a href="https://maps.app.goo.gl/N185PTAWjKD3D8U16" target="_blank">Como chegar?</a>
    `),
  
]);

// Grupo de marcadores: Parques Nacionais
const farmacias = L.layerGroup([
    L.marker([-8.267358125656317, -35.964399774632994], {icon: farmacia})
    .bindPopup(`
      <b>Pague Menos</b><br><br>
      <img src="https://lh5.googleusercontent.com/p/AF1QipOiGGRRlm7mOT0nRGVYnVlfShGpPGjcDFHink1R=w426-h240-k-no" alt="PagueMenos" width="300"><br><br>
      <br>Av. Portugal, 675<br>
      <br>Telefone: <a href="tel:+558140028282">(81) 4002-8282</a><br>
      <br><a href="https://wa.me/558140028282">WhatsApp</a><br>
      <br>E-mail: <a href="mailto:sac@pmenos.com.br">sac@pmenos.com.br</a><br>
      <br>Instagram: <a href="https://www.instagram.com/paguemenos" target="_blank">@paguemenos</a><br>
      <br><a href="https://maps.app.goo.gl/6Hzw7MMCt3brt9sT8" target="_blank">Como chegar?</a>
    `),
    L.marker([-8.278669965673917, -35.97188095818386], {icon: farmacia})
    .bindPopup(`
      <b>Farmácia Permanente</b><br><br>
      <img src="https://lh5.googleusercontent.com/p/AF1QipNeO9c4Ayv4jowcxcg9JsPopkUmvV2AVo-sJvme=w426-h240-k-no" alt="Permanente" width="300"><br><br>
      <br>Av. Agamenon Magalhães, 386 - Maurício de Nassau<br>
      <br>Telefone: <a href="tel:+5581997950046">(81) 99795-0046</a><br>
      <br><a href="https://wa.me/5581997950046">WhatsApp</a><br>
      <br>Instagram: <a href="https://www.instagram.com/farmaciapermanente" target="_blank">@farmaciapermanente</a><br>
      <br><a href="https://maps.app.goo.gl/Kp4ewh456Ruyis9F9" target="_blank">Como chegar?</a>
    `),
    L.marker([-8.273951416018964, -35.97389054626684], {icon: farmacia})
    .bindPopup(`
      <b>Drogasil</b><br><br>
      <img src="https://lh5.googleusercontent.com/p/AF1QipNcDfNVl3NLw3IbWA38lcImajXK6puHwBv1d4OI=w426-h240-k-no" alt="Drogasil" width="300"><br><br>
      <br>Av. Agamenon Magalhães, 982 - Maurício de Nassau<br>
      <br>Telefone: <a href="tel:+558137259766">(81) 3725-9766</a><br>
      <br>Instagram: <a href="https://www.instagram.com/drogasiloficial" target="_blank">@drogasiloficial</a><br>
      <br><a href="https://maps.app.goo.gl/4Gyzdv2NsLJffnEE6" target="_blank">Como chegar?</a>
    `),
    L.marker([-8.275719360176902, -35.973077443759166], {icon: farmacia})
    .bindPopup(`
      <b>Lirium Farma</b><br><br>
      <img src="https://lh3.googleusercontent.com/p/AF1QipObsnWtcU42dj3OrAyZSROK9AJ5ZVwATXmzBVEl=s680-w680-h510" alt="liriumfarma" width="300"><br><br>
      <br>Av. Agamenon Magalhães, 718 - Maurício de Nassau<br>
      <br>Telefone: <a href="tel:+5581994085000">(81) 99408-5000</a><br>
      <br><a href="https://wa.me/5581994085000">WhatsApp</a><br>
      <br>Instagram: <a href="https://www.instagram.com/liriumfarma" target="_blank">@liriumfarma</a><br>
      <br><a href="https://maps.app.goo.gl/BFm7wDR6geFCy9gB6" target="_blank">Como chegar?</a>
    `),
    L.marker([-8.278716126597507, -35.97185176508867], {icon: farmacia})
    .bindPopup(`
      <b>Farmacias Diariamente</b><br><br>
      <img src="https://lh3.googleusercontent.com/p/AF1QipP1_COM5f7czvB06AMwTeWtGobksZvbqBxtGa4u=w1024-k" alt="diariamente" width="300"><br><br>
      <br>Av. Agamenon Magalhães, 390 - Maurício de Nassau<br>
      <br>Telefone: <a href="tel:+558137224827">(81) 3722-4827</a><br>
      <br>E-mail: <a href="mailto:sacservierdobrasil@servier.com">sacservierdobrasil@servier.com</a><br>
      <br>Instagram: <a href="https://www.instagram.com/farmaciasdiariamente" target="_blank">@farmaciasdiariamente</a><br>
      <br><a href="https://maps.app.goo.gl/6n7ABwZpwkLS7ojL9" target="_blank">Como chegar?</a>
    `),    
]);

const oticas = L.layerGroup([
  L.marker([-8.285669303481574, -35.97016903128614], {icon: otica})
  .bindPopup(`
    <b>Óticas Arco Verde Caruaru (CENTRO)</b><br><br>
    <img src="https://lh5.googleusercontent.com/proxy/pus_8Ye7cFDNKHufd3k6JOC03vASqarfVrFW_2u-wzrcX2t0cTrw8taXQG2v_6A-x2SHFX29rufEWZn9W2Ur7s1goUY" alt="avcc" width="300"><br><br>
    <br> Vig. Freire, 46 - Nossa Sra. das Dores<br>
    <br>Telefone: <a href="tel:+5581998443232">(81) 99844-3232</a><br>
    <br><a href="https://wa.me/5581998443232">WhatsApp</a><br>
    <br>E-mail: <a href="mailto:sac@oticasarcoverde.com.br">sac@oticasarcoverde.com.br</a><br>
    <br>Instagram: <a href="https://www.instagram.com/oticas_arcoverde_caruaru" target="_blank">@oticas_arcoverde_caruaru</a><br>
    <br><a href="https://maps.app.goo.gl/gyq2ij6YfDzHTRmH8" target="_blank">Como chegar?</a>
  `),
  L.marker([-8.273196372423294, -35.97465429290981], {icon: otica})
  .bindPopup(`
    <b>Ótica Muniz Premium</b><br><br>
    <img src="https://lh3.googleusercontent.com/p/AF1QipPIwA1Faf1eZJLpg3wqamEC8P0L_tzVEe4uYKc6=s680-w680-h510" alt="omp" width="300"><br><br>
    <br> Av. Agamenon Magalhães, 1063 - Maurício de Nassau<br>
    <br>Telefone: <a href="tel:+5581985866202">(81) 98586-6202</a><br>
    <br><a href="https://wa.me/5581985866202">WhatsApp</a><br>
    <br>Instagram: <a href="https://www.instagram.com/oticamunizpremium" target="_blank">@oticamunizpremium</a><br>
    <br><a href="https://maps.app.goo.gl/Q9HcbeC5hDBKib1c8" target="_blank">Como chegar?</a>
  `),
  L.marker([-8.273948292623034, -35.97464695972303], {icon: otica})
  .bindPopup(`
    <b>Óticas Arco Verde Empresarial</b><br><br>
    <img src="https://lh5.googleusercontent.com/proxy/pus_8Ye7cFDNKHufd3k6JOC03vASqarfVrFW_2u-wzrcX2t0cTrw8taXQG2v_6A-x2SHFX29rufEWZn9W2Ur7s1goUY" alt="avcc" width="300"><br><br>
    <br>Av. Agamenon Magalhães, 1019 - Maurício de Nassau<br>
    <br>Telefone: <a href="tel:+558132366437">(81) 3236-6437</a><br>
    <br>Instagram: <a href="https://www.instagram.com/oticas_arcoverde_caruaru" target="_blank">@oticas_arcoverde_caruaru</a><br>
    <br><a href="https://maps.app.goo.gl/nPbkffcEBZrDyvPR9" target="_blank">Como chegar?</a>
  `),
  L.marker([-8.280696955503203, -35.97115201421418], {icon: otica})
  .bindPopup(`
    <b>Óticas Diniz</b><br><br>
    <img src="https://lh3.googleusercontent.com/p/AF1QipPyhHAFS92eaQiaRwlYw4wm_lkBjhnRPudtGwPP=s680-w680-h510" alt="odz" width="300"><br><br>
    <br>Av. Agamenon Magalhães, 217 - Maurício de Nassau<br>
    <br>Telefone: <a href="tel:+5581982137084">(81) 98213-7084</a><br>
    <br><a href="https://wa.me/5581982137084">WhatsApp</a><br>
    <br>E-mail: <a href="mailto:sacdiniz@oticasdiniz.com.br">sacdiniz@oticasdiniz.com.br</a><br>
    <br>Instagram: <a href="https://www.instagram.com/oticadinizpe" target="_blank">@oticadinizpe</a><br>
    <br><a href="https://maps.app.goo.gl/u9qtKjv4abDFNd7k6" target="_blank">Como chegar?</a>
  `),
  L.marker([-8.27410749724395, -35.97429342241345], {icon: otica})
  .bindPopup(`
    <b>Ótica Provisão</b><br><br>
    <img src="https://lh3.googleusercontent.com/p/AF1QipOAMK2640Eh-htBzLCEO2BunO-quhfYdGCwqrS1=s680-w680-h510" alt="op" width="300"><br><br>
    <br>Galeria Vandete - Av. Agamenon Magalhães, 975 - LOJA 02 - Maurício de Nassau<br>
    <br>Telefone: <a href="tel:+558137213567">(81) 3721-3567</a><br>
    <br><a href="https://maps.app.goo.gl/NAs2W91TFgLYZb138" target="_blank">Como chegar?</a>
  `),
]);

const matshospital = L.layerGroup([
  L.marker([-8.2728038240122, -35.974822764107266], {icon: mathospital})
  .bindPopup(`
    <b>Promec Material Médico e Hospitalar</b><br><br>
    <img src="https://lh3.googleusercontent.com/proxy/g6RSULwfKZU228S17ni4dEetjujR_dvUa5tcowUDiXJ7ZejWV0rfR7e8Q5QaflGEoRTU47KiJ5JlZst5-d898WxMpQSAOFjv0zx37ZNUeoLlE5wxP7nsWmQvmDWl6vqQuCIr6wT6Ui-I-WX0tmvzLG0aKWOT4hMxzL7XDA=s680-w680-h510" alt="promec" width="300"><br><br>
    <br>Av. Agamenon Magalhães, 1143 - Maurício de Nassau<br>
    <br>Telefone: <a href="tel:+5508002814944">0800 281 4944</a><br>
    <br><a href="https://wa.me/5581996053874">WhatsApp</a><br>
    <br>Instagram: <a href="https://www.instagram.com/promecltda1" target="_blank">@promecltda1</a><br>
    <br><a href="https://maps.app.goo.gl/tQHYDUPW8VLsiEVx9" target="_blank">Como chegar?</a>
  `),
  L.marker([-8.274303821972946, -35.97373130379127], {icon: mathospital})
  .bindPopup(`
    <b>Lojão das Clínicas</b><br><br>
    <img src="https://lh3.googleusercontent.com/p/AF1QipNucCUIdgwwoZ7MxVG-MrjkWfSW56UY70QMDjZN=s680-w680-h510" alt="ldc" width="300"><br><br>
    <br>Av. Agamenon Magalhães, 930 - Maurício de Nassau<br>
    <br>Telefone: <a href="tel:+558131364133">(81) 3136-4133 </a><br>
    <br>Instagram: <a href="https://www.instagram.com/redelojaodasclinicas" target="_blank">@redelojaodasclinicas</a><br>
    <br><a href="https://maps.app.goo.gl/AEytbB6F1onftiN77" target="_blank">Como chegar?</a>
  `),
  L.marker([-8.277369260494297, -35.972863009229], {icon: mathospital})
  .bindPopup(`
    <b>Jamed Saúde</b><br><br>
    <img src="https://lh3.googleusercontent.com/p/AF1QipMvycJwonVqjjGCRTV39ND2sRU1ty2LYfoRxK9f=s680-w680-h510" alt="jamed" width="300"><br><br>
    <br>Loja 01 - Av. Agamenon Magalhães, 547 - Maurício de Nassau<br>
    <br>Telefone: <a href="tel:+5581988893517">(81) 98889-3517</a><br>
    <br><a href="https://wa.me/5581988893517">WhatsApp</a><br>
    <br>Instagram: <a href="https://www.instagram.com/jamedsaude" target="_blank">@jamedsaude</a><br>
    <br><a href="https://maps.app.goo.gl/kFZci6sTop75n9ZZ8" target="_blank">Como chegar?</a>
  `),
  L.marker([-8.273411444540132, -35.97456574382303], {icon: mathospital})
  .bindPopup(`
    <b>Master Saúde</b><br><br>
    <img src="https://i0.wp.com/www.blogdoneylima.com.br/wp-content/uploads/2021/12/DSC03278.jpg?ssl=1" alt="ms" width="300"><br><br>
    <br>Av. Agamenon Magalhães, 1053 - Maurício de Nassau<br>
    <br>Telefone: <a href="tel:+558131371772">(81) 3137-1772</a><br>
   <br>Instagram: <a href="https://www.instagram.com/mastersaudepe" target="_blank">@mastersaudepe</a><br>
    <br><a href="https://maps.app.goo.gl/rHSYF7Fbvjo1LwYj7" target="_blank">Como chegar?</a>
  `),
  L.marker([-8.274275799723304, -35.973686084052424], {icon: mathospital})
  .bindPopup(`
    <b>Santos Médica</b><br><br>
    <img src="https://lh3.googleusercontent.com/p/AF1QipPTIq4Q5fpX1qil7cC_ictNq0QewZlk_q_9OwyR=s680-w680-h510" alt="sms" width="300"><br><br>
    <br>Av. Agamenon Magalhães, 930 - Loja 02 - Maurício de Nassau<br>
    <br>Telefone: <a href="tel:+5581996270415">(81) 99627-0415</a><br>
    <br>Instagram: <a href="https://www.instagram.com/santosmedica" target="_blank">@santosmedica</a><br>
    <br><a href="https://maps.app.goo.gl/4bvY2hy9Yspv7VuX6" target="_blank">Como chegar?</a>
  `),
]);

// Base layers (camadas base)
const baseLayers = {
  "Mapa de ruas": openstret,
  "Google Maps": googleStreets,
  "Satélite": googleSatelites,
  "Satélite + Ruas": googleHybrid
};

// Overlays (camadas sobrepostas)
const overlays = {
  "Hospitais": hospitais,
  "Farmácias": farmacias,
  "Óticas": oticas,
  "Material Hospitalar": matshospital,
};

// Adiciona o controle de layers ao mapa
L.control.layers(baseLayers, overlays).addTo(map);

// Exibe as camadas "Cidades" por padrão
cities.addTo(map);
