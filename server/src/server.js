const express = require('express');
const { Client } = require('pg');

const post = express();

const client = new Client({
	connectionString: "postgres://test:test@localhost:5432/poc"
});

client.connect();


// TODO: Seperate code into modules & add error handling
post.get('/', (req, res) => {
	client.query('SELECT * FROM posts.post LIMIT 50', function (err, result) {
		if (err) {
			console.error(err);
		} else {
			res.send(result.rows);
		}
	});
});

post.get('/:id', (req, res) => {
		client.query('SELECT * FROM posts.post WHERE posts.post.id = $1 LIMIT 5', [parseInt(req.params.id)], (err, result) => {
			if (err) {
				console.error(err.stack)
			} else {
				res.send(result.rows);
			}
		});
});

post.post('/', (req, res) => {
	if (req.body.title && req.body.body) {
		client.query('INSERT INTO posts.post VALUES (DEFAULT, $1, $2)', [req.body.title, req.body.body], (err) => {
			if (err) {
				console.error(err.stack)
			} else {
				res.send({message: 'Success'});
			}
		});
	} else {
		res.status(400).send();
	}
});


// Create an express server and a GraphQL endpoint
let app = express();
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
app.use(express.json());
app.use('/post', post);
app.listen(4000, () => console.log('Server Now Running On localhost:4000'));