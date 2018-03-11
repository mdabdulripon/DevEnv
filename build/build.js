import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';


process.env.NODE_ENV = 'production';
console.log(chalk.green('Generating minified bundle for production. this will take a moment.......'));


webpack(webpackConfig).run((err, stats) => {
    /**
     * ! This is enough to run the production code
     * */
    if (err) {
        console.log(chalk.red(err));
        return 1;
    }
    /**
     * ! To check the error message. [Optional]
     */
    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(chalk.red(error)));
    }

    if (jsonStats.hasWarning) {
        console.log(chalk.yellow('Webpack generating the following warning: '));
        jsonStats.warning.map(warning => console.log(chalk.yellow(warning)));
    }
    console.log(`Webpack stats: ${stats}`);

    /**
     * * If we got this far, the build succeeded.
     */
    console.log(chalk.green('Your application has been successfully build for production and written to the /dist folder.'))
    return 0;
});