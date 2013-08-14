describe('core', function () {
    it('has version', function () {
        expect(zui.version).not.toBe(null);
    });
});


describe('canvas', function () {
    var canvas;

    beforeEach(function () {
        canvas = zui.canvas();
        canvas.render();
    });

    it('should generate svg canvas', function () {
        expect(svg()).not.toBeEmpty();
    });

    it('should max svg width and height', function () {
        expect(svg().attr("width")).toBe("100%");
        expect(svg().attr("height")).toBe("100%");
    });

    function svg() {
        return d3.select("body svg");
    }
});