import database from '/assets/database/employees.json';

export default function handler(req, res) {
    res.status(200).json({
        data: database,
    });
}