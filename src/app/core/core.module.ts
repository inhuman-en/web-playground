import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AuthModule } from '../auth';

@NgModule({
    imports: [CommonModule, BrowserModule, BrowserAnimationsModule, AuthModule, HttpClientModule],
    declarations: [],
})
export class CoreModule {}
