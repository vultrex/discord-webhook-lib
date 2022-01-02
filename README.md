# discord-webhook-lib

discord-webhook-lib is a discord webhook library that allows you to send webhooks. 

This library supports Javascript and Typescript. 

## Format
```javascript
const w = new WebhookClient({
    id: "12345678789",
    token: "token",
    username: "", // optional
    avatar_url: "" // optional
})

const embed = new Embed()
    .setTitle('Cool Embed')
    .setDescription('Very nice')
    .setFooter({
        text: "Made by Vultrex Dev'"
    }) 

w.send('Hello', embed)
```

## Embeds
```javascript
const embed = new Embed()
.setTitle('Cool Embed')
.setDescription('Very nice')
.setFooter('Made by Vultrex Dev')

webhookclient.send('Super cool message', embed)
```

## Messages
```javascript
webhookclient.send('Hello')
```

## Install
```
npm i discord-webhook-lib
yarn add discord-webhook-lib
```