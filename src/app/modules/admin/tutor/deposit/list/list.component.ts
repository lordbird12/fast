import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {
    debounceTime,
    map,
    merge,
    Observable,
    Subject,
    switchMap,
    takeUntil,
} from 'rxjs';
import { fuseAnimations } from '@fuse/animations';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'environments/environment';
import { AuthService } from 'app/core/auth/auth.service';
import { sortBy, startCase } from 'lodash-es';
<<<<<<< HEAD:src/app/modules/admin/tutor/deposit/list/list.component.ts
import { AssetType, DataPosition, PositionPagination } from '../page.types';
import { Service } from '../page.service';
import { MatTableDataSource } from '@angular/material/table';
=======
import { AssetType, BranchPagination, DataBranch } from '../page.types';
import { Service } from '../page.service';
import { NewComponent } from '../new/new.component';
import { MatTableDataSource } from '@angular/material/table';
import { DataTableDirective } from 'angular-datatables';
>>>>>>> a2c3955d2c4536e655870b1bb58ddaf5da1db342:src/app/modules/admin/modules/recruit/list/list.component.ts
@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    animations: fuseAnimations,
})
<<<<<<< HEAD:src/app/modules/admin/tutor/deposit/list/list.component.ts

export class ListComponent implements OnInit, AfterViewInit, OnDestroy {
    dtOptions: DataTables.Settings = {};
    dataRow: any = []
    @ViewChild(MatPaginator) _paginator: MatPaginator;
    @ViewChild(MatSort) private _sort: MatSort;
    displayedColumns: string[] = ['id', 'name', 'status', 'create_by', 'created_at', 'actions'];
    dataSource: MatTableDataSource<DataPosition>;
=======
export class ListComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild(DataTableDirective)
    dtElement!: DataTableDirective;
    public dtOptions: DataTables.Settings = {};
    public dataRow: any[];
    public dataGrid: any[];

    // dataRow: any = []
    @ViewChild(MatPaginator) _paginator: MatPaginator;
    @ViewChild(MatSort) private _sort: MatSort;
    displayedColumns: string[] = [
        'id',
        'name',
        'status',
        'create_by',
        'created_at',
        'actions',
    ];
    dataSource: MatTableDataSource<DataBranch>;
>>>>>>> a2c3955d2c4536e655870b1bb58ddaf5da1db342:src/app/modules/admin/modules/recruit/list/list.component.ts

    products$: Observable<any>;
    asset_types: AssetType[];
    flashMessage: 'success' | 'error' | null = null;
    isLoading: boolean = false;
    searchInputControl: FormControl = new FormControl();
    selectedProduct: any | null = null;
    filterForm: FormGroup;
    tagsEditMode: boolean = false;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    env_path = environment.API_URL;

    me: any | null;
    get roleType(): string {
        return 'marketing';
    }

    supplierId: string | null;
<<<<<<< HEAD:src/app/modules/admin/tutor/deposit/list/list.component.ts
    pagination: PositionPagination;
=======
    pagination: BranchPagination;

    totalSummary: any;
    totalRows: any;
    totalRowSummary: any;
>>>>>>> a2c3955d2c4536e655870b1bb58ddaf5da1db342:src/app/modules/admin/modules/recruit/list/list.component.ts

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _fuseConfirmationService: FuseConfirmationService,
        private _formBuilder: FormBuilder,
        // private _Service: PermissionService,
        private _Service: Service,
        private _matDialog: MatDialog,
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _authService: AuthService
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.loadTable();
<<<<<<< HEAD:src/app/modules/admin/tutor/deposit/list/list.component.ts

    }

    pages = { current_page: 1, last_page: 1, per_page: 10, begin: 0 }
=======
    }

    pages = { current_page: 1, last_page: 1, per_page: 10, begin: 0 };
