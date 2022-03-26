function visitLink(path) {
let myStorage = window.localStorage;
let countersStorage = myStorage.getItem('counters');
  if(countersStorage===null){
    myStorage.setItem('counters',JSON.stringify({Page1: 0,Page2: 0,Page3: 0}));
    countersStorage = myStorage.getItem('counters');
  }
let pages=JSON.parse(countersStorage);
pages[path]++;
myStorage.setItem('counters',JSON.stringify(pages));
}

function viewResults() {
	let page = localStorage.getItem('counters');
	let page1 = "";
	let page2 = "";
	let page3 = "";
	for (let i = 0; i < page.length; i++) {
		page1 = page[9];
		page2 = page[19];
		page3 = page[29];
	}
	let visitLink = document.getElementById('content');
	visitLink.insertAdjacentHTML('afterend', '<ul><li>You visited Page1 '+page1+'time(s)</li></ul>');
	visitLink.insertAdjacentHTML('afterend', '<ul><li>You visited Page2 '+page2+' time(s)</li></ul>');
	visitLink.insertAdjacentHTML('afterend', '<ul><li>You visited Page3 '+page3+'time(s)</li></ul>');
	delete localStorage.counters;
}
