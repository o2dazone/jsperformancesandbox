(function(){
  benchmark(function(){
    return 'hello';
  }, 'Benchmark 1');

  benchmark(function(){
    return 'world';
  }, 'Benchmark 2');
}());