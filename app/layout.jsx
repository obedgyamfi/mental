import '@styles/globals.css';
import Nav from '@components/Nav';
import Mental from '@components/Mental';


export const metadata = {
    title: "Mental",
    description: "Mental arithmetic"
}

const RootLayout = () => {
  return (
    <html lang='en'>
        <body className='app main main-background'>
            <Nav />
            <Mental />
        </body>
    </html>
  )
}

export default RootLayout