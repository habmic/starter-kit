const express = require('express');
const bodyParse = require('body-parser');
const app = express();
const sql = require('seriate');


initDB();


app.get('/health-check', (req, res) => {
    res.status(200).json({ status: "I am alive! 2" });
});


const router = express.Router();

app.use(express.static('./public'));

router.use(bodyParse.json());
app.use('/api/v1', router);

require('./src/users/user.router')(router);

app.listen(8081, (err) => {
    if (err) {
        console.error(err);
        throw new err;
    } else {
        console.info('server is up');
    }
});

function initDB() {
    sql.setDefault({
        default: "default",
        user: "node4ever",
        password: "pb-node123",
        host: "node-course.chtl0xl7h64i.us-east-1.rds.amazonaws.com",
        database: "course"
    });

    var Sequelize = require('sequelize');
    var sequelize = new Sequelize('couse', 'node4ever', 'pb-node123', {
        host: 'course.cbyydzmmb2nq.eu-central-1.rds.amazonaws.com',
        dialect: 'mysql',
        define: {
            timestamps: false
        },
        pool: {
            max: 5,
            min: 1,
            idle: 10000
        },
    });

    const usersModel = sequelize.define('users', {
        id: { type: Sequelize.INTEGER, primaryKey: true },
        name: Sequelize.STRING
    }, {
        tableName: 'users'
    });

    const rolesModel = sequelize.define('roles', {
        id: { type: Sequelize.INTEGER, primaryKey: true },
        type: Sequelize.STRING
    }, {
        tableName: 'roles'
    });

    usersModel.belongsToMany(rolesModel, { through: 'user_role_mapping' });
    rolesModel.belongsToMany(usersModel, { through: 'user_role_mapping' });

    sequelize.sync().then(() => {
        usersModel.find({
            where: { name: 'alon' },
            include: [{
                model: rolesModel
            }]
        }).then((result) => {
            console.log('NAME: ' + result.name);
            console.log('ROLES: ' + result.roles.map(function (role) {
                return role.type;
            }));
        }).catch((err) => {
            console.error(err);
        })
    }).catch((err) => {
        console.error(err);
    });

}
