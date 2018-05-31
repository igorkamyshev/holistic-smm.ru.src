import Head from 'next/head'

import Header from './header'
import Menu from './menu'
import Footer from './footer'


export default ({ title, description, keywords, children }) =>
    <React.Fragment>
        <Head>
            <title>{title ? `${title} | Holistic SMM Agency` : 'Holistic SMM Agency'}</title>

            {!!description && <meta name="description" content={description} />}
            {!!keywords && <meta name="keywords" content={keywords} />}
        </Head>

        <div id="wrapper">

            <Header />
            <Menu />

            <div id="main">
				<div class="inner">
                    {children}
                </div>
            </div>

            <Footer />
        </div>
    </React.Fragment>