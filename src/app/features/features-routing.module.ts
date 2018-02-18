import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", loadChildren: "./home/home.module#HomeModule" },
  { path: "about", loadChildren: "./about/about.module#AboutModule" },
  { path: "blog", loadChildren: "./blog/blog.module#BlogModule" },
  { path: "faq", loadChildren: "./faq/faq.module#FaqModule" },
  { path: "skills", loadChildren: "./skills/skills.module#SkillsModule" },
  { path: "projects", loadChildren: "./projects/projects.module#ProjectsModule" },
  { path: "experience", loadChildren: "./experience/experience.module#ExperienceModule" },
  { path: "awards", loadChildren: "./awards/awards.module#AwardsModule" },
  { path: "education", loadChildren: "./education/education.module#EducationModule" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {}
