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
const cities = L.layerGroup([
  L.marker([-23.5505, -46.6333]).bindPopup('São Paulo'),
  L.marker([-22.9068, -43.1729]).bindPopup('Rio de Janeiro'),
  L.marker([-15.7942, -47.8822]).bindPopup('Brasília')
]);

// Grupo de marcadores: Parques Nacionais
const parks = L.layerGroup([
  L.marker([-12.9747, -38.4767]).bindPopup('Chapada Diamantina'),
  L.marker([-14.9728, -52.3358]).bindPopup('Chapada dos Guimarães'),
  L.marker([-3.4653, -62.2159]).bindPopup('Jaú')
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
  "Hospitais": cities,
  "Parques": parks
};

// Adiciona o controle de layers ao mapa
L.control.layers(baseLayers, overlays).addTo(map);

// Exibe as camadas "Cidades" por padrão
cities.addTo(map);
