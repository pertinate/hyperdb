import logger from "./bin/util/logger";
import setApp from './bin/util/www';

const app = setApp();
const port = process.env.PORT || 8090;

app.listen(port, () => {
    logger.debug(`Server Online - ${port}`);
});
