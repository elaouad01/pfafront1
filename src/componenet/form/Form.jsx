import React from 'react';
import "./form.scss";
import Sidebar from "../../composantes/sidebar/Sidebar";
import Navbar from "../../composantes/navbar/Navbar";

const Form = () => {

  const initialValues = {
    prenom: '',
    nom: '',
    cin: '',
    sexe: '',
    dateNaissance: '',
    lieuNaissance: '',
    adresse: '',
    numeroTel: '',
    email: '',
    situationFamiliale: '',
    dateMariage: '',
    nombreEnfants: '',
    conjoints: [{ nomConjoint: '' }],
    enfants: [{ prenom: '', nomMere: '', dateNaissance: '' }],
    InfoAdministratives: {
      ppr: '',
      pb: '',
      dateRecrutement: '',
      diplomeRecrutement: '',
      administrationRecrutement: '',
      dateTitularisation: '',
      grade: '',
      echelle: '',
      echelon: '',
      indice: '',
      statutAdministratif: '',
      situationAdministrative: ''
    },
    InfoPrevoyanceSociale: {
      organismePrevoyanceSociale: '',
      numAffiliationCNOPS: '',
      numImmatriculationCNOPS: '',
      dateAffiliationCNOPS: ''
    },
    OrganismesSociales: {
      numAffiliationFondationHassan2: ''
    },
    InfoRetraite: {
      organismeRetraite: '',
      numeroAffiliationRetraite: '',
      dateAffiliationRetraite: ''
    },
    InfoAssurance: {
      organismeAssurance: '',
      numeAffiliationAssurance: ''
    },
    Sanctions: [{ Sanction: '', nature: '', motif: '', dateSanction: '' }],
    DocumentsPiecesJointes: [{ nom: '', cheminStockage: '', type: '' }]
  };

  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <h1>Modifier un nouveau utilisateur :</h1>
        <div className='bottom'>
          <form>
            <div className='info'>
              <div className='item'>
                <div className="details">
                  <h1 className='title'>Information Personnelle:</h1>
                  <div className="detailItem">
                    <label className="itemKey">Prénom:</label>
                    <input type="text" name="prenom" value={initialValues.prenom} />
                  </div>
                  <div className="detailItem">
                    <label>Nom:</label>
                    <input type="text" name="nom" value={initialValues.nom} />
                  </div>
                  <div className="detailItem">
                    <label>CIN:</label>
                    <input type="text" name="cin" value={initialValues.cin} />
                  </div>
                  <div className="detailItem">
                    <label>Sexe:</label>
                    <input type="text" name="sexe" value={initialValues.sexe} />
                  </div>
                  <div className="detailItem">
                    <label>Date de naissance:</label>
                    <input type="text" name="dateNaissance" value={initialValues.dateNaissance} />
                  </div>
                  <div className="detailItem">
                    <label>Lieu de naissance:</label>
                    <input type="text" name="lieuNaissance" value={initialValues.lieuNaissance} />
                  </div>
                  <div className="detailItem">
                    <label>Adresse:</label>
                    <input type="text" name="adresse" value={initialValues.adresse} />
                  </div>
                  <div className="detailItem">
                    <label>Téléphone:</label>
                    <input type="text" name="numeroTel" value={initialValues.numeroTel} />
                  </div>
                  <div className="detailItem">
                    <label>Email:</label>
                    <input type="email" name="email" value={initialValues.email} />
                  </div>
                </div>
              </div>
              {/* Informations Familiales */}
              <div className="details">
                <h1 className='title'>Informations Familiales:</h1>
                <div className="detailItem">
                  <label>Situation Familiale:</label>
                  <input type="text" name="situationFamiliale" />
                </div>
                <div className="detailItem">
                  <label>Date de Mariage:</label>
                  <input type="text" name="dateMariage" />
                </div>
                <div className="detailItem">
                  <label>Nombre d'Enfants:</label>
                  <input type="text" name="nombreEnfants" />
                </div>
               {/* Informations Familiales */}
<div className="details">
  <h1 className='title'>Informations Familiales:</h1>
  <div className="detailItem">
    <label>Situation Familiale:</label>
    <input type="text" name="situationFamiliale" />
  </div>
  <div className="detailItem">
    <label>Date de Mariage:</label>
    <input type="text" name="dateMariage" />
  </div>
  <div className="detailItem">
    <label>Nombre d'Enfants:</label>
    <input type="text" name="nombreEnfants" />
  </div>
  {initialValues.conjoints.map((conjoint, index) => (
    <div key={index}>
      <h4 className="subTitle">Conjoint {index + 1}:</h4>
      <div className="details">
        <div className="detailItem">
          <label>Nom du Conjoint:</label>
          <input type="text" name={`conjoint${index}`} />
        </div>
      </div>
    </div>
  ))}
  {initialValues.enfants.map((enfant, index) => (
    <div key={index}>
      <h4 className="subTitle">Enfant {index + 1}:</h4>
      <div className="details">
        <div className="detailItem">
          <label>Prénom de l'Enfant:</label>
          <input type="text" name={`enfantPrenom${index}`} />
        </div>
        <div className="detailItem">
          <label>Nom de la Mère:</label>
          <input type="text" name={`enfantNomMere${index}`} />
        </div>
        <div className="detailItem">
          <label>Date de Naissance:</label>
          <input type="text" name={`enfantDateNaissance${index}`} />
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
    <input type="text" name="ppr" />
  </div>
  <div className="detailItem">
    <label>Point de Branchement (PB):</label>
    <input type="text" name="pb" />
  </div>
  <div className="detailItem">
    <label>Date de Recrutement:</label>
    <input type="text" name="dateRecrutement" />
  </div>
  <div className="detailItem">
    <label>Diplôme de Recrutement:</label>
    <input type="text" name="diplomeRecrutement" />
  </div>
  <div className="detailItem">
    <label>Administration de Recrutement:</label>
    <input type="text" name="administrationRecrutement" />
  </div>
  <div className="detailItem">
    <label>Date de Titularisation:</label>
    <input type="text" name="dateTitularisation" />
  </div>
  <div className="detailItem">
    <label>Grade:</label>
    <input type="text" name="grade" />
  </div>
  <div className="detailItem">
    <label>Échelle:</label>
    <input type="text" name="echelle" />
  </div>
  <div className="detailItem">
    <label>Échelon:</label>
    <input type="text" name="echelon" />
  </div>
  <div className="detailItem">
    <label>Indice:</label>
    <input type="text" name="indice" />
  </div>
  <div className="detailItem">
    <label>Statut Administratif:</label>
    <input type="text" name="statutAdministratif" />
  </div>
  <div className="detailItem">
    <label>Situation Administrative:</label>
    <input type="text" name="situationAdministrative" />
  </div>
 </div>

 {/* Informations Prévoyance Sociale */}
<div className="details">
  <h1 className='title'>Informations Prévoyance Sociale:</h1>
  <div className="detailItem">
    <label>Organisme de Prévoyance Sociale:</label>
    <input type="text" name="organismePrevoyanceSociale" />
  </div>
  <div className="detailItem">
    <label>Numéro d'Affiliation CNOPS:</label>
    <input type="text" name="numAffiliationCNOPS" />
  </div>
  <div className="detailItem">
    <label>Numéro d'Immatriculation CNOPS:</label>
    <input type="text" name="numImmatriculationCNOPS" />
  </div>
  <div className="detailItem">
    <label>Date d'Affiliation CNOPS:</label>
    <input type="text" name="dateAffiliationCNOPS" />
  </div>
</div>
<div className="details">
  <h1 className='title'>Sanctions:</h1>
  {initialValues.sanctions && initialValues.sanctions.map((sanction, index) => (
  <div key={index} className="detailItem">
    <label>Sanction {index + 1}:</label>
    <input type="text" name={`sanction${index}`} />
  </div>
))}

 </div>
          <button type="submit">Enregistrer</button>
          </div>
          </div>
          </form>
        </div>
      </div>
    </div>
   
  );
};

 
export default Form;
