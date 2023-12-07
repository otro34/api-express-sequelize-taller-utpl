import app from './app.js'
import sequelize from './config/database.js'

async function main() {
    try {

        await sequelize.sync({ force: false });

        app.listen(3001,() => {
            console.log('Escuchando en puerto 3001');
            }
        )

    } catch(err) {
        console.error(err);
    }
}

main();

