import React, { useEffect, useState } from 'react';
import "./formAbs.scss";
import Sidebar from "../../composantes/sidebar/Sidebar";
import Navbar from "../../composantes/navbar/Navbar";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const FormAbs = () => {
  let navigate = useNavigate();

  const { userId } = useParams();

  const [user, setUser] = useState({
    type: "",
    nbrjours: "",
    nbrjourdeduire: "",
    nbrjournepasdeduire: ""
  });

  useEffect(() => {
    loadUser();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.put(`http://localhost:8080/api/info/update/${userId}`, user);
      console.log(result.data);
      alert('Données mises à jour avec succès !');
      navigate("/Demandes/Absence");
    } catch (error) {
      console.error('Erreur lors de la mise à jour des données:', error);
      alert('Une erreur s\'est produite lors de la mise à jour des données. Veuillez réessayer.');
    }
  };

  const loadUser = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/api/info/displayById/${userId}`);
      setUser(result.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  };

  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar />
        <div className='bottom'>
          <form className="row g-1" onSubmit={handleSubmit}>
            <h1 className="text-center mb-9">Modifier une demande d'absence</h1>
            <div className="col-md-3">
              <label className="form-label">Type :</label>
              <input className="form-control" type="text" name="type" value={user.type} onChange={handleInputChange} />
            </div>
            <div className="col-md-3">
              <label className="form-label">Nombre de jours :</label>
              <input className="form-control" type="text" name="nbrjours" value={user.nbrjours} onChange={handleInputChange} />
            </div>
            <div className="col-md-3">
              <label className="form-label">Nombre de jours à déduire :</label>
              <input className="form-control" type="text" name="nbrjourdeduire" value={user.nbrjourdeduire} onChange={handleInputChange} />
            </div>
            <div className="col-md-3">
              <label className="form-label">Nombre de jours à ne pas déduire :</label>
              <input className="form-control" type="text" name="nbrjournepasdeduire" value={user.nbrjournepasdeduire} onChange={handleInputChange} />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-danger btn-lg">Modifier la demande d'absence </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormAbs;
