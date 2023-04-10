/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';
import { AuthService } from 'app/core/auth/auth.service';

export const defaultNavigation: FuseNavigationItem[] = [
    {
<<<<<<< HEAD
        title: 'ผู้ดูแลระบบ',
        subtitle: 'เมนูหลักการใช้งานสำหรับผู้ดูแลระบบ',
=======
        id: 'administrator',
        title: 'Administrator',
        subtitle: 'เมนูสำหรับผู้ดูแลระบบใช้งาน',
>>>>>>> a2c3955d2c4536e655870b1bb58ddaf5da1db342
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
<<<<<<< HEAD
                title: 'จัดการ SalePage',
                type: 'basic',
                icon: 'heroicons_outline:cube',
                link: '/website/list',
            },
            {
                title: 'จัดการหน้าเว็บเพจ',
                type: 'collapsable',
                icon: 'heroicons_outline:globe-alt',
                // link: '/website/list',
                children: [
                    {
                        title: 'เกี่ยวกับเรา',
                        type: 'basic',
                        icon: 'heroicons_outline:shield-check',
                        link: '/about/list',
                    },
                    {
                        title: 'ครองใจคนไทย',
                        type: 'basic',
                        icon: 'heroicons_outline:user-group',
                        link: '/thailife/list',
                    },

                    {
                        title: 'เราเชี่ยวชาญด้านการขนส่ง',
                        type: 'basic',
                        icon: 'heroicons_outline:truck',
                        link: '/myfastcargo/list',
                    },
                ],
            },
            {
                title: 'ภาพแบนเนอร์',
                type: 'basic',
                icon: 'heroicons_outline:fast-forward',
                link: '/banner/list',
            },
            {
                title: 'บริการหลัก',
                type: 'basic',
                icon: 'heroicons_outline:star',
                link: '/main/list',
            },
            {
                title: 'บริการรอง',
                type: 'basic',
                icon: 'heroicons_outline:sparkles',
                link: '/services/list',
            },
            {
                title: '6 ขั้นตอน',
                type: 'basic',
                icon: 'heroicons_outline:cube',
                link: '/step/list',
            },
            {
                title: 'แหล่งสั่งซื้อ',
                type: 'basic',
                icon: 'heroicons_outline:emoji-happy',
                link: '/client/list',
            },
            {
                title: 'คำถามพบบ่อย',
                type: 'basic',
                icon: 'heroicons_outline:exclamation-circle',
                link: '/faq/list',
            },
            {
                title: 'ข่าวสารและกิจกรรม',
                type: 'basic',
                icon: 'heroicons_outline:bell',
                link: '/announcement/list',
            },
            {
                title: 'ช่องทางติดต่อ',
                type: 'basic',
                icon: 'heroicons_outline:location-marker',
                link: '/contact/list',
            },
            {
                title: 'วีดีโอแนะนำและสถิติ',
                type: 'basic',
                icon: 'heroicons_outline:video-camera',
                link: '/video/list',
            },
            {
                title: 'อัลบั้มรูปภาพ',
                type: 'basic',
                icon: 'heroicons_outline:camera',
                link: '/gallery/list',
            },
            {
                title: 'รีวิวลูกค้า',
                type: 'basic',
                icon: 'heroicons_outline:pencil',
                link: '/review/list',
            },
            {
                title: 'สาขา',
                type: 'basic',
                icon: 'heroicons_outline:map',
                link: '/branch/list',
=======
                id: 'user',
                title: 'ผู้ดูแลระบบ',
                type: 'basic',
                icon: 'heroicons_outline:users',
                link: '/user/list',
            },
            {
                id: 'vendor',
                title: 'ผู้ผลิตสินค้าและวัตถุดิบ',
                type: 'basic',
                icon: 'heroicons_outline:clipboard-check',
                link: '/vendor/list',
            },
            {
                id: 'unemployed',
                title: 'ผู้หางาน',
                type: 'basic',
                icon: 'heroicons_outline:clipboard-check',
                link: 'user_job/list',
            },
            {
                id: 'master_data',
                title: 'โครงสร้างข้อมูล',
                type: 'collapsable',
                icon: 'heroicons_outline:cube',
                // link: 'position/list'
                children: [
                    {
                        id: 'logistic-services.list',
                        title: 'บริการด้านขนส่ง',
                        type: 'basic',
                        link: '/logistic-services/list',
                    },
                    {
                        id: 'scrap-services.list',
                        title: 'บริการด้านรับซื้อของเสีย',
                        type: 'basic',
                        link: '/scrap-services/list',
                    },
                    {
                        id: 'purchase-services.list',
                        title: 'บริการด้านจำหน่ายสินค้า',
                        type: 'basic',
                        link: '/purchase-services/list',
                    },
                ],
            },
        ],
    },
    {
        id: 'ceo',
        title: 'CEO',
        subtitle: 'เมนูสำหรับเจ้าของกิจการดูผลสรุป',
        type: 'group',
        icon: 'heroicons_outline:cube',
        // hidden: function () {
        //     return AuthService._marketingRole; // must be a boolean value
        // },
        children: [
            {
                title: 'สรุปผลการดำเนินการ',
                type: 'basic',
                icon: 'heroicons_outline:chart-bar',
                link: 'dashboard/home',
            },
            {
                title: 'พนักงานของคุณ',
                type: 'basic',
                icon: 'heroicons_outline:users',
                link: 'employee/list',
            },
        ],
    },
    {
        id: 'partner',
        title: 'All Partner',
        subtitle: 'เมนูสำหรับผู้ผลิตสินค้าและวัตถุดิบใช้งาน',
        type: 'group',
        icon: 'heroicons_outline:cube',
        // hidden: function () {
        //     return AuthService._marketingRole; // must be a boolean value
        // },
        children: [
            {
                title: 'สินค้าและบริการของคุณ',
                type: 'basic',
                icon: 'heroicons_outline:cube',
                link: 'product/list',
            },
            {
                title: 'คำสั่งซื้อที่แมทต์กับคุณ',
                type: 'basic',
                icon: 'heroicons_outline:speakerphone',
                link: 'order/list',
            },
        ],
    },
    {
        id: 'module',
        title: 'Allzerve Serivces',
        subtitle: 'เมนูสำหรับลูกค้าใช้งาน',
        type: 'group',
        icon: 'heroicons_outline:cube',
        // hidden: function () {
        //     return AuthService._marketingRole; // must be a boolean value
        // },
        children: [
            {
                id: 'module.search',
                title: 'ค้นหาข้อมูล',
                type: 'basic',
                icon: 'heroicons_outline:search-circle',
                link: '/logistic/search',
            },
            {
                id: 'module.purchase',
                title: 'จัดซื้อ',
                type: 'basic',
                icon: 'heroicons_outline:shopping-cart',
                link: '/purchase/list',
            },

            {
                id: 'module.logistic',
                title: 'ขนส่ง',
                type: 'basic',
                icon: 'heroicons_outline:truck',
                link: '/logistic/list',
            },
            {
                id: 'module.scrap',
                title: 'ของเสีย',
                type: 'basic',
                icon: 'heroicons_outline:trash',
                link: '/scrap/list',
            },

            {
                id: 'module.recruitment',
                title: 'สรรหาพนักงาน',
                type: 'basic',
                icon: 'heroicons_outline:user-group',
                link: '/recruit/list',
            },

            {
                id: 'module.office',
                title: 'ไมโครซอฟท์',
                type: 'basic',
                icon: 'heroicons_outline:book-open',
                link: '/office/list',
>>>>>>> a2c3955d2c4536e655870b1bb58ddaf5da1db342
            },
        ],
    },
    {
<<<<<<< HEAD
        title: 'จัดการส่วนตัว',
        subtitle: 'เมนูหลักการใช้งานสำหรับจัดการส่วนตัว',
=======
        id: 'account',
        title: 'Account',
        subtitle: 'เมนูสำหรับผู้ใช้งาน',
>>>>>>> a2c3955d2c4536e655870b1bb58ddaf5da1db342
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                title: 'โปรไฟล์สมาขิก',
                type: 'basic',
<<<<<<< HEAD
                link: '/profile',
                icon: 'heroicons_outline:pencil-alt',
            },
            {
=======
                icon: 'heroicons_outline:identification',
                link: '/office/list',
            },
            {
                id: 'signout',
>>>>>>> a2c3955d2c4536e655870b1bb58ddaf5da1db342
                title: 'ออกจากระบบ',
                type: 'basic',
                icon: 'heroicons_solid:logout',
                link: '/sign-out',
<<<<<<< HEAD
                icon: 'heroicons_outline:lock-closed',
            },
        ],
    },
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'Dashboards',
        tooltip: 'Dashboards',
        type: 'aside',
        icon: 'heroicons_outline:home',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'apps',
        title: 'Apps',
        tooltip: 'Apps',
        type: 'aside',
        icon: 'heroicons_outline:qrcode',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'pages',
        title: 'Pages',
        tooltip: 'Pages',
        type: 'aside',
        icon: 'heroicons_outline:document-duplicate',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'user-interface',
        title: 'UI',
        tooltip: 'UI',
        type: 'aside',
        icon: 'heroicons_outline:collection',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'navigation-features',
        title: 'Navigation',
        tooltip: 'Navigation',
        type: 'aside',
        icon: 'heroicons_outline:menu',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'DASHBOARDS',
        type: 'group',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'apps',
        title: 'APPS',
        type: 'group',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'others',
        title: 'OTHERS',
        type: 'group',
    },
    {
        id: 'pages',
        title: 'Pages',
        type: 'aside',
        icon: 'heroicons_outline:document-duplicate',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'user-interface',
        title: 'User Interface',
        type: 'aside',
        icon: 'heroicons_outline:collection',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'navigation-features',
        title: 'Navigation Features',
        type: 'aside',
        icon: 'heroicons_outline:menu',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'Dashboards',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'apps',
        title: 'Apps',
        type: 'group',
        icon: 'heroicons_outline:qrcode',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'pages',
        title: 'Pages',
        type: 'group',
        icon: 'heroicons_outline:document-duplicate',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'user-interface',
        title: 'UI',
        type: 'group',
        icon: 'heroicons_outline:collection',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'navigation-features',
        title: 'Misc',
        type: 'group',
        icon: 'heroicons_outline:menu',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
=======
            },
        ],
    },
>>>>>>> a2c3955d2c4536e655870b1bb58ddaf5da1db342
];
