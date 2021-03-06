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
!function(e){var t,i=e.$_$tracer,n=i.initialSpecId();QUnit.begin(function(e){i.started({total:e.totalTests})}),QUnit.done(function(){i.complete()}),QUnit.testStart(function(e){var r=QUnit.config;if(i.hasSpecFilter()){var s,o=e.name,a=e.name.replace(/\s\s*$/,""),l=[a];if(o!==a&&(s=[o]),e.module&&(l.unshift(e.module),s&&s.unshift(e.module)),!(i.specFilter(l)||s&&i.specFilter(s))){for(;r.queue.length;){var c=r.queue.shift();if(c&&~c.toString().indexOf(".finish();"))return}return}}r.current.run=function(){var e;r.current=this,delete r.current.stack,this.callbackStarted=(new Date).getTime();try{i.specSyncStart(),e=this.callback.call(this.testEnvironment,this.assert),this.resolvePromise(e),0===this.timeout&&0!==this.semaphore&&this.pushFailure("Test did not finish synchronously even though assert.timeout( 0 ) was used.")}catch(t){this.pushFailure(t.message,t.stack),r.blocking&&(this.semaphore=0,r.blocking=!1)}finally{i.specSyncEnd()}},t={success:!0,errors:[],id:++n,start:(new i._Date).getTime()},i.specStart(t.id,e.name)}),QUnit.log(function(e){if(!e.result){var n="",r=e.expected,s=e.actual;e.message&&(n+=e.message),t.success=!1,e.showDiff=!0;var o=i.setAssertionData(e,{message:n,stack:e.source});delete e.showDiff,t.errors.push(o),(!e.message||"undefined"!=typeof e.expected&&o.expected)&&(r||s)&&(o.message+=(e.message?"\n":"")+"Expected: "+i._inspect(r,3)+"\nActual: "+i._inspect(s,3))}}),QUnit.testDone(function(e){var n=i.specEnd(),r={id:t.id,timeRange:n,name:e.name,suite:e.module&&[e.module]||[],status:"executed",time:(new i._Date).getTime()-t.start,log:t.errors||[]};r.log.length||delete r.log,i.result(r)})}(window);