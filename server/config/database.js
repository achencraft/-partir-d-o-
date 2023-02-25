module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'lucas-lett.fr'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'D-ou-voit-on'),
      user: env('DATABASE_USERNAME', 'web'),
      password: env('DATABASE_PASSWORD', 'dkfUua)svBQ90aFh'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
