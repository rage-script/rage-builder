function highlightEntity(selectedObject){
            const { min, max } = mp.game.gameplay.getModelDimensions( selectedObject.getModel() );
            const { position } = selectedObject;

            const TOP_1 = {x: position.x + min.x,y: position.y + min.y, z: position.z + max.z};
            const TOP_2 = {x: position.x + max.x,y: position.y + min.y, z: position.z + max.z};
            const TOP_3 = {x: position.x + max.x,y: position.y + max.y, z: position.z + max.z};
            const TOP_4 = {x: position.x + min.x,y: position.y + max.y, z: position.z + max.z};

            const BOTTOM_1 = {x: position.x + min.x,y: position.y + min.y, z: position.z + min.z};
            const BOTTOM_2 = {x: position.x + max.x,y: position.y + min.y, z: position.z + min.z};
            const BOTTOM_3 = {x: position.x + max.x,y: position.y + max.y, z: position.z + min.z};
            const BOTTOM_4 = {x: position.x + min.x,y: position.y + max.y, z: position.z + min.z};

            mp.game.graphics.drawLine(
                TOP_1.x, TOP_1.y, TOP_1.z,
                TOP_2.x, TOP_2.y, TOP_2.z,
                255, 0, 0, 255
            );

            mp.game.graphics.drawLine(
                TOP_2.x, TOP_2.y, TOP_2.z,
                TOP_3.x, TOP_3.y, TOP_3.z,
                255, 255, 0, 255
            );

            mp.game.graphics.drawLine(
                TOP_3.x, TOP_3.y, TOP_3.z,
                TOP_4.x, TOP_4.y, TOP_4.z,
                0, 255, 0, 255
            );

            mp.game.graphics.drawLine(
                TOP_4.x, TOP_4.y, TOP_4.z,
                TOP_1.x, TOP_1.y, TOP_1.z,
                0, 0, 255, 255
            );

            //

            mp.game.graphics.drawLine(
                BOTTOM_1.x, BOTTOM_1.y, BOTTOM_1.z,
                BOTTOM_2.x, BOTTOM_2.y, BOTTOM_2.z,
                255, 0, 0, 255
            );

            mp.game.graphics.drawLine(
                BOTTOM_2.x, BOTTOM_2.y, BOTTOM_2.z,
                BOTTOM_3.x, BOTTOM_3.y, BOTTOM_3.z,
                255, 255, 0, 255
            );

            mp.game.graphics.drawLine(
                BOTTOM_3.x, BOTTOM_3.y, BOTTOM_3.z,
                BOTTOM_4.x, BOTTOM_4.y, BOTTOM_4.z,
                0, 255, 0, 255
            );

            mp.game.graphics.drawLine(
                BOTTOM_4.x, BOTTOM_4.y, BOTTOM_4.z,
                BOTTOM_1.x, BOTTOM_1.y, BOTTOM_1.z,
                0, 0, 255, 255
            );

            //

            mp.game.graphics.drawLine(
                BOTTOM_1.x, BOTTOM_1.y, BOTTOM_1.z,
                TOP_1.x, TOP_1.y, TOP_1.z,
                255, 0, 0, 255
            );

            mp.game.graphics.drawLine(
                BOTTOM_2.x, BOTTOM_2.y, BOTTOM_2.z,
                TOP_2.x, TOP_2.y, TOP_2.z,
                255, 255, 0, 255
            );

            mp.game.graphics.drawLine(
                BOTTOM_3.x, BOTTOM_3.y, BOTTOM_3.z,
                TOP_3.x, TOP_3.y, TOP_3.z,
                0, 255, 0, 255
            );

            mp.game.graphics.drawLine(
                BOTTOM_4.x, BOTTOM_4.y, BOTTOM_4.z,
                TOP_4.x, TOP_4.y, TOP_4.z,
                0, 0, 255, 255
            );
}