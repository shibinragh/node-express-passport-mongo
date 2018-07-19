alert(0);
var update = document.getElementById('logout');
update.addEventListener('click', function(){
    alert(1);
	fetch('signout', {
		method: 'get',
		headers: {'Content-Type': 'application/json'},
		/*body: JSON.stringify({
			name: 'Shibin',
			quote: 'Do before you die.'
		})*/
	}).then(res => {
		if(res.ok) return res.json()
	}).then(data => {
		console.log(data);
	})
});

 