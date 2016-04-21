// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Cat from './cat';
const cats = [
  new Cat('Jenny', 'cat1.jpg'),
  new Cat('Joe', 'cat2.jpg'),
  new Cat('Fluffy', 'cat3.jpg')
];

function setCount($cat, count) {
  $cat.find('.cat-counter').html(count);
  return count;
}

function loadCatDetails(catId) {
  const cat = cats[catId];
  console.log('cat', cat);
  $('.info').hide();
  $('.cat-name').html(cat.name);
  $('#cat img').attr({
    'src': `images/${cat.image}`,
    'id': catId
  });
  $('#cat .cat-counter').html(cat.getCount());
  $('#cat').show();
}

function loadCats() {
  $('.info').show();
  $('.cat-links').html('');
  $.each(cats, (idx, cat) => {
    const el = `<li><a class="cat-link" id="${idx}">${cat.name}</a></li>`;
    $('.cat-links').append(el);
  });
}

$(() => {
  // build the sidebar list of cats
  loadCats(cats);

  // add events to the sidebar links
  $('.sidebar a').click((ev) => {
    const catId = ev.target.id;
    loadCatDetails(catId);
  });

  $('#cat img').click((ev) => {
    console.log(cats);
    const catId = ev.target.id;
    setCount($('#cat'), cats[catId].inc());
  });
});
