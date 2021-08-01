import axios from 'axios'

export function searchCep(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json/`)
}
