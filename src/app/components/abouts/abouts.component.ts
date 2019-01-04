import { Component, OnInit } from '@angular/core';
import { Ranomafana } from 'src/app/Shared/model/ranomafana';
import { Isalo } from 'src/app/Shared/model/isalo';
import { Tsingy } from 'src/app/Shared/model/tsingy';

@Component({
  selector: 'app-abouts',
  templateUrl: './abouts.component.html',
  styleUrls: ['./abouts.component.scss']
})
export class AboutsComponent implements OnInit {
 parc_ranomafana: Ranomafana = {
   title: 'Parc National de Ranomafana',
   description: 'Le parc national de Ranomafana est un parc malgache situé dans la province de Fianarantsoa.Il a été créé en 1911. Il a été inclus en 2007 dans le site du patrimoine mondial des forêts humides de l’Atsinanana...',
   modal_desc: 'nanana'
  }

 parc_isalo: Isalo = {
   title: 'Le parc d\'Isalo',
   description: 'Le parc national de l\'Isalo est une aire protégée de Madagascar, déclarée parc national en 19991. Il s\'agit d\'un massif montagneux de grès jurassique, s\’étendant sur près de cent kilomètres dans le sens nord sud, et entaillé de profonds canyons et hérissé de pics...',
   modal_desc: 'blabla'
  }

  tsingy_bemaraha: Tsingy = {
    title: 'Tsingy de Bemaraha',
    description: 'Le parc national Tsingy de Bemaraha est un parc national créé en 1997 situé dans le centre-ouest de Madagascar, à environ 300 kilomètres de Tananarive, dans la région de Melaky. Il recouvre 72 340 hectares au sud de la réserve naturelle intégrale du Tsingy de Bemaraha.',
    modal_desc: 'Classés site patrimoine mondial, les Tsingy du Bemaraha font partie du réseau des Parcs Nationaux de Madagascar géré par l’Angap. Il a été déclaré site du patrimoine mondial de l’Unesco en 1990.'
  }

  constructor() {}

  ngOnInit() {
  }

}
