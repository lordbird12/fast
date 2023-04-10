import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [
    // Redirect empty path to '/dashboards/project'
    { path: '', pathMatch: 'full', redirectTo: 'landing' },

    // Redirect signed in user to the '/dashboards/project'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'landing' },

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty',
        },
        children: [
            {
                path: 'confirmation-required',
                loadChildren: () =>
                    import(
                        'app/modules/auth/confirmation-required/confirmation-required.module'
                    ).then((m) => m.AuthConfirmationRequiredModule),
            },
            {
                path: 'forgot-password',
                loadChildren: () =>
                    import(
                        'app/modules/auth/forgot-password/forgot-password.module'
                    ).then((m) => m.AuthForgotPasswordModule),
            },
            {
                path: 'reset-password',
                loadChildren: () =>
                    import(
                        'app/modules/auth/reset-password/reset-password.module'
                    ).then((m) => m.AuthResetPasswordModule),
            },
            {
                path: 'sign-in',
                loadChildren: () =>
                    import('app/modules/auth/sign-in/sign-in.module').then(
                        (m) => m.AuthSignInModule
                    ),
            },
            {
                path: 'sign-up',
                loadChildren: () =>
                    import('app/modules/auth/sign-up/sign-up.module').then(
                        (m) => m.AuthSignUpModule
                    ),
            },
        ],
    },
    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty',
        },
        children: [
            {
                path: 'sign-out',
                loadChildren: () =>
                    import('app/modules/auth/sign-out/sign-out.module').then(
                        (m) => m.AuthSignOutModule
                    ),
            },
            {
                path: 'unlock-session',
                loadChildren: () =>
                    import(
                        'app/modules/auth/unlock-session/unlock-session.module'
                    ).then((m) => m.AuthUnlockSessionModule),
            },
        ],
    },

    // Admin routes
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            {
<<<<<<< HEAD
                path: 'landing',
                loadChildren: () =>
                    import('./modules/landing/landing.module').then(
                        (m) => m.LandingModule
                    ),
=======
                path: 'landing', loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule)
            },
            {
                path: 'home', loadChildren: () => import('./modules/admin/pages/home/home.module').then(m => m.HomeModule)
            },
            //permission
            {
                path: 'permission',
                canActivate: [], children: [
                    { path: '', loadChildren: () => import('app/modules/admin/administrator/permission/permission.module').then(m => m.PermissionModule) },
                    // { path: 'orders', loadChildren: () => import('app/modules/admin/marketing/orders/orders.module').then(m => m.OrdersModule) },
                    // { path: 'expand-store-list', loadChildren: () => import('app/modules/admin/marketing/orders/expand-store-list/expand-store-list.module').then(m => m.ExpandStoreModule) },
                    // {
                    //     path: 'data', children: [
                    //         { path: 'new-item-list-checking', loadChildren: () => import('app/modules/admin/marketing/new-item-list-checking/new-item-list-checking.module').then(m => m.NewItemListCheckingModule) },
                    //         { path: 'assets-list', loadChildren: () => import('app/modules/admin/marketing/assets-list/assets-list.module').then(m => m.AssetsListModule) },
                    //         { path: 'user', loadChildren: () => import('app/modules/admin/marketing/user/user.module').then(m => m.UserListModule) },
                    //         { path: 'store', loadChildren: () => import('app/modules/admin/marketing/store/store.module').then(m => m.StoreModule) },
                    //         { path: 'store-type', loadChildren: () => import('app/modules/admin/marketing/store-type/store-type.module').then(m => m.StoreTypeModule) },
                    //     ]
                    // },
                ]
            },
            //user
            {
                path: 'user',
                canActivate: [], children: [
                    { path: '', loadChildren: () => import('app/modules/admin/administrator/user/user.module').then(m => m.UserModule) },
                    // { path: 'create-user', loadChildren: () => import('app/modules/admin/g-admin/user/create-user/create-user.component').then(m => m.UserModule) },
                    // { path: 'orders', loadChildren: () => import('app/modules/admin/marketing/orders/orders.module').then(m => m.OrdersModule) },
                    // { path: 'expand-store-list', loadChildren: () => import('app/modules/admin/marketing/orders/expand-store-list/expand-store-list.module').then(m => m.ExpandStoreModule) },
                    // {
                    //     path: 'data', children: [
                    //         { path: 'new-item-list-checking', loadChildren: () => import('app/modules/admin/marketing/new-item-list-checking/new-item-list-checking.module').then(m => m.NewItemListCheckingModule) },
                    //         { path: 'assets-list', loadChildren: () => import('app/modules/admin/marketing/assets-list/assets-list.module').then(m => m.AssetsListModule) },
                    //         { path: 'user', loadChildren: () => import('app/modules/admin/marketing/user/user.module').then(m => m.UserListModule) },
                    //         { path: 'store', loadChildren: () => import('app/modules/admin/marketing/store/store.module').then(m => m.StoreModule) },
                    //         { path: 'store-type', loadChildren: () => import('app/modules/admin/marketing/store-type/store-type.module').then(m => m.StoreTypeModule) },
                    //     ]
                    // },
                ]
>>>>>>> a2c3955d2c4536e655870b1bb58ddaf5da1db342
            },

            {
<<<<<<< HEAD
                path: 'home',
                loadChildren: () =>
                    import('./modules/admin/administrator/banner/page.Module').then(
                        (m) => m.Module
                    ),
            },

            {
                path: 'website',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/website/page.module'
                            ).then((m) => m.Module),
                    },
                ],
            },

            {
                path: 'banner',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/banner/page.Module'
                            ).then((m) => m.Module),
                    },
                ],
            },

            {
                path: 'client',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/client/page.Module'
                            ).then((m) => m.Module),
                    },
                ],
            },


            {
                path: 'about',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/about/page.module'
                            ).then((m) => m.Module),
                    },
                ],
            },

            {
                path: 'thailife',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/thailife/page.Module'
                            ).then((m) => m.Module),
                    },
                ],
