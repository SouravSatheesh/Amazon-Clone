import axios from "axios"

const instance =axios.create({
	baseURL: 'https://amazon-backend-12.herokuapp.com/'
})

export default instance;