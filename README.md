# Vercel Webhook CLI
A simple command-line tool to manage and trigger Vercel deployment hooks.

The Vercel Webhook CLI is a lightweight command-line interface that allows you to manage and trigger Vercel deployment hooks easily. It provides a convenient way to set up, deploy, list, and delete your deployment hooks without leaving your terminal.

## Installation
```
npm install -g @eugabrielsilva/vercel-webhook-cli
```

> [!CAUTION]
> If you are using the official Vercel CLI tool, it might cause conflicts with the "vercel" command. Avoid using both simultaneously.

## Usage

Setup a deploy hook:
```
vercel setup <hookname> <url>
```

Trigger a deploy hook:
```
vercel deploy <hookname>
```

List available hooks:
```
vercel list
```

Delete a deploy hook:
```
vercel delete <hookname>
```

## Credits
Developed by [Gabriel Silva](https://gabrielsilva.dev.br).