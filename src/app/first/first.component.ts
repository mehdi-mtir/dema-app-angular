import { Component } from "@angular/core";


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

    mois = ["Janvier", "Février", "Mars", "Avril", "..."];
    pays = [
        {nom : "France", capitale : "Paris"},
        {nom : "Italie", capitale : "Rome"},
        {nom : "Espagne", capitale : "Madrid"},
        {nom : "Angleterre", capitale : "Londre"},
        {nom : "Belgique", capitale : "Bruxelle"},
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

}