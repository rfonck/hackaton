import {regions, vehiculeElectrique, consoEquipements} from './constants.js'

export function calculator(region, nbJoursPrésentiel, typeVehicule, distance, equipements, nbData, nbSMS, nbMail, nbHeuresVisio) {
    
    // console.log(region,nbJoursPrésentiel,typeVehicule,distance,equipements,nbData,nbSMS, nbMail, nbHeuresVisio)
    // console.log(equipements)
    // Profil
    var consommation_region = regions[region];
    
    // Modalités

    // Modes de transport
    var consommation_moyen_transport = vehiculeElectrique[typeVehicule] * consommation_region * distance * 10e-6;

    // Equipements
    var consommation_equipements_globale = 0;
    for (const equipement in equipements) {
        var emission_equipement = consoEquipements[equipement]
        var consommation_equipement = (emission_equipement / 365) * consommation_region * 10e-3
        consommation_equipements_globale += consommation_equipement
    }

    var nbJoursTT = 5 - nbJoursPrésentiel;

    var consommation_reseau = nbData * 1.8e-3 * consommation_region;
    var consommation_sms = (nbSMS * 0.00215 * 10e-3) / 22;
    var consommation_mail = nbMail * 4 * 10e-3
    var consommation_visio = nbHeuresVisio * 60 * 0.403 * 10e-3

    // Global par semaine
    return (consommation_moyen_transport + consommation_equipements_globale + consommation_reseau + consommation_sms + consommation_mail + consommation_visio) * (1*nbJoursPrésentiel + 0.3*nbJoursTT)
}