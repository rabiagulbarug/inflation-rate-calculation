import database from '/assets/database/users.json';

export default function handler(req, res) {
    res.status(200).json({
        data: database,
    });
}