=======
                path: 'user_job',
                canActivate: [], children: [
                    { path: '', loadChildren: () => import('app/modules/admin/administrator/user_job/page.module').then(m => m.Module) },
                ]
            },

            {
                path: 'branch',
                canActivate: [], children: [
                    { path: '', loadChildren: () => import('app/modules/admin/administrator/branch/branch.module').then(m => m.BranchModule) },
                ]
>>>>>>> a2c3955d2c4536e655870b1bb58ddaf5da1db342
            },

            {
<<<<<<< HEAD
                path: 'mobileapp',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/mobileapp/page.module'
                            ).then((m) => m.Module),
                    },
                ],
=======
                path: 'department',
                canActivate: [], children: [
                    { path: '', loadChildren: () => import('app/modules/admin/administrator/department/department.module').then(m => m.DepartmentModule) },
                ]
>>>>>>> a2c3955d2c4536e655870b1bb58ddaf5da1db342
            },

            {
<<<<<<< HEAD
                path: 'buy',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/buy/page.Module'
                            ).then((m) => m.Module),
                    },
                ],
            },

            {
                path: 'statistic',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/statistic/page.Module'
                            ).then((m) => m.Module),
                    },
                ],
            },
            {
                path: 'where',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/where/page.module'
                            ).then((m) => m.Module),
                    },
                ],
            },
            {
                path: 'myfastcargo',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/myfastcargo/page.Module'
                            ).then((m) => m.Module),
                    },
                ],
            },
  

            {
                path: 'faq',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/faq/page.module'
                            ).then((m) => m.Module),
                    },
                ],
            },

            {
                path: 'review',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/review/page.Module'
                            ).then((m) => m.Module),
                    },
                ],
            },

            {
                path: 'location',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/location/page.Module'
                            ).then((m) => m.Module),
                    },
                ],
            },

            {
                path: 'main',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/main/page.Module'
                            ).then((m) => m.Module),
                    },
                ],
            },

            {
                path: 'branch',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/branch/page.Module'
                            ).then((m) => m.Module),
                    },
                ],
            },

            {
                path: 'step',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/step/page.Module'
                            ).then((m) => m.Module),
                    },
                ],
            },


            {
                path: 'services',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/services/page.Module'
                            ).then((m) => m.Module),
                    },
                ],
            },

            {
                path: 'gallery',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/gallery/page.Module'
                            ).then((m) => m.Module),
                    },
                ],
            },

            {
                path: 'video',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/video/page.Module'
                            ).then((m) => m.Module),
                    },
                ],
            },

            {
                path: 'contact',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/contact/page.Module'
                            ).then((m) => m.Module),
                    },
                ],
            },


            {
                path: 'announcement',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/announcement/page.Module'
                            ).then((m) => m.Module),
                    },
                ],
            },

            {
                path: 'users',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/user/user.module'
                            ).then((m) => m.UserModule),
                    },
                ],
            },

           
=======
                path: 'position',
                canActivate: [], children: [
                    { path: '', loadChildren: () => import('app/modules/admin/administrator/position/position.module').then(m => m.PositionModule) },
                ]
            },

            {
                path: 'logistic-services',
                canActivate: [], children: [
                    { path: '', loadChildren: () => import('app/modules/admin/administrator/logistic-services/page.module').then(m => m.Module) },
                ]
            },

            {
                path: 'scrap-services',
                canActivate: [], children: [
                    { path: '', loadChildren: () => import('app/modules/admin/administrator/scrap-services/page.module').then(m => m.Module) },
                ]
            },

            {
                path: 'purchase-services',
                canActivate: [], children: [
                    { path: '', loadChildren: () => import('app/modules/admin/administrator/purchase-services/page.module').then(m => m.Module) },
                ]
            },
           
            {
                path: 'vendor',
                canActivate: [], children: [
                    { path: '', loadChildren: () => import('app/modules/admin/administrator/vendor/page.module').then(m => m.Module) },
                ]
            },
        
            {
                path: 'logistic',
                canActivate: [], children: [
                    { path: '', loadChildren: () => import('app/modules/admin/modules/logistic/page.module').then(m => m.Module) },
                ]
            },

            {
                path: 'scrap',
                canActivate: [], children: [
                    { path: '', loadChildren: () => import('app/modules/admin/modules/scrap/page.module').then(m => m.Module) },
                ]
            },

            {
                path: 'purchase',
                canActivate: [], children: [
                    { path: '', loadChildren: () => import('app/modules/admin/modules/purchase/page.module').then(m => m.Module) },
                ]
            },

            {
                path: 'recruit',
                canActivate: [], children: [
                    { path: '', loadChildren: () => import('app/modules/admin/modules/recruit/page.module').then(m => m.Module) },
                ]
            },

            {
                path: 'office',
                canActivate: [], children: [
                    { path: '', loadChildren: () => import('app/modules/admin/modules/office/page.module').then(m => m.Module) },
                ]
            },


>>>>>>> a2c3955d2c4536e655870b1bb58ddaf5da1db342
            // 404 & Catch all
            {
                path: '404-not-found',
                pathMatch: 'full',
                loadChildren: () =>
                    import(
                        'app/modules/admin/pages/error/error-404/error-404.module'
                    ).then((m) => m.Error404Module),
            },
            { path: '**', redirectTo: '404-not-found' },
        ],
    },
];
