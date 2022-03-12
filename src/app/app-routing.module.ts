import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./shared/components";

import { HomeRoutingModule } from "./modules/home/home-routing.module";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "opponent-summary",
    loadChildren: () =>
      import("./modules/opponent-summary/opponent-summary.module").then(
        (m) => m.OpponentSummaryModule
      ),
  },
  {
    path: "yellow",
    loadChildren: () =>
      import("./modules/yellow/yellow.module").then((m) => m.YellowModule),
  },
  {
    path: "green",
    loadChildren: () =>
      import("./modules/green/green.module").then((m) => m.GreenModule),
  },
  {
    path: "orange",
    loadChildren: () =>
      import("./modules/orange/orange.module").then((m) => m.OrangeModule),
  },
  {
    path: "red",
    loadChildren: () =>
      import("./modules/red/red.module").then((m) => m.RedModule),
  },
  {
    path: "goal",
    loadChildren: () =>
      import("./modules/goal/goal.module").then((m) => m.GoalModule),
  },
  {
    path: "backed",
    loadChildren: () =>
      import("./modules/backed/backed.module").then((m) => m.BackedModule),
  },
  {
    path: "personnel",
    loadChildren: () =>
      import("./modules/personnel/personnel.module").then(
        (m) => m.PersonnelModule
      ),
  },
  {
    path: "defensive",
    loadChildren: () =>
      import("./modules/defensive/defensive.module").then(
        (m) => m.DefensiveModule
      ),
  },
  {
    path: "linebackers",
    loadChildren: () =>
      import("./modules/linebackers/linebackers.module").then(
        (m) => m.LinebackersModule
      ),
  },
  {
    path: "secondary",
    loadChildren: () =>
      import("./modules/secondary/secondary.module").then(
        (m) => m.SecondaryModule
      ),
  },
  {
    path: "alignment",
    loadChildren: () =>
      import("./modules/alignment/alignment.module").then(
        (m) => m.AlignmentModule
      ),
  },
  { path: 'ten', loadChildren: () => import('./modules/ten/ten.module').then(m => m.TenModule) },
  { path: 'eleven', loadChildren: () => import('./modules/eleven/eleven.module').then(m => m.ElevenModule) },
  { path: 'twenty', loadChildren: () => import('./modules/twenty/twenty.module').then(m => m.TwentyModule) },
  { path: 'twelve', loadChildren: () => import('./modules/twelve/twelve.module').then(m => m.TwelveModule) },
  { path: 'twentyOne', loadChildren: () => import('./modules/twenty-one/twenty-one.module').then(m => m.TwentyOneModule) },
  { path: 'empty', loadChildren: () => import('./modules/empty/empty.module').then(m => m.EmptyModule) },
  { path: 'thirtyTwo', loadChildren: () => import('./modules/thirty-two/thirty-two.module').then(m => m.ThirtyTwoModule) },
  { path: 'gamePlan', loadChildren: () => import('./modules/game-plan/game-plan.module').then(m => m.GamePlanModule) },
  { path: 'gameFlow', loadChildren: () => import('./modules/game-flow/game-flow.module').then(m => m.GameFlowModule) },
  { path: 'keyRuns', loadChildren: () => import('./modules/key-runs/key-runs.module').then(m => m.KeyRunsModule) },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" }),
    HomeRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
