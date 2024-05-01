import '@styles/global.css';

import Header from '@components/Header';

export const metadata = {
    title: "Cabanero",
    description: "Shoes for everyday life"
}

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <main className='h-screen'>
                    <Header />
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout