const response = fetch('Address')

const result = response.json()

const Data = []

for (const key in result) {
	Data.push({
		Email: result[key].Email,
		Password: result[key].Password,
	})
}
