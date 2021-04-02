/**
 * Author: Lev Angel
 * Website: https://rage-script.ru
 *
 * Copyright (C) 2021 Lev Angel - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the MIT license.
 */
const fs = require('fs');
let createdObjects = [];

module.exports = { reloadMaps };

mp.events.add('packagesLoaded', () =>
{
    reloadMaps();
});


function reloadMaps(excludeMapName = false){
    removeAllObjects();
    fs.readdir(__dirname, (err, files) => {
        files.forEach(fileName => {
            if( getExtension(fileName) != 'json') return;
            if( excludeMapName && fileName == excludeMapName + '.json') return;

            fs.readFile( __dirname + '/' + fileName, function(err,data){
                if(err){
                    return console.log('Map read error: ' + err);
                }

                loadMap( JSON.parse(data) );
            });
        });
    });
}

function removeAllObjects(){
    createdObjects.forEach( object => {
        object.destroy();
    });
    createdObjects = [];
}

function loadMap(data){
    data.elements.forEach( element => {
        if(element.type = 'object'){
            createdObjects.push( placeObject( element ) );
        }
    });
}

function placeObject(element){
    const { modelName, position, rotation } = element;
    return mp.objects.new(
        mp.joaat(modelName),
        position,
        {
            rotation: rotation
        }
    );
}

function getExtension(fileName){
    return fileName.split('.').pop();
}