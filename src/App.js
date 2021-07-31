import RequestDocuments from './views/request-documents/index'
import './reset.scss'
import './global.scss'
import { DocumentsProvider } from './contexts/documents'

function App() {
  return (
    <div className="App">
      <DocumentsProvider>
        <RequestDocuments />
      </DocumentsProvider>
    </div>
  )
}

export default App
