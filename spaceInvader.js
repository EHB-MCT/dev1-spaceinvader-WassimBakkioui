"use strict";

alert("Draw your space invader here");

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawBox();

function drawBox(){

    // rect black

    context.fillStyle = 'black';
    context.beginPath();
    context.rect(50,50,300,300);
    context.fill();

    // rect green
    
    context.fillStyle = '#00FF00';
    context.beginPath();
    context.rect(75,75,50,50);
    context.rect(275,75,50,50);
    context.rect(125,125,150,100);
    context.rect(275,225,50,100);
    context.rect(175,225,50,100);
    context.rect(75,225,50,100);
    context.fill();
}