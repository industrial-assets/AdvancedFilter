/*
 * AdvancedFilter Skeleton
 *
 * Copyright (c) 2014 Industrial Assets.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * @module EaselJS
 */

// namespace:
this.createjs = this.createjs || {};

(function() {
    "use strict";

    /**
     * Adds various mathematical and rendering features to the standard EaselJS Filter object.
     *
     * See {{#crossLink "Filter"}}{{/crossLink}} for an more information on applying filters.
     * @class AdvancedFilter
     * @extends Filter
     * @constructor
     **/
    var AdvancedFilter = function(args) {
        this.initialize(args);
    };
    var p = AdvancedFilter.prototype = new createjs.Filter();

    // constructor:
    /** @ignore */
    p.initialize = function(args) {
        this.args = args;

        // check if we need to add filter math functions
        if (!Math.clamp) {
            this.initMath();
        }

    };

    // public properties:

    p.args = {};



    // public methods:

    p.applyFilter = function(ctx, x, y, width, height, targetCtx, targetX, targetY) {
        targetCtx = targetCtx || ctx;
        if (targetX == null) {
            targetX = x;
        }
        if (targetY == null) {
            targetY = y;
        }
        try {
            var imageData = ctx.getImageData(x, y, width, height);
        } catch (e) {
            //if (!this.suppressCrossDomainErrors) throw new Error("unable to access local image data: " + e);
            return false;
        }


        // Rendering code goes here


        targetCtx.putImageData(imageData, targetX, targetY);
        return true;

    };


    /* Advanced math functions                             */
    /* -------------------------------------------------------  */

    p.initMath = function() {

        // Clamp
        Math.clamp = function(val, min, max) {
            return Math.max(min, Math.min(max, val));
        }

        // Lerp
        Math.lerp = function(v0, v1, t) {
            return (1 - t) * v0 + t * v1;
        }

        // float4
        Math.float4 = function(r, g, b, a) {
            this.r = r;
            this.g = g;
            this.b = b;
            this.a = a;
            return this;
        }

        Math.float4.prototype = {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            add: function(f1) {

                switch (typeof(f1)) {

                    case "float4":
                        this.r += f1.r;
                        this.g += f1.g;
                        this.b += f1.b;
                        this.a += f1.a;
                        break;

                    case "number":
                        this.r += f1;
                        this.g += f1;
                        this.b += f1;
                        this.a += f1;
                        break;

                }

                return this;

            },
            subtract: function(f1) {

                switch (typeof(f1)) {

                    case "float4":
                        this.r -= f1.r;
                        this.g -= f1.g;
                        this.b -= f1.b;
                        this.a -= f1.a;
                        break;

                    case "number":
                        this.r -= f1;
                        this.g -= f1;
                        this.b -= f1;
                        this.a -= f1;
                        break;

                }

                return this;

            },
            multiply: function(f1) {

                switch (typeof(f1)) {

                    case "float4":
                        this.r *= f1.r;
                        this.g *= f1.g;
                        this.b *= f1.b;
                        this.a *= f1.a;
                        break;

                    case "number":
                        this.r *= f1;
                        this.g *= f1;
                        this.b *= f1;
                        this.a *= f1;
                        break;

                }

                return this;

            },
            divide: function(f1) {

                switch (typeof(f1)) {

                    case "float4":
                        this.r /= f1.r;
                        this.g /= f1.g;
                        this.b /= f1.b;
                        this.a /= f1.a;
                        break;

                    case "number":
                        this.r /= f1;
                        this.g /= f1;
                        this.b /= f1;
                        this.a /= f1;
                        break;

                }

                return this;

            }
        }

    }

    /* -------------------------------------------------------  */




    /**
     * Returns a clone of this object.
     * @method clone
     * @return {AdvancedFilter}
     **/
    p.clone = function() {
        return new AdvancedFilter(this.args);
    };

    p.toString = function() {
        return "[AdvancedFilter]";
    };

    createjs.AdvancedFilter = AdvancedFilter;

}());