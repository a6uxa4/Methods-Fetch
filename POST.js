fetch('Addres', {
	method: 'POST',
	headers: { 'Content-Type': 'application.json' },
	body: JSON.stringify({
		Email: '',
		Password: '',
	}),
})
