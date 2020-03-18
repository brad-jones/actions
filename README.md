# Brads Github Actions

![GitHub](https://img.shields.io/github/license/brad-jones/actions)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![KeepAChangelog](https://img.shields.io/badge/Keep%20A%20Changelog-1.0.0-%23E05735)](https://keepachangelog.com/)
[![NodeJs](https://img.shields.io/badge/node-%3E%3D%2012.16.1-green.svg)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/%3C/%3E-TypeScript-blue.svg)](https://www.typescriptlang.org/)

A collection of Github Actions. <https://github.com/features/actions>

## Cancel Redundant

This action will use the Github Workflow API to cancel all queued and in
progress jobs for the current branch or PR.

Influenced by:

- <https://github.com/styfle/cancel-workflow-action>
- <https://github.com/n1hility/cancel-previous-runs>

```yaml
jobs:
  init:
    if: "! contains(github.event.head_commit.message, '[skip ci]')"
    runs-on: ubuntu-latest
    steps:
      - uses: brad-jones/actions/cancel-redundant@v1.0.0
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
```

Now just make all your other jobs depend on `init` and they will a) be canceled
if a newer commit is pushed and b) they will never run if the ubiquitous
`[skip ci]` text in included in your commit message.

> _NOTE:_ The `GITHUB_TOKEN` provided for PRs will not have enough
> permissions to cancel jobs. So if you want this to work for PRs you
> would need to setup a second token that has the `repo` & `workflow` scopes.

## Search Replace File

This is a simple wrapper for the <https://www.npmjs.com/package/replace-in-file> module.

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: brad-jones/actions/search-replace-file@v1.0.0
        with:
          files: ./version.js
          from: /commit-sha-goes-here/
          to: ${{ github.sha }}
```

- `files`: should be a valid glob file path.
- `from`: is expected to be a Regular Expression
- `to`: the text to use as the replacement for all matches

## Setup Dart

Installs the dartlang SDK <https://dart.dev>

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: brad-jones/actions/setup-dart@v1.0.0
        with:
          version: 2.7.1
```

- `version`: is optional and will default to the latest stable release
