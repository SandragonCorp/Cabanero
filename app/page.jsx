import Promo from "@components/Promo"
import Panel from "@components/Panel"
import Catalog from "@components/Catalog"

const Home = () => {
    return (
        <div className="h-screen">
            <Promo />
            <Panel />
            <Catalog />
        </div>
    )
}

export default Home