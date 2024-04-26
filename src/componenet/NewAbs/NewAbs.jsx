import React, { useState } from 'react';
import "./newAbs.scss";
import Sidebar from "../../composantes/sidebar/Sidebar";
import Navbar from "../../composantes/navbar/Navbar";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewAbs = () => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    type: "",
    nbrjours: "",
    nbrjourdeduire: "",
    nbrjournepasdeduire: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/info/add', formData);
      console.log(res.data);
      alert('Données envoyées avec succès !');
      navigate("/Demandes/Absence"); // Modifier la route de redirection
    } catch (error) {
      console.error('Erreur lors de l\'envoi des données:', error);
      alert('Une erreur s\'est produite lors de l\'envoi des données. Veuillez réessayer.');
    }
  };

  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar />
        <div className='bottom'>
          <form className="row g-2" onSubmit={handleSubmit}>
            <h1 className="text-center mb-9">Ajouter une nouvelle demande d'absence</h1>
            <div className="col-md-3">
              <label className="form-label">Type :</label>
              <input className="form-control" type="text" name="type" value={formData.type} onChange={handleInputChange} />
            </div>
            <div className="col-md-3">
              <label className="form-label">Nombre de jours :</label>
              <input className="form-control" type="text" name="nbrjours" value={formData.nbrjours} onChange={handleInputChange} />
            </div>
            <div className="col-md-3">
              <label className="form-label">Nombre de jours à déduire :</label>
              <input className="form-control" type="text" name="nbrjourdeduire" value={formData.nbrjourdeduire} onChange={handleInputChange} />
            </div>
            <div className="col-md-3">
              <label className="form-label">Nombre de jours à ne pas déduire:</label>
              <input className="form-control" type="text" name="nbrjournepasdeduire" value={formData.nbrjournepasdeduire} onChange={handleInputChange} />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-danger btn-lg">Ajouter demande d'absence </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewAbs;
