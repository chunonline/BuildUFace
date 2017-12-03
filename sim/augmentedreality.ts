/**
 * Created by chendi on 2/12/17.
 */
namespace pxsim.augmentedReality {

    /**
     * Draw face outline
     */
    //% weight=90
    //% block="draw face outline" blockId="face_outline"
    export function drawFaceOutlineAsync() {
        return runtimeStateFactory().drawFaceOutlineAsync();
    }

    /**
     * Draw deformation
     */
    //% block="deform face %deform" blockId="face_deform"
    //% weight=50
    export function drawFaceDeformationAsync(deform: faceDeform) {
        switch (deform) {
            case faceDeform.unwell:
                return runtimeStateFactory().drawFaceDeformAsync([0, 0, 0, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

            case faceDeform.inca:
                return runtimeStateFactory().drawFaceDeformAsync([0, 0, -9, 0, -11, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0]);

            case faceDeform.cheery:
                return runtimeStateFactory().drawFaceDeformAsync([0, 0, -9, 9, -11, 0, 0, 0, 0, 0, 0, 0, -9, 0, 0, 0, 0, 0]);

            case faceDeform.dopey:
                return runtimeStateFactory().drawFaceDeformAsync([0, 0, 0, 0, 0, 0, 0, -11, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0]);

            case faceDeform.longface:
                return runtimeStateFactory().drawFaceDeformAsync( [0, 0, 0, 0, -15, 0, 0, -12, 0, 0, 0, 0, 0, 0, -7, 0, 0, 5]);

            case faceDeform.lucky:
                return runtimeStateFactory().drawFaceDeformAsync([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -4, 0, -6, 12, 0, 0]);

            case faceDeform.overcute:
                return runtimeStateFactory().drawFaceDeformAsync([0, 0, 0, 0, 16, 0, -14, 0, 0, 0, 0, 0, -7, 0, 0, 0, 0, 0]);

            case faceDeform.aloof:
                return runtimeStateFactory().drawFaceDeformAsync([0, 0, 0, 0, 0, 0, 0, -8, 0, 0, 0, 0, 0, 0, -2, 0, 0, 10]);

            default:
                return Promise.delay(100);
        }
    }

    /**
     * Add MASKS to faces
     */
    //% weight=90
    //% block="draw mask %mask" blockId="face_mask"
    export function drawMasksAsync(mask: maskType) {
        switch (mask) {
            case maskType.ironman:
                return runtimeStateFactory().drawFaceMasksAsync('ironman');

            case maskType.audrey:
                return runtimeStateFactory().drawFaceMasksAsync('audrey');

            case maskType.average:
                return runtimeStateFactory().drawFaceMasksAsync('average');

            case maskType.nicolas_cage:
                return runtimeStateFactory().drawFaceMasksAsync('cage2');

            case maskType.monalisa:
                return runtimeStateFactory().drawFaceMasksAsync('joconde');

            case maskType.sean_connery:
                return runtimeStateFactory().drawFaceMasksAsync('SeanConnery');

            case maskType.skull:
                return runtimeStateFactory().drawFaceMasksAsync('skull');

            default:
                return Promise.delay(100);
        }
    }

    /**
     * Face substitution
     */
    //% weight=90
    //% block="face substitution %face" blockId="face_sub"
    export function faceSubstitutionLoopAsync(face: faceSubType) {
        switch (face) {
            case faceSubType.average:
                return runtimeStateFactory().drawFaceSubstitutionAsync("sub-average");
            case faceSubType.terminator:
                return runtimeStateFactory().drawFaceSubstitutionAsync("sub-terminator");
            case faceSubType.walter:
                return runtimeStateFactory().drawFaceSubstitutionAsync("sub-walter");
            case faceSubType.clooney:
                return runtimeStateFactory().drawFaceSubstitutionAsync("sub-clooney");
            case faceSubType.bieber:
                return runtimeStateFactory().drawFaceSubstitutionAsync("sub-bieber");
            case faceSubType.kim:
                return runtimeStateFactory().drawFaceSubstitutionAsync("sub-kim");
            case faceSubType.rihanna:
                return runtimeStateFactory().drawFaceSubstitutionAsync("sub-rihanna");
            case faceSubType.audrey:
                return runtimeStateFactory().drawFaceSubstitutionAsync("sub-audrey");
            case faceSubType.bill:
                return runtimeStateFactory().drawFaceSubstitutionAsync("sub-bill");
            case faceSubType.connery:
                return runtimeStateFactory().drawFaceSubstitutionAsync("sub-connery");
            case faceSubType.cage:
                return runtimeStateFactory().drawFaceSubstitutionAsync("sub-cage");
            case faceSubType.queen:
                return runtimeStateFactory().drawFaceSubstitutionAsync("sub-queen");
            case faceSubType.obama:
                return runtimeStateFactory().drawFaceSubstitutionAsync("sub-obama");
            case faceSubType.chuck:
                return runtimeStateFactory().drawFaceSubstitutionAsync("sub-chuck");
            case faceSubType.monalisa:
                return runtimeStateFactory().drawFaceSubstitutionAsync("sub-monalisa");
            case faceSubType.scream:
                return runtimeStateFactory().drawFaceSubstitutionAsync("sub-scream");

            default:
                return Promise.delay(100);
        }

    }
}
