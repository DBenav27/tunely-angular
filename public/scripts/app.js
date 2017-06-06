angular
   .module('tunely', [])
   .controller('AlbumsIndexController', AlbumsIndexController);

function AlbumsIndexController() {
  var vm = this;
  vm.newAlbum = {};
  vm.albums = [];

 vm.albums = [
    {
      albumName: 'Coming Home',
      artistName: 'Leon Bridges'
    },
    {
      albumName: 'The Queen is Dead',
      artistName: 'The Smiths'
    },
    {
      albumName: 'Are We There',
      artistName: 'Sharon Van Etten'
    },
    {
      albumName: 'Darkside of the Moon',
      artistName: 'Pink Floyd'
    },
    {
      albumName: 'Lateralus',
      artistName: 'Tool'
    },
    {
      albumName: 'Play',
      artistName: 'Moby'
    },
    {
      albumName: 'Museum of Consciousness',
      artistName: 'Shpongle'
    },
    {
      albumName: 'Youth',
      artistName: 'Matisyahu'
    },
    {
      albumName: 'Band of Gypsys',
      artistName: 'Jimi Hendrix'
    },
  ];

 vm.newAlbum = {
   albumName: 'License to Ill',
   artistName: 'Beastie Boys'
  };
}
