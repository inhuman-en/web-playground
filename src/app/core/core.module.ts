import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthModule } from '../auth';

@NgModule({
    imports: [CommonModule, BrowserModule, BrowserAnimationsModule, AuthModule],
    declarations: [],
})
export class CoreModule {}
