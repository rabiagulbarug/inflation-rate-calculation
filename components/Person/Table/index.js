import {Card, Table} from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";

const PersonItem = ({name, surname, mail, salary, department}) => {
    return (
        <tr>
            <td className="col-2">{name} {surname}</td>
            <td className="col-2">{mail}</td>
            <td className="col-2">{salary}</td>
            <td className="col-2">{department}</td>
        </tr>
    );
}

export const PersonTable = ({list}) => {
    return <Card className="shadow text-center border-0 h-100 w-auto">
        <CardHeader className="pb-5 mt-2 text-primary">
            <Card.Title>RGB ŞİRKET</Card.Title>
        </CardHeader>
        <Card.Body>
            <Table className="table table-bordered w-100">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Salary</th>
                    <th>Department</th>
                </tr>
                </thead>
                <tbody>
                {list.map(person => <PersonItem key={person.mail} {...person} />)}
                </tbody>
            </Table>
        </Card.Body>
    </Card>
}