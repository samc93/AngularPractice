import { Component } from '@angular/core';

@Component({

    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls:['./server.component.css']

})

export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'Offline';

    constructor() {

        setInterval(()=>{
            this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
        },1000)
       

    }

    getColor(){
        return this.serverStatus === 'Offline' ? 'red' : 'green';
    }
}

