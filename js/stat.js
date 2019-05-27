'use strict';

var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 200;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

var renderCloud = function (ctx, x, y, color) {
    ctx. fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
   renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
   renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

   ctx.fillStyle = '#000';
   ctx.fillText('Вы', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * 0);
   ctx.fillRect( CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP, barWidth, BAR_HEIGHT);

   ctx.fillText('Иван', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * 1);
   ctx.fillRect(110, 60, 430, 20);

   ctx.fillText('Юлия', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * 2);
   ctx.fillRect(110, 60, 430, 20);
}