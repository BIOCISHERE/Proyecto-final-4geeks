import React, { useState } from "react";
import { AiFillStar, AiOutlineStar, AiOutlineHeart } from "react-icons/ai"

export const ProductosMujer = () => {
    const [isPolera, setIsPolera] = useState(false);
    const [isPoleron, setIsPoleron] = useState(false);
    const [isPantalon, setIsPantalon] = useState(false);
    const [isJeans, setIsJeans] = useState(false);
    const [isFalda, setIsFalda] = useState(false);
    const [isCartera, setIsCartera] = useState(false);
    const [isBilletera, setIsBilletera] = useState(false);
    const [isCinturon, setIsCinturon] = useState(false);
    const [isPañuelo, setIsPañuelo] = useState(false);
    const [isCalzon, setIsCalzon] = useState(false);
    const [isSosten, setIsSosten] = useState(false);
    const [isPanty, setIsPanty] = useState(false);

    const turnRating = (rating) => {
        if (rating === 1) {
            return (<><AiFillStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /></>)
        } else if (rating === 2) {
            return (<><AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /></>)
        } else if (rating === 3) {
            return (<><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar /></>)
        } else if (rating === 4) {
            return (<><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /></>)
        } else {
            return (<><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></>)
        }
    }

    const turnIntoClass = (item) => {
        if (item.category === "Polera") {
            return (isPolera ? ("col") : ("col d-none"))
        } else if (item.category === "Poleron") {
            return (isPoleron ? ("col") : ("col d-none"))
        } else if (item.category === "Pantalon") {
            return (isPantalon ? ("col") : ("col d-none"))
        } else if (item.category === "Jeans") {
            return (isJeans ? ("col") : ("col d-none"))
        } else if (item.category === "Falda") {
            return (isFalda ? ("col") : ("col d-none"))
        } else if (item.category === "Cartera") {
            return (isCartera ? ("col") : ("col d-none"))
        } else if (item.category === "Billetera") {
            return (isBilletera ? ("col") : ("col d-none"))
        } else if (item.category === "Cinturon") {
            return (isCinturon ? ("col") : ("col d-none"))
        } else if (item.category === "Pañuelo") {
            return (isPañuelo ? ("col") : ("col d-none"))
        } else if (item.category === "Calzon") {
            return (isCalzon ? ("col") : ("col d-none"))
        } else if (item.category === "Sosten") {
            return (isSosten ? ("col") : ("col d-none"))
        } else {
            return (isPanty ? ("col") : ("col d-none"))
        }
    }

    const categories = [
        {
            id: 1,
            title: "Poleras",
            price: 10000,
            category: "Polera",
            rating: 5,
            votes: 100,
            image: "https://cdnx.jumpseller.com/regalogo/image/12161042/resize/540/540?1615381586"
        },
        {
            id: 2,
            title: "Polerones",
            price: 20000,
            category: "Poleron",
            rating: 4,
            votes: 200,
            image: "https://home.ripley.cl/store/Attachment/WOP/D395/2000356149024/2000356149024-1.jpg"
        },
        {
            id: 3,
            title: "Pantalones",
            price: 15000,
            category: "Pantalon",
            rating: 5,
            votes: 300,
            image: "https://cdn.shopify.com/s/files/1/0569/5035/8174/products/12_20c7f44f-c57c-4617-a215-9b502d96b5d1.png?v=1637440963"
        },
        {
            id: 4,
            title: "Jeans",
            price: 18000,
            category: "Jeans",
            rating: 4,
            votes: 400,
            image: "https://cdn.shopify.com/s/files/1/0271/8715/0912/products/1671_0001_Capa0_6ce1a333-6a1c-4844-8a3f-b02bf79100c2_800x.jpg?v=1664290423"
        },
        {
            id: 5,
            title: "Faldas",
            price: 24000,
            category: "Falda",
            rating: 5,
            votes: 500,
            image: "https://falabella.scene7.com/is/image/Falabella/115485849_1?wid=800&hei=800&qlt=70"
        },
        {
            id: 6,
            title: "Carteras",
            price: 35000,
            category: "Cartera",
            rating: 4,
            votes: 600,
            image: "https://www.lujoschile.cl/wp-content/uploads/2021/02/75260CB4-B0BD-4AB0-AB9D-7C3CC7B614CE.jpeg"
        },
        {
            id: 7,
            title: "Billeteras",
            price: 25000,
            category: "Billetera",
            rating: 5,
            votes: 700,
            image: "https://cdnx.jumpseller.com/mood1/image/3975206/05DD25B2-D396-40D0-A1F4-CDF0CDDE1C58.png?1618054657"
        },
        {
            id: 8,
            title: "Cinturones",
            price: 17000,
            category: "Cinturon",
            rating: 4,
            votes: 800,
            image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/como-llevar-cinturon-1622103967.jpg?crop=0.502xw:1.00xh;0.251xw,0&resize=1200:*"
        },
        {
            id: 9,
            title: "Pañuelos",
            price: 14000,
            category: "Pañuelo",
            rating: 5,
            votes: 900,
            image: "https://cdn.shopify.com/s/files/1/0274/1511/7877/products/Sintitulo-35_1080x.jpg?v=1631150255"
        },
        {
            id: 10,
            title: "Calzones",
            price: 16000,
            category: "Calzon",
            rating: 4,
            votes: 1000,
            image: "https://hmchile.vtexassets.com/arquivos/ids/4693812/Pack-de-2-calzones-Brazilian---Rojo---H-M-CL.jpg?v=637977801272630000"
        },
        {
            id: 11,
            title: "Sostenes",
            price: 16000,
            category: "Sosten",
            rating: 5,
            votes: 1100,
            image: "https://home.ripley.cl/store/Attachment/WOP/D115/2000350459211/2000350459211-2.jpg"
        },
        {
            id: 12,
            title: "Pantys",
            price: 17000,
            category: "Panty",
            rating: 4,
            votes: 1200,
            image: "https://cdn.shopify.com/s/files/1/0538/1472/2755/products/panty-delgada-sin-dedos_1400x.webp?v=1679601336"
        }
    ];

    //const [productos, setProductos] = useState(categories)

    if (!isPolera && !isPoleron && !isPantalon && !isJeans && !isFalda && !isCartera && !isBilletera && !isCinturon && !isPañuelo && !isCalzon && !isSosten && !isPanty) {
        return (
            <div className="m-0 p-0 my-2">
                <div className="mx-4">
                    <div className="row">
                        <div className="col-3 border border-success">
                            <h3>Ropa Mujer</h3>
                            <h5>Tipo de prenda</h5>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="prenda1" onClick={() => setIsPolera(!isPolera)} />
                                <label className="form-check-label" htmlFor="prenda1">
                                    Poleras
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="prenda2" onClick={() => setIsPoleron(!isPoleron)} />
                                <label className="form-check-label" htmlFor="prenda2">
                                    Polerones/Sweaters
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="prenda3" onClick={() => setIsPantalon(!isPantalon)} />
                                <label className="form-check-label" htmlFor="prenda3">
                                    Pantalones
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="prenda4" onClick={() => setIsJeans(!isJeans)} />
                                <label className="form-check-label" htmlFor="prenda4">
                                    Jeans
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="prenda5" onClick={() => setIsFalda(!isFalda)} />
                                <label className="form-check-label" htmlFor="prenda5">
                                    Faldas/Vestidos
                                </label>
                            </div>
                            <h5>Accesorios</h5>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="accesorio1" onClick={() => setIsCartera(!isCartera)} />
                                <label className="form-check-label" htmlFor="accesorio1">
                                    Carteras
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="accesorio2" onClick={() => setIsBilletera(!isBilletera)} />
                                <label className="form-check-label" htmlFor="accesorio2">
                                    Billeteras
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="accesorio3" onClick={() => setIsCinturon(!isCinturon)} />
                                <label className="form-check-label" htmlFor="accesorio3">
                                    Cinturones
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="accesorio4" onClick={() => setIsPañuelo(!isPañuelo)} />
                                <label className="form-check-label" htmlFor="accesorio4">
                                    Pañuelos/Bufandas
                                </label>
                            </div>
                            <h5>Ropa interior</h5>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="interior1" onClick={() => setIsCalzon(!isCalzon)} />
                                <label className="form-check-label" htmlFor="interior1">
                                    Calzones
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="interior2" onClick={() => setIsSosten(!isSosten)} />
                                <label className="form-check-label" htmlFor="interior2">
                                    Sostenes
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="interior3" onClick={() => setIsPanty(!isPanty)} />
                                <label className="form-check-label" htmlFor="interior3">
                                    Pantys/Calcetines
                                </label>
                            </div>
                        </div>
                        <div className="col-9 border border-primary container-fluid">
                            <div className="row row-cols-xm-1 row-cols-sm-2 row-cols-md-3 g-4">
                                {categories.map((item, index) => (
                                    <div className="col" key={index}>
                                        <div className="card" style={{ width: "18rem" }}>
                                            <img src={item.image} className="card-img-top" />
                                            <div className="card-body">
                                                <h3 className="card-title">{item.title}</h3>
                                                <span className="card-text fs-4">${item.price}</span><span className="card-text float-end icon-color fs-4"><AiOutlineHeart /></span><br />
                                                <span className="card-text icon-color fs-4">{turnRating(item.rating, item.votes)}</span><span className="card-text fs-4">({item.votes})</span><br />
                                                <button type="button" className="btn btn-lg w-100 text-light button-color">Agreagar al carrito</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="m-0 p-0 my-2">
                <div className="mx-4">
                    <div className="row">
                        <div className="col-3 border border-success">
                            <h3>Ropa Mujer</h3>
                            <h5>Tipo de prenda</h5>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="prenda1" onClick={() => setIsPolera(!isPolera)} />
                                <label className="form-check-label" htmlFor="prenda1">
                                    Poleras
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="prenda2" onClick={() => setIsPoleron(!isPoleron)} />
                                <label className="form-check-label" htmlFor="prenda2">
                                    Polerones/Sweaters
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="prenda3" onClick={() => setIsPantalon(!isPantalon)} />
                                <label className="form-check-label" htmlFor="prenda3">
                                    Pantalones
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="prenda4" onClick={() => setIsJeans(!isJeans)} />
                                <label className="form-check-label" htmlFor="prenda4">
                                    Jeans
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="prenda5" onClick={() => setIsFalda(!isFalda)} />
                                <label className="form-check-label" htmlFor="prenda5">
                                    Faldas/Vestidos
                                </label>
                            </div>
                            <h5>Accesorios</h5>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="accesorio1" onClick={() => setIsCartera(!isCartera)} />
                                <label className="form-check-label" htmlFor="accesorio1">
                                    Carteras
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="accesorio2" onClick={() => setIsBilletera(!isBilletera)} />
                                <label className="form-check-label" htmlFor="accesorio2">
                                    Billeteras
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="accesorio3" onClick={() => setIsCinturon(!isCinturon)} />
                                <label className="form-check-label" htmlFor="accesorio3">
                                    Cinturones
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="accesorio4" onClick={() => setIsPañuelo(!isPañuelo)} />
                                <label className="form-check-label" htmlFor="accesorio4">
                                    Pañuelos/Bufandas
                                </label>
                            </div>
                            <h5>Ropa interior</h5>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="interior1" onClick={() => setIsCalzon(!isCalzon)} />
                                <label className="form-check-label" htmlFor="interior1">
                                    Calzones
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="interior2" onClick={() => setIsSosten(!isSosten)} />
                                <label className="form-check-label" htmlFor="interior2">
                                    Sostenes
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="interior3" onClick={() => setIsPanty(!isPanty)} />
                                <label className="form-check-label" htmlFor="interior3">
                                    Pantys/Calcetines
                                </label>
                            </div>
                        </div>
                        <div className="col-9 border border-primary container-fluid">
                            <div className="row row-cols-xm-1 row-cols-sm-2 row-cols-md-3 g-4">
                                {categories.map((item, index) => (
                                    <div className={turnIntoClass(item)} key={index}>
                                        <div className="card" style={{ width: "18rem" }}>
                                            <img src={item.image} className="card-img-top" />
                                            <div className="card-body">
                                                <h3 className="card-title">{item.title}</h3>
                                                <span className="card-text fs-4">${item.price}</span><span className="card-text float-end icon-color fs-4"><AiOutlineHeart /></span><br />
                                                <span className="card-text icon-color fs-4">{turnRating(item.rating, item.votes)}</span><span className="card-text fs-4">({item.votes})</span><br />
                                                <button type="button" className="btn btn-lg w-100 text-light button-color">Agreagar al carrito</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

