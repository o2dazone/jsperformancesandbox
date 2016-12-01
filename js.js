(function(){
  var obj1 = {
    properties: {
      selectionName: null,
      price: {
        format: 'fractional',
        odds: null
      },
      status: 'A',
      display: {
        displayed: 'Y',
        order: null
      },
      selectionScore: {
        home: null,
        away: null
      },
      band: {
        lower: 5,
        upper: 10
      },
      channels: 'ZWIP'
    },
    result: null
  };

  var obj2 = {
    properties: {
      selectionName: null,
      price: {
        format: 'fractional',
        odds: null
      },
      status: 'A',
      display: {
        displayed: 'Y',
        order: null
      },
      selectionScore: {
        home: null,
        away: null
      },
      band: {
        lower: null,
        upper: null
      },
      channels: 'ZWIP'
    },
    result: null
  };

  var lodash = _.noConflict();
  var underscore = _.noConflict()

  benchmark(function(){
    JSON.stringify(obj1) === JSON.stringify(obj2);
  }, 'JSON.Stringify');

  benchmark(function(){
    lodash.isEqual(obj1, obj2);
  }, 'Lodash');

  benchmark(function(){
    underscore.isEqual(obj1, obj2);
  }, 'Underscore');

}());