const productos = [
    {id: 1,  nombre: "Combo Spinning Reel Albatros + Caña Starfish 2,10", descripcion: "Combo Caña Starfish + Reel Albatros ideal para tu dia en el rio.", precio: 6800, imagen: "combo1.png", categoria: "Pesca"},
    {id: 2,  nombre: "Combo Caña BRAVA de 3.00m 2T + Reel frontal BG 60FD", descripcion: "Combo Caña BRAVA 3.00m 2T + Reel frontal BG 60FD Fibra de carbono.", precio: 7800, imagen: "combo2.png", categoria: "Pesca"},
    {id: 3,  nombre: "Combo Pesca Niña Rosa Caña Telesc 2,10m + Reel 3 Rul + Tanza", descripcion: "Combo Caña + Reel para tu hija o hijo.", precio: 3600, imagen: "combo3.png", categoria: "Pesca"},
    {id: 4,  nombre: "Combos REDINGTON PATH II FRESHWATER Lineas 4 a 8 Reel Crosswater", descripcion: "Combo Redington con lineas de 4 a 8 + Reel Crosswater.", precio: 9000, imagen: "combo4.png", categoria: "Pesca"},
    {id: 5,  nombre: "Combo De Pesca Reel Marine Sports Caster 400 + Caña 15-30 Lb", descripcion: "Combo Marine Reel + Caña.", precio: 12000, imagen: "combo5.png", categoria: "Pesca"},
    {id: 6,  nombre: "Combo Kit de Pesca Reel 3 Rule + Coral 2.40 Waterdog Tanza", descripcion: "Kit de Pesca + Tanza Coral.", precio: 7300, imagen: "combo6.png", categoria: "Pesca"},
    {id: 7,  nombre: "Combo de pesca Okuma Steeler 2,70MT Caña + Reel Steeler", descripcion: "Combo de pesca Okuma Steeler Mango de Goma Eva.", precio: 13000  , imagen: "combo7.png", categoria: "Pesca"},
    {id: 8,  nombre: "Okuma Celilo Kokanee Combo c/w Magna 15 Reel 7' 6", descripcion: "Combo Okuma Celilo Kokanee.", precio: 17000, imagen: "combo8.png", categoria: "Pesca"},
    {id: 9,  nombre: "Combos Pesca X2 Niña + Niño- Caña Telesc 1,80 Reel Rosa/azul", descripcion: "Combo Niños, ideal para entretenerlos.", precio: 3200, imagen: "combo9.png", categoria: "Pesca"},
]

const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
}

const cargarProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

guardarProductosLS(productos);