
import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';


@Injectable() export class AlertService {
    private subject = new Subject<any>();
    constructor() { }
    confirmThis(message: string, yes, no, siFn: () => void, noFn: () => void) {
        this.setConfirmation(message, yes, no, siFn, noFn);
        console.log('worked')
    }
    setConfirmation(message: string, yes, no, siFn: () => void, noFn: () => void) {
        const that = this;
        this.subject.next({
            type: 'confirm',
            text: message,
            yes: yes,
            no: no,
            siFn:
                function () {
                    that.subject.next(); // this will close the modal
                    siFn();
                },
            noFn: function () {
                that.subject.next();
                noFn();
            }
        });

    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
