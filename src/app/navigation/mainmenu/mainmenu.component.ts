import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { of, Observable } from 'rxjs';

import { MatTreeFlatDataSource, MatTreeFlattener, FlatTreeControl } from '../../material';

class MenuNode {
    children: MenuNode[];
    itemName: string;
    link: any;
    icon: string;
}

class MenuFlatNode {
    itemName: string;
    link: any;
    icon: string;
    level: number;
    expandable: boolean;
}

@Component({
    selector: 'wpl-mainmenu',
    templateUrl: './mainmenu.component.html',
    styleUrls: ['./mainmenu.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class MainmenuComponent implements OnInit {
    treeControl: FlatTreeControl<MenuFlatNode>;

    treeFlattener: MatTreeFlattener<MenuNode, MenuFlatNode>;

    dataSource: MatTreeFlatDataSource<MenuNode, MenuFlatNode>;

    sidenavExpanded = false;

    constructor() {
        this.treeFlattener = new MatTreeFlattener(
            this.transformer,
            this._getLevel,
            this._isExpandable,
            this._getChildren
        );
        this.treeControl = new FlatTreeControl<MenuFlatNode>(
            this._getLevel,
            this._isExpandable
        );
        this.dataSource = new MatTreeFlatDataSource(
            this.treeControl,
            this.treeFlattener
            );
    }

    ngOnInit() {
        this.dataSource.data = [
            {
                itemName: 'Dashboard',
                link: 'dashboard',
                icon: 'dashboard',
                children: []
            },
            {
                itemName: 'Angular',
                link: '',
                icon: 'spellcheck',
                children: [
                    {
                        itemName: 'Change detection',
                        link: '',
                        icon: '',
                        children: []
                    },
                    {
                        itemName: 'HTTP Interceptors',
                        link: '',
                        icon: '',
                        children: []
                    },
                    {
                        itemName: 'Reactive forms',
                        link: '',
                        icon: '',
                        children: []
                    }
                ]
            }
        ];
    }

    toggleSidenav() {
        this.sidenavExpanded = !this.sidenavExpanded;
    }

    transformer(node: MenuNode, level: number): MenuFlatNode {
        const flatNode: MenuFlatNode = new MenuFlatNode();

        flatNode.itemName = node.itemName;
        flatNode.link = node.link;
        flatNode.level = level;
        flatNode.icon = node.icon;
        flatNode.expandable = !!node.children.length;
        return flatNode;
    }

    hasChild (_: number, _nodeData: MenuFlatNode) {
        return _nodeData.expandable;
    }

    private _getLevel(node: MenuFlatNode) {
        return node.level;
    }

    private _isExpandable(node: MenuFlatNode) {
        return node.expandable;
    }

    private _getChildren (node: MenuNode): Observable<MenuNode[]> {
        return of(node.children);
    }
}
