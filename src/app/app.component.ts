import {Component, OnInit} from '@angular/core';
import {Ng6OdooRPCService} from '../../projects/angular6-odoo-jsonrpc/src/lib/angular6-odoo-jsonrpc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private odooRPC: Ng6OdooRPCService) {
  }

  ngOnInit() {
    this.odooRPC.init({
      odoo_server: 'https://odoo-server-example',
      http_auth: 'username:password' // optional
    });
    this.odooRPC.login('db_example', 'username', 'password').then(res => {
      console.log('login success');
    }).catch( err => {
      console.error('login failed', err);
    });
  }
}
