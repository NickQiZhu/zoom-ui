var zui = {
    version: '0.0.1'
};

zui.canvas = function () {
    var _that = {};

    _that.render = function () {
        var svg = d3.select(document.createElement('div'))
            .append('svg')
            .attr('width', '100%')
            .attr('height', '100%');

        return svg.node();
    };

    return _that;
};

zui.zoomable = function (parent) {
    var _that = {}, _parent = (parent instanceof d3.selection)?parent:d3.select(parent);

    _that.render = function () {
        var g = _parent.append('g');

        return  g;
    };

    return _that;
};
