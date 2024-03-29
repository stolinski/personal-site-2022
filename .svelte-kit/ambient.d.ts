
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const NVM_INC: string;
	export const SPACESHIP_VERSION: string;
	export const MANPATH: string;
	export const ZPLUG_LOG_LOAD_FAILURE: string;
	export const TERM_PROGRAM: string;
	export const npm_package_dependencies_gray_matter: string;
	export const NODE: string;
	export const NVM_CD_FLAGS: string;
	export const npm_package_devDependencies_typescript: string;
	export const INIT_CWD: string;
	export const TERM: string;
	export const SHELL: string;
	export const ZPLUG_LOADFILE: string;
	export const ZPLUG_LOG_LOAD_SUCCESS: string;
	export const HOMEBREW_REPOSITORY: string;
	export const TMPDIR: string;
	export const CONDA_PROMPT_MODIFIER: string;
	export const TERM_PROGRAM_VERSION: string;
	export const npm_package_engines_pnpm: string;
	export const FPATH: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_devDependencies_svelte_preprocess: string;
	export const npm_config_registry: string;
	export const PNPM_HOME: string;
	export const POWERLINE_COMMAND: string;
	export const ZSH: string;
	export const NVM_DIR: string;
	export const ZPLUG_USE_CACHE: string;
	export const USER: string;
	export const npm_package_description: string;
	export const ZPLUG_ERROR_LOG: string;
	export const COMMAND_MODE: string;
	export const npm_package_devDependencies__sveltejs_adapter_static: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const ZPLUG_PROTOCOL: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const WARP_IS_LOCAL_SHELL_SESSION: string;
	export const npm_package_dependencies_highlight_js: string;
	export const DENO_INSTALL: string;
	export const npm_package_devDependencies_vite_plugin_markdown: string;
	export const npm_execpath: string;
	export const PAGER: string;
	export const WARP_USE_SSH_WRAPPER: string;
	export const npm_package_dependencies_marked: string;
	export const npm_package_devDependencies_svelte: string;
	export const _ZPLUG_PREZTO: string;
	export const _ZPLUG_VERSION: string;
	export const PERIOD: string;
	export const LSCOLORS: string;
	export const _ZPLUG_AWKPATH: string;
	export const PATH: string;
	export const WARP_PS1: string;
	export const __CFBundleIdentifier: string;
	export const PWD: string;
	export const npm_command: string;
	export const npm_lifecycle_event: string;
	export const LANG: string;
	export const npm_package_name: string;
	export const NODE_PATH: string;
	export const npm_package_scripts_build: string;
	export const _ZPLUG_CONFIG_SUBSHELL: string;
	export const XPC_FLAGS: string;
	export const _ZPLUG_OHMYZSH: string;
	export const ZPLUG_BIN: string;
	export const npm_package_overrides_vite_plugin_markdown_vite: string;
	export const _ZPLUG_URL: string;
	export const npm_package_engines_node: string;
	export const npm_config_node_gyp: string;
	export const SPACESHIP_ROOT: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_package_version: string;
	export const ZPLUG_CACHE_DIR: string;
	export const SHLVL: string;
	export const HOME: string;
	export const npm_package_type: string;
	export const ZPLUG_REPOS: string;
	export const ZPLUG_THREADS: string;
	export const HOMEBREW_PREFIX: string;
	export const LESS: string;
	export const LOGNAME: string;
	export const npm_package_dependencies_vite: string;
	export const npm_lifecycle_script: string;
	export const SSH_SOCKET_DIR: string;
	export const NVM_BIN: string;
	export const ZPLUG_FILTER: string;
	export const ZPLUG_HOME: string;
	export const npm_config_user_agent: string;
	export const INFOPATH: string;
	export const HOMEBREW_CELLAR: string;
	export const npm_package_dependencies__sveltejs_adapter_cloudflare: string;
	export const CONDA_CHANGEPS1: string;
	export const POSH_THEME: string;
	export const ZPLUG_ROOT: string;
	export const COLORTERM: string;
	export const npm_node_execpath: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		NVM_INC: string;
		SPACESHIP_VERSION: string;
		MANPATH: string;
		ZPLUG_LOG_LOAD_FAILURE: string;
		TERM_PROGRAM: string;
		npm_package_dependencies_gray_matter: string;
		NODE: string;
		NVM_CD_FLAGS: string;
		npm_package_devDependencies_typescript: string;
		INIT_CWD: string;
		TERM: string;
		SHELL: string;
		ZPLUG_LOADFILE: string;
		ZPLUG_LOG_LOAD_SUCCESS: string;
		HOMEBREW_REPOSITORY: string;
		TMPDIR: string;
		CONDA_PROMPT_MODIFIER: string;
		TERM_PROGRAM_VERSION: string;
		npm_package_engines_pnpm: string;
		FPATH: string;
		npm_package_scripts_dev: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_devDependencies_svelte_preprocess: string;
		npm_config_registry: string;
		PNPM_HOME: string;
		POWERLINE_COMMAND: string;
		ZSH: string;
		NVM_DIR: string;
		ZPLUG_USE_CACHE: string;
		USER: string;
		npm_package_description: string;
		ZPLUG_ERROR_LOG: string;
		COMMAND_MODE: string;
		npm_package_devDependencies__sveltejs_adapter_static: string;
		PNPM_SCRIPT_SRC_DIR: string;
		ZPLUG_PROTOCOL: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		WARP_IS_LOCAL_SHELL_SESSION: string;
		npm_package_dependencies_highlight_js: string;
		DENO_INSTALL: string;
		npm_package_devDependencies_vite_plugin_markdown: string;
		npm_execpath: string;
		PAGER: string;
		WARP_USE_SSH_WRAPPER: string;
		npm_package_dependencies_marked: string;
		npm_package_devDependencies_svelte: string;
		_ZPLUG_PREZTO: string;
		_ZPLUG_VERSION: string;
		PERIOD: string;
		LSCOLORS: string;
		_ZPLUG_AWKPATH: string;
		PATH: string;
		WARP_PS1: string;
		__CFBundleIdentifier: string;
		PWD: string;
		npm_command: string;
		npm_lifecycle_event: string;
		LANG: string;
		npm_package_name: string;
		NODE_PATH: string;
		npm_package_scripts_build: string;
		_ZPLUG_CONFIG_SUBSHELL: string;
		XPC_FLAGS: string;
		_ZPLUG_OHMYZSH: string;
		ZPLUG_BIN: string;
		npm_package_overrides_vite_plugin_markdown_vite: string;
		_ZPLUG_URL: string;
		npm_package_engines_node: string;
		npm_config_node_gyp: string;
		SPACESHIP_ROOT: string;
		XPC_SERVICE_NAME: string;
		npm_package_version: string;
		ZPLUG_CACHE_DIR: string;
		SHLVL: string;
		HOME: string;
		npm_package_type: string;
		ZPLUG_REPOS: string;
		ZPLUG_THREADS: string;
		HOMEBREW_PREFIX: string;
		LESS: string;
		LOGNAME: string;
		npm_package_dependencies_vite: string;
		npm_lifecycle_script: string;
		SSH_SOCKET_DIR: string;
		NVM_BIN: string;
		ZPLUG_FILTER: string;
		ZPLUG_HOME: string;
		npm_config_user_agent: string;
		INFOPATH: string;
		HOMEBREW_CELLAR: string;
		npm_package_dependencies__sveltejs_adapter_cloudflare: string;
		CONDA_CHANGEPS1: string;
		POSH_THEME: string;
		ZPLUG_ROOT: string;
		COLORTERM: string;
		npm_node_execpath: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
