### Start of albums database using sequelize.

To run this locally,

```
cp config/config.example.json config/config.json
```

Edit `config/config.json` to your local settings for development.

Then, run:

```
npm install
```

Optionally, run the following to create a database:

```
sequelize db:create
```

Then:

```
sequelize db:migrate
```

The following command will allow you to create an artist following prompts in the command line.

```
node create_artist.js
```
