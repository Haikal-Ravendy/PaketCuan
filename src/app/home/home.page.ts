import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  features = [
    {id: 1, name: 'TOP UP', icon: 'assets/icons/topup.png',page: ''},
    {id: 2, name: 'WITHDRAW', icon: 'assets/icons/withdrawal.png',page: ''},
    {id: 3, name: 'SEND', icon: 'assets/icons/send.png',page: ''},
    {id: 4, name: 'PAY', icon: 'assets/icons/debit-card.png',page: ''}
  ];


  promos = [
    'https://bankmega.com/media/filer_public/b1/1c/b11caa26-309b-4ad4-a153-c30c19a6974d/makan_take-away-delivery.jpg',
    'https://bankmega.com/media/filer_public/ff/07/ff07828a-a5c2-4580-9cd3-0106aa69ff03/bm_asset_yes_-_food_medan_bmnew.jpg',
    'https://awsimages.detik.net.id/community/media/visual/2020/08/14/thumbnail-vod-2.png?w=700&q=90',
    'https://bankmega.com/media/filer_public/82/1b/821b1b8b-728d-4e79-93d3-42e0496a6ff8/mbmexquisite02-bmnew.jpg',
    'https://bankmega.com/media/filer_public/e3/a6/e3a6f139-abc8-494b-b5e4-93f4ba9ddc62/cbtlgen-bmnew.jpg',
    'https://bankmega.com/media/filer_public/f7/8e/f78e2f4a-e2f5-4917-8b17-40e1ef9ff95d/portodormancymakan_bm01.jpg'
  ];

  transactions = [
    {id: 1, name:'Coffe Bang', time: '3:00PM', amount: 'Rp.25.000',color:'danger'},
    {id: 2, name:'OYO Tendean', time: '2:00PM', amount: 'Rp.500.000',color:'success'},
    {id: 3, name:'Gaji Pak Guntur', time: '5:00PM', amount: 'Rp.20.000.000.000',color:'danger'},
    {id: 4, name:'Hedon', time: '7:00PM', amount: 'Rp.5.000.0000.000',color:'danger'},
    {id: 5, name:'PKS', time: '9:00PM', amount: 'Rp.5.000',color:'danger'},
  ];

  slideOpt = {
    slidesPerView: 1.25,
    autoplay: true,
  };

  constructor() {}

}
