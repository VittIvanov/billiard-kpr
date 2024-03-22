import Header from "./pages/Header/Header"
import Footer from "./pages/Footer/Footer"
import BilliardTable from "./pages/BilliardTable/BilliardTable"
import { AppStyles, InnerPageWrapper, PageContainer } from './App.styled'

const App = () => {
  return (<>
    <AppStyles />

    <PageContainer>
      <Header />
      <InnerPageWrapper>

        <BilliardTable />

      </InnerPageWrapper>
      <Footer />
    </PageContainer>
  </>
  )
}

export default App
