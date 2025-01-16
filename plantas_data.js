// Datos de las plantas
const plantas = {
    cascajal: {
      name: "PTAP Cascajal",
      vereda: "Cascajal",
      corregimiento: "Hormiguero",
      caudal: "12.61",
      usuarios: "427",
      image: "assets/cascajal.png"
    },
    campoalegre: {
      name: "PTAP Campoalegre",
      vereda: "Campoalegre",
      corregimiento: "Montebello",
      caudal: "8.1",
      usuarios: "996",
      image: "assets/campoalegre.png"
    },
    soledad: {
      name: "PTAP Soledad",
      vereda: "Soledad",
      corregimiento: "Buitrera",
      caudal: "12.0",
      usuarios: "1811",
      image: "assets/soledad.png"
    },
    carbonero: {
      name: "PTAP Carbonero",
      vereda: "Carbonero",
      corregimiento: "Buitrera",
      caudal: "12.0",
      usuarios: "0",
      image: "assets/carbonero.png"
    },
    voragine: {
      name: "PTAP Voragine",
      vereda: "Voragine",
      corregimiento: "Pance",
      caudal: "3.0",
      usuarios: "90",
      image: "assets/voragine.png"
    },
    los_mangos: {
      name: "PTAP Los Mangos",
      vereda: "Alto Los Mangos",
      corregimiento: "Buitrera",
      caudal: "3.5",
      usuarios: "533",
      image: "assets/los_mangos.png"
    },
    sirena: {
      name: "PTAP La Sirena",
      vereda: "La Sirena",
      corregimiento: "Buitrera",
      caudal: "18.0",
      usuarios: "1120",
      image: "assets/sirena.png"
    },
    km18: {
      name: "PTAP Km 18",
      vereda: "Kilometro 18",
      corregimiento: "La Elvira",
      caudal: "1.0",
      usuarios: "62",
      image: "assets/km18.png"
    },
    montebello: {
      name: "PTAP Montebello",
      vereda: "Montebello",
      corregimiento: "Montebello",
      caudal: "34.0",
      usuarios: "3020",
      image: "assets/montebello.png"
    },
    pichinde: {
      name: "PTAP Pichinde",
      vereda: "Pichinde",
      corregimiento: "Pichinde",
      caudal: "1.2",
      usuarios: "293",
      image: "assets/pichinde.png"
    }
  };
  
  // Lógica para actualizar la información de la planta
  document.getElementById('plantDropdown').addEventListener('change', function() {
    const selectedPlant = this.value;
    const plantInfo = plantas[selectedPlant];
  
    if (plantInfo) {
      document.getElementById('plantImage').src = plantInfo.image;
      document.getElementById('plantName').textContent = plantInfo.name;
      document.getElementById('plantVereda').textContent = plantInfo.vereda;
      document.getElementById('plantCorregimiento').textContent = plantInfo.corregimiento;
      document.getElementById('plantCaudal').textContent = plantInfo.caudal;
      document.getElementById('plantUsuarios').textContent = plantInfo.usuarios;
      document.getElementById('plantInfo').style.display = 'block';
    }
  });
  