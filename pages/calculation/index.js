import Layout from "../../components/layout";
import {useAuth} from "../../hooks/use-auth";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {PersonTable} from "../../components/Person/Table";
import employees from '../../assets/database/employees.json'

const Calculation = () => {
    const {user} = useAuth();
    const router = useRouter();

    useEffect(()=> {
        if(!user) {
            router.push('/login');
        }
    }, [user])

    return (
        <Layout>
            <div>
                <div className="row">
                    <div className="col-xs-6 col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <div className="employee-add">Çalışan Ekle</div>
                            </div>
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
                    <div className="col-xs-6 col-md-4">
                        <div className="card col-md-8" style={{width: 800}}>
                            <div className="card-header row">
                                <div className="col-md-5">Company name</div>
                                <div className="col-md-8">
                                    <input type="datetime-local" />
                                </div>
                            </div>
                            <div className="card-body row">
                                <PersonTable list={employees} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Calculation;
