import { HeaderMenu } from '../header/HeaderMenu'
import { Container } from '@mantine/core'
import { FooterSocial } from '../footer/FooterSocial'
// import { LeadGrid } from './landing/LeadGrid'
import { UserCardImage } from '../../components/user/UserCardImage'
import { HeroBullets } from '../home/Home'

const Content = () => {
  return (
    <div className="flex flex-col min-h-screen">
     <HeaderMenu/>
      <Container fluid className="flex-1 w-full pt-5">
        <div className="h-full">
            <HeroBullets/>
        </div>
        <Container fluid className="flex justify-center mx-auto mt-10 w-full">
         <UserCardImage />
         </Container>
    </Container>
    <FooterSocial/>
   </div>
  )
}

export default Content
