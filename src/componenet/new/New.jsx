import React from 'react';
import "./new.scss";
import Sidebar from "../../composantes/sidebar/Sidebar";
import Navbar from "../../composantes/navbar/Navbar";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


  const New = () => {
    let navigate=useNavigate()

    const [formData, setFormData] = useState({
      prenom:"",
      nom: "",
      cin: "",
      sexe: "",
      dateNaissance: "",
      lieuNaissance: "",
      adresse: "",
      numeroTel: "",
      email: "",
      infoFamiliales: {
        nomPere: "",
        nomMere: "",
        situationFamiliale: "",
        dateMariage: "",
        nomConjoint: "",
        cinConjoint: "",
        dateNaissanceConjoint: "",
        fonctionConjoint: "",
        nombreEnfants: "",
        conjoints: [
          {
            cinConjoint: "",
            dateMariage: "",
            dateDivorce: "",
            nomConjoint: "",
            dateNaissanceConjoint: "",
            fonctionConjoint: "",
          },
        ],
        enfants: [
          {
            prenom: "",
            nomMere: "",
            dateNaissance: "",
          },
        ],
      },
      InfoAdministratives: {
        ppr: "",
        pb: "",
        dateRecrutement: "",
        diplomeRecrutement: "",
        administrationRecrutement: "",
        dateTitularisation: "",
        grade: "",
        echelle: "",
        echelon: "",
        indice: "",
        statutAdministratif: "",
        situationAdministrative: "",
      },
      InfoPrevoyanceSociale: {
        organismePrevoyanceSociale: "",
        numAffiliationCNOPS: "",
        numImmatriculationCNOPS: "",
        dateAffiliationCNOPS: "",
      },
    });
  
  const handleChange = (e) => { //Cette fonction est appelée chaque fois qu'un champ du formulaire est modifié.
    //Elle met à jour l'état formData avec les nouvelles valeurs des champs du formulaire.
    setFormData({...formData,[e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Envoyer les données au backend via une requête POST
      await axios.post('http://localhost:8080/api/info/add',formData);
      alert('Données envoyées avec succès !');
      // Réinitialiser le formulaire après l'envoi des données
      navigate("/users")
    } catch (error) {
      console.error('Erreur lors de l\'envoi des données:', error);
      alert('Une erreur s\'est produite lors de l\'envoi des données. Veuillez réessayer.');
    }
  };

  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />

        <div className='bottom'>
          <form onSubmit={(e)=>handleSubmit(e)}>
            <h1>Ajouter un nouveau utilisateur :</h1>
            <div className='info'>
              <div className='item'>
                <div className="details">
                  <h1 className='title'>Information Personnelle:</h1>
                  <div className="detailItem">
                    <label className="itemKey">Prénom:</label>
                    <input type="text" name="prenom" value={formData.prenom} onChange={(e)=>handleChange(e)}/>
                  </div>
                  <div className="detailItem">
                    <label>Nom:</label>
                    <input type="text" name="nom" value={formData.nom} onChange={(e)=>handleChange(e)} />
                  </div>
                  <div className="detailItem">
                    <label>CIN:</label>
                    <input type="text" name="cin" value={formData.cin} onChange={(e)=>handleChange(e)} />
                  </div>
                  <div className="detailItem">
                    <label>Sexe:</label>
                    <input type="text" name="sexe" value={formData.sexe} onChange={(e)=>handleChange(e)} />
                  </div>
                  <div className="detailItem">
                    <label>Date de naissance:</label>
                    <input type="date" name="dateNaissance" value={formData.dateNaissance} onChange={(e)=>handleChange(e)} />
                  </div>
                  <div className="detailItem">
                    <label>Lieu de naissance:</label>
                    <input type="text" name="lieuNaissance" value={formData.lieuNaissance} onChange={(e)=>handleChange(e)} />
                  </div>
                  <div className="detailItem">
                    <label>Adresse:</label>
                    <input type="text" name="adresse" value={formData.adresse} onChange={(e)=>handleChange(e)} />
                  </div>
                  <div className="detailItem">
                    <label>Téléphone:</label>
                    <input type="text" name="numeroTel" value={formData.numeroTel} onChange={(e)=>handleChange(e)} />
                  </div>
                  <div className="detailItem">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={(e)=>handleChange(e)} />
                  </div>
                </div>
              </div>
              {/* Informations Familiales */}
              <div className="details">
                <h1 className='title'>Informations Familiales:</h1>
                <div className="detailItem">
                  <label>Nom de père :</label>
                  <input type="text" name="nomPere" value={formData.nomPere} onChange={(e)=>handleChange(e)} />
                </div>
                <div className="detailItem">
                  <label>Nom de la mère:</label>
                  <input type="text" name="nomMere" value={formData.nomMere} onChange={(e)=>handleChange(e)} />
                </div>
                <div className="detailItem">
                  <label>Situation Familiale:</label>
                  <input type="text" name="situationFamiliale" value={formData.situationFamiliale} onChange={(e)=>handleChange(e)} />
                </div>
                <div className="detailItem">
                  <label>Date de mariage:</label>
                  <input type="date" name="dateMariage" value={formData.dateMariage} onChange={(e)=>handleChange(e)} />
                </div>
                <div className="detailItem">
                  <label>Nom du conjoint:</label>
                  <input type="text" name="nomConjoint" value={formData.nomConjoint} onChange={(e)=>handleChange(e)} />
                </div>
                <div className="detailItem">
                  <label>Cin du conjoint:</label>
                  <input type="text" name="cinConjoint" value={formData.cinConjoint} onChange={(e)=>handleChange(e)} />
                </div>
                <div className="detailItem">
                  <label>Date de naissance du conjoint:</label>
                  <input type="date" name="dateNaissanceConjoint" value={formData.dateNaissanceConjoint} onChange={(e)=>handleChange(e)} />
                </div>
                <div className="detailItem">
                  <label>La fonction du conjoint:</label>
                  <input type="text" name="fonctionConjoint" value={formData.fonctionConjoint} onChange={(e)=>handleChange(e)} />
                </div>
                <div className="detailItem">
                  <label>Nombre d'enfants:</label>
                  <input type="text" name="nombreEnfants" value={formData.nombreEnfants} onChange={(e)=>handleChange(e)} />
                </div>
                <label>Liste des conjoints :</label>
                {formData.infoFamiliales.conjoints.map((conjoint, index) => (
                  <div key={index}>
                    <h4 className="subTitle">Conjoint {index + 1}:</h4>
                    <div className="details">
                      <div className="detailItem">
                        <label>Nom du Conjoint:</label>
                        <input type="text" name={`nomConjoint${index}`} value={formData.infoFamiliales.conjoints[index].nomConjoint} onChange={(e)=>handleChange(e)} />
                      </div>
                      <div className="detailItem">  
                        <label>CIN du Conjoint:</label>
                        <input type="text" name={`cinConjoint${index}`} value={formData.infoFamiliales.conjoints[index].cinConjoint} onChange={(e)=>handleChange(e)} />
                      </div>
                      <div className="detailItem">
                        <label>Date de Mariage du Conjoint:</label>
                        <input type="date" name={`dateMariage${index}`} value={formData.infoFamiliales.conjoints[index].dateMariage} onChange={(e)=>handleChange(e)}/>
                      </div>
                      <div className="detailItem">
                        <label>Date de Divorce du Conjoint:</label>
                        <input type="date" name={`dateDivorce${index}`} value={formData.infoFamiliales.conjoints[index].dateDivorce} onChange={(e)=>handleChange(e)}/>
                      </div>
                      <div className="detailItem">
                        <label>Date de Naissance du Conjoint:</label>
                        <input type="date" name={`dateNaissanceConjoint${index}`} value={formData.infoFamiliales.conjoints[index].dateNaissanceConjoint} onChange={(e)=>handleChange(e)} />
                      </div>
                      <div className="detailItem">
                        <label>Fonction du Conjoint:</label>
                        <input type="text" name={`fonctionConjoint${index}`} value={formData.infoFamiliales.conjoints[index].fonctionConjoint} onChange={(e)=>handleChange(e)} />
                      </div>
                    </div>
                  </div>
                ))}
                <label>Liste des enfants :</label>
                {formData.infoFamiliales.enfants.map((enfant, index) => (
                  <div key={index}>
                    <h4 className="subTitle">Enfant {index + 1}:</h4>
                    <div className="details">
                      <div className="detailItem">
                        <label>Prénom de l'Enfant:</label>
                        <input type="text" name={`prenomEnfant${index}`} value={formData.infoFamiliales.enfants[index].prenom} onChange={(e)=>handleChange(e)} />
                      </div>
                      <div className="detailItem">
                        <label>Nom de la Mère:</label>
                        <input type="text" name={`nomMereEnfant${index}`} value={formData.infoFamiliales.enfants[index].nomMere} onChange={(e)=>handleChange(e)} />
                      </div>
                      <div className="detailItem">
                        <label>Date de Naissance:</label>
                        <input type="date" name={`dateNaissanceEnfant${index}`} value={formData.infoFamiliales.enfants[index].dateNaissance} onChange={(e)=>handleChange(e)} />
                      </div>
                    </div>
                  </div>
                ))}

              </div>

              {/* Informations Administratives */}
              <div className="details">
                <h1 className='title'>Informations Administratives:</h1>
                <div className="detailItem">
                  <label>Point de Présence Réseau (PPR):</label>
                  <input type="text" name="ppr" value={formData.ppr} onChange={(e)=>handleChange(e)} />
                </div>
                <div className="detailItem">
                  <label>Point de Branchement (PB):</label>
                  <input type="text" name="pb" value={formData.pb} onChange={(e)=>handleChange(e)} />
                </div>
                <div className="detailItem">
                  <label>Date de Recrutement:</label>
                  <input type="date" name="dateRecrutement" value={formData.dateRecrutement} onChange={(e)=>handleChange(e)} />
                </div>
                <div className="detailItem">
                  <label>Diplôme de Recrutement:</label>
                  <input type="text" name="diplomeRecrutement" value={formData.diplomeRecrutement} onChange={(e)=>handleChange(e)} />
                </div>
                <div className="detailItem">
                  <label>Administration de Recrutement:</label>
                  <input type="text" name="administrationRecrutement" value={formData.administrationRecrutement} onChange={(e)=>handleChange(e)} />
                </div>
                <div className="detailItem">
                  <label>Date de Titularisation:</label>
                  <input type="date" name="dateTitularisation" value={formData.dateTitularisation} onChange={(e)=>handleChange(e)} />
                </div>
                <div className="detailItem">
                  <label>Grade:</label>
                  <input type="text" name="grade" value={formData.grade} onChange={(e)=>handleChange(e)} />
                </div>
                <div className="detailItem">
                  <label>Échelle:</label>
                  <input type="text" name="echelle" value={formData.echelle} onChange={(e)=>handleChange(e)} />
                </div>
                <div className="detailItem">
                  <label>Échelon:</label>
                  <input type="text" name="echelon" value={formData.echelon} onChange={(e)=>handleChange(e)} />
                </div>
                <div className="detailItem">
                  <label>Indice:</label>
                  <input type="text" name="indice" value={formData.indice} onChange={(e)=>handleChange(e)} />
                </div>
                <div className="detailItem">
                  <label>Statut Administratif:</label>
                  <input type="text" name="statutAdministratif" value={formData.statutAdministratif} onChange={(e)=>handleChange(e)} />
                </div>
                <div className="detailItem">
                  <label>Situation Administrative:</label>
                  <input type="text" name="situationAdministrative" value={formData.situationAdministrative} onChange={(e)=>handleChange(e)} />
                </div>
              </div>

              {/* Informations Prévoyance Sociale */}
              <div className="details">
                <h1 className='title'>Informations Prévoyance Sociale:</h1>
                <div className="detailItem">
                  <label>Organisme de Prévoyance Sociale:</label>
                  <input type="text" name="organismePrevoyanceSociale" value={formData.organismePrevoyanceSociale} onChange={(e)=>handleChange(e)} />
                </div>
                <div className="detailItem">
                  <label>Numéro d'Affiliation CNOPS:</label>
                  <input type="text" name="numAffiliationCNOPS" value={formData.numAffiliationCNOPS} onChange={(e)=>handleChange(e)} />
                </div>
                <div className="detailItem">
                  <label>Numéro d'Immatriculation CNOPS:</label>
                  <input type="text" name="numImmatriculationCNOPS" value={formData.numImmatriculationCNOPS} onChange={(e)=>handleChange(e)} />
                </div>
                <div className="detailItem">
                  <label>Date d'Affiliation CNOPS:</label>
                  <input type="date" name="dateAffiliationCNOPS" value={formData.dateAffiliationCNOPS} onChange={(e)=>handleChange(e)} />
                </div>
              </div>
              <button type="submit" className="btn btn-outline-primary">Enregistrer</button>
              <button type="submit" className="btn btn-outline-danger mx-2">Annuler</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default New;