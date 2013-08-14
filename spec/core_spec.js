describe('core', function(){
    it('has version', function(){
        expect(zui.version).not.toBe(null);
    });
});

describe('canvas', function(){
    it('should generate svg canvas', function(){
        var canvas = zui.canvas();
        canvas.render();
        expect(d3.select("body svg")).not.toBeEmpty();
    });
});