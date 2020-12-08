'use strict';

{
const tabLabels = document.querySelectorAll('.tab__label li a');
const tabContents = document.querySelectorAll('.tab__content');

// forEach for-of
tabLabels.forEach( clickedLabel => {
  clickedLabel.addEventListener('click', e => {
    e.preventDefault();//aタグは初期設定のままだとリンクに飛んでしまうそれの対策

    tabLabels.forEach(label => {
      label.classList.remove('active');
    });
    
    clickedLabel.classList.add('active');

    tabContents.forEach(content => {
      content.classList.remove('active');
    });

  document.getElementById(clickedLabel.dataset.id).classList.add('active');

  })
});

}