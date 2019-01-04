import { Component, OnInit } from '@angular/core';
import { Ranomafana } from 'src/app/Shared/model/ranomafana';
import { Isalo } from 'src/app/Shared/model/isalo';
import { Tsingy } from '../../Shared/model/tsingy';

@Component({
  selector: 'app-abouts',
  templateUrl: './abouts.component.html',
  styleUrls: ['./abouts.component.scss']
})
export class AboutsComponent implements OnInit {
 parc_ranomafana: Ranomafana = {
   title: 'Parc de Ranomafana',
   description: 'Le parc national de Ranomafana est un parc malgache situé dans la province de Fianarantsoa.Il a été créé en 1911. Il a été inclus en 2007 dans le site du patrimoine mondial des forêts humides de l’Atsinanana...',
   modal_desc: 'Le parc couvre un peu plus de 41 600 ha de forêt tropicale humide. On y rencontre plusieurs espèces animales et végétales rares comme les lémuriens et le fanaloka.'
  }

 parc_isalo: Isalo = {
   title: 'Le parc d\'Isalo',
   description: 'Le parc national de l\'Isalo est une aire protégée de Madagascar, déclarée parc national en 1999. Il s\'agit d\'un massif montagneux de grès jurassique, s\’étendant sur près de cent kilomètres dans le sens...',
   modal_desc: 'Le parc national de l\'Isalo est une aire protégée de Madagascar, déclarée parc national en 1999. Il s\'agit d\'un massif montagneux de grès jurassique, s\’étendant sur près de cent kilomètres dans le sens nord sud, et entaillé de profonds canyons et hérissé de pics.... Le Parc National Terrestre Isalo est une représentation écologique unique au sein du réseau Parcs Nationaux Madagascar : un massif ruiniforme de grès continental datant du jurassique avec sa géomorphologie typique et sa végétation rupicole endémique (Aloès, Euphorbes, Pachypodes, Kalanchoe …) et la faune spécifique de cet habitat exceptionnel (reptiles de rochers dont la grande majorité sont endémiques).'
  }

  tsingy_bemaraha: Tsingy = {
    title: 'Tsingy de Bemaraha',
    description: 'Le parc national Tsingy de Bemaraha est un parc national créé en 1997 situé dans le centre-ouest de Madagascar, à environ 300 kilomètres de Tananarive, dans la région de Melaky. Il recouvre 72 340 hectares...',
    modal_desc: 'Le parc national Tsingy de Bemaraha est un parc national créé en 1997 situé dans le centre-ouest de Madagascar, à environ 300 kilomètres de Tananarive, dans la région de Melaky. Il recouvre 72 340 hectares au sud de la réserve naturelle intégrale du Tsingy de Bemaraha.. Classés site patrimoine mondial, les Tsingy du Bemaraha font partie du réseau des Parcs Nationaux de Madagascar géré par l’Angap. Il a été déclaré site du patrimoine mondial de l’Unesco en 1990.'
  }

  constructor() {}

  ngOnInit() {
  }

}
