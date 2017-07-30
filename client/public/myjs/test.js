import '../mycss/common.less'; 
import '../mycss/ceshi.less'
import aas from './test2';


function test() {
	let a = 5;
	//	console.log(new Date('yyyy-mm-dd'));
	console.log(window);
}
let a = new Promise((res, rej)=>{});
console.log(a);
/*$('body').css({
	background: 'blue'
});*/
function conso(a) {
	console.log(a);
	console.log(a);
	let b = 5
}
$.ajax({
	url: '/api',
	type: 'GET',
	dataType: 'json',
	data: {param1: 'value1',param2: 'value2'},
})
.done(function() {
	console.log("success");
})
.fail(function() {
	console.log("error");
})
.always(function() {
	console.log("complete");
});
