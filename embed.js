(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/BuildUFace/",
    "workerjs": "/BuildUFace/worker.js",
    "tdworkerjs": "/BuildUFace/tdworker.js",
    "monacoworkerjs": "/BuildUFace/monacoworker.js",
    "pxtVersion": "2.3.39",
    "pxtRelId": "",
    "pxtCdnUrl": "/BuildUFace/",
    "commitCdnUrl": "/BuildUFace/",
    "blobCdnUrl": "/BuildUFace/",
    "cdnUrl": "/BuildUFace/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "KAMEN",
    "simUrl": "/BuildUFace/simulator.html",
    "partsUrl": "/BuildUFace/siminstructions.html",
    "runUrl": "/BuildUFace/run.html",
    "docsUrl": "/BuildUFace/docs.html",
    "isStatic": true
};

    var scripts = [
        "/BuildUFace/highlight.js/highlight.pack.js",
        "/BuildUFace/bluebird.min.js",
        "/BuildUFace/typescript.js",
        "/BuildUFace/semantic.js",
        "/BuildUFace/marked/marked.min.js",
        "/BuildUFace/lzma/lzma_worker-min.js",
        "/BuildUFace/blockly/blockly_compressed.js",
        "/BuildUFace/blockly/blocks_compressed.js",
        "/BuildUFace/blockly/msg/js/en.js",
        "/BuildUFace/pxtlib.js",
        "/BuildUFace/pxtcompiler.js",
        "/BuildUFace/pxtblocks.js",
        "/BuildUFace/pxteditor.js",
        "/BuildUFace/pxtsim.js",
        "/BuildUFace/target.js",
        "/BuildUFace/pxtrunner.js"
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/BuildUFace/jquery.js")

    var pxtCallbacks = []

    window.ksRunnerReady = function(f) {
        if (pxtCallbacks == null) f()
        else pxtCallbacks.push(f)
    }

    window.ksRunnerWhenLoaded = function() {
        pxt.docs.requireHighlightJs = function() { return hljs; }
        pxt.setupWebConfig(pxtConfig || window.pxtWebConfig)
        pxt.runner.initCallbacks = pxtCallbacks
        pxtCallbacks.push(function() {
            pxtCallbacks = null
        })
        pxt.runner.init();
    }

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    })

} ())
