// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require d3
//= require jquery3
//= require chosen-jquery
//= require popper
//= require bootstrap
//= require rails-ujs
//= require activestorage
//= require_tree .

document.addEventListener('DOMContentLoaded', () => {
    const years = document.querySelectorAll('.fa').forEach(node => {
        node.addEventListener('click', event => {
            const { currentTarget } = event;

            if (currentTarget.classList.contains('fa-angle-down')) {
                currentTarget.classList.remove('fa-angle-down');
                currentTarget.classList.add('fa-angle-up');
                currentTarget.parentNode.nextElementSibling.classList.remove('hidden')
            } else {
                currentTarget.classList.remove('fa-angle-up');
                currentTarget.classList.add('fa-angle-down');
                currentTarget.parentNode.nextElementSibling.classList.add('hidden')
            }
        });
    });
});