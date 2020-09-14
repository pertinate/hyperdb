import { Signale, SignaleOptions } from 'signale';
import { name } from '../../../package.json';

const options: SignaleOptions = {
    disabled: false,
    interactive: false,
    logLevel: 'debug',
    scope: name,
    secrets: [],
    stream: process.stdout,
    types: {
        debug: {
            badge: '',
            color: 'green',
            label: '[LOG] >'
        },
        error: {
            badge: '',
            color: 'red',
            label: '[ERROR] >'
        },
        warn: {
            badge: '',
            color: 'yellow',
            label: '[WARN] >'
        }
    },
};

const logger = new Signale(options);

logger.config({ displayTimestamp: true });

export default logger;
