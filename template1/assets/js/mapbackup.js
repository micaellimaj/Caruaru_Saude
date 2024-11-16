// Inicializa o mapa
const map = L.map('mapa').setView([-8.281533197772488, -35.971278763311766], 15);

const googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
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



const hospitaisg = L.layerGroup();
const farmaciasg = L.layerGroup();
const oticasg = L.layerGroup();
const matehospitalg = L.layerGroup();
const clinicasg = L.layerGroup();
const diagnosticosg = L.layerGroup();
const labsg = L.layerGroup();
const vacinasg = L.layerGroup();
const oftalsg = L.layerGroup();
const pediatriasg = L.layerGroup();
const ortopediasg = L.layerGroup();
const cardiologiasg = L.layerGroup();
const mentalsg = L.layerGroup();
const animalsg = L.layerGroup();

const groupedLayers = {
    "Todos": {
      "Hospitais": hospitaisg,
      "Farmácias": farmaciasg,
      "Óticas": oticasg,
      "Clínicas": clinicasg,
      "Diagnósticos por Imagem": diagnosticosg,
      "Laboratórios": labsg,
      "Vacinas": vacinasg,
      "Ofatalmologistas": oftalsg,
      "Pediatria": pediatriasg,
      "Ortopedia": ortopediasg,
      "Cardiologia": cardiologiasg,
      "Saúde Mental": mentalsg,
      "Saúde Animal": animalsg,
    },


    
};

L.control.groupedLayers(null, groupedLayers).addTo(map);

// Adiciona marcadores
L.marker([-8.260469386617405, -35.96651425564409], { icon: hospital })
  .addTo(hospitaisg)
  .bindPopup('Hospital UNIMED Caruaru');

  L.marker([-8.294392794741883, -35.951068179861124], { icon: vacina })
  .addTo(vacinasg)
  .bindPopup('Vacinas');

// Controlador de camadas agrupadas

const baseLayers = {
    "Google Street": googleStreets,
    "Leaflet": openstret
  };
  

  
  // Adiciona o controle de layers ao mapa
  L.control.layers(baseLayers, overlays).addTo(map);

// Adiciona o controle de camadas ao mapa


// Ajusta o mapa ao redimensionar a janela
window.addEventListener('resize', () => {
    map.invalidateSize();
});


  