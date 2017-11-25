pxsim.noRefCounting();
pxsim.enableFloatingPoint();


var _main___P1 = entryPoint = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    r0 = inline__P20;
    s.tmp_0 = r0;
    r0 = pxsim.loops.forever(s.tmp_0);
    s.tmp_1 = r0;
    r0 = s.tmp_0;
    r0 = s.tmp_1;
  case 1:
    return leave(s, r0)
  default: oops()
} } }
_main___P1.info = {"start":0,"length":0,"line":0,"column":0,"endLine":0,"endColumn":0,"fileName":"pxt-core.d.ts","functionName":"<main>"}
_main___P1.continuations = [  ]



var inline__P20  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;
while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    r0 = pxsim.numops.toBoolDecr(true);
    if (!r0) { step = 1; continue; }
    r0 = pxsim.detector.detectSentiment();
    r0 = pxsim.detector.detectMouthStatus();
    r0 = pxsim.detector.detectGender();
    { step = 2; continue; }
  case 1:
  case 2:
  case 3:
    return leave(s, r0)
  default: oops()
} } }
inline__P20.info = {"start":320,"length":138,"line":23,"column":14,"endLine":29,"endColumn":1,"fileName":"ns.ts","functionName":"inline"}


setupDebugger(1)
