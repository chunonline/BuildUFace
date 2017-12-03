/**
 * Created by chendi on 2/12/17.
 */
namespace pxsim.gaming {
    /**
     * Drop ball catcher
     *
     * @param speed
     */
    //% weight=100
    //% blockId=onballdrop block="on ball drop speed %speed"
    export function onBallDrop(speed:Speed, handler: RefAction) {
        runtimeStateFactory().isOnDetecting = true;
        if (speed == Speed.Slow) {
            runtimeStateFactory().ballDropSpeed = Speed.Slow;
        }else if (speed == Speed.Medium) {
            runtimeStateFactory().ballDropSpeed = Speed.Medium;
        } else {
            runtimeStateFactory().ballDropSpeed = Speed.Fast;
        }
        runtimeStateFactory().gameShowBall();
        runtimeStateFactory().bus.listen("gameBallDrop", DefaultStatus.ValueHolder, handler);
    }

    /**
     * get ball x position
     */
    //% weight=100
    //% blockId=getBallXPos block="get ball horizontal position"
    export function getBallXPos():number {
        return runtimeStateFactory().sprite.x;
    }

    /**
     * get ball y position
     */
    //% weight=100
    //% blockId=getBallYPos block="get ball vertical position"
    export function getBallYPos():number {
        return runtimeStateFactory().sprite.y;
    }

    /**
     * check if ball hit mouth
     */
    //% weight=100
    //% blockId=ifBallHitMouth block="check ball hit mouth"
    export function ifBallHitMouth():boolean {
        let point1X:number = runtimeStateFactory().sprite.x;
        let point1Y:number = runtimeStateFactory().sprite.y;
        let point1:any = [point1X, point1Y];

        let point2X:number = runtimeStateFactory().getMouthXPosition();
        let point2Y:number = runtimeStateFactory().getMouthYPosition();
        let point2:any = [point2X, point2Y];
        let distance = runtimeStateFactory().getCartesianDistance(point1, point2);

        return distance < runtimeStateFactory().sprite.r * 2;
    }

    /**
     * check if ball hit nose
     */
    //% weight=100
    //% blockId=ifBallHitNose block="check ball hit nose"
    export function ifBallHitNose():boolean {
        let point1X:number = runtimeStateFactory().sprite.x;
        let point1Y:number = runtimeStateFactory().sprite.y;
        let point1:any = [point1X, point1Y];

        let point2X:number = runtimeStateFactory().getFaceCenterXPosition();
        let point2Y:number = runtimeStateFactory().getFaceCenterYPosition();
        let point2:any = [point2X, point2Y];
        let distance = runtimeStateFactory().getCartesianDistance(point1, point2);

        return distance < runtimeStateFactory().sprite.r * 2;
    }

    /**
     * Drop ball
     */
    //%
    export function dropBall() {
        if (runtimeStateFactory().gameBallOn == true) {
            runtimeStateFactory().dropBall();
            runtimeStateFactory().bus.queue("gameBallDrop", DefaultStatus.ValueHolder);
        }
    }
}
