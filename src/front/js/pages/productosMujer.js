import React, { useState } from "react";

export const ProductosMujer = () => {
    const [isPolera, setIsPolera] = useState(false);
    const [isPoleron, setIsPoleron] = useState(false);
    const [isPantalon, setIsPantalon] = useState(false);
    const [isJeans, setIsJeans] = useState(false);
    const [isFalda, setIsFalda] = useState(false);

    return (
        <div className="m-0 p-0 mb-2">
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
                            <input className="form-check-input" type="checkbox" value="" id="accesorio1" />
                            <label className="form-check-label" htmlFor="accesorio1">
                                Carteras
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="accesorio2" />
                            <label className="form-check-label" htmlFor="accesorio2">
                                Billeteras
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="accesorio3" />
                            <label className="form-check-label" htmlFor="accesorio3">
                                Cinturones
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="accesorio4" />
                            <label className="form-check-label" htmlFor="accesorio4">
                                Pañuelos/Bufandas
                            </label>
                        </div>
                        <h5>Ropa interior</h5>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="interior1" />
                            <label className="form-check-label" htmlFor="interior1">
                                Calzones
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="interior2" />
                            <label className="form-check-label" htmlFor="interior2">
                                Sostenes
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="interior3" />
                            <label className="form-check-label" htmlFor="interior3">
                                Pantys/Calcetines
                            </label>
                        </div>
                    </div>
                    <div className="col-9 border border-primary container-fluid">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <div className="col">
                                <div className="card">
                                    <img src="https://cdn.shopify.com/s/files/1/0011/9783/4252/products/20_375a8763-f5d7-4184-a352-4523ef713733.jpg?v=1576267132" className="card-img-top img-fluid border border-dark" style={{width: "18rem", height: "22rem"}} />
                                    <div className="card-body">
                                        <h5 className="card-title">Poleras</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}