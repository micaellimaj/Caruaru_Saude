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



// Grupo de marcadores
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

const clinicas = L.layerGroup([
  L.marker([-8.275462558224026, -35.972264754674704], {icon: clinica})
  .bindPopup(`
    <b>Neotorrino</b><br><br>
    <img src="https://lh3.googleusercontent.com/p/AF1QipPaPiEntfW550cphI0bLqbUmStAhiefAGpwpgE-=s680-w680-h510" alt="neotorrino" width="300"><br><br>
    <br>R. João Cursino, 753 - Maurício de Nassau<br>
    <br>Especialidades: Otorrinolaringologistas<br>
    <br>Telefone: <a href="tel:+5581996816651">(81) 99681-6651</a><br>
    <br><a href="https://wa.me/5581996816651">WhatsApp</a><br>
    <br>Instagram: <a href="https://www.instagram.com/neotorrino" target="_blank">@neotorrino</a><br>
    <br><a href="https://maps.app.goo.gl/4d9EGVyQEiio4DZt5" target="_blank">Como chegar?</a>
  `),
  L.marker([-8.273881221479348, -35.974557840780285], {icon: clinica})
  .bindPopup(`
    <b>Clínica Dermatológica | Catarina Carvalho Soprano</b><br><br>
    <img src="https://lh3.googleusercontent.com/p/AF1QipP0yT_oMGlNh7ZjDapK5eMrajQxzjSWduIlE-0k=s680-w680-h510" alt="cdccs" width="300"><br><br>
    <br>Av Agamenon Magalhães 1019 Agamenon Empresarial, Cobertura - Maurício de Nassau<br>
    <br>Especialidades: Clínica Dermatológica<br>
    <br>Telefone: <a href="tel:+55819828896641">(81) 982889-6641</a><br>
    <br><a href="https://wa.me/5587988594326">WhatsApp</a><br>
    <br>Instagram: <a href="https://www.instagram.com/catarinacarvalhodermato" target="_blank">@catarinacarvalhodermato</a><br>
    <br><a href="https://maps.app.goo.gl/uRrPEA7QXoBoUFnx9" target="_blank">Como chegar?</a>
  `),
  L.marker([-8.280318106803005, -35.971620942735505], {icon: clinica})
  .bindPopup(`
    <b>AmorSaúde Caruaru</b><br><br>
    <img src="https://lh3.googleusercontent.com/p/AF1QipPMQMYMGj7R8xKIJUbOYHHGUgnNEL-iXnvwxgxd=s680-w680-h510" alt="asc" width="300"><br><br>
    <br>Av. Agamenon Magalhães, 225 - Maurício de Nassau<br>
    <br>Especialidades: Medicina, odontologia e exames<br>
    <br>Telefone: <a href="tel:+558137210202">(81) 3721-0202</a><br>
    <br><a href="https://wa.me/558137210202">WhatsApp</a><br>
    <br>Instagram: <a href="https://www.instagram.com/cdt.caruaru" target="_blank">@cdt.caruaru</a><br>
    <br><a href="https://maps.app.goo.gl/TTY3SJ1un7aezko17" target="_blank">Como chegar?</a>
  `),
  L.marker([-8.273717956669575, -35.974396708248285], {icon: clinica})
  .bindPopup(`
    <b>Otorrinos Agreste</b><br><br>
    <img src="https://images.adsttc.com/media/images/5e5e/fd52/6ee6/7e7b/b200/0149/newsletter/featured_BEZE-001-IM-FOTOS_JACKSON_CARVALHO-R00_(15).jpg?1583283521" alt="ota" width="300"><br><br>
    <br>Av. Agamenon Magalhães, 1019 - Agamenon Empresarial - Sala 509 - Maurício de Nassau<br>
    <br>Especialidades: Clínica de otorrinolaringologia<br>
    <br>Telefone: <a href="tel:+5581992009082">(81) 99200-9082</a><br>
    <br><a href="https://wa.me/5581999960001">WhatsApp</a><br>
    <br>E-mail: <a href="mailto:marcacao@otorrinosagreste.com.br">marcacao@otorrinosagreste.com.br</a><br>
    <br>Instagram: <a href="https://www.instagram.com/otorrinosagreste" target="_blank">@otorrinosagreste</a><br>
    <br><a href="https://maps.app.goo.gl/WYNGvEWMEDsssnjH6" target="_blank">Como chegar?</a>
  `),
  L.marker([-8.279102897957218, -35.968242307403884], {icon: clinica})
  .bindPopup(`
    <b>Estimular Multidisciplinar</b><br><br>
    <img src="https://lh3.googleusercontent.com/p/AF1QipNlDS5T6AazXwgaaqS5eNnGGJQknJXyeJg3QmCJ=s680-w680-h510" alt="cem" width="300"><br><br>
    <br>R. Joaquim Tabosa, 25, Maurício de Nassau<br>
    <br>Especialidades: Fonoaudiologia, psicologia, psicopedagogia, fisioterapia, nutrição, acupuntura auricular, neuropsicopedagogia, neurologia infantil, ventosaterapia<br>
    <br>Telefone: <a href="tel:+558137215529">(81) 3721-5529</a><br>
    <br><a href="https://wa.me/5581996324363">WhatsApp</a><br>
    <br>Instagram: <a href="https://www.instagram.com/estimular_multi" target="_blank">@estimular_multi</a><br>
    <br><a href="https://maps.app.goo.gl/HW2J3aFk8AsDHdft6" target="_blank">Como chegar?</a>
  `),
]);

