import Layout from "../../components/layout";
import {useAuth} from "../../hooks/use-auth";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {PersonTable} from "../../components/Person/Table";
import employees from '../../assets/database/employees.json'
import AddEmployee from "../../components/AddEmployee";
import {Card} from "react-bootstrap";

const Calculation = () => {
    const {user} = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push('/login');
        }
    }, [user])

    return (
        <Layout>
            <div>
                <div className="row">
                    <div className="col-xs-6 col-md-4">
                        <AddEmployee/>
                    </div>
                    <div className="col-xs-6 col-md-8">
                        <PersonTable list={employees}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
        ;
}

export default Calculation;
