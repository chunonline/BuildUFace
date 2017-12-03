/**
 * Created by chendi on 2/12/17.
 */
namespace pxsim.gaming {

    /**
     * drop balls
     *
     * @param number
     */
    //% weight=100
    //% blockId=dropBall block="drop ball %number"
    export function dropBall(number:BallNumber) {
        switch(number) {
            case BallNumber.One:
                runtimeStateFactory().numOfBalls = 1;
                break;

            case BallNumber.Two:
                runtimeStateFactory().numOfBalls = number;
                break;

            case BallNumber.Three:
                runtimeStateFactory().numOfBalls = number;
                break;

            case BallNumber.Four:
                runtimeStateFactory().numOfBalls = number;
                break;

            case BallNumber.Five:
                runtimeStateFactory().numOfBalls = number;
                break;
        }
    }

    /**
     * drop ball speed
     *
     * @param speed
     */
    //% weight=100
    //% blockId=dropBallSpeed block="drop ball speed %speed"
    export function dropBallSpeed(speed:Speed) {
        runtimeStateFactory().ballDropSpeed = Speed.Slow;
    }

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
    //% advanced=true
    export function getBallXPos():number {
        return runtimeStateFactory().sprite.x;
    }

    /**
     * get ball y position
     */
    //% weight=100
    //% blockId=getBallYPos block="get ball vertical position"
    //% advanced=true
    export function getBallYPos():number {
        return runtimeStateFactory().sprite.y;
    }

    /**
     * check if ball hit mouth
     */
    //% weight=100
    //% blockId=ifBallHitMouth block="is ball hitting mouth"
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
    //% blockId=ifBallHitNose block="is ball hitting nose"
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
