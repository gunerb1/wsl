/*
 * Wallaby.js - v1.0.1001
 * https://wallabyjs.com
 * Copyright (c) 2014-2020 Wallaby.js - All Rights Reserved.
 *
 * This source code file is a part of Wallaby.js and is a proprietary (closed source) software.

 * IMPORTANT:
 * Wallaby.js is a tool made by software developers for software developers with passion and love for what we do.
 * Pirating the tool is not only illegal and just morally wrong,
 * it is also unfair to other fellow programmers who are using it legally,
 * and very harmful for the tool and its future.
 */
!function(e){var t=e.$_$tracer,i=jasmine.getEnv(),n=new JasmineReporter(t);i.addReporter(n),i.specFilter=function(e){return n.specFilter(e)},t.start(function(){i.execute()})}(window);