>>>>>>> a2c3955d2c4536e655870b1bb58ddaf5da1db342:src/app/modules/admin/modules/recruit/list/list.component.ts
    loadTable(): void {
        const that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 100,
            serverSide: true,
            processing: true,
            responsive: true,
            language: {
                url: 'https://cdn.datatables.net/plug-ins/1.11.3/i18n/th.json',
            },
            ajax: (dataTablesParameters: any, callback) => {
<<<<<<< HEAD:src/app/modules/admin/tutor/deposit/list/list.component.ts
                dataTablesParameters.status = null;
                that._Service.getPage(dataTablesParameters).subscribe((resp) => {
                    this.dataRow = resp
                    // console.log(this.dataRow, 'datarow')
                    this.pages.current_page = resp.meta.currentPage;
                    this.pages.last_page = resp.meta.totalPages;
                    this.pages.per_page = resp.meta.itemsPerPage;
                    if (resp.current_page > 1) {
                        this.pages.begin = resp.meta.itemsPerPage * resp.meta.currentPage - 1;
                    } else {
                        this.pages.begin = 0;
                    }
                    callback({
                        recordsTotal: resp.meta.totalPages,
                        recordsFiltered: resp.meta.totalPages,
                        data: []
=======
                const user = JSON.parse(localStorage.getItem('user')) || null;
                // console.log(user);
                // dataTablesParameters.status = 'Yes';
                dataTablesParameters.company = user.id;
                that._Service
                    .getPage(dataTablesParameters)
                    .subscribe((resp) => {
                        this.dataRow = resp.data;
                        this.totalRowSummary = this.totalPriceTable();
                        this.pages.current_page = resp.current_page;
                        this.pages.last_page = resp.last_page;
                        this.pages.per_page = resp.per_page;
                        if (resp.current_page > 1) {
                            this.pages.begin =
                                resp.per_page * resp.current_page - 1;
                        } else {
                            this.pages.begin = 0;
                        }

                        callback({
                            recordsTotal: resp.total,
                            recordsFiltered: resp.total,
                            data: [],
                        });
                        this._changeDetectorRef.markForCheck();
>>>>>>> a2c3955d2c4536e655870b1bb58ddaf5da1db342:src/app/modules/admin/modules/recruit/list/list.component.ts
                    });
            },
            columns: [
                { data: 'id' },
<<<<<<< HEAD:src/app/modules/admin/tutor/deposit/list/list.component.ts
                { data: 'date' },
                { data: 'startTime' },
                { data: 'endTime' },
                { data: 'limit' },
                { data: 'finish' },
=======
                { data: 'position' },
                { data: 'salary' },
                { data: 'exp' },
                { data: 'degree' },
                { data: 'qty' },
                { data: 'user_job_interestings' },
>>>>>>> a2c3955d2c4536e655870b1bb58ddaf5da1db342:src/app/modules/admin/modules/recruit/list/list.component.ts
                { data: 'status' },
                { data: 'create_by' },
                { data: 'created_at' },
                { data: 'actice', orderable: false },
            ],
        };
    }

    totalPriceTable() {
        let total = 0;
        for (let data of this.dataRow) {
            total += Number(data.summary);
        }
        return total;
    }

    totalPrice() {
        let total = 0;
        for (let data of this.dataGrid) {
            total += Number(data.summary);
        }
        return total;
    }

    totalTrans() {
        let total = 0;
        for (let data of this.dataGrid) {
            total += data.today.length;
        }
        return total;
    }


    /**
     * After view init
     */
<<<<<<< HEAD:src/app/modules/admin/tutor/deposit/list/list.component.ts
    ngAfterViewInit(): void {

    }
=======
    ngAfterViewInit(): void {}
>>>>>>> a2c3955d2c4536e655870b1bb58ddaf5da1db342:src/app/modules/admin/modules/recruit/list/list.component.ts

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    resetForm(): void {
        this.filterForm.reset();
        this.filterForm.get('asset_type').setValue('default');
        this._changeDetectorRef.markForCheck();
    }

    /**
     * Close the details
     */
    closeDetails(): void {
        this.selectedProduct = null;
    }

    /**
     * Show flash message
     */
    showFlashMessage(type: 'success' | 'error'): void {
        // Show the message
        this.flashMessage = type;

        // Mark for check
        this._changeDetectorRef.markForCheck();

        // Hide it after 3 seconds
        setTimeout(() => {
            this.flashMessage = null;

            // Mark for check
            this._changeDetectorRef.markForCheck();
        }, 3000);
    }

<<<<<<< HEAD:src/app/modules/admin/tutor/deposit/list/list.component.ts
  
    edit(id: string): void {
        this._router.navigate(['round/edit/' + id]);
    }

=======
    edit(Id: string): void {
        this._router.navigate(['recruit/edit/' + Id]);
    }

    viewDetail(Id: string): void {
        this._router.navigate(['recruit/detail/' + Id]);
    }
>>>>>>> a2c3955d2c4536e655870b1bb58ddaf5da1db342:src/app/modules/admin/modules/recruit/list/list.component.ts

    textStatus(status: string): string {
        return startCase(status);
    }
}
