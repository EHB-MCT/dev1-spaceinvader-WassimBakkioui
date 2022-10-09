"use strict";



let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawBox();

function drawBox(){

    // rect grey

    context.fillStyle = '#F0F0F0';
    context.beginPath();
    context.rect(50,50,300,300);
    context.fill();

    // rect green
    
    context.fillStyle = '#ADD15E';
    context.beginPath();
    context.rect(80,80,50,50);
    context.rect(280,80,50,50);
    context.rect(130,130,150,100);
    context.rect(280,230,50,100);
    context.rect(180,230,50,100);
    context.rect(80,230,50,100);
    context.fill();
}