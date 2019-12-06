import Kandikeskus from "./kandikeskus.png"
import Vare from "./vare.png"
import Tietotalo from "./tieto.png"
import TUAS from "./tuas.png"

export type Building = {
    id: number,
    name: string,
    imgUrl: string,
    description: string,
}

export const listOfBuildings: Building[] = [
    {
        id: 1,
        name: 'Kandidaattikeskus',
        imgUrl: Kandikeskus,
        description: "Alvar Aallon suunnittelema, vuonna 1964 valmistunut Kandidaattikeskus tunnettiin ennen Teknillisen korkeakoulun päärakennuksena, ja se on yhä Otaniemen kampuksen maamerkki."
    },
    {
        id: 2,
        name: 'Väre',
        imgUrl: Vare,
        description: "Käyttäjälähtöisyys ja kestävä kehitys edellä suunniteltu Väre kokoaa kaikki Taiteiden ja suunnittelun korkeakoulun laitokset saman katon alle."
    },
    {
        id: 3,
        name: 'Tietotekniikan talo',
        imgUrl: Tietotalo,
        description: "Tietotekniikan talo, tuttavallisemmin T-talo, on pääosin tietotekniikan ja sähkötekniikan opetuksen ja tutkimuksen käytössä."
    },
    {
        id: 4,
        name: 'TUAS -talo',
        imgUrl: TUAS,
        description: "Maarintie 8:ssa (entinen TUAS-talo) toimii Perustieteiden korkeakoulun ja Sähkötekniikan korkeakoulun yksiköitä."
    }
]