const diagnosticosporimagem = L.layerGroup([
  L.marker([-8.269747021344728, -35.97342082165303], {icon: diagnostico})
  .bindPopup(`
    <b>Ultra Radiologia Avançada</b><br><br>
    <img src="https://lh3.googleusercontent.com/p/AF1QipNJ0__7piSduO8P6FAt8SbMdx-gp4lclwIOoK5R=s680-w680-h510" alt="urauaura" width="300"><br><br>
    <br>Av. Dr. Pedro Jordão, 1252 – anexo A – Maurício de Nassau<br>
    <br>Telefone: <a href="tel:+5581981309191">(81) 98130-9191</a><br>
    <br><a href="https://wa.me/5581981309191">WhatsApp</a><br>
    <br>E-mail: <a href="mailto:contato@ultraradiologia.com">contato@ultraradiologia.com</a><br>
    <br>Instagram: <a href="https://www.instagram.com/ultracaruaru" target="_blank">@ultracaruaru</a><br>
    <br><a href="https://maps.app.goo.gl/k5NyPsvndqr6xbJ97" target="_blank">Como chegar?</a>
  `),
  L.marker([-8.274349234209295, -35.97413338867477], {icon: diagnostico})
  .bindPopup(`
    <b>Imagem Diagnóstico</b><br><br>
    <img src="https://lh3.googleusercontent.com/proxy/HRf5QT7xl4e9NmhrmXwkXJizKCx3xhlTH0afHFf5bvjEdyiIizwTCUehsCc3gRKp-sIitU5xH3txasU3f2sCQK82_1L_rio7zCwIXQ-PiNovw7vj6lBubmb5J-zE-TqNtBwT48AOMZzxQnz3iqyseXwUkdeNtp4S7LQJlw=s680-w680-h510" alt="imagemdiagnostico" width="300"><br><br>
    <br>Av. Agamenon Magalhães, 961 - Maurício de Nassau<br>
    <br>Telefone: <a href="tel:+558137214002">(81) 3721-4002</a><br>
    <br><a href="https://wa.me/5581988736052">WhatsApp</a><br>
    <br>E-mail: <a href="mailto:contato@ipcaruaru.com.br">contato@ipcaruaru.com.br</a><br>
    <br>Instagram: <a href="https://www.instagram.com/ipcaruaru" target="_blank">@ipcaruaru</a><br>
    <br><a href="https://maps.app.goo.gl/viE4zNTYDTTtuSxX6" target="_blank">Como chegar?</a>
  `),
  L.marker([-8.2720743853599, -35.97510965962973], {icon: diagnostico})
  .bindPopup(`
    <b>Imax Diagnóstico</b><br><br>
    <img src="https://lh3.googleusercontent.com/p/AF1QipPFk_hYrlS0Q1R03_rVCtDXSAZ3UsHBxjbvEFDN=s680-w680-h510" alt="imax" width="300"><br><br>
    <br>Av. Agamenon Magalhães, 1233 - Maurício de Nassau<br>
    <br>Telefone: <a href="tel:+558137256800">(81) 3725-6800</a><br>
    <br><a href="https://wa.me/5581999640097">WhatsApp</a><br>
    <br>E-mail: <a href="mailto:ouvidoria@imaxdiagnostico.com.br">ouvidoria@imaxdiagnostico.com.br</a><br>
    <br>Instagram: <a href="https://www.instagram.com/imaxdiagnostico" target="_blank">@imaxdiagnostico</a><br>
    <br><a href="https://maps.app.goo.gl/snLs2SYSQSCoXspR6" target="_blank">Como chegar?</a>
  `),
  L.marker([-8.274760858557391, -35.97358369710849], {icon: diagnostico})
  .bindPopup(`
    <b>Manoel Florêncio Diagnósticos</b><br><br>
    <img src="https://lh3.googleusercontent.com/p/AF1QipN4mAE3dPqOvpYQn6lt5FWP2we611Jq4tBN-yVO=s680-w680-h510" alt="mfd" width="300"><br><br>
    <br>Av. Agamenon Magalhães, 834 - Maurício de Nassau, Caruaru - PE<br>
    <br>Telefone: <a href="tel:+558137277000">(81) 3727-7000</a><br>
    <br>Instagram: <a href="https://www.instagram.com/mflorenciodiagnosticos" target="_blank">@mflorenciodiagnosticos</a><br>
    <br><a href="https://maps.app.goo.gl/UsjNKKshzjSBnby26" target="_blank">Como chegar?</a>
  `),
  L.marker([-8.271004892084758, -35.97651765296094], {icon: diagnostico})
  .bindPopup(`
    <b>DIA- Diagnóstico por Imagem Agreste</b><br><br>
    <img src="https://lh3.googleusercontent.com/p/AF1QipN4mAvltw6aTFGcEOhcB7ZdWuE5azo0kHK6Nr5f=s680-w680-h510" alt="dia" width="300"><br><br>
    <br>R. Equatorial, 13 - Maurício de Nassau<br>
    <br>Telefone: <a href="tel:+558137215928">(81) 3721-5928</a><br>
    <br><a href="https://wa.me/558137215928">WhatsApp</a><br>
    <br>Instagram: <a href="https://www.instagram.com/diagreste" target="_blank">@diagreste</a><br>
    <br><a href="https://maps.app.goo.gl/1yk4hVdmumgfp2yN6" target="_blank">Como chegar?</a>
  `),
]);  

// Base layers 
const baseLayers = {
  "Mapa de ruas": openstret,
  "Google Maps": googleStreets,
  "Satélite": googleSatelites,
  "Satélite + Ruas": googleHybrid
};

// Overlays 
const overlays = {
  "Hospitais": hospitais,
  "Farmácias": farmacias,
  "Óticas": oticas,
  "Material Hospitalar": matshospital,
  "Clínicas": clinicas,
  "Diagnósticos por Imagem": diagnosticosporimagem,
};


L.control.layers(baseLayers, overlays).addTo(map);


cities.addTo(map);
