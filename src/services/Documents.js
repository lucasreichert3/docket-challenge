import api from './Api'

export function getAll() {
  return api.get('/documents')
}

export function postNewDocument(doc) {
  return api.post('/documents', doc)
}
