describe('core', function () {
    it('has version', function () {
        expect(zui.version).not.toBe(null);
    });
});


describe('canvas', function () {
    var canvas;

    beforeEach(function () {
        canvas = d3.select(zui.canvas().render());
    });

    it('should generate svg canvas', function () {
        expect(canvas).not.toBeEmpty();
    });

    it('should max svg width and height', function () {
        expect(canvas.attr("width")).toBe("100%");
        expect(canvas.attr("height")).toBe("100%");
    });
});

describe('zoomable', function () {
    var canvas;

    beforeEach(function () {
        canvas = d3.select(zui.canvas().render());
    });

    it('should generate svg:g in parent canvas', function () {
        zui.zoomable(canvas).render();
        expect(canvas.select("g")).not.toBeEmpty();
    });

    it('should generate svg:g in parent element', function () {
        zui.zoomable(canvas.node()).render();
        expect(canvas.select("g")).not.toBeEmpty();
    });
});