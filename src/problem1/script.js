 // first method
 var sum_to_n_a = function(n) {
     // your code here
     var sum = 0;
     for (var i = 0; i <= n; i++) {
         sum += i;
     }
     return sum;
 };
 // second method
 var sum_to_n_b = function(n) {
     // your code here
     return (1 + n) * n / 2;
 };

 // third method
 var sum_to_n_c = function(n) {
     // your code here
     return [...Array(n + 1).keys()].map(x => x).reduce((x, y) => x + y);
 };
 // test methods
 var test_result = function(_type) {
     if (_type === 1) {

         var n = Number($("#first_test").val());
         if (n < 1) {
             alert("Invalid N");
             return;
         }
         var sum = sum_to_n_a(n);
         $("#result_1").text(sum);
     } else if (_type === 2) {
         var n = Number($("#second_test").val());
         if (n < 1) {
             alert("Invalid N");
             return;
         }
         var sum = sum_to_n_b(n);
         $("#result_2").text(sum);
     } else if (_type === 3) {
         var n = Number($("#third_test").val());
         if (n < 1) {
             alert("Invalid N");
             return;
         }
         var sum = sum_to_n_c(n);
         $("#result_3").text(sum);
     } else {
         alert('Invalid method!');
         return;
     }
 }