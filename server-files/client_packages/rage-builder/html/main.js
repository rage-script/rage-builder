/**
 * Author: Lev Angel
 * Website: https://rage-script.ru
 *
 * Copyright (C) 2021 Lev Angel - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the MIT license.
 */
let mapElements = [];
let mapsList = [];

let pagination = new Pagination(100);
let elementsList = new DefaultList(pagination);

function defaultList(type){

    if(type == 'objects'){

        elementsList.update(
            'Select object',
            window.objects,
            (elementId, elementName) => {
                mp.events.call('client:objectPreview', elementName);
            },
            () => {
                mp.events.call('client:objectSelected', elementsList.getCurrent());
            }

        );

    } else if( type == 'mapElements') {

        elementsList.update(
            'Elements for this map',
            mapElements,
            (elementId, elementName) => {
                mp.events.call('client:elementFocus', elementId);
            },
            () => {
                // TODO
            }

        );
    } else if( type == 'maps') {

        elementsList.update(
            'Select Map to open',
            mapsList,
            (elementId, elementName) => {

            },
            () => {
                mp.events.call('client:requestMapOpen', elementsList.getCurrent());
            }

        );

    }

    elementsList.show();
}

mp.events.add("cef:clearMapsList", () => {
    mapsList = [];
});

mp.events.add("cef:addMapsListItem", (mapName) => {
    mapsList.push(mapName);
});

mp.events.add("cef:setCursorVisible", (isVisible) => {
    mp.invoke('focus', isVisible);
});

mp.events.add("cef:showNewMapNameDialog", () => {
    $('#dialog-new-map-name').modal('show');
});

mp.events.add("cef:showNewMapIgnoreUnsavedDialog", () => {
    $('#dialog-new-map-ignore-unsaved').modal('show');
});


function exitMapEditor(){
    mp.events.call('client:requestExit', true);
    mapElements = [];
    $('#dialog-exit-editor').modal('hide');
}

function forceNewMap(){
    mp.events.call('client:requestNewMap', true);
    mapElements = [];
    $('#dialog-new-map-ignore-unsaved').modal('hide');
}

function addMapElement(id, elementModel){
    mapElements[id] = elementModel;
}

function deleteMapElement(id){
    mapElements.splice(id, 1);
}

$( "#form-new-map-name" ).submit(function( event ) {
    const name = $('#new-map-name').val();
    $('#dialog-new-map-name').modal('hide');
    mp.events.call('client:requestMapSave', name);
    event.preventDefault();
});


$("#search-form").submit(function( event ) {
    elementsList.search( $('#search-term').val().toLowerCase() );
    event.preventDefault();
});


mp.events.add("cef:showObjectDeleteDialog", () => {
    $('#dialog-object-delete-confirm').modal('show');
});

function confirmObjectDelete(){
    $('#dialog-object-delete-confirm').modal('hide');
    mp.events.call('client:confirmObjectDelete', true);
}