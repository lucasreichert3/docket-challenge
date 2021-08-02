import RequestDocuments from './views/request-documents/index'
import './styles/reset.scss'
import './styles/global.scss'
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
