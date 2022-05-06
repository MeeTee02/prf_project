import { Item } from './../models/item.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: Item[] = [
    new Item('1', 'Starscourge Greatsword', 2000, 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/starscourge-greatsword-weapon-elden-ring-wiki-guide.png'),
    new Item('2', 'Greatsword', 1000, 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/greatsword_colossal_swords_elden_ring_wiki_guide_200px.png'),
    new Item('3', 'Golden Halberd', 500, 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/golden_halberd_halberd_weapon_elden_ring_wiki_guide_200px.png')
  ]

  constructor() { }

  getItems() {
    return this.items;
  }
}
