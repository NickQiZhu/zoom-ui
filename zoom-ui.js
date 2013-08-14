var zui = {
    version: '0.0.1'
};

zui.canvas = function(){
    var that = {};

    that.render = function(){
        d3.select('body')
            .append('svg')
            .attr('width', '100%')
            .attr('height', '100%');
    };

    return that;
};
