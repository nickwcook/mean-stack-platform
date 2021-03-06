import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLinkActive, CanActivate } from '@angular/router';
import { CanActivateRouteGuard } from '@app/can-activate-route.guard';

// Components
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';
import { ViewInvoiceComponent } from './view-invoice/view-invoice.component';
import { AllInvoicesComponent } from './all-invoices/all-invoices.component';

const routes: Routes = [
	{
		path: 'invoices/all',
		component: AllInvoicesComponent,
		canActivate: [CanActivateRouteGuard]
	},
	{
		path: 'invoices/new',
		component: NewInvoiceComponent,
		canActivate: [CanActivateRouteGuard]
	},
	{
		path: 'invoices/:id',
		component: ViewInvoiceComponent,
		canActivate: [CanActivateRouteGuard]
	}
]

@NgModule({

	imports: [
		RouterModule.forChild(routes)
	],

	exports: [
		RouterModule
	]

})

export class InvoicesRoutingModule {

}