import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { ServersService } from "./servers.service";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"],
})
export class ServersComponent implements OnInit {
  servers: { id: number; name: string; status: string };

  constructor(
    private route: ActivatedRoute,
    private serversService: ServersService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params["id"];
    this.servers = this.serversService.getServer(id);
    this.route.params.subscribe((params: Params) => {
      this.servers = this.serversService.getServer(+params["id"]);
    });
  }

  onReload() {
    //this.paramsSubscription.unsubscribe();
    this.router.navigate(["servers"], { relativeTo: this.route });
  }
}
