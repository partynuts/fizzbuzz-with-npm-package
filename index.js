const App = require('./src/app');
const app = App();

(async () => {
  const port = process.env.PORT || 3000;

  app.listen(port, () => console.log(`fizzbuzz using npm package running on PORT ${port}`));
})();

process.on('uncaughtException', handleException);
process.on('unhandledRejection', handleException);

function handleException(err) {
  console.error((new Date).toUTCString() + ' uncaughtException:', err.message);
  console.error(err.stack);
  process.exit(1);
}
