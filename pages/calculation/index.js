const Calculation = () => {
    return (
        <div className="row">
            <div className="col-4">
                <div className="card">
                    <form className="form-control">
                        <div className="form-group">
                            <input type="text" placeholder="Ad Soyad"/>
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="E-posta"/>
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Maaş"/>
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Departman"/>
                        </div>
                        <button type="submit" className="button">Ekle</button>
                    </form>
                </div>
            </div>
            <div className="col-8">
                <div className="card col-md-8" style={{width:800}}>
                    <div className="card-header">
                        ABC ŞİRKETİ
                    </div>
                    <div className="card-body row">
                        <div className="col-md-5">
                            <table className="table">
                                <tr>
                                    <th>Ad Soyad</th>
                                    <th>E-posta</th>
                                    <th>Maaş</th>
                                    <th>Departman</th>
                                </tr>
                                <tr>
                                    <td>a</td>
                                    <td>c</td>
                                    <td>c</td>
                                    <td>c</td>
                                </tr>
                            </table>
                        </div>
                        <div className="col-md-3">
                            <input type="date"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}

export default Calculation;
