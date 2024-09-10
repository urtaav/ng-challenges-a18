import { AfterContentInit, ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { DialogData, DialogStrategyType } from "./dialog-strategy";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DialogService } from "./dialog.service";

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: '',
    template: '',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseDialogComponent implements AfterContentInit {
    readonly #data = inject<DialogData>(MAT_DIALOG_DATA);
    protected readonly dialogService = inject(DialogService);

    ngAfterContentInit(): void {
        this.initStrategy();
    }

    private initStrategy() {
        const strategyType: DialogStrategyType = this.#data?.strategy?.type
            ? this.#data?.strategy?.type
            : 'default';

        this.dialogService.setStrategy(strategyType);
    }
}