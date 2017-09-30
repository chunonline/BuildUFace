/// <reference path="../libs/core/enums.d.ts" />
/// <reference path="../node_modules/pxt-core/typings/globals/bluebird/index.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts" />
declare namespace pxsim.turtle {
    /**
     * Moves the sprite forward
     * @param steps number of steps to move, eg: 1
     */
    function forwardAsync(steps: number): Promise<void>;
    /**
     * Moves the sprite forward
     * @param direction the direction to turn, eg: Direction.Left
     * @param angle degrees to turn, eg:90
     */
    function turnAsync(direction: Direction, angle: number): Promise<void>;
}
declare namespace pxsim.loops {
    /**
     * Repeats the code forever in the background. On each iteration, allows other code to run.
     * @param body the code to repeat
     */
    function forever(body: RefAction): void;
    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    function pauseAsync(ms: number): Promise<void>;
}
declare function logMsg(m: string): void;
declare namespace pxsim.console {
    /**
     * Print out message
     */
    function log(msg: string): void;
}
declare namespace pxsim {
    /**
     * A ghost on the screen.
     */
    class Sprite {
        /**
         * The X-coordiante
         */
        x: number;
        /**
        * The Y-coordiante
        */
        y: number;
        angle: number;
        constructor();
        private foobar();
        /**
         * Move the thing forward
         */
        forwardAsync(steps: number): Promise<void>;
    }
}
declare namespace pxsim.sprites {
    /**
     * Creates a new sprite
     */
    function createSprite(): Sprite;
}
declare namespace pxsim {
    /**
     * Gets the current 'board', eg. program state.
     */
    function board(): Board;
    /**
     * Represents the entire state of the executing program.
     * Do not store state anywhere else!
     */
    class Board extends pxsim.BaseBoard {
        element: SVGSVGElement;
        spriteElement: SVGCircleElement;
        sprite: Sprite;
        constructor();
        initAsync(msg: pxsim.SimulatorRunMessage): Promise<void>;
        updateView(): void;
    }
}
