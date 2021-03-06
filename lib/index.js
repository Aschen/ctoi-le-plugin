/**
 * Plugins must be valid NodeJS require-able modules, usually shipped as a directory containing either:
 *  - an `index.js` file in its root directory,
 *    exporting a valid Javascript class exposing an `init` method, or
 *  - a well-formed `package.json` file in its root directory,
 *    specifying the path of the main require-able in the `main` field.
 *
 * To determine the Plugin name, Kuzzle looks for the `name` field
 * in the `package.json` file falling back to the plugin directory name otherwise.
 *
 * @see http://docs.kuzzle.io/plugins-reference/plugins-creation-prerequisites/
 */
class CtoiLePlugin {
  constructor () {
    this.context = null;

    this.hooks = {
      '*:*': 'ctoi_le_hook'
    };
  }

  init (ctoiLaConfig, ctoiLeContext) {
    this.context = ctoiLeContext;
  }

  ctoi_le_hook (ctoiLaRequest) {
    if (ctoiLaRequest.input && ctoiLaRequest.result) {
      ctoiLaRequest.result.message = `c'toi le ${ctoiLaRequest.input.controller} contrôleur`;
    }
  }

}

module.exports = CtoiLePlugin;
