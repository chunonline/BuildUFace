(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/Microsoft_MakeCode/",
    "workerjs": "/Microsoft_MakeCode/worker.js",
    "tdworkerjs": "/Microsoft_MakeCode/tdworker.js",
    "monacoworkerjs": "/Microsoft_MakeCode/monacoworker.js",
    "pxtVersion": "2.3.39",
    "pxtRelId": "",
    "pxtCdnUrl": "/Microsoft_MakeCode/",
    "commitCdnUrl": "/Microsoft_MakeCode/",
    "blobCdnUrl": "/Microsoft_MakeCode/",
    "cdnUrl": "/Microsoft_MakeCode/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "KAMEN",
    "simUrl": "/Microsoft_MakeCode/simulator.html",
    "partsUrl": "/Microsoft_MakeCode/siminstructions.html",
    "runUrl": "/Microsoft_MakeCode/run.html",
    "docsUrl": "/Microsoft_MakeCode/docs.html",
    "isStatic": true
};

    var scripts = [
        "/Microsoft_MakeCode/highlight.js/highlight.pack.js",
        "/Microsoft_MakeCode/bluebird.min.js",
        "/Microsoft_MakeCode/typescript.js",
        "/Microsoft_MakeCode/semantic.js",
        "/Microsoft_MakeCode/marked/marked.min.js",
        "/Microsoft_MakeCode/lzma/lzma_worker-min.js",
        "/Microsoft_MakeCode/blockly/blockly_compressed.js",
        "/Microsoft_MakeCode/blockly/blocks_compressed.js",
        "/Microsoft_MakeCode/blockly/msg/js/en.js",
        "/Microsoft_MakeCode/pxtlib.js",
        "/Microsoft_MakeCode/pxtcompiler.js",
        "/Microsoft_MakeCode/pxtblocks.js",
        "/Microsoft_MakeCode/pxteditor.js",
        "/Microsoft_MakeCode/pxtsim.js",
        "/Microsoft_MakeCode/target.js",
        "/Microsoft_MakeCode/pxtrunner.js"
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/Microsoft_MakeCode/jquery.js")

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
