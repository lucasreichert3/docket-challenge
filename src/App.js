import RequestDocuments from './views/request-documents/index'
import './styles/reset.scss'
import './styles/global.scss'
import { DocumentsProvider } from './contexts/documents'
import { FeedbackMessageProvider } from './contexts/feedback-message'

function App() {
  return (
    <div className="App">
      <FeedbackMessageProvider>
        <DocumentsProvider>
          <RequestDocuments />
        </DocumentsProvider>
      </FeedbackMessageProvider>
    </div>
  )
}

export default App
