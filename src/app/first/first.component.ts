import { Component } from "@angular/core";
import { Country } from "../model/country";


@Component({
    selector : 'app-first',
    templateUrl : './first.component.html'
   //template : '<h2>Hello from first component</h2>'
})
export class FirstComponent{
    title = "My First Component";
    description = "Premier composant créé manuellement pour la démonstration.";
    url1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png";
    url2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxp5zYhu3p_x2rXCk8asAdpQUeP2Hw_v1AsH8qv2rBDQ&s";
    selectedPays? : Country;

    mois = ["Janvier", "Février", "Mars", "Avril", "..."];
    pays = [
        new Country(
            1,
            "France",
            "Paris",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg/165px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg.png",
             "La France, en forme longue République française, est un État souverain transcontinental dont le territoire métropolitain s'étend en Europe de l'Ouest et dont le territoire ultramarin s'étend dans les océans Indien, Atlantique et Pacifique, ainsi qu'en Antarctique8 et en Amérique du Sud. "
        ),
        new Country(
            2,
            "Italie",
            "Rome",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/165px-Flag_of_Italy.svg.png", 
            "L'Italie ; en italien : Italia , en forme longue la République italienne, est un État souverain d'Europe du Sud. Son territoire comprend une partie continentale, une péninsule située au centre de la mer Méditerranée ainsi qu'une partie insulaire constituée par les deux plus grandes îles de cette mer, la Sicile et la Sardaigne, et d'autres îles plus petites. Elle est rattachée au reste du continent par le massif des Alpes"
        ),
        new Country(
            3,
            "Espagne",
            "Madrid",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/165px-Flag_of_Spain.svg.png",
             "L'Espagne, en forme longue le royaume d'Espagne (respectivement en espagnol : España Écouter et Reino de España), est un État souverain transcontinental d'Europe du Sud-Ouest, qui occupe la plus grande partie de la péninsule Ibérique. Le pays a une superficie de 504 030 km2 et une population de 47 millions d'habitants."
        ),
        new Country(
            4,
            "Angleterre",
            "Londre",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/195px-Flag_of_England.svg.png", 
            "L'Angleterre (en anglais : England /ˈɪŋɡlənd/ Écouter ; en cornique : Pow Sows) est une nation constitutive du Royaume-Uni. Elle est entourée par le pays de Galles à l'ouest et l'Écosse au nord, et par la mer d'Irlande au nord-ouest, la mer Celtique au sud-ouest, la mer du Nord à l'est, et la Manche au sud, qui la sépare de l'Europe continentale. Son territoire couvre cinq-huitièmes de l'île de Grande-Bretagne, qui est située dans l'Atlantique Nord, et il comprend plus de cent petites îles, comme celles de Scilly et de Wight."
        ),
        new Country(
            5, 
            "Belgique", 
            "Bruxelle", 
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/165px-Flag_of_Belgium.svg.png", 
            "La Belgique (/bɛlʒik/b Écouter ; en néerlandais : België /ˈbɛlɣiǝ/c Écouter ; en allemand : Belgien /ˈbɛlgiən/d Écouter), en forme longue le royaume de Belgiquee, est un pays d’Europe de l'Ouest, bordé par la France, les Pays-Bas, l’Allemagne, le Luxembourg et la mer du Nord. "
        )
    ]

    image = {
        //url : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png",
        url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxp5zYhu3p_x2rXCk8asAdpQUeP2Hw_v1AsH8qv2rBDQ&s",
        alt : "Logo Angular"
    }

    changeLogo(){
        //console.log("Button clicked!");
        this.image.url === this.url1? this.image.url = this.url2 : this.image.url = this.url1;
        /*
        if(this.image.url === this.url1)
            this.image.url = this.url2
        else
            this.image.url = this.url1 
        */
    }

    showCard(p : Country){
        this.selectedPays = p;
    }

    hideCard(){
        this.selectedPays = undefined;
    }

}