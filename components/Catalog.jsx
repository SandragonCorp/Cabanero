import Image from "next/image"

let catalogSize = 10

const Card = () => {
    return (
        <div className="flex flex-wrap m-4">
            <div className="w-full p-4 outline outline-slate-50 rounded-sm shadow-xl ease-in-out duration-300">
                <a href="/" className="block relative h-32">
                    <Image className="object-cover object-center w-full h-full block p-1" src="/assets/shoe.jpg" fill style={{objectFit: "contain"}} />
                </a>
                <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">Brown Shoes</h2>
                    <p className="mt-1">₱1,500.00</p>
                </div>
            </div>
        </div>
    )
}

const Catalog = () => {
  return (
    <section className="text-gray-600">
        <div className="container px-5 py-10 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
                Array.from({length: catalogSize}).map((_, index) => (
                    <Card key={index} />
                ))
            }
        </div>
    </section>
  )
}

export default Catalog