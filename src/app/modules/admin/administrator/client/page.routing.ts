import { Route } from '@angular/router';
<<<<<<< HEAD
// import { CreateUserComponent } from './create-user/create-user.component';
// import { UserListComponent } from './list/list.component';
=======
>>>>>>> a2c3955d2c4536e655870b1bb58ddaf5da1db342
import { PageComponent } from './page.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
<<<<<<< HEAD
// import { AssetTypeResolver, PermissionProductsResolver } from './user.resolvers';

=======
import { PrintComponent } from './print/print.component';
>>>>>>> a2c3955d2c4536e655870b1bb58ddaf5da1db342

export const pageRoute: Route[] = [
    {
        path: '',
        component: PageComponent,
        children: [
            {
                path: 'list',
                component: ListComponent,
<<<<<<< HEAD
                // resolve: {
                //     products: PermissionProductsResolver,

                // }
=======
>>>>>>> a2c3955d2c4536e655870b1bb58ddaf5da1db342
            },
            {
                path: 'new',
                component: NewComponent,
<<<<<<< HEAD
                // resolve: {
                //     products: PermissionProductsResolver,

                // }
=======
>>>>>>> a2c3955d2c4536e655870b1bb58ddaf5da1db342
            },
            {
                path: 'edit/:id',
                component: EditComponent,
<<<<<<< HEAD
                // resolve: {
                //     products: PermissionProductsResolver,

                // }
            },


        ]

        /*children : [
            {
                path     : '',
                component: ContactsListComponent,
                resolve  : {
                    tasks    : ContactsResolver,
                    countries: ContactsCountriesResolver
                },
                children : [
                    {
                        path         : ':id',
                        component    : ContactsDetailsComponent,
                        resolve      : {
                            task     : ContactsContactResolver,
                            countries: ContactsCountriesResolver
                        },
                        canDeactivate: [CanDeactivateContactsDetails]
                    }
                ]
            }
        ]*/
    }
=======
            },
            {
                path: 'print/:id',
                component: PrintComponent,
            },
        ],
    },
>>>>>>> a2c3955d2c4536e655870b1bb58ddaf5da1db342
];
