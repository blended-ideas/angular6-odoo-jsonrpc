# Ng6OdooJsonrpc / Angular6-odoo-jsonrpc

This project is a port [angular5-odoorpc](https://github.com/agenterp/angular5-odoo-jsonrpc).

Project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## angular6-odoo-jsonrpc
JSON OdooRPC for Angular 6


### Installation

`npm install --save angular6-odoo-jsonrpc`

### Functions list

- `login(db, user, pass)`
- `logout(force)`
- `getDbList() // doesn't work with odoo >= 9.0`
- `searchRead(model, domain, fields)`
- `call(model, method, args, kwargs)`


### How to use

Import `OdooRPCService` into component

```typescript
import { Component } from '@angular/core';
import { Ng6OdooRPCService } from 'angular6-odoo-jsonrpc';
```

Add provider in app component

```typescript
@Component({
    ...
    providers: [Ng6OdooRPCService],
})
```

Initialize configuration in `constructor` of component

```typescript

export class OdooClientExampleComponent {

    constructor(private odooRPC: Ng6OdooRPCService) {
    }
  
    ngOnInit() {
        this.odooRPC.init({
            odoo_server: 'https://odoo-server-example',
            http_auth: 'username:password' // optional
        });
        this.odooRPC.login('db_example', 'username', 'password').then(res => {
            console.log('login success');}).catch( err => {
            console.error('login failed', err);
        });
    }
    ...
}

```

---
# For Developers

Fork the library.

Make required changes to /projects/angular6-odoo-jsonrpc

Run the command
`ng build --prod --project=angular6-odoo-jsonrpc`

Copy dist/angular6-odoo-jsonrpc to your project's node_modules and run your project.

##### PS: Pull requests are welcome provided they don't mess up current functionality.
