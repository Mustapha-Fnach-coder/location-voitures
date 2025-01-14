import  { useState } from "react";
import ImageCover from "../../img/commercial.jpeg"; // Chemin de l'image
import { Link } from "react-router-dom";

export const cars = [
  {
    id: 1,
    marque: "JEEP",
    model: "GRAND CHEROKEE OVERLAND",
    annee: 2020,
    type: "SUV",
    price: 750,
    fuel: "Diesel",
    transmission: "Automatic",
    description: "A luxury SUV with advanced features and off-road capability.",
    image: ImageCover,
  },
  {
    id: 2,
    marque: "VOLKSWAGEN",
    model: "TOUAREG",
    annee: 2019,
    type: "SUV",
    price: 899,
    fuel: "Diesel",
    transmission: "Automatic",
    description: "A spacious and powerful SUV designed for comfort and performance.",
    image: ImageCover,
  },
  {
    id: 3,
    marque: "LAND ROVER",
    model: "SPORT",
    annee: 2022,
    type: "SUV",
    price: 3500,
    fuel: "Diesel",
    transmission: "Automatic",
    description: "A premium SUV combining elegance with superior off-road capabilities.",
    image: ImageCover,
  },
  {
    id: 4,
    marque: "RENAULT",
    model: "MEGANE",
    annee: 2018,
    type: "Sedan",
    price: 399,
    fuel: "Diesel",
    transmission: "Automatic",
    description: "A compact and efficient sedan perfect for city drives.",
    image: ImageCover,
  },
  {
    id: 5,
    marque: "ALFA ROMEO",
    model: "GIULIETTA BVA",
    annee: 2017,
    type: "Hatchback",
    price: 350,
    fuel: "Diesel",
    transmission: "Automatic",
    description: "A sporty hatchback that combines style and performance.",
    image: ImageCover,
  },
  {
    id: 6,
    marque: "FIAT",
    model: "TIPO",
    annee: 2016,
    type: "Sedan",
    price: 300,
    fuel: "Diesel",
    transmission: "Automatic",
    description: "An affordable and reliable sedan for everyday use.",
    image: ImageCover,
  },
];
const Voitures = () => {
  const [filters, setFilters] = useState({
    price: 4000,
  });

   
  
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredCars = cars.filter((car) => {
    return (
      (!filters.marque || car.marque === filters.marque) &&
      (!filters.model || car.model === filters.model) &&
      (!filters.annee || car.annee === parseInt(filters.annee)) &&
      (!filters.type || car.type === filters.type) &&
      car.price <= parseInt(filters.price)
    );
  });

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3">
          <div className="card p-3">
            <h5>Filters</h5>
            <div className="form-group mt-3">
              <label htmlFor="marque">Marque</label>
              <select
                id="marque"
                name="marque"
                className="form-control"
                onChange={handleFilterChange}
              >
                <option value="">All</option>
                <option value="JEEP">JEEP</option>
                <option value="VOLKSWAGEN">VOLKSWAGEN</option>
                <option value="LAND ROVER">LAND ROVER</option>
                <option value="RENAULT">RENAULT</option>
                <option value="ALFA ROMEO">ALFA ROMEO</option>
                <option value="FIAT">FIAT</option>
              </select>
            </div>
            <div className="form-group mt-3">
              <label htmlFor="model">Model</label>
              <select
                id="model"
                name="model"
                className="form-control"
                onChange={handleFilterChange}
              >
                <option value="">All</option>
                <option value="GRAND CHEROKEE OVERLAND">GRAND CHEROKEE OVERLAND</option>
                <option value="TOUAREG">TOUAREG</option>
                <option value="SPORT">SPORT</option>
                <option value="MEGANE">MEGANE</option>
                <option value="GIULIETTA BVA">GIULIETTA BVA</option>
                <option value="TIPO">TIPO</option>
              </select>
            </div>
            <div className="form-group mt-3">
              <label htmlFor="annee">Année</label>
              <select
                id="annee"
                name="annee"
                className="form-control"
                onChange={handleFilterChange}
              >
                <option value="">All</option>
                <option value="2022">2022</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
              </select>
            </div>
            <div className="form-group mt-3">
              <label htmlFor="type">Type</label>
              <select
                id="type"
                name="type"
                className="form-control"
                onChange={handleFilterChange}
              >
                <option value="">All</option>
                <option value="SUV">SUV</option>
                <option value="Sedan">Sedan</option>
                <option value="Hatchback">Hatchback</option>
              </select>
            </div>
            <div className="form-group mt-3">
              <label htmlFor="price">Prix Max (DH / jour)</label>
              <input
                type="range"
                id="price"
                name="price"
                className="form-range"
                value={filters.price}
                min="250"
                max="500"
                step="50"
                onChange={handleFilterChange}
              />
              <div>Prix: {filters.price} DH</div>
            </div>
          </div>
        </div>

        <div className="col-md-9">
          <div className="row">
            {filteredCars.map((car,index) => (
              
              <div className="col-md-4 mb-4" key={index}>
                
                <div className="card">
                  <img
                    src={car.image}
                    className="card-img-top"
                    alt={car.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{car.marque} {car.model}</h5>
                    <p>Année: {car.annee}</p>
                    <p>Type: {car.type}</p>
                    <p>Fuel: {car.fuel}</p>
                    <p>Transmission: {car.transmission}</p>
                    <p className="text-warning">From {car.price} DH / Day</p>
                    <Link to={`/car/${car.id}`}><button className="btn btn-warning">Réserver</button></Link>
                  </div>
                </div>
              </div>
             
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};



export default Voitures;
