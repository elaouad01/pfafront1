import React from 'react';
import "./single.scss";
import Sidebar from "../../composantes/sidebar/Sidebar";
import Navbar from "../../composantes/navbar/Navbar";
import List from "../../composantes/table/Table";

export const Single = () => {
const user = {
    cin: "J5678",
    nom: "sami",
    prenom: "youssef",
    sexe: "Masculin",
    dateNaissance: "1990-01-01",
    lieuNaissance: "agadir",
    adresse: "232323",
    numeroTel: "0123456789",
    email: "sami@gmail.com",
    InfoFamiliales: {
        nomPere: "mohamed",
        nomMere: "fatima",
        situationFamiliale: "dicorce",
        dateMariage: "2011-01-01",
        nomConjoint: "yassmine",
        cinConjoint: "j558792",
        dateNaissanceConjoint: "2001-01-06",
        fonctionConjoint: "cadre",
        nombreEnfants: 2,
        Conjoints: [
            {
                cinConjoint: "jjj",
                dateMariage: "2013-01-01",
                dateDivorce: "2014-01-01",
                nomConjoint: "sakina saidi",
                dateNaissanceConjoint: "1990-01-01",
                fonctionConjoint: "prof"
            },
            {
                cinConjoint: "bbb",
                dateMariage: "2015-09-09",
                dateDivorce: "2016-10-01",
                nomConjoint: "souad mrzouki",
                dateNaissanceConjoint: "1998-12-03",
                fonctionConjoint: "docteur"
            }
        ],
        Enfants: [
            {
                prenom: "mohamed",
                nomMere: "sakina saidi",
                dateNaissance: "2014-04-04"
            },
            {
                prenom: "amir",
                nomMere: "souad mrzouki",
                dateNaissance: "2014-04-04"
            }
        ]
    },
    InfoAdministratives: {
        ppr: "1234hh",
        pb: "cvttu9",
        dateRecrutement: "2019-04-04",
        diplomeRecrutement: "ingenieur ENSAA",
        administrationRecrutement: "wilaya",
        dateTitularisation: "2018-07-04",
        grade: "5",
        echelle: "12",
        echelon: "13",
        indice: "4",
        statutAdministratif: "ingenieur",
        situationAdministrative: "en_fonction"
    },
    InfoPrevoyanceSociale: {
        organismePrevoyanceSociale: "MGAP",
        numAffiliationCNOPS: "12c123",
        numImmatriculationCNOPS: "c12345gt",
        dateAffiliationCNOPS: "2020-07-01"
    },
    OrganismesSociales: {
        numAffiliationFondationHassan2: "ghyuu77"
    },
    InfoRetraite: {
        organismeRetraite: "CMR",
        numeroAffiliationRetraite: "D12345",
        dateAffiliationRetraite: "2021-02-02"
    },
    InfoAssurance: {
        organismeAssurance: "saham",
        numeAffiliationAssurance: "ooii123"
    },
    Diplomes: [
        {
            intitule: "master",
            specialite: "info",
            dateObtention: "2013-05-04",
            etablissement: "fac agadir"
        },
        {
            intitule: "doctorat",
            specialite: "reseau",
            dateObtention: "2015-09-01",
            etablissement: "fac marrakech"
        }
    ],
    Notations: [
        {
            annee: "2019",
            note: "16"
        },
        {
            annee: "2020",
            note: "17"
        }
    ],
    Mouvements: [
        {
            administration: "wilaya",
            dateDebut: "2020-01-01",
            dateFin: "2021-01-01"
        },
        {
            administration: "prefecture",
            dateDebut: "2023-01-01",
            dateFin: "2024-01-01"
        }
    ],
    Affectations: [
        {
            entite: "bureau",
            dateAffectation: "2020-01-01",
            poste: "2021-01-01"
        },
        {
            entite: "cabinet",
            dateAffectation: "2022-04-04",
            poste: "2021-01-01"
        }
    ],
    Sanctions: [
        {
            Sanction: "101Sanct",
            nature: "juridique",
            motif: "disrespect",
            dateSanction: "2024-06-09"
        },
        {
            Sanction: "102Sanct",
            nature: "finenciere",
            motif: "trahison",
            dateSanction: "2024-07-01"
        }
    ],
    DocumentsPiecesJointes: [
        {
            nom: "Document1.pdf",
            cheminStockage: "c/documents/Document1.pdf",
            type: "pdf",
            SousDossier: {
                nomSousDoussier: "Dossier_familial"
            }
        },
        {
            nom: "Document2.word",
            cheminStockage: "c/documents/Document2.word",
            type: "word",
            SousDossier: {
                nomSousDoussier: "Dossier_notations"
            }
        }
    ]
};
const { cin, nom, prenom, sexe, dateNaissance, lieuNaissance, adresse, numeroTel, email, InfoFamiliales, InfoAdministratives, InfoPrevoyanceSociale, OrganismesSociales, InfoRetraite, InfoAssurance, Diplomes, Notations, Mouvements, Affectations, Sanctions, DocumentsPiecesJointes } = user;

  return (
      <div className='single'>
          <Sidebar />
          <div className="singleContainer">
              <Navbar />
              <div className="bottom">
                <div className='info'>
                
                  <div className='item'>
                      <div className="details">
                          <h1 className="itemTitle"> L'Affiche de l'utilisateur    :  {`${prenom} ${nom}`}</h1>
                          <h1 className='title'>Information Personnelle:</h1>
                          <div className="detailItem">
                              <span className="itemKey">CIN:</span>
                              <span className="itemValue">{cin}</span>
                          </div>
                          <div className="detailItem">
                              <span className="itemKey">Sexe:</span>
                              <span className="itemValue">{sexe}</span>
                          </div>
                          <div className="detailItem">
                              <span className="itemKey">Date de naissance:</span>
                              <span className="itemValue">{dateNaissance}</span>
                          </div>
                          <div className="detailItem">
                              <span className="itemKey">Lieu de naissance:</span>
                              <span className="itemValue">{lieuNaissance}</span>
                          </div>
                          <div className="detailItem">
                              <span className="itemKey">Adresse:</span>
                              <span className="itemValue">{adresse}</span>
                          </div>
                          <div className="detailItem">
                              <span className="itemKey">Téléphone:</span>
                              <span className="itemValue">{numeroTel}</span>
                          </div>
                          <div className="detailItem">
                              <span className="itemKey">Email:</span>
                              <span className="itemValue">{email}</span>
                          </div>
                      </div>
                      </div>
                  
                 
                 
                  
                       <h1 className='title'>Informations Familiales:</h1>

                       <div className="details">
                    <div className="detailItem">
                   <span className="itemKey">Situation Familiale:</span>
                  <span className="itemValue">{InfoFamiliales.situationFamiliale}</span>
                   </div>
                  <div className="detailItem">
                           <span className="itemKey">Date de Mariage:</span>
                          <span className="itemValue">{InfoFamiliales.dateMariage}</span>
                    </div>
                 <div className="detailItem">
                      <span className="itemKey">Nombre d'Enfants:</span>
                       <span className="itemValue">{InfoFamiliales.nombreEnfants}</span>
                    </div>
       
                   </div>



          {InfoFamiliales.Conjoints.map((conjoint, index) => (
    <div key={index}>
        <h4 className="subTitle">Conjoint {index + 1}:</h4>
        
            <div className="details">
                <div className="detailItem">
                    <span className="itemKey">Nom du Conjoint:</span>
                    <span className="itemValue">{conjoint.nomConjoint}</span>
                </div>
               
            </div>
       
    </div>
   ))}


       {InfoFamiliales.Enfants.map((enfant, index) => (
    <div key={index}>
        <h4 className="subTitle">Enfant {index + 1}:</h4>
       
            <div className="details">
                <div className="detailItem">
                    <span className="itemKey">Prénom de l'Enfant:</span>
                    <span className="itemValue">{enfant.prenom}</span>
                </div>
                <div className="detailItem">
                    <span className="itemKey">Nom de la Mère:</span>
                    <span className="itemValue">{enfant.nomMere}</span>
                </div>
                <div className="detailItem">
                    <span className="itemKey">Date de Naissance:</span>
                    <span className="itemValue">{enfant.dateNaissance}</span>
                </div>
               
            </div>
        </div>
    
        ))}


      <h1 className='title'>Informations Administratives:</h1>

    <div className="details">
        <div className="detailItem">
            <span className="itemKey">Point de Présence Réseau (PPR):</span>
            <span className="itemValue">{InfoAdministratives.ppr}</span>
        </div>
        <div className="detailItem">
            <span className="itemKey">Point de Branchement (PB):</span>
            <span className="itemValue">{InfoAdministratives.pb}</span>
        </div>
        <div className="detailItem">
            <span className="itemKey">Date de Recrutement:</span>
            <span className="itemValue">{InfoAdministratives.dateRecrutement}</span>
        </div>
        <div className="detailItem">
            <span className="itemKey">Diplôme de Recrutement:</span>
            <span className="itemValue">{InfoAdministratives.diplomeRecrutement}</span>
        </div>
        <div className="detailItem">
            <span className="itemKey">Administration de Recrutement:</span>
            <span className="itemValue">{InfoAdministratives.administrationRecrutement}</span>
        </div>
        <div className="detailItem">
            <span className="itemKey">Date de Titularisation:</span>
            <span className="itemValue">{InfoAdministratives.dateTitularisation}</span>
        </div>
        <div className="detailItem">
            <span className="itemKey">Grade:</span>
            <span className="itemValue">{InfoAdministratives.grade}</span>
        </div>
        <div className="detailItem">
            <span className="itemKey">Échelle:</span>
            <span className="itemValue">{InfoAdministratives.echelle}</span>
        </div>
        <div className="detailItem">
            <span className="itemKey">Échelon:</span>
            <span className="itemValue">{InfoAdministratives.echelon}</span>
        </div>
        <div className="detailItem">
            <span className="itemKey">Indice:</span>
            <span className="itemValue">{InfoAdministratives.indice}</span>
        </div>
        <div className="detailItem">
            <span className="itemKey">Statut Administratif:</span>
            <span className="itemValue">{InfoAdministratives.statutAdministratif}</span>
        </div>
        <div className="detailItem">
            <span className="itemKey">Situation Administrative:</span>
            <span className="itemValue">{InfoAdministratives.situationAdministrative}</span>
        </div>
  
    </div>



         <h1 className='title'>Informations Prévoyance Sociale:</h1>

    <div className="details">
        <div className="detailItem">
            <span className="itemKey">Organisme de Prévoyance Sociale:</span>
            <span className="itemValue">{InfoPrevoyanceSociale.organismePrevoyanceSociale}</span>
        </div>
        <div className="detailItem">
            <span className="itemKey">Numéro d'Affiliation CNOPS:</span>
            <span className="itemValue">{InfoPrevoyanceSociale.numAffiliationCNOPS}</span>
        </div>
        <div className="detailItem">
            <span className="itemKey">Numéro d'Immatriculation CNOPS:</span>
            <span className="itemValue">{InfoPrevoyanceSociale.numImmatriculationCNOPS}</span>
        </div>
        <div className="detailItem">
            <span className="itemKey">Date d'Affiliation CNOPS:</span>
            <span className="itemValue">{InfoPrevoyanceSociale.dateAffiliationCNOPS}</span>
        </div>
 
    </div>



         <h1 className='title'>Organismes Sociales:</h1>

    <div className="details">
        <div className="detailItem">
            <span className="itemKey">Numéro d'Affiliation à la Fondation Hassan II:</span>
            <span className="itemValue">{OrganismesSociales.numAffiliationFondationHassan2}</span>
        </div>
      
    </div>



            <h1 className='title'>Informations Retraite:</h1>

    <div className="details">
        <div className="detailItem">
            <span className="itemKey">Organisme de Retraite:</span>
            <span className="itemValue">{InfoRetraite.organismeRetraite}</span>
        </div>
        <div className="detailItem">
            <span className="itemKey">Numéro d'Affiliation Retraite:</span>
            <span className="itemValue">{InfoRetraite.numeroAffiliationRetraite}</span>
        </div>
        <div className="detailItem">
            <span className="itemKey">Date d'Affiliation Retraite:</span>
            <span className="itemValue">{InfoRetraite.dateAffiliationRetraite}</span>
        </div>
 
    </div>



        <h1 className='title'>Informations Assurance:</h1>

    <div className="details">
        <div className="detailItem">
            <span className="itemKey">Organisme d'Assurance:</span>
            <span className="itemValue">{InfoAssurance.organismeAssurance}</span>
        </div>
        <div className="detailItem">
            <span className="itemKey">Numéro d'Affiliation Assurance:</span>
            <span className="itemValue">{InfoAssurance.numeAffiliationAssurance}</span>
        </div>
        
    </div>



        <h1 className='title'>Sanctions:</h1>

    <div className="details">
        {Sanctions.map((sanction, index) => (
            <div key={index} className="detailItem">
                <span className="itemKey">Sanction {index + 1}:</span>
                <span className="itemValue">{`${sanction.Sanction} - ${sanction.nature} - ${sanction.motif} - ${sanction.dateSanction}`}</span>
            </div>
        ))}
    </div>



      <h1 className='title'>Documents et Pièces Jointes:</h1>

    <div className="details">
        {DocumentsPiecesJointes.map((document, index) => (
            <div key={index} className="detailItem">
                <span className="itemKey">Document {index + 1}:</span>
                <span className="itemValue">{`${document.nom} - ${document.cheminStockage} - ${document.type}`}</span>
            </div>
        ))}
    </div>

 </div>
 </div>
 </div>
 </div>

  );
};

export default Single;
