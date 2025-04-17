import './App.css'
import FormFields from './components/FormFields'
import { formFile } from './data/formFile'

function App() {

  return (
    <>
      <FormFields fieldsData={formFile} />
    </>
  )
}

export default